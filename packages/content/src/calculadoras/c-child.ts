// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-child",
  "sys": "Escalas y calculadoras",
  "group": "Digestivo",
  "name": "Child-Pugh",
  "aka": "child pugh cirrosis",
  "page": "Calculadora",
  "sub": "Gravedad de la cirrosis.",
  "rel": [
    "mi-cirrosis"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "b",
        "label": "Bilirrubina (mg/dL)",
        "type": "sel",
        "opts": [
          [
            "< 2 (1)",
            1
          ],
          [
            "2–3 (2)",
            2
          ],
          [
            "> 3 (3)",
            3
          ]
        ]
      },
      {
        "id": "a",
        "label": "Albúmina (g/dL)",
        "type": "sel",
        "opts": [
          [
            "> 3,5 (1)",
            1
          ],
          [
            "2,8–3,5 (2)",
            2
          ],
          [
            "< 2,8 (3)",
            3
          ]
        ]
      },
      {
        "id": "i",
        "label": "INR",
        "type": "sel",
        "opts": [
          [
            "< 1,7 (1)",
            1
          ],
          [
            "1,7–2,3 (2)",
            2
          ],
          [
            "> 2,3 (3)",
            3
          ]
        ]
      },
      {
        "id": "as",
        "label": "Ascitis",
        "type": "sel",
        "opts": [
          [
            "Ausente (1)",
            1
          ],
          [
            "Leve (2)",
            2
          ],
          [
            "Moderada-grave (3)",
            3
          ]
        ]
      },
      {
        "id": "e",
        "label": "Encefalopatía",
        "type": "sel",
        "opts": [
          [
            "Ausente (1)",
            1
          ],
          [
            "Grado 1–2 (2)",
            2
          ],
          [
            "Grado 3–4 (3)",
            3
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[6,"Clase A","ok"],[9,"Clase B","warn"],[15,"Clase C","bad"]]);return {v:`${s} puntos`,t:r[1],l:r[2]};}
  }
};
