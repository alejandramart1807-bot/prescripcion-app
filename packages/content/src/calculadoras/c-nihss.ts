// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-nihss",
  "sys": "Escalas y calculadoras",
  "group": "Neurología",
  "name": "NIHSS (ACV)",
  "aka": "nihss escala ictus acv trombolisis",
  "page": "Calculadora",
  "sub": "Gravedad del ACV; guía la decisión de reperfusión.",
  "notes": [
    "NIHSS ≤ 5 no discapacitante puede no requerir trombólisis; decisión con neurología."
  ],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "1a. Nivel de conciencia",
        "type": "sel",
        "opts": [
          [
            "Alerta (0)",
            0
          ],
          [
            "Somnoliento (1)",
            1
          ],
          [
            "Estuporoso (2)",
            2
          ],
          [
            "Coma (3)",
            3
          ]
        ]
      },
      {
        "id": "b",
        "label": "1b. Preguntas (mes, edad)",
        "type": "sel",
        "opts": [
          [
            "Ambas correctas (0)",
            0
          ],
          [
            "Una (1)",
            1
          ],
          [
            "Ninguna (2)",
            2
          ]
        ]
      },
      {
        "id": "c",
        "label": "1c. Órdenes (ojos, mano)",
        "type": "sel",
        "opts": [
          [
            "Ambas (0)",
            0
          ],
          [
            "Una (1)",
            1
          ],
          [
            "Ninguna (2)",
            2
          ]
        ]
      },
      {
        "id": "d",
        "label": "2. Mirada",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Paresia parcial (1)",
            1
          ],
          [
            "Desviación forzada (2)",
            2
          ]
        ]
      },
      {
        "id": "f",
        "label": "3. Campos visuales",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Hemianopsia parcial (1)",
            1
          ],
          [
            "Completa (2)",
            2
          ],
          [
            "Bilateral/ceguera (3)",
            3
          ]
        ]
      },
      {
        "id": "g",
        "label": "4. Parálisis facial",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Menor (1)",
            1
          ],
          [
            "Parcial (2)",
            2
          ],
          [
            "Completa (3)",
            3
          ]
        ]
      },
      {
        "id": "h",
        "label": "5a. Brazo izquierdo",
        "type": "sel",
        "opts": [
          [
            "Sin caída (0)",
            0
          ],
          [
            "Cae antes de 10 s (1)",
            1
          ],
          [
            "Algún esfuerzo contra gravedad (2)",
            2
          ],
          [
            "Sin esfuerzo contra gravedad (3)",
            3
          ],
          [
            "Sin movimiento (4)",
            4
          ]
        ]
      },
      {
        "id": "i",
        "label": "5b. Brazo derecho",
        "type": "sel",
        "opts": [
          [
            "Sin caída (0)",
            0
          ],
          [
            "Cae antes de 10 s (1)",
            1
          ],
          [
            "Algún esfuerzo contra gravedad (2)",
            2
          ],
          [
            "Sin esfuerzo contra gravedad (3)",
            3
          ],
          [
            "Sin movimiento (4)",
            4
          ]
        ]
      },
      {
        "id": "j",
        "label": "6a. Pierna izquierda",
        "type": "sel",
        "opts": [
          [
            "Sin caída (0)",
            0
          ],
          [
            "Cae antes de 5 s (1)",
            1
          ],
          [
            "Algún esfuerzo contra gravedad (2)",
            2
          ],
          [
            "Sin esfuerzo contra gravedad (3)",
            3
          ],
          [
            "Sin movimiento (4)",
            4
          ]
        ]
      },
      {
        "id": "k",
        "label": "6b. Pierna derecha",
        "type": "sel",
        "opts": [
          [
            "Sin caída (0)",
            0
          ],
          [
            "Cae antes de 5 s (1)",
            1
          ],
          [
            "Algún esfuerzo contra gravedad (2)",
            2
          ],
          [
            "Sin esfuerzo contra gravedad (3)",
            3
          ],
          [
            "Sin movimiento (4)",
            4
          ]
        ]
      },
      {
        "id": "l",
        "label": "7. Ataxia de extremidades",
        "type": "sel",
        "opts": [
          [
            "Ausente (0)",
            0
          ],
          [
            "En una (1)",
            1
          ],
          [
            "En dos (2)",
            2
          ]
        ]
      },
      {
        "id": "mm",
        "label": "8. Sensibilidad",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Pérdida leve-moderada (1)",
            1
          ],
          [
            "Grave o total (2)",
            2
          ]
        ]
      },
      {
        "id": "n",
        "label": "9. Lenguaje",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Afasia leve-moderada (1)",
            1
          ],
          [
            "Grave (2)",
            2
          ],
          [
            "Mutismo/global (3)",
            3
          ]
        ]
      },
      {
        "id": "o",
        "label": "10. Disartria",
        "type": "sel",
        "opts": [
          [
            "Normal (0)",
            0
          ],
          [
            "Leve-moderada (1)",
            1
          ],
          [
            "Grave (2)",
            2
          ]
        ]
      },
      {
        "id": "p",
        "label": "11. Extinción/inatención",
        "type": "sel",
        "opts": [
          [
            "Ninguna (0)",
            0
          ],
          [
            "Una modalidad (1)",
            1
          ],
          [
            "Profunda (2)",
            2
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[0,"Sin déficit medible","ok"],[4,"ACV menor","ok"],[15,"Moderado","warn"],[20,"Moderado-grave","bad"],[42,"Grave","bad"]]);return {v:`${s}/42`,t:r[1],l:r[2]};}
  }
};
