import type { CalcInput } from "@tinterno/content";
import type { Answers } from "../lib/calcAnswers";
import CampoSel from "./CampoSel";
import CampoChk from "./CampoChk";
import CampoNum from "./CampoNum";
import CampoFecha from "./CampoFecha";

interface CalcCampoProps {
  input: CalcInput;
  answers: Answers;
  onAnswer: (id: string, value: number | string) => void;
  chkVariant?: "row" | "choice";
  onEnter?: () => void;
  autoFocus?: boolean;
}

/** Dispatcher: elige el componente de campo correcto según `input.type`. */
export default function CalcCampo({ input, answers, onAnswer, chkVariant, onEnter, autoFocus }: CalcCampoProps) {
  switch (input.type) {
    case "sel":
      return (
        <CampoSel
          input={input}
          value={Number(answers[input.id])}
          onChange={(v) => onAnswer(input.id, v)}
          autoFocus={autoFocus}
        />
      );
    case "chk":
      return (
        <CampoChk
          input={input}
          value={Number(answers[input.id])}
          onChange={(v) => onAnswer(input.id, v)}
          variant={chkVariant}
          autoFocus={autoFocus}
        />
      );
    case "num":
      return (
        <CampoNum
          input={input}
          value={String(answers[input.id] ?? "")}
          onChange={(v) => onAnswer(input.id, v)}
          onEnter={onEnter}
          autoFocus={autoFocus}
        />
      );
    case "date":
      return (
        <CampoFecha
          input={input}
          value={String(answers[input.id] ?? "")}
          onChange={(v) => onAnswer(input.id, v)}
          autoFocus={autoFocus}
        />
      );
  }
}
