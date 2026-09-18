// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-imc",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "IMC y superficie corporal",
  "aka": "imc indice de masa corporal superficie corporal mosteller",
  "page": "Calculadora",
  "sub": "SC (Mosteller) = √(talla × peso / 3600).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "peso",
        "label": "Peso",
        "type": "num",
        "unit": "kg",
        "ph": undefined
      },
      {
        "id": "t",
        "label": "Talla",
        "type": "num",
        "unit": "cm",
        "ph": undefined
      }
    ],
    "compute": v=>cN(v.peso,v.t)?{v:`IMC ${cF(v.peso/Math.pow(v.t/100,2))} · SC ${cF(Math.sqrt(v.t*v.peso/3600),2)} m²`,t:"",l:"ok"}:null
  }
};
