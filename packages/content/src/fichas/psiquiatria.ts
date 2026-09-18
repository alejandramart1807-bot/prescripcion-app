// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "agitacion",
  "sys": "Psiquiatría",
  "group": "Urgencias psiquiátricas",
  "name": "Agitación psicomotriz",
  "aka": "agitacion psicomotriz paciente agresivo contencion haloperidol midazolam",
  "page": "Fuente: Project BETA · NICE 2015",
  "sub": "Primero seguridad y desescalamiento verbal; busca causa orgánica (hipoglucemia, hipoxia, tóxicos, delirium).",
  "flow": [
    [
      "1",
      "Desescalamiento verbal"
    ],
    [
      "2",
      "Oral si colabora"
    ],
    [
      "3",
      "IM si no"
    ],
    [
      "4",
      "Contención física solo como último recurso"
    ]
  ],
  "criteria": [
    "Glucometría y signos vitales en cuanto sea seguro."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Colabora: olanzapina",
      "dose": "10 mg VO",
      "a": "Risperidona 2 mg VO o lorazepam 1–2 mg VO."
    },
    {
      "d": "No colabora: haloperidol + midazolam",
      "dose": "Haloperidol 5 mg IM + midazolam 5 mg IM",
      "n": "ECG cuando sea posible (QT).",
      "a": "Olanzapina 10 mg IM (no combinar con benzodiazepina IM)."
    },
    {
      "d": "Agitación extrema (delirium hiperactivo con riesgo vital)",
      "dose": "Ketamina 4–5 mg/kg IM",
      "calc": {
        "t": "kg",
        "lo": 4,
        "hi": 5,
        "unit": "mg"
      },
      "n": "Con monitoreo y manejo de vía aérea."
    },
    {
      "d": "Abstinencia alcohólica o por benzodiazepinas",
      "n": "Usa benzodiazepina, no antipsicótico solo."
    }
  ],
  "goals": [
    "Paciente calmado sin sedación profunda"
  ],
  "alerts": [
    "Vigila vía aérea, SatO₂ y temperatura tras la sedación",
    "Contención: documentar y revisar c/15 min"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Project BETA · NICE 2015",
    "dif": [
      "Haloperidol + midazolam IM es la combinación más usada en Colombia."
    ]
  }
},
{
  "id": "abstinencia",
  "sys": "Psiquiatría",
  "group": "Urgencias psiquiátricas",
  "name": "Síndrome de abstinencia alcohólica",
  "aka": "abstinencia alcoholica delirium tremens ciwa tiamina diazepam",
  "page": "Fuente: ASAM 2020",
  "sub": "Temblor, sudoración, taquicardia, ansiedad, alucinaciones o convulsiones 6–96 h tras la última ingesta. Gradúa con CIWA-Ar.",
  "flow": [
    [
      "1",
      "Tiamina antes de glucosa"
    ],
    [
      "CIWA ≥ 10",
      "Benzodiazepina guiada por síntomas"
    ],
    [
      "Delirium tremens",
      "Diazepam IV + UCI"
    ]
  ],
  "criteria": [
    "Busca hipoglucemia, TCE, infección, pancreatitis, sangrado."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Tiamina",
      "dose": "100–200 mg IV c/24 h (Wernicke: 500 mg IV c/8 h × 3 días)"
    },
    {
      "d": "Diazepam",
      "dose": "10–20 mg VO c/1–2 h si CIWA ≥ 10, reevaluar",
      "n": "Delirium tremens: 10–20 mg IV c/5–10 min hasta sedación leve.",
      "a": "Lorazepam 1–2 mg VO si hepatopatía grave o anciano; fenobarbital en refractarios."
    },
    {
      "d": "Hidratación y electrolitos",
      "dose": "SSN o DAD 5 % con tiamina; reponer Mg, K, fósforo"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Solo abstinencia leve sin antecedente de convulsiones o delirium",
      "dose": "Diazepam 10 mg VO c/6–8 h en descenso por 3–5 días, con acompañante"
    },
    {
      "d": "Tiamina 100 mg VO c/24 h y remisión a programa de adicciones"
    }
  ],
  "goals": [
    "CIWA < 10"
  ],
  "alerts": [
    "No uses antipsicóticos solos (bajan el umbral convulsivo)"
  ],
  "rel": [
    "c-ciwa"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASAM 2020",
    "dif": [
      "Lorazepam IV no disponible regularmente; lorazepam VO sí."
    ]
  }
},
{
  "id": "panico",
  "sys": "Psiquiatría",
  "group": "Urgencias psiquiátricas",
  "name": "Crisis de ansiedad / crisis de pánico",
  "aka": "crisis de panico ansiedad angustia",
  "page": "Fuente: NICE 2011/2020 · APA",
  "sub": "Miedo intenso con palpitaciones, disnea, parestesias, dolor torácico; pico en 10 min.",
  "flow": [
    [
      "1",
      "Descarta causa orgánica (SCA, TEP, arritmia, hipoglucemia, tirotoxicosis)"
    ],
    [
      "2",
      "Tranquilización y respiración"
    ],
    [
      "3",
      "Benzodiazepina dosis única si no cede"
    ],
    [
      "4",
      "Remisión"
    ]
  ],
  "criteria": [
    "ECG si hay dolor torácico o factores de riesgo."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Respiración diafragmática lenta y psicoeducación"
    },
    {
      "d": "Alprazolam",
      "dose": "0,25–0,5 mg VO dosis única",
      "a": "Lorazepam 1 mg VO o clonazepam 0,5 mg VO."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Trastorno de pánico: sertralina",
      "dose": "25 mg VO c/24 h × 1 semana y luego 50 mg",
      "a": "Escitalopram 5–10 mg c/24 h."
    },
    {
      "d": "Remisión a psicología (terapia cognitivo-conductual)"
    }
  ],
  "goals": [
    "Resolución de la crisis"
  ],
  "alerts": [
    "No formules benzodiazepinas de uso continuo desde urgencias",
    "Pregunta por ideación suicida"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "NICE 2011/2020 · APA",
    "dif": []
  }
},
{
  "id": "delirium",
  "sys": "Psiquiatría",
  "group": "Hospitalarios",
  "name": "Delirium",
  "aka": "delirium sindrome confusional agudo haloperidol quetiapina anciano",
  "page": "Fuente: NICE 2023 · AGS",
  "sub": "Alteración aguda y fluctuante de la atención (CAM). Busca y trata la causa.",
  "flow": [
    [
      "1",
      "Causa: infección, fármacos, retención, dolor, hipoxia, electrolitos, abstinencia"
    ],
    [
      "2",
      "Medidas no farmacológicas"
    ],
    [
      "Riesgo o angustia grave",
      "Antipsicótico a dosis baja y corta"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "No farmacológico",
      "n": "Reorientación, gafas y audífonos, sueño nocturno, movilización, familia, evitar sujeciones y sondas innecesarias."
    },
    {
      "d": "Haloperidol",
      "dose": "0,5–1 mg VO/IM (ancianos), repetir c/30–60 min (máx 5 mg/día)",
      "a": "Quetiapina 12,5–25 mg VO si Parkinson o demencia por cuerpos de Lewy."
    },
    {
      "d": "Revisar y suspender",
      "n": "Benzodiazepinas, anticolinérgicos, opioides en exceso."
    }
  ],
  "goals": [
    "Resolución del delirium"
  ],
  "alerts": [
    "Benzodiazepinas solo en abstinencia alcohólica"
  ],
  "rel": [
    "agitacion"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "NICE 2023 · AGS",
    "dif": []
  }
},
{
  "id": "depresion",
  "sys": "Psiquiatría",
  "group": "Consulta",
  "name": "Episodio depresivo: inicio de antidepresivo",
  "aka": "depresion episodio depresivo sertralina escitalopram fluoxetina isrs",
  "page": "Fuente: Guía colombiana · NICE 2022 · CANMAT 2023",
  "sub": "Tamiza (PHQ-9) y evalúa riesgo suicida en toda consulta.",
  "flow": [
    [
      "Leve",
      "Psicoterapia"
    ],
    [
      "Moderado-grave",
      "ISRS + psicoterapia"
    ],
    [
      "4–6 semanas",
      "Evaluar respuesta"
    ],
    [
      "Remisión",
      "Mantener 6–12 meses"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Sertralina",
      "dose": "25 mg/día × 1 semana, luego 50 mg (hasta 200 mg)",
      "a": "Escitalopram 10 mg/día o fluoxetina 20 mg/día."
    },
    {
      "d": "Control en 2 semanas (riesgo suicida en < 25 años)"
    },
    {
      "d": "Remisión a psicología"
    }
  ],
  "goals": [
    "Respuesta ≥ 50 % en PHQ-9"
  ],
  "alerts": [
    "Síndrome serotoninérgico con tramadol, triptanes, linezolid"
  ],
  "rel": [
    "suicidio",
    "c-phq9"
  ],
  "g": {
    "co": {
      "n": "GPC Episodio depresivo y trastorno depresivo recurrente en adultos, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con NICE 2022 y CANMAT 2023."
    },
    "intl": "NICE 2022 · CANMAT 2023",
    "dif": []
  }
},
{
  "id": "suicidio",
  "sys": "Psiquiatría",
  "group": "Urgencias psiquiátricas",
  "name": "Riesgo suicida en urgencias",
  "aka": "riesgo suicida intento de suicidio ideacion suicida evaluacion",
  "page": "Fuente: NICE 2022 · C-SSRS",
  "sub": "Pregunta directamente: no aumenta el riesgo. Trata primero la lesión o intoxicación.",
  "flow": [
    [
      "1",
      "Estabilizar"
    ],
    [
      "2",
      "Evaluar ideación, plan, acceso a medios, intentos previos"
    ],
    [
      "Alto riesgo",
      "Acompañamiento continuo y psiquiatría"
    ],
    [
      "Egreso",
      "Plan de seguridad y cita cercana"
    ]
  ],
  "criteria": [
    "Intento de suicidio: notificación obligatoria a Sivigila."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Acompañamiento permanente y retiro de objetos peligrosos"
    },
    {
      "d": "Valoración por psiquiatría"
    },
    {
      "d": "Plan de seguridad escrito y restricción de medios en casa"
    }
  ],
  "goals": [
    "Paciente seguro"
  ],
  "alerts": [
    "No egresar a alto riesgo sin psiquiatría"
  ],
  "rel": [
    "intox",
    "depresion"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "NICE 2022 · C-SSRS",
    "dif": []
  }
},
{
  "id": "psicosis",
  "sys": "Psiquiatría",
  "group": "Urgencias psiquiátricas",
  "name": "Psicosis aguda / primer episodio",
  "aka": "psicosis aguda primer episodio esquizofrenia risperidona olanzapina haloperidol",
  "page": "Fuente: Guía colombiana · APA 2020 · NICE 2014",
  "sub": "Descarta causa orgánica y tóxicos antes de etiquetar como primaria.",
  "flow": [
    [
      "1",
      "Tóxicos, glucosa, TSH, VIH, sífilis, neuroimagen si atípica"
    ],
    [
      "2",
      "Antipsicótico a dosis bajas"
    ],
    [
      "Agitación",
      "Ficha de agitación"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Risperidona",
      "dose": "1–2 mg/día, titular hasta 4–6 mg",
      "a": "Olanzapina 5–10 mg/día; haloperidol 2–5 mg/día."
    },
    {
      "d": "Vigilar síntomas extrapiramidales, metabólicos y prolactina"
    }
  ],
  "goals": [
    "Control de síntomas"
  ],
  "alerts": [
    "Fiebre + rigidez + alteración de conciencia: síndrome neuroléptico maligno"
  ],
  "rel": [
    "agitacion"
  ],
  "g": {
    "co": {
      "n": "GPC Esquizofrenia en adultos, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con NICE y APA 2020."
    },
    "intl": "APA 2020 · NICE 2014",
    "dif": []
  }
},
{
  "id": "mania",
  "sys": "Psiquiatría",
  "group": "Urgencias psiquiátricas",
  "name": "Episodio maníaco",
  "aka": "mania trastorno bipolar litio valproato olanzapina quetiapina",
  "page": "Fuente: CANMAT/ISBD 2018",
  "sub": "Suspende antidepresivos; estabilizador y/o antipsicótico.",
  "flow": [
    [
      "1",
      "Suspender antidepresivos"
    ],
    [
      "2",
      "Antipsicótico atípico o estabilizador"
    ],
    [
      "Grave",
      "Combinación"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Olanzapina",
      "dose": "10–20 mg/día",
      "a": "Quetiapina 400–800 mg/día; risperidona 2–6 mg/día."
    },
    {
      "d": "Litio",
      "dose": "300 mg c/12 h, ajustar a litemia 0,8–1,2 mEq/L",
      "n": "Cr, TSH, calcio y prueba de embarazo antes."
    },
    {
      "d": "Valproato",
      "dose": "20–30 mg/kg/día",
      "calc": {
        "t": "kg",
        "lo": 20,
        "hi": 30,
        "unit": "mg",
        "label": "/día"
      },
      "n": "Evitar en mujeres en edad fértil."
    }
  ],
  "goals": [
    "Control de la manía"
  ],
  "alerts": [
    "Toxicidad por litio: temblor grueso, ataxia, confusión"
  ],
  "rel": [
    "agitacion"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica si tu institución usa una GPC nacional de trastorno bipolar."
    },
    "intl": "CANMAT/ISBD 2018",
    "dif": []
  }
}
];
