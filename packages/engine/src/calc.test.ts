import { describe, expect, it } from "vitest";
import { calcular } from "./calc.js";
import { fmt } from "./format.js";
import type { CalcSpec } from "./types.js";
import casosReales from "./__fixtures__/casos-reales.json" with { type: "json" };

/**
 * Casos generados desde la implementación ACTUAL de index.html (funciones
 * `calcText` / `calcCore`), no inventados. Se generaron con un script
 * temporal (no incluido en el repo) que:
 *
 *   1. Carga el <script> de index.html en un sandbox de Node (vm), con
 *      stubs mínimos de DOM/localStorage/sessionStorage (nada de contenido
 *      clínico se tocó ni se reescribió).
 *   2. Recorre las 358 fichas de `DX` y extrae cada `order.calc` real
 *      (224 especificaciones en las 358 fichas actuales).
 *   3. Para cada una, llama a `calcText(calc)` con los pesos
 *      [null, 1, 3, 10, 30, 70, 120, 200, 250] kg (el peso se fijaba con
 *      la función real `setKG`, igual que la UI).
 *   4. Vuelca los resultados a `__fixtures__/casos-reales.json`.
 *
 * Esta prueba es una red de seguridad de "no cambié nada", no una
 * validación de que la matemática es clínicamente correcta.
 */

interface CasoPrueba {
  id: string;
  calc: CalcSpec;
  casos: { pesoKg: number | null; esperado: string | null }[];
}

const CASOS = casosReales as unknown as CasoPrueba[];

describe("calcular() — paridad exacta con calcText()/calcCore() de index.html", () => {
  it("carga los 224 calc reales de las 358 fichas (todos los tipos)", () => {
    expect(CASOS.length).toBe(224);
    const tipos = new Set(CASOS.map((c) => c.calc.t));
    expect([...tipos].sort()).toEqual(
      ["altacv", "alteplase", "ccp", "h", "kg", "kgh", "kgmin", "min", "nac", "table", "tdd"].sort(),
    );
  });

  for (const caso of CASOS) {
    describe(caso.id, () => {
      for (const { pesoKg, esperado } of caso.casos) {
        it(`peso ${pesoKg === null ? "sin ingresar" : pesoKg + " kg"} -> ${esperado === null ? "null" : JSON.stringify(esperado)}`, () => {
          const resultado = calcular(caso.calc, pesoKg);
          if (esperado === null) {
            expect(resultado).toBeNull();
          } else {
            expect(resultado).not.toBeNull();
            expect(resultado!.texto).toBe(esperado);
          }
        });
      }
    });
  }
});

describe("calcular() — bandera de advertencia coherente con la UI original", () => {
  // La UI original (calcHTML) decidía resaltar el resultado con:
  //   const w = /Tope máximo|Verifica el peso/.test(t);
  // `advertencia` debe reproducir exactamente esa misma señal.
  it("advertencia === /Tope máximo|Verifica el peso/.test(texto) en todos los casos reales", () => {
    for (const caso of CASOS) {
      for (const { pesoKg, esperado } of caso.casos) {
        if (esperado === null) continue;
        const resultado = calcular(caso.calc, pesoKg)!;
        const esperadaAdvertencia = /Tope máximo|Verifica el peso/.test(esperado);
        expect(resultado.advertencia).toBe(esperadaAdvertencia);
      }
    }
  });
});

