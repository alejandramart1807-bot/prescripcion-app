// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-glasgow",
  "sys": "Escalas y calculadoras",
  "group": "Neurología",
  "name": "Escala de coma de Glasgow",
  "aka": "glasgow gcs coma conciencia",
  "page": "Calculadora",
  "sub": "Suma apertura ocular, respuesta verbal y motora.",
  "notes": [
    "Reporta los componentes, no solo el total.",
    "Intubado: registra V como 'T'."
  ],
  "calcForm": {
    "inputs": [
      {
        "id": "e",
        "label": "Apertura ocular",
        "type": "sel",
        "opts": [
          [
            "Espontánea (4)",
            4
          ],
          [
            "A la voz (3)",
            3
          ],
          [
            "Al dolor (2)",
            2
          ],
          [
            "Ninguna (1)",
            1
          ]
        ]
      },
      {
        "id": "vv",
        "label": "Respuesta verbal",
        "type": "sel",
        "opts": [
          [
            "Orientado (5)",
            5
          ],
          [
            "Confuso (4)",
            4
          ],
          [
            "Palabras inapropiadas (3)",
            3
          ],
          [
            "Sonidos incomprensibles (2)",
            2
          ],
          [
            "Ninguna (1)",
            1
          ]
        ]
      },
      {
        "id": "m",
        "label": "Respuesta motora",
        "type": "sel",
        "opts": [
          [
            "Obedece órdenes (6)",
            6
          ],
          [
            "Localiza el dolor (5)",
            5
          ],
          [
            "Retira al dolor (4)",
            4
          ],
          [
            "Flexión anormal (3)",
            3
          ],
          [
            "Extensión (2)",
            2
          ],
          [
            "Ninguna (1)",
            1
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[8,"Grave: proteger la vía aérea","bad"],[12,"Moderado","warn"],[15,"Leve","ok"]]);return {v:`${s}/15 (E${v.e} V${v.vv} M${v.m})`,t:r[1],l:r[2]};}
  }
};
