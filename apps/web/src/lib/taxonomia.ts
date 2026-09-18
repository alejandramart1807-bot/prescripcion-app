import { DX } from "@tinterno/content";
import type { Ficha, Order, OrderLine } from "@tinterno/content";

/**
 * Taxonomía de la interfaz v7 (metadatos de navegación, sin duplicar datos
 * clínicos): macrocategorías, subcategorías y contextos.
 *
 * Portado tal cual de `index.html` raíz (líneas ~3744-3790, capa "TINTERNO
 * UI v7"). NO es contenido clínico — son solo reglas de clasificación para
 * agrupar y contar fichas. Ver CLAUDE.md §6 "Capa de interfaz v7".
 */

export interface Macro {
  k: string;
  n: string;
}

export const MAC: Macro[] = [
  { k: "cardio", n: "Cardiovascular" },
  { k: "resp", n: "Respiratorio" },
  { k: "neuro", n: "Neurológico" },
  { k: "renal", n: "Renal y electrolitos" },
  { k: "dig", n: "Digestivo y hepatología" },
  { k: "endo", n: "Endocrino y metabólico" },
  { k: "infecto", n: "Infectología" },
  { k: "hemo", n: "Hematología y oncología" },
  { k: "cx", n: "Cirugía y trauma" },
  { k: "mujer", n: "Mujer y embarazo" },
  { k: "ped", n: "Pediatría" },
  { k: "mental", n: "Salud mental" },
  { k: "piel", n: "Piel y tejidos blandos" },
  { k: "otras", n: "Otras especialidades" },
];

const SYSMAC: Record<string, string> = {
  Cardiología: "cardio",
  Neumología: "resp",
  Neurología: "neuro",
  Nefrología: "renal",
  "Gastroenterología y hepatología": "dig",
  Endocrinología: "endo",
  Infectología: "infecto",
  Profilaxis: "infecto",
  Hematología: "hemo",
  Oncología: "hemo",
  "Cirugía general y trauma": "cx",
  "Ortopedia y reumatología": "cx",
  "Urología (Uroclin)": "cx",
  Coloproctología: "cx",
  Otorrinolaringología: "cx",
  Oftalmología: "cx",
  Ginecología: "mujer",
  Obstetricia: "mujer",
  Pediatría: "ped",
  Psiquiatría: "mental",
  "Salud mental (hospital psiquiátrico)": "mental",
  Dermatología: "piel",
  "Causas externas": "otras",
  Analgesia: "otras",
  Anestesiología: "otras",
  "Admisión del paciente grave": "otras",
};

const MIMAC: Record<string, string> = {
  Cardiovascular: "cardio",
  Respiratorio: "resp",
  Digestivo: "dig",
  Endocrino: "endo",
  "Nefro y LEV": "renal",
  Hematología: "hemo",
  Infectología: "infecto",
  Reumatología: "cx",
};

const CRITMAC: Record<string, string> = {
  Sepsis: "infecto",
  "Vía aérea y ventilación": "resp",
  "Paro cardiorrespiratorio": "cardio",
  "Guías rápidas": "otras",
};

const CALCMAC: Record<string, string> = {
  Neurología: "neuro",
  "Salud mental": "mental",
  Cardiovascular: "cardio",
  "Respiratorio e infecciones": "resp",
  Digestivo: "dig",
  "Riñón y electrolitos": "renal",
};

const CALCID: Record<string, string> = {
  "c-apgar": "ped",
  "c-westley": "ped",
  "c-bishop": "mujer",
  "c-eg": "mujer",
  "c-ipss": "cx",
  "c-ottawa": "cx",
  "c-padua": "cardio",
  "c-lrinec": "piel",
  "c-alvarado": "cx",
  "c-centor": "resp",
  "c-holliday": "ped",
  "c-parkland": "cx",
};

/** Sistema original de la ficha ("Cardiología" cuando falta, igual que en index.html). */
export const sysOf = (d: Ficha): string => d.sys || "Cardiología";

function esOrdenLinea(o: Order): o is OrderLine {
  return "d" in o;
}

/** Macrocategoría (`MAC.k`) de una ficha, o `null` si no aplica (tablas de referencia, o calculadoras sin mapeo). */
export function macroOf(d: Ficha): string | null {
  const s = sysOf(d);
  if ("rows" in d) return null;
  if ("calcForm" in d) return CALCID[d.id] || CALCMAC[d.group] || null;
  if (s === "Medicina interna (piso y consulta)") return MIMAC[d.group] || "otras";
  if (s === "Paciente crítico") return CRITMAC[d.group] || "otras";
  return SYSMAC[s] || "otras";
}

/** Subcategoría (normalmente el `sys`, con las mismas excepciones de la v7). */
export function subOf(d: Ficha): string {
  const s = sysOf(d);
  if ("calcForm" in d) return "Escalas y calculadoras";
  if (s === "Medicina interna (piso y consulta)") return "Medicina interna: piso y consulta";
  if (s === "Salud mental (hospital psiquiátrico)") return "Salud mental hospitalaria";
  if (s === "Causas externas") return "Toxicología y causas externas";
  if (s === "Admisión del paciente grave") return "Reanimación";
  return s;
}

