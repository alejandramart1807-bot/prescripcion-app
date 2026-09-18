// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "bradi",
  "group": "Arritmias",
  "name": "Bradiarritmia sintomática",
  "aka": "bradicardia bav bloqueo av bloqueo auriculoventricular marcapasos atropina",
  "page": "Fuente: AHA 2025 (SVCA/ACLS)",
  "sub": "FC baja con signos de hipoperfusión atribuibles a la bradicardia.",
  "base": [
    "AHA ACLS"
  ],
  "flow": [
    [
      "Evalúa",
      "¿Hipotensión, alteración de conciencia, dolor isquémico, IC aguda o shock?"
    ],
    [
      "1.ª línea",
      "Atropina"
    ],
    [
      "Sin respuesta",
      "Marcapasos transcutáneo o infusión de dopamina / adrenalina"
    ],
    [
      "Definitivo",
      "Marcapasos transvenoso y corregir causa"
    ]
  ],
  "criteria": [
    "Estable y asintomático: monitoreo, ECG de 12 derivaciones y buscar causa; no requiere fármacos.",
    "Causas a descartar de entrada: hiperpotasemia, isquemia inferior, fármacos (betabloqueador, calcioantagonista, digoxina), hipotiroidismo, hipoxia, hipotermia."
  ],
  "orders": [
    {
      "cat": "Medidas generales"
    },
    {
      "d": "Monitoreo continuo, oxígeno si SatO₂ < 90 %, 2 accesos venosos",
      "n": "ECG 12 derivaciones; ionograma con K⁺ y Mg²⁺, troponina, TSH, niveles de digoxina si aplica."
    },
    {
      "cat": "Farmacológico"
    },
    {
      "d": "Atropina",
      "dose": "1 mg IV en bolo, repetir c/3–5 min · máx 3 mg",
      "n": "Poco útil en BAV de alto grado con QRS ancho o en corazón trasplantado; no retrase el marcapasos."
    },
    {
      "d": "Dopamina (si atropina falla)",
      "dose": "5–20 mcg/kg/min IV",
      "dil": "400 mg en 250 mL SSN = 1600 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 5,
        "hi": 20,
        "conc": 1600
      }
    },
    {
      "d": "Adrenalina (alternativa)",
      "dose": "2–10 mcg/min IV",
      "dil": "4 mg en 250 mL SSN = 16 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 2,
        "hi": 10,
        "conc": 16
      }
    },
    {
      "cat": "Dispositivo"
    },
    {
      "d": "Marcapasos transcutáneo",
      "dose": "FC 60–80 lpm; subir mA hasta captura eléctrica y confirmar pulso",
      "n": "Analgesia/sedación: fentanilo 0,5–1 mcg/kg IV."
    },
    {
      "d": "Interconsulta a cardiología para marcapasos transvenoso",
      "n": "Si persiste BAV avanzado o no hay captura estable."
    }
  ],
  "goals": [
    "Resolución de la hipoperfusión (PAS > 90, estado mental normal)",
    "Captura eléctrica y mecánica si hay marcapasos"
  ],
  "alerts": [
    "Intoxicación por betabloqueador: glucagón 3–10 mg IV en 3–5 min",
    "Calcioantagonista o hiperpotasemia: gluconato de calcio 10 % 10–30 mL IV lento",
    "IAM inferior: evita nitratos si hay compromiso de VD"
  ]
},
{
  "id": "taqui",
  "group": "Arritmias",
  "name": "Taquiarritmia con pulso",
  "aka": "taquicardia tsv supraventricular tv ventricular complejo ancho estrecho adenosina",
  "page": "Fuente: AHA 2025 (SVCA/ACLS) · ESC 2019 TSV",
  "sub": "Taquicardia con FC habitualmente > 150 lpm; primero define estabilidad, luego QRS y regularidad.",
  "base": [
    "AHA ACLS"
  ],
  "flow": [
    [
      "Evalúa",
      "¿Inestable? → cardioversión sincronizada"
    ],
    [
      "Estable",
      "QRS estrecho o ancho · regular o irregular"
    ],
    [
      "Estrecho regular",
      "Vagales → adenosina → nodal"
    ],
    [
      "Ancho regular",
      "Adenosina solo si monomórfica → amiodarona"
    ]
  ],
  "criteria": [
    "Inestabilidad: hipotensión, alteración de conciencia, dolor isquémico, IC aguda, shock.",
    "QRS ancho ≥ 120 ms: asume TV hasta demostrar lo contrario.",
    "FA irregular: ver fichas de fibrilación auricular."
  ],
  "orders": [
    {
      "cat": "Si está inestable"
    },
    {
      "d": "Cardioversión eléctrica sincronizada",
      "dose": "Estrecho regular 50–100 J · estrecho irregular 120–200 J · ancho regular 100 J (bifásico)",
      "n": "Escala energía si no revierte. Ancho irregular / polimórfico: desfibrilar (no sincronizar)."
    },
    {
      "d": "Sedoanalgesia para la cardioversión",
      "dose": "Fentanilo 0,5–1 mcg/kg IV + etomidato 0,1–0,2 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.2,
        "unit": "mg",
        "label": "etomidato"
      }
    },
    {
      "cat": "QRS estrecho regular, estable"
    },
    {
      "d": "Maniobra de Valsalva modificada",
      "n": "Soplar 15 s contra resistencia sentado y luego acostar con elevación pasiva de piernas."
    },
    {
      "d": "Adenosina",
      "dose": "6 mg IV bolo rápido + 20 mL SSN; si no revierte, 12 mg (puede repetirse 12 mg)",
      "n": "Vía antecubital, jeringa en llave de 3 vías. Avisar al paciente del malestar transitorio."
    },
    {
      "d": "Metoprolol (si recurre o no revierte)",
      "dose": "2,5–5 mg IV en 2 min c/5 min · máx 15 mg"
    },
    {
      "d": "Verapamilo (alternativa)",
      "dose": "2,5–5 mg IV en 2 min; repetir 5–10 mg a los 15–30 min",
      "n": "Evitar en FEVI reducida o sospecha de preexcitación."
    },
    {
      "cat": "QRS ancho regular, estable"
    },
    {
      "d": "Amiodarona",
      "dose": "150 mg IV en 10 min (repetible), luego 1 mg/min × 6 h y 0,5 mg/min × 18 h",
      "dil": "Carga: 150 mg en 100 mL DAD5 %. Infusión: 900 mg en 500 mL DAD5 % = 1,8 mg/mL",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 1,
        "conc": 1.8,
        "unit": "mg"
      }
    },
    {
      "d": "Interconsulta a cardiología / electrofisiología"
    }
  ],
  "goals": [
    "Reversión a ritmo sinusal o control de FC",
    "ECG de 12 derivaciones post-reversión (buscar preexcitación)"
  ],
  "alerts": [
    "Preexcitación (WPW) con FA: no adenosina, betabloqueador, calcioantagonista ni digoxina",
    "Adenosina: precaución en asma; reducir a 3 mg con dipiridamol, carbamazepina o trasplante cardíaco",
    "TV polimórfica con QT largo: sulfato de magnesio 2 g IV"
  ]
},
{
  "id": "fa-inest",
  "group": "Fibrilación auricular",
  "name": "FA con inestabilidad hemodinámica",
  "aka": "fibrilacion auricular inestable cardioversion electrica flutter",
  "page": "Fuente: Guía colombiana · ESC 2024 FA · ACC/AHA/ACCP/HRS 2023 FA",
  "sub": "FA con respuesta ventricular rápida y hipotensión, shock, isquemia o edema pulmonar atribuibles a la arritmia.",
  "base": [
    "ESC 2024 FA",
    "AHA ACLS"
  ],
  "flow": [
    [
      "Confirma",
      "La inestabilidad se debe a la FA (no a sepsis, sangrado, etc.)"
    ],
    [
      "Anticoagula",
      "Heparina lo antes posible, sin retrasar"
    ],
    [
      "Cardioversión",
      "Sincronizada bajo sedoanalgesia"
    ],
    [
      "Después",
      "Anticoagulación ≥ 4 semanas y según CHA₂DS₂-VA"
    ]
  ],
  "criteria": [
    "Si la FC es < 150 lpm, piensa que la taquicardia puede ser compensatoria de otra causa.",
    "FA preexcitada (QRS ancho, irregular, muy rápida): cardioversión eléctrica."
  ],
  "orders": [
    {
      "cat": "Medidas generales"
    },
    {
      "d": "Monitoreo, O₂ si SatO₂ < 90 %, 2 accesos, desfibrilador con parches",
      "n": "ECG 12 derivaciones, ionograma, troponina, TSH, hemograma, función renal."
    },
    {
      "cat": "Anticoagulación"
    },
    {
      "d": "Heparina no fraccionada",
      "dose": "Bolo 60–80 U/kg IV, luego infusión 12–18 U/kg/h ajustada a TTPa",
      "dil": "25 000 U en 250 mL SSN = 100 U/mL",
      "calc": {
        "t": "kgh",
        "lo": 12,
        "hi": 18,
        "conc": 100,
        "unit": "U"
      }
    },
    {
      "d": "o Enoxaparina",
      "dose": "1 mg/kg SC c/12 h (ClCr < 30: c/24 h)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "por dosis"
      }
    },
    {
      "cat": "Cardioversión"
    },
    {
      "d": "Sedoanalgesia",
      "dose": "Fentanilo 0,5–1 mcg/kg IV + etomidato 0,1–0,2 mg/kg IV",
      "n": "Propofol 0,5–1 mg/kg solo si la PA lo permite.",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.2,
        "unit": "mg",
        "label": "etomidato"
      }
    },
    {
      "d": "Cardioversión eléctrica sincronizada",
      "dose": "Bifásico 120–200 J inicial; escalar a energía máxima",
      "n": "Verifica marca de sincronía en cada QRS antes de cada descarga."
    },
    {
      "cat": "Si recurre o no revierte"
    },
    {
      "d": "Amiodarona",
      "dose": "150–300 mg IV en 10–60 min, luego 1 mg/min",
      "dil": "900 mg en 500 mL DAD5 % = 1,8 mg/mL",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 1,
        "conc": 1.8,
        "unit": "mg"
      }
    }
  ],
  "goals": [
    "Estabilidad hemodinámica (PAM ≥ 65, sin isquemia)",
    "Ritmo sinusal o FC < 110 lpm",
    "Anticoagulación continuada ≥ 4 semanas post-cardioversión"
  ],
  "alerts": [
    "Corrige K⁺ y Mg²⁺",
    "En intoxicación digitálica, evita la cardioversión si es posible",
    "Nunca nodales en FA preexcitada"
  ],
  "rel": [
    "mi-fa"
  ]
},
{
  "id": "fa-24",
  "group": "Fibrilación auricular",
  "name": "FA estable < 24 h",
  "aka": "fibrilacion auricular reciente estable control ritmo cardioversion farmacologica propafenona",
  "page": "Fuente: Guía colombiana · ESC 2024 FA · ACC/AHA/ACCP/HRS 2023 FA",
  "sub": "FA hemodinámicamente estable con inicio claramente documentado en menos de 24 h.",
  "base": [
    "ESC 2024 FA"
  ],
  "flow": [
    [
      "1",
      "Control de FC y síntomas"
    ],
    [
      "2",
      "Anticoagula e inicia según CHA₂DS₂-VA"
    ],
    [
      "3",
      "Ritmo: esperar conversión espontánea o cardioversión precoz"
    ],
    [
      "4",
      "Plan de anticoagulación a largo plazo"
    ]
  ],
  "criteria": [
    "Una estrategia de espera (control de FC y cardioversión diferida si no revierte en 48 h) es igual de válida: muchas FA recientes revierten solas.",
    "Cardioversión precoz sin ETE solo si el inicio < 24 h es seguro y el riesgo tromboembólico es bajo."
  ],
  "orders": [
    {
      "cat": "Control de frecuencia (FEVI > 40 %)"
    },
    {
      "d": "Metoprolol",
      "dose": "2,5–5 mg IV en 2 min c/5 min · máx 15 mg; luego VO 25–50 mg c/12 h"
    },
    {
      "d": "Diltiazem (alternativa)",
      "dose": "0,25 mg/kg IV en 2 min; puede repetirse 0,35 mg/kg",
      "n": "Disponibilidad IV variable en Colombia.",
      "calc": {
        "t": "kg",
        "lo": 0.25,
        "hi": 0.25,
        "unit": "mg",
        "label": "1.ª dosis"
      }
    },
    {
      "cat": "Control de frecuencia (FEVI ≤ 40 % o IC)"
    },
    {
      "d": "Digoxina",
      "dose": "0,25–0,5 mg IV; puede repetirse 0,25 mg c/6 h · máx 1,5 mg/24 h",
      "n": "Ajustar en ERC."
    },
    {
      "d": "Amiodarona",
      "dose": "150–300 mg IV en 1 h"
    },
    {
      "cat": "Cardioversión farmacológica (si se elige ritmo)"
    },
    {
      "d": "Amiodarona (con o sin cardiopatía estructural)",
      "dose": "5–7 mg/kg IV en 1–2 h, luego 50 mg/h · máx 1,2 g/24 h",
      "calc": {
        "t": "kg",
        "lo": 5,
        "hi": 7,
        "unit": "mg",
        "label": "carga",
        "max": null
      }
    },
    {
      "d": "Propafenona (sin cardiopatía estructural)",
      "dose": "450 mg VO (< 70 kg) o 600 mg VO (≥ 70 kg), dosis única",
      "n": "Dar antes un nodal (metoprolol) para evitar flutter 1:1. Contraindicada en cardiopatía isquémica o FEVI reducida.",
      "calc": {
        "t": "table",
        "rows": [
          [
            70,
            "450 mg VO"
          ],
          [
            999,
            "600 mg VO"
          ]
        ]
      }
    },
    {
      "cat": "Anticoagulación"
    },
    {
      "d": "Enoxaparina o anticoagulante oral directo antes de la cardioversión",
      "dose": "Enoxaparina 1 mg/kg SC c/12 h · o apixabán 5 mg VO c/12 h · o rivaroxabán 20 mg VO c/24 h con comida",
      "n": "Continuar ≥ 4 semanas tras cardioversión; después según CHA₂DS₂-VA (≥ 2: indefinida; 1: considerar).",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "enoxaparina"
      }
    }
  ],
  "goals": [
    "FC en reposo < 110 lpm (laxa) o < 80 si persisten síntomas",
    "Síntomas controlados",
    "Anticoagulación iniciada antes de cualquier cardioversión"
  ],
  "alerts": [
    "Apixabán 2,5 mg c/12 h si ≥ 2 de: edad ≥ 80, peso ≤ 60 kg, Cr ≥ 1,5 mg/dL",
    "Rivaroxabán 15 mg/día si ClCr 15–49",
    "No calcioantagonistas no dihidropiridínicos en FEVI ≤ 40 %"
  ],
  "rel": [
    "c-cha2ds2",
    "mi-fa"
  ]
},
{
  "id": "fa-mas24",
  "group": "Fibrilación auricular",
  "name": "FA estable > 24 h o de inicio incierto",
  "aka": "fibrilacion auricular cronica persistente desconocido anticoagulacion eco transesofagico",
  "page": "Fuente: Guía colombiana · ESC 2024 FA · ACC/AHA/ACCP/HRS 2023 FA",
  "sub": "FA estable de más de 24 h o sin hora de inicio clara: el riesgo de trombo en la orejuela manda.",
  "base": [
    "ESC 2024 FA"
  ],
  "flow": [
    [
      "1",
      "Control de FC en urgencias"
    ],
    [
      "2",
      "Anticoagular"
    ],
    [
      "3",
      "No cardioversión inmediata"
    ],
    [
      "4",
      "Cardioversión electiva tras 3 semanas de anticoagulación o ETE sin trombo"
    ]
  ],
  "criteria": [
    "No cardiovertir en urgencias salvo inestabilidad.",
    "Busca precipitantes: infección, hipertiroidismo, alcohol, TEP, isquemia, hipoxia."
  ],
  "orders": [
    {
      "cat": "Control de frecuencia"
    },
    {
      "d": "Metoprolol",
      "dose": "2,5–5 mg IV en 2 min c/5 min · máx 15 mg; luego tartrato VO 25–50 mg c/12 h"
    },
    {
      "d": "Digoxina (IC o hipotensión límite)",
      "dose": "0,25–0,5 mg IV; repetir 0,25 mg c/6 h · máx 1,5 mg/24 h"
    },
    {
      "d": "Amiodarona (FEVI reducida, refractaria)",
      "dose": "150–300 mg IV en 1 h",
      "n": "Puede cardiovertir: úsala sabiendo el riesgo embólico si no está anticoagulado."
    },
    {
      "cat": "Anticoagulación"
    },
    {
      "d": "Apixabán",
      "dose": "5 mg VO c/12 h",
      "n": "2,5 mg c/12 h si ≥ 2 de: edad ≥ 80, peso ≤ 60 kg, Cr ≥ 1,5 mg/dL."
    },
    {
      "d": "o Rivaroxabán",
      "dose": "20 mg VO c/24 h con la comida (ClCr 15–49: 15 mg)"
    },
    {
      "d": "o Enoxaparina (puente / hospitalizado)",
      "dose": "1 mg/kg SC c/12 h",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "por dosis"
      }
    },
    {
      "d": "Warfarina si prótesis mecánica o estenosis mitral moderada-grave",
      "dose": "INR meta 2–3 (2,5–3,5 en prótesis mitral)"
    },
    {
      "cat": "Estudios"
    },
    {
      "d": "Ecocardiograma, TSH, función renal, hemograma, perfil de coagulación"
    }
  ],
  "goals": [
    "FC en reposo < 110 lpm",
    "Anticoagulación efectiva ≥ 3 semanas antes de cardioversión electiva"
  ],
  "alerts": [
    "Evalúa riesgo hemorrágico y corrige factores modificables, sin que contraindique por sí solo",
    "Anticoagulantes orales directos contraindicados en prótesis mecánica y estenosis mitral"
  ],
  "rel": [
    "c-cha2ds2",
    "c-hasbled",
    "mi-fa"
  ]
},
{
  "id": "iamcest-icp",
  "group": "Síndrome coronario agudo",
  "name": "IAMCEST con angioplastia primaria",
  "aka": "infarto con elevacion st iamcest scacest icp angioplastia hemodinamia",
  "page": "Fuente: Guía colombiana · ESC 2023 SCA · ACC/AHA 2025 SCA",
  "sub": "Síntomas < 12 h con elevación persistente del ST o equivalente, con hemodinamia disponible en ≤ 120 min desde el diagnóstico.",
  "base": [
    "ESC 2023 SCA",
    "ACC/AHA 2025 SCA"
  ],
  "flow": [
    [
      "0 min",
      "ECG en < 10 min"
    ],
    [
      "Activa",
      "Código infarto / hemodinamia"
    ],
    [
      "Carga",
      "ASA + inhibidor P2Y12 + estatina"
    ],
    [
      "Meta",
      "Diagnóstico a paso de guía < 90 min"
    ]
  ],
  "criteria": [
    "Equivalentes: BRI nuevo con clínica, ritmo de marcapasos con isquemia, IAM posterior (depresión ST V1–V3), De Winter, lesión de tronco.",
    "Pide derivaciones V3R–V4R en IAM inferior y V7–V9 si sospecha posterior."
  ],
  "orders": [
    {
      "cat": "Medidas generales"
    },
    {
      "d": "Reposo, monitoreo, desfibrilador disponible, 2 accesos (preferir brazo izquierdo si va radial derecho)",
      "n": "O₂ solo si SatO₂ < 90 %."
    },
    {
      "d": "Laboratorios",
      "n": "Troponina, hemograma, función renal, electrolitos, coagulación, glicemia, perfil lipídico."
    },
    {
      "cat": "Antitrombóticos"
    },
    {
      "d": "Ácido acetilsalicílico",
      "dose": "300 mg VO masticado, luego 100 mg VO c/24 h"
    },
    {
      "d": "Ticagrelor (preferido si disponible)",
      "dose": "180 mg VO carga, luego 90 mg c/12 h",
      "n": "Alternativas: prasugrel 60 mg (evitar si ACV/AIT previo; ≥ 75 años o < 60 kg: 5 mg/día de mantenimiento) o clopidogrel 600 mg."
    },
    {
      "d": "Heparina no fraccionada (en sala de hemodinamia)",
      "dose": "70–100 U/kg IV en bolo",
      "calc": {
        "t": "kg",
        "lo": 70,
        "hi": 100,
        "unit": "U"
      }
    },
    {
      "cat": "Otros"
    },
    {
      "d": "Atorvastatina",
      "dose": "80 mg VO c/24 h"
    },
    {
      "d": "Nitroglicerina",
      "dose": "0,4 mg SL c/5 min hasta 3 dosis si dolor y PAS > 90",
      "n": "No en IAM de VD, PAS < 90 o inhibidores de PDE-5 en 24–48 h."
    },
    {
      "d": "Morfina (dolor refractario)",
      "dose": "2–4 mg IV, repetir c/5–15 min"
    },
    {
      "d": "Metoprolol VO en las primeras 24 h",
      "dose": "25 mg VO c/12 h",
      "n": "Solo si no hay IC, bajo gasto, riesgo de shock, BAV o FC < 60."
    }
  ],
  "goals": [
    "Diagnóstico–reperfusión < 90 min (< 120 min si traslado)",
    "Dolor controlado sin hipotensión"
  ],
  "alerts": [
    "Pregunta contraindicaciones hemorrágicas antes del P2Y12",
    "Clopidogrel si anticoagulación oral crónica o alto riesgo de sangrado",
    "Shock cardiogénico: angioplastia inmediata sin importar tiempo"
  ],
  "rel": [
    "r-cardio"
  ]
},
{
  "id": "iamcest-tl",
  "group": "Síndrome coronario agudo",
  "name": "IAMCEST con trombólisis",
  "aka": "infarto trombolisis fibrinolisis tenecteplasa alteplasa estreptoquinasa",
  "page": "Fuente: Guía colombiana · ESC 2023 SCA · ACC/AHA 2025 SCA",
  "sub": "Síntomas < 12 h cuando la angioplastia primaria no es posible en ≤ 120 min desde el diagnóstico.",
  "base": [
    "ESC 2023 SCA",
    "ACC/AHA 2025 SCA"
  ],
  "flow": [
    [
      "Meta",
      "Aguja en < 10 min del diagnóstico"
    ],
    [
      "Coadyuvantes",
      "ASA + clopidogrel + enoxaparina"
    ],
    [
      "60–90 min",
      "¿Resolución ST > 50 %?"
    ],
    [
      "Traslado",
      "Angiografía 2–24 h; rescate si no reperfundió"
    ]
  ],
  "criteria": [
    "Contraindicaciones absolutas: ACV hemorrágico previo, ACV isquémico < 6 meses, neoplasia o malformación del SNC, trauma mayor / cirugía / TCE < 1 mes, sangrado GI < 1 mes, diátesis hemorrágica, disección aórtica, punciones no compresibles < 24 h.",
    "Relativas: AIT < 6 meses, anticoagulación oral, embarazo o posparto < 1 semana, PAS > 180 o PAD > 110 refractaria, hepatopatía avanzada, endocarditis, úlcera péptica activa, RCP traumática."
  ],
  "orders": [
    {
      "cat": "Fibrinolítico (elige uno)"
    },
    {
      "d": "Tenecteplasa (5 mg/mL)",
      "dose": "Bolo IV único en 5–10 s según peso",
      "n": "≥ 75 años: mitad de la dosis.",
      "calc": {
        "t": "table",
        "rows": [
          [
            60,
            "30 mg (6 mL)"
          ],
          [
            70,
            "35 mg (7 mL)"
          ],
          [
            80,
            "40 mg (8 mL)"
          ],
          [
            90,
            "45 mg (9 mL)"
          ],
          [
            999,
            "50 mg (10 mL)"
          ]
        ]
      }
    },
    {
      "d": "o Alteplasa",
      "dose": "15 mg IV bolo → 0,75 mg/kg en 30 min (máx 50 mg) → 0,5 mg/kg en 60 min (máx 35 mg)",
      "calc": {
        "t": "alteplase"
      }
    },
    {
      "d": "o Estreptoquinasa",
      "dose": "1,5 millones U IV en 30–60 min",
      "n": "Sin heparina en bolo; no repetir si la recibió antes."
    },
    {
      "cat": "Coadyuvantes"
    },
    {
      "d": "Ácido acetilsalicílico",
      "dose": "300 mg VO masticado, luego 100 mg c/24 h"
    },
    {
      "d": "Clopidogrel",
      "dose": "300 mg VO carga (≥ 75 años: 75 mg sin carga), luego 75 mg c/24 h"
    },
    {
      "d": "Enoxaparina (< 75 años)",
      "dose": "30 mg IV bolo; a los 15 min 1 mg/kg SC c/12 h (máx 100 mg las 2 primeras dosis)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "SC",
        "max": 100
      }
    },
    {
      "d": "Enoxaparina (≥ 75 años)",
      "dose": "Sin bolo IV; 0,75 mg/kg SC c/12 h (máx 75 mg las 2 primeras dosis)",
      "n": "ClCr < 30: 1 mg/kg SC c/24 h.",
      "calc": {
        "t": "kg",
        "lo": 0.75,
        "hi": 0.75,
        "unit": "mg",
        "label": "SC",
        "max": 75
      }
    },
    {
      "d": "Atorvastatina",
      "dose": "80 mg VO c/24 h"
    },
    {
      "cat": "Vigilancia"
    },
    {
      "d": "ECG a los 60–90 min y signos neurológicos c/15 min en la primera hora"
    }
  ],
  "goals": [
    "Resolución del ST > 50 % a los 60–90 min",
    "Traslado a centro con hemodinamia en todos los casos"
  ],
  "alerts": [
    "Deterioro neurológico: suspende infusión, TAC urgente, fibrinógeno y crioprecipitado",
    "Arritmias de reperfusión (RIVA) son esperables y suelen no requerir tratamiento",
    "Sin reperfusión: angioplastia de rescate inmediata"
  ]
},
{
  "id": "iamsest",
  "group": "Síndrome coronario agudo",
  "name": "SCA sin elevación del ST (IAMSEST / angina inestable)",
  "aka": "iamsest scasest nstemi angina inestable troponina",
  "page": "Fuente: Guía colombiana · ESC 2023 SCA · ACC/AHA 2025 SCA",
  "sub": "Dolor isquémico sin elevación persistente del ST; la troponina separa IAMSEST de angina inestable.",
  "base": [
    "ESC 2023 SCA",
    "ACC/AHA 2025 SCA"
  ],
  "flow": [
    [
      "Estratifica",
      "GRACE y criterios de riesgo"
    ],
    [
      "Muy alto riesgo",
      "Angiografía inmediata < 2 h"
    ],
    [
      "Alto riesgo",
      "Angiografía < 24 h"
    ],
    [
      "Resto",
      "Estrategia invasiva selectiva"
    ]
  ],
  "criteria": [
    "Muy alto riesgo: inestabilidad o shock, dolor refractario, arritmias malignas o paro, complicación mecánica, IC aguda por isquemia, depresión ST recurrente.",
    "Alto riesgo: IAMSEST confirmado, cambios dinámicos del ST/T, GRACE > 140, elevación transitoria del ST."
  ],
  "orders": [
    {
      "cat": "Medidas generales"
    },
    {
      "d": "Monitoreo, ECG seriados, troponina ultrasensible 0 y 1–3 h",
      "n": "O₂ solo si SatO₂ < 90 %."
    },
    {
      "cat": "Antitrombóticos"
    },
    {
      "d": "Ácido acetilsalicílico",
      "dose": "300 mg VO masticado, luego 100 mg c/24 h"
    },
    {
      "d": "Inhibidor P2Y12",
      "dose": "Ticagrelor 180 mg VO carga → 90 mg c/12 h, o clopidogrel 300–600 mg → 75 mg/día",
      "n": "Si hay angiografía en < 24 h, se puede diferir la carga hasta conocer la anatomía; coordínalo con hemodinamia."
    },
    {
      "d": "Enoxaparina",
      "dose": "1 mg/kg SC c/12 h (ClCr < 30: c/24 h)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "por dosis"
      }
    },
    {
      "d": "o Fondaparinux",
      "dose": "2,5 mg SC c/24 h",
      "n": "Evitar si ClCr < 20; requiere bolo de HNF en la angioplastia."
    },
    {
      "d": "o Heparina no fraccionada",
      "dose": "60 U/kg IV (máx 4000 U), luego 12 U/kg/h (máx 1000 U/h), TTPa 1,5–2 veces",
      "dil": "25 000 U en 250 mL SSN = 100 U/mL",
      "calc": {
        "t": "kgh",
        "lo": 12,
        "hi": 12,
        "conc": 100,
        "unit": "U",
        "maxRate": 1000
      }
    },
    {
      "cat": "Antiisquémicos y otros"
    },
    {
      "d": "Nitroglicerina",
      "dose": "0,4 mg SL c/5 min × 3; si persiste, IV 5–10 mcg/min titulable",
      "dil": "50 mg en 250 mL DAD5 % = 200 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 5,
        "hi": 10,
        "conc": 200
      }
    },
    {
      "d": "Metoprolol VO",
      "dose": "25 mg c/12 h",
      "n": "Si no hay IC, bajo gasto, BAV ni FC < 60."
    },
    {
      "d": "Atorvastatina",
      "dose": "80 mg VO c/24 h"
    }
  ],
  "goals": [
    "Dolor controlado",
    "Angiografía en la ventana que dicte el riesgo"
  ],
  "alerts": [
    "No combinar heparinas (evitar cambiar de enoxaparina a HNF)",
    "Considera diagnósticos diferenciales: disección aórtica, TEP, pericarditis"
  ],
  "rel": [
    "c-heart",
    "c-timi",
    "r-cardio"
  ]
},
{
  "id": "he-general",
  "group": "Emergencia hipertensiva",
  "name": "Emergencia hipertensiva: principios",
  "aka": "crisis hipertensiva urgencia emergencia hipertensiva lesion organo blanco",
  "page": "Fuente: Guía colombiana · ACC/AHA 2025 HTA · ESC 2024 HTA",
  "sub": "PA habitualmente > 180/120 con lesión aguda de órgano blanco. Sin lesión aguda es urgencia: manejo oral y seguimiento.",
  "base": [
    "ACC/AHA",
    "ESC 2024 HTA"
  ],
  "flow": [
    [
      "1 h",
      "Bajar PAM máx 20–25 %"
    ],
    [
      "2–6 h",
      "Llevar a ~160/100–110"
    ],
    [
      "24–48 h",
      "Normalizar progresivamente"
    ],
    [
      "Excepciones",
      "Disección, ACV, eclampsia, feocromocitoma"
    ]
  ],
  "criteria": [
    "Órganos a evaluar: cerebro (encefalopatía, ACV), corazón (SCA, EAP), aorta, riñón (LRA), retina (papiledema, hemorragias), embarazo.",
    "Estudios: ECG, troponina, creatinina, uroanálisis, hemograma con frotis (MAT), fondo de ojo; TAC si hay focalización o alteración de conciencia."
  ],
  "orders": [
    {
      "cat": "Fármacos IV de uso frecuente"
    },
    {
      "d": "Labetalol",
      "dose": "20 mg IV en 2 min, luego 20–80 mg c/10 min (máx 300 mg) o infusión 0,5–2 mg/min",
      "dil": "200 mg en 200 mL = 1 mg/mL",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 2,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "Nicardipino",
      "dose": "5 mg/h, subir 2,5 mg/h c/5–15 min · máx 15 mg/h",
      "dil": "25 mg en 250 mL = 0,1 mg/mL",
      "n": "Disponibilidad variable en Colombia.",
      "calc": {
        "t": "h",
        "lo": 5,
        "hi": 15,
        "conc": 0.1,
        "unit": "mg"
      }
    },
    {
      "d": "Nitroprusiato",
      "dose": "0,3–5 mcg/kg/min (máx 10 por < 10 min)",
      "dil": "50 mg en 250 mL DAD5 % = 200 mcg/mL, protegido de la luz",
      "n": "Riesgo de toxicidad por cianuro en infusiones prolongadas o ERC; requiere línea arterial idealmente.",
      "calc": {
        "t": "kgmin",
        "lo": 0.3,
        "hi": 5,
        "conc": 200
      }
    },
    {
      "d": "Nitroglicerina",
      "dose": "5 mcg/min, subir 5 mcg/min c/3–5 min · máx 200 mcg/min",
      "dil": "50 mg en 250 mL DAD5 % = 200 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 5,
        "hi": 200,
        "conc": 200
      }
    },
    {
      "d": "Esmolol",
      "dose": "Bolo 500 mcg/kg en 1 min, luego 50–300 mcg/kg/min",
      "dil": "2500 mg en 250 mL = 10 000 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 50,
        "hi": 300,
        "conc": 10000
      }
    }
  ],
  "goals": [
    "Descenso controlado; evita caídas bruscas (isquemia cerebral, renal, coronaria)",
    "Línea arterial si usas nitroprusiato o hay titulación agresiva"
  ],
  "alerts": [
    "Muchos pacientes están hipovolémicos por natriuresis de presión: evalúa volemia",
    "Evita nifedipino sublingual de liberación inmediata fuera del embarazo"
  ],
  "rel": [
    "mi-hta"
  ]
},
{
  "id": "he-encef",
  "group": "Emergencia hipertensiva",
  "name": "Encefalopatía hipertensiva",
  "aka": "encefalopatia hipertensiva pres cefalea confusion",
  "page": "Fuente: Guía colombiana · ACC/AHA 2025 HTA · ESC 2024 HTA",
  "sub": "Cefalea, alteración de conciencia, convulsiones o alteraciones visuales con PA muy elevada; descarta ACV con imagen.",
  "base": [
    "ACC/AHA",
    "ESC 2024 HTA"
  ],
  "flow": [
    [
      "Imagen",
      "TAC/RM para descartar ACV"
    ],
    [
      "1 h",
      "Bajar PAM 20–25 %"
    ],
    [
      "Fármaco",
      "Labetalol o nicardipino"
    ]
  ],
  "criteria": [
    "La mejoría neurológica con el descenso de PA apoya el diagnóstico.",
    "Considera PRES en RM."
  ],
  "orders": [
    {
      "d": "Labetalol",
      "dose": "20 mg IV en 2 min, luego 20–80 mg c/10 min (máx 300 mg) o 0,5–2 mg/min",
      "dil": "1 mg/mL",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 2,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "o Nicardipino",
      "dose": "5–15 mg/h",
      "dil": "0,1 mg/mL",
      "calc": {
        "t": "h",
        "lo": 5,
        "hi": 15,
        "conc": 0.1,
        "unit": "mg"
      }
    },
    {
      "d": "o Nitroprusiato (si no hay alternativa)",
      "dose": "0,3–5 mcg/kg/min",
      "dil": "200 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.3,
        "hi": 5,
        "conc": 200
      }
    },
    {
      "d": "Crisis convulsivas",
      "dose": "Lorazepam 4 mg IV o midazolam 10 mg IM"
    }
  ],
  "goals": [
    "PAM −20–25 % en la primera hora",
    "Mejoría del estado neurológico"
  ],
  "alerts": [
    "Nitroprusiato aumenta la presión intracraneal: no de primera línea"
  ]
},
{
  "id": "he-hic",
  "group": "Emergencia hipertensiva",
  "name": "ACV hemorrágico (HIC) con PA elevada",
  "aka": "hemorragia intracerebral hic acv hemorragico presion",
  "page": "Fuente: AHA/ASA 2022 HIC · ESO 2025",
  "sub": "Hemorragia intracerebral espontánea con PAS entre 150 y 220 mmHg.",
  "base": [
    "AHA/ASA 2022 HIC"
  ],
  "flow": [
    [
      "Meta",
      "PAS 140 mmHg (rango 130–150)"
    ],
    [
      "Cómo",
      "Descenso suave y sostenido, sin picos"
    ],
    [
      "Evita",
      "PAS < 130"
    ]
  ],
  "criteria": [
    "Revierte anticoagulación de inmediato si aplica.",
    "PAS > 220: descenso más gradual con infusión y monitoreo estricto."
  ],
  "orders": [
    {
      "d": "Labetalol",
      "dose": "10–20 mg IV en 2 min, repetir c/10–20 min (máx 300 mg) o 0,5–2 mg/min",
      "dil": "1 mg/mL",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 2,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "o Nicardipino",
      "dose": "5 mg/h, subir 2,5 mg/h c/5–15 min · máx 15 mg/h",
      "dil": "0,1 mg/mL",
      "calc": {
        "t": "h",
        "lo": 5,
        "hi": 15,
        "conc": 0.1,
        "unit": "mg"
      }
    },
    {
      "d": "Cabecera a 30°, normoglicemia, normotermia, glicemia 140–180"
    },
    {
      "d": "Reversión si warfarina",
      "dose": "Vitamina K 10 mg IV + complejo protrombínico (CCP) según INR",
      "n": "Dabigatrán: idarucizumab 5 g IV. Anti-Xa: CCP 50 U/kg o andexanet si disponible."
    }
  ],
  "goals": [
    "PAS 130–150, idealmente ~140, alcanzada en la primera hora",
    "Variabilidad de PA mínima"
  ],
  "alerts": [
    "Descensos > 70 mmHg en la primera hora empeoran desenlaces",
    "Evita nitroprusiato y nitroglicerina (↑ PIC)"
  ]
},
{
  "id": "he-isq",
  "group": "Emergencia hipertensiva",
  "name": "ACV isquémico con PA elevada",
  "aka": "acv isquemico infarto cerebral trombolisis presion alteplasa",
  "page": "Fuente: Guía colombiana · AHA/ASA ACV isquémico agudo (vigente) · ESO",
  "sub": "La meta depende de si el paciente es candidato a reperfusión.",
  "base": [
    "AHA/ASA 2019–2026 ACV"
  ],
  "flow": [
    [
      "¿Reperfusión?",
      "Trombólisis o trombectomía"
    ],
    [
      "Sí",
      "< 185/110 antes, < 180/105 las 24 h siguientes"
    ],
    [
      "No",
      "Tratar solo si > 220/120; bajar ~15 % en 24 h"
    ]
  ],
  "criteria": [
    "Permisividad hipertensiva: la penumbra depende de la presión de perfusión."
  ],
  "orders": [
    {
      "d": "Labetalol",
      "dose": "10–20 mg IV en 1–2 min, repetible una vez",
      "n": "Luego infusión 0,5–2 mg/min si hace falta.",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 2,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "o Nicardipino",
      "dose": "5 mg/h, subir 2,5 mg/h c/5–15 min · máx 15 mg/h",
      "calc": {
        "t": "h",
        "lo": 5,
        "hi": 15,
        "conc": 0.1,
        "unit": "mg"
      }
    },
    {
      "d": "Monitoreo de PA",
      "dose": "c/15 min × 2 h, c/30 min × 6 h, luego c/h × 16 h (post-trombólisis)"
    }
  ],
  "goals": [
    "Candidato: < 185/110 antes y < 180/105 después",
    "No candidato: no bajar a menos que > 220/120"
  ],
  "alerts": [
    "Si no logras < 185/110, no se debe trombolizar",
    "Evita hipotensión y reposición con soluciones hipotónicas"
  ]
},
{
  "id": "he-eap",
  "group": "Emergencia hipertensiva",
  "name": "Edema agudo de pulmón hipertensivo",
  "aka": "edema agudo pulmon eap scape insuficiencia cardiaca hipertensiva",
  "page": "Fuente: Guía colombiana · ESC 2021/2023 IC · ACC/AHA/HFSA 2022 IC",
  "sub": "Congestión pulmonar súbita con PA elevada (fenotipo de redistribución más que de sobrecarga).",
  "base": [
    "ESC 2021/2023 IC"
  ],
  "flow": [
    [
      "Ventila",
      "VNI (CPAP/BiPAP) temprana"
    ],
    [
      "Vasodilata",
      "Nitroglicerina en dosis altas"
    ],
    [
      "Diurético",
      "Furosemida IV"
    ]
  ],
  "criteria": [
    "Sienta al paciente; el vasodilatador es el pilar, el diurético el complemento."
  ],
  "orders": [
    {
      "d": "Ventilación no invasiva",
      "dose": "CPAP 5–10 cmH₂O o BiPAP (IPAP 10–15 / EPAP 5–8), FiO₂ para SatO₂ 94–98 %"
    },
    {
      "d": "Nitroglicerina",
      "dose": "0,4–0,8 mg SL c/5 min mientras se prepara; IV desde 10–20 mcg/min, subir rápido hasta 100–200 mcg/min",
      "dil": "50 mg en 250 mL DAD5 % = 200 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 20,
        "hi": 200,
        "conc": 200
      }
    },
    {
      "d": "Furosemida",
      "dose": "40 mg IV (o 1–2,5 veces su dosis oral diaria si ya la tomaba)"
    },
    {
      "d": "Nitroprusiato (refractario)",
      "dose": "0,3–5 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.3,
        "hi": 5,
        "conc": 200
      }
    }
  ],
  "goals": [
    "PAS −25 % en las primeras horas",
    "Mejoría de la disnea y la SatO₂; evitar intubación"
  ],
  "alerts": [
    "Busca SCA como desencadenante (ECG, troponina)",
    "No nitratos con PAS < 90 o inhibidores de PDE-5 recientes"
  ]
},
{
  "id": "he-aorta",
  "group": "Emergencia hipertensiva",
  "name": "Disección aguda de aorta",
  "aka": "diseccion aortica aorta dolor desgarrante stanford",
  "page": "Fuente: ACC/AHA 2022 aorta · ESC 2024 aorta",
  "sub": "Dolor súbito desgarrante, asimetría de pulsos o PA, mediastino ancho. Diagnóstico con angioTAC.",
  "base": [
    "ACC/AHA 2022 aorta"
  ],
  "flow": [
    [
      "Primero",
      "Betabloqueador IV (FC < 60)"
    ],
    [
      "Después",
      "Vasodilatador si PA persiste alta"
    ],
    [
      "20 min",
      "PAS 100–120 mmHg"
    ],
    [
      "Definitivo",
      "Tipo A: cirugía urgente"
    ]
  ],
  "criteria": [
    "Nunca un vasodilatador solo antes del betabloqueador (taquicardia refleja aumenta el estrés de pared).",
    "Analgesia adecuada reduce la descarga adrenérgica."
  ],
  "orders": [
    {
      "d": "Esmolol",
      "dose": "Bolo 500 mcg/kg en 1 min, luego 50–300 mcg/kg/min",
      "dil": "2500 mg en 250 mL = 10 000 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 50,
        "hi": 300,
        "conc": 10000
      }
    },
    {
      "d": "o Labetalol",
      "dose": "20 mg IV, luego 20–80 mg c/10 min (máx 300 mg) o 0,5–2 mg/min",
      "calc": {
        "t": "min",
        "lo": 0.5,
        "hi": 2,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "Nitroprusiato (después del betabloqueo)",
      "dose": "0,3–5 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.3,
        "hi": 5,
        "conc": 200
      }
    },
    {
      "d": "Analgesia",
      "dose": "Fentanilo 25–50 mcg IV o morfina 2–4 mg IV, titular"
    },
    {
      "d": "Interconsulta urgente a cirugía cardiovascular",
      "n": "Reserva de hemoderivados, 2 accesos gruesos, línea arterial en el brazo con mayor PA."
    }
  ],
  "goals": [
    "FC < 60 lpm",
    "PAS 100–120 mmHg en 20 min"
  ],
  "alerts": [
    "Contraindica antitrombóticos: descarta disección antes de tratar como SCA",
    "Si hay insuficiencia aórtica grave o taponamiento, el betabloqueo puede ser deletéreo"
  ]
},
{
  "id": "he-sca",
  "group": "Emergencia hipertensiva",
  "name": "SCA con PA elevada",
  "aka": "sindrome coronario hipertension nitroglicerina",
  "page": "Fuente: Guía colombiana · ESC 2023 SCA · ACC/AHA 2025 HTA",
  "sub": "Isquemia miocárdica con crisis hipertensiva: reduce poscarga y consumo de O₂.",
  "base": [
    "ACC/AHA",
    "ESC"
  ],
  "flow": [
    [
      "Vasodilata",
      "Nitroglicerina IV"
    ],
    [
      "FC",
      "Betabloqueador si no hay IC"
    ],
    [
      "Meta",
      "PAS < 140"
    ]
  ],
  "criteria": [
    "Maneja el SCA según su ficha (IAMCEST / SCASEST)."
  ],
  "orders": [
    {
      "d": "Nitroglicerina",
      "dose": "5–10 mcg/min, subir 5–10 c/3–5 min · máx 200 mcg/min",
      "dil": "200 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 5,
        "hi": 200,
        "conc": 200
      }
    },
    {
      "d": "Esmolol o metoprolol IV",
      "dose": "Metoprolol 2,5–5 mg IV c/5 min (máx 15 mg)",
      "n": "Evita en IC, bajo gasto, BAV o consumo de cocaína."
    }
  ],
  "goals": [
    "PAS < 140 mmHg",
    "Resolución del dolor"
  ],
  "alerts": [
    "Cocaína: benzodiazepinas + nitratos; evita betabloqueador no selectivo"
  ]
},
{
  "id": "he-eclamp",
  "group": "Emergencia hipertensiva",
  "name": "Preeclampsia grave / eclampsia",
  "aka": "eclampsia preeclampsia embarazo sulfato de magnesio hellp",
  "page": "Fuente: Guía colombiana · ACOG 2020 · FLASOG",
  "sub": "≥ 20 semanas o posparto, PA ≥ 160/110 sostenida (15 min) o signos de gravedad; eclampsia si hay convulsión.",
  "base": [
    "ACOG",
    "FLASOG"
  ],
  "flow": [
    [
      "Neuroprotección",
      "Sulfato de magnesio"
    ],
    [
      "PA",
      "Tratar en < 30–60 min si ≥ 160/110"
    ],
    [
      "Meta",
      "140–150 / 90–100"
    ],
    [
      "Definitivo",
      "Terminación del embarazo según obstetricia"
    ]
  ],
  "criteria": [
    "Laboratorios: hemograma, plaquetas, transaminasas, LDH, creatinina, ácido úrico, proteinuria, frotis (HELLP)."
  ],
  "orders": [
    {
      "cat": "Sulfato de magnesio (ampolla 20 % = 2 g/10 mL)"
    },
    {
      "d": "Carga",
      "dose": "4 g IV en 15–20 min (20 mL al 20 % en 80 mL SSN)",
      "n": "Si convulsión recurrente: 2 g IV adicionales."
    },
    {
      "d": "Mantenimiento",
      "dose": "1–2 g/h × 24 h (posparto o última convulsión)",
      "dil": "10 g (50 mL al 20 %) en 450 mL SSN = 20 mg/mL",
      "calc": {
        "t": "h",
        "lo": 1,
        "hi": 2,
        "conc": 0.02,
        "unit": "g"
      }
    },
    {
      "cat": "Antihipertensivo (uno)"
    },
    {
      "d": "Labetalol",
      "dose": "20 mg IV en 2 min → 40 mg a los 10 min → 80 mg c/10 min · máx 300 mg"
    },
    {
      "d": "o Hidralazina",
      "dose": "5–10 mg IV en 2 min, repetir 10 mg c/20 min · máx 30 mg"
    },
    {
      "d": "o Nifedipino de liberación inmediata",
      "dose": "10 mg VO, repetir 20 mg a los 20 min, luego 20 mg a los 20 min",
      "n": "Vía oral, no sublingual."
    }
  ],
  "goals": [
    "PA 140–150 / 90–100",
    "Reflejos presentes, FR > 12, diuresis > 30 mL/h (vigilancia del magnesio)"
  ],
  "alerts": [
    "Toxicidad por magnesio: suspender y gluconato de calcio 10 % 10 mL IV en 3–5 min",
    "Reducir mantenimiento de magnesio si creatinina elevada",
    "Labetalol contraindicado en asma y bloqueos"
  ]
},
{
  "id": "ica",
  "group": "Insuficiencia cardíaca",
  "name": "Insuficiencia cardíaca aguda",
  "aka": "ica ic descompensada congestion edema bajo gasto choque cardiogenico perfil",
  "page": "Fuente: Guía colombiana · ESC 2021 IC + actualización 2023 · ACC/AHA/HFSA 2022 IC",
  "sub": "Define el perfil: congestión (húmedo/seco) y perfusión (caliente/frío).",
  "base": [
    "ESC 2021/2023 IC"
  ],
  "flow": [
    [
      "Húmedo-caliente",
      "Diurético ± vasodilatador"
    ],
    [
      "Húmedo-frío",
      "Inotrópico ± vasopresor"
    ],
    [
      "Seco-frío",
      "Volumen con cautela"
    ],
    [
      "2–6 h",
      "Evalúa respuesta diurética"
    ]
  ],
  "criteria": [
    "Busca desencadenantes (CHAMPIT): SCA, crisis hipertensiva, arritmia, causa mecánica, TEP, infección, taponamiento; además mala adherencia y AINE.",
    "Laboratorios: péptido natriurético, troponina, función renal, electrolitos, hemograma, gases si hay dificultad respiratoria."
  ],
  "orders": [
    {
      "cat": "Medidas generales"
    },
    {
      "d": "Cabecera elevada, O₂ si SatO₂ < 90 %, VNI si dificultad respiratoria",
      "n": "Dieta hiposódica, balance hídrico estricto, peso diario, sonda vesical solo si es necesaria."
    },
    {
      "cat": "Congestión"
    },
    {
      "d": "Furosemida",
      "dose": "Sin diurético previo: 20–40 mg IV · con diurético: 1–2,5 veces la dosis oral diaria total, IV",
      "n": "A las 2 h: Na urinario < 50–70 mEq/L o diuresis < 100–150 mL/h en 6 h → duplicar la dosis."
    },
    {
      "d": "Nitroglicerina (si PAS > 110)",
      "dose": "10–20 mcg/min, titular hasta 200 mcg/min",
      "dil": "200 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 10,
        "hi": 200,
        "conc": 200
      }
    },
    {
      "cat": "Hipoperfusión"
    },
    {
      "d": "Dobutamina",
      "dose": "2–20 mcg/kg/min",
      "dil": "250 mg en 250 mL = 1000 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 2,
        "hi": 20,
        "conc": 1000
      }
    },
    {
      "d": "Noradrenalina (si PAM < 65)",
      "dose": "0,05–0,5 mcg/kg/min",
      "dil": "4 mg en 250 mL DAD5 % = 16 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.5,
        "conc": 16
      }
    },
    {
      "cat": "Otros"
    },
    {
      "d": "Enoxaparina (tromboprofilaxis)",
      "dose": "40 mg SC c/24 h (ClCr < 30: 20 mg)"
    },
    {
      "d": "Reposición de K⁺ y Mg²⁺",
      "dose": "Meta K⁺ 4–5 mEq/L, Mg²⁺ > 2 mg/dL"
    },
    {
      "d": "Terapia de base (IECA/ARA-II/ARNI, BB, ARM, iSGLT2)",
      "n": "Continúa si no hay shock, hipotensión sintomática ni hiperpotasemia; reduce BB en bajo gasto."
    }
  ],
  "goals": [
    "Diuresis > 100–150 mL/h las primeras 6 h, Na urinario > 50–70 mEq/L",
    "Euvolemia antes del egreso"
  ],
  "alerts": [
    "Shock cardiogénico: busca IAM y activa hemodinamia",
    "Monitorea creatinina: un alza leve con buena descongestión es aceptable"
  ],
  "rel": [
    "r-cardio"
  ]
},
{
  "id": "tvp",
  "group": "Tromboembolia venosa",
  "name": "Trombosis venosa profunda",
  "aka": "tvp trombosis venosa profunda anticoagulacion rivaroxaban apixaban",
  "page": "Fuente: ASH 2020 · CHEST 2021",
  "sub": "TVP confirmada por ecografía (o alta sospecha mientras se confirma, si el riesgo hemorrágico es bajo).",
  "base": [
    "ASH 2020",
    "CHEST 2021"
  ],
  "flow": [
    [
      "Confirma",
      "Wells + dímero D / eco doppler"
    ],
    [
      "Anticoagula",
      "Anticoagulante oral directo o HBPM"
    ],
    [
      "Duración",
      "≥ 3 meses; extender si provocada persistente o no provocada"
    ]
  ],
  "criteria": [
    "Busca TEP si hay disnea, taquicardia o dolor pleurítico.",
    "Cáncer activo: anticoagulante oral directo o HBPM; embarazo: HBPM."
  ],
  "orders": [
    {
      "d": "Rivaroxabán",
      "dose": "15 mg VO c/12 h × 21 días, luego 20 mg c/24 h con comida"
    },
    {
      "d": "o Apixabán",
      "dose": "10 mg VO c/12 h × 7 días, luego 5 mg c/12 h"
    },
    {
      "d": "o Enoxaparina",
      "dose": "1 mg/kg SC c/12 h (ClCr < 30: c/24 h)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "por dosis"
      }
    },
    {
      "d": "o Heparina no fraccionada (ClCr < 30, procedimiento cercano, riesgo de sangrado)",
      "dose": "80 U/kg IV bolo, luego 18 U/kg/h; TTPa 1,5–2,5 veces",
      "dil": "25 000 U en 250 mL SSN = 100 U/mL",
      "calc": {
        "t": "kgh",
        "lo": 18,
        "hi": 18,
        "conc": 100,
        "unit": "U"
      }
    },
    {
      "d": "Deambulación precoz y medias de compresión según síntomas"
    }
  ],
  "goals": [
    "Anticoagulación terapéutica desde el primer día",
    "Plan de duración definido al egreso"
  ],
  "alerts": [
    "Anticoagulantes orales directos no se recomiendan en SAF triple positivo ni ClCr < 15–30",
    "Rivaroxabán 15/20 mg debe tomarse con comida"
  ],
  "rel": [
    "c-wellstvp",
    "mi-etv"
  ]
}
];
