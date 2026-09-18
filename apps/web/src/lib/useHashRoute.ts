import { useEffect, useState } from "react";

/**
 * Router por hash de Tinterno.
 *
 * Las rutas son las MISMAS de la v7 y no se pueden cambiar: la regla 6 del
 * CLAUDE.md exige mantener las anclas `#<id>` de las fichas. Hay médicos con
 * enlaces compartidos en grupos de WhatsApp apuntando a `#sepsis`, `#c-meld`,
 * etc.; si esos dejan de resolver, se rompe contenido que ya circula.
 *
 *   #                      inicio
 *   #buscar                búsqueda
 *   #favoritos             favoritos
 *   #acerca                cómo funciona
 *   #cat/<macro>           categoría
 *   #cat/<macro>/<sub>     subcategoría
 *   #ctx/<contexto>        contexto (urgencias, hospital, calc, peso…)
 *   #<id>                  ficha, calculadora o tabla  ← canónica
 */
export type Route =
  | { name: "inicio" }
  | { name: "buscar" }
  | { name: "favoritos" }
  | { name: "acerca" }
  | { name: "cat"; macro: string; sub?: string }
  | { name: "ctx"; ctx: string }
  | { name: "ficha"; id: string };

const RESERVADAS = new Set(["buscar", "favoritos", "acerca"]);

export function parseHash(hash: string): Route {
  const bruto = decodeURIComponent(hash.replace(/^#/, ""));

  // Forma antigua de esta rama (#/calc/:id): se normaliza a la canónica.
  const legado = bruto.match(/^\/?calc\/(.+)$/);
  if (legado?.[1]) return { name: "ficha", id: legado[1] };

  const limpio = bruto.replace(/^\/+/, "");
  if (!limpio) return { name: "inicio" };

  const partes = limpio.split("/").filter(Boolean);
  const cabeza = partes[0]!;

  if (cabeza === "cat" && partes[1]) {
    return partes[2] ? { name: "cat", macro: partes[1], sub: partes[2] } : { name: "cat", macro: partes[1] };
  }
  if (cabeza === "ctx" && partes[1]) return { name: "ctx", ctx: partes[1] };
  if (RESERVADAS.has(cabeza)) return { name: cabeza as "buscar" | "favoritos" | "acerca" };

  return { name: "ficha", id: cabeza };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parseHash(typeof window !== "undefined" ? window.location.hash : ""),
  );

  useEffect(() => {
    const alCambiar = () => {
      // Normaliza en sitio los enlaces legado para que la barra quede canónica.
      const r = parseHash(window.location.hash);
      if (/^#\/?calc\//.test(window.location.hash) && r.name === "ficha") {
        window.location.replace(`#${r.id}`);
        return;
      }
      setRoute(r);
    };
    window.addEventListener("hashchange", alCambiar);
    return () => window.removeEventListener("hashchange", alCambiar);
  }, []);

  return route;
}

/** Ancla canónica de una ficha, calculadora o tabla. */
export function fichaHref(id: string): string {
  return `#${id}`;
}

/** @deprecated Usa fichaHref. Se conserva para no romper llamadas existentes. */
export const calcHref = fichaHref;
