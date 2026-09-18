import type { InputChk } from "@tinterno/content";
import { formatPts } from "../lib/format";

interface CampoChkProps {
  input: InputChk;
  /** 0 si no está marcado, `input.pts` si sí (mismo valor que espera `compute()`). */
  value: number;
  onChange: (value: number) => void;
  /**
   * "row" (por defecto): fila con checkbox, para la lista normal.
   * "choice": par de chips Sí/No, para el modo enfocado (una pregunta a la vez).
   */
  variant?: "row" | "choice";
  autoFocus?: boolean;
}

export default function CampoChk({ input, value, onChange, variant = "row", autoFocus }: CampoChkProps) {
  const checked = value !== 0;
  const suffix = input.pts !== 1 ? ` (${formatPts(input.pts)})` : "";

  if (variant === "choice") {
    return (
      <div className="cf-row cf-row-chips">
        <span id={`lbl-${input.id}`}>{input.label}</span>
        <div className="chipgroup" role="radiogroup" aria-labelledby={`lbl-${input.id}`}>
          <button
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            className={`chip${checked ? " on" : ""}`}
            autoFocus={autoFocus}
            onClick={() => onChange(input.pts)}
          >
            Sí{suffix}
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={!checked}
            tabIndex={!checked ? 0 : -1}
            className={`chip${!checked ? " on" : ""}`}
            onClick={() => onChange(0)}
          >
            No
          </button>
        </div>
      </div>
    );
  }

  return (
    <label className={`cf-chk${checked ? " on" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.checked ? input.pts : 0)}
      />
      <span>
        {input.label}
        {suffix && <em>{suffix}</em>}
      </span>
    </label>
  );
}
