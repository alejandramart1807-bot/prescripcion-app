import type { Ficha } from "@tinterno/content";
import { fichaHref } from "../lib/useHashRoute";
import { TIPO_LABEL_CORTA, sistemaDe, tipoDe } from "../lib/taxonomia";
import { partesResaltadas } from "../lib/busqueda";
import Icono from "./Icono";

interface FilaFichaProps {
  ficha: Ficha;
  /** Consulta de búsqueda activa: si se pasa, resalta las coincidencias en el nombre. */
  consulta?: string;
  esFavorito?: boolean;
}

/**
 * Fila reutilizable de un resultado (búsqueda, portada, favoritos…).
 *
 * Muestra siempre el tipo (ficha de prescripción / calculadora / valores de
 * referencia) y el sistema al que pertenece, para que quede claro de un
 * vistazo qué se va a abrir — pedido explícito de la tarea de búsqueda.
 */
export default function FilaFicha({ ficha, consulta, esFavorito }: FilaFichaProps) {
  const tipo = tipoDe(ficha);
  const partes = consulta ? partesResaltadas(ficha.name, consulta) : [{ texto: ficha.name, marca: false }];

  return (
    <li>
      <a href={fichaHref(ficha.id)} className="fila">
        <span className={`fila-tipo fila-tipo-${tipo}`} aria-hidden="true">
          {TIPO_LABEL_CORTA[tipo][0]}
        </span>
        <span className="t">
          <b>
            {partes.map((p, i) =>
              p.marca ? (
                <mark key={i}>{p.texto}</mark>
              ) : (
                // eslint-disable-next-line react/no-array-index-key
                <span key={i}>{p.texto}</span>
              ),
            )}
          </b>
          <small>
            {TIPO_LABEL_CORTA[tipo]} · {sistemaDe(ficha)}
          </small>
        </span>
        {esFavorito && (
          <span className="fila-fav" title="En favoritos">
            <Icono nombre="starFill" />
          </span>
        )}
        <span className="chev">
          <Icono nombre="right" />
        </span>
      </a>
    </li>
  );
}
