// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-curb65",
  "sys": "Escalas y calculadoras",
  "group": "Respiratorio e infecciones",
  "name": "CURB-65",
  "aka": "curb65 neumonia gravedad",
  "page": "Calculadora",
  "sub": "Gravedad de la neumonía adquirida en la comunidad.",
  "rel": [
    "mi-nac"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Confusión nueva",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "BUN > 19 mg/dL (urea > 7 mmol/L)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "FR ≥ 30",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "PAS < 90 o PAD ≤ 60",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Edad ≥ 65",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[1,"Manejo ambulatorio","ok"],[2,"Hospitalizar","warn"],[5,"Grave: considerar UCI","bad"]]);return {v:`${s}/5`,t:r[1],l:r[2]};}
  }
};
