import type { CalcResult } from "@tinterno/content";

interface ResultadoCalcProps {
  result: CalcResult | null;
  /** Fija el panel de resultado abajo en vez de arriba (modo enfocado en móvil). */
  pinned?: "top" | "bottom";
}

/**
 * Resultado de la calculadora, siempre visible. El color viene de `l`
 * ("ok" | "warn" | "bad") tal como lo devuelve `compute()` — no se
 * reinterpreta ni se recalcula aquí.
 */
export default function ResultadoCalc({ result, pinned = "top" }: ResultadoCalcProps) {
  return (
    <div className={`panel cf-res cf-res-${pinned}`} aria-live="polite">
      {result ? (
        <>
          <div className={`cf-val ${result.l || ""}`}>{result.v}</div>
          {result.t && <div className="cf-txt">{result.t}</div>}
        </>
      ) : (
        <div className="cf-txt muted">Completa los datos para calcular</div>
      )}
    </div>
  );
}
