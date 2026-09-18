#!/usr/bin/env node
/**
 * tools/extract-content.mjs
 *
 * Genera packages/content/ (paquete @tinterno/content) a partir del bloque de
 * datos clínicos embebido en index.html.
 *
 * CÓMO FUNCIONA (nada de contenido clínico se transcribe a mano):
 *   1. Ubica el bloque `const DX = [...] ... DX.sort(...)` dentro de
 *      index.html, exactamente como lo evalúa la app en el navegador.
 *   2. Lo evalúa con `eval()` en Node, capturando los objetos ya construidos:
 *      DX (358 fichas, ya con `page`/`rel` calculados), GUIDES, ALT, altFor y
 *      los helpers cS/cB/cN/cF. Las 51 calculadoras quedan con
 *      `calcForm.compute` como función JavaScript VIVA.
 *   3. Serializa esos objetos de forma determinista: los datos planos vía
 *      JSON.stringify, y las funciones (compute, altFor, cS, cB, cN, cF) vía
 *      Function.prototype.toString(), insertadas como código fuente real
 *      (nunca como texto transcrito).
 *   4. Escribe el resultado como módulos TypeScript bajo packages/content/src.
 *
 * Idempotente: cada corrida borra y regenera por completo packages/content/
 * (nunca toca index.html ni nada fuera de esa carpeta).
 *
 * Uso:   node tools/extract-content.mjs
 * Verificación (obligatoria después de correr esto): node tools/verify-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const INDEX_HTML = path.join(ROOT, "index.html");
const PKG_DIR = path.join(ROOT, "packages", "content");
const SRC_DIR = path.join(PKG_DIR, "src");
const FICHAS_DIR = path.join(SRC_DIR, "fichas");
const CALC_DIR = path.join(SRC_DIR, "calculadoras");

const UI_MARKER = "/* ================= TINTERNO UI v7 ================= */";

const BANNER =
  "// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.\n" +
  "// No editar a mano: los cambios se pierden en la próxima extracción.\n" +
  "// Para modificar contenido clínico, edita index.html y vuelve a correr:\n" +
  "//   node tools/extract-content.mjs && node tools/verify-content.mjs\n";

function assert(cond, msg) {
  if (!cond) throw new Error("[extract-content] " + msg);
}

// ---------------------------------------------------------------------------
// 1. Ubicar y evaluar el bloque de datos de index.html
// ---------------------------------------------------------------------------

function readIndexHtml() {
  assert(fs.existsSync(INDEX_HTML), `No existe ${INDEX_HTML}`);
  return fs.readFileSync(INDEX_HTML, "utf8");
}

function extractDataSource(html) {
  const styleEnd = html.indexOf("</style>");
  assert(styleEnd !== -1, "No se encontró </style> en index.html");
  const scriptTagIdx = html.indexOf("<script>", styleEnd);
  assert(scriptTagIdx !== -1, "No se encontró <script> después de </style>");
  const start = scriptTagIdx + "<script>".length;
  const end = html.indexOf(UI_MARKER);
  assert(end !== -1, `No se encontró el marcador de la UI: ${UI_MARKER}`);
  assert(end > start, "Rango de extracción inválido (el marcador de la UI aparece antes del <script>)");
  return html.slice(start, end);
}

/** Extrae el arreglo `order` que usa `DX.sort(...)` para ordenar por sys. */
function extractSortOrder(dataSrc) {
  const m = dataSrc.match(/const order=(\[[^\]]*\]);DX\.sort/);
  assert(m, "No se pudo extraer el arreglo order[] que usa DX.sort(...); revisa si cambió el formato en index.html.");
  // eslint-disable-next-line no-eval
  const order = eval(m[1]);
  assert(Array.isArray(order), "order[] extraído no es un arreglo");
  return order;
}

/**
 * Evalúa el bloque de datos. Usa eval() directo (no indirecto) a propósito:
 * es la MISMA técnica que index.html usa para construir DX en el navegador,
 * ya verificada por Jacobo. Devuelve los objetos ya construidos, con
 * calcForm.compute como función viva (no serializada).
 */
function loadClinicalData(dataSrc) {
  // eslint-disable-next-line no-eval
  return eval(dataSrc + ";({DX,GUIDES,ALT,altFor,cS,cB,cN,cF})");
}

