// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-lrinec",
  "sys": "Escalas y calculadoras",
  "group": "Respiratorio e infecciones",
  "name": "LRINEC (fascitis necrotizante)",
  "aka": "lrinec fascitis necrotizante fournier",
  "page": "Calculadora",
  "sub": "Apoyo de laboratorio: un puntaje bajo NO descarta.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "PCR ≥ 150 mg/L",
        "type": "chk",
        "pts": 4
      },
      {
        "id": "b",
        "label": "Leucocitos",
        "type": "sel",
        "opts": [
          [
            "< 15 000 (0)",
            0
          ],
          [
            "15 000–25 000 (1)",
            1
          ],
          [
            "> 25 000 (2)",
            2
          ]
        ]
      },
      {
        "id": "c",
        "label": "Hemoglobina",
        "type": "sel",
        "opts": [
          [
            "> 13,5 (0)",
            0
          ],
          [
            "11–13,5 (1)",
            1
          ],
          [
            "< 11 (2)",
            2
          ]
        ]
      },
      {
        "id": "d",
        "label": "Sodio < 135",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "e",
        "label": "Creatinina > 1,6 mg/dL",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "f",
        "label": "Glucosa > 180 mg/dL",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[5,"Bajo (no descarta si la clínica sugiere)","warn"],[7,"Intermedio","bad"],[13,"Alto: exploración quirúrgica","bad"]]);return {v:`${s}/13`,t:r[1],l:r[2]};}
  }
};
