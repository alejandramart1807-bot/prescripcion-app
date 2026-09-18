// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-heart",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "HEART (dolor torácico)",
  "aka": "heart score dolor toracico sca",
  "page": "Calculadora",
  "sub": "Riesgo de evento cardiovascular mayor a 6 semanas.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "h",
        "label": "Historia",
        "type": "sel",
        "opts": [
          [
            "Poco sospechosa (0)",
            0
          ],
          [
            "Moderadamente (1)",
            1
          ],
          [
            "Muy sospechosa (2)",
            2
          ]
        ]
      },
      {
        "id": "e",
        "label": "ECG",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Repolarización inespecífica (1)",
            1
          ],
          [
            "Depresión ST significativa (2)",
            2
          ]
        ]
      },
      {
        "id": "a",
        "label": "Edad",
        "type": "sel",
        "opts": [
          [
            "< 45 (0)",
            0
          ],
          [
            "45–64 (1)",
            1
          ],
          [
            "≥ 65 (2)",
            2
          ]
        ]
      },
      {
        "id": "r",
        "label": "Factores de riesgo",
        "type": "sel",
        "opts": [
          [
            "Ninguno (0)",
            0
          ],
          [
            "1–2 (1)",
            1
          ],
          [
            "≥ 3 o aterosclerosis conocida (2)",
            2
          ]
        ]
      },
      {
        "id": "t",
        "label": "Troponina",
        "type": "sel",
        "opts": [
          [
            "≤ límite normal (0)",
            0
          ],
          [
            "1–3 veces (1)",
            1
          ],
          [
            "> 3 veces (2)",
            2
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[3,"Bajo riesgo (~2 %): alta con seguimiento","ok"],[6,"Intermedio: observación y estudio","warn"],[10,"Alto: estrategia invasiva temprana","bad"]]);return {v:`${s}/10`,t:r[1],l:r[2]};}
  }
};