describe("casos borde explícitos (documentados aparte, aunque ya están cubiertos arriba)", () => {
  it("min NO requiere peso: da resultado incluso con pesoKg = null", () => {
    // bradi#5 — Adrenalina (alternativa): {t:"min",lo:2,hi:10,conc:16}
    const calc: CalcSpec = { t: "min", lo: 2, hi: 10, conc: 16 };
    expect(calcular(calc, null)?.texto).toBe("≈ 7,5–37,5 mL/h");
    expect(calcular(calc, 70)?.texto).toBe("≈ 7,5–37,5 mL/h"); // el peso no cambia nada
  });

  it("h NO requiere peso: da resultado incluso con pesoKg = null", () => {
    // he-general#2 — Nicardipino: {t:"h",lo:5,hi:15,conc:0.1,unit:"mg"}
    const calc: CalcSpec = { t: "h", lo: 5, hi: 15, conc: 0.1, unit: "mg" };
    expect(calcular(calc, null)?.texto).toBe("≈ 50–150 mL/h");
    expect(calcular(calc, 200)?.texto).toBe("≈ 50–150 mL/h");
  });

  it("kgmin, kgh y kg SÍ requieren peso: null sin peso ingresado", () => {
    expect(calcular({ t: "kgmin", lo: 5, hi: 20, conc: 1600 }, null)).toBeNull();
    expect(calcular({ t: "kgh", lo: 12, hi: 18, conc: 100, unit: "U" }, null)).toBeNull();
    expect(calcular({ t: "kg", lo: 30, hi: 30, unit: "mL", label: "30 mL/kg =" }, null)).toBeNull();
  });

  it('peso < 3 kg o > 200 kg antepone "Verifica el peso · " (advertencia, no bloqueo)', () => {
    // reanimacion#6 — Cristaloide en bolo: {t:"kg",lo:30,hi:30,unit:"mL",label:"30 mL/kg ="}
    const calc: CalcSpec = { t: "kg", lo: 30, hi: 30, unit: "mL", label: "30 mL/kg =" };
    expect(calcular(calc, 1)?.texto).toBe("Verifica el peso · 1 kg → 30 mL/kg = 30 mL");
    expect(calcular(calc, 250)?.texto).toBe("Verifica el peso · 250 kg → 30 mL/kg = 7.500 mL");
    // 3 y 200 son los límites inclusive: NO llevan advertencia.
    expect(calcular(calc, 3)?.texto).toBe("3 kg → 30 mL/kg = 90 mL");
    expect(calcular(calc, 200)?.texto).toBe("200 kg → 30 mL/kg = 6.000 mL");
    expect(calcular(calc, 1)?.advertencia).toBe(true);
    expect(calcular(calc, 3)?.advertencia).toBe(false);
  });

  it('tipo "kg" con max aplica el tope y agrega "· Tope máximo aplicado" (sufijo)', () => {
    // anest-locales#0 — Lidocaína sin epinefrina: {t:"kg",lo:4.5,hi:4.5,unit:"mg",max:300}
    const calc: CalcSpec = { t: "kg", lo: 4.5, hi: 4.5, unit: "mg", max: 300 };
    expect(calcular(calc, 30)?.texto).toBe("30 kg → 135 mg"); // 4.5*30=135, bajo el tope: sin advertencia
    expect(calcular(calc, 70)?.texto).toBe("70 kg → 300 mg · Tope máximo aplicado"); // 4.5*70=315 > 300
    expect(calcular(calc, 70)?.advertencia).toBe(true);
  });

  it('tipo "kgh" con maxRate aplica el tope y antepone "Tope máximo aplicado · " (prefijo)', () => {
    // iamsest#7 — Heparina no fraccionada: {t:"kgh",lo:12,hi:12,conc:100,unit:"U",maxRate:1000}
    const calc: CalcSpec = { t: "kgh", lo: 12, hi: 12, conc: 100, unit: "U", maxRate: 1000 };
    expect(calcular(calc, 70)?.texto).toBe("70 kg → 8,4 mL/h (840 U/h)"); // 12*70=840, bajo el tope
    expect(calcular(calc, 120)?.texto).toBe("120 kg → Tope máximo aplicado · 10 mL/h (1.000 U/h)"); // 12*120=1440 > 1000
  });

  it('tipo "table" corta exactamente en el peso (kg < corte, no <=)', () => {
    // fa-24#8 — Propafenona: {t:"table",rows:[[70,"450 mg VO"],[999,"600 mg VO"]]}
    const calc: CalcSpec = { t: "table", rows: [[70, "450 mg VO"], [999, "600 mg VO"]] };
    expect(calcular(calc, 69)?.texto).toBe("69 kg → 450 mg VO");
    // A los 70 kg exactos YA no cumple kg < 70, así que pasa al siguiente tramo.
    expect(calcular(calc, 70)?.texto).toBe("70 kg → 600 mg VO");
  });

  it("los 5 esquemas especiales (ccp, tdd, altacv, nac, alteplase) no aceptan parámetros: solo dependen del peso", () => {
    expect(calcular({ t: "ccp" }, 70)?.texto).toBe("70 kg → INR 2–4: 1.750 U · 4–6: 2.450 U · > 6: 3.500 U");
    expect(calcular({ t: "tdd", lo: 0.4, hi: 0.5 }, 70)?.texto).toBe(
      "70 kg → total 28–35 U/día: basal 14–18 U + 5–6 U por comida",
    );
    expect(calcular({ t: "altacv" }, 70)?.texto).toBe("70 kg → total 63 mg: bolo 6,3 mg + 56,7 mg en 60 min");
    expect(calcular({ t: "nac" }, 70)?.texto).toBe("70 kg → 10.500 mg + 3.500 mg + 7.000 mg");
    expect(calcular({ t: "alteplase" }, 70)?.texto).toBe("70 kg → 15 mg + 50 mg + 35 mg = 100 mg");
  });

  it("altacv, nac y alteplase tienen sus propios topes internos (no dependen de max/maxRate)", () => {
    // altacv: min(0.9*kg, 90) — el tope de 90 mg se alcanza en 100 kg
    expect(calcular({ t: "altacv" }, 100)?.texto).toBe("100 kg → total 90 mg: bolo 9 mg + 81 mg en 60 min");
    expect(calcular({ t: "altacv" }, 200)?.texto).toBe("200 kg → total 90 mg: bolo 9 mg + 81 mg en 60 min");
    // nac: min(kg,100) para las 3 dosis — el tope se alcanza en 100 kg
    expect(calcular({ t: "nac" }, 100)?.texto).toBe("100 kg → 15.000 mg + 5.000 mg + 10.000 mg");
    expect(calcular({ t: "nac" }, 200)?.texto).toBe("200 kg → 15.000 mg + 5.000 mg + 10.000 mg");
  });

  it('unidad por defecto ("mcg") cuando el CalcSpec no trae "unit" (comportamiento genérico del motor, no de una ficha real)', () => {
    // Ninguna ficha real omite `unit` en tipo "kg"/"kgh", pero calcText() sí
    // tiene un valor por defecto (`u = c.unit || "mcg"`) y el motor debe
    // conservarlo tal cual.
    const calc = { t: "kg", lo: 1, hi: 1 } as CalcSpec;
    expect(calcular(calc, 10)?.texto).toBe("10 kg → 10 mcg");
  });
});

describe("fmt() — formateo es-CO (separador decimal coma, miles punto)", () => {
  it("usa coma decimal y punto de miles, con 1 decimal por defecto", () => {
    expect(fmt(1234.5)).toBe("1.234,5");
    expect(fmt(0.5, 2)).toBe("0,5");
  });

  it("redondea igual que Math.round(n * 10^d) / 10^d antes de formatear", () => {
    expect(fmt(2.25, 1)).toBe(fmt(Math.round(2.25 * 10) / 10, 1));
    expect(fmt(0, 0)).toBe("0");
  });
});
