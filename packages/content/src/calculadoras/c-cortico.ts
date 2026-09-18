// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-cortico",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Equivalencia de corticoides",
  "aka": "equivalencia corticoides prednisona dexametasona hidrocortisona metilprednisolona",
  "page": "Calculadora",
  "sub": "Equivalencia glucocorticoide aproximada.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "f",
        "label": "Fármaco",
        "type": "sel",
        "opts": [
          [
            "Prednisona / prednisolona",
            5
          ],
          [
            "Hidrocortisona",
            20
          ],
          [
            "Metilprednisolona",
            4
          ],
          [
            "Dexametasona",
            0.75
          ],
          [
            "Betametasona",
            0.6
          ]
        ]
      },
      {
        "id": "d",
        "label": "Dosis",
        "type": "num",
        "unit": "mg",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.d))return null;const p=v.d/v.f*5;return {v:`≈ ${cF(p)} mg de prednisona`,t:`Hidrocortisona ${cF(p*4)} · metilprednisolona ${cF(p*0.8)} · dexametasona ${cF(p*0.15,2)} mg`,l:"ok"};}
  }
};
