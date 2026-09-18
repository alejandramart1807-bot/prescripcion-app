// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-centor",
  "sys": "Escalas y calculadoras",
  "group": "Respiratorio e infecciones",
  "name": "Centor/McIsaac (faringitis)",
  "aka": "centor mcisaac faringitis estreptococo",
  "page": "Calculadora",
  "sub": "Probabilidad de faringitis estreptocócica.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Fiebre > 38 °C",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Ausencia de tos",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Adenopatía cervical anterior dolorosa",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "Exudado o edema amigdalino",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Edad",
        "type": "sel",
        "opts": [
          [
            "3–14 años (+1)",
            1
          ],
          [
            "15–44 años (0)",
            0
          ],
          [
            "≥ 45 años (−1)",
            -1
          ]
        ]
      }
    ],
    "compute": v=>{const s=cS(v);return {v:`${s}`,t:s<=1?"No pruebas ni antibiótico":s<=3?"Prueba rápida o cultivo":"Prueba rápida; antibiótico si positiva o no disponible",l:s<=1?"ok":"warn"};}
  }
};
