// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-nacorr",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Sodio corregido por glucosa",
  "aka": "sodio corregido hiperglucemia pseudohiponatremia",
  "page": "Calculadora",
  "sub": "Factor 1,6 (clásico) y 2,4 (Hillier).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "na",
        "label": "Sodio",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "g",
        "label": "Glucosa",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      }
    ],
    "compute": v=>cN(v.na,v.g)?{v:`${cF(v.na+1.6*(v.g-100)/100)} (×1,6) · ${cF(v.na+2.4*(v.g-100)/100)} (×2,4) mEq/L`,t:"",l:"ok"}:null
  }
};
