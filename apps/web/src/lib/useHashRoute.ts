import { useEffect, useState } from "react";

export type Route = { name: "calc"; id: string } | { name: "home" };

function parseHash(hash: string): Route {
  // location.hash incluye el "#" inicial, ej. "#/calc/c-nihss".
  const clean = hash.replace(/^#/, "");
  const parts = clean.split("/").filter(Boolean); // ["calc", "c-nihss"]
  if (parts[0] === "calc" && parts[1]) {
    return { name: "calc", id: decodeURIComponent(parts[1]) };
  }
  return { name: "home" };
}

/** Router mínimo por hash: hoy solo resuelve `#/calc/:id`; cualquier otra ruta cae en "home". */
export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parseHash(typeof window !== "undefined" ? window.location.hash : ""),
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

export function calcHref(id: string): string {
  return `#/calc/${id}`;
}
