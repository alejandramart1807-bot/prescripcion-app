// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-qsofa",
  "sys": "Escalas y calculadoras",
  "group": "Respiratorio e infecciones",
  "name": "qSOFA",
  "aka": "qsofa sepsis",
  "page": "Calculadora",
  "sub": "Alerta de mal pronóstico en infección (no es tamizaje único).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "FR ≥ 22",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Alteración mental",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "PAS ≤ 100",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);return {v:`${s}/3`,t:s>=2?"Alto riesgo: busca disfunción orgánica (SOFA, lactato)":"No excluye sepsis",l:s>=2?"bad":"ok"};}
  }
};
