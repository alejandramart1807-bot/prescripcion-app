// @ts-nocheck -- ver CALC_IDS_NEEDING_TS_NOCHECK en tools/extract-content.mjs: compute() preservado byte a byte choca con un límite real del checker de TS (no con un error del dato).
// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { FichaCalc } from "../schema.ts";
import { cS, cB, cN, cF } from "../helpers.ts";

export const FICHA: FichaCalc = {
  "id": "c-news2",
  "sys": "Escalas y calculadoras",
  "group": "Respiratorio e infecciones",
  "name": "NEWS2 (alerta temprana)",
  "aka": "news2 early warning deterioro",
  "page": "Calculadora",
  "sub": "Escala 1 de SatO₂ (no hipercápnico).",
  "notes": [],
  "calcForm": {
    "inputs": [
      {
        "id": "fr",
        "label": "Frecuencia respiratoria",
        "type": "num",
        "unit": "rpm",
        "ph": undefined
      },
      {
        "id": "sat",
        "label": "SatO₂",
        "type": "num",
        "unit": "%",
        "ph": undefined
      },
      {
        "id": "o2",
        "label": "Oxígeno suplementario",
        "type": "chk",
        "pts": 2
      },
      {
        "id": "pas",
        "label": "PAS",
        "type": "num",
        "unit": "mmHg",
        "ph": undefined
      },
      {
        "id": "fc",
        "label": "FC",
        "type": "num",
        "unit": "lpm",
        "ph": undefined
      },
      {
        "id": "conf",
        "label": "Confusión nueva o responde solo a voz/dolor/no responde",
        "type": "chk",
        "pts": 3
      },
      {
        "id": "t",
        "label": "Temperatura",
        "type": "num",
        "unit": "°C",
        "ph": undefined
      }
    ],
    "compute": v=>{if(!cN(v.fr,v.sat,v.pas,v.fc,v.t))return null;const p=[];const add=x=>{p.push(x);return x;};
  add(v.fr<=8?3:v.fr<=11?1:v.fr<=20?0:v.fr<=24?2:3);add(v.sat<=91?3:v.sat<=93?2:v.sat<=95?1:0);add(v.o2);add(v.pas<=90?3:v.pas<=100?2:v.pas<=110?1:v.pas<=219?0:3);
  add(v.fc<=40?3:v.fc<=50?1:v.fc<=90?0:v.fc<=110?1:v.fc<=130?2:3);add(v.conf);add(v.t<=35?3:v.t<=36?1:v.t<=38?0:v.t<=39?1:2);
  const s=p.reduce((a,b)=>a+b,0);const tres=p.some(x=>x===3);
  return {v:`${s}`,t:s>=7?"Alto: respuesta de emergencia / UCI":s>=5?"Medio: valoración médica urgente":tres?"Un parámetro en 3: valoración urgente":"Bajo",l:s>=7?"bad":(s>=5||tres)?"warn":"ok"};}
  }
};
