// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-crcl",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Depuración de creatinina (Cockcroft-Gault)",
  "aka": "cockcroft gault depuracion creatinina clcr ajuste dosis",
  "page": "Calculadora",
  "sub": "Para ajuste de dosis de fármacos.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "e",
        "label": "Edad",
        "type": "num",
        "unit": "años",
        "ph": undefined
      },
      {
        "id": "peso",
        "label": "Peso",
        "type": "num",
        "unit": "kg",
        "ph": undefined
      },
      {
        "id": "cr",
        "label": "Creatinina",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "sexo",
        "label": "Sexo",
        "type": "sel",
        "opts": [
          [
            "Hombre",
            0
          ],
          [
            "Mujer",
            1
          ]
        ]
      }
    ],
    "compute": v=>{if(!cN(v.e,v.peso,v.cr))return null;let c=(140-v.e)*v.peso/(72*v.cr);if(v.sexo)c*=0.85;return {v:`${cF(c,0)} mL/min`,t:c<30?"< 30: ajuste importante, evita metformina y muchos ACOD":c<60?"30–59: ajustar dosis":"",l:c<30?"bad":c<60?"warn":"ok"};}
  }
};
