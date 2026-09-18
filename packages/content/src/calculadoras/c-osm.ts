// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-osm",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Osmolalidad calculada y brecha osmolar",
  "aka": "osmolalidad brecha osmolar metanol toxicos",
  "page": "Calculadora",
  "sub": "2 × Na + glucosa/18 + BUN/2,8.",
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
        "id": "g",
        "label": "Glucosa",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "b",
        "label": "BUN",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "om",
        "label": "Osmolalidad medida (opcional)",
        "type": "num",
        "unit": "mOsm/kg",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.na,v.g,v.b))return null;const c=2*v.na+v.g/18+v.b/2.8;const gap=cN(v.om)?v.om-c:null;return {v:`${cF(c,0)} mOsm/kg${gap!==null?` · brecha ${cF(gap,0)}`:""}`,t:gap!==null&&gap>10?"Brecha > 10: alcoholes tóxicos (metanol, etilenglicol)":"",l:gap!==null&&gap>10?"bad":"ok"};}
  }
};
