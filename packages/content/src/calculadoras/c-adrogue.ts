// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-adrogue",
  "sys": "Escalas y calculadoras",
  "group": "Riñón y electrolitos",
  "name": "Cambio de sodio por litro (Adrogué-Madias)",
  "aka": "adrogue madias sodio solucion salina hipertonica correccion",
  "page": "Calculadora",
  "sub": "Cuánto cambia el Na sérico con 1 L de la solución elegida.",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "na",
        "label": "Sodio sérico",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      },
      {
        "id": "peso",
        "label": "Peso",
        "type": "num",
        "unit": "kg",
        "ph": undefined
      },
      {
        "id": "f",
        "label": "Agua corporal",
        "type": "sel",
        "opts": [
          [
            "Hombre joven (0,6)",
            0.6
          ],
          [
            "Mujer joven u hombre anciano (0,5)",
            0.5
          ],
          [
            "Mujer anciana (0,45)",
            0.45
          ]
        ]
      },
      {
        "id": "s",
        "label": "Solución",
        "type": "sel",
        "opts": [
          [
            "SSN 3 % (513)",
            513
          ],
          [
            "SSN 0,9 % (154)",
            154
          ],
          [
            "Lactato de Ringer (130)",
            130
          ],
          [
            "SSN 0,45 % (77)",
            77
          ],
          [
            "DAD 5 % (0)",
            0
          ]
        ]
      },
      {
        "id": "k",
        "label": "K⁺ añadido por litro (opcional)",
        "type": "num",
        "unit": "mEq/L",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.na,v.peso))return null;const k=cN(v.k)?v.k:0;const d=(v.s+k-v.na)/(v.f*v.peso+1);return {v:`${d>0?"+":""}${cF(d)} mEq/L por litro`,t:"Estimación: mide Na c/2–4 h; límite 8–10 mEq/L en 24 h",l:"ok"};}
  }
};
