import { describe, expect, it } from "vitest";
import { calcular } from "./calc.js";
import { calcularInfusion, formatearInfusion } from "./infusion.js";
import { fmtPeso } from "./format.js";
import type { CalcSpec } from "./types.js";

/**
 * El peso del paciente se muestra con convención colombiana —coma para
 * decimales, punto para miles— y SIN redondear lo que el médico digitó.
 *
 * El motor original lo interpolaba crudo, y con pesos decimales producía
 * líneas como "12.5 kg → 1.125 mg", donde el mismo punto es decimal en un
 * número y miles en el otro. En pediatría todo peso lleva decimal, así que
 * aparecía en cada ficha.
 */
const AMOX: CalcSpec = { t: "kg", lo: 90, hi: 90, unit: "mg", label: "/día", max: 4000 };
const NORA: CalcSpec = { t: "kgmin", lo: 0.05, hi: 1, conc: 16 };

describe("formato del peso", () => {
  it("usa coma para decimales", () => {
    expect(fmtPeso(3.4)).toBe("3,4");
    expect(fmtPeso(12.5)).toBe("12,5");
  });

  it("usa punto para miles", () => {
    expect(fmtPeso(1234)).toBe("1.234");
  });

  it("NO redondea el peso digitado", () => {
    // Con fmt() esto daría "7,3" y el peso en pantalla dejaría de cuadrar
    // con la dosis, que se calcula con el valor exacto.
    expect(fmtPeso(7.25)).toBe("7,25");
    expect(fmtPeso(3.25)).toBe("3,25");
    expect(fmtPeso(0.85)).toBe("0,85");
  });

  it("no agrega ceros de relleno a los pesos enteros", () => {
    for (const kg of [3, 10, 30, 70, 120, 200]) expect(fmtPeso(kg)).toBe(String(kg));
  });
});

describe("el peso decimal llega bien al texto del cálculo", () => {
  it("desambigua decimal y miles en la misma línea", () => {
    expect(calcular(AMOX, 12.5)?.texto).toBe("12,5 kg → 1.125 mg /día");
  });

  it("conserva los decimales del peso en bolos", () => {
    expect(calcular(AMOX, 3.25)?.texto).toBe("3,25 kg → 292,5 mg /día");
  });

  it("conserva los decimales del peso en infusiones", () => {
    const inf = calcularInfusion(NORA, 62.5);
    expect(inf).not.toBeNull();
    expect(formatearInfusion(inf!)).toMatch(/^62,5 kg → inicia /);
  });

  it("los pesos enteros siguen exactamente igual que en la v7", () => {
    expect(calcular(AMOX, 30)?.texto).toBe("30 kg → 2.700 mg /día");
    expect(calcular(AMOX, 70)?.texto).toBe("70 kg → 4.000 mg /día · Tope máximo aplicado");
  });
});
