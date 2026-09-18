// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

/**
 * Tipos del contenido clínico de Tinterno.
 *
 * Derivados por inspección exhaustiva de la forma real de los 358 objetos que
 * produce el bloque de datos de `index.html` (const DX = [...] +
 * DX.push(...)), NO inventados. Ver tools/extract-content.mjs (el script que
 * generó src/fichas/*.ts y src/calculadoras/*.ts a partir de esa fuente) y
 * tools/verify-content.mjs (el arnés que compara, en profundidad, el DX
 * evaluado desde index.html contra el DX que arma este paquete).
 *
 * Objetivo de este archivo: que una ficha malformada NO COMPILE.
 */

// ---------------------------------------------------------------------------
// Guía / evidencia (campo `g` de una ficha de prescripción, o GUIDES[id])
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

/** dosis/kg/min con `conc` (unidad/mL) -> mL/h = d*kg*60/conc */
export interface CalcKgMin {
  t: "kgmin";
  lo: number;
  hi: number;
  conc: number;
}

/** dosis/min con `conc` -> mL/h = d*60/conc (no requiere peso) */
export interface CalcMin {
  t: "min";
  lo: number;
  hi: number;
  conc: number;
  unit?: string;
}

/** dosis/h con `conc` -> mL/h = d/conc (no requiere peso) */
export interface CalcH {
  t: "h";
  lo: number;
  hi: number;
  conc: number;
  unit: string;
}

/** dosis/kg/h, `maxRate` opcional -> mL/h = d*kg/conc */
export interface CalcKgH {
  t: "kgh";
  lo: number;
  hi: number;
  conc: number;
  unit: string;
  maxRate?: number;
}

/** bolo por kg (con tope `max` opcional) -> dosis total */
export interface CalcKg {
  t: "kg";
  lo: number;
  hi: number;
  unit: string;
  label?: string;
  /** Tope de dosis; puede ser `null` explícito en el dato original. */
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
   * inputs numéricos el dato original tiene la clave `ph` PRESENTE con
   * valor `undefined` (el helper `nm()` de index.html arma el objeto con
   * shorthand y ese sitio de llamada no pasó `ph`); se preserva tal cual en
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
   * como `string` porque `compute` es código clínico preservado tal cual
   * (nunca se reescribe a mano) y algunas ramas derivan `l` desde tablas de
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
   * `null` cuando todavía faltan datos numéricos requeridos (guardas del
   * tipo `if(!cN(v.a,v.b))return null;` al inicio del cuerpo), así que el
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
  /** "Fuente: ..." — calculado en index.html a partir de `g` (o GUIDES[id]); aquí queda congelado con el mismo valor. */
  page: string;
  sub: string;
  /** Ausente en 18 fichas de arritmias/SCA/HTA construidas en el `const DX = [...]` inicial (ver `base`). */
  sys?: string;
  /** Ids de fichas/calculadoras relacionadas. */
  rel?: string[];
  /**
   * Campo heredado del `const DX = [...]` inicial (18 fichas de
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
   * Quirk real del dato original: en `c-cha2ds2`, `mk({...,compute:null})`
   * deja un `compute: null` colgado a nivel de la ficha (además del
   * `calcForm.compute` real, parchado luego más abajo en index.html).
   * `typeof null === "object"`, por eso sobrevivió al `if(o.compute)` de
   * `mk()`. Se preserva literal para que la comparación con el DX original
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
