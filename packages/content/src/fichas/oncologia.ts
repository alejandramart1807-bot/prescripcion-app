// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "nf",
  "sys": "Oncología",
  "group": "Oncología",
  "name": "Neutropenia febril",
  "aka": "neutropenia febril quimioterapia fiebre neutropenia",
  "page": "Fuente: IDSA/ASCO 2018 · ESMO 2016",
  "sub": "T ≥ 38,3 °C o ≥ 38 °C por 1 h, con neutrófilos < 500 o < 1000 con caída esperada a < 500.",
  "flow": [
    [
      "< 60 min",
      "Hemocultivos y antibiótico"
    ],
    [
      "MASCC ≥ 21",
      "Bajo riesgo: posible manejo oral"
    ],
    [
      "Alto riesgo",
      "Betalactámico antipseudomona IV"
    ],
    [
      "Día 4–7",
      "Fiebre persistente: antifúngico"
    ]
  ],
  "criteria": [
    "Hemocultivos: 2 sets (uno por catéter si lo tiene), urocultivo, Rx de tórax."
  ],
  "orders": [
    {
      "d": "Cefepime",
      "dose": "2 g IV c/8 h",
      "a": "Piperacilina-tazobactam 4,5 g IV c/6 h."
    },
    {
      "d": "Meropenem (shock, riesgo o colonización por BLEE)",
      "dose": "1 g IV c/8 h"
    },
    {
      "d": "Vancomicina (si infección de catéter, piel, neumonía, inestabilidad o SAMR)",
      "dose": "Carga 25–30 mg/kg IV (máx 3 g), luego 15–20 mg/kg c/8–12 h",
      "calc": {
        "t": "kg",
        "lo": 25,
        "hi": 30,
        "unit": "mg",
        "label": "carga",
        "max": 3000
      },
      "a": "Linezolid 600 mg IV c/12 h."
    },
    {
      "d": "Bajo riesgo (MASCC ≥ 21)",
      "dose": "Amoxicilina-clavulanato 875/125 mg c/12 h + ciprofloxacino 500 mg c/12 h VO"
    },
    {
      "d": "Antifúngico empírico (fiebre ≥ 4–7 días)",
      "dose": "Caspofungina 70 mg día 1, luego 50 mg/día",
      "a": "Anfotericina B liposomal 3 mg/kg/día o voriconazol."
    }
  ],
  "goals": [
    "Antibiótico < 60 min",
    "Defervescencia"
  ],
  "alerts": [
    "Evita tacto rectal",
    "Ajusta por cultivos y epidemiología local"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA/ASCO 2018 · ESMO 2016",
    "dif": [
      "Alta prevalencia de enterobacterias BLEE y KPC en Colombia: conoce el antibiograma de tu institución."
    ]
  }
},
{
  "id": "lisis-tumoral",
  "sys": "Oncología",
  "group": "Urgencias oncológicas",
  "name": "Síndrome de lisis tumoral",
  "aka": "lisis tumoral hiperuricemia hiperkalemia hiperfosfatemia rasburicasa alopurinol",
  "page": "Fuente: BJH 2015 · Cairo-Bishop",
  "sub": "Hiperuricemia, hiperpotasemia, hiperfosfatemia e hipocalcemia (Cairo-Bishop), con o sin LRA.",
  "flow": [
    [
      "Riesgo intermedio",
      "Hidratación + alopurinol"
    ],
    [
      "Alto riesgo o establecido",
      "Rasburicasa"
    ],
    [
      "LRA o K refractario",
      "Diálisis"
    ]
  ],
  "criteria": [
    "Alto riesgo: leucemia/linfoma de alto grado, gran masa tumoral, LDH alta, LRA previa."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Hidratación",
      "dose": "2–3 L/m²/día (diuresis ≥ 100 mL/h)"
    },
    {
      "d": "Alopurinol (prevención)",
      "dose": "100–300 mg VO c/8 h (máx 800 mg/día), ajustar a TFG"
    },
    {
      "d": "Rasburicasa",
      "dose": "0,2 mg/kg IV (o dosis fija 3–6 mg)",
      "calc": {
        "t": "kg",
        "lo": 0.2,
        "hi": 0.2,
        "unit": "mg"
      },
      "n": "Contraindicada en déficit de G6PD.",
      "a": "Sin rasburicasa: alopurinol + hidratación y diálisis temprana."
    },
    {
      "d": "Electrolitos c/6–8 h y manejo de hiperpotasemia"
    },
    {
      "d": "No alcalinizar la orina"
    }
  ],
  "goals": [
    "Ácido úrico y K normales"
  ],
  "alerts": [
    "Hipocalcemia: trata solo si sintomática (precipitación de fosfato de calcio)"
  ],
  "rel": [
    "hiperk",
    "lra"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BJH 2015 · Cairo-Bishop",
    "dif": [
      "Rasburicasa con disponibilidad limitada."
    ]
  }
},
{
  "id": "compresion-medular",
  "sys": "Oncología",
  "group": "Urgencias oncológicas",
  "name": "Compresión medular maligna",
  "aka": "compresion medular maligna metastasis vertebral dexametasona paraparesia",
  "page": "Fuente: NICE 2023 · ASCO",
  "sub": "Dolor de espalda en paciente oncológico + déficit neurológico o disfunción esfinteriana.",
  "flow": [
    [
      "1",
      "Dexametasona inmediata"
    ],
    [
      "2",
      "RM de columna completa"
    ],
    [
      "< 24 h",
      "Radioterapia o cirugía"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dexametasona",
      "dose": "10 mg IV en bolo, luego 4 mg c/6 h (16 mg/día) con desmonte"
    },
    {
      "d": "Analgesia (opioide) y protección gástrica"
    },
    {
      "d": "Sonda si retención; tromboprofilaxis; control glucémico"
    }
  ],
  "goals": [
    "Tratamiento definitivo < 24 h"
  ],
  "alerts": [
    "La capacidad de caminar al inicio predice el resultado"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "NICE 2023 · ASCO",
    "dif": []
  }
}
];
