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

/**
 * Formatea el PESO del paciente: coma decimal y punto de miles, pero SIN
 * redondear lo que el médico digitó.
 *
 * `fmt` redondea a un decimal, y para el peso eso es inaceptable: un neonato
 * de 3,25 kg se mostraría como 3,3 mientras la dosis se sigue calculando con
 * 3,25, dejando en pantalla un peso que no cuadra con su propia dosis. Tres
 * decimales cubren cualquier peso real sin agregar ceros de relleno.
 */
export const fmtPeso = (kg: number): string =>
  kg.toLocaleString("es-CO", { maximumFractionDigits: 3 });
