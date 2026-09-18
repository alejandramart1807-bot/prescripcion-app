import { DX } from "@tinterno/content";
import type { Ficha, Order, OrderLine } from "@tinterno/content";
import { macName, subDe, macroDe, sysOf } from "./taxonomia";

/**
 * Motor de búsqueda de Tinterno.
 *
 * Portado literalmente de `searchDX` en `index.html` raíz (capa "TINTERNO
 * UI v7", líneas ~3859-3871): normalización sin tildes, tabla de sinónimos
 * `SYN`, distancia de Levenshtein para tolerar errores de digitación
 * ("apendisitis" -> apendicitis), y coincidencias exactas ordenadas antes
 * que las aproximadas. NO se cambia el algoritmo de ranking — está
 * verificado en CLAUDE.md §7 (casos: "apendisitis", "enoxaparina" -> 15,
 * "IAM" resalta). Solo se adapta la fuente de datos (paquete
 * @tinterno/content en vez de la constante global DX del HTML) y la salida
 * de resaltado (partes para JSX en vez de HTML con <mark>).
 */

export const norm = (s: string): string =>
  String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

/** Sinónimos y siglas — tabla íntegra de index.html, sin editar. */
export const SYN: Record<string, string> = {
  iam: "infarto",
  sca: "coronario",
  hta: "hipertension",
  icc: "insuficiencia cardiaca",
  ic: "insuficiencia cardiaca",
  tb: "tuberculosis",
  tbc: "tuberculosis",
  dm: "diabetes",
  dm2: "diabetes",
  itu: "ivu",
  irc: "renal",
  erc: "renal",
  ira: "lesion renal",
  hvda: "hemorragia digestiva",
  tec: "tce",
  acv: "acv",
  ecv: "acv",
  ait: "transitorio",
  fa: "fibrilacion",
  tsv: "taquicardia",
  tv: "taquicardia",
  bav: "bloqueo",
  pcr: "paro",
  rcp: "paro",
  sdra: "ventilacion",
  vih: "vih",
  its: "transmision sexual",
  epi: "pelvica",
  hpp: "posparto",
  app: "pretermino",
  rpm: "membranas",
  dg: "gestacional",
  tca: "anorexia",
  tag: "ansiedad",
  toc: "obsesivo",
  tept: "postraumatico",
  snm: "neuroleptico",
  ce: "celulitis",
};

/** Distancia de Levenshtein acotada — idéntica a `lev()` en index.html. */
function lev(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const m = a.length;
  const n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur: number[] = [i];
    let best = i;
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j]! + 1, cur[j - 1]! + 1, prev[j - 1]! + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j]! < best) best = cur[j]!;
    }
    if (best > max) return max + 1;
    prev = cur;
  }
  return prev[n]!;
}

function esOrdenLinea(o: Order): o is OrderLine {
  return "d" in o;
}

function textoOrdenes(d: Ficha): string {
  if (!("orders" in d)) return "";
  return d.orders
    .map((o) => (esOrdenLinea(o) ? o.d : ""))
    .join(" ");
}

function textoFilas(d: Ficha): string {
  if (!("rows" in d)) return "";
  return d.rows.map((r) => r[0]).join(" ");
}

interface ItemIndice {
  d: Ficha;
  nameN: string;
  hay: string;
  words: string[];
}

/**
 * Índice construido una sola vez al cargar el módulo (igual que `buildIdx`
 * en index.html, que se ejecuta perezosamente en el primer `searchDX`; aquí
 * se hace en el import porque DX no cambia en tiempo de ejecución).
 */
const IDX: ItemIndice[] = DX.map((d) => {
  const nameN = norm(d.name);
  const hay = norm(
    [d.name, d.aka || "", d.group, sysOf(d), subDe(d.id), macName(macroDe(d.id)), textoOrdenes(d), textoFilas(d)].join(
      " ",
    ),
  );
  return { d, nameN, hay, words: [...new Set(hay.split(/[^a-z0-9ñ]+/).filter((w) => w.length > 2))] };
});

export interface ResultadoBusqueda {
  d: Ficha;
  /** Puntaje de relevancia (mayor = mejor). */
  s: number;
  /** true si el resultado solo calificó por coincidencia aproximada (Levenshtein). */
  f: boolean;
}

/** Busca sobre name/aka/group/sys (+ órdenes y filas). Exactas antes que aproximadas. Máx. 80 resultados. */
export function searchDX(q: string): ResultadoBusqueda[] {
  const toks = norm(q).split(/\s+/).filter(Boolean);
  const out: ResultadoBusqueda[] = [];
  for (const it of IDX) {
    let score = 0;
    let ok = true;
    let fuzzy = false;
    for (const t of toks) {
      const alt = SYN[t];
      let sc = 0;
      if (it.nameN.includes(t) || (alt && it.nameN.includes(alt))) sc = it.nameN.startsWith(t) ? 5 : 4;
      else if (it.hay.includes(t) || (alt && it.hay.includes(alt))) sc = 2;
      else if (t.length >= 4) {
        const mx = t.length >= 8 ? 2 : 1;
        if (it.words.some((w) => lev(w, t, mx) <= mx || (w.length > t.length && lev(w.slice(0, t.length), t, 1) <= 1))) {
          sc = 1;
          fuzzy = true;
        }
      }
      if (!sc) {
        ok = false;
        break;
      }
      score += sc;
    }
    if (ok) out.push({ s: score, d: it.d, f: fuzzy });
  }
  return out.sort((a, b) => Number(a.f) - Number(b.f) || b.s - a.s).slice(0, 80);
}

export interface ParteResaltada {
  texto: string;
  marca: boolean;
}

/**
 * Divide `txt` en partes resaltadas/no resaltadas según los tokens de `q`
 * (sin tildes, min. 2 caracteres) — misma lógica que `hl()` en index.html,
 * pero devuelve segmentos para renderizar en JSX en vez de HTML con
 * `<mark>` (evita `dangerouslySetInnerHTML`).
 */
export function partesResaltadas(txt: string, q: string): ParteResaltada[] {
  const toks = norm(q)
    .split(/\s+/)
    .filter((t) => t.length > 1);
  if (!toks.length) return [{ texto: txt, marca: false }];
  const n = norm(txt);
  const marcas: [number, number][] = [];
  toks.forEach((t) => {
    let i = n.indexOf(t);
    while (i > -1) {
      marcas.push([i, i + t.length]);
      i = n.indexOf(t, i + t.length);
    }
  });
  if (!marcas.length) return [{ texto: txt, marca: false }];
  marcas.sort((a, b) => a[0] - b[0]);
  const out: ParteResaltada[] = [];
  let p = 0;
  for (const [a, b] of marcas) {
    if (a < p) continue;
    if (a > p) out.push({ texto: txt.slice(p, a), marca: false });
    out.push({ texto: txt.slice(a, b), marca: true });
    p = b;
  }
  if (p < txt.length) out.push({ texto: txt.slice(p), marca: false });
  return out;
}

/* ---------- consulta pendiente compartida entre Inicio y Buscar ---------- */

/**
 * Igual que la variable módulo `SQ` de index.html: el buscador grande de la
 * portada navega a `#buscar` en cuanto se escribe la primera letra; esta
 * variable en memoria (no persistida, no sale del dispositivo) lleva el
 * texto ya tecleado para que la página de Buscar lo recoja al montar.
 */
let consultaPendiente = "";

export function fijarConsultaPendiente(q: string): void {
  consultaPendiente = q;
}

export function tomarConsultaPendiente(): string {
  const q = consultaPendiente;
  consultaPendiente = "";
  return q;
}
