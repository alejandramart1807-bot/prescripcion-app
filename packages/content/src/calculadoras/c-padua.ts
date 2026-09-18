// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-padua",
  "sys": "Escalas y calculadoras",
  "group": "Urología y ortopedia",
  "name": "Padua (tromboprofilaxis en hospitalizados médicos)",
  "aka": "padua tromboprofilaxis riesgo tev hospitalizado",
  "page": "Calculadora",
  "sub": "≥ 4: alto riesgo de TEV.",
  "rel": [
    "mi-etv"
  ],
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Cáncer activo",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "b",
        "label": "TEV previo",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "c",
        "label": "Movilidad reducida ≥ 3 días",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "d",
        "label": "Trombofilia conocida",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "e",
        "label": "Trauma o cirugía ≤ 1 mes",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "f",
        "label": "Edad ≥ 70",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Insuficiencia cardíaca o respiratoria",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "h",
        "label": "IAM o ACV agudo",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "i",
        "label": "Infección aguda o enfermedad reumatológica",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "j",
        "label": "Obesidad (IMC ≥ 30)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "k",
        "label": "Terapia hormonal",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);return {v:`${s}`,t:s>=4?"Alto riesgo: enoxaparina 40 mg/día si no hay contraindicación":"Bajo riesgo: deambulación",l:s>=4?"warn":"ok"};}
  }
};
