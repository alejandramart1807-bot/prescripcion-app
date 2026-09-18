// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "dengue",
  "sys": "Infectología",
  "group": "Tropicales",
  "name": "Dengue",
  "aka": "dengue fiebre signos de alarma plaquetas grupo a b c",
  "page": "Fuente: Guía colombiana · OPS 2022",
  "sub": "Fiebre < 7 días + ≥ 2: náuseas, exantema, mialgias o artralgias, cefalea o dolor retroocular, petequias o prueba del torniquete +, leucopenia; en zona endémica.",
  "flow": [
    [
      "Grupo A",
      "Sin alarma ni riesgo: casa"
    ],
    [
      "Grupo B1",
      "Comorbilidad o riesgo social: observación"
    ],
    [
      "Grupo B2",
      "Signos de alarma: cristaloides en hospital"
    ],
    [
      "Grupo C",
      "Dengue grave: reanimación"
    ]
  ],
  "criteria": [
    "Signos de alarma: dolor abdominal intenso, vómito persistente, acumulación de líquidos, sangrado de mucosas, letargia o irritabilidad, hepatomegalia > 2 cm, ↑ hematocrito con ↓ rápida de plaquetas.",
    "La fase crítica suele ocurrir al caer la fiebre (días 3–7).",
    "Notificación obligatoria al INS (Sivigila)."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Grupo A: líquidos orales",
      "dose": "Abundantes (suero oral, jugos, agua)"
    },
    {
      "d": "Paracetamol",
      "dose": "500 mg–1 g VO c/6 h (máx 4 g/día)",
      "n": "Nada de AINE, ASA ni dipirona IM; no inyecciones IM."
    },
    {
      "d": "Control diario hasta 48 h después de la caída de la fiebre",
      "n": "Explica los signos de alarma."
    },
    {
      "cat": "En urgencias"
    },
    {
      "d": "Grupo B2: cristaloide",
      "dose": "10 mL/kg en 1 h; si mejora, 5–7 mL/kg/h × 2–4 h, luego 3–5 y 2–4 mL/kg/h",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mL",
        "label": "bolo 1 h"
      },
      "n": "Si no mejora: repetir 10 mL/kg (hasta 3 veces) y controlar hematocrito."
    },
    {
      "d": "Grupo C (shock): cristaloide",
      "dose": "20 mL/kg en 15–30 min y reevaluar; si mejora, 10 mL/kg/h × 1–2 h y luego descender",
      "calc": {
        "t": "kg",
        "lo": 20,
        "hi": 20,
        "unit": "mL",
        "label": "bolo"
      },
      "n": "Si no mejora y el hematocrito cae: piensa en sangrado → transfundir."
    }
  ],
  "goals": [
    "Diuresis ≥ 0,5–1 mL/kg/h",
    "Hematocrito estable",
    "Sin signos de alarma"
  ],
  "alerts": [
    "Evita sobrecarga en la fase de reabsorción",
    "No transfundas plaquetas por la cifra si no hay sangrado grave"
  ],
  "rel": [
    "mi-dengue"
  ],
  "g": {
    "co": {
      "n": "Guía de atención clínica integral del paciente con dengue, MinSalud e INS",
      "y": "2010",
      "st": "old",
      "txt": "Se complementa con la guía OPS 2022 para dengue, chikunguña y zika."
    },
    "intl": "OPS 2022",
    "dif": [
      "Colombia es hiperendémica: en fiebre sin foco, piensa siempre en dengue."
    ]
  }
},
{
  "id": "tar",
  "sys": "Infectología",
  "group": "VIH",
  "name": "VIH: inicio de terapia antirretroviral",
  "aka": "vih tar tarv antirretroviral dolutegravir inicio",
  "page": "Fuente: Guía colombiana · OMS 2021 · DHHS",
  "sub": "Todo diagnóstico nuevo de VIH debe iniciar TAR, idealmente el mismo día o en la primera semana, a través del programa.",
  "flow": [
    [
      "1",
      "Confirmación y CD4, carga viral"
    ],
    [
      "2",
      "Descarta TB y criptococo"
    ],
    [
      "3",
      "Inicio TAR"
    ],
    [
      "4",
      "Programa de VIH"
    ]
  ],
  "criteria": [
    "TB activa o meningitis criptocócica cambian el momento de inicio: consulta a infectología."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Esquema preferido",
      "dose": "Tenofovir disoproxilo 300 mg + lamivudina 300 mg (o emtricitabina 200 mg) + dolutegravir 50 mg, VO c/24 h",
      "a": "Bictegravir/emtricitabina/tenofovir alafenamida 1 tableta c/24 h si disponible."
    },
    {
      "d": "Profilaxis con TMP-SMX si CD4 < 200",
      "dose": "160/800 mg VO c/24 h"
    }
  ],
  "goals": [
    "Carga viral indetectable a los 6 meses"
  ],
  "alerts": [
    "Interacciones de dolutegravir con antiácidos, hierro, calcio y rifampicina"
  ],
  "rel": [
    "mi-vih"
  ],
  "g": {
    "co": {
      "n": "GPC VIH/sida en adolescentes, adultos y gestantes, MinSalud",
      "y": "2014 (actualizaciones posteriores)",
      "st": "ok",
      "txt": "Referencia nacional; el esquema lo define el programa de VIH de la EPS."
    },
    "intl": "OMS 2021 · DHHS",
    "dif": []
  }
},
{
  "id": "pep",
  "sys": "Infectología",
  "group": "VIH",
  "name": "Profilaxis posexposición (PEP) al VIH",
  "aka": "pep profilaxis post exposicion vih accidente biologico violencia sexual",
  "page": "Fuente: Guía colombiana · OMS 2024 PEP · CDC 2025",
  "sub": "Exposición de riesgo (sexual, ocupacional, violencia sexual) en las últimas 72 h.",
  "flow": [
    [
      "< 72 h",
      "Iniciar lo antes posible (ideal < 2 h)"
    ],
    [
      "28 días",
      "TAR completa"
    ],
    [
      "Seguimiento",
      "VIH a las 6 y 12 semanas"
    ]
  ],
  "criteria": [
    "Pruebas basales: VIH, hepatitis B y C, sífilis, embarazo, creatinina.",
    "Violencia sexual: además anticoncepción de emergencia, profilaxis de ITS y hepatitis B."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Tenofovir + emtricitabina (o lamivudina) + dolutegravir",
      "dose": "TDF/FTC 300/200 mg + dolutegravir 50 mg VO c/24 h por 28 días",
      "a": "Raltegravir 400 mg c/12 h en lugar de dolutegravir."
    },
    {
      "d": "Profilaxis de ITS (violencia sexual)",
      "dose": "Ceftriaxona 500 mg IM + azitromicina 1 g VO + metronidazol 2 g VO dosis única"
    },
    {
      "d": "Vacuna de hepatitis B ± inmunoglobulina según estado vacunal"
    }
  ],
  "goals": [
    "Iniciada < 72 h",
    "28 días completos"
  ],
  "alerts": [
    "Accidente ocupacional: reporta a la ARL"
  ],
  "rel": [
    "mi-vih"
  ],
  "g": {
    "co": {
      "n": "Protocolo de atención integral en salud para víctimas de violencia sexual (Resolución 459 de 2012) y GPC VIH, MinSalud",
      "y": "",
      "st": "ok",
      "txt": "Define el kit de profilaxis en violencia sexual."
    },
    "intl": "OMS 2024 PEP · CDC 2025",
    "dif": []
  }
},
{
  "id": "tb",
  "sys": "Infectología",
  "group": "Tuberculosis",
  "name": "Tuberculosis pulmonar (tratamiento de la TB sensible)",
  "aka": "tuberculosis tb pulmonar hrze isoniazida rifampicina",
  "page": "Fuente: Guía colombiana · OMS 2022",
  "sub": "Tos > 2 semanas, fiebre, sudoración, pérdida de peso; confirmación con prueba molecular (GeneXpert) o baciloscopia y cultivo.",
  "flow": [
    [
      "1",
      "Prueba molecular con resistencia a rifampicina"
    ],
    [
      "2",
      "Notificar e inscribir en el programa"
    ],
    [
      "3",
      "2HRZE / 4HR supervisado"
    ],
    [
      "4",
      "Contactos y VIH"
    ]
  ],
  "criteria": [
    "Aislamiento respiratorio mientras sea bacilífero.",
    "Tamiza VIH y diabetes."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Fase intensiva (2 meses): HRZE en dosis fijas combinadas",
      "dose": "Tabletas de H75/R150/Z400/E275 según peso, c/24 h supervisado",
      "calc": {
        "t": "table",
        "rows": [
          [
            40,
            "2 tabletas/día (30–39 kg)"
          ],
          [
            55,
            "3 tabletas/día (40–54 kg)"
          ],
          [
            71,
            "4 tabletas/día (55–70 kg)"
          ],
          [
            999,
            "5 tabletas/día (> 70 kg)"
          ]
        ]
      }
    },
    {
      "d": "Fase de continuación (4 meses): HR",
      "dose": "Tabletas de H75/R150 según la misma banda de peso, c/24 h"
    },
    {
      "d": "Piridoxina",
      "dose": "25–50 mg/día si diabetes, VIH, alcoholismo, embarazo o desnutrición"
    }
  ],
  "goals": [
    "Baciloscopia negativa al 2.º mes",
    "Adherencia supervisada"
  ],
  "alerts": [
    "Hepatotoxicidad: transaminasas si hay síntomas o riesgo",
    "Rifampicina interactúa con anticonceptivos, anticoagulantes y antirretrovirales"
  ],
  "rel": [
    "mi-tb"
  ],
  "g": {
    "co": {
      "n": "Lineamientos del Programa Nacional de Tuberculosis, MinSalud (Resolución 227 de 2020)",
      "y": "2020",
      "st": "ok",
      "txt": "Referencia nacional: esquemas, notificación y seguimiento."
    },
    "intl": "OMS 2022",
    "dif": [
      "Notificación obligatoria; los medicamentos los entrega el programa."
    ]
  }
}
];
