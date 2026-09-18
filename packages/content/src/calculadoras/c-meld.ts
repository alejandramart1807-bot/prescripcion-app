// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-meld",
  "sys": "Escalas y calculadoras",
  "group": "Digestivo",
  "name": "MELD-Na",
  "aka": "meld na trasplante hepatico",
  "page": "Calculadora",
  "sub": "Mortalidad a 90 días en cirrosis; ≥ 15: evaluación para trasplante.",
  "rel": [
    "mi-cirrosis"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "b",
        "label": "Bilirrubina",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "cr",
        "label": "Creatinina",
        "type": "num",
        "unit": "mg/dL",
        "ph": undefined
      },
      {
        "id": "inr",
        "label": "INR",
        "type": "num",
        "unit": "",
        "ph": undefined
      },
      {
        "id": "na",
        "label": "Sodio",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "hd",
        "label": "Diálisis ≥ 2 veces en la última semana",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{if(!cN(v.b,v.cr,v.inr,v.na))return null;const cl=(x,lo,hi)=>Math.min(Math.max(x,lo),hi);const cr=v.hd?4:cl(v.cr,1,4),b=Math.max(v.b,1),inr=Math.max(v.inr,1),na=cl(v.na,125,137);
  let m=Math.round(10*(0.957*Math.log(cr)+0.378*Math.log(b)+1.12*Math.log(inr)+0.643));let s=m>11?Math.round(m+1.32*(137-na)-0.033*m*(137-na)):m;
  return {v:`MELD-Na ${s} (MELD ${m})`,t:s>=15?"Remitir a evaluación de trasplante":"",l:s>=20?"bad":s>=15?"warn":"ok"};}
  }
};
