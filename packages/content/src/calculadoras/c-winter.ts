// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-winter",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Fórmula de Winter (compensación respiratoria)",
  "aka": "winter paco2 esperada acidosis metabolica compensacion",
  "page": "Calculadora",
  "sub": "PaCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2.",
  "rel": [
    "r-gases"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "h",
        "label": "HCO₃⁻",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "p",
        "label": "PaCO₂ medida (opcional)",
        "type": "num",
        "unit": "mmHg",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.h))return null;const e=1.5*v.h+8;let t="",l="ok";if(cN(v.p)){if(v.p>e+2){t="Acidosis respiratoria asociada";l="warn";}else if(v.p<e-2){t="Alcalosis respiratoria asociada";l="warn";}else t="Compensación adecuada";}return {v:`${cF(e-2)}–${cF(e+2)} mmHg`,t,l};}
  }
};