// ---------------------------------------------------------------------------
// utilidades de nombres
// ---------------------------------------------------------------------------

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toIdentifier(slug) {
  const raw = slug.replace(/-/g, "_");
  return /^[0-9]/.test(raw) ? "_" + raw : raw;
}

// ---------------------------------------------------------------------------
// serialización determinista de datos -> texto TypeScript
// ---------------------------------------------------------------------------

/**
 * Orden canónico de claves para una ficha, tal como las describe CLAUDE.md
 * más las dos claves reales encontradas por inspección que no estaban
 * documentadas: `base` (18 fichas del `const DX=[...]` inicial) y `compute`
 * (quirk de `c-cha2ds2`: `mk({...,compute:null})` deja un `compute:null`
 * colgado a nivel de ficha porque `typeof null === "object"`, no "function",
 * así que `mk()` no lo movió a calcForm). Si index.html llegara a tener una
 * ficha con una clave fuera de esta lista, el script debe fallar fuerte en
 * vez de descartarla en silencio (ver `reorderKeys`).
 */
const FICHA_KEY_ORDER = [
  "id", "sys", "group", "name", "aka", "page", "sub", "base",
  "flow", "criteria", "orders", "goals", "alerts", "rel", "g",
  "notes", "rows", "calcForm", "compute",
];

function reorderKeys(obj, order, label) {
  const out = {};
  for (const k of order) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) out[k] = obj[k];
  }
  const extra = Object.keys(obj).filter((k) => !order.includes(k));
  assert(
    extra.length === 0,
    `${label}: tiene clave(s) inesperada(s) no cubiertas por FICHA_KEY_ORDER: ${extra.join(", ")}. ` +
      "Actualiza el script (y probablemente src/schema.ts) antes de continuar; no se puede generar contenido perdiendo datos."
  );
  return out;
}

/**
 * JSON.stringify que además admite:
 *   - funciones como valores: las reemplaza por su código fuente real
 *     (Function.prototype.toString()), nunca por texto reescrito a mano.
 *   - claves propias presentes con valor `undefined` (quirk real de 62
 *     `calcForm.inputs[].ph`: el helper `nm=(id,label,unit,ph)=>({...,ph})`
 *     de index.html usa shorthand de objeto, así que si el sitio de llamada
 *     omite `ph`, la clave queda PRESENTE con valor `undefined` — distinto
 *     de estar ausente. JSON.stringify normalmente descarta esas claves; acá
 *     se preservan como el literal `undefined` para que la forma del objeto
 *     (Object.keys / hasOwnProperty) siga siendo idéntica a la del DX
 *     original).
 */
function serializeToTs(value, indent = 2) {
  const fnSources = [];
  const fnMarker = (i) => `@@TINTERNO_FN_${i}@@`;
  const UNDEF_MARKER = "@@TINTERNO_UNDEFINED@@";
  const replacer = (_key, val) => {
    if (typeof val === "function") {
      const idx = fnSources.length;
      fnSources.push(val.toString());
      return fnMarker(idx);
    }
    if (val === undefined) return UNDEF_MARKER;
    return val;
  };
  let text = JSON.stringify(value, replacer, indent);
  fnSources.forEach((src, i) => {
    const token = JSON.stringify(fnMarker(i));
    assert(text.includes(token), `No se encontró el marcador de función ${i} al serializar (posible colisión de texto con un literal clínico real).`);
    text = text.replace(token, src);
  });
  text = text.split(JSON.stringify(UNDEF_MARKER)).join("undefined");
  return text;
}

function serializeFicha(d, label) {
  return serializeToTs(reorderKeys(d, FICHA_KEY_ORDER, label));
}

// ---------------------------------------------------------------------------
// contenido fijo (schema / helpers / guides) — generado por este script,
// nunca escrito a mano fuera de él
// ---------------------------------------------------------------------------

