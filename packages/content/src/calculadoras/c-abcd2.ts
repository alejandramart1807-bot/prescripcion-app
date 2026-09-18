// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-abcd2",
  "sys": "Escalas y calculadoras",
  "group": "Neurología",
  "name": "ABCD² (AIT)",
  "aka": "abcd2 ait ataque isquemico transitorio",
  "page": "Calculadora",
  "sub": "Riesgo de ACV tras un AIT.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Edad ≥ 60 años",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "PA ≥ 140/90 en la evaluación",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Clínica",
        "type": "sel",
        "opts": [
          [
            "Otra (0)",
            0
          ],
          [
            "Alteración del lenguaje sin debilidad (1)",
            1
          ],
          [
            "Debilidad unilateral (2)",
            2
          ]
        ]
      },
      {
        "id": "d",
        "label": "Duración",
        "type": "sel",
        "opts": [
          [
            "< 10 min (0)",
            0
          ],
          [
            "10–59 min (1)",
            1
          ],
          [
            "≥ 60 min (2)",
            2
          ]
        ]
      },
      {
        "id": "e",
        "label": "Diabetes",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[3,"Riesgo bajo","ok"],[5,"Riesgo moderado: doble antiagregación y estudio rápido","warn"],[7,"Riesgo alto","bad"]]);return {v:`${s}/7`,t:r[1],l:r[2]};}
  }
};
