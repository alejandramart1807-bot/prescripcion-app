import type { CalcInput } from "@tinterno/content";
import { parseDecimalCO } from "./format";

/**
 * Estado de respuestas de una calculadora.
 *
 * - `sel` y `chk` guardan directamente el número que `compute()` espera
 *   (el puntaje de la opción elegida, o 0 si el `chk` no está marcado) —
 *   igual que el `<select>`/checkbox nativos del index.html original.
 * - `num` y `date` guardan el texto tal como lo escribió el usuario (para
 *   no perder lo que está tecleando); se convierten a number/string recién
 *   al armar el objeto que recibe `compute()`.
 */
export type Answers = Record<string, number | string>;

/** Valor inicial de un campo `sel`: la primera opción (mismo comportamiento que un `<select>` sin tocar). */
function defaultFor(input: CalcInput, kgFromSession: string | null): number | string {
  switch (input.type) {
    case "sel":
      return input.opts[0]?.[1] ?? 0;
    case "chk":
      return 0;
    case "num":
      return input.id === "peso" && kgFromSession ? kgFromSession : "";
    case "date":
      return "";
  }
}

export function initialAnswers(inputs: CalcInput[]): Answers {
  let kgFromSession: string | null = null;
  try {
    const raw = sessionStorage.getItem("tinterno-kg");
    const kg = raw ? Number(raw) : 0;
    if (kg > 0) kgFromSession = String(kg).replace(".", ",");
  } catch {
    // sessionStorage puede no estar disponible (modo privado, SSR, etc.); no es crítico.
  }
  const answers: Answers = {};
  for (const input of inputs) {
    answers[input.id] = defaultFor(input, kgFromSession);
  }
  return answers;
}

/** Arma el objeto `v` que recibe `calcForm.compute(v)` a partir de las respuestas actuales. */
export function toComputeInput(inputs: CalcInput[], answers: Answers): Record<string, any> {
  const v: Record<string, any> = {};
  for (const input of inputs) {
    const raw = answers[input.id];
    if (input.type === "num") {
      v[input.id] = typeof raw === "string" ? parseDecimalCO(raw) : raw;
    } else {
      v[input.id] = raw;
    }
  }
  return v;
}

/** Si el campo ya tiene una respuesta "real" del usuario (no solo el valor por defecto vacío). */
export function isAnswered(input: CalcInput, answers: Answers): boolean {
  const raw = answers[input.id];
  if (input.type === "num" || input.type === "date") return raw !== "";
  return true; // sel y chk siempre tienen un valor válido (por defecto o elegido)
}
