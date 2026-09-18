// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-hasbled",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "HAS-BLED",
  "aka": "hasbled sangrado anticoagulacion",
  "page": "Calculadora",
  "sub": "Riesgo de sangrado con anticoagulación: úsalo para corregir factores, no para negar anticoagulación.",
  "rel": [
    "mi-fa"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "HTA no controlada (PAS > 160)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Función renal anormal",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Función hepática anormal",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "ACV previo",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Sangrado previo o predisposición",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "INR lábil",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Edad > 65 años",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "h",
        "label": "Antiagregantes o AINE",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "i",
        "label": "Alcohol ≥ 8 tragos/semana",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);return {v:`${s}/9`,t:s>=3?"Alto riesgo: corrige factores modificables y vigila":"Riesgo bajo-moderado",l:s>=3?"warn":"ok"};}
  }
};
