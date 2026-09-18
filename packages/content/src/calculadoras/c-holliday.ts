// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-holliday",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Líquidos de mantenimiento pediátricos (Holliday-Segar)",
  "aka": "holliday segar liquidos mantenimiento pediatria 4 2 1",
  "page": "Calculadora",
  "sub": "Regla 4-2-1; usa solución isotónica.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "peso",
        "label": "Peso",
        "type": "num",
        "unit": "kg",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.peso))return null;const p=v.peso;const h=p<=10?4*p:p<=20?40+2*(p-10):60+(p-20);return {v:`${cF(h,0)} mL/h · ${cF(h*24,0)} mL/día`,t:"Adultos: tope habitual ~100–120 mL/h",l:"ok"};}
  }
};
