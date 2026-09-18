#!/usr/bin/env node
/**
 * tools/verify-content.mjs
 *
 * Arnés de verificación para packages/content/: evalúa el DX "viejo" tal
 * como lo construye index.html (misma técnica documentada en CLAUDE.md:
 * eval() del bloque de datos), importa el DX "nuevo" desde
 * packages/content/src/index.ts, y los compara EN PROFUNDIDAD, campo por
 * campo, ficha por ficha, en el mismo orden.
 *
 * Para valores planos usa igualdad estricta recursiva. Para funciones
 * (calcForm.compute, y por extensión cS/cB/cN/cF/altFor si se tocan) compara
 * Function.prototype.toString() normalizado (espacios colapsados), porque el
 * texto fuente debe sobrevivir intacto al viaje por index.html -> eval ->
 * extract-content.mjs -> TypeScript -> Node (type-stripping).
 *
 * Sale con código 0 solo si son IDÉNTICOS. Si no, imprime la lista exacta de
 * diferencias (ruta + valores) y sale con código 1. Nunca declara éxito a
 * medias.
 *
 * Uso: node tools/verify-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INDEX_HTML = path.join(ROOT, "index.html");
const CONTENT_INDEX = path.join(ROOT, "packages", "content", "src", "index.ts");

const UI_MARKER = "/* ================= TINTERNO UI v7 ================= */";

