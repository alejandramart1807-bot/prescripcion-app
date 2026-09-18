/**
 * Helpers de formato numérico para el renderizador de calculadoras.
 * Colombia usa coma decimal ("1,5"), no punto ("1.5"); estos helpers hacen
 * de puente entre lo que el usuario escribe y el `number` que espera
 * `calcForm.compute` (que ya viene de @tinterno/content, sin modificar).
 */

/**
 * Convierte texto escrito en formato es-CO a `number`.
 * Acepta coma o punto como separador decimal; si hay coma, cualquier punto
 * se interpreta como separador de miles y se descarta. Cadena vacía o texto
 * no numérico -> `NaN` (igual que el `parseFloat` del index.html original,
 * que deja pasar `NaN` a `compute` cuando el campo aún no tiene datos).
 */
export function parseDecimalCO(raw: string): number {
  const t = raw.trim();
  if (t === "") return NaN;
  const withDot = t.includes(",") ? t.replace(/\./g, "").replace(",", ".") : t;
  return parseFloat(withDot);
}

/** Formatea un puntaje de campo `chk` como lo hacía index.html: "+1,5", "−2", sin nada si es 1. */
export function formatPts(pts: number): string {
  const sign = pts > 0 ? "+" : "";
  return `${sign}${String(pts).replace(".", ",")}`;
}
