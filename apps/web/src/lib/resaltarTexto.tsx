import type { ReactNode } from "react";

/**
 * Resalta "Sivigila" / "notificación obligatoria" dentro de un texto
 * clínico, igual que `hiS()` en index.html (capa UI v7). Es solo una marca
 * visual (un `<span>` alrededor de la misma subcadena): el texto no se
 * modifica ni un carácter.
 */
const NOTIF_PATTERN = "(Sivigila|[Nn]otificación obligatoria)";

export function resaltarNotificacion(texto: string): ReactNode {
  const partes = texto.split(new RegExp(NOTIF_PATTERN, "g"));
  if (partes.length === 1) return texto;
  return partes.map((parte, i) => (i % 2 === 1 ? <span key={i} className="notif">{parte}</span> : parte));
}
