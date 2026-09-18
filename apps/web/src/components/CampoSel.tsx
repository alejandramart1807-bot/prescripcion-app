import { useRef } from "react";
import type { KeyboardEvent } from "react";
import type { InputSel } from "@tinterno/content";
import { CHIP_MAX_OPTIONS } from "../constants";

interface CampoSelProps {
  input: InputSel;
  value: number;
  onChange: (value: number) => void;
  /** Foco automático al montar (usado en modo enfocado al avanzar de pregunta). */
  autoFocus?: boolean;
}

/**
 * Campo de opción única. Con 5 alternativas o menos se muestra como chips
 * segmentados (visibles de un toque, sin abrir nada); con más de
 * {@link CHIP_MAX_OPTIONS} cae a un `<select>` nativo para no saturar la
 * pantalla.
 */
export default function CampoSel({ input, value, onChange, autoFocus }: CampoSelProps) {
  const groupRef = useRef<HTMLDivElement>(null);

  if (input.opts.length > CHIP_MAX_OPTIONS) {
    return (
      <label className="cf-row" htmlFor={`f-${input.id}`}>
        <span>{input.label}</span>
        <select
          id={`f-${input.id}`}
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        >
          {input.opts.map(([text, val]) => (
            <option key={text} value={val}>
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }

  const selectedIndex = input.opts.findIndex(([, val]) => val === value);

  function focusChip(index: number) {
    const el = groupRef.current?.querySelectorAll<HTMLButtonElement>("[role='radio']")[index];
    el?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = input.opts.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      const opt = input.opts[next];
      if (opt) {
        onChange(opt[1]);
        focusChip(next);
      }
    }
  }

  return (
    <div className="cf-row cf-row-chips">
      <span id={`lbl-${input.id}`}>{input.label}</span>
      <div
        ref={groupRef}
        className="chipgroup"
        role="radiogroup"
        aria-labelledby={`lbl-${input.id}`}
      >
        {input.opts.map(([text, val], i) => {
          const checked = i === selectedIndex;
          return (
            <button
              key={text}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={checked || selectedIndex === -1 ? 0 : -1}
              className={`chip${checked ? " on" : ""}`}
              autoFocus={autoFocus && i === 0}
              onClick={() => onChange(val)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
