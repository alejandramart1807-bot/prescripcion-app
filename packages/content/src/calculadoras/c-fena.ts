// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-fena",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Fracción excretada de sodio (FENa)",
  "aka": "fena fraccion excretada sodio lra prerrenal",
  "page": "Calculadora",
  "sub": "No interpretable con diuréticos (usa FEUrea).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "nau",
        "label": "Na urinario",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "nas",
        "label": "Na sérico",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "cru",
        "label": "Cr urinaria",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "crs",
        "label": "Cr sérica",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.nau,v.nas,v.cru,v.crs))return null;const f=100*(v.nau*v.crs)/(v.nas*v.cru);return {v:`${cF(f,2)} %`,t:f<1?"< 1 %: prerrenal":f>2?"> 2 %: necrosis tubular aguda probable":"Indeterminado",l:f>2?"warn":"ok"};}
  }
};
