import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Atajo de teclado "/" para saltar a la búsqueda, igual que en index.html
 * raíz (v7): si el foco no está en un campo de formulario, "/" lleva a
 * `#buscar` (o enfoca el campo si ya se está ahí).
 *
 * Limitación conocida: solo actúa mientras un componente que llama a este
 * hook está montado. Aquí se usa en Inicio y Buscar, que cubren la entrada
 * principal al buscador; para que "/" funcione también dentro de una ficha
 * abierta habría que montarlo en FichaPage/CalculatorPage o subirlo al
 * shell de App.tsx — ninguno de los dos se toca en esta tarea.
 */
export function useAtajoBusqueda(inputRef?: RefObject<HTMLInputElement | null>): void {
  useEffect(() => {
    function alTeclear(e: KeyboardEvent) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const activo = document.activeElement;
      if (activo instanceof HTMLElement && /INPUT|TEXTAREA|SELECT/.test(activo.tagName)) return;
      const hash = window.location.hash.replace(/^#\/?/, "");
      if (hash === "buscar") {
        if (!inputRef?.current) return;
        e.preventDefault();
        inputRef.current.focus();
      } else {
        e.preventDefault();
        window.location.hash = "buscar";
      }
    }
    window.addEventListener("keydown", alTeclear);
    return () => window.removeEventListener("keydown", alTeclear);
  }, [inputRef]);
}
