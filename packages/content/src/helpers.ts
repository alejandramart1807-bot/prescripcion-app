// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

/**
 * Helpers matemáticos usados por las 51 calculadoras (calcForm.compute).
 * Extraídos literalmente de index.html vía Function.prototype.toString():
 * la lógica NO se reescribe a mano. Ver tools/extract-content.mjs.
 */

/** Suma los valores numéricos de un objeto de respuestas (ignora NaN y no-numéricos). */
export const cS: (v: Record<string, any>) => number = v=>Object.values(v).reduce((a,b)=>a+(typeof b==="number"&&!isNaN(b)?b:0),0);

function cBImpl<T extends readonly [number, ...unknown[]]>(x: number, arr: readonly T[]): T | undefined {
  for(const r of arr){if(x<=r[0])return r;}return arr[arr.length-1];
}
/**
 * Devuelve la primera fila de `arr` cuyo umbral (posición 0) sea >= x; si
 * ninguna califica, devuelve la última. Usado para mapear un puntaje a un
 * rango de interpretación, ej. [[8,"Grave","bad"],[12,"Moderado","warn"],[15,"Leve","ok"]].
 */
export function cB<T extends readonly [number, ...unknown[]]>(x: number, arr: readonly T[]): T {
  return cBImpl(x, arr) as T;
}

/** True si todos los argumentos son números válidos (no NaN). */
export const cN: (...xs: unknown[]) => boolean = (...xs)=>xs.every(x=>typeof x==="number"&&!isNaN(x));

/** Formatea un número con `d` decimales, en formato es-CO. */
export const cF: (x: number, d?: number) => string = (x,d=1)=>{const r=Math.round(x*Math.pow(10,d))/Math.pow(10,d);return r.toLocaleString("es-CO",{maximumFractionDigits:d});};
