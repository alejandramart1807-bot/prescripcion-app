// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-bishop",
  "sys": "Escalas y calculadoras",
  "group": "Obstetricia y pediatría",
  "name": "Bishop",
  "aka": "bishop cervix maduracion induccion",
  "page": "Calculadora",
  "sub": "Favorabilidad cervical para inducción.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "d",
        "label": "Dilatación",
        "type": "sel",
        "opts": [
          [
            "Cerrado (0)",
            0
          ],
          [
            "1–2 cm (1)",
            1
          ],
          [
            "3–4 cm (2)",
            2
          ],
          [
            "≥ 5 cm (3)",
            3
          ]
        ]
      },
      {
        "id": "b",
        "label": "Borramiento",
        "type": "sel",
        "opts": [
          [
            "0–30 % (0)",
            0
          ],
          [
            "40–50 % (1)",
            1
          ],
          [
            "60–70 % (2)",
            2
          ],
          [
            "≥ 80 % (3)",
            3
          ]
        ]
      },
      {
        "id": "e",
        "label": "Estación",
        "type": "sel",
        "opts": [
          [
            "−3 (0)",
            0
          ],
          [
            "−2 (1)",
            1
          ],
          [
            "−1/0 (2)",
            2
          ],
          [
            "+1/+2 (3)",
            3
          ]
        ]
      },
      {
        "id": "c",
        "label": "Consistencia",
        "type": "sel",
        "opts": [
          [
            "Firme (0)",
            0
          ],
          [
            "Media (1)",
            1
          ],
          [
            "Blanda (2)",
            2
          ]
        ]
      },
      {
        "id": "p",
        "label": "Posición",
        "type": "sel",
        "opts": [
          [
            "Posterior (0)",
            0
          ],
          [
            "Media (1)",
            1
          ],
          [
            "Anterior (2)",
            2
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);return {v:`${s}/13`,t:s>=8?"Favorable: oxitocina":s>=6?"Intermedio":"Desfavorable: maduración cervical",l:s>=8?"ok":"warn"};}
  }
};
