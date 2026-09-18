import type { InputNum } from "@tinterno/content";

interface CampoNumProps {
  input: InputNum;
  /** Texto tal como lo escribe el usuario (se conserva la coma decimal). */
  value: string;
  onChange: (raw: string) => void;
  onEnter?: () => void;
  autoFocus?: boolean;
}

/**
 * Campo numérico en formato es-CO: coma decimal, teclado numérico en móvil
 * (`inputMode="decimal"`). Se usa `type="text"` en vez de `type="number"`
 * porque los `<input type="number">` fuerzan punto decimal en la mayoría de
 * navegadores sin importar el idioma, lo que rompe "1,5".
 */
export default function CampoNum({ input, value, onChange, onEnter, autoFocus }: CampoNumProps) {
  return (
    <label className="cf-row" htmlFor={`f-${input.id}`}>
      <span>{input.label}</span>
      <span className="cf-in">
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          id={`f-${input.id}`}
          value={value}
          placeholder={input.ph || ""}
          autoFocus={autoFocus}
          onChange={(e) => {
            const next = e.target.value;
            // Solo dígitos, coma, punto y signo menos (valores clínicos negativos existen, ej. exceso de bases).
            if (/^-?[0-9]*[.,]?[0-9]*$/.test(next)) onChange(next);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onEnter) onEnter();
          }}
        />
        {input.unit && <em>{input.unit}</em>}
      </span>
    </label>
  );
}