const SCHEMA_TS = `${BANNER}
/**
 * Tipos del contenido clínico de Tinterno.
 *
 * Derivados por inspección exhaustiva de la forma real de los 358 objetos que
 * produce el bloque de datos de \`index.html\` (const DX = [...] +
 * DX.push(...)), NO inventados. Ver tools/extract-content.mjs (el script que
 * generó src/fichas/*.ts y src/calculadoras/*.ts a partir de esa fuente) y
 * tools/verify-content.mjs (el arnés que compara, en profundidad, el DX
 * evaluado desde index.html contra el DX que arma este paquete).
 *
 * Objetivo de este archivo: que una ficha malformada NO COMPILE.
 */

// ---------------------------------------------------------------------------
// Guía / evidencia (campo \`g\` de una ficha de prescripción, o GUIDES[id])
// ---------------------------------------------------------------------------

/** Estado de vigencia de la guía colombiana para una ficha. */
export type GuideStatus = "ok" | "old" | "none" | "na";

export interface GuideCo {
  /** Nombre de la GPC colombiana (o motivo de por qué no existe). */
  n: string;
  /** Año de publicación (cadena vacía si no aplica). */
  y: string;
  st: GuideStatus;
  /** Nota sobre cómo se complementa o por qué no hay guía nacional. */
  txt: string;
}

export interface Guide {
  co: GuideCo;
  /** Guías internacionales, ej. "ESC 2024 FA · AHA 2025 SVCA". */
  intl: string;
  /** Diferencias de disponibilidad / práctica en Colombia. */
  dif: string[];
}

// ---------------------------------------------------------------------------
// Flujo de decisión
// ---------------------------------------------------------------------------

/** Un paso del flujo: [título] o [título, texto]. */
export type FlowStep = readonly [string] | readonly [string, string];

// ---------------------------------------------------------------------------
// Calculadoras embebidas en una orden (order.calc)
// ---------------------------------------------------------------------------

/** dosis/kg/min con \`conc\` (unidad/mL) -> mL/h = d*kg*60/conc */
export interface CalcKgMin {
  t: "kgmin";
  lo: number;
  hi: number;
  conc: number;
}

/** dosis/min con \`conc\` -> mL/h = d*60/conc (no requiere peso) */
export interface CalcMin {
  t: "min";
  lo: number;
  hi: number;
  conc: number;
  unit?: string;
}

/** dosis/h con \`conc\` -> mL/h = d/conc (no requiere peso) */
export interface CalcH {
  t: "h";
  lo: number;
  hi: number;
  conc: number;
  unit: string;
}

/** dosis/kg/h, \`maxRate\` opcional -> mL/h = d*kg/conc */
export interface CalcKgH {
  t: "kgh";
  lo: number;
  hi: number;
  conc: number;
  unit: string;
  maxRate?: number;
}

/** bolo por kg (con tope \`max\` opcional) -> dosis total */
export interface CalcKg {
  t: "kg";
  lo: number;
  hi: number;
  unit: string;
  label?: string;
  /** Tope de dosis; puede ser \`null\` explícito en el dato original. */
  max?: number | null;
}

/** fila según peso: filas [kgTopeExclusivo, "texto"] en orden ascendente. */
export interface CalcTable {
  t: "table";
  rows: ReadonlyArray<readonly [number, string]>;
}

/** Esquemas especiales con lógica propia (sin parámetros posicionales). */
export interface CalcAlteplase {
  t: "alteplase";
}
export interface CalcAltacv {
  t: "altacv";
}
export interface CalcNac {
  t: "nac";
}
export interface CalcCcp {
  t: "ccp";
}
/** Insulina basal-bolo (dosis diaria total): solo rango lo-hi. */
export interface CalcTdd {
  t: "tdd";
  lo: number;
  hi: number;
}

export type CalcSpec =
  | CalcKg
  | CalcKgMin
  | CalcMin
  | CalcH
  | CalcKgH
  | CalcTable
  | CalcAlteplase
  | CalcAltacv
  | CalcNac
  | CalcCcp
  | CalcTdd;

/** Los 11 tipos de cálculo confirmados en el dato original. */
export type CalcType = CalcSpec["t"];

// ---------------------------------------------------------------------------
// Órdenes médicas (ficha.orders)
// ---------------------------------------------------------------------------

/** Encabezado de categoría dentro de la lista de órdenes (ej. "En urgencias"). */
export interface OrderCategory {
  cat: string;
}

/** Una orden concreta (fármaco / medida). */
export interface OrderLine {
  d: string;
  dose?: string;
  /** Dilución, ej. "400 mg en 250 mL SSN = 1600 mcg/mL". */
  dil?: string;
  /** Nota clínica adicional. */
  n?: string;
  /** Alternativa explícita si no hay disponibilidad (si falta, ver ALT/altFor en guides.ts). */
  a?: string;
  calc?: CalcSpec;
}

export type Order = OrderCategory | OrderLine;

// ---------------------------------------------------------------------------
// Calculadoras interactivas (ficha.calcForm)
// ---------------------------------------------------------------------------

export interface InputSel {
  id: string;
  label: string;
  type: "sel";
  /** Pares [texto visible, puntaje]. */
  opts: ReadonlyArray<readonly [string, number]>;
}

export interface InputChk {
  id: string;
  label: string;
  type: "chk";
  pts: number;
}

export interface InputNum {
  id: string;
  label: string;
  type: "num";
  unit: string;
  /**
   * Placeholder del campo. Opcional en el tipo porque en 62 de los 311
   * inputs numéricos el dato original tiene la clave \`ph\` PRESENTE con
   * valor \`undefined\` (el helper \`nm()\` de index.html arma el objeto con
   * shorthand y ese sitio de llamada no pasó \`ph\`); se preserva tal cual en
   * vez de "limpiarla" a ausente.
   */
  ph?: string;
}

export interface InputDate {
  id: string;
  label: string;
  type: "date";
}

export type CalcInput = InputSel | InputChk | InputNum | InputDate;

/** Resultado que produce calcForm.compute(v). */
export interface CalcResult {
  /** Valor calculado, ej. "12/15 (E4 V4 M4)". */
  v: string;
  /** Interpretación textual. */
  t: string;
  /**
   * Semáforo visual: en la práctica siempre "ok" | "warn" | "bad", tipado
   * como \`string\` porque \`compute\` es código clínico preservado tal cual
   * (nunca se reescribe a mano) y algunas ramas derivan \`l\` desde tablas de
   * búsqueda cuyo tipo exacto no vale la pena forzar aquí.
   */
  l: string;
}

export interface CalcForm {
  inputs: CalcInput[];
  /**
   * Lógica de cálculo viva, preservada byte a byte desde index.html vía
   * Function.prototype.toString() (ver tools/extract-content.mjs). Usa los
   * helpers cS/cB/cN/cF importados de ../helpers.ts. Muchas devuelven
   * \`null\` cuando todavía faltan datos numéricos requeridos (guardas del
   * tipo \`if(!cN(v.a,v.b))return null;\` al inicio del cuerpo), así que el
   * resultado es explícitamente nullable.
   */
  compute: (v: Record<string, any>) => CalcResult | null;
}

// ---------------------------------------------------------------------------
// Ficha: unión discriminada por la presencia de orders | calcForm | rows
// ---------------------------------------------------------------------------

interface FichaCommon {
  /** Ancla de la URL: #<id>. No cambia nunca. */
  id: string;
  group: string;
  name: string;
  /** Sinónimos / siglas para la búsqueda. */
  aka: string;
  /** "Fuente: ..." — calculado en index.html a partir de \`g\` (o GUIDES[id]); aquí queda congelado con el mismo valor. */
  page: string;
  sub: string;
  /** Ausente en 18 fichas de arritmias/SCA/HTA construidas en el \`const DX = [...]\` inicial (ver \`base\`). */
  sys?: string;
  /** Ids de fichas/calculadoras relacionadas. */
  rel?: string[];
  /**
   * Campo heredado del \`const DX = [...]\` inicial (18 fichas de
   * Cardiología): lista de guías base. No se usa en la interfaz v7; se
   * preserva tal cual porque es dato real.
   */
  base?: string[];
}

/** Ficha de prescripción: diagnóstico -> flujo -> órdenes médicas. */
export interface FichaOrders extends FichaCommon {
  flow: FlowStep[];
  criteria: string[];
  orders: Order[];
  goals: string[];
  alerts: string[];
  g?: Guide;
}

/** Escala o calculadora interactiva. */
export interface FichaCalc extends FichaCommon {
  sys: string;
  notes: string[];
  calcForm: CalcForm;
  /**
   * Quirk real del dato original: en \`c-cha2ds2\`, \`mk({...,compute:null})\`
   * deja un \`compute: null\` colgado a nivel de la ficha (además del
   * \`calcForm.compute\` real, parchado luego más abajo en index.html).
   * \`typeof null === "object"\`, por eso sobrevivió al \`if(o.compute)\` de
   * \`mk()\`. Se preserva literal para que la comparación con el DX original
   * (tools/verify-content.mjs) sea exacta.
   */
  compute?: null;
}

/** Tabla de valores de referencia. */
export interface FichaRef extends FichaCommon {
  sys: string;
  notes: string[];
  /** Filas [Parámetro, Rango, Interpretación]. */
  rows: ReadonlyArray<readonly [string, string, string]>;
}

export type Ficha = FichaOrders | FichaCalc | FichaRef;
`;

