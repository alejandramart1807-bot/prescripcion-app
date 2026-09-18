import { useEffect, useRef, useState } from "react";
import type { CalcInput, CalcResult } from "@tinterno/content";
import type { Answers } from "../lib/calcAnswers";
import CalcCampo from "./CalcCampo";

const AUTO_ADVANCE_MS = 220; // mismo orden de magnitud que --t (180-220ms) del sistema de diseño

interface CalcFocusedFormProps {
  inputs: CalcInput[];
  answers: Answers;
  onAnswer: (id: string, value: number | string) => void;
  result: CalcResult | null;
  /** Se llama al responder la última pregunta: pasa a la lista completa para revisar/editar. */
  onFinish: () => void;
  /** Escape hatch: el usuario puede pedir la lista completa en cualquier momento. */
  onShowList: () => void;
}

/**
 * Modo enfocado: una pregunta a la vez, a pantalla completa, para
 * calculadoras largas (NIHSS, CIWA-Ar, PHQ-9…). Puntaje acumulado siempre
 * visible arriba, avance automático al elegir chip/fecha, avance manual
 * (Enter o botón) en campos numéricos, y navegación Anterior/Siguiente para
 * devolverse.
 */
export default function CalcFocusedForm({
  inputs,
  answers,
  onAnswer,
  result,
  onFinish,
  onShowList,
}: CalcFocusedFormProps) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const total = inputs.length;
  const current = inputs[index];
  if (!current) return null;
  const isLast = index === total - 1;

  function goNext() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIndex((i) => {
      if (i >= total - 1) {
        onFinish();
        return i;
      }
      return i + 1;
    });
  }

  function goPrev() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setIndex((i) => Math.max(0, i - 1));
  }

  function handleAnswer(input: CalcInput, value: number | string) {
    onAnswer(input.id, value);
    if (input.type === "num") return; // el numérico avanza con Enter o el botón, no solo, para no cortar la escritura
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(goNext, AUTO_ADVANCE_MS);
  }

  const progressPct = Math.round(((index + 1) / total) * 100);

  return (
    <div className="cf-focus">
      <div className="cf-focus-top">
        <button
          type="button"
          className="cf-focus-back"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Pregunta anterior"
        >
          ←
        </button>
        <div className="cf-focus-progress">
          <div className="cf-focus-bar">
            <div className="cf-focus-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
          <span className="cf-focus-step">
            Pregunta {index + 1} de {total}
          </span>
        </div>
        <button type="button" className="cf-focus-list-link" onClick={onShowList}>
          Ver todas
        </button>
      </div>

      <div className={`cf-focus-score${result ? ` ${result.l || ""}` : ""}`} aria-live="polite">
        {result ? (
          <>
            <span className="cf-focus-score-v">{result.v}</span>
            {result.t && <span className="cf-focus-score-t">{result.t}</span>}
          </>
        ) : (
          <span className="cf-focus-score-v muted">Puntaje: completa los datos</span>
        )}
      </div>

      <div className="cf-focus-q" key={current.id}>
        <CalcCampo
          input={current}
          answers={answers}
          onAnswer={(id, value) => handleAnswer(current, value)}
          chkVariant="choice"
          onEnter={goNext}
          autoFocus
        />
      </div>

      <div className="cf-focus-nav">
        <button type="button" className="btn secondary" onClick={goPrev} disabled={index === 0}>
          Anterior
        </button>
        <button type="button" className="btn primary" onClick={goNext}>
          {isLast ? "Ver resultado" : "Siguiente"}
        </button>
      </div>
    </div>
  );
}
