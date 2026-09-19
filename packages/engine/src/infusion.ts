import { fmt, fmtPeso } from "./format.js";
import type { CalcSpec } from "./types.js";

/**
 * Lectura estructurada de las infusiones continuas.
 *
 * El motor original funde el rango en una sola cadena ("13,1–262,5 mL/h").
 * Eso es correcto pero no se puede ordenar: nadie inicia noradrenalina "en
 * 13,1–262,5". Aquí se separan los dos extremos que YA existen en los datos
 * (`lo` y `hi`) para que la interfaz pueda presentarlos como un punto de
 * inicio y un techo.
 *
 * IMPORTANTE: esto es reencuadre, no contenido clínico nuevo. La aritmética
 * es idéntica a `calcularCore`; `tools/audit-infusion.mjs` lo verifica contra
 * la cadena que produce el motor original para cada infusión real, a todos
 * los pesos.
 *
 * El PASO de titulación (cuánto subir y cada cuánto) es información clínica
 * que NO está en los datos y que no se puede deducir de `lo` y `hi`. Debe
 * añadirlo un médico por fármaco; hasta entonces, no se muestra.
 */

/** Tipos de cálculo que producen una velocidad de infusión en mL/h. */
export type TipoInfusion = "kgmin" | "min" | "h" | "kgh";

export interface Infusion {
  /** Peso usado, o `null` en los tipos que no dependen del peso. */
  kg: number | null;
  /** Velocidad inicial, en mL/h. */
  inicio: number;
  /** Velocidad máxima, en mL/h. */
  techo: number;
  /** `true` cuando el rango colapsa a un solo valor (inicio === techo). */
  puntoUnico: boolean;
  /** `true` si se aplicó `maxRate` (solo `kgh`). */
  topeAplicado: boolean;
  /** `true` si el peso cae fuera de 3–200 kg. */
  verificarPeso: boolean;
  /**
   * Solo en `kgh` de punto único: la dosis en sus unidades originales por
   * hora (p. ej. 840 U/h en heparina). El motor original la muestra entre
   * paréntesis y NO se puede omitir: es como se ordena y se verifica la
   * infusión en la práctica.
   */
  dosisPorHora?: number;
  /** Unidad de `dosisPorHora` (p. ej. "U", "mg"). */
  unidad?: string;
}

export function esInfusion(calc: CalcSpec): calc is CalcSpec & { t: TipoInfusion } {
  return calc.t === "kgmin" || calc.t === "min" || calc.t === "h" || calc.t === "kgh";
}

/**
 * Devuelve los extremos de la infusión en mL/h, o `null` si el tipo no es de
 * infusión o si falta un peso que ese tipo necesita.
 */
export function calcularInfusion(calc: CalcSpec, pesoKg: number | null): Infusion | null {
  if (!esInfusion(calc)) return null;

  // `min` y `h` no dependen del peso: misma excepción que el motor original.
  if (calc.t === "min") {
    return armar(null, (calc.lo * 60) / calc.conc, (calc.hi * 60) / calc.conc, false, false);
  }
  if (calc.t === "h") {
    return armar(null, calc.lo / calc.conc, calc.hi / calc.conc, false, false);
  }

  const kg = pesoKg;
  if (kg === null || !(kg > 0 && kg < 400)) return null;
  const verificar = kg < 3 || kg > 200;

  if (calc.t === "kgmin") {
    return armar(kg, (calc.lo * kg * 60) / calc.conc, (calc.hi * kg * 60) / calc.conc, false, verificar);
  }

  const u = calc.unit || "mcg";

  // kgh: se topa por maxRate ANTES de dividir por la concentración.
  let lo = calc.lo * kg;
  let hi = calc.hi * kg;
  const tope = !!calc.maxRate && calc.hi * kg > calc.maxRate;
  if (calc.maxRate) {
    lo = Math.min(lo, calc.maxRate);
    hi = Math.min(hi, calc.maxRate);
  }
  const inf = armar(kg, lo / calc.conc, hi / calc.conc, tope, verificar);
  if (inf.puntoUnico) {
    inf.dosisPorHora = lo;
    inf.unidad = u;
  }
  return inf;
}

function armar(kg: number | null, inicio: number, techo: number, topeAplicado: boolean, verificarPeso: boolean): Infusion {
  return { kg, inicio, techo, puntoUnico: inicio === techo, topeAplicado, verificarPeso };
}

/**
 * Texto accionable para la interfaz. Usa el mismo `fmt` es-CO que el resto
 * del motor, así que los números salen idénticos a los del rango original.
 */
export function formatearInfusion(inf: Infusion): string {
  const enUnidades =
    inf.dosisPorHora !== undefined ? ` (${fmt(inf.dosisPorHora, 0)} ${inf.unidad}/h)` : "";
  const cuerpo = inf.puntoUnico
    ? `${fmt(inf.inicio)} mL/h${enUnidades}`
    : `inicia ${fmt(inf.inicio)} mL/h · máx ${fmt(inf.techo)} mL/h`;

  // Mismo orden que el motor original: la advertencia de peso va al frente de
  // todo, la de tope va después del "N kg →".
  const conTope = (inf.topeAplicado ? "Tope máximo aplicado · " : "") + cuerpo;
  const conPeso = inf.kg === null ? conTope : `${fmtPeso(inf.kg)} kg → ${conTope}`;
  return (inf.verificarPeso ? "Verifica el peso · " : "") + conPeso;
}
