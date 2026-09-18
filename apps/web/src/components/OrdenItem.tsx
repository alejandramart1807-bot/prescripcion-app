import { altFor, type OrderLine } from "@tinterno/content";
import { textoCalculoOrden } from "../lib/copiarOrdenes";
import { resaltarNotificacion } from "../lib/resaltarTexto";
import PesoInline from "./PesoInline";

interface OrdenItemProps {
  fichaId: string;
  orden: OrderLine;
  index: number;
  peso: number | null;
  seleccionada: boolean;
  onAlternarSeleccion: (index: number) => void;
  onFijarPeso: (kg: number) => void;
  onCopiar: (index: number) => void;
}

/**
 * Una orden médica dentro de la ficha: casilla de selección (cambio 3),
 * dosis/dilución/nota tal como vienen del dato clínico, el resultado del
 * cálculo O el control de peso en el mismo renglón si todavía falta
 * (cambio 2), la alternativa si no hay, y el botón para copiar solo esa
 * orden.
 */
export default function OrdenItem({
  fichaId,
  orden,
  index,
  peso,
  seleccionada,
  onAlternarSeleccion,
  onFijarPeso,
  onCopiar,
}: OrdenItemProps) {
  const resultado = textoCalculoOrden(orden.calc, peso);
  const alternativa = orden.a || altFor(fichaId, orden.d);
  const checkboxId = `ord-sel-${fichaId}-${index}`;

  return (
    <li className="ord">
      <input
        id={checkboxId}
        type="checkbox"
        checked={seleccionada}
        onChange={() => onAlternarSeleccion(index)}
        aria-label={`Incluir "${orden.d}" al copiar`}
      />
      <div className="body">
        <label htmlFor={checkboxId} className="drug">
          {orden.d}
        </label>
        {orden.dose && <div className="dose">{orden.dose}</div>}
        {orden.dil && (
          <div className="ometa">
            <em>Dilución:</em> {orden.dil}
          </div>
        )}
        {orden.n && <div className="ometa">{resaltarNotificacion(orden.n)}</div>}
        {resultado ? (
          <div className={`calc${resultado.advertencia ? " warn" : ""}`} role="status">
            {resultado.texto}
          </div>
        ) : (
          orden.calc && <PesoInline onGuardar={onFijarPeso} />
        )}
        {alternativa && (
          <div className="alt">
            <b>Si no hay</b>
            {alternativa}
          </div>
        )}
      </div>
      <button
        type="button"
        className="cp"
        onClick={() => onCopiar(index)}
        aria-label={`Copiar la orden: ${orden.d}`}
        title="Copiar esta orden"
      >
        Copiar
      </button>
    </li>
  );
}
