import { useEffect, useId, useState } from "react";
import { parseDecimalCO } from "../lib/format";
import Capa from "./Capa";

interface PanelPacienteProps {
  abierta: boolean;
  onCerrar: () => void;
  peso: number | null;
  fijarPeso: (kg: number | null) => void;
}

/**
 * Panel del paciente (peso), igual que `openPatient()`/`#ptDlg` en
 * index.html: se abre desde "Paciente" en la barra inferior o lateral.
 *
 * El peso vive en `sessionStorage` (regla 5 del CLAUDE.md, vía `usarPeso`),
 * pero ese hook se llama UNA sola vez en App.tsx y baja como prop: dos
 * llamadas independientes a `usarPeso()` (p. ej. una en la barra y otra en
 * este panel) no se sincronizan entre sí porque cada una es su propio
 * `useState` — cambiar el peso en una no repinta la otra hasta que se vuelve
 * a montar. Con una sola fuente arriba, ambas quedan siempre consistentes.
 */
export default function PanelPaciente({ abierta, onCerrar, peso, fijarPeso }: PanelPacienteProps) {
  const [valor, setValor] = useState(peso ? String(peso).replace(".", ",") : "");
  const id = useId();

  // Sincroniza el campo con el peso guardado cada vez que se vuelve a abrir.
  useEffect(() => {
    if (abierta) setValor(peso ? String(peso).replace(".", ",") : "");
  }, [abierta, peso]);

  function guardar() {
    const kg = parseDecimalCO(valor);
    fijarPeso(kg > 0 ? kg : null);
  }

  function borrar() {
    setValor("");
    fijarPeso(null);
  }

  return (
    <Capa titulo="Paciente" abierta={abierta} onCerrar={onCerrar}>
      <label htmlFor={id} className="nav-pt-label">
        Peso del paciente
      </label>
      <div className="nav-pt-in">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          placeholder="—"
          autoFocus
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          onBlur={guardar}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              guardar();
              onCerrar();
            }
          }}
        />
        <span>kg</span>
      </div>
      <p className="nav-pt-nota">
        Los cálculos se hacen solo en este dispositivo. El peso no se envía a ningún servidor y se borra al cerrar
        la app.
      </p>
      <div className="nav-pt-acc">
        <button type="button" className="btn" onClick={borrar}>
          Borrar peso
        </button>
        <button
          type="button"
          className="btn primary"
          onClick={() => {
            guardar();
            onCerrar();
          }}
        >
          Listo
        </button>
      </div>
    </Capa>
  );
}
