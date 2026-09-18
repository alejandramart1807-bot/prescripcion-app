// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "apendicitis",
  "sys": "Cirugía general y trauma",
  "group": "Abdomen agudo",
  "name": "Apendicitis aguda",
  "aka": "apendicitis abdomen agudo apendicectomia alvarado",
  "page": "Fuente: WSES 2020 · CODA 2020",
  "sub": "No complicada: profilaxis y cirugía. Complicada (perforada, absceso): antibiótico terapéutico 4 días tras control de la fuente.",
  "flow": [
    [
      "Diagnóstico",
      "Alvarado/AIR + eco o TAC"
    ],
    [
      "No complicada",
      "Profilaxis única + apendicectomía"
    ],
    [
      "Complicada",
      "Antibiótico terapéutico"
    ],
    [
      "Absceso",
      "Drenaje percutáneo ± apendicectomía diferida"
    ]
  ],
  "criteria": [
    "No retrases la analgesia: no enmascara el diagnóstico."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Nada vía oral, Lactato de Ringer y analgesia",
      "dose": "Dipirona 2 g IV ± morfina 0,05–0,1 mg/kg IV"
    },
    {
      "d": "No complicada: profilaxis",
      "dose": "Cefazolina 2 g IV + metronidazol 500 mg IV dosis única",
      "n": "Sin antibiótico posoperatorio."
    },
    {
      "d": "Complicada",
      "dose": "Ceftriaxona 2 g IV c/24 h + metronidazol 500 mg IV c/8 h por 4 días tras control de la fuente",
      "a": "Piperacilina-tazobactam 4,5 g c/6 h si grave o nosocomial; ertapenem si riesgo BLEE."
    },
    {
      "d": "Manejo no operatorio seleccionado (sin apendicolito)",
      "dose": "Ertapenem 1 g IV/día → amoxicilina-clavulanato VO hasta 10 días",
      "n": "Mayor recurrencia; decisión compartida."
    }
  ],
  "goals": [
    "Cirugía en < 24 h"
  ],
  "alerts": [
    "Embarazo: eco o RM"
  ],
  "rel": [
    "profilaxis-qx",
    "c-alvarado"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "WSES 2020 · CODA 2020 · STOP-IT 2015",
    "dif": []
  }
},
{
  "id": "colecistitis",
  "sys": "Cirugía general y trauma",
  "group": "Vía biliar",
  "name": "Colecistitis aguda (Tokio 2018)",
  "aka": "colecistitis aguda vesicula biliar tokio colecistectomia murphy",
  "page": "Fuente: Tokio 2018 · WSES 2020",
  "sub": "Dolor en hipocondrio derecho + Murphy + inflamación + imagen.",
  "flow": [
    [
      "Grado I",
      "Colecistectomía temprana"
    ],
    [
      "Grado II",
      "Temprana en centro con experiencia"
    ],
    [
      "Grado III",
      "Soporte; colecistostomía si alto riesgo"
    ]
  ],
  "criteria": [
    "Grado II: leucocitos > 18 000, masa palpable, > 72 h, gangrena o absceso. Grado III: disfunción orgánica."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Nada vía oral, LEV y analgesia",
      "dose": "Dipirona 2 g IV c/6–8 h o ketorolaco 30 mg IV c/8 h"
    },
    {
      "d": "Grado I–II",
      "dose": "Ceftriaxona 2 g IV c/24 h + metronidazol 500 mg IV c/8 h",
      "a": "Ampicilina-sulbactam 3 g c/6 h si sensibilidad local lo permite; cefazolina 2 g c/8 h en grado I."
    },
    {
      "d": "Grado III",
      "dose": "Piperacilina-tazobactam 4,5 g IV c/6 h",
      "a": "Meropenem 1 g c/8 h."
    },
    {
      "d": "Colecistectomía laparoscópica temprana (< 72 h, hasta 7 días)",
      "n": "Tras colecistectomía en I–II: suspender antibiótico en 24 h."
    }
  ],
  "goals": [
    "Cirugía en la misma hospitalización"
  ],
  "alerts": [
    "Ictericia o colangitis: CPRE"
  ],
  "rel": [
    "colangitis",
    "panc"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Tokio 2018 · WSES 2020",
    "dif": []
  }
},
{
  "id": "colangitis",
  "sys": "Cirugía general y trauma",
  "group": "Vía biliar",
  "name": "Colangitis aguda",
  "aka": "colangitis charcot reynolds cpre drenaje biliar",
  "page": "Fuente: Tokio 2018",
  "sub": "Fiebre + ictericia + dolor (Charcot) con colestasis e imagen de obstrucción.",
  "flow": [
    [
      "Grado I",
      "Antibiótico; CPRE si no mejora en 24 h"
    ],
    [
      "Grado II",
      "CPRE temprana (< 24–48 h)"
    ],
    [
      "Grado III",
      "Soporte + drenaje urgente"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Piperacilina-tazobactam",
      "dose": "4,5 g IV c/6 h",
      "a": "Ceftriaxona 2 g + metronidazol 500 mg c/8 h en grado I; meropenem si shock o BLEE."
    },
    {
      "d": "Hemocultivos y LEV"
    },
    {
      "d": "Drenaje biliar (CPRE)",
      "n": "Duración del antibiótico 4–7 días tras drenaje."
    }
  ],
  "goals": [
    "Drenaje en la ventana según gravedad"
  ],
  "alerts": [
    "Reynolds (shock, alteración de conciencia): drenaje urgente"
  ],
  "rel": [
    "colecistitis",
    "sepsis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Tokio 2018",
    "dif": []
  }
},
{
  "id": "obstruccion",
  "sys": "Cirugía general y trauma",
  "group": "Abdomen agudo",
  "name": "Obstrucción intestinal",
  "aka": "obstruccion intestinal ileo bridas adherencias sonda nasogastrica gastrografina",
  "page": "Fuente: Bolonia/WSES 2017",
  "sub": "Dolor cólico, distensión, vómito y ausencia de flatos. TAC define causa y sufrimiento.",
  "flow": [
    [
      "Signos de estrangulación",
      "Cirugía urgente"
    ],
    [
      "Adherencias sin isquemia",
      "Manejo conservador 72 h"
    ],
    [
      "Gastrografina",
      "Diagnóstica y terapéutica"
    ]
  ],
  "criteria": [
    "Estrangulación: fiebre, taquicardia, dolor continuo, peritonismo, leucocitosis, lactato alto, signos en TAC."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Nada vía oral y sonda nasogástrica a drenaje"
    },
    {
      "d": "Lactato de Ringer según déficit; corregir K⁺ y Mg²⁺"
    },
    {
      "d": "Analgesia",
      "dose": "Dipirona 2 g IV c/6–8 h ± opioide"
    },
    {
      "d": "Antiemético",
      "dose": "Ondansetrón 4 mg IV c/8 h",
      "n": "Evita metoclopramida (procinético)."
    },
    {
      "d": "Gastrografina",
      "dose": "100 mL por sonda, Rx a las 8–24 h",
      "n": "Contraste en colon = probable resolución."
    }
  ],
  "goals": [
    "Resolución en 72 h o decisión quirúrgica"
  ],
  "alerts": [
    "Hernia encarcelada con estrangulación: cirugía"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Bolonia/WSES 2017",
    "dif": []
  }
},
{
  "id": "diverticulitis",
  "sys": "Cirugía general y trauma",
  "group": "Abdomen agudo",
  "name": "Diverticulitis aguda",
  "aka": "diverticulitis diverticular colon sigmoides absceso",
  "page": "Fuente: WSES 2020 · AGA 2021",
  "sub": "Dolor en fosa ilíaca izquierda con fiebre y TAC compatible. Clasifica con Hinchey.",
  "flow": [
    [
      "No complicada sin riesgo",
      "Sin antibiótico, ambulatorio"
    ],
    [
      "Con riesgo o complicada",
      "Antibiótico"
    ],
    [
      "Absceso > 3–4 cm",
      "Drenaje percutáneo"
    ],
    [
      "Perforación libre",
      "Cirugía"
    ]
  ],
  "criteria": [
    "Riesgo: inmunosupresión, ERC, edad avanzada, fiebre alta, sepsis, no tolera VO."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "No complicada sin factores de riesgo",
      "n": "Dieta líquida-blanda, paracetamol; control a los 2–3 días."
    },
    {
      "d": "Con factores de riesgo",
      "dose": "Amoxicilina-clavulanato 875/125 mg VO c/12 h × 4–7 días",
      "a": "Ciprofloxacino 500 mg c/12 h + metronidazol 500 mg c/8 h."
    },
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Hospitalaria",
      "dose": "Ceftriaxona 2 g IV c/24 h + metronidazol 500 mg IV c/8 h",
      "a": "Piperacilina-tazobactam 4,5 g c/6 h."
    }
  ],
  "goals": [
    "Mejoría en 48–72 h"
  ],
  "alerts": [
    "Colonoscopia a las 6–8 semanas tras complicada"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "WSES 2020 · AGA 2021 · ASCRS 2020",
    "dif": []
  }
},
{
  "id": "profilaxis-qx",
  "sys": "Cirugía general y trauma",
  "group": "Perioperatorio",
  "name": "Profilaxis antibiótica quirúrgica",
  "aka": "profilaxis antibiotica quirurgica cefazolina redosificacion cirugia",
  "page": "Fuente: ASHP/IDSA/SIS/SHEA 2013 · OMS 2018",
  "sub": "Una dosis 30–60 min antes de la incisión; redosificar en cirugías largas; no más de 24 h.",
  "flow": [
    [
      "Limpia-contaminada",
      "Cefazolina"
    ],
    [
      "Colorrectal / apéndice",
      "Cefazolina + metronidazol"
    ],
    [
      "Alergia grave a betalactámicos",
      "Clindamicina o vancomicina"
    ]
  ],
  "criteria": [
    "Cirugía limpia sin implantes: usualmente no requiere."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Cefazolina",
      "dose": "2 g IV (3 g si ≥ 120 kg); redosificar c/4 h o si sangrado > 1500 mL",
      "calc": {
        "t": "table",
        "rows": [
          [
            120,
            "2 g IV"
          ],
          [
            999,
            "3 g IV"
          ]
        ]
      }
    },
    {
      "d": "+ Metronidazol (colorrectal, apéndice)",
      "dose": "500 mg IV"
    },
    {
      "d": "Alergia grave",
      "dose": "Clindamicina 900 mg IV o vancomicina 15 mg/kg IV (iniciar 60–120 min antes)",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 15,
        "unit": "mg",
        "label": "vancomicina"
      }
    }
  ],
  "goals": [
    "Dosis dentro de 60 min antes de la incisión"
  ],
  "alerts": [
    "Profilaxis > 24 h no reduce infección y aumenta resistencia"
  ],
  "rel": [
    "profilaxis-uro"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ASHP/IDSA/SIS/SHEA 2013 · OMS 2018",
    "dif": []
  }
},
{
  "id": "antitromb-periop",
  "sys": "Cirugía general y trauma",
  "group": "Perioperatorio",
  "name": "Anticoagulantes y antiagregantes en el perioperatorio",
  "aka": "perioperatorio anticoagulante suspender apixaban rivaroxaban warfarina puente clopidogrel aspirina cirugia",
  "page": "Fuente: ACC 2025 ECDP perioperatorio · PAUSE",
  "sub": "Cuándo suspender y reiniciar según fármaco, función renal y riesgo de sangrado del procedimiento.",
  "flow": [
    [
      "Warfarina",
      "Suspender 5 días; puente solo si alto riesgo trombótico"
    ],
    [
      "ACOD",
      "1–2 días (más si ClCr baja)"
    ],
    [
      "Antiagregantes",
      "ASA casi siempre continúa; P2Y12 según tipo"
    ],
    [
      "Reinicio",
      "24 h (bajo riesgo) / 48–72 h (alto riesgo)"
    ]
  ],
  "criteria": [
    "Alto riesgo trombótico para puente: prótesis mitral mecánica, ACV < 3 meses, TEV < 3 meses, estenosis mitral reumática."
  ],
  "orders": [
    {
      "d": "Warfarina",
      "dose": "Suspender 5 días antes; INR el día previo",
      "n": "Puente con enoxaparina 1 mg/kg c/12 h desde 3 días antes; última dosis 24 h antes."
    },
    {
      "d": "Apixabán / rivaroxabán / edoxabán",
      "dose": "Bajo riesgo de sangrado: suspender 1 día · alto riesgo: 2 días"
    },
    {
      "d": "Dabigatrán",
      "dose": "ClCr ≥ 50: 1 día (bajo) / 2 días (alto) · ClCr 30–49: 2 días / 4 días"
    },
    {
      "d": "Ácido acetilsalicílico",
      "n": "Continuar en prevención secundaria salvo neurocirugía, cirugía de columna o RTU de próstata con alto riesgo de sangrado (individualizar)."
    },
    {
      "d": "Inhibidores P2Y12",
      "dose": "Clopidogrel 5 días · ticagrelor 3–5 días · prasugrel 7 días",
      "n": "Stent reciente: cardiología antes de suspender."
    }
  ],
  "goals": [
    "Hemostasia sin eventos trombóticos"
  ],
  "alerts": [
    "Anestesia neuroaxial: tiempos más largos (guías ASRA)"
  ],
  "rel": [
    "mi-reversion",
    "post-rtu"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACC 2025 ECDP perioperatorio · PAUSE · ACCP 2022",
    "dif": []
  }
},
{
  "id": "tromboprof-qx",
  "sys": "Cirugía general y trauma",
  "group": "Perioperatorio",
  "name": "Tromboprofilaxis quirúrgica (Caprini)",
  "aka": "tromboprofilaxis quirurgica caprini enoxaparina medias compresion",
  "page": "Fuente: ACCP 2012 · ASH 2019",
  "sub": "Según Caprini y riesgo de sangrado.",
  "flow": [
    [
      "Caprini 0–2",
      "Deambulación / mecánica"
    ],
    [
      "3–4",
      "Enoxaparina o mecánica"
    ],
    [
      "≥ 5",
      "Enoxaparina + mecánica"
    ],
    [
      "Cáncer abdominopélvico",
      "Extender 28 días"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Enoxaparina",
      "dose": "40 mg SC c/24 h, iniciar 12 h antes o 6–12 h después",
      "n": "ClCr < 30: 20–30 mg/día. Obesidad mórbida: 40 mg c/12 h.",
      "a": "Heparina no fraccionada 5000 U SC c/8–12 h."
    },
    {
      "d": "Compresión neumática intermitente si alto riesgo de sangrado"
    }
  ],
  "goals": [
    "Sin TEV"
  ],
  "alerts": [
    "Plaquetas c/2–3 días si heparina"
  ],
  "rel": [
    "mi-etv"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACCP 2012 · ASH 2019",
    "dif": []
  }
},
{
  "id": "tce",
  "sys": "Cirugía general y trauma",
  "group": "Trauma",
  "name": "Trauma craneoencefálico (TCE)",
  "aka": "tce trauma craneoencefalico tec glasgow hematoma epidural subdural acido tranexamico",
  "page": "Fuente: BTF 2016 · CRASH-3",
  "sub": "Leve (Glasgow 13–15), moderado (9–12), grave (≤ 8). Evita hipoxia e hipotensión.",
  "flow": [
    [
      "Leve",
      "Regla canadiense para TAC"
    ],
    [
      "Moderado-grave",
      "TAC y neurocirugía"
    ],
    [
      "Grave",
      "IOT, PAS ≥ 100–110, normocapnia"
    ],
    [
      "< 3 h",
      "Ácido tranexámico (leve-moderado)"
    ]
  ],
  "criteria": [
    "TAC en leve si: Glasgow < 15 a las 2 h, sospecha de fractura, ≥ 2 vómitos, ≥ 65 años, amnesia > 30 min, mecanismo peligroso, anticoagulado."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ácido tranexámico",
      "dose": "1 g IV en 10 min + 1 g en 8 h (dentro de 3 h)"
    },
    {
      "d": "Metas",
      "dose": "PAS ≥ 100 (50–69 años) o ≥ 110; SatO₂ > 94 %; PaCO₂ 35–45; glucemia 140–180; normotermia; cabecera 30°"
    },
    {
      "d": "Hipertensión endocraneana",
      "dose": "Manitol 20 % 0,5–1 g/kg o SSN 3 % 250 mL",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "g",
        "label": "manitol"
      }
    },
    {
      "d": "TCE grave: profilaxis de convulsiones 7 días",
      "dose": "Levetiracetam 500–1000 mg IV c/12 h",
      "a": "Fenitoína 20 mg/kg carga."
    },
    {
      "d": "Anticoagulado",
      "n": "Revierte según fármaco (ficha de HIC)."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "TCE leve con TAC normal",
      "n": "Paracetamol; evitar AINE 24 h; acompañante 24 h; signos de alarma por escrito."
    }
  ],
  "goals": [
    "Sin lesión secundaria"
  ],
  "alerts": [
    "No corticoides en TCE"
  ],
  "rel": [
    "hic",
    "reanimacion",
    "c-cthead",
    "c-glasgow"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BTF 2016 · CRASH-3 · Canadian CT Head Rule",
    "dif": []
  }
},
{
  "id": "neumotorax",
  "sys": "Cirugía general y trauma",
  "group": "Trauma",
  "name": "Neumotórax y hemotórax",
  "aka": "neumotorax a tension hemotorax tubo de torax drenaje toracostomia",
  "page": "Fuente: BTS 2023 · ATLS 11.ª ed.",
  "sub": "A tensión: descompresión inmediata sin imagen.",
  "flow": [
    [
      "A tensión",
      "Aguja 5.º EIC línea axilar media → tubo"
    ],
    [
      "Espontáneo primario pequeño y estable",
      "Observación / O₂"
    ],
    [
      "Grande o sintomático",
      "Aspiración o drenaje de pequeño calibre"
    ],
    [
      "Hemotórax",
      "Tubo 28–32 Fr"
    ]
  ],
  "criteria": [
    "Hemotórax masivo (> 1500 mL inicial o > 200 mL/h × 2–4 h): toracotomía."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Oxígeno a alto flujo (acelera reabsorción)"
    },
    {
      "d": "Analgesia para el tubo",
      "dose": "Lidocaína 1 % local (máx 4,5 mg/kg) + opioide IV",
      "calc": {
        "t": "kg",
        "lo": 4.5,
        "hi": 4.5,
        "unit": "mg",
        "label": "máx lidocaína",
        "max": 300
      }
    },
    {
      "d": "Profilaxis antibiótica en tubo por trauma",
      "dose": "Cefazolina 2 g IV dosis única"
    }
  ],
  "goals": [
    "Reexpansión pulmonar"
  ],
  "alerts": [
    "Secundario (EPOC): siempre drenaje y hospitalización"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BTS 2023 · ATLS 11.ª ed.",
    "dif": []
  }
}
];
