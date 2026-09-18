// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-wellstep",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "Wells para TEP",
  "aka": "wells tep embolia pulmonar dimero",
  "page": "Calculadora",
  "sub": "Probabilidad clínica de TEP.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Signos clínicos de TVP",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "b",
        "label": "TEP es el diagnóstico más probable",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "c",
        "label": "FC > 100",
        "type": "chk",
        "pts": 1.5
      },
      {
        "id": "d",
        "label": "Inmovilización ≥ 3 días o cirugía < 4 semanas",
        "type": "chk",
        "pts": 1.5
      },
      {
        "id": "e",
        "label": "TVP o TEP previo",
        "type": "chk",
        "pts": 1.5
      },
      {
        "id": "f",
        "label": "Hemoptisis",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Cáncer activo",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);return s>4?{v:`${cF(s)} puntos`,t:"TEP probable: angioTAC",l:"bad"}:{v:`${cF(s)} puntos`,t:"TEP improbable: dímero D (y PERC si muy baja sospecha)",l:"ok"};}
  }
};
