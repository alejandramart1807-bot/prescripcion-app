// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-pbw",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Peso predicho y volumen corriente",
  "aka": "peso predicho volumen corriente ventilacion protectora ardsnet",
  "page": "Calculadora",
  "sub": "Ventilación protectora 6–8 mL/kg de peso predicho.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "t",
        "label": "Talla",
        "type": "num",
        "unit": "cm",
        "ph": undefined
      },
      {
        "id": "sexo",
        "label": "Sexo",
        "type": "sel",
        "opts": [
          [
            "Hombre",
            0
          ],
          [
            "Mujer",
            1
          ]
        ]
      }
    ],
    "compute": v=>{if(!cN(v.t))return null;const p=(v.sexo?45.5:50)+0.91*(v.t-152.4);return {v:`Peso predicho ${cF(p)} kg`,t:`VT 6 mL/kg = ${cF(6*p,0)} mL · 8 mL/kg = ${cF(8*p,0)} mL`,l:"ok"};}
  }
};
