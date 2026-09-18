// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-parkland",
  "sys": "Escalas y calculadoras",
  "group": "Dosificación y líquidos",
  "name": "Parkland (quemaduras)",
  "aka": "parkland quemados liquidos superficie corporal quemada",
  "page": "Calculadora",
  "sub": "4 mL × kg × % SCQ (2.º y 3.er grado) de Lactato de Ringer en 24 h.",
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
        "id": "q",
        "label": "% superficie corporal quemada",
        "type": "num",
        "unit": "%",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.peso,v.q))return null;const t=4*v.peso*v.q;return {v:`${cF(t,0)} mL en 24 h`,t:`Primeras 8 h (desde la quemadura): ${cF(t/2,0)} mL ≈ ${cF(t/16,0)} mL/h · 16 h siguientes: ${cF(t/32,0)} mL/h. Titula por diuresis 0,5 mL/kg/h.`,l:"ok"};}
  }
};
