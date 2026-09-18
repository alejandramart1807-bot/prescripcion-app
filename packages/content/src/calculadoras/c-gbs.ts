// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-gbs",
  "sys": "Escalas y calculadoras",
  "group": "Digestivo",
  "name": "Glasgow-Blatchford (HDA)",
  "aka": "glasgow blatchford hemorragia digestiva alta",
  "page": "Calculadora",
  "sub": "0–1: candidato a manejo ambulatorio.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "u",
        "label": "BUN (mg/dL)",
        "type": "sel",
        "opts": [
          [
            "< 18,2 (0)",
            0
          ],
          [
            "18,2–22,3 (2)",
            2
          ],
          [
            "22,4–27,9 (3)",
            3
          ],
          [
            "28–69,9 (4)",
            4
          ],
          [
            "≥ 70 (6)",
            6
          ]
        ]
      },
      {
        "id": "sexo",
        "label": "Sexo",
        "type": "sel",
        "opts": [
          [
            "Hombre",
            0
          ],
          [
            "Mujer",
            1
          ]
        ]
      },
      {
        "id": "hb",
        "label": "Hemoglobina",
        "type": "num",
        "unit": "g/dL",
        "ph": undefined
      },
      {
        "id": "p",
        "label": "PAS",
        "type": "sel",
        "opts": [
          [
            "≥ 110 (0)",
            0
          ],
          [
            "100–109 (1)",
            1
          ],
          [
            "90–99 (2)",
            2
          ],
          [
            "< 90 (3)",
            3
          ]
        ]
      },
      {
        "id": "fc",
        "label": "FC ≥ 100",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "me",
        "label": "Melena",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "si",
        "label": "Síncope",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "he",
        "label": "Hepatopatía",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "ic",
        "label": "Insuficiencia cardíaca",
        "type": "chk",
        "pts": 2
      }
    ],
    "compute": v=>{if(!cN(v.hb))return null;const hb=v.sexo?(v.hb>=12?0:v.hb>=10?1:6):(v.hb>=13?0:v.hb>=12?1:v.hb>=10?3:6);const s=v.u+hb+v.p+v.fc+v.me+v.si+v.he+v.ic;return {v:`${s}`,t:s<=1?"Bajo riesgo: manejo ambulatorio posible":"Hospitalizar y endoscopia",l:s<=1?"ok":s>=7?"bad":"warn"};}
  }
};
