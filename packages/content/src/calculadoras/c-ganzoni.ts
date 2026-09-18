// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-ganzoni",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Déficit de hierro (Ganzoni)",
  "aka": "ganzoni deficit de hierro hierro intravenoso sacarosa",
  "page": "Calculadora",
  "sub": "Peso × (Hb meta − Hb) × 2,4 + depósitos.",
  "rel": [
    "mi-anemia"
  ],
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
        "id": "hb",
        "label": "Hb actual",
        "type": "num",
        "unit": "g/dL",
        "ph": undefined
      },
      {
        "id": "m",
        "label": "Hb meta",
        "type": "num",
        "unit": "g/dL",
        "ph": "13–15"
      }
    ],
    "compute": v=>{if(!cN(v.peso,v.hb,v.m))return null;const dep=v.peso>=35?500:15*v.peso;const d=v.peso*(v.m-v.hb)*2.4+dep;return {v:`${cF(d,0)} mg de hierro`,t:`Hierro sacarosa 200 mg: ≈ ${Math.ceil(d/200)} dosis`,l:"ok"};}
  }
};
