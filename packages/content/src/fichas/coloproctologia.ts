// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "estrenimiento",
  "sys": "Coloproctología",
  "group": "Coloproctología",
  "name": "Estreñimiento (constipación)",
  "aka": "estreñimiento constipacion laxante fecaloma",
  "page": "Fuente: AGA/ACG 2023 estreñimiento crónico",
  "sub": "Menos de 3 deposiciones por semana, esfuerzo o heces duras.",
  "flow": [
    [
      "1",
      "Descarta obstrucción y signos de alarma"
    ],
    [
      "2",
      "Fecaloma: enema"
    ],
    [
      "3",
      "Casa: fibra + osmótico"
    ]
  ],
  "criteria": [
    "Alarma: sangrado, pérdida de peso, anemia, cambio reciente > 50 años, antecedente familiar de cáncer colorrectal."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Enema de fosfato o SSN",
      "dose": "1 enema rectal",
      "n": "Fecaloma: desimpactación manual. Evita fosfato en ERC y ancianos frágiles.",
      "a": "Enema de aceite mineral."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Polietilenglicol 3350",
      "dose": "17 g en 200 mL de agua c/24 h",
      "a": "Lactulosa 15–30 mL c/12–24 h."
    },
    {
      "d": "Bisacodilo",
      "dose": "5–10 mg VO en la noche si no responde",
      "a": "Senósidos 8,6–17,2 mg en la noche."
    },
    {
      "d": "Fibra y agua",
      "dose": "Psyllium 1 sobre c/12–24 h + 1,5–2 L de agua"
    }
  ],
  "goals": [
    "Deposición blanda cada 1–2 días"
  ],
  "alerts": [
    "Revisa fármacos: opioides, anticolinérgicos, hierro, calcioantagonistas"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AGA/ACG 2023 estreñimiento crónico",
    "dif": []
  }
},
{
  "id": "hemorroides",
  "sys": "Coloproctología",
  "group": "Coloproctología",
  "name": "Enfermedad hemorroidal",
  "aka": "hemorroides hemorroide trombosada sangrado anal",
  "page": "Fuente: ASCRS 2018 hemorroides",
  "sub": "Sangrado rojo rutilante, prolapso o dolor (trombosis externa).",
  "flow": [
    [
      "Interna",
      "Fibra + tópico + flebotónico"
    ],
    [
      "Externa trombosada < 72 h",
      "Escisión"
    ],
    [
      "> 72 h",
      "Manejo médico"
    ]
  ],
  "criteria": [
    "Sangrado con signos de alarma o > 45–50 años: colonoscopia."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Fibra y agua",
      "dose": "Psyllium 1 sobre c/12 h + 2 L de agua"
    },
    {
      "d": "Baños de asiento con agua tibia",
      "dose": "10–15 min 2–3 veces al día"
    },
    {
      "d": "Tópico con corticoide y anestésico",
      "dose": "Hidrocortisona + lidocaína pomada c/8–12 h por máx 7 días"
    },
    {
      "d": "Diosmina-hesperidina (fracción flavonoide micronizada)",
      "dose": "1000 mg VO c/8 h × 4 días, luego c/12 h × 3 días"
    },
    {
      "d": "Analgesia",
      "dose": "Paracetamol 1 g c/6–8 h ± ibuprofeno 400 mg c/8 h"
    }
  ],
  "goals": [
    "Sin sangrado ni dolor en 1–2 semanas"
  ],
  "alerts": [
    "Trombosis externa < 72 h: remite para escisión"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASCRS 2018 hemorroides",
    "dif": []
  }
},
{
  "id": "fisura",
  "sys": "Coloproctología",
  "group": "Coloproctología",
  "name": "Fisura anal",
  "aka": "fisura anal dolor defecar sangrado",
  "page": "Fuente: ASCRS 2023 fisura anal",
  "sub": "Dolor anal intenso al defecar con sangrado escaso; fisura usualmente en línea media posterior.",
  "flow": [
    [
      "1",
      "Ablanda heces"
    ],
    [
      "2",
      "Relajante del esfínter tópico 6–8 semanas"
    ],
    [
      "Crónica que no cede",
      "Toxina botulínica o esfinterotomía"
    ]
  ],
  "criteria": [
    "Fisura lateral o múltiple: descarta Crohn, VIH, sífilis, cáncer."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Fibra y agua",
      "dose": "Psyllium 1 sobre c/12 h"
    },
    {
      "d": "Baños de asiento",
      "dose": "Agua tibia 10–15 min después de cada deposición"
    },
    {
      "d": "Nitroglicerina pomada 0,2–0,4 %",
      "dose": "Aplicar en el ano c/12 h por 6–8 semanas",
      "n": "Puede dar cefalea.",
      "a": "Diltiazem 2 % pomada c/12 h (preparación magistral), con menos cefalea."
    },
    {
      "d": "Lidocaína 2 % gel",
      "dose": "Antes de defecar"
    }
  ],
  "goals": [
    "Cicatrización en 6–8 semanas"
  ],
  "alerts": [
    "Nitroglicerina tópica: no con sildenafil"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASCRS 2023 fisura anal",
    "dif": []
  }
}
];
