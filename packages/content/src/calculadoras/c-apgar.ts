// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-apgar",
  "sys": "Escalas y calculadoras",
  "group": "Obstetricia y pediatría",
  "name": "Apgar",
  "aka": "apgar recien nacido",
  "page": "Calculadora",
  "sub": "Al minuto 1 y 5.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Frecuencia cardíaca",
        "type": "sel",
        "opts": [
          [
            "Ausente (0)",
            0
          ],
          [
            "< 100 (1)",
            1
          ],
          [
            "≥ 100 (2)",
            2
          ]
        ]
      },
      {
        "id": "b",
        "label": "Esfuerzo respiratorio",
        "type": "sel",
        "opts": [
          [
            "Ausente (0)",
            0
          ],
          [
            "Débil, irregular (1)",
            1
          ],
          [
            "Llanto fuerte (2)",
            2
          ]
        ]
      },
      {
        "id": "c",
        "label": "Tono",
        "type": "sel",
        "opts": [
          [
            "Flácido (0)",
            0
          ],
          [
            "Alguna flexión (1)",
            1
          ],
          [
            "Movimiento activo (2)",
            2
          ]
        ]
      },
      {
        "id": "d",
        "label": "Irritabilidad refleja",
        "type": "sel",
        "opts": [
          [
            "Sin respuesta (0)",
            0
          ],
          [
            "Mueca (1)",
            1
          ],
          [
            "Llanto, tos (2)",
            2
          ]
        ]
      },
      {
        "id": "e",
        "label": "Color",
        "type": "sel",
        "opts": [
          [
            "Pálido o azul (0)",
            0
          ],
          [
            "Acrocianosis (1)",
            1
          ],
          [
            "Rosado (2)",
            2
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[3,"Depresión grave","bad"],[6,"Moderada","warn"],[10,"Normal","ok"]]);return {v:`${s}/10`,t:r[1],l:r[2]};}
  }
};
