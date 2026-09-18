// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-cacorr",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Calcio corregido por albúmina",
  "aka": "calcio corregido albumina",
  "page": "Calculadora",
  "sub": "Ca + 0,8 × (4 − albúmina).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "ca",
        "label": "Calcio total",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "alb",
        "label": "Albúmina",
        "type": "num",
        "unit": "g/dL",
        "ph": undefined
      }
    ],
    "compute": v=>cN(v.ca,v.alb)?{v:`${cF(v.ca+0.8*(4-v.alb))} mg/dL`,t:"Si hay duda, mide calcio iónico",l:"ok"}:null
  }
};
