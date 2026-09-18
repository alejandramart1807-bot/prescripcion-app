import type { CalcInput } from "@tinterno/content";
import type { Answers } from "../lib/calcAnswers";
import CalcCampo from "./CalcCampo";

interface CalcListFormProps {
  inputs: CalcInput[];
  answers: Answers;
  onAnswer: (id: string, value: number | string) => void;
}

/** Lista normal: todos los campos visibles a la vez, con chips para las opciones cortas. */
export default function CalcListForm({ inputs, answers, onAnswer }: CalcListFormProps) {
  return (
    <div className="cf">
      {inputs.map((input) => (
        <CalcCampo key={input.id} input={input} answers={answers} onAnswer={onAnswer} chkVariant="row" />
      ))}
    </div>
  );
}
