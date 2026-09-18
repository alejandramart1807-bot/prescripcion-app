// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-ipss",
  "sys": "Escalas y calculadoras",
  "group": "Urología y ortopedia",
  "name": "IPSS (síntomas prostáticos)",
  "aka": "ipss sintomas prostaticos hpb",
  "page": "Calculadora",
  "sub": "Último mes: 0 nunca · 5 casi siempre (nicturia: número de veces).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "q0",
        "label": "1. Vaciado incompleto",
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
          ]
        ]
      },
      {
        "id": "q1",
        "label": "2. Frecuencia (< 2 h)",
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
          ]
        ]
      },
      {
        "id": "q2",
        "label": "3. Intermitencia",
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
          ]
        ]
      },
      {
        "id": "q3",
        "label": "4. Urgencia",
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
          ]
        ]
      },
      {
        "id": "q4",
        "label": "5. Chorro débil",
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
          ]
        ]
      },
      {
        "id": "q5",
        "label": "6. Esfuerzo para iniciar",
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
          ]
        ]
      },
      {
        "id": "q6",
        "label": "7. Nicturia",
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
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[7,"Leve","ok"],[19,"Moderado","warn"],[35,"Grave","bad"]]);return {v:`${s}/35`,t:r[1],l:r[2]};}
  }
};
