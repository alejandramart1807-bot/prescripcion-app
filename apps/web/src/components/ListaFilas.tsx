import type { Ficha } from "@tinterno/content";
import FilaFicha from "./FilaFicha";

interface ListaFilasProps {
  fichas: Ficha[];
  consulta?: string;
  esFavorito?: (id: string) => boolean;
}

/** Lista de resultados en tarjeta, igual que `rows()` en index.html. Vacía => no renderiza nada. */
export default function ListaFilas({ fichas, consulta, esFavorito }: ListaFilasProps) {
  if (!fichas.length) return null;
  return (
    <ul className="fichas-lista">
      {fichas.map((f) => (
        <FilaFicha key={f.id} ficha={f} consulta={consulta} esFavorito={esFavorito?.(f.id)} />
      ))}
    </ul>
  );
}
