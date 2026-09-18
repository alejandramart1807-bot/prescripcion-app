// @ts-nocheck -- ver CALC_IDS_NEEDING_TS_NOCHECK en tools/extract-content.mjs: compute() preservado byte a byte choca con un límite real del checker de TS (no con un error del dato).
// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-ottawa",
  "sys": "Escalas y calculadoras",
  "group": "Urología y ortopedia",
  "name": "Reglas de Ottawa (tobillo y pie)",
  "aka": "ottawa tobillo pie radiografia esguince",
  "page": "Calculadora",
  "sub": "Rx solo si hay dolor en la zona y algún criterio.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Sensibilidad en borde posterior o punta del maléolo lateral (6 cm)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Sensibilidad en borde posterior o punta del maléolo medial (6 cm)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Sensibilidad en la base del 5.º metatarsiano",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "Sensibilidad en el navicular",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Incapaz de dar 4 pasos (inmediato y en urgencias)",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const t=[];if(v.a||v.b||v.e)t.push("Rx de tobillo");if(v.c||v.d||v.e)t.push("Rx de pie");return t.length?{v:t.join(" + "),t:"Criterio positivo",l:"warn"}:{v:"Sin radiografía",t:"Reglas negativas",l:"ok"};}
  }
};
