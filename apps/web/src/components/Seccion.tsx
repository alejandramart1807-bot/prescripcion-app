import type { ReactNode } from "react";

interface SeccionProps {
  titulo: string;
  accion?: ReactNode;
  children: ReactNode;
}

/** Sección de portada/búsqueda con encabezado y acción opcional a la derecha. Igual que `sec()` en index.html. */
export default function Seccion({ titulo, accion, children }: SeccionProps) {
  return (
    <section className="hsec">
      <div className="hsec-h">
        <h2>{titulo}</h2>
        {accion}
      </div>
      {children}
    </section>
  );
}
