// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-qtc",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "QT corregido (Bazett y Fridericia)",
  "aka": "qtc qt corregido bazett fridericia",
  "page": "Calculadora",
  "sub": "Fridericia es más exacta con FC altas o bajas.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "qt",
        "label": "QT medido",
        "type": "num",
        "unit": "ms",
        "ph": undefined
      },
      {
        "id": "fc",
        "label": "Frecuencia cardíaca",
        "type": "num",
        "unit": "lpm",
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
    "compute": v=>{if(!cN(v.qt,v.fc))return null;const rr=60/v.fc;const b=v.qt/Math.sqrt(rr),f=v.qt/Math.cbrt(rr);const lim=v.sexo?470:450;return {v:`Bazett ${cF(b,0)} ms · Fridericia ${cF(f,0)} ms`,t:f>500?"> 500 ms: alto riesgo de torsades; suspende fármacos que alargan QT":f>lim?"Prolongado":"Normal",l:f>500?"bad":f>lim?"warn":"ok"};}
  }
};
