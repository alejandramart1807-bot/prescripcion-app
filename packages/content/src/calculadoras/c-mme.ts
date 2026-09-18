// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-mme",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Equivalencia de opioides (MME)",
  "aka": "equivalencia opioides morfina mme conversion rotacion",
  "page": "Calculadora",
  "sub": "Miligramos equivalentes de morfina oral por día.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "mo",
        "label": "Morfina VO",
        "type": "num",
        "unit": "mg/día",
        "ph": undefined
      },
      {
        "id": "mi",
        "label": "Morfina IV",
        "type": "num",
        "unit": "mg/día",
        "ph": undefined
      },
      {
        "id": "ox",
        "label": "Oxicodona VO",
        "type": "num",
        "unit": "mg/día",
        "ph": undefined
      },
      {
        "id": "hi",
        "label": "Hidromorfona VO",
        "type": "num",
        "unit": "mg/día",
        "ph": undefined
      },
      {
        "id": "tr",
        "label": "Tramadol",
        "type": "num",
        "unit": "mg/día",
        "ph": undefined
      },
      {
        "id": "co",
        "label": "Codeína",
        "type": "num",
        "unit": "mg/día",
        "ph": undefined
      },
      {
        "id": "fe",
        "label": "Fentanilo transdérmico",
        "type": "num",
        "unit": "mcg/h",
        "ph": undefined
      }
    ],
    "compute": v=>{const g=x=>cN(x)?x:0;const t=g(v.mo)+3*g(v.mi)+1.5*g(v.ox)+5*g(v.hi)+0.2*g(v.tr)+0.15*g(v.co)+2.4*g(v.fe);if(!t)return null;return {v:`${cF(t,0)} MME/día`,t:`Al rotar: reduce 25–50 % por tolerancia cruzada incompleta (≈ ${cF(t*0.5,0)}–${cF(t*0.75,0)} mg de morfina VO/día). Metadona: no usar esta tabla.`,l:t>=90?"warn":"ok"};}
  }
};
