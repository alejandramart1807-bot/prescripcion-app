import { useEffect, useId, useRef, type ReactNode } from "react";
import Icono from "./Icono";

interface CapaProps {
  titulo: string;
  abierta: boolean;
  onCerrar: () => void;
  children: ReactNode;
}

/**
 * Superposición reutilizable (fondo + panel) para el panel del paciente y el
 * menú "Más" de la barra inferior — la hoja/diálogo de `renderBnav` y
 * `openLayerEl` en index.html (regla del CLAUDE.md: foco, Escape, trampa de
 * Tab, bloqueo de scroll). Estilos en estilos-navegacion.css (clases
 * `nav-scrim`/`nav-dlg`, para no tocar styles.css).
 */
export default function Capa({ titulo, abierta, onCerrar, children }: CapaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const tituloId = useId();

  useEffect(() => {
    if (!abierta) return;
    const focoPrevio = document.activeElement as HTMLElement | null;
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();

    function alTeclado(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onCerrar();
        return;
      }
      if (e.key !== "Tab" || !ref.current) return;
      const focables = ref.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focables.length) return;
      const primero = focables[0]!;
      const ultimo = focables[focables.length - 1]!;
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    }

    document.addEventListener("keydown", alTeclado, true);
    return () => {
      document.removeEventListener("keydown", alTeclado, true);
      document.body.style.overflow = overflowPrevio;
      focoPrevio?.focus();
    };
  }, [abierta, onCerrar]);

  if (!abierta) return null;

  return (
    <>
      <div className="nav-scrim" onClick={onCerrar} aria-hidden="true" />
      <div className="nav-dlg" role="dialog" aria-modal="true" aria-labelledby={tituloId} ref={ref} tabIndex={-1}>
        <h2 id={tituloId}>
          {titulo}
          <button type="button" className="nav-dlg-x" onClick={onCerrar} aria-label="Cerrar">
            <Icono nombre="x" />
          </button>
        </h2>
        {children}
      </div>
    </>
  );
}
