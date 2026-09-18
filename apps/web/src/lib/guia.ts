import type { Guide } from "@tinterno/content";

/** Insignia de estado de la guía, igual a `guideStatus(g)` de index.html. */
export function estadoGuia(g?: Guide): { clase: string; texto: string } {
  if (!g) return { clase: "neutral", texto: "Sin guía registrada" };
  const st = g.co.st;
  if (st === "ok") return { clase: "ok", texto: "GPC Colombia · vigente" };
  if (st === "old") return { clase: "warn", texto: "GPC Colombia · desactualizada" };
  if (st === "na") return { clase: "neutral", texto: "Guía nacional por verificar" };
  return { clase: "neutral", texto: "Sin GPC colombiana" };
}

/** Guía principal a mostrar en la franja del encabezado, igual a `mainGuide(g)`. */
export function guiaPrincipal(g?: Guide): string {
  if (!g) return "";
  if (g.co.st === "ok" || g.co.st === "old") return `${g.co.n}${g.co.y ? ", " + g.co.y : ""}`;
  return (g.intl || "").split("·")[0]?.trim() ?? "";
}