export interface Ctx {
  k: string;
  n: string;
  d: string;
}

export const CTX: Ctx[] = [
  { k: "urgencias", n: "Urgencias", d: "Sala de urgencias y guardia" },
  { k: "hospital", n: "Hospitalización", d: "Piso, salud mental y posoperatorio" },
  { k: "consulta", n: "Consulta", d: "Consulta externa y egreso" },
  { k: "critico", n: "Paciente crítico", d: "Reanimación, sepsis y UCI" },
  { k: "calc", n: "Calculadoras", d: "Escalas y fórmulas" },
  { k: "ref", n: "Valores de referencia", d: "Laboratorio y signos" },
];

function categoriasOrden(d: Ficha): string[] {
  if (!("orders" in d)) return [];
  return d.orders.filter((o): o is Extract<Order, { cat: string }> => "cat" in o).map((o) => o.cat);
}

/** Contextos clínicos (`CTX.k`) donde aplica una ficha. */
export function ctxOf(d: Ficha): Set<string> {
  const s = sysOf(d);
  const out = new Set<string>();
  if ("calcForm" in d) {
    out.add("calc");
    return out;
  }
  if ("rows" in d) {
    out.add("ref");
    return out;
  }
  const c = categoriasOrden(d);
  const hasUrg = c.includes("En urgencias");
  const hasCasa = c.some((x) => /casa/i.test(x));
  const hasHosp = c.some((x) => /hospitaliz/i.test(x));
  if (s === "Paciente crítico" || s === "Admisión del paciente grave") out.add("critico");
  if (
    s === "Medicina interna (piso y consulta)" ||
    s === "Salud mental (hospital psiquiátrico)" ||
    s === "Anestesiología" ||
    hasHosp ||
    /posoperatorio|Hospitalarios/i.test(d.group)
  )
    out.add("hospital");
  if (
    /Consulta/i.test(d.group) ||
    c.some((x) => /Consulta externa/i.test(x)) ||
    (hasCasa && !hasUrg && s !== "Paciente crítico")
  )
    out.add("consulta");
  if (!["Medicina interna (piso y consulta)", "Salud mental (hospital psiquiátrico)", "Anestesiología"].includes(s))
    out.add("urgencias");
  return out;
}

/** ¿Tiene al menos una orden con dosis que depende del peso (excluye tipos "min"/"h", que no lo necesitan)? */
function dependeDelPeso(d: Ficha): boolean {
  if (!("orders" in d)) return false;
  return d.orders.some((o) => esOrdenLinea(o) && !!o.calc && !["min", "h"].includes(o.calc.t));
}

interface Tax {
  mac: string | null;
  sub: string;
  ctx: Set<string>;
  kg: boolean;
}

const TAX: Record<string, Tax> = {};
DX.forEach((d) => {
  TAX[d.id] = { mac: macroOf(d), sub: subOf(d), ctx: ctxOf(d), kg: dependeDelPeso(d) };
});

const tax = (id: string): Tax => TAX[id] ?? { mac: null, sub: "", ctx: new Set(), kg: false };

export const macName = (k: string | null): string => MAC.find((m) => m.k === k)?.n ?? "";
export const ctxName = (k: string): string =>
  k === "peso" ? "Prescripción por peso" : (CTX.find((c) => c.k === k)?.n ?? "");

export const subDe = (id: string): string => tax(id).sub;
export const macroDe = (id: string): string | null => tax(id).mac;

export const inMac = (k: string): Ficha[] => DX.filter((d) => tax(d.id).mac === k);
export const inCtx = (k: string): Ficha[] =>
  k === "peso" ? DX.filter((d) => tax(d.id).kg) : DX.filter((d) => tax(d.id).ctx.has(k));

/** Búsqueda por id, igual que `byId` en index.html. */
export const byId = (id: string): Ficha | undefined => DX.find((d) => d.id === id);

/* ---------- tipo de ficha (para distinguir en listados de búsqueda) ---------- */

export type Tipo = "ficha" | "calculadora" | "referencia";

export function tipoDe(d: Ficha): Tipo {
  if ("calcForm" in d) return "calculadora";
  if ("rows" in d) return "referencia";
  return "ficha";
}

export const TIPO_LABEL: Record<Tipo, string> = {
  ficha: "Ficha de prescripción",
  calculadora: "Calculadora",
  referencia: "Valores de referencia",
};

export const TIPO_LABEL_CORTA: Record<Tipo, string> = {
  ficha: "Ficha",
  calculadora: "Calculadora",
  referencia: "Referencia",
};

/** Sistema/especialidad a mostrar junto al tipo (igual criterio que `metaLine` en index.html). */
export function sistemaDe(d: Ficha): string {
  if ("calcForm" in d || "rows" in d) return d.group;
  return subOf(d);
}
