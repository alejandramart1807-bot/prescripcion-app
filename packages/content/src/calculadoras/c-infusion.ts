// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-infusion",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Infusión: dosis → mL/h",
  "aka": "calculadora infusion goteo mcg kg min ml hora dilucion",
  "page": "Calculadora",
  "sub": "Para cualquier dilución de tu servicio.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "d",
        "label": "Dosis",
        "type": "num",
        "unit": "mcg/kg/min",
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
        "id": "mg",
        "label": "Fármaco en la mezcla",
        "type": "num",
        "unit": "mg",
        "ph": undefined
      },
      {
        "id": "ml",
        "label": "Volumen total de la mezcla",
        "type": "num",
        "unit": "mL",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.d,v.peso,v.mg,v.ml))return null;const c=v.mg*1000/v.ml;const r=v.d*v.peso*60/c;return {v:`${cF(r)} mL/h`,t:`Concentración ${cF(c)} mcg/mL`,l:"ok"};}
  }
};