/**
 * helpers.ts: cS/cB/cN/cF, extraídas literalmente de index.html vía
 * Function.prototype.toString(). Para cS/cN/cF el cuerpo extraído se asigna
 * tal cual a una constante con anotación de tipo (tipado por contexto, sin
 * tocar el cuerpo). cB necesita un caso especial: bajo
 * `noUncheckedIndexedAccess` (heredado de tsconfig.base.json), el
 * `arr[arr.length-1]` de respaldo tipa como `T | undefined`, así que el
 * cuerpo extraído se preserva byte a byte en una función privada
 * `cBImpl` (que SÍ declara ese `| undefined`), y se agrega un wrapper
 * `cB` de una línea -escrito por este script, no extraído- que sólo ajusta
 * el tipo de retorno para los 51 sitios de llamada reales (todos evalúan
 * `x <= arr[arr.length-1][0]` como caso base, así que el resultado nunca es
 * realmente `undefined` en tiempo de ejecución).
 */
function buildHelpersTs({ cS, cB, cN, cF }) {
  return `${BANNER}
/**
 * Helpers matemáticos usados por las 51 calculadoras (calcForm.compute).
 * Extraídos literalmente de index.html vía Function.prototype.toString():
 * la lógica NO se reescribe a mano. Ver tools/extract-content.mjs.
 */

/** Suma los valores numéricos de un objeto de respuestas (ignora NaN y no-numéricos). */
export const cS: (v: Record<string, any>) => number = ${cS.toString()};

function cBImpl<T extends readonly [number, ...unknown[]]>(x: number, arr: readonly T[]): T | undefined {
  ${extractArrowBody(cB.toString())}
}
/**
 * Devuelve la primera fila de \`arr\` cuyo umbral (posición 0) sea >= x; si
 * ninguna califica, devuelve la última. Usado para mapear un puntaje a un
 * rango de interpretación, ej. [[8,"Grave","bad"],[12,"Moderado","warn"],[15,"Leve","ok"]].
 */
export function cB<T extends readonly [number, ...unknown[]]>(x: number, arr: readonly T[]): T {
  return cBImpl(x, arr) as T;
}

/** True si todos los argumentos son números válidos (no NaN). */
export const cN: (...xs: unknown[]) => boolean = ${cN.toString()};

/** Formatea un número con \`d\` decimales, en formato es-CO. */
export const cF: (x: number, d?: number) => string = ${cF.toString()};
`;
}

