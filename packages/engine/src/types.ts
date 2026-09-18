/**
 * Especificaciones de cálculo de dosis (`calc` dentro de cada `order` de una
 * ficha en `index.html`, propiedad `calc.t`).
 *
 * Portado tal cual del comentario original en index.html (bloque de datos
 * clínicos, justo antes de `const DX = [...]`):
 *
 *   kgmin: dosis unidad/kg/min, conc unidad/mL  -> mL/h = d*kg*60/conc
 *   min:   dosis unidad/min                     -> mL/h = d*60/conc
 *   h:     dosis unidad/h                       -> mL/h = d/conc
 *   kgh:   dosis unidad/kg/h (maxRate unidad/h)  -> mL/h = d*kg/conc
 *   kg:    bolo unidad/kg (max)                  -> dosis
 *   table: filas [[maxKgExclusivo, dosis, label]]
 *
 * Más cinco esquemas especiales de dosis fija (no genéricos, cada uno con su
 * propia fórmula clínica): `ccp`, `tdd`, `altacv`, `nac`, `alteplase`.
 */

/** Infusión por kg de peso y minuto (ej. dopamina, nitroprusiato). */
export interface CalcKgMin {
  t: "kgmin";
  /** dosis baja, unidad/kg/min */
  lo: number;
  /** dosis alta, unidad/kg/min */
  hi: number;
  /** concentración de la dilución, unidad/mL */
  conc: number;
  unit?: string;
}

/** Infusión por minuto, sin peso (ej. adrenalina en bolo de infusión). */
export interface CalcMin {
  t: "min";
  /** dosis baja, unidad/min */
  lo: number;
  /** dosis alta, unidad/min */
  hi: number;
  /** concentración de la dilución, unidad/mL */
  conc: number;
  unit?: string;
}

/** Infusión por hora, sin peso (ej. nicardipino). */
export interface CalcH {
  t: "h";
  /** dosis baja, unidad/h */
  lo: number;
  /** dosis alta, unidad/h */
  hi: number;
  /** concentración de la dilución, unidad/mL */
  conc: number;
  unit?: string;
}

/** Infusión por kg de peso y hora, con tope opcional de velocidad. */
export interface CalcKgH {
  t: "kgh";
  /** dosis baja, unidad/kg/h */
  lo: number;
  /** dosis alta, unidad/kg/h */
  hi: number;
  /** concentración de la dilución, unidad/mL */
  conc: number;
  unit?: string;
  /** tope de velocidad, unidad/h */
  maxRate?: number;
}

/** Bolo o dosis única por kg de peso, con tope opcional y etiqueta. */
export interface CalcKg {
  t: "kg";
  /** dosis baja, unidad/kg */
  lo: number;
  /** dosis alta, unidad/kg */
  hi: number;
  unit?: string;
  /** tope de dosis total, en `unit` */
  max?: number;
  /**
   * Texto libre asociado a la dosis. Si empieza con "/" o "en ", o si es
   * exactamente "total", se muestra DESPUÉS del valor ("30 kg → 15–30 mg
   * /día"). En cualquier otro caso se muestra ANTES, como prefijo ("30 kg →
   * 30 mL/kg = 900 mL").
   */
  label?: string;
}

/** Fila de una tabla de dosis por rango de peso: `[maxKgExclusivo, dosis, label?]`. */
export type CalcTableRow = [number, string, string?];

/** Dosis fija según rango de peso (ej. propafenona, tenecteplase, HRZE). */
export interface CalcTable {
  t: "table";
  /** filas ordenadas por `maxKgExclusivo` ascendente */
  rows: CalcTableRow[];
}

/** Complejo protrombínico según INR (esquema fijo, tope por rango de INR). */
export interface CalcCcp {
  t: "ccp";
}

/** Dosis diaria total de insulina, basal-bolo. */
export interface CalcTdd {
  t: "tdd";
  lo: number;
  hi: number;
}

/** Alteplasa en ACV isquémico agudo (bolo + infusión en 60 min). */
export interface CalcAltacv {
  t: "altacv";
}

/** N-acetilcisteína IV, esquema de 3 bolsas. */
export interface CalcNac {
  t: "nac";
}

/** Alteplasa en IAM con elevación del ST (esquema de 3 bolos). */
export interface CalcAlteplase {
  t: "alteplase";
}

export type CalcSpec =
  | CalcKgMin
  | CalcMin
  | CalcH
  | CalcKgH
  | CalcKg
  | CalcTable
  | CalcCcp
  | CalcTdd
  | CalcAltacv
  | CalcNac
  | CalcAlteplase;

/**
 * Resultado de calcular una dosis. `texto` es el mismo string que producía
 * `calcText()` en index.html (formateo es-CO incluido). `advertencia` replica
 * la señal que usaba la UI original (`calcHTML`) para resaltar el resultado:
 * `/Tope máximo|Verifica el peso/.test(texto)`.
 */
export interface ResultadoCalculo {
  texto: string;
  advertencia: boolean;
}
