// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "asma",
  "sys": "Neumología",
  "group": "Vía aérea",
  "name": "Exacerbación asmática",
  "aka": "asma crisis asmatica broncoespasmo salbutamol sibilancias",
  "page": "Fuente: GINA (reporte vigente)",
  "sub": "Aumento de disnea, tos o sibilancias con caída de la función pulmonar. Gravedad: habla, FR, FC, SatO₂, PEF.",
  "flow": [
    [
      "1",
      "SABA c/20 min × 1 h"
    ],
    [
      "2",
      "Corticoide sistémico en la primera hora"
    ],
    [
      "Grave",
      "+ ipratropio + sulfato de magnesio"
    ],
    [
      "Egreso",
      "ICS-formoterol"
    ]
  ],
  "criteria": [
    "Signos de riesgo vital: silencio auscultatorio, cianosis, alteración de conciencia, PaCO₂ normal o alta.",
    "No uses sedantes."
  ],
  "orders": [
    {
      "d": "Salbutamol",
      "dose": "4–10 puff con inhalocámara c/20 min × 1 h",
      "a": "Nebulizado 2,5–5 mg c/20 min; si no hay respuesta y hay anafilaxia: adrenalina 0,5 mg IM."
    },
    {
      "d": "Bromuro de ipratropio (grave)",
      "dose": "4–8 puff o 500 mcg nebulizado c/20 min × 3"
    },
    {
      "d": "Corticoide sistémico",
      "dose": "Prednisolona/prednisona 40–50 mg VO c/24 h por 5–7 días",
      "a": "Metilprednisolona 40–80 mg IV c/24 h o hidrocortisona 100 mg IV c/6–8 h si no tolera VO."
    },
    {
      "d": "Oxígeno",
      "dose": "Meta SatO₂ 93–95 %"
    },
    {
      "d": "Sulfato de magnesio (grave sin respuesta)",
      "dose": "2 g IV en 20 min"
    },
    {
      "d": "Egreso",
      "dose": "Budesonida-formoterol como controlador y rescate; control en 2–7 días"
    }
  ],
  "goals": [
    "PEF > 60–70 % del predicho",
    "SatO₂ ≥ 94 % al aire"
  ],
  "alerts": [
    "Intubación: ketamina de inductor, FR baja y espiración prolongada (ficha de ventilación)",
    "No uses aminofilina de rutina"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La GPC de asma del MinSalud (2013) es pediátrica; en adultos se sigue GINA."
    },
    "intl": "GINA (reporte vigente)",
    "dif": []
  }
},
{
  "id": "epoc",
  "sys": "Neumología",
  "group": "Vía aérea",
  "name": "EPOC exacerbada",
  "aka": "epoc exacerbacion bronquitis enfisema retencion co2",
  "page": "Fuente: Guía colombiana · GOLD (reporte vigente)",
  "sub": "Empeoramiento agudo de disnea, tos o esputo en EPOC. Evalúa gravedad con gases (pH, PaCO₂).",
  "flow": [
    [
      "1",
      "Broncodilatadores"
    ],
    [
      "2",
      "Prednisona 5 días"
    ],
    [
      "3",
      "Antibiótico si esputo purulento"
    ],
    [
      "4",
      "VNI si pH < 7,35 y PaCO₂ > 45"
    ]
  ],
  "criteria": [
    "Descarta neumonía, TEP, IC, neumotórax."
  ],
  "orders": [
    {
      "d": "Salbutamol + ipratropio",
      "dose": "Salbutamol 2,5–5 mg + ipratropio 500 mcg nebulizado c/4–6 h (o c/20 min × 3 inicial)",
      "n": "Nebulizar con aire comprimido si hay hipercapnia."
    },
    {
      "d": "Prednisona",
      "dose": "40 mg VO c/24 h por 5 días",
      "a": "Metilprednisolona 40 mg IV c/24 h si no tolera VO."
    },
    {
      "d": "Antibiótico (esputo purulento + ↑ disnea o volumen, o ventilación)",
      "dose": "Amoxicilina-clavulanato 875/125 mg VO c/12 h × 5 días",
      "a": "Azitromicina 500 mg día 1 y 250 mg/día, o doxiciclina 100 mg c/12 h. Riesgo de Pseudomonas: levofloxacino 750 mg/día o ciprofloxacino."
    },
    {
      "d": "Oxígeno controlado",
      "dose": "Meta SatO₂ 88–92 % (Venturi)"
    },
    {
      "d": "VNI",
      "dose": "BiPAP IPAP 10–12 subir a 15–20, EPAP 4–5",
      "n": "Si pH < 7,35 y PaCO₂ > 45 mmHg."
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h"
    }
  ],
  "goals": [
    "SatO₂ 88–92 %",
    "pH > 7,35"
  ],
  "alerts": [
    "Oxígeno a alto flujo empeora la hipercapnia",
    "Falla de VNI a 1–2 h: intubación"
  ],
  "rel": [
    "mi-epoc"
  ],
  "g": {
    "co": {
      "n": "GPC EPOC en población adulta, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con el reporte GOLD vigente."
    },
    "intl": "GOLD (reporte vigente)",
    "dif": []
  }
},
{
  "id": "tep",
  "sys": "Neumología",
  "group": "Circulación pulmonar",
  "name": "Tromboembolismo pulmonar (TEP)",
  "aka": "tep tromboembolismo pulmonar embolia trombolisis anticoagulacion",
  "page": "Fuente: AHA/ACC 2026 TEP (categorías A–E) · ESC 2019 TEP",
  "sub": "Sospecha por Wells o criterios clínicos; confirma con angioTAC. Estratifica: categorías AHA/ACC 2026 (A–E) o riesgo ESC.",
  "flow": [
    [
      "Baja severidad",
      "Anticoagulante oral directo, alta temprana"
    ],
    [
      "Severidad alta (C)",
      "Hospitalizar y anticoagular; vigilar"
    ],
    [
      "Falla incipiente (D)",
      "Equipo de TEP; terapia avanzada si progresa"
    ],
    [
      "Hipotensión (E)",
      "Trombólisis sistémica o terapia por catéter"
    ]
  ],
  "criteria": [
    "Anticoagula ya si la sospecha es alta y el sangrado bajo, mientras confirmas.",
    "Pide troponina, péptido natriurético y evaluación del VD (eco o TAC)."
  ],
  "orders": [
    {
      "d": "Enoxaparina",
      "dose": "1 mg/kg SC c/12 h (ClCr < 30: c/24 h)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "por dosis"
      },
      "a": "Rivaroxabán 15 mg c/12 h × 21 días o apixabán 10 mg c/12 h × 7 días en bajo riesgo."
    },
    {
      "d": "Heparina no fraccionada (inestable, candidato a trombólisis, ClCr < 30)",
      "dose": "80 U/kg IV bolo, luego 18 U/kg/h (TTPa 1,5–2,5)",
      "dil": "25 000 U en 250 mL = 100 U/mL",
      "calc": {
        "t": "kgh",
        "lo": 18,
        "hi": 18,
        "conc": 100,
        "unit": "U"
      }
    },
    {
      "d": "Alteplasa (TEP de alto riesgo / categoría E)",
      "dose": "100 mg IV en 2 h",
      "n": "En paro: 50 mg en bolo. Suspende la HNF durante la infusión y reiníciala cuando el TTPa < 2 veces.",
      "a": "Estreptoquinasa 250 000 U en 30 min + 100 000 U/h × 12–24 h (o régimen acelerado 1,5 millones U en 2 h). Tenecteplasa por peso (uso fuera de indicación)."
    },
    {
      "d": "Noradrenalina si hipotensión",
      "dose": "0,05–0,5 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.5,
        "conc": 16
      },
      "dil": "4 mg en 250 mL = 16 mcg/mL"
    },
    {
      "d": "Líquidos con cautela",
      "dose": "Máx 250–500 mL si PVC baja",
      "n": "El exceso de volumen dilata y empeora el VD."
    },
    {
      "d": "Oxígeno si SatO₂ < 90 %"
    }
  ],
  "goals": [
    "Anticoagulación terapéutica temprana",
    "Estabilidad hemodinámica"
  ],
  "alerts": [
    "Contraindicaciones de trombólisis: las mismas del IAM",
    "Intubación en falla de VD puede precipitar paro: prepara vasopresor"
  ],
  "rel": [
    "c-wellstep",
    "c-perc",
    "c-spesi",
    "mi-etv"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AHA/ACC 2026 TEP (categorías A–E) · ESC 2019 TEP",
    "dif": [
      "Alteplasa y estreptoquinasa disponibles; las terapias por catéter solo en centros de alta complejidad."
    ]
  }
},
{
  "id": "covid",
  "sys": "Neumología",
  "group": "Infecciones respiratorias",
  "name": "COVID-19",
  "aka": "covid coronavirus sars-cov-2 nirmatrelvir dexametasona",
  "page": "Fuente: IDSA 2024 · OMS 2025",
  "sub": "Infección respiratoria por SARS-CoV-2; la mayoría leve. Riesgo: edad > 65, inmunosupresión, comorbilidades.",
  "flow": [
    [
      "Leve sin riesgo",
      "Sintomático"
    ],
    [
      "Leve con riesgo (< 5 días)",
      "Antiviral si disponible"
    ],
    [
      "Con O₂",
      "Dexametasona + tromboprofilaxis"
    ]
  ],
  "criteria": [
    "SatO₂ < 94 % al aire: hospitaliza."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Sintomático",
      "dose": "Paracetamol 500 mg–1 g c/6–8 h, hidratación"
    },
    {
      "d": "Alto riesgo: nirmatrelvir/ritonavir",
      "dose": "300/100 mg VO c/12 h por 5 días (< 5 días de síntomas)",
      "n": "Muchas interacciones; ajusta a TFG.",
      "a": "Remdesivir IV 3 días (200 mg día 1, 100 mg días 2–3) o molnupiravir 800 mg c/12 h × 5 días."
    },
    {
      "cat": "En urgencias"
    },
    {
      "d": "Hospitalizado con O₂: dexametasona",
      "dose": "6 mg VO/IV c/24 h por hasta 10 días"
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h"
    }
  ],
  "goals": [
    "SatO₂ ≥ 94 %"
  ],
  "alerts": [
    "No uses dexametasona sin requerimiento de O₂"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "Colombia tuvo consensos ACIN-IETS durante la pandemia; hoy se siguen IDSA y NIH."
    },
    "intl": "IDSA 2024 · OMS 2025",
    "dif": [
      "Nirmatrelvir/ritonavir y remdesivir con disponibilidad limitada."
    ]
  }
},
{
  "id": "influenza",
  "sys": "Neumología",
  "group": "Infecciones respiratorias",
  "name": "Influenza",
  "aka": "influenza gripe oseltamivir",
  "page": "Fuente: IDSA 2018 influenza",
  "sub": "Fiebre súbita, mialgias, cefalea y tos en temporada.",
  "flow": [
    [
      "Riesgo o grave o hospitalizado",
      "Oseltamivir (idealmente < 48 h)"
    ],
    [
      "Sano, leve",
      "Sintomático"
    ]
  ],
  "criteria": [
    "Riesgo: ≥ 65 años, embarazo, enfermedad crónica, inmunosupresión, obesidad mórbida."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Oseltamivir",
      "dose": "75 mg VO c/12 h por 5 días (ajustar si TFG < 60)"
    },
    {
      "d": "Paracetamol",
      "dose": "500 mg–1 g c/6–8 h"
    }
  ],
  "goals": [
    "Resolución en 5–7 días"
  ],
  "alerts": [
    "Empeoramiento tras mejoría: sobreinfección bacteriana"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2018 influenza",
    "dif": []
  }
},
{
  "id": "nac-amb",
  "sys": "Neumología",
  "group": "Infecciones respiratorias",
  "name": "Neumonía adquirida en la comunidad (ambulatoria y hospitalaria no grave)",
  "aka": "neumonia nac ambulatoria amoxicilina curb65",
  "page": "Fuente: Guía colombiana · ATS/IDSA 2019",
  "sub": "Tos, fiebre, disnea y consolidación. CURB-65 0–1: casa; 2: hospital; ≥ 3 o criterios ATS: UCI (ficha de neumonía grave).",
  "flow": [
    [
      "CURB-65 0–1 sin comorbilidad",
      "Amoxicilina"
    ],
    [
      "Con comorbilidad",
      "Amoxicilina-clavulanato + macrólido"
    ],
    [
      "Hospital no grave",
      "Ampicilina-sulbactam o ceftriaxona + macrólido"
    ]
  ],
  "criteria": [
    "Reevaluación en 48–72 h."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Sin comorbilidad: amoxicilina",
      "dose": "1 g VO c/8 h por 5 días",
      "a": "Doxiciclina 100 mg c/12 h o claritromicina 500 mg c/12 h."
    },
    {
      "d": "Con comorbilidad",
      "dose": "Amoxicilina-clavulanato 875/125 mg c/12 h + azitromicina 500 mg día 1 y 250 mg días 2–5",
      "a": "Levofloxacino 750 mg c/24 h por 5 días."
    },
    {
      "cat": "En urgencias"
    },
    {
      "d": "Hospitalario no grave",
      "dose": "Ampicilina-sulbactam 1,5–3 g IV c/6 h o ceftriaxona 1–2 g IV c/24 h + claritromicina 500 mg c/12 h",
      "a": "Levofloxacino 750 mg IV c/24 h."
    }
  ],
  "goals": [
    "Afebril y estable a las 48–72 h"
  ],
  "alerts": [
    "Fluoroquinolonas: reserva para alergia (considera TB)"
  ],
  "rel": [
    "c-curb65",
    "mi-nac"
  ],
  "g": {
    "co": {
      "n": "Recomendaciones colombianas de NAC en adultos (ACIN)",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con ATS/IDSA 2019."
    },
    "intl": "ATS/IDSA 2019",
    "dif": []
  }
},
{
  "id": "resfriado",
  "sys": "Neumología",
  "group": "Infecciones respiratorias",
  "name": "Resfriado común",
  "aka": "resfriado gripa rinofaringitis catarro",
  "page": "Fuente: Cochrane · ACP 2016",
  "sub": "Rinorrea, congestión, odinofagia leve, tos; sin fiebre alta. Viral y autolimitado (7–10 días).",
  "flow": [
    [
      "1",
      "Sintomático"
    ],
    [
      "2",
      "Sin antibiótico"
    ],
    [
      "Alarma",
      "Disnea, fiebre > 3 días, empeoramiento tras mejoría"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Paracetamol o ibuprofeno",
      "dose": "Paracetamol 500 mg–1 g c/6–8 h o ibuprofeno 400 mg c/8 h"
    },
    {
      "d": "Lavados nasales con solución salina",
      "dose": "2–3 veces al día"
    },
    {
      "d": "Tos",
      "dose": "Miel 1 cucharada en la noche (no en < 1 año)"
    },
    {
      "d": "Congestión (máx 3 días)",
      "dose": "Oximetazolina nasal 2 disparos c/12 h",
      "n": "Evita descongestionantes orales en HTA."
    }
  ],
  "goals": [
    "Resolución en 7–10 días"
  ],
  "alerts": [
    "Antibiótico no acorta ni previene complicaciones"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Cochrane · ACP 2016",
    "dif": []
  }
}
];