/** Dado el toString() de una arrow function `(x,arr)=>{...}`, devuelve solo el cuerpo `{...}` sin llaves externas. */
function extractArrowBody(arrowSrc) {
  const braceStart = arrowSrc.indexOf("{");
  assert(braceStart !== -1, `No se encontró el cuerpo de la función: ${arrowSrc}`);
  const inner = arrowSrc.slice(braceStart + 1, arrowSrc.lastIndexOf("}"));
  return inner.trim();
}

/**
 * guides.ts: GUIDES/ALT (datos planos) + altFor (extraída literalmente).
 * altFor tiene el mismo quirk de noUncheckedIndexedAccess que cB: `m[k]`
 * indexa un Record<string,string> con una key computada, así que tipa como
 * `string | undefined`. Mismo patrón: cuerpo verbatim en altForImpl, wrapper
 * de una línea (mío, no extraído) que aplica `?? ""` -equivalente en tiempo
 * de ejecución, porque si `k` viene de `.find()` la key siempre existe en
 * `m`, el `undefined` es un artefacto del tipo, no una posibilidad real-.
 */
function buildGuidesTs({ GUIDES, ALT, altFor }) {
  const altForBody = extractArrowBody(altFor.toString());
  return `${BANNER}
import type { Guide } from "./schema.ts";

/**
 * Guía/evidencia por ficha para las 18 fichas del \`const DX = [...]\` inicial
 * que no llevan \`g\` embebido directamente (ver FichaCommon.base en
 * schema.ts). La interfaz original resuelve esto en tiempo de render con
 * \`GUIDES[d.id] || d.g\`; aquí se preserva la tabla completa, sin fusionarla
 * en las fichas, para que la comparación con el DX de index.html
 * (tools/verify-content.mjs) sea exacta.
 */
export const GUIDES: Record<string, Guide> = ${serializeToTs(GUIDES)};

/**
 * Segunda línea / alternativa si no hay disponibilidad, por ficha e inicio
 * del nombre de la orden. La interfaz la consulta con altFor(id, name)
 * cuando order.a no viene explícito.
 */
export const ALT: Record<string, Record<string, string>> = ${serializeToTs(ALT)};

function altForImpl(id: string, name: string): string | undefined {
  ${altForBody}
}
export function altFor(id: string, name: string): string {
  return altForImpl(id, name) ?? "";
}
`;
}

