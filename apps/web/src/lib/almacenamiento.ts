import { useCallback, useEffect, useState } from "react";

/**
 * Almacenamiento local de Tinterno.
 *
 * La regla 5 del CLAUDE.md es explícita y NO es un detalle de implementación:
 * nada sale del dispositivo, y el peso del paciente vive en `sessionStorage`
 * a propósito, para que se borre al cerrar la app y no se arrastre al
 * siguiente paciente. Cambiarlo a `localStorage` sería un error clínico, no
 * una mejora de comodidad.
 *
 * Todo acceso va envuelto en try/catch: en navegación privada o con el
 * almacenamiento bloqueado, leer o escribir puede lanzar.
 */

export const CLAVES = {
  favoritos: "tinterno-fav",
  recientes: "tinterno-recent",
  tema: "tinterno-theme2",
  barraLateral: "tinterno-sb",
  /** sessionStorage, no localStorage. Ver regla 5. */
  peso: "tinterno-kg",
} as const;

/** Tope de recientes definido en la v7. */
export const MAX_RECIENTES = 12;

function leer<T>(almacen: Storage | undefined, clave: string, porDefecto: T): T {
  try {
    const crudo = almacen?.getItem(clave);
    return crudo === null || crudo === undefined ? porDefecto : (JSON.parse(crudo) as T);
  } catch {
    return porDefecto;
  }
}

function escribir(almacen: Storage | undefined, clave: string, valor: unknown): void {
  try {
    if (valor === null) almacen?.removeItem(clave);
    else almacen?.setItem(clave, JSON.stringify(valor));
  } catch {
    /* sin almacenamiento: la app sigue funcionando, solo no recuerda */
  }
}

const sesion = () => (typeof window === "undefined" ? undefined : window.sessionStorage);
const local = () => (typeof window === "undefined" ? undefined : window.localStorage);

/* ---------- peso del paciente ---------- */

/** Rango que el motor considera plausible; fuera de esto advierte, no bloquea. */
export const PESO_MIN_PLAUSIBLE = 3;
export const PESO_MAX_PLAUSIBLE = 200;

export function usarPeso(): {
  peso: number | null;
  fijarPeso: (kg: number | null) => void;
  borrarPeso: () => void;
} {
  const [peso, setPeso] = useState<number | null>(() => {
    const v = leer<number | null>(sesion(), CLAVES.peso, null);
    return typeof v === "number" && v > 0 ? v : null;
  });

  const fijarPeso = useCallback((kg: number | null) => {
    setPeso(kg);
    escribir(sesion(), CLAVES.peso, kg && kg > 0 ? kg : null);
  }, []);

  const borrarPeso = useCallback(() => fijarPeso(null), [fijarPeso]);

  return { peso, fijarPeso, borrarPeso };
}

/* ---------- favoritos y recientes ---------- */

export function usarFavoritos() {
  const [favoritos, setFavoritos] = useState<string[]>(() => leer(local(), CLAVES.favoritos, []));

  const alternar = useCallback((id: string) => {
    setFavoritos((previos) => {
      const siguiente = previos.includes(id) ? previos.filter((x) => x !== id) : [id, ...previos];
      escribir(local(), CLAVES.favoritos, siguiente);
      return siguiente;
    });
  }, []);

  return { favoritos, alternar, esFavorito: (id: string) => favoritos.includes(id) };
}

export function registrarReciente(id: string): void {
  const previos = leer<string[]>(local(), CLAVES.recientes, []);
  escribir(local(), CLAVES.recientes, [id, ...previos.filter((x) => x !== id)].slice(0, MAX_RECIENTES));
}

export function usarRecientes(): string[] {
  const [recientes, setRecientes] = useState<string[]>(() => leer(local(), CLAVES.recientes, []));
  useEffect(() => {
    const alFoco = () => setRecientes(leer(local(), CLAVES.recientes, []));
    window.addEventListener("focus", alFoco);
    return () => window.removeEventListener("focus", alFoco);
  }, []);
  return recientes;
}

/* ---------- barra lateral (colapso en escritorio) ---------- */

/**
 * Estado de la barra lateral (`renderSidebar` en index.html): igual clave
 * (`tinterno-sb`) y mismos valores en texto ("on"/"off") que la v7, para que
 * la preferencia se lea igual si algún día conviven ambas apps en el mismo
 * navegador. Colapsada por defecto solo si el valor guardado es "off".
 */
export function usarBarraLateral(): { colapsada: boolean; alternar: () => void } {
  const [colapsada, setColapsada] = useState<boolean>(
    () => leer<string>(local(), CLAVES.barraLateral, "on") === "off",
  );

  const alternar = useCallback(() => {
    setColapsada((previa) => {
      const siguiente = !previa;
      escribir(local(), CLAVES.barraLateral, siguiente ? "off" : "on");
      return siguiente;
    });
  }, []);

  return { colapsada, alternar };
}
