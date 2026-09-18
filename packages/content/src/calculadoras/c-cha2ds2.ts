// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-cha2ds2",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "CHA₂DS₂-VA / CHA₂DS₂-VASc",
  "aka": "chads cha2ds2 vasc va fibrilacion auricular anticoagulacion",
  "page": "Calculadora",
  "sub": "Riesgo embólico en FA no valvular.",
  "rel": [
    "mi-fa"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "c",
        "label": "Insuficiencia cardíaca",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "h",
        "label": "Hipertensión",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "a2",
        "label": "Edad ≥ 75 años",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "d",
        "label": "Diabetes",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "s2",
        "label": "ACV, AIT o tromboembolismo previo",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "v",
        "label": "Enfermedad vascular (IAM, arterial periférica, placa aórtica)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "a",
        "label": "Edad 65–74 años",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "sc",
        "label": "Sexo femenino (solo suma en VASc)",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const va=v.c+v.h+v.a2+v.d+v.s2+v.v+v.a;const vasc=va+v.sc;return {v:`CHA₂DS₂-VA ${va} · CHA₂DS₂-VASc ${vasc}`,t:va>=2?"Anticoagular":va===1?"Considerar anticoagulación":"Sin anticoagulación",l:va>=2?"bad":va===1?"warn":"ok"};}
  },
  "compute": null
};
