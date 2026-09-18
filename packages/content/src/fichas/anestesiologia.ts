// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "anest-locales",
  "sys": "Anestesiología",
  "group": "Anestesia",
  "name": "Anestésicos locales: dosis máximas y toxicidad (LAST)",
  "aka": "anestesicos locales lidocaina bupivacaina dosis maxima toxicidad last emulsion lipidica",
  "page": "Fuente: ASRA 2020 LAST",
  "sub": "Calcula la dosis máxima antes de infiltrar.",
  "flow": [
    [
      "Calcula",
      "mg/kg según fármaco"
    ],
    [
      "Aspira e inyecta fraccionado"
    ],
    [
      "LAST",
      "Emulsión lipídica 20 %"
    ]
  ],
  "criteria": [
    "Lidocaína 1 % = 10 mg/mL; 2 % = 20 mg/mL. Bupivacaína 0,5 % = 5 mg/mL.",
    "LAST: sabor metálico, parestesias peribucales, convulsiones, arritmias, paro."
  ],
  "orders": [
    {
      "d": "Lidocaína sin epinefrina",
      "dose": "Máx 4,5 mg/kg (≤ 300 mg)",
      "calc": {
        "t": "kg",
        "lo": 4.5,
        "hi": 4.5,
        "unit": "mg",
        "max": 300
      }
    },
    {
      "d": "Lidocaína con epinefrina",
      "dose": "Máx 7 mg/kg (≤ 500 mg)",
      "calc": {
        "t": "kg",
        "lo": 7,
        "hi": 7,
        "unit": "mg",
        "max": 500
      }
    },
    {
      "d": "Bupivacaína",
      "dose": "Máx 2,5 mg/kg (≤ 175 mg; 225 mg con epinefrina)",
      "calc": {
        "t": "kg",
        "lo": 2.5,
        "hi": 2.5,
        "unit": "mg",
        "max": 175
      }
    },
    {
      "d": "Ropivacaína",
      "dose": "Máx 3 mg/kg (≤ 200 mg)",
      "calc": {
        "t": "kg",
        "lo": 3,
        "hi": 3,
        "unit": "mg",
        "max": 200
      }
    },
    {
      "cat": "Toxicidad (LAST)"
    },
    {
      "d": "Emulsión lipídica 20 %",
      "dose": "1,5 mL/kg IV en 2–3 min, luego 0,25 mL/kg/min; repetir bolo si inestable (máx 12 mL/kg)",
      "calc": {
        "t": "kg",
        "lo": 1.5,
        "hi": 1.5,
        "unit": "mL",
        "label": "bolo"
      }
    },
    {
      "d": "Convulsiones",
      "dose": "Midazolam 2–5 mg IV",
      "n": "Evita propofol en inestables."
    },
    {
      "d": "Paro",
      "n": "RCP con adrenalina en dosis bajas (≤ 1 mcg/kg); evitar vasopresina, lidocaína y calcioantagonistas."
    }
  ],
  "goals": [
    "Nunca superar la dosis máxima"
  ],
  "alerts": [
    "No uses epinefrina en pene ni dedos si hay compromiso vascular"
  ],
  "rel": [
    "atc"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASRA 2020 LAST",
    "dif": []
  }
},
{
  "id": "preanestesia",
  "sys": "Anestesiología",
  "group": "Anestesia",
  "name": "Valoración preanestésica: ayuno y manejo de medicamentos",
  "aka": "valoracion preanestesica ayuno medicamentos antes de cirugia metformina isglt2 glp1 insulina ieca",
  "page": "Fuente: ASA 2023 ayuno · consenso multisociedad 2024 GLP-1",
  "sub": "Qué suspender, qué mantener y cuánto ayuno.",
  "flow": [
    [
      "Ayuno",
      "Sólidos 6–8 h · leche 6 h · materna 4 h · claros 2 h"
    ],
    [
      "Medicamentos",
      "Suspender, ajustar o continuar"
    ],
    [
      "ASA",
      "Clasificar riesgo"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Continuar",
      "n": "Betabloqueador, estatina, levotiroxina, anticonvulsivantes, inhaladores, antipsicóticos."
    },
    {
      "d": "IECA/ARA-II",
      "dose": "Omitir la dosis de la mañana"
    },
    {
      "d": "Metformina",
      "dose": "Omitir el día de la cirugía"
    },
    {
      "d": "iSGLT2",
      "dose": "Suspender 3 días antes (ertugliflozina 4)"
    },
    {
      "d": "Agonistas GLP-1",
      "n": "Riesgo de estómago lleno: dieta líquida 24 h antes o suspender la dosis semanal según protocolo."
    },
    {
      "d": "Insulina basal",
      "dose": "75–80 % de la dosis la noche anterior"
    },
    {
      "d": "Anticoagulantes y antiagregantes",
      "n": "Ver ficha de perioperatorio."
    }
  ],
  "goals": [
    "Paciente optimizado"
  ],
  "alerts": [
    "Corticoides crónicos: dosis de estrés"
  ],
  "rel": [
    "antitromb-periop"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASA 2023 ayuno · consenso multisociedad 2024 GLP-1",
    "dif": []
  }
},
{
  "id": "postop-dolor",
  "sys": "Anestesiología",
  "group": "Anestesia",
  "name": "Dolor posoperatorio multimodal y náusea/vómito posoperatorio",
  "aka": "dolor posoperatorio multimodal nvpo nausea vomito posoperatorio apfel ondansetron dexametasona",
  "page": "Fuente: PROSPECT · Consenso 2020 NVPO",
  "sub": "Combina analgésicos con mecanismos distintos y profilaxis de NVPO según Apfel.",
  "flow": [
    [
      "Base",
      "Paracetamol + AINE o dipirona"
    ],
    [
      "Rescate",
      "Opioide"
    ],
    [
      "Apfel ≥ 2",
      "Dos antieméticos"
    ]
  ],
  "criteria": [
    "Apfel: mujer, no fumador, antecedente de NVPO o mareo, opioides posoperatorios."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Paracetamol",
      "dose": "1 g IV/VO c/6 h"
    },
    {
      "d": "AINE",
      "dose": "Ketorolaco 30 mg IV c/8 h (máx 5 días) o celecoxib 200 mg c/12 h",
      "a": "Dipirona 1–2 g IV c/6–8 h."
    },
    {
      "d": "Rescate",
      "dose": "Morfina 2–3 mg IV c/10 min PRN o tramadol 50–100 mg c/8 h"
    },
    {
      "d": "Profilaxis de NVPO",
      "dose": "Dexametasona 4–8 mg IV en la inducción + ondansetrón 4 mg IV al final",
      "a": "Rescate con otra clase: metoclopramida 10 mg o dimenhidrinato 50 mg."
    }
  ],
  "goals": [
    "EVA ≤ 3"
  ],
  "alerts": [
    "Opioides + benzodiazepinas: depresión respiratoria"
  ],
  "rel": [
    "analgesia"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "PROSPECT · Consenso 2020 NVPO",
    "dif": []
  }
}
];
