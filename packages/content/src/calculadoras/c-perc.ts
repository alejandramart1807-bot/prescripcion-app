// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-perc",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "PERC (descartar TEP)",
  "aka": "perc tep descartar embolia",
  "page": "Calculadora",
  "sub": "Solo si la sospecha clínica es baja: si todos son negativos, no hace falta dímero D.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Edad ≥ 50",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "FC ≥ 100",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "SatO₂ < 95 %",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "Hemoptisis",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Uso de estrógenos",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "TVP o TEP previo",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Cirugía o trauma < 4 semanas",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "h",
        "label": "Edema unilateral de pierna",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>cS(v)===0?{v:"PERC negativo",t:"TEP descartado sin más pruebas (con baja probabilidad pretest)",l:"ok"}:{v:"PERC positivo",t:"Pide dímero D",l:"warn"}
  }
};