function fail(msg) {
  console.error(`[verify-content] ERROR: ${msg}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. DX viejo: evaluado directo desde index.html
// ---------------------------------------------------------------------------

function loadOldDX() {
  if (!fs.existsSync(INDEX_HTML)) fail(`No existe ${INDEX_HTML}`);
  const html = fs.readFileSync(INDEX_HTML, "utf8");
  const styleEnd = html.indexOf("</style>");
  if (styleEnd === -1) fail("No se encontró </style> en index.html");
  const scriptTagIdx = html.indexOf("<script>", styleEnd);
  if (scriptTagIdx === -1) fail("No se encontró <script> después de </style>");
  const start = scriptTagIdx + "<script>".length;
  const end = html.indexOf(UI_MARKER);
  if (end === -1) fail(`No se encontró el marcador de la UI: ${UI_MARKER}`);
  const dataSrc = html.slice(start, end);
  // eslint-disable-next-line no-eval
  const { DX, GUIDES, ALT } = eval(dataSrc + ";({DX,GUIDES,ALT})");
  return { DX, GUIDES, ALT };
}

// ---------------------------------------------------------------------------
// 2. DX nuevo: importado desde packages/content
// ---------------------------------------------------------------------------

async function loadNewDX() {
  if (!fs.existsSync(CONTENT_INDEX)) {
    fail(`No existe ${CONTENT_INDEX}. Corre primero: node tools/extract-content.mjs`);
  }
  let mod;
  try {
    mod = await import(pathToFileURL(CONTENT_INDEX).href);
  } catch (err) {
    fail(
      `No se pudo importar packages/content/src/index.ts.\n` +
        `Este script necesita Node con soporte nativo de type-stripping para .ts (Node >= 22.6, sin flags en versiones recientes).\n` +
        `Detalle: ${err.stack || err}`
    );
  }
  return { DX: mod.DX, GUIDES: mod.GUIDES, ALT: mod.ALT };
}

// ---------------------------------------------------------------------------
// comparación profunda
// ---------------------------------------------------------------------------

function normalizeFn(src) {
  return src.replace(/\s+/g, " ").trim();
}

function describe(v) {
  if (typeof v === "function") return "[function]";
  if (v === undefined) return "undefined";
  try {
    const s = JSON.stringify(v);
    return s.length > 120 ? s.slice(0, 117) + "..." : s;
  } catch {
    return String(v);
  }
}

function diffValue(p, a, b, diffs) {
  const aIsFn = typeof a === "function";
  const bIsFn = typeof b === "function";
  if (aIsFn || bIsFn) {
    if (!aIsFn || !bIsFn) {
      diffs.push(`${p}: uno es función y el otro no (old=${typeof a}, new=${typeof b})`);
      return;
    }
    const na = normalizeFn(a.toString());
    const nb = normalizeFn(b.toString());
    if (na !== nb) {
      diffs.push(`${p}: compute() difiere tras normalizar espacios.\n    OLD: ${na}\n    NEW: ${nb}`);
    }
    return;
  }

  if (Object.is(a, b)) return;

  if (a === null || b === null || a === undefined || b === undefined) {
    diffs.push(`${p}: old=${describe(a)} new=${describe(b)}`);
    return;
  }

  const ta = typeof a;
  const tb = typeof b;
  if (ta !== tb) {
    diffs.push(`${p}: tipos distintos (old=${ta}:${describe(a)}, new=${tb}:${describe(b)})`);
    return;
  }

  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      diffs.push(`${p}: uno es arreglo y el otro no (old=${describe(a)}, new=${describe(b)})`);
      return;
    }
    if (a.length !== b.length) {
      diffs.push(`${p}: longitud de arreglo distinta (old=${a.length}, new=${b.length})`);
    }
    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i++) diffValue(`${p}[${i}]`, a[i], b[i], diffs);
    return;
  }

  if (ta === "object") {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
      const inA = Object.prototype.hasOwnProperty.call(a, k);
      const inB = Object.prototype.hasOwnProperty.call(b, k);
      if (inA && !inB) {
        diffs.push(`${p}.${k}: presente en old (${describe(a[k])}) pero ausente en new`);
        continue;
      }
      if (!inA && inB) {
        diffs.push(`${p}.${k}: ausente en old pero presente en new (${describe(b[k])})`);
        continue;
      }
      diffValue(`${p}.${k}`, a[k], b[k], diffs);
    }
    return;
  }

  // primitivos que no pasaron Object.is (ej. números o strings distintos)
  diffs.push(`${p}: old=${describe(a)} new=${describe(b)}`);
}

function summarize(diffs, total) {
  const badIndices = new Set();
  for (const d of diffs) {
    const m = d.match(/^DX\[(\d+)\]/);
    if (m) badIndices.add(Number(m[1]));
  }
  return { badCount: badIndices.size, okCount: total - badIndices.size };
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  const { DX: oldDX, GUIDES: oldGUIDES, ALT: oldALT } = loadOldDX();
  const { DX: newDX, GUIDES: newGUIDES, ALT: newALT } = await loadNewDX();

  if (!Array.isArray(newDX)) {
    fail("packages/content no exporta un DX válido (¿corriste node tools/extract-content.mjs?)");
  }

  console.log(`[verify-content] DX viejo (index.html): ${oldDX.length} fichas.`);
  console.log(`[verify-content] DX nuevo (packages/content): ${newDX.length} fichas.`);

  const diffs = [];
  diffValue("DX", oldDX, newDX, diffs);

  const guideDiffs = [];
  if (oldGUIDES && newGUIDES) diffValue("GUIDES", oldGUIDES, newGUIDES, guideDiffs);
  const altDiffs = [];
  if (oldALT && newALT) diffValue("ALT", oldALT, newALT, altDiffs);

  const total = Math.max(oldDX.length, newDX.length);
  const { badCount, okCount } = summarize(diffs, total);

  console.log("");
  if (diffs.length === 0) {
    console.log(`[verify-content] ${okCount}/${total} fichas idénticas.`);
  } else {
    console.log(`[verify-content] ${okCount}/${total} fichas idénticas. ${badCount} ficha(s) con diferencias:`);
    console.log("");
    for (const d of diffs) console.log("  - " + d);
  }

  if (guideDiffs.length || altDiffs.length) {
    console.log("");
    console.log(`[verify-content] Además, diferencias en los auxiliares GUIDES/ALT (bonus de packages/content/src/guides.ts, no forman parte de DX):`);
    for (const d of guideDiffs) console.log("  - GUIDES " + d);
    for (const d of altDiffs) console.log("  - ALT " + d);
  }

  console.log("");
  const ok = diffs.length === 0 && guideDiffs.length === 0 && altDiffs.length === 0 && oldDX.length === newDX.length;
  if (ok) {
    console.log(`[verify-content] OK: ${total}/${total} fichas idénticas (DX, GUIDES y ALT). packages/content es un espejo exacto de index.html.`);
    process.exit(0);
  } else {
    console.log("[verify-content] FALLÓ: packages/content NO es un espejo exacto de index.html. Ver diferencias arriba.");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[verify-content] Error inesperado:", err.stack || err);
  process.exit(1);
});
