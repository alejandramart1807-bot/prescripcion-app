// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-pam",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "Presión arterial media",
  "aka": "pam presion arterial media",
  "page": "Calculadora",
  "sub": "PAM = (PAS + 2 × PAD) / 3.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "s",
        "label": "PAS",
        "type": "num",
        "unit": "mmHg",
        "ph": undefined
      },
      {
        "id": "d",
        "label": "PAD",
        "type": "num",
        "unit": "mmHg",
        "ph": undefined
      }
    ],
    "compute": v=>cN(v.s,v.d)?{v:`${cF((v.s+2*v.d)/3,0)} mmHg`,t:(v.s+2*v.d)/3<65?"< 65: hipoperfusión probable":"",l:(v.s+2*v.d)/3<65?"bad":"ok"}:null
  }
};