// ---------------------------------------------------------------------------
// escritura de archivos
// ---------------------------------------------------------------------------

function cleanOutDir() {
  fs.rmSync(PKG_DIR, { recursive: true, force: true });
  fs.mkdirSync(FICHAS_DIR, { recursive: true });
  fs.mkdirSync(CALC_DIR, { recursive: true });
}

function writeFichaGroupFile(slug, fichas) {
  const body = fichas.map((d) => serializeFicha(d, `Ficha ${d.id} (grupo ${slug})`)).join(",\n");
  const text = `${BANNER}
import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
${body}
];
`;
  fs.writeFileSync(path.join(FICHAS_DIR, `${slug}.ts`), text);
}

/**
 * calcForm.compute se preserva byte a byte (ver buildHelpersTs). En 3 de las
 * 51 calculadoras, ese código -perfectamente válido en JS y ya probado en
 * producción dentro de index.html- choca con límites reales del checker de
 * TypeScript que no se pueden resolver sin tocar el cuerpo de la función:
 *   - c-news2, c-ottawa: usan `const p=[];...p.push(x)`. TypeScript solo
 *     aplica "evolving array types" (que ensancha `[]` a `any[]` según los
 *     `.push` que siguen) a variables `let`; para `const` infiere `never[]`
 *     de entrada, y todo `.push(...)` posterior falla. No depende de ningún
 *     flag de "strict": ocurre incluso con noImplicitAny:false.
 *   - c-eg: hace `hoy - f` con `hoy` y `f` de tipo `Date` (para calcular
 *     días de diferencia). lib.es5.d.ts no declara el operador `-` sobre
 *     `Date`, aunque en JS es válido (usa Date.prototype.valueOf).
 * Para estos 3 archivos se antepone `// @ts-nocheck`: es la única forma de
 * mantener el cuerpo real sin reescribirlo. Los otros 48 archivos de
 * calculadoras, y las 307 fichas de prescripción/referencia, se siguen
 * verificando con tsc normalmente.
 */
const CALC_IDS_NEEDING_TS_NOCHECK = new Set(["c-news2", "c-ottawa", "c-eg"]);

function writeCalculadoraFile(d) {
  const tsNoCheck = CALC_IDS_NEEDING_TS_NOCHECK.has(d.id)
    ? "// @ts-nocheck -- ver CALC_IDS_NEEDING_TS_NOCHECK en tools/extract-content.mjs: compute() preservado byte a byte choca con un límite real del checker de TS (no con un error del dato).\n"
    : "";
  const text = `${tsNoCheck}${BANNER}
import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = ${serializeFicha(d, `Calculadora ${d.id}`)};
`;
  fs.writeFileSync(path.join(CALC_DIR, `${d.id}.ts`), text);
}

