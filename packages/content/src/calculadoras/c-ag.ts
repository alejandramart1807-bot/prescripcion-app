// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-ag",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Brecha aniónica, corrección por albúmina y delta/delta",
  "aka": "anion gap brecha anionica delta delta acidosis metabolica",
  "page": "Calculadora",
  "sub": "Normal ≈ 12 ± 2 (sin potasio).",
  "rel": [
    "r-gases",
    "r-electrolitos"
  ],
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
        "id": "cl",
        "label": "Cloro",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "h",
        "label": "HCO₃⁻",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "alb",
        "label": "Albúmina (opcional)",
        "type": "num",
        "unit": "g/dL",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.na,v.cl,v.h))return null;const ag=v.na-v.cl-v.h;const agc=cN(v.alb)?ag+2.5*(4-v.alb):ag;const dd=(agc-12)/(24-v.h);
  let t=agc>14?"Brecha elevada":"Brecha normal (acidosis hiperclorémica si HCO₃⁻ bajo)";if(agc>14&&v.h<24)t+=dd<1?" · delta < 1: + acidosis de brecha normal":dd>2?" · delta > 2: + alcalosis metabólica":" · acidosis de brecha pura";
  return {v:`Brecha ${cF(ag)}${cN(v.alb)?` · corregida ${cF(agc)}`:""}`,t,l:agc>14?"warn":"ok"};}
  }
};
