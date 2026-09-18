// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-spesi",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "sPESI (gravedad del TEP)",
  "aka": "spesi tep pronostico",
  "page": "Calculadora",
  "sub": "Mortalidad a 30 días del TEP confirmado.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Edad > 80",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Cáncer",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Enfermedad cardiopulmonar crónica",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "FC ≥ 110",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "PAS < 100",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "SatO₂ < 90 %",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>cS(v)===0?{v:"0",t:"Bajo riesgo: candidato a manejo ambulatorio",l:"ok"}:{v:String(cS(v)),t:"No bajo riesgo: hospitalizar y evaluar VD y troponina",l:"warn"}
  }
};
