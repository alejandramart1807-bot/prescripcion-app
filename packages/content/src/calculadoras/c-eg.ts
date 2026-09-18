// @ts-nocheck -- ver CALC_IDS_NEEDING_TS_NOCHECK en tools/extract-content.mjs: compute() preservado byte a byte choca con un límite real del checker de TS (no con un error del dato).
// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-eg",
  "sys": "Escalas y calculadoras",
  "group": "Obstetricia y pediatría",
  "name": "Edad gestacional y fecha probable de parto",
  "aka": "edad gestacional fpp fur naegele",
  "page": "Calculadora",
  "sub": "Por FUR (confirma con ecografía temprana).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "fur",
        "label": "Fecha de última menstruación",
        "type": "date"
      }
    ],
    "compute": v=>{if(!v.fur)return null;const f=new Date(v.fur+"T00:00:00");const hoy=new Date();const d=Math.floor((hoy-f)/86400000);if(d<0)return null;const fpp=new Date(f.getTime()+280*86400000);return {v:`${Math.floor(d/7)} semanas + ${d%7} días`,t:`FPP: ${fpp.toLocaleDateString("es-CO",{day:"numeric",month:"long",year:"numeric"})}`,l:"ok"};}
  }
};
