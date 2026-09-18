import { fmt } from "./format.js";
import type { CalcSpec, ResultadoCalculo } from "./types.js";

/**
 * Motor de cálculo de dosis de Tinterno.
 *
 * Portado tal cual de `index.html` (funciones `calcText` y `calcCore`, capa
 * "TINTERNO UI v7"). La matemática, el redondeo y los textos NO se
 * modificaron: este archivo es una extracción, no una reescritura. El peso
 * ya no se lee de una variable global (`KG` / `kgEl`) sino que se recibe
 * como parámetro explícito.
 *
 * Si algo aquí te parece clínicamente cuestionable, NO lo corrijas: repórtalo.
 * Esta capa solo debe reproducir el comportamiento vigente en producción.
 */

/** Regla usada por la UI original (`calcHTML`) para resaltar el resultado. */
const RE_ADVERTENCIA = /Tope máximo|Verifica el peso/;

function envolver(texto: string): ResultadoCalculo {
  return { texto, advertencia: RE_ADVERTENCIA.test(texto) };
}

/**
 * Núcleo matemático: requiere un peso válido ya conocido. Corresponde a
 * `calcCore(c, kg, u)` en index.html. Devuelve `null` si el tipo de cálculo
 * no aplica (no debería ocurrir con un CalcSpec válido, pero se conserva el
 * mismo camino de salida que el original).
 */
function calcularCore(c: CalcSpec, kg: number, u: string): string | null {
  if (c.t === "kgmin") {
    return `${kg} kg → ${fmt((c.lo * kg * 60) / c.conc)}–${fmt((c.hi * kg * 60) / c.conc)} mL/h`;
  }
  if (c.t === "kgh") {
    let lo = c.lo * kg;
    let hi = c.hi * kg;
    let capH = false;
    if (c.maxRate && c.hi * kg > c.maxRate) capH = true;
    if (c.maxRate) {
      lo = Math.min(lo, c.maxRate);
      hi = Math.min(hi, c.maxRate);
    }
    const r =
      (capH ? "Tope máximo aplicado · " : "") +
      (lo === hi ? `${fmt(lo / c.conc)} mL/h (${fmt(lo, 0)} ${u}/h)` : `${fmt(lo / c.conc)}–${fmt(hi / c.conc)} mL/h`);
    return `${kg} kg → ${r}`;
  }
  if (c.t === "kg") {
    let lo = c.lo * kg;
    let hi = c.hi * kg;
    const cap = !!c.max && c.hi * kg > c.max;
    if (c.max) {
      lo = Math.min(lo, c.max);
      hi = Math.min(hi, c.max);
    }
    const d = u === "U" ? 0 : 1;
    const v = lo === hi ? `${fmt(lo, d)} ${u}` : `${fmt(lo, d)}–${fmt(hi, d)} ${u}`;
    const ct = cap ? " · Tope máximo aplicado" : "";
    return (
      (c.label && (c.label.startsWith("/") || c.label.startsWith("en ") || c.label === "total")
        ? `${kg} kg → ${v} ${c.label}`
        : `${kg} kg → ${c.label ? c.label + " " : ""}${v}`) + ct
    );
  }
  if (c.t === "table") {
    const row = c.rows.find((r) => kg < r[0]);
    // Nota: si ningún tramo cubre `kg`, esto reproduce el mismo fallo que
    // index.html (lanzaría al leer row[1] de `undefined`). En los datos
    // reales de las 358 fichas, todas las tablas tienen un último tramo
    // con techo 999, así que no ocurre con pesos humanos plausibles.
    return `${kg} kg → ${row![1]}`;
  }
  if (c.t === "ccp") {
    const f = (unidadPorKg: number, cap: number) => fmt(Math.min(unidadPorKg * kg, cap), 0);
    return `${kg} kg → INR 2–4: ${f(25, 2500)} U · 4–6: ${f(35, 3500)} U · > 6: ${f(50, 5000)} U`;
  }
  if (c.t === "tdd") {
    const lo = c.lo * kg;
    const hi = c.hi * kg;
    return `${kg} kg → total ${fmt(lo, 0)}–${fmt(hi, 0)} U/día: basal ${fmt(lo / 2, 0)}–${fmt(hi / 2, 0)} U + ${fmt(lo / 6, 0)}–${fmt(hi / 6, 0)} U por comida`;
  }
  if (c.t === "altacv") {
    const tot = Math.min(0.9 * kg, 90);
    const b = tot * 0.1;
    return `${kg} kg → total ${fmt(tot)} mg: bolo ${fmt(b)} mg + ${fmt(tot - b)} mg en 60 min`;
  }
  if (c.t === "nac") {
    const w = Math.min(kg, 100);
    return `${kg} kg → ${fmt(150 * w, 0)} mg + ${fmt(50 * w, 0)} mg + ${fmt(100 * w, 0)} mg`;
  }
  if (c.t === "alteplase") {
    const a = Math.min(0.75 * kg, 50);
    const b = Math.min(0.5 * kg, 35);
    return `${kg} kg → 15 mg + ${fmt(a)} mg + ${fmt(b)} mg = ${fmt(15 + a + b)} mg`;
  }
  return null;
}

/**
 * Calcula el texto de dosis para una ficha, dado un peso (o `null` si el
 * usuario aún no lo ingresó). Corresponde a `calcText(c)` en index.html,
 * pero recibe el peso como parámetro explícito en vez de leerlo de la
 * variable global `KG` a través del shim `kgEl`.
 *
 * - `min` y `h` NO requieren peso: siempre devuelven un resultado.
 * - Para el resto, si no hay un peso válido (`> 0` y `< 400`, igual que en
 *   el original) devuelve `null` (la UI original mostraba entonces el botón
 *   "Ingresa el peso para calcular").
 * - Si el peso es `< 3` o `> 200` kg, se antepone "Verifica el peso · "
 *   (igual que el original; no es un límite duro, solo una advertencia).
 */
export function calcular(calc: CalcSpec, pesoKg: number | null): ResultadoCalculo | null {
  const kg = pesoKg;
  const hasKg = kg !== null && kg > 0 && kg < 400;
  const u = ("unit" in calc && calc.unit) || "mcg";

  if (calc.t === "min") {
    return envolver(`≈ ${fmt((calc.lo * 60) / calc.conc)}–${fmt((calc.hi * 60) / calc.conc)} mL/h`);
  }
  if (calc.t === "h") {
    return envolver(`≈ ${fmt(calc.lo / calc.conc)}–${fmt(calc.hi / calc.conc)} mL/h`);
  }
  if (!hasKg) return null;

  const pre = kg! < 3 || kg! > 200 ? "Verifica el peso · " : "";
  const r0 = calcularCore(calc, kg!, u);
  return r0 === null ? null : envolver(pre + r0);
}

/** Exportado únicamente para pruebas dirigidas al núcleo matemático. */
export { calcularCore };