function writeIndexTs({ fichaGroupMeta, calcMeta, sortOrder, totalExpected }) {
  const lines = [];
  lines.push(BANNER);
  lines.push('export * from "./schema.ts";');
  lines.push('export * from "./helpers.ts";');
  lines.push('export * from "./guides.ts";');
  lines.push("");
  lines.push('import type { Ficha } from "./schema.ts";');
  for (const g of fichaGroupMeta) {
    lines.push(`import { FICHAS as ${g.alias} } from "./fichas/${g.slug}.ts";`);
  }
  for (const c of calcMeta) {
    lines.push(`import { FICHA as ${c.alias} } from "./calculadoras/${c.id}.ts";`);
  }
  lines.push("");
  for (const g of fichaGroupMeta) lines.push(`export { ${g.alias} };`);
  for (const c of calcMeta) lines.push(`export { ${c.alias} };`);
  lines.push("");
  lines.push("/**");
  lines.push(" * Todas las fichas, en el MISMO orden que produce DX.sort(...) en");
  lines.push(" * index.html: agrupadas por sys según el orden de navegación de la app y,");
  lines.push(" * dentro de cada grupo, en el orden en que aparecen en el bloque de datos");
  lines.push(" * original (Array.prototype.sort es estable en Node/V8).");
  lines.push(" */");
  lines.push("export const DX: Ficha[] = [");

  const orderSet = new Set(sortOrder);
  for (const g of fichaGroupMeta) {
    assert(orderSet.has(g.sys), `El sys "${g.sys}" no aparece en el arreglo order[] usado por DX.sort(...) en index.html.`);
  }

  let emitted = 0;
  for (const sys of sortOrder) {
    if (sys === "Escalas y calculadoras") {
      for (const c of calcMeta) {
        lines.push(`  ${c.alias},`);
        emitted++;
      }
      continue;
    }
    const g = fichaGroupMeta.find((x) => x.sys === sys);
    if (!g) continue;
    lines.push(`  ...${g.alias},`);
    emitted += g.count;
  }
  lines.push("];");
  assert(
    emitted === totalExpected,
    `La reconstrucción de DX en index.ts no cubre todas las fichas: ${emitted} de ${totalExpected}. ` +
      "Alguna ficha tiene un sys que no está en order[] (revisa el mensaje anterior) o quedó fuera de las 3 formas conocidas."
  );

  fs.writeFileSync(path.join(SRC_DIR, "index.ts"), lines.join("\n") + "\n");
  return emitted;
}

