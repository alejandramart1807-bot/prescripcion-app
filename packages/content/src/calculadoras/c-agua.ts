// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-agua",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Déficit de agua libre",
  "aka": "deficit de agua libre hipernatremia",
  "page": "Calculadora",
  "sub": "ACT × (Na/140 − 1).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "na",
        "label": "Sodio",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "peso",
        "label": "Peso",
        "type": "num",
        "unit": "kg",
        "ph": undefined
      },
      {
        "id": "f",
        "label": "Agua corporal",
        "type": "sel",
        "opts": [
          [
            "Hombre joven (0,6)",
            0.6
          ],
          [
            "Mujer joven u hombre anciano (0,5)",
            0.5
          ],
          [
            "Mujer anciana (0,45)",
            0.45
          ]
        ]
      }
    ],
    "compute": v=>{if(!cN(v.na,v.peso))return null;const d=v.f*v.peso*(v.na/140-1);return {v:`${cF(d)} L`,t:"Reponer a ≤ 10–12 mEq/L en 24 h (crónica) + pérdidas en curso",l:"ok"};}
  }
};
