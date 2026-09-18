// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-cthead",
  "sys": "Escalas y calculadoras",
  "group": "Neurología",
  "name": "Regla canadiense de TAC en TCE leve",
  "aka": "canadian ct head rule tce leve tac",
  "page": "Calculadora",
  "sub": "Glasgow 13–15 con pérdida de conciencia, amnesia o desorientación presenciada.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Glasgow < 15 a las 2 h (alto)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Sospecha de fractura abierta o deprimida (alto)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Signos de fractura de base (alto)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "≥ 2 episodios de vómito (alto)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Edad ≥ 65 años (alto)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "Amnesia retrógrada ≥ 30 min (medio)",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Mecanismo peligroso (medio)",
        "type": "chk",
        "pts": 1
      }
    ],
    "compute": v=>{const s=cS(v);return s>0?{v:"TAC indicada",t:"Al menos un criterio positivo",l:"bad"}:{v:"TAC no necesaria",t:"Sin criterios (no aplica a anticoagulados ni < 16 años)",l:"ok"};}
  }
};