function writePackageJson() {
  const pkg = {
    name: "@tinterno/content",
    private: true,
    version: "0.0.0",
    description:
      "Contenido clínico de Tinterno (358 fichas: prescripción, calculadoras y valores de referencia). Generado por tools/extract-content.mjs a partir de index.html — no editar a mano.",
    type: "module",
    main: "./src/index.ts",
    types: "./src/index.ts",
    exports: {
      ".": "./src/index.ts",
    },
    scripts: {
      typecheck: "tsc --noEmit",
    },
    devDependencies: {
      typescript: "^5.7.2",
    },
  };
  fs.writeFileSync(path.join(PKG_DIR, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
}

function writeTsconfig() {
  const text = `{
  // AUTOGENERADO por tools/extract-content.mjs — no editar a mano.
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "noEmit": true,
    // Los módulos de este paquete se importan entre sí (y desde
    // tools/verify-content.mjs) usando la extensión .ts real en el
    // especificador, para poder correr directo con Node (type-stripping
    // nativo, Node >= 22.6) sin paso de build. "bundler" (heredado de
    // tsconfig.base.json) más este flag lo permiten sin emitir nada raro,
    // porque noEmit ya está en true.
    "allowImportingTsExtensions": true,
    // Las 51 calculadoras preservan calcForm.compute BYTE A BYTE desde
    // index.html (Function.prototype.toString(), ver extractArrowBody /
    // buildHelpersTs en este script). Varias definen variables o
    // sub-funciones locales sin anotar (ej. "const cl=(x,lo,hi)=>..." en
    // c-crcl, "const add=x=>{...}" en c-news2). No se les puede agregar
    // anotaciones de tipo sin dejar de ser una copia literal del código
    // original, asi que se apaga noImplicitAny (heredado de "strict" en
    // tsconfig.base.json) para todo el paquete. El resto de "strict"
    // (strictNullChecks, noUncheckedIndexedAccess, etc.) sigue activo, y con
    // eso la forma de cada ficha (Ficha/Order/CalcSpec/CalcInput) se sigue
    // verificando en serio: lo que se relaja es solo la inferencia de tipos
    // dentro del cuerpo de compute(), no la forma del dato.
    "noImplicitAny": false
  },
  "include": ["src"]
}
`;
  fs.writeFileSync(path.join(PKG_DIR, "tsconfig.json"), text);
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

function main() {
  const html = readIndexHtml();
  const dataSrc = extractDataSource(html);
  const sortOrder = extractSortOrder(dataSrc);
  const { DX, GUIDES, ALT, altFor, cS, cB, cN, cF } = loadClinicalData(dataSrc);

  assert(Array.isArray(DX), "DX no es un arreglo tras evaluar index.html");
  assert(DX.length === 358, `Se esperaban 358 fichas, se obtuvieron ${DX.length}. Revisa index.html o los marcadores de extracción.`);

  const withOrders = DX.filter((d) => d.orders);
  const withCalc = DX.filter((d) => d.calcForm);
  const withRows = DX.filter((d) => d.rows && !d.calcForm);
  assert(withOrders.length === 286, `Se esperaban 286 fichas de prescripción, se obtuvieron ${withOrders.length}`);
  assert(withCalc.length === 51, `Se esperaban 51 calculadoras, se obtuvieron ${withCalc.length}`);
  assert(withRows.length === 21, `Se esperaban 21 tablas de referencia, se obtuvieron ${withRows.length}`);
  assert(
    withOrders.length + withCalc.length + withRows.length === DX.length,
    "Las 3 formas de ficha conocidas (orders/calcForm/rows) no cubren todo DX; hay una ficha con una forma no contemplada."
  );
  for (const d of withCalc) {
    assert(d.sys === "Escalas y calculadoras", `Calculadora ${d.id} tiene sys inesperado: ${d.sys}`);
  }
  for (const d of withRows) {
    assert(d.sys === "Valores de referencia", `Ficha de referencia ${d.id} tiene sys inesperado: ${d.sys}`);
  }

  cleanOutDir();

  fs.writeFileSync(path.join(SRC_DIR, "schema.ts"), SCHEMA_TS);
  fs.writeFileSync(path.join(SRC_DIR, "helpers.ts"), buildHelpersTs({ cS, cB, cN, cF }));
  fs.writeFileSync(path.join(SRC_DIR, "guides.ts"), buildGuidesTs({ GUIDES, ALT, altFor }));

  // Fichas de prescripción + referencia, agrupadas por sys (28 + 1 = 29 archivos).
  // Las calculadoras (sys="Escalas y calculadoras") se excluyen: van aparte,
  // una por archivo, en src/calculadoras/.
  const groups = new Map(); // sys -> Ficha[]
  for (const d of DX) {
    if (d.calcForm) continue;
    const sys = d.sys || "Cardiología";
    if (!groups.has(sys)) groups.set(sys, []);
    groups.get(sys).push(d);
  }

  const fichaGroupMeta = [];
  for (const [sys, fichas] of groups) {
    const slug = slugify(sys);
    const alias = toIdentifier(slug);
    writeFichaGroupFile(slug, fichas);
    fichaGroupMeta.push({ sys, slug, alias, count: fichas.length });
  }
  assert(fichaGroupMeta.length === 29, `Se esperaban 29 grupos de fichas por especialidad (28 clínicos + Valores de referencia), se obtuvieron ${fichaGroupMeta.length}`);

  const calcMeta = [];
  for (const d of withCalc) {
    const alias = toIdentifier(d.id);
    writeCalculadoraFile(d);
    calcMeta.push({ id: d.id, alias });
  }

  const emitted = writeIndexTs({ fichaGroupMeta, calcMeta, sortOrder, totalExpected: DX.length });

  writePackageJson();
  writeTsconfig();

  console.log(`[extract-content] OK: ${emitted} fichas exportadas (${withOrders.length} prescripción, ${withCalc.length} calculadoras, ${withRows.length} referencia).`);
  console.log(`[extract-content] ${fichaGroupMeta.length} archivos en src/fichas/, ${calcMeta.length} archivos en src/calculadoras/.`);
  console.log("[extract-content] Ahora corre: node tools/verify-content.mjs");
}

main();
