import { useId, useState } from "react";
import { parseDecimalCO } from "../lib/format";

interface PesoInlineProps {
  onGuardar: (kg: number) => void;
}

/**
 * Control de peso EN el renglón de la orden (cambio 2 de la tarea): antes de
 * ingresar el peso, un botón "Ingresa el peso"; al tocarlo, se abre un
 * campo inline en el mismo renglón. Al guardar, el padre actualiza el peso
 * compartido de la ficha (`usarPeso()`, sessionStorage) y este control deja
 * de existir: la orden ya muestra el resultado calculado en su lugar.
 */
export default function PesoInline({ onGuardar }: PesoInlineProps) {
  const [abierto, setAbierto] = useState(false);
  const [valor, setValor] = useState("");
  const id = useId();

  if (!abierto) {
    return (
      <button type="button" className="calc-need" onClick={() => setAbierto(true)}>
        Ingresa el peso para calcular
      </button>
    );
  }

  function confirmar() {
    const kg = parseDecimalCO(valor);
    if (kg > 0) onGuardar(kg);
  }

  return (
    <span className="calc-need-form">
      <label htmlFor={id} className="sr-only">
        Peso del paciente en kilogramos
      </label>
      <input
        id={id}
        // type="text" y no "number": los <input type="number"> fuerzan punto
        // decimal en casi todos los navegadores sin importar el idioma, y en
        // Colombia un peso pediátrico se escribe "3,4". Con type="number" la
        // coma se descarta y el campo llega vacío. parseDecimalCO acepta ambos.
        type="text"
        inputMode="decimal"
        min={0.5}
        max={300}
        step={0.1}
        placeholder="kg"
        autoFocus
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") confirmar();
        }}
      />
      <button type="button" className="btn small primary" onClick={confirmar}>
        Listo
      </button>
    </span>
  );
}
