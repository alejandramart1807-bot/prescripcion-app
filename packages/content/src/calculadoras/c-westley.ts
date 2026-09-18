// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-westley",
  "sys": "Escalas y calculadoras",
  "group": "Obstetricia y pediatría",
  "name": "Westley (crup)",
  "aka": "westley crup croup",
  "page": "Calculadora",
  "sub": "Gravedad del crup.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Conciencia",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Desorientado (5)",
            5
          ]
        ]
      },
      {
        "id": "b",
        "label": "Cianosis",
        "type": "sel",
        "opts": [
          [
            "No (0)",
            0
          ],
          [
            "Con agitación (4)",
            4
          ],
          [
            "En reposo (5)",
            5
          ]
        ]
      },
      {
        "id": "c",
        "label": "Estridor",
        "type": "sel",
        "opts": [
          [
            "No (0)",
            0
          ],
          [
            "Con agitación (1)",
            1
          ],
          [
            "En reposo (2)",
            2
          ]
        ]
      },
      {
        "id": "d",
        "label": "Entrada de aire",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Disminuida (1)",
            1
          ],
          [
            "Muy disminuida (2)",
            2
          ]
        ]
      },
      {
        "id": "e",
        "label": "Tirajes",
        "type": "sel",
        "opts": [
          [
            "No (0)",
            0
          ],
          [
            "Leves (1)",
            1
          ],
          [
            "Moderados (2)",
            2
          ],
          [
            "Graves (3)",
            3
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[2,"Leve: dexametasona","ok"],[5,"Moderado: + adrenalina nebulizada","warn"],[11,"Grave","bad"],[17,"Falla respiratoria inminente","bad"]]);return {v:`${s}/17`,t:r[1],l:r[2]};}
  }
};
