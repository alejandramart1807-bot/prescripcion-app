// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-ciwa",
  "sys": "Escalas y calculadoras",
  "group": "Salud mental",
  "name": "CIWA-Ar (abstinencia alcohólica)",
  "aka": "ciwa abstinencia alcoholica",
  "page": "Calculadora",
  "sub": "Guía el tratamiento con benzodiazepinas por síntomas.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "q0",
        "label": "Náuseas/vómito",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q1",
        "label": "Temblor",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q2",
        "label": "Sudoración",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q3",
        "label": "Ansiedad",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q4",
        "label": "Agitación",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q5",
        "label": "Alteraciones táctiles",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q6",
        "label": "Alteraciones auditivas",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q7",
        "label": "Alteraciones visuales",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q8",
        "label": "Cefalea",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ],
          [
            "5",
            5
          ],
          [
            "6",
            6
          ],
          [
            "7",
            7
          ]
        ]
      },
      {
        "id": "q9",
        "label": "Orientación",
        "type": "sel",
        "opts": [
          [
            "0",
            0
          ],
          [
            "1",
            1
          ],
          [
            "2",
            2
          ],
          [
            "3",
            3
          ],
          [
            "4",
            4
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[9,"Leve: sin benzodiazepina necesaria","ok"],[15,"Moderada: benzodiazepina","warn"],[67,"Grave: benzodiazepina y vigilancia estrecha","bad"]]);return {v:`${s}/67`,t:r[1],l:r[2]};}
  }
};
