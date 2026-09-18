// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "cvo",
  "sys": "Hematología",
  "group": "Anemia falciforme",
  "name": "Crisis vasooclusiva (crisis de dolor)",
  "aka": "anemia falciforme drepanocitica crisis dolor vasooclusiva",
  "page": "Fuente: ASH 2020 manejo del dolor en anemia falciforme · NHLBI 2014",
  "sub": "Dolor agudo en paciente con anemia de células falciformes sin otra causa evidente.",
  "flow": [
    [
      "< 60 min",
      "Analgesia opioide"
    ],
    [
      "c/15–30 min",
      "Reevalúa y titula"
    ],
    [
      "Vigila",
      "Síndrome torácico, fiebre, priapismo"
    ]
  ],
  "criteria": [
    "Fiebre = sepsis hasta demostrar lo contrario (asplenia funcional).",
    "Hemograma, reticulocitos, LDH, bilirrubinas; Rx de tórax si síntomas respiratorios."
  ],
  "orders": [
    {
      "d": "Morfina",
      "dose": "0,1 mg/kg IV (máx 10 mg), repetir c/15–30 min hasta control; luego PCA o c/2–4 h",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.1,
        "unit": "mg",
        "label": "dosis",
        "max": 10
      },
      "a": "Hidromorfona 0,015 mg/kg IV o fentanilo 1 mcg/kg IV."
    },
    {
      "d": "Ketorolaco (si función renal normal)",
      "dose": "15–30 mg IV c/6–8 h, máx 5 días",
      "a": "Dipirona 1–2 g IV c/6–8 h."
    },
    {
      "d": "Ketamina en dosis subanestésica (dolor refractario)",
      "dose": "0,1–0,3 mg/kg/h IV",
      "calc": {
        "t": "kgh",
        "lo": 0.1,
        "hi": 0.3,
        "conc": 1,
        "unit": "mg"
      },
      "dil": "100 mg en 100 mL = 1 mg/mL"
    },
    {
      "d": "Hidratación",
      "dose": "Mantenimiento (1–1,5 veces) VO o IV; evita sobrecarga"
    },
    {
      "d": "Espirometría incentiva",
      "dose": "10 inspiraciones c/2 h despierto"
    },
    {
      "d": "Oxígeno si SatO₂ < 94 %"
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h en adultos hospitalizados"
    }
  ],
  "goals": [
    "Dolor controlado",
    "Sin síndrome torácico agudo"
  ],
  "alerts": [
    "Sobrehidratación puede precipitar síndrome torácico",
    "Opioides + espirometría incentiva para evitar hipoventilación"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASH 2020 manejo del dolor en anemia falciforme · NHLBI 2014",
    "dif": []
  }
},
{
  "id": "sta",
  "sys": "Hematología",
  "group": "Anemia falciforme",
  "name": "Síndrome torácico agudo",
  "aka": "sindrome toracico agudo anemia falciforme infiltrado fiebre",
  "page": "Fuente: ASH 2020 manejo del dolor en anemia falciforme · NHLBI 2014",
  "sub": "Infiltrado pulmonar nuevo + fiebre, dolor torácico, taquipnea, sibilancias o hipoxemia en anemia falciforme.",
  "flow": [
    [
      "1",
      "Antibiótico + macrólido"
    ],
    [
      "2",
      "O₂ y analgesia"
    ],
    [
      "3",
      "Transfusión simple o exanguinotransfusión"
    ],
    [
      "UCI",
      "Si empeora"
    ]
  ],
  "criteria": [
    "Exanguinotransfusión si: hipoxemia progresiva, compromiso multilobar o Hb basal > 9 g/dL."
  ],
  "orders": [
    {
      "d": "Ceftriaxona",
      "dose": "1–2 g IV c/24 h",
      "a": "Levofloxacino 750 mg IV c/24 h si alergia (cubre atípicos)."
    },
    {
      "d": "Azitromicina",
      "dose": "500 mg VO/IV día 1, luego 250 mg/día por 4 días",
      "a": "Claritromicina 500 mg c/12 h o doxiciclina 100 mg c/12 h."
    },
    {
      "d": "Oxígeno",
      "dose": "Meta SatO₂ ≥ 95 %"
    },
    {
      "d": "Transfusión simple",
      "dose": "Si Hb cae ≥ 1 g/dL o Hb < 9 g/dL; meta Hb ≤ 10 g/dL",
      "a": "Sin exanguinotransfusión disponible: transfusión simple y remisión."
    },
    {
      "d": "Analgesia opioide + espirometría incentiva"
    },
    {
      "d": "Broncodilatador si sibilancias",
      "dose": "Salbutamol 4–8 puff c/4 h"
    }
  ],
  "goals": [
    "SatO₂ ≥ 95 %",
    "Resolución clínica y radiológica"
  ],
  "alerts": [
    "No transfundir por encima de Hb 10–11 (hiperviscosidad)"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASH 2020 manejo del dolor en anemia falciforme · NHLBI 2014",
    "dif": []
  }
},
{
  "id": "rt-febril",
  "sys": "Hematología",
  "group": "Reacciones transfusionales",
  "name": "Reacción febril no hemolítica",
  "aka": "reaccion transfusional febril fiebre transfusion",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Fiebre ≥ 38 °C y ≥ 1 °C sobre la basal, con o sin escalofríos, durante o hasta 4 h después de transfundir.",
  "flow": [
    [
      "1",
      "Detén la transfusión"
    ],
    [
      "2",
      "Verifica identidad paciente-bolsa"
    ],
    [
      "3",
      "Descarta hemólisis y contaminación bacteriana"
    ],
    [
      "4",
      "Antipirético y reporte"
    ]
  ],
  "criteria": [
    "Es diagnóstico de exclusión.",
    "Hipotensión, dolor lumbar u orina oscura → piensa en hemólisis o sepsis."
  ],
  "orders": [
    {
      "d": "Suspender la transfusión y mantener vía con SSN 0,9 %"
    },
    {
      "d": "Enviar bolsa y muestra al banco de sangre",
      "n": "Coombs directo, hemoclasificación, hemocultivos si fiebre ≥ 39 °C o hipotensión."
    },
    {
      "d": "Paracetamol",
      "dose": "500–1000 mg VO/IV",
      "a": "Dipirona 1 g IV."
    },
    {
      "d": "Meperidina para escalofríos intensos",
      "dose": "25–50 mg IV",
      "a": "Si no hay: medidas físicas."
    },
    {
      "d": "Reporte de hemovigilancia"
    }
  ],
  "goals": [
    "Descartar reacción grave",
    "Reporte completo"
  ],
  "alerts": [
    "No reinicies la misma unidad"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "rt-hemol",
  "sys": "Hematología",
  "group": "Reacciones transfusionales",
  "name": "Reacción hemolítica aguda",
  "aka": "reaccion hemolitica aguda incompatibilidad abo transfusion hemolisis",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Fiebre, escalofríos, dolor lumbar o torácico, hipotensión, hemoglobinuria, sangrado en sitios de punción. Suele ser por error ABO.",
  "flow": [
    [
      "1",
      "Detén ya la transfusión"
    ],
    [
      "2",
      "SSN y diuresis alta"
    ],
    [
      "3",
      "Laboratorios de hemólisis y CID"
    ],
    [
      "4",
      "Soporte UCI"
    ]
  ],
  "criteria": [
    "Pide: Coombs directo, repetir hemoclasificación, LDH, bilirrubina, haptoglobina, parcial de orina, creatinina, TP, TTPa, fibrinógeno."
  ],
  "orders": [
    {
      "d": "Suspender la transfusión y cambiar el equipo",
      "n": "Devuelve la bolsa al banco de sangre."
    },
    {
      "d": "SSN 0,9 %",
      "dose": "Para diuresis ≥ 1 mL/kg/h (100 mL/h en adultos)",
      "calc": {
        "t": "kgh",
        "lo": 1,
        "hi": 1,
        "conc": 1,
        "unit": "mL"
      }
    },
    {
      "d": "Furosemida si oligúria con volemia adecuada",
      "dose": "20–40 mg IV"
    },
    {
      "d": "Vasopresor si hipotensión persistente",
      "dose": "Noradrenalina 0,05–0,5 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.5,
        "conc": 16
      },
      "dil": "4 mg en 250 mL = 16 mcg/mL"
    },
    {
      "d": "Manejo de CID",
      "n": "Plaquetas, plasma y crioprecipitado según sangrado y laboratorios."
    },
    {
      "d": "Reporte urgente de hemovigilancia"
    }
  ],
  "goals": [
    "Diuresis ≥ 1 mL/kg/h",
    "Estabilidad hemodinámica"
  ],
  "alerts": [
    "Revisa si hay otro paciente con la bolsa intercambiada"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "rt-anaf",
  "sys": "Hematología",
  "group": "Reacciones transfusionales",
  "name": "Reacción transfusional anafiláctica",
  "aka": "anafilaxia transfusional reaccion alergica transfusion",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Hipotensión, broncoespasmo, estridor o angioedema en minutos del inicio de la transfusión.",
  "flow": [
    [
      "1",
      "Detén la transfusión"
    ],
    [
      "2",
      "Adrenalina IM"
    ],
    [
      "3",
      "Volumen, O₂, broncodilatador"
    ],
    [
      "4",
      "Productos lavados en el futuro"
    ]
  ],
  "criteria": [
    "Urticaria aislada: antihistamínico y se puede reiniciar lentamente si mejora (reacción alérgica leve)."
  ],
  "orders": [
    {
      "d": "Adrenalina",
      "dose": "0,5 mg IM (0,01 mg/kg) en cara anterolateral del muslo; repetir c/5–15 min",
      "calc": {
        "t": "kg",
        "lo": 0.01,
        "hi": 0.01,
        "unit": "mg",
        "max": 0.5
      },
      "a": "Refractaria: infusión 0,05–0,3 mcg/kg/min."
    },
    {
      "d": "SSN 0,9 %",
      "dose": "1–2 L en bolo si hipotensión"
    },
    {
      "d": "Salbutamol si broncoespasmo",
      "dose": "4–8 puff o 2,5–5 mg nebulizado"
    },
    {
      "d": "Antihistamínico (adyuvante)",
      "dose": "Difenhidramina 25–50 mg IV",
      "a": "Clorfeniramina 10 mg IV."
    },
    {
      "d": "Hidrocortisona (adyuvante)",
      "dose": "200 mg IV"
    },
    {
      "d": "Glucagón si toma betabloqueador y no responde",
      "dose": "1–5 mg IV en 5 min"
    }
  ],
  "goals": [
    "Estabilidad hemodinámica y respiratoria"
  ],
  "alerts": [
    "Estudia déficit de IgA",
    "Observación mínima 6 h por reacción bifásica"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "taco",
  "sys": "Hematología",
  "group": "Reacciones transfusionales",
  "name": "TACO (sobrecarga circulatoria)",
  "aka": "taco sobrecarga circulatoria asociada a transfusion edema pulmonar",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Disnea, hipertensión, ingurgitación yugular y edema pulmonar hasta 12 h después de transfundir. Péptido natriurético alto.",
  "flow": [
    [
      "1",
      "Detén"
    ],
    [
      "2",
      "Sienta al paciente, O₂"
    ],
    [
      "3",
      "Diurético"
    ],
    [
      "4",
      "VNI si es necesario"
    ]
  ],
  "criteria": [
    "Diferencia con TRALI: TACO tiene hipertensión, péptido natriurético alto y responde a diurético."
  ],
  "orders": [
    {
      "d": "Suspender la transfusión"
    },
    {
      "d": "Posición sentada y O₂"
    },
    {
      "d": "Furosemida",
      "dose": "20–40 mg IV (más si usaba diurético)"
    },
    {
      "d": "VNI si hipoxemia persistente"
    },
    {
      "d": "Futuras transfusiones",
      "dose": "1 unidad a la vez, 1 mL/kg/h, con diurético previo si es necesario"
    }
  ],
  "goals": [
    "Resolución de la hipoxemia"
  ],
  "alerts": [
    "Mayor riesgo: ancianos, IC, ERC, balance positivo"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "trali",
  "sys": "Hematología",
  "group": "Reacciones transfusionales",
  "name": "TRALI (lesión pulmonar aguda por transfusión)",
  "aka": "trali lesion pulmonar aguda transfusion sdra",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Hipoxemia e infiltrados bilaterales en las 6 h de una transfusión, sin sobrecarga de volumen.",
  "flow": [
    [
      "1",
      "Detén"
    ],
    [
      "2",
      "O₂ / ventilación protectora"
    ],
    [
      "3",
      "Sin diurético"
    ],
    [
      "4",
      "Reporte (estudio del donante)"
    ]
  ],
  "criteria": [
    "Puede haber hipotensión y fiebre; péptido natriurético normal."
  ],
  "orders": [
    {
      "d": "Suspender la transfusión y notificar al banco de sangre"
    },
    {
      "d": "Oxígeno; VNI o intubación con ventilación protectora (6 mL/kg de peso predicho)"
    },
    {
      "d": "Líquidos o vasopresor si hipotensión",
      "n": "Evita diuréticos."
    }
  ],
  "goals": [
    "SatO₂ 92–96 %"
  ],
  "alerts": [
    "Suele resolver en 48–96 h",
    "No uses corticoides de rutina"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "crio",
  "sys": "Hematología",
  "group": "Hemocomponentes",
  "name": "Crioprecipitado",
  "aka": "crioprecipitado fibrinogeno hipofibrinogenemia",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Fuente de fibrinógeno, factor VIII, von Willebrand y XIII.",
  "flow": [
    [
      "Indicación",
      "Fibrinógeno < 150 mg/dL con sangrado (< 200 en hemorragia obstétrica)"
    ],
    [
      "Dosis",
      "1 U por cada 10 kg"
    ],
    [
      "Control",
      "Fibrinógeno post-transfusión"
    ]
  ],
  "criteria": [
    "Cada 10 U suben el fibrinógeno ~70–100 mg/dL en un adulto."
  ],
  "orders": [
    {
      "d": "Crioprecipitado",
      "dose": "1 unidad por cada 10 kg IV, lo más rápido tolerado",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.1,
        "unit": "U"
      },
      "a": "Concentrado de fibrinógeno 25–50 mg/kg IV si está disponible."
    }
  ],
  "goals": [
    "Fibrinógeno > 150–200 mg/dL"
  ],
  "alerts": [
    "No se usa para reponer volumen"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "gr",
  "sys": "Hematología",
  "group": "Hemocomponentes",
  "name": "Glóbulos rojos (concentrado de eritrocitos)",
  "aka": "transfusion globulos rojos eritrocitos anemia hemoglobina umbral",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Umbral restrictivo en la mayoría de pacientes estables.",
  "flow": [
    [
      "Hb < 7",
      "Mayoría de pacientes hospitalizados"
    ],
    [
      "Hb < 8",
      "Cirugía cardíaca u ortopédica, enfermedad cardiovascular"
    ],
    [
      "Sangrado activo",
      "Según hemodinamia, no por cifra"
    ]
  ],
  "criteria": [
    "En IAM con anemia, considera umbral más alto (8–10 g/dL) según juicio clínico."
  ],
  "orders": [
    {
      "d": "Glóbulos rojos",
      "dose": "1 unidad IV en 1,5–2 h (máx 4 h) y reevaluar",
      "n": "Cada unidad sube ~1 g/dL la Hb.",
      "a": "Si el riesgo de sobrecarga es alto: 1 mL/kg/h + furosemida 20 mg IV."
    }
  ],
  "goals": [
    "Hb por encima del umbral"
  ],
  "alerts": [
    "Transfunde una unidad a la vez en paciente estable"
  ],
  "rel": [
    "mi-anemia"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "plq",
  "sys": "Hematología",
  "group": "Hemocomponentes",
  "name": "Plaquetas",
  "aka": "transfusion plaquetas trombocitopenia",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Umbrales según el escenario clínico.",
  "flow": [
    [
      "< 10 000",
      "Profilaxis en hipoproliferativa"
    ],
    [
      "< 20 000",
      "Catéter venoso central"
    ],
    [
      "< 50 000",
      "Sangrado activo, punción lumbar, cirugía mayor"
    ],
    [
      "< 100 000",
      "Sangrado del SNC o neurocirugía"
    ]
  ],
  "criteria": [
    "No transfundir en PTT ni en trombocitopenia por heparina salvo sangrado grave."
  ],
  "orders": [
    {
      "d": "Plaquetas",
      "dose": "1 unidad de aféresis o 1 unidad por cada 10 kg (pool de 4–6)",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.1,
        "unit": "U"
      },
      "n": "Recuento 1 h post-transfusión."
    }
  ],
  "goals": [
    "Recuento por encima del umbral"
  ],
  "alerts": [
    "Refractariedad: sospecha aloinmunización"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "pfc",
  "sys": "Hematología",
  "group": "Hemocomponentes",
  "name": "Plasma fresco congelado",
  "aka": "plasma fresco congelado pfc coagulopatia inr",
  "page": "Fuente: AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas",
  "sub": "Reposición de factores de coagulación en sangrado activo con coagulopatía.",
  "flow": [
    [
      "Indicación",
      "Sangrado + INR > 1,5–1,7, transfusión masiva, PTT (plasmaféresis)"
    ],
    [
      "Dosis",
      "10–15 mL/kg"
    ],
    [
      "Control",
      "TP/INR"
    ]
  ],
  "criteria": [
    "No se usa para reponer volumen ni para revertir warfarina si hay complejo protrombínico."
  ],
  "orders": [
    {
      "d": "Plasma fresco congelado",
      "dose": "10–15 mL/kg IV",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 15,
        "unit": "mL"
      },
      "a": "Reversión de warfarina: complejo protrombínico 25–50 U/kg + vitamina K 10 mg IV."
    }
  ],
  "goals": [
    "Control del sangrado",
    "INR < 1,5"
  ],
  "alerts": [
    "Riesgo de TACO y TRALI"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "AABB 2023 transfusión de glóbulos rojos · AABB 2025 plaquetas · NHSN hemovigilancia",
    "dif": []
  }
},
{
  "id": "tm",
  "sys": "Hematología",
  "group": "Hemocomponentes",
  "name": "Transfusión masiva",
  "aka": "transfusion masiva protocolo hemorragia masiva trauma shock hemorragico",
  "page": "Fuente: Guía europea de sangrado en trauma 2023 · ATLS 11.ª ed.",
  "sub": "Activa si prevés ≥ 10 U en 24 h o ≥ 4 U en 1 h (score ABC ≥ 2, índice de choque > 1).",
  "flow": [
    [
      "1",
      "Activa el protocolo del banco"
    ],
    [
      "2",
      "1:1:1 (GR:plasma:plaquetas)"
    ],
    [
      "3",
      "Ácido tranexámico < 3 h"
    ],
    [
      "4",
      "Calcio y temperatura"
    ],
    [
      "5",
      "Guía por laboratorio"
    ]
  ],
  "criteria": [
    "Hipotensión permisiva (PAS 80–90) si no hay TCE, hasta el control quirúrgico."
  ],
  "orders": [
    {
      "d": "Glóbulos rojos : plasma : plaquetas",
      "dose": "1:1:1"
    },
    {
      "d": "Ácido tranexámico",
      "dose": "1 g IV en 10 min, luego 1 g en 8 h (inicio < 3 h del trauma o parto)"
    },
    {
      "d": "Calcio",
      "dose": "Gluconato de calcio 10 % 30 mL IV o cloruro de calcio 10 % 10 mL (central) c/4 U de hemoderivados",
      "n": "Meta calcio iónico > 1,1 mmol/L."
    },
    {
      "d": "Crioprecipitado si fibrinógeno < 150–200 mg/dL",
      "a": "Concentrado de fibrinógeno."
    },
    {
      "d": "Calentar líquidos y paciente",
      "dose": "Meta T > 35 °C"
    }
  ],
  "goals": [
    "Hb 7–9",
    "Plaquetas > 50 000 (> 100 000 en SNC)",
    "Fibrinógeno > 150–200",
    "INR < 1,5",
    "Ca iónico > 1,1"
  ],
  "alerts": [
    "Tríada letal: hipotermia, acidosis, coagulopatía",
    "Control de la fuente es la prioridad"
  ],
  "rel": [
    "r-coag"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "La hemovigilancia la coordina el INS y cada banco de sangre tiene su protocolo; síguelo y reporta toda reacción."
    },
    "intl": "Guía europea de sangrado en trauma 2023 · ATLS 11.ª ed.",
    "dif": [
      "Plasma sin necesidad de descongelar y concentrado de fibrinógeno solo en algunos centros; el crioprecipitado es la fuente habitual de fibrinógeno."
    ]
  }
}
];
