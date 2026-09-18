// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "lra",
  "sys": "Nefrología",
  "group": "Riñón",
  "name": "Lesión renal aguda (LRA)",
  "aka": "lra lesion renal aguda falla renal aguda creatinina oliguria kdigo",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "↑ Cr ≥ 0,3 mg/dL en 48 h, ≥ 1,5 veces la basal en 7 días, o diuresis < 0,5 mL/kg/h por 6 h.",
  "flow": [
    [
      "1",
      "Prerrenal, renal o posrenal"
    ],
    [
      "2",
      "Suspende nefrotóxicos y ajusta dosis"
    ],
    [
      "3",
      "Volemia óptima"
    ],
    [
      "4",
      "¿Criterio de diálisis urgente?"
    ]
  ],
  "criteria": [
    "Pide ecografía renal, parcial de orina, sodio y creatinina urinarios (FENa; FEUrea si usa diurético).",
    "Diálisis urgente: acidosis pH < 7,1 refractaria, K⁺ > 6,5 refractario, sobrecarga refractaria, uremia complicada (pericarditis, encefalopatía), tóxicos dializables."
  ],
  "orders": [
    {
      "d": "Suspender nefrotóxicos",
      "n": "AINE, aminoglucósidos, contraste innecesario, metformina; IECA/ARA-II y diuréticos de forma transitoria."
    },
    {
      "d": "Cristaloide balanceado si hipovolemia",
      "dose": "Lactato de Ringer 500 mL en bolo y reevaluar",
      "a": "SSN 0,9 %."
    },
    {
      "d": "Sonda vesical si retención urinaria",
      "n": "Posrenal: descompresión urgente."
    },
    {
      "d": "Furosemida solo si sobrecarga",
      "dose": "40–80 mg IV",
      "n": "No previene ni trata la LRA."
    },
    {
      "d": "Ajuste de dosis por TFG y balance hídrico estricto"
    }
  ],
  "goals": [
    "Diuresis ≥ 0,5 mL/kg/h",
    "Cr en descenso"
  ],
  "alerts": [
    "Hiperpotasemia: ver su ficha",
    "Evita sobrecarga de volumen"
  ],
  "rel": [
    "c-ckdepi",
    "c-fena",
    "mi-lra"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "rabdo",
  "sys": "Nefrología",
  "group": "Riñón",
  "name": "Rabdomiólisis",
  "aka": "rabdomiolisis ck cpk mioglobinuria",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "CK > 5 veces lo normal (usualmente > 1000 U/L) con mialgias u orina oscura; riesgo renal alto si CK > 5000.",
  "flow": [
    [
      "1",
      "Líquidos agresivos"
    ],
    [
      "2",
      "Diuresis 200–300 mL/h"
    ],
    [
      "3",
      "K⁺, Ca²⁺, fósforo"
    ],
    [
      "4",
      "Síndrome compartimental"
    ]
  ],
  "criteria": [
    "Causas: trauma, esfuerzo, convulsiones, tóxicos (cocaína), estatinas, hipopotasemia, infecciones, ofidismo crotálico."
  ],
  "orders": [
    {
      "d": "SSN 0,9 % o Lactato de Ringer",
      "dose": "1–2 L en la primera hora, luego ajustar para diuresis 200–300 mL/h (~3 mL/kg/h)",
      "n": "Continuar hasta CK < 5000 y en descenso."
    },
    {
      "d": "Electrolitos c/6–8 h",
      "n": "No corregir la hipocalcemia salvo síntomas o hiperpotasemia."
    },
    {
      "d": "Bicarbonato",
      "n": "No de rutina."
    }
  ],
  "goals": [
    "Diuresis 200–300 mL/h",
    "CK en descenso"
  ],
  "alerts": [
    "Sobrecarga si hay oliguria: considera diálisis",
    "Mide presión compartimental si hay dolor y tensión"
  ],
  "rel": [
    "mi-lra"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "hiperca",
  "sys": "Nefrología",
  "group": "Calcio",
  "name": "Hipercalcemia",
  "aka": "hipercalcemia calcio alto cancer hiperparatiroidismo zoledronico",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "Calcio corregido > 10,5 mg/dL; grave si > 14 mg/dL o síntomas (confusión, vómito, deshidratación, arritmia).",
  "flow": [
    [
      "1",
      "SSN"
    ],
    [
      "2",
      "Calcitonina (rápida)"
    ],
    [
      "3",
      "Bifosfonato (lenta, sostenida)"
    ],
    [
      "4",
      "Causa: PTH, malignidad"
    ]
  ],
  "criteria": [
    "Ca corregido = Ca + 0,8 × (4 − albúmina). Pide PTH, PTHrP, vitamina D, fósforo."
  ],
  "orders": [
    {
      "d": "SSN 0,9 %",
      "dose": "1–2 L en bolo, luego 200–300 mL/h para diuresis 100–150 mL/h"
    },
    {
      "d": "Calcitonina",
      "dose": "4 UI/kg IM/SC c/12 h por máx 48 h",
      "calc": {
        "t": "kg",
        "lo": 4,
        "hi": 4,
        "unit": "UI"
      }
    },
    {
      "d": "Ácido zoledrónico",
      "dose": "4 mg IV en 15 min (ajusta si ClCr < 60; evitar si < 30)",
      "a": "Pamidronato 60–90 mg IV en 2–4 h; con falla renal: denosumab 120 mg SC."
    },
    {
      "d": "Glucocorticoide (linfoma, granulomatosis, intoxicación por vitamina D)",
      "dose": "Prednisona 40–60 mg/día"
    },
    {
      "d": "Furosemida solo si sobrecarga"
    },
    {
      "d": "Hemodiálisis si refractaria o falla renal"
    }
  ],
  "goals": [
    "Ca corregido < 12 mg/dL",
    "Mejoría neurológica"
  ],
  "alerts": [
    "Suspende tiazidas, litio, calcio y vitamina D"
  ],
  "rel": [
    "mi-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "hipoca",
  "sys": "Nefrología",
  "group": "Calcio",
  "name": "Hipocalcemia",
  "aka": "hipocalcemia calcio bajo tetania gluconato de calcio",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "Calcio corregido < 8,5 mg/dL o iónico < 1,1 mmol/L; urgente si síntomas (tetania, convulsión, QT largo).",
  "flow": [
    [
      "1",
      "Corrige magnesio"
    ],
    [
      "2",
      "Gluconato de calcio IV"
    ],
    [
      "3",
      "Infusión si persiste"
    ],
    [
      "4",
      "Causa: PTH, vitamina D"
    ]
  ],
  "criteria": [
    "Confirma con calcio iónico."
  ],
  "orders": [
    {
      "d": "Gluconato de calcio 10 %",
      "dose": "10–20 mL (1–2 g) en 50–100 mL DAD5 % en 10–20 min",
      "a": "Cloruro de calcio 10 % 10 mL por vía central (3 veces más calcio elemental)."
    },
    {
      "d": "Infusión de calcio si persiste",
      "dose": "0,5–1,5 mg/kg/h de calcio elemental",
      "dil": "11 g de gluconato (110 mL al 10 %) en 890 mL DAD5 % ≈ 1 mg/mL de calcio elemental",
      "calc": {
        "t": "kgh",
        "lo": 0.5,
        "hi": 1.5,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "Sulfato de magnesio si Mg bajo",
      "dose": "2 g IV en 1 h"
    },
    {
      "d": "Calcitriol si hipoparatiroidismo",
      "dose": "0,25–0,5 mcg VO c/12 h + calcio oral 1–2 g/día"
    }
  ],
  "goals": [
    "Resolución de síntomas",
    "Ca iónico > 1 mmol/L"
  ],
  "alerts": [
    "No mezclar calcio con bicarbonato ni fosfato",
    "Monitoreo ECG, sobre todo con digoxina"
  ],
  "rel": [
    "mi-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "hiperk",
  "sys": "Nefrología",
  "group": "Potasio y sodio",
  "name": "Hiperpotasemia",
  "aka": "hiperpotasemia hiperkalemia potasio alto",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "K⁺ ≥ 6,5 mEq/L o cualquier nivel con cambios en el ECG: emergencia.",
  "flow": [
    [
      "1",
      "Estabiliza membrana: calcio"
    ],
    [
      "2",
      "Redistribuye: insulina + glucosa, salbutamol"
    ],
    [
      "3",
      "Elimina: diurético, resina, diálisis"
    ]
  ],
  "criteria": [
    "Descarta seudohiperpotasemia (hemólisis).",
    "Suspende IECA, ARA-II, espironolactona, TMP-SMX, AINE, heparina, suplementos de K."
  ],
  "orders": [
    {
      "d": "Gluconato de calcio 10 %",
      "dose": "10–30 mL (1–3 g) IV en 5–10 min; repetir si persisten cambios ECG",
      "a": "Cloruro de calcio 10 % 10 mL por vía central."
    },
    {
      "d": "Insulina regular + dextrosa",
      "dose": "10 U IV + dextrosa 25 g (DAD 50 % 50 mL o DAD 10 % 250 mL)",
      "n": "5 U si ERC o riesgo de hipoglucemia; sin dextrosa si glucosa > 250. Glucometría c/1 h por 6 h."
    },
    {
      "d": "Salbutamol nebulizado",
      "dose": "10–20 mg (2–4 mL de solución 5 mg/mL) en 10 min",
      "a": "Salbutamol IDM 8–10 puff con inhalocámara."
    },
    {
      "d": "Bicarbonato de sodio (solo si acidosis metabólica)",
      "dose": "50–100 mEq IV en 15–30 min"
    },
    {
      "d": "Furosemida (si orina y volemia adecuada)",
      "dose": "40–80 mg IV"
    },
    {
      "d": "Resina de intercambio",
      "dose": "Poliestireno sulfonato de calcio 15–30 g VO c/6–8 h",
      "a": "Ciclosilicato de sodio y zirconio 10 g c/8 h o patirómero, si disponibles."
    },
    {
      "d": "Hemodiálisis si refractaria o falla renal"
    }
  ],
  "goals": [
    "ECG normalizado",
    "K⁺ < 5,5 mEq/L"
  ],
  "alerts": [
    "El calcio no baja el potasio: solo protege",
    "Recontrola K⁺ a 1–2 h y c/4–6 h"
  ],
  "rel": [
    "mi-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "hipok",
  "sys": "Nefrología",
  "group": "Potasio y sodio",
  "name": "Hipopotasemia",
  "aka": "hipopotasemia hipokalemia potasio bajo",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "K⁺ < 3,5 mEq/L; grave si < 2,5 o síntomas (debilidad, arritmias, íleo).",
  "flow": [
    [
      "1",
      "Corrige magnesio"
    ],
    [
      "2",
      "VO si tolera y no es grave"
    ],
    [
      "3",
      "IV si grave o arritmia"
    ],
    [
      "4",
      "Causa"
    ]
  ],
  "criteria": [
    "Cada 10 mEq suben ~0,1 mEq/L (depende del déficit total)."
  ],
  "orders": [
    {
      "d": "Cloruro de potasio IV",
      "dose": "20 mEq en 100 mL SSN en 2 h por vena periférica (10 mEq/h)",
      "n": "Hasta 20 mEq/h por catéter central con monitoreo ECG. No diluir en dextrosa.",
      "a": "Fosfato de potasio si hay hipofosfatemia asociada."
    },
    {
      "d": "Cloruro de potasio VO",
      "dose": "40–60 mEq/día en 2–3 tomas"
    },
    {
      "d": "Sulfato de magnesio",
      "dose": "2 g IV en 1 h si Mg bajo o arritmia"
    }
  ],
  "goals": [
    "K⁺ > 3,5 (> 4 en cardiópatas)"
  ],
  "alerts": [
    "Control de K⁺ c/4–6 h con reposición IV"
  ],
  "rel": [
    "mi-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "hiperna",
  "sys": "Nefrología",
  "group": "Potasio y sodio",
  "name": "Hipernatremia",
  "aka": "hipernatremia sodio alto deficit de agua",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "Na⁺ > 145 mEq/L. Casi siempre falta de acceso al agua.",
  "flow": [
    [
      "1",
      "Shock: SSN primero"
    ],
    [
      "2",
      "Calcula déficit de agua"
    ],
    [
      "3",
      "Corrige ≤ 10–12 mEq/L en 24 h (crónica)"
    ],
    [
      "4",
      "Causa: pérdidas, diabetes insípida"
    ]
  ],
  "criteria": [
    "Déficit de agua = ACT × (Na/140 − 1). ACT = peso × 0,6 (hombre) o 0,5 (mujer o anciano).",
    "Aguda (< 48 h): puede corregirse 1 mEq/L/h."
  ],
  "orders": [
    {
      "d": "Agua libre",
      "dose": "VO o SNG, o DAD 5 % IV, según el déficit calculado + pérdidas",
      "a": "SSN 0,45 % si también hay hipovolemia."
    },
    {
      "d": "Sodio c/4–6 h"
    },
    {
      "d": "Desmopresina si diabetes insípida central",
      "dose": "1–2 mcg IV/SC",
      "a": "Desmopresina oral o nasal si no hay parenteral."
    }
  ],
  "goals": [
    "Descenso ≤ 10–12 mEq/L en 24 h en crónica"
  ],
  "alerts": [
    "Corrección rápida en crónica → edema cerebral"
  ],
  "rel": [
    "c-agua",
    "mi-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
},
{
  "id": "hipona",
  "sys": "Nefrología",
  "group": "Potasio y sodio",
  "name": "Hiponatremia",
  "aka": "hiponatremia sodio bajo siadh solucion salina hipertonica",
  "page": "Fuente: KDIGO 2012 LRA · guías europeas 2014 de hiponatremia",
  "sub": "Na⁺ < 135 mEq/L. La urgencia la definen los síntomas, no la cifra.",
  "flow": [
    [
      "Síntomas graves",
      "SSN 3 % en bolo"
    ],
    [
      "Sin síntomas graves",
      "Según volemia"
    ],
    [
      "Límite",
      "8–10 mEq/L en 24 h"
    ],
    [
      "Sobrecorrección",
      "DAD 5 % + desmopresina"
    ]
  ],
  "criteria": [
    "Síntomas graves: vómito, convulsión, somnolencia profunda, coma.",
    "Pide osmolalidad sérica, osmolalidad y sodio urinarios, glucosa, TSH, cortisol."
  ],
  "orders": [
    {
      "d": "SSN 3 % (síntomas graves)",
      "dose": "150 mL IV en 20 min; repetir hasta 2–3 veces hasta ↑ 5 mEq/L",
      "dil": "SSN 0,9 % 400 mL + NaCl 20 % 50 mL ≈ 3 %"
    },
    {
      "d": "Hipovolémica",
      "dose": "SSN 0,9 %"
    },
    {
      "d": "Euvolémica (SIADH)",
      "dose": "Restricción hídrica 500–1000 mL/día",
      "a": "Urea 15–30 g/día VO o tolvaptán (disponibilidad limitada)."
    },
    {
      "d": "Hipervolémica",
      "dose": "Restricción hídrica + furosemida"
    },
    {
      "d": "Sodio c/2–4 h mientras se corrige"
    }
  ],
  "goals": [
    "↑ 4–6 mEq/L en las primeras 6 h si síntomas graves",
    "≤ 8 mEq/L en 24 h si alto riesgo de desmielinización"
  ],
  "alerts": [
    "Alto riesgo de desmielinización: Na < 105, alcoholismo, desnutrición, hipopotasemia, hepatopatía",
    "Sobrecorrección: DAD 5 % 3 mL/kg/h + desmopresina 2 mcg IV"
  ],
  "rel": [
    "c-adrogue",
    "c-nacorr",
    "mi-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 LRA · guías europeas 2014 de hiponatremia · revisiones de expertos",
    "dif": []
  }
}
];
