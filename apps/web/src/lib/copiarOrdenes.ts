import type { CalcSpec as CalcSpecContent, FichaOrders, Guide, Order, OrderLine } from "@tinterno/content";
import { altFor } from "@tinterno/content";
import type { CalcSpec as CalcSpecEngine, ResultadoCalculo } from "@tinterno/engine";
import { calcular, calcularInfusion, esInfusion, fmt, formatearInfusion } from "@tinterno/engine";

/**
 * `packages/content` (schema.ts) y `packages/engine` (types.ts) declaran
 * cada uno su propio tipo `CalcSpec`, extraídos por separado del mismo
 * `index.html`: describen la MISMA forma de dato real (ver los comentarios
 * de origen en cada archivo), pero con opcionalidad ligeramente distinta
 * (ej. `CalcKg.max` es `number | null` en content — hay `max: null`
 * explícito en el dato original — y `number | undefined` en engine). No son
 * el mismo tipo nominal, así que TypeScript no deja pasar uno donde se
 * espera el otro. Este cast es puramente de tipos: el objeto que fluye es
 * el `order.calc` real de la ficha, sin transformarlo.
 */
function paraMotor(calc: CalcSpecContent): CalcSpecEngine {
  return calc as unknown as CalcSpecEngine;
}

function esOrderLine(o: Order): o is OrderLine {
  return !("cat" in o);
}

/**
 * Resultado de calcular la dosis de una orden, con la MISMA lectura para
 * los cuatro tipos de infusión continua (kgmin/min/h/kgh, vía
 * `calcularInfusion`+`formatearInfusion`: "inicia X mL/h · máx Y mL/h") y
 * para el resto (bolo por kg, tablas, esquemas especiales, vía `calcular`,
 * que preserva el rango "X–Y" tal como lo hacía calcText() en index.html).
 *
 * Devuelve `null` cuando el tipo de cálculo necesita un peso que todavía no
 * se ingresó (igual que `calcText`/`calcularInfusion` originales); `min` y
 * `h` nunca lo necesitan.
 */
export function textoCalculoOrden(calc: CalcSpecContent | undefined, pesoKg: number | null): ResultadoCalculo | null {
  if (!calc) return null;
  const c = paraMotor(calc);
  if (esInfusion(c)) {
    const inf = calcularInfusion(c, pesoKg);
    if (!inf) return null;
    const texto = formatearInfusion(inf);
    return { texto, advertencia: /Tope máximo|Verifica el peso/.test(texto) };
  }
  return calcular(c, pesoKg);
}

/** Línea de una orden, igual a `orderLine(d,o,n)` de index.html. */
export function lineaOrden(fichaId: string, orden: OrderLine, n: number, pesoKg: number | null): string {
  let s = `${n}. ${orden.d}${orden.dose ? ": " + orden.dose : ""}`;
  if (orden.dil) s += ` | Dilución: ${orden.dil}`;
  const r = textoCalculoOrden(orden.calc, pesoKg);
  if (r) s += ` | ${r.texto}`;
  const alt = orden.a || altFor(fichaId, orden.d);
  return alt ? s + `\n   Alternativa / si no hay: ${alt}` : s;
}

/**
 * Número de una orden dentro de la ficha completa (posición entre las
 * órdenes reales, sin contar encabezados de categoría), igual al `n` que
 * calcula `copyOne(d,i)` en index.html. No depende de la selección: al
 * copiar una sola orden, se numera por su lugar real en la ficha.
 */
export function numeroDeOrden(ficha: FichaOrders, index: number): number {
  let n = 0;
  for (let k = 0; k <= index; k++) {
    if (esOrderLine(ficha.orders[k]!)) n++;
  }
  return n;
}

/** Cuántas órdenes (sin contar encabezados de categoría) tiene la ficha. */
export function totalOrdenes(ficha: FichaOrders): number {
  return ficha.orders.filter(esOrderLine).length;
}

/** Índices seleccionables por defecto: TODAS las órdenes reales (regla 3 de la tarea: sin fricción). */
export function seleccionInicial(ficha: FichaOrders): Set<number> {
  const s = new Set<number>();
  ficha.orders.forEach((o, i) => {
    if (esOrderLine(o)) s.add(i);
  });
  return s;
}

/**
 * Texto completo para copiar, igual a `copyOrders(d)` de index.html, salvo
 * que solo incluye las órdenes en `seleccionadas` (renumeradas desde 1) y
 * omite el encabezado de una categoría si ninguna de sus órdenes quedó
 * seleccionada.
 */
export function textoParaCopiar(
  ficha: FichaOrders,
  guide: Guide | undefined,
  pesoKg: number | null,
  seleccionadas: Set<number>,
): string {
  const L: string[] = [`TINTERNO — ${ficha.name}`];
  if (guide) {
    const co =
      guide.co.st === "none" || guide.co.st === "na" ? "(sin GPC colombiana)" : `${guide.co.n} ${guide.co.y}`;
    L.push(`Guías: ${co} · ${guide.intl}`);
  }
  L.push(pesoKg && pesoKg > 0 ? `Peso: ${fmt(pesoKg)} kg` : "Peso: no registrado (dosis por kilo sin calcular)");

  let n = 0;
  let catPendiente: string | null = null;
  ficha.orders.forEach((o, i) => {
    if (!esOrderLine(o)) {
      catPendiente = o.cat;
      return;
    }
    if (!seleccionadas.has(i)) return;
    if (catPendiente !== null) {
      L.push("", catPendiente.toUpperCase());
      catPendiente = null;
    }
    n++;
    L.push(lineaOrden(ficha.id, o, n, pesoKg));
  });

  if (ficha.goals && ficha.goals.length) L.push("", "Metas: " + ficha.goals.join("; "));
  return L.join("\n");
}

/** Copia texto al portapapeles con el mismo respaldo que `copyText()` de index.html. */
export async function copiarAlPortapapeles(texto: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(texto);
      return true;
    }
  } catch {
    // sigue al respaldo de abajo
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch {
    return false;
  }
}

export function vibrarCopiado(): void {
  try {
    navigator.vibrate?.(35);
  } catch {
    // no crítico
  }
}
