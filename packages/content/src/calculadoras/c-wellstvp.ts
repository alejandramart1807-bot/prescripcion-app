// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-wellstvp",
  "sys": "Escalas y calculadoras",
  "group": "Cardiovascular",
  "name": "Wells para TVP",
  "aka": "wells tvp trombosis venosa profunda",
  "page": "Calculadora",
  "sub": "Probabilidad clínica de TVP.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "a",
        "label": "Cáncer activo",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "b",
        "label": "Parálisis, paresia o yeso reciente",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "c",
        "label": "Encamado > 3 días o cirugía < 12 semanas",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "d",
        "label": "Dolor en el trayecto venoso profundo",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "e",
        "label": "Toda la pierna edematosa",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "f",
        "label": "Pantorrilla > 3 cm que la contralateral",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "g",
        "label": "Edema con fóvea en la pierna sintomática",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "h",
        "label": "Venas superficiales colaterales",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "i",
        "label": "TVP previa",
        "type": "chk",
        "pts": 1
      },
      {
        "id": "j",
        "label": "Otro diagnóstico igual o más probable",
        "type": "chk",
        "pts": -2
      }
    ],
    "compute": v=>{const s=cS(v);return s>=2?{v:`${s}`,t:"Probable: eco Doppler",l:"bad"}:{v:`${s}`,t:"Improbable: dímero D",l:"ok"};}
  }
};
