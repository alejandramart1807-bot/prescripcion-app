import { useMemo, useState } from "react";
import { DX } from "@tinterno/content";
import type { FichaCalc } from "@tinterno/content";
import { FOCUSED_MODE_THRESHOLD } from "../constants";
import { initialAnswers, toComputeInput, type Answers } from "../lib/calcAnswers";
import ResultadoCalc from "../components/ResultadoCalc";
import CalcListForm from "../components/CalcListForm";
import CalcFocusedForm from "../components/CalcFocusedForm";

function isFichaCalc(ficha: (typeof DX)[number]): ficha is FichaCalc {
  return "calcForm" in ficha && !!ficha.calcForm;
}

interface CalculatorPageProps {
  id: string;
}

export default function CalculatorPage({ id }: CalculatorPageProps) {
  const ficha = useMemo(() => {
    const found = DX.find((d) => d.id === id);
    return found && isFichaCalc(found) ? found : null;
  }, [id]);

  if (!ficha) {
    return (
      <div className="page">
        <p className="cf-txt">
          No encontramos la calculadora <code>{id}</code>.
        </p>
        <a className="btn secondary" href="#/">
          Volver al inicio
        </a>
      </div>
    );
  }

  return <CalculatorForm key={ficha.id} ficha={ficha} />;
}

function CalculatorForm({ ficha }: { ficha: FichaCalc }) {
  const inputs = ficha.calcForm.inputs;
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers(inputs));
  const isHeavy = inputs.length > FOCUSED_MODE_THRESHOLD;
  const [showList, setShowList] = useState(!isHeavy);

  const v = useMemo(() => toComputeInput(inputs, answers), [inputs, answers]);
  const result = useMemo(() => {
    try {
      return ficha.calcForm.compute(v);
    } catch {
      return null;
    }
  }, [ficha, v]);

  function onAnswer(id: string, value: number | string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <article className="page cf-page" aria-labelledby="ftitle">
      <header className="cf-head">
        <a className="cf-back" href="#/">
          ← Calculadoras
        </a>
        <h1 id="ftitle">{ficha.name}</h1>
        {ficha.sub && <p className="cf-sub">{ficha.sub}</p>}
      </header>

      {showList && <ResultadoCalc result={result} pinned="top" />}

      {showList ? (
        <>
          <CalcListForm inputs={inputs} answers={answers} onAnswer={onAnswer} />
          {ficha.notes.length > 0 && (
            <ul className="criteria">
              {ficha.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <CalcFocusedForm
          inputs={inputs}
          answers={answers}
          onAnswer={onAnswer}
          result={result}
          onFinish={() => setShowList(true)}
          onShowList={() => setShowList(true)}
        />
      )}

      {isHeavy && showList && (
        <button type="button" className="btn secondary cf-refocus" onClick={() => setShowList(false)}>
          Volver al modo enfocado
        </button>
      )}

      <p className="foot">Las escalas apoyan, no reemplazan, el juicio clínico.</p>
    </article>
  );
}
