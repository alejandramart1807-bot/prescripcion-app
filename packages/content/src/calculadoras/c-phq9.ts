// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-phq9",
  "sys": "Escalas y calculadoras",
  "group": "Salud mental",
  "name": "PHQ-9 (depresión)",
  "aka": "phq9 depresion tamizaje",
  "page": "Calculadora",
  "sub": "Frecuencia en las últimas 2 semanas: 0 nunca · 1 varios días · 2 más de la mitad · 3 casi todos.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "q0",
        "label": "1. Poco interés o placer",
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
          ]
        ]
      },
      {
        "id": "q1",
        "label": "2. Decaído, deprimido",
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
          ]
        ]
      },
      {
        "id": "q2",
        "label": "3. Problemas de sueño",
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
          ]
        ]
      },
      {
        "id": "q3",
        "label": "4. Cansancio",
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
          ]
        ]
      },
      {
        "id": "q4",
        "label": "5. Apetito",
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
          ]
        ]
      },
      {
        "id": "q5",
        "label": "6. Sentirse mal consigo mismo",
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
          ]
        ]
      },
      {
        "id": "q6",
        "label": "7. Concentración",
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
          ]
        ]
      },
      {
        "id": "q7",
        "label": "8. Lentitud o inquietud",
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
          ]
        ]
      },
      {
        "id": "q8",
        "label": "9. Pensamientos de muerte o autolesión",
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
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[4,"Mínima","ok"],[9,"Leve","ok"],[14,"Moderada","warn"],[19,"Moderadamente grave","bad"],[27,"Grave","bad"]]);return {v:`${s}/27`,t:r[1]+(v.q8>0?" · ítem 9 positivo: evaluar riesgo suicida hoy":""),l:v.q8>0?"bad":r[2]};}
  }
};
