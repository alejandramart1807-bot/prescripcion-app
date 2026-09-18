/**
 * Formateo numérico es-CO (separador decimal coma, miles punto).
 *
 * Portado tal cual de `index.html` (capa "TINTERNO UI v7"):
 *   const fmt=(n,d=1)=>{const r=Math.round(n*Math.pow(10,d))/Math.pow(10,d);return r.toLocaleString("es-CO",{maximumFractionDigits:d})};
 *
 * No se cambió el redondeo ni el número de decimales por defecto (1).
 */
export const fmt = (n: number, d = 1): string => {
  const r = Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
  return r.toLocaleString("es-CO", { maximumFractionDigits: d });
};
