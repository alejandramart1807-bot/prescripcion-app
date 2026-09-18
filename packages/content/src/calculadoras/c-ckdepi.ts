// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-ckdepi",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "TFG CKD-EPI 2021",
  "aka": "tfg ckd epi filtracion glomerular erc",
  "page": "Calculadora",
  "sub": "Sin coeficiente de raza.",
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
    "compute": v=>{if(!cN(v.e,v.cr))return null;const k=v.sexo?0.7:0.9,a=v.sexo?-0.241:-0.302;let g=142*Math.pow(Math.min(v.cr/k,1),a)*Math.pow(Math.max(v.cr/k,1),-1.2)*Math.pow(0.9938,v.e)*(v.sexo?1.012:1);
  const st=g>=90?"G1":g>=60?"G2":g>=45?"G3a":g>=30?"G3b":g>=15?"G4":"G5";return {v:`${cF(g,0)} mL/min/1,73 m² (${st})`,t:"",l:g<30?"bad":g<60?"warn":"ok"};}
  }
};
