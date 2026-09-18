// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-bisap",
  "sys": "Escalas y calculadoras",
  "group": "Digestivo",
  "name": "BISAP (pancreatitis)",
  "aka": "bisap pancreatitis gravedad",
  "page": "Calculadora",
  "sub": "En las primeras 24 h.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "BUN > 25 mg/dL",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Alteración del estado mental",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "SIRS (≥ 2 criterios)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "Edad > 60",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Derrame pleural",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);return {v:`${s}/5`,t:s>=3?"Mayor riesgo de mortalidad y pancreatitis grave":"Riesgo bajo",l:s>=3?"bad":"ok"};}
  }
};
