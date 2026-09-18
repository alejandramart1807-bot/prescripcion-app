// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-timi",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "TIMI (SCASEST)",
  "aka": "timi scasest angina inestable",
  "page": "Calculadora",
  "sub": "Riesgo a 14 días en SCA sin elevación del ST.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Edad ≥ 65 años",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "≥ 3 factores de riesgo coronario",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Estenosis coronaria conocida ≥ 50 %",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "ASA en los últimos 7 días",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "≥ 2 episodios de angina en 24 h",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "Desviación del ST ≥ 0,5 mm",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Marcadores cardíacos elevados",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);const r=cB(s,[[2,"Bajo","ok"],[4,"Intermedio","warn"],[7,"Alto","bad"]]);return {v:`${s}/7`,t:r[1],l:r[2]};}
  }
};
