import type { InputDate } from "@tinterno/content";

interface CampoFechaProps {
  input: InputDate;
  value: string;
  onChange: (raw: string) => void;
  autoFocus?: boolean;
}

export default function CampoFecha({ input, value, onChange, autoFocus }: CampoFechaProps) {
  return (
    <label className="cf-row" htmlFor={`f-${input.id}`}>
      <span>{input.label}</span>
      <input
        type="date"
        id={`f-${input.id}`}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
