// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-alvarado",
  "sys": "Escalas y calculadoras",
  "group": "Respiratorio e infecciones",
  "name": "Alvarado (apendicitis)",
  "aka": "alvarado apendicitis",
  "page": "Calculadora",
  "sub": "Probabilidad de apendicitis.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Dolor migratorio a fosa ilíaca derecha",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Anorexia",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Náuseas o vómito",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "Dolor en fosa ilíaca derecha",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "e",
        "label": "Rebote",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "Temperatura ≥ 37,3 °C",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Leucocitos > 10 000",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "h",
        "label": "Neutrofilia (desviación a la izquierda)",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[4,"Improbable","ok"],[6,"Posible: observación o imagen","warn"],[10,"Probable: cirugía","bad"]]);return {v:`${s}/10`,t:r[1],l:r[2]};}
  }
};
