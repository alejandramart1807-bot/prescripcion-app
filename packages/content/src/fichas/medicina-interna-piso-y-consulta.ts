// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "mi-hta",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Cardiovascular",
  "name": "HTA: hospitalización tras emergencia y manejo crónico",
  "aka": "hipertension arterial cronica piso consulta losartan amlodipino resistente espironolactona doxazosina nifedipino",
  "page": "Fuente: Guía colombiana · AHA/ACC 2025 HTA · ESC 2024",
  "sub": "Transición a vía oral tras controlar la emergencia hipertensiva y plan ambulatorio.",
  "flow": [
    [
      "12–24 h en meta",
      "Iniciar orales y desmontar infusión"
    ],
    [
      "Daño de órgano",
      "Estudiar y estabilizar"
    ],
    [
      "¿Secundaria?",
      "< 40 años, resistente, hipoK, inicio brusco"
    ],
    [
      "Consulta",
      "Meta < 130/80; combinación en estadio 2"
    ]
  ],
  "criteria": [
    "La urgencia hipertensiva sin daño de órgano NO requiere hospitalización.",
    "AHA 2025: elevada 120–129/< 80 · estadio 1 130–139/80–89 · estadio 2 ≥ 140/90. Confirma fuera del consultorio (MAPA o automonitoreo)."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Dieta hiposódica",
      "dose": "≤ 2 g de sodio/día"
    },
    {
      "d": "Transición a vía oral",
      "dose": "Amlodipino 5–10 mg c/24 h + losartán 50–100 mg c/24 h, mientras se desmonta la infusión",
      "a": "Enalapril 10–20 mg c/12 h; hidroclorotiazida o clortalidona 12,5–25 mg/día."
    },
    {
      "d": "Monitoreo",
      "dose": "PA c/15 min con infusión → c/1 h → c/4 h · estado neurológico · diuresis"
    },
    {
      "d": "Daño de órgano",
      "n": "Cr, K, Na, uroanálisis, troponina, ECG, fondo de ojo, hemograma con extendido + LDH/haptoglobina (microangiopatía), ecocardiograma; TAC si síntomas neurológicos."
    },
    {
      "d": "HTA secundaria",
      "n": "Aldosterona/renina, Doppler renal, metanefrinas si paroxismos, apnea del sueño, TSH, fármacos (AINE, anticonceptivos, cocaína)."
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h (salvo HIC o disección)"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Primera línea",
      "dose": "IECA o ARA-II + calcioantagonista dihidropiridínico o diurético tipo tiazida; titular c/2–4 semanas hasta meta en ≤ 3 meses",
      "n": "Estadio 2: combinación desde el inicio, idealmente en una tableta."
    },
    {
      "d": "HTA resistente (≥ 3 fármacos con diurético)",
      "dose": "Espironolactona 25–50 mg/día",
      "n": "Verifica adherencia y técnica; descarta causa secundaria."
    },
    {
      "d": "Dosis máximas que se preguntan",
      "dose": "Nifedipino liberación prolongada: 90 mg/día (hasta 120 según producto) · doxazosina: 16 mg/día en HTA, 8 mg/día en HPB",
      "n": "Doxazosina: vigilar PA 6 h tras la primera dosis y cada aumento. Nifedipino de liberación inmediata no para descenso agudo."
    },
    {
      "d": "Laboratorios de seguimiento",
      "n": "Cr, K a las 2–4 semanas de iniciar IECA/ARA-II/diurético; basales: TFG, K, Na, glucosa/HbA1c, lípidos, relación albúmina/creatinina, ECG."
    }
  ],
  "goals": [
    "< 130/80 en la mayoría (ESC: sistólica 120–129 si se tolera)",
    "Control mensual hasta la meta"
  ],
  "alerts": [
    "Embarazo: labetalol, nifedipino, metildopa; IECA/ARA-II contraindicados",
    "Alta: PA controlada 24 h con orales y cita en ≤ 1 semana"
  ],
  "rel": [
    "he-general"
  ],
  "g": {
    "co": {
      "n": "GPC Hipertensión arterial primaria, MinSalud (actualización 2017)",
      "y": "2017",
      "st": "old",
      "txt": "Usa Framingham ajustado × 0,75 para riesgo; se complementa con AHA/ACC 2025 y ESC 2024."
    },
    "intl": "AHA/ACC 2025 HTA · ESC 2024",
    "dif": [
      "Losartán, enalapril, amlodipino, HCTZ y clortalidona en el PBS; combinaciones fijas con disponibilidad variable."
    ]
  }
},
{
  "id": "mi-fa",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Cardiovascular",
  "name": "FA en piso: meta de frecuencia y anticoagulación (incluida 'FA valvular')",
  "aka": "fibrilacion auricular piso meta frecuencia leniente race ii valvular warfarina estenosis mitral protesis mecanica",
  "page": "Fuente: Guía colombiana · ACC/AHA/ACCP/HRS 2023 · ESC 2024",
  "sub": "Control leniente como estrategia inicial y la única 'FA valvular' que cambia el anticoagulante.",
  "flow": [
    [
      "¿Inestable?",
      "Cardioversión, no una cifra"
    ],
    [
      "FEVI > 40 %",
      "BB, diltiazem/verapamilo o digoxina"
    ],
    [
      "FEVI ≤ 40 %",
      "BB y/o digoxina"
    ],
    [
      "Meta",
      "< 110 lpm; < 80 si síntomas, FEVI ↓ o taquimiocardiopatía"
    ]
  ],
  "criteria": [
    "RACE II: la diferencia real de FC entre brazos fue ~10 lpm y la IC estuvo subrepresentada.",
    "'FA valvular' operativa = estenosis mitral reumática moderada-grave o prótesis mecánica → warfarina. Todo lo demás: ACOD según CHA₂DS₂-VASc/VA."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Control de frecuencia",
      "dose": "Metoprolol tartrato 25–50 mg VO c/8–12 h titulado",
      "a": "Diltiazem 30–60 mg VO c/6–8 h (FEVI > 40 %); digoxina 0,125–0,25 mg/día (ajustar a TFG)."
    },
    {
      "d": "Anticoagulación (no valvular)",
      "dose": "Apixabán 5 mg c/12 h o rivaroxabán 20 mg/día con comida",
      "n": "Apixabán 2,5 mg si ≥ 2 de: ≥ 80 años, ≤ 60 kg, Cr ≥ 1,5; rivaroxabán 15 mg si ClCr 15–49."
    },
    {
      "d": "Estenosis mitral reumática moderada-grave o prótesis mecánica",
      "dose": "Warfarina con puente de enoxaparina 1 mg/kg c/12 h hasta INR en meta 2 días",
      "n": "INR 2–3 (prótesis mitral o factores de riesgo: 2,5–3,5). ACOD contraindicados (RE-ALIGN, PROACT Xa).",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "enoxaparina"
      }
    },
    {
      "d": "Bioprótesis o TAVI < 3 meses",
      "dose": "Razonable warfarina; luego ACOD"
    },
    {
      "d": "Estudios",
      "n": "Ecocardiograma, TSH, electrolitos, función renal y hepática, hemograma."
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Reevaluar síntomas y FEVI",
      "n": "Si persisten síntomas a < 110 lpm: meta < 80 en reposo y < 110 en ejercicio; considerar control del ritmo o ablación."
    }
  ],
  "goals": [
    "FC en reposo < 110 lpm (leniente)",
    "Anticoagulante apropiado según la válvula"
  ],
  "alerts": [
    "Verapamilo y diltiazem contraindicados en FEVI ≤ 40 % y WPW",
    "Insuficiencia mitral severa o estenosis aórtica NO son 'FA valvular'"
  ],
  "rel": [
    "fa-24",
    "fa-mas24",
    "fa-inest",
    "c-cha2ds2",
    "c-hasbled"
  ],
  "g": {
    "co": {
      "n": "Guías de FA de la Sociedad Colombiana de Cardiología",
      "y": "2012",
      "st": "old",
      "txt": "Se complementan con ACC/AHA/ACCP/HRS 2023 y ESC 2024."
    },
    "intl": "ACC/AHA/ACCP/HRS 2023 · ESC 2024 · RACE II",
    "dif": []
  }
},
{
  "id": "mi-etv",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Cardiovascular",
  "name": "TVP/TEP en piso y duración de la anticoagulación",
  "aka": "tvp tep etv piso anticoagulacion duracion provocado no provocado apixaban saf",
  "page": "Fuente: AHA/ACC 2026 TEP · CHEST 2021",
  "sub": "Órdenes del TEP categoría C estable y decisión de duración según provocación.",
  "flow": [
    [
      "Hospitalizado",
      "Enoxaparina → ACOD a las 48–72 h si estable"
    ],
    [
      "Transitorio mayor",
      "3 meses"
    ],
    [
      "No provocado o persistente",
      "Extendido si bajo riesgo de sangrado"
    ],
    [
      "Cáncer / SAF",
      "Mientras activo / warfarina"
    ]
  ],
  "criteria": [
    "Deterioro (hipotensión, ↑ lactato) = recategorizar D/E (ver ficha TEP)."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Deambulación temprana una vez anticoagulado",
      "n": "El reposo no reduce la embolización."
    },
    {
      "d": "Enoxaparina",
      "dose": "1 mg/kg SC c/12 h",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "por dosis"
      },
      "n": "Paso a ACOD a las 48–72 h: apixabán 10 mg c/12 h × 7 días → 5 mg c/12 h, o rivaroxabán 15 mg c/12 h × 21 días → 20 mg/día.",
      "a": "Warfarina con superposición ≥ 5 días e INR 2–3 por 24 h."
    },
    {
      "d": "Monitor cardíaco 24–48 h (categoría C/D)"
    },
    {
      "d": "Laboratorios",
      "n": "Plaquetas día 0 y c/2–3 días si heparina (TIH días 5–10), Cr, hepáticas, troponina y BNP basales."
    },
    {
      "d": "Ecocardiograma (VD) y Doppler venoso"
    },
    {
      "d": "Analgesia con paracetamol (evitar AINE)"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Duración",
      "dose": "Transitorio mayor: 3 meses · menor: 3–6 meses · no provocado/persistente: extendido (tras 6 meses: apixabán 2,5 mg c/12 h o rivaroxabán 10 mg/día)",
      "n": "Cáncer activo: mientras esté activo. SAF triple positivo: warfarina indefinida."
    },
    {
      "d": "Búsqueda de cáncer limitada",
      "n": "Historia, examen, hemograma, bioquímica, Rx de tórax y tamizajes por edad; no TAC extenso."
    },
    {
      "d": "Trombofilia no rutinaria",
      "n": "Antifosfolípidos si joven no provocado, trombosis arterial, recurrente o pérdidas gestacionales."
    },
    {
      "d": "Disnea a 3–6 meses",
      "n": "Ecocardiograma + gammagrafía V/Q (HPTEC)."
    }
  ],
  "goals": [
    "Anticoagulante ENTREGADO por la EPS antes de salir",
    "Cita en ≤ 1 semana"
  ],
  "alerts": [
    "Profilaxis en hospitalizados: Padua ≥ 4 sin alto riesgo de sangrado → enoxaparina 40 mg/día"
  ],
  "rel": [
    "tep",
    "tvp",
    "c-padua"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AHA/ACC 2026 TEP · CHEST 2021 · ASH 2020",
    "dif": [
      "Clínicas de anticoagulación en muchas EPS para control de INR."
    ]
  }
},
{
  "id": "mi-sincope",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Cardiovascular",
  "name": "Síncope: alto riesgo en piso y manejo ambulatorio",
  "aka": "sincope desmayo vasovagal ortostatico arritmico holter telemetria",
  "page": "Fuente: ESC 2018 síncope · ACC/AHA/HRS 2017",
  "sub": "Estratifica: el reflejo de bajo riesgo se va a casa; el de alto riesgo se monitoriza.",
  "flow": [
    [
      "Bajo riesgo + ECG normal",
      "Alta con educación"
    ],
    [
      "Alto riesgo",
      "Telemetría 24–48 h + estudio"
    ],
    [
      "Reflejo",
      "Contrapresión, agua y sal"
    ],
    [
      "Ortostático",
      "Retirar fármacos; midodrina/fludrocortisona"
    ]
  ],
  "criteria": [
    "Alto riesgo: durante esfuerzo o en decúbito, palpitaciones previas, cardiopatía estructural, historia familiar de muerte súbita, ECG anormal, trauma grave, Hb < 9.",
    "Síncope + soplo sistólico = descartar estenosis aórtica. No TAC ni EEG de rutina."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Telemetría continua 24–48 h",
      "n": "Signos vitales c/4 h y ortostatismo diario; levantarse acompañado."
    },
    {
      "d": "Suspender fármacos que alarguen QT, hipotensores o bradicardizantes"
    },
    {
      "d": "Laboratorios",
      "n": "K, Mg, Ca, Hb, troponina seriada, glucemia, BNP si sospecha de cardiopatía."
    },
    {
      "d": "Estudios",
      "n": "ECG seriados, ecocardiograma, Holter, prueba de esfuerzo si fue de esfuerzo, masaje del seno carotídeo en > 40 años sin soplo."
    },
    {
      "d": "Terapia definitiva",
      "n": "Marcapasos si BAV Mobitz II, completo o bloqueo alternante; DAI según cardiopatía o canalopatía."
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Reflejo (vasovagal)",
      "dose": "Maniobras de contrapresión + 2–3 L de agua/día y sal (si no hay HTA)",
      "a": "Fludrocortisona 0,1 mg/día en jóvenes con PA baja."
    },
    {
      "d": "Hipotensión ortostática",
      "dose": "Medias de compresión, cabecera elevada 10°; midodrina 2,5–10 mg c/8 h (no al acostarse)",
      "a": "Fludrocortisona 0,1 mg/día."
    },
    {
      "d": "Sospecha arrítmica",
      "n": "Holter 24–48 h si frecuente; monitor de eventos o Holter implantable si infrecuente."
    }
  ],
  "goals": [
    "Causa identificada o riesgo estratificado"
  ],
  "alerts": [
    "Conductores profesionales y síncope arrítmico: restricción hasta tratamiento eficaz"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ESC 2018 síncope · ACC/AHA/HRS 2017",
    "dif": [
      "Tilt test en centros de 3.er nivel; midodrina de disponibilidad variable."
    ]
  }
},
{
  "id": "mi-reversion",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Cardiovascular",
  "name": "Exceso de anticoagulación: a quién revertir y cómo",
  "aka": "reversion anticoagulacion inr alto warfarina vitamina k complejo protrombinico idarucizumab protamina andexanet",
  "page": "Fuente: ACC 2020 ECDP sangrado con anticoagulantes · NEJM 2026 antídotos",
  "sub": "No se revierte por una cifra: solo hemorragia potencialmente mortal, sitio crítico o cirugía emergente.",
  "flow": [
    [
      "1",
      "Suspender y precisar fármaco, dosis y hora"
    ],
    [
      "2",
      "Clasificar sangrado y controlar la fuente"
    ],
    [
      "3",
      "Laboratorio específico (INR, TT, anti-Xa)"
    ],
    [
      "4",
      "Reversor solo si el beneficio supera el riesgo trombótico"
    ],
    [
      "5",
      "Plan de reinicio"
    ]
  ],
  "criteria": [
    "Sitio crítico: intracraneal, espinal, pericárdico, intraocular, retroperitoneal.",
    "Marco 4T (anti-Xa) y 3R (dabigatrán): tipo de sangrado, tiempo desde la última dosis, riesgo trombótico/función renal."
  ],
  "orders": [
    {
      "cat": "Sangrado grave o cirugía urgente"
    },
    {
      "d": "Warfarina",
      "dose": "Vitamina K 10 mg IV + complejo protrombínico 4F: 25 U/kg (INR 2–< 4), 35 U/kg (4–6), 50 U/kg (> 6); topes 2500/3500/5000 U",
      "calc": {
        "t": "ccp"
      },
      "a": "Sin complejo protrombínico: plasma fresco 10–15 mL/kg."
    },
    {
      "d": "Dabigatrán",
      "dose": "Idarucizumab 5 g IV (2 × 2,5 g)",
      "a": "Complejo protrombínico; es dializable."
    },
    {
      "d": "Apixabán / rivaroxabán / edoxabán",
      "dose": "Complejo protrombínico 4F (50 U/kg, uso fuera de ficha)",
      "n": "Andexanet retirado solo de EE. UU. (dic 2025); verifica disponibilidad en Colombia."
    },
    {
      "d": "Heparina no fraccionada",
      "dose": "Protamina 1 mg por cada 100 U circulantes (máx 50 mg, ≤ 5 mg/min)"
    },
    {
      "d": "Enoxaparina",
      "dose": "≤ 8 h: 1 mg de protamina por mg · 8–12 h: 0,5 mg/mg",
      "n": "Neutraliza ~60 %. Fondaparinux no se revierte con protamina."
    },
    {
      "cat": "Warfarina con INR alto sin sangrado"
    },
    {
      "d": "INR < 4,5",
      "dose": "Reducir u omitir una dosis"
    },
    {
      "d": "INR 4,5–10",
      "dose": "Omitir 1–2 dosis; vitamina K 1–2,5 mg VO solo si alto riesgo de sangrado"
    },
    {
      "d": "INR > 10",
      "dose": "Suspender + vitamina K 2,5–5 mg VO"
    }
  ],
  "goals": [
    "Hemostasia",
    "Reinicio planificado del anticoagulante"
  ],
  "alerts": [
    "Vitamina K sola tarda horas: en sangrado grave siempre con complejo protrombínico",
    "rFVIIa no sustituye al complejo protrombínico",
    "Protamina: precaución en alergia al pescado o uso previo de NPH"
  ],
  "rel": [
    "hic",
    "r-coag"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACC 2020 ECDP sangrado con anticoagulantes · NEJM 2026 antídotos · FDA 2025 (andexanet)",
    "dif": [
      "Idarucizumab con disponibilidad limitada; complejo protrombínico en instituciones de alto nivel."
    ]
  }
},
{
  "id": "mi-nac",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Respiratorio",
  "name": "NAC en piso: órdenes, paso a VO y alta",
  "aka": "neumonia nac piso hospitalizacion estabilidad halm paso a via oral",
  "page": "Fuente: Guía colombiana · ATS 2025 · ATS/IDSA 2019",
  "sub": "NAC no severa hospitalizada (CURB-65 ≥ 2, hipoxemia o no tolera VO).",
  "flow": [
    [
      "Ingreso",
      "Betalactámico + macrólido"
    ],
    [
      "Estabilidad (Halm)",
      "Paso a VO"
    ],
    [
      "Duración",
      "3–5 días no severa estable; ≥ 5 severa"
    ],
    [
      "72 h sin mejoría",
      "Complicación o diagnóstico alterno (TB, histoplasma)"
    ]
  ],
  "criteria": [
    "Estabilidad: T ≤ 37,8 °C, FC ≤ 100, FR ≤ 24, PAS ≥ 90, SatO₂ ≥ 90 %, tolera VO, estado mental basal.",
    "Tos > 2 semanas o cavitación: prueba molecular para TB y aislamiento."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Cabecera 30–45°, dieta normal, movilización temprana"
    },
    {
      "d": "Oxígeno",
      "dose": "Meta SatO₂ ≥ 92 % (88–92 % en EPOC)"
    },
    {
      "d": "Ampicilina-sulbactam o ceftriaxona + azitromicina",
      "dose": "Ampicilina-sulbactam 3 g IV c/6 h o ceftriaxona 1 g IV c/24 h + azitromicina 500 mg VO/IV c/24 h × 3 días",
      "a": "Alergia: levofloxacino 750 mg c/24 h."
    },
    {
      "d": "Estudios",
      "n": "Hemocultivos × 2 si severa o riesgo SAMR/Pseudomonas; esputo; antígenos urinarios en severa; panel viral."
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h"
    },
    {
      "d": "Fisioterapia respiratoria"
    },
    {
      "d": "Paso a VO al cumplir estabilidad",
      "dose": "Amoxicilina-clavulanato 875/125 mg c/12 h"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Control 7–10 días tras el alta"
    },
    {
      "d": "Rx de control solo si persisten síntomas o > 50 años fumador (6–8 semanas)"
    },
    {
      "d": "Vacunas antes del alta",
      "n": "Influenza, neumococo, VSR ≥ 60 años; cesación tabáquica."
    }
  ],
  "goals": [
    "Estabilidad clínica ≥ 24 h antes del alta"
  ],
  "alerts": [
    "No corticoide en NAC no severa"
  ],
  "rel": [
    "nac-amb",
    "foco-pulm",
    "c-curb65"
  ],
  "g": {
    "co": {
      "n": "Recomendaciones colombianas de NAC (ACIN)",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con ATS 2025 y ATS/IDSA 2019."
    },
    "intl": "ATS 2025 · ATS/IDSA 2019",
    "dif": [
      "Colombia es endémica para TB e histoplasmosis: piénsalas en la neumonía que no resuelve."
    ]
  }
},
{
  "id": "mi-epoc",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Respiratorio",
  "name": "EPOC en piso y manejo crónico (GOLD)",
  "aka": "epoc piso gold abe lama laba triple oxigeno domiciliario rehabilitacion",
  "page": "Fuente: Guía colombiana · GOLD 2026 · ERS/ATS 2017",
  "sub": "Órdenes de la exacerbación hospitalizada y escalamiento del mantenimiento.",
  "flow": [
    [
      "Piso",
      "Broncodilatadores, prednisona 5 días, O₂ 88–92 %"
    ],
    [
      "Alta",
      "LAMA + LABA, técnica, vacunas"
    ],
    [
      "Sigue exacerbando",
      "Eosinófilos ≥ 100: triple · < 100: azitromicina o roflumilast"
    ],
    [
      "O₂ domiciliario",
      "PaO₂ ≤ 55 o SatO₂ ≤ 88 %, ≥ 15 h/día"
    ]
  ],
  "criteria": [
    "Grupo A: un broncodilatador · B: LAMA + LABA · E: LAMA + LABA (+ CI si eosinófilos ≥ 300)."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Cabecera 45°, dieta fraccionada hiperproteica si desnutrición"
    },
    {
      "d": "Venturi para SatO₂ 88–92 %",
      "n": "Gases 30–60 min tras cada cambio."
    },
    {
      "d": "Salbutamol + ipratropio",
      "dose": "Salbutamol 4 puff (o 2,5 mg nebulizado) c/4–6 h + ipratropio 4 puff (o 0,5 mg) c/6–8 h"
    },
    {
      "d": "Prednisona",
      "dose": "40 mg VO c/24 h × 5 días sin desmonte"
    },
    {
      "d": "Antibiótico si esputo purulento o VNI",
      "dose": "Amoxicilina-clavulanato o doxiciclina VO, o ampicilina-sulbactam IV × 5 días"
    },
    {
      "d": "Enoxaparina 40 mg SC c/24 h · glucometría si diabético"
    },
    {
      "d": "Fisioterapia y movilización temprana; consejería de tabaco y humo de leña"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Mantenimiento",
      "dose": "LAMA + LABA (p. ej., tiotropio/olodaterol) c/24 h",
      "a": "Triple terapia si eosinófilos ≥ 100 y sigue exacerbando; azitromicina 250 mg/día si < 100 (exfumador)."
    },
    {
      "d": "Rehabilitación pulmonar en las 4 semanas siguientes"
    },
    {
      "d": "Vacunas",
      "n": "Influenza, neumococo, VSR, COVID, Tdap."
    }
  ],
  "goals": [
    "Estable 12–24 h con broncodilatador c/4 h o menos",
    "Control en 1–4 semanas"
  ],
  "alerts": [
    "En altura (Bogotá) interpreta la oximetría con valores de referencia locales"
  ],
  "rel": [
    "epoc"
  ],
  "g": {
    "co": {
      "n": "GPC EPOC, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con GOLD 2026."
    },
    "intl": "GOLD 2026 · ERS/ATS 2017",
    "dif": [
      "Humo de leña es causa frecuente en Colombia (PREPOCOL)."
    ]
  }
},
{
  "id": "mi-tb",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Respiratorio",
  "name": "Tuberculosis en piso y tratamiento supervisado",
  "aka": "tuberculosis piso aislamiento taes contactos tb latente isoniazida",
  "page": "Fuente: Guía colombiana · OMS 2024–2025 · ATS/CDC/ERS/IDSA",
  "sub": "Órdenes de hospitalización, programa y seguimiento.",
  "flow": [
    [
      "Aislamiento",
      "≥ 2 semanas de tratamiento eficaz + mejoría"
    ],
    [
      "HRZE",
      "Supervisado, dosis fija por peso"
    ],
    [
      "2.º mes",
      "Baciloscopia + → cultivo y sensibilidad"
    ],
    [
      "Contactos",
      "TB latente en < 5 años, VIH, inmunosuprimidos"
    ]
  ],
  "criteria": [
    "Hospitalizar: meníngea, miliar, pericárdica, hemoptisis, insuficiencia respiratoria, desnutrición grave, reacción adversa grave, TB resistente."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Aislamiento respiratorio",
      "n": "N95 para el personal; mascarilla quirúrgica al paciente."
    },
    {
      "d": "Dieta hiperproteica e hipercalórica"
    },
    {
      "d": "HRZE en dosis fija combinada",
      "dose": "Según peso (55–70 kg: 4 tabletas) VO c/24 h en ayunas, supervisado",
      "calc": {
        "t": "table",
        "rows": [
          [
            40,
            "2 tabletas/día"
          ],
          [
            55,
            "3 tabletas/día"
          ],
          [
            71,
            "4 tabletas/día"
          ],
          [
            999,
            "5 tabletas/día"
          ]
        ]
      }
    },
    {
      "d": "Piridoxina",
      "dose": "25–50 mg/día si factor de riesgo"
    },
    {
      "d": "Laboratorios basales",
      "n": "Hepáticas, Cr, ácido úrico, hemograma, HbA1c, VIH, hepatitis B y C; agudeza visual y colores (etambutol)."
    },
    {
      "d": "Notificación, inscripción en el programa y estudio de contactos"
    },
    {
      "d": "Coinfección VIH",
      "n": "TAR en ≤ 2 semanas (meníngea: 4–8 semanas); TMP-SMX profiláctico; dolutegravir 50 mg c/12 h con rifampicina."
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Control médico mensual",
      "n": "Peso, adherencia, reacciones adversas; baciloscopias según Res. 227."
    },
    {
      "d": "TB latente en contactos de riesgo",
      "dose": "Isoniazida 300 mg/día × 6–9 meses + piridoxina",
      "a": "3HP o 4R según disponibilidad del programa."
    }
  ],
  "goals": [
    "Curación o tratamiento terminado"
  ],
  "alerts": [
    "Hepatitis: suspender y reintroducir escalonado",
    "Neuritis óptica: suspender etambutol"
  ],
  "rel": [
    "tb"
  ],
  "g": {
    "co": {
      "n": "Resolución 227 de 2020 (Programa Nacional de TB), MinSalud",
      "y": "2020",
      "st": "ok",
      "txt": "Referencia nacional vigente."
    },
    "intl": "OMS 2024–2025 · ATS/CDC/ERS/IDSA",
    "dif": [
      "Medicamentos gratuitos por el programa."
    ]
  }
},
{
  "id": "mi-derrame",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Respiratorio",
  "name": "Derrame pleural: toracocentesis y criterios de Light",
  "aka": "derrame pleural toracocentesis light exudado transudado pseudoexudado gradiente albumina ada",
  "page": "Fuente: BTS 2023 enfermedad pleural · Light 1972",
  "sub": "Qué pedir en la toracocentesis y cómo no equivocarse con el pseudoexudado por diuréticos.",
  "flow": [
    [
      "1",
      "Proteína y LDH pareadas (pleural + sérica)"
    ],
    [
      "Light",
      "Exudado si cumple ≥ 1 de 3"
    ],
    [
      "IC/cirrosis con diurético",
      "Gradiente de albúmina > 1,2 → transudado"
    ],
    [
      "Exudado",
      "pH, glucosa, diferencial, Gram/cultivo, citología, ADA"
    ]
  ],
  "criteria": [
    "Light: proteína P/S > 0,5 · LDH P/S > 0,6 · LDH pleural > 2/3 del límite superior sérico.",
    "Neutrofílico: paraneumónico, TEP. Linfocítico: maligno, TB (ADA alta), IC crónica, linfoma."
  ],
  "orders": [
    {
      "cat": "Toracocentesis diagnóstica"
    },
    {
      "d": "Muestra pleural",
      "n": "Proteína, LDH, albúmina, glucosa, pH (jeringa de gases), recuento y diferencial, Gram y cultivo (frascos de hemocultivo), citología, ADA; NT-proBNP pleural si sospecha cardíaca."
    },
    {
      "d": "Muestra sérica pareada",
      "n": "Proteína, LDH, albúmina, glucosa."
    },
    {
      "d": "Evacuadora",
      "dose": "Máx 1–1,5 L por sesión",
      "n": "Suspender si tos, dolor o disnea (edema de reexpansión)."
    },
    {
      "cat": "Según el resultado"
    },
    {
      "d": "Paraneumónico complicado o empiema (pH < 7,2, glucosa < 60, pus o Gram +)",
      "dose": "Tubo de tórax + antibiótico (ampicilina-sulbactam 3 g IV c/6 h)",
      "a": "Ceftriaxona + metronidazol."
    },
    {
      "d": "Transudado",
      "n": "Trata la causa sistémica (IC, cirrosis, nefrosis)."
    }
  ],
  "goals": [
    "Clasificación correcta y conducta según causa"
  ],
  "alerts": [
    "Light es muy sensible y poco específico: sobrediagnostica exudados, nunca pierde uno verdadero"
  ],
  "rel": [
    "r-pleural"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BTS 2023 enfermedad pleural · Light 1972",
    "dif": [
      "TB pleural frecuente en Colombia: ADA en todo exudado linfocítico."
    ]
  }
},
{
  "id": "mi-cirrosis",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Digestivo",
  "name": "Cirrosis descompensada en piso y seguimiento",
  "aka": "cirrosis descompensada ascitis diureticos espironolactona furosemida paracentesis carvedilol meld trasplante",
  "page": "Fuente: Baveno VII · AASLD 2021/2024",
  "sub": "Órdenes de ingreso del cirrótico descompensado y profilaxis a largo plazo.",
  "flow": [
    [
      "Todo ingreso con ascitis",
      "Paracentesis diagnóstica"
    ],
    [
      "Ascitis",
      "Sodio 2 g + espironolactona:furosemida 100:40"
    ],
    [
      "Várices",
      "Carvedilol"
    ],
    [
      "MELD-Na ≥ 15",
      "Evaluación para trasplante"
    ]
  ],
  "criteria": [
    "Tamiza infección en toda descompensación (hemocultivos, uroanálisis, Rx de tórax).",
    "GASA ≥ 1,1 = hipertensión portal."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Dieta",
      "dose": "35 kcal/kg/día, proteína 1,2–1,5 g/kg/día, sodio 2 g/día, refrigerio nocturno",
      "n": "No restringir líquidos salvo Na < 125."
    },
    {
      "d": "Paracentesis diagnóstica",
      "n": "Citoquímico, PMN, albúmina (GASA), cultivo en frascos de hemocultivo."
    },
    {
      "d": "Paracentesis evacuadora > 5 L",
      "dose": "Albúmina 20 % 6–8 g por litro extraído"
    },
    {
      "d": "Diuréticos",
      "dose": "Espironolactona 100 mg + furosemida 40 mg/día; subir c/3–5 días hasta 400/160",
      "n": "Meta −0,5 kg/día (−1 kg con edema). Suspender si Na < 125, ↑ Cr, EH o K > 6."
    },
    {
      "d": "Lactulosa si EH o antecedente",
      "dose": "Titulada a 2–3 deposiciones/día",
      "a": "+ rifaximina 550 mg c/12 h si recurre."
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h si plaquetas > 50 000 y sin sangrado",
      "n": "El INR alto no protege."
    },
    {
      "d": "Evitar",
      "n": "AINE, aminoglucósidos, IECA/ARA-II con ascitis, benzodiazepinas; IBP solo con indicación."
    },
    {
      "d": "Control",
      "n": "Peso diario, balance, glucometría c/6 h; Na, K, Cr c/24–48 h; Child-Pugh y MELD-Na."
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Profilaxis de várices",
      "dose": "Carvedilol 6,25 mg/día → 12,5 mg/día",
      "n": "Reducir si PAS < 90, Na < 130 o LRA."
    },
    {
      "d": "Profilaxis de PBE (secundaria)",
      "dose": "Norfloxacino 400 mg/día o ciprofloxacino 500 mg/día",
      "a": "TMP-SMX 160/800 mg/día."
    },
    {
      "d": "Tamizaje de CHC",
      "dose": "Ecografía ± AFP c/6 meses"
    },
    {
      "d": "Causa",
      "n": "Alcohol: baclofeno o acamprosato. VHC: antivirales directos. VHB: tenofovir o entecavir."
    },
    {
      "d": "Vacunas",
      "n": "Hepatitis A y B, neumococo, influenza, COVID."
    }
  ],
  "goals": [
    "Sin sangrado ≥ 72 h, EH resuelta, Cr estable, Na ≥ 125 al alta",
    "Control en 1–2 semanas"
  ],
  "alerts": [
    "Remitir a trasplante con MELD-Na ≥ 15 o primera descompensación"
  ],
  "rel": [
    "eh",
    "pbe",
    "hda-v",
    "shr",
    "c-child",
    "c-meld",
    "r-hepatico",
    "r-ascitis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Baveno VII · AASLD 2021/2024 · EASL 2018",
    "dif": [
      "Carvedilol y norfloxacino en PBS; rifaximina por MIPRES; trasplante hepático en Medellín, Bogotá y Cali."
    ]
  }
},
{
  "id": "mi-diarrea",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Digestivo",
  "name": "Diarrea hospitalizada y diarrea crónica",
  "aka": "diarrea hospitalizada clostridioides difficile diarrea cronica celiaquia strongyloides",
  "page": "Fuente: IDSA 2017 · IDSA/SHEA 2021",
  "sub": "Aislamiento, estudio de la diarrea que se hospitaliza y abordaje de la diarrea ≥ 4 semanas.",
  "flow": [
    [
      "Aguda grave",
      "Aislamiento + reposición + estudio"
    ],
    [
      "Crónica",
      "Acuosa, grasa o inflamatoria"
    ],
    [
      "Banderas rojas",
      "Colonoscopia"
    ],
    [
      "Zona endémica + esteroides",
      "Ivermectina antes"
    ]
  ],
  "criteria": [
    "C. difficile: aislamiento de contacto y lavado con agua y jabón (el alcohol no mata esporas)."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Aislamiento de contacto"
    },
    {
      "d": "Continuar la alimentación + SRO según pérdidas"
    },
    {
      "d": "Lactato de Ringer según déficit; VO en cuanto tolere"
    },
    {
      "d": "Laboratorios",
      "n": "Na, K, Cr, gases venosos, coprológico; coprocultivo si fiebre, disentería o inmunosupresión; toxina/PCR de C. difficile si antibiótico reciente."
    },
    {
      "d": "Notificación",
      "n": "Brote ETA, cólera, fiebre tifoidea."
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Estudio inicial de diarrea crónica",
      "n": "Hemograma, PCR, TSH, electrolitos, anti-transglutaminasa IgA + IgA total, coproscópico seriado, calprotectina."
    },
    {
      "d": "Colitis microscópica",
      "dose": "Budesonida 9 mg/día"
    },
    {
      "d": "Diarrea por ácidos biliares",
      "dose": "Colestiramina 4 g c/8–24 h"
    },
    {
      "d": "Strongyloides (antes de esteroides en zona endémica)",
      "dose": "Ivermectina 200 mcg/kg/día × 2 días",
      "calc": {
        "t": "kg",
        "lo": 0.2,
        "hi": 0.2,
        "unit": "mg"
      }
    }
  ],
  "goals": [
    "Hidratación y electrolitos normales"
  ],
  "alerts": [
    "No loperamida con fiebre, disentería o C. difficile"
  ],
  "rel": [
    "diarrea"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2017 · IDSA/SHEA 2021 · BSG 2018 diarrea crónica",
    "dif": [
      "TB intestinal, amebiasis y Strongyloides deben considerarse en Colombia."
    ]
  }
},
{
  "id": "mi-dm",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Endocrino",
  "name": "Diabetes en piso: insulina basal-bolo",
  "aka": "diabetes hospitalizada insulina basal bolo glargina correccion escala movil hiperglucemia piso",
  "page": "Fuente: Guía colombiana · ADA Standards of Care 2026 (secc. 16)",
  "sub": "DM2 en paciente no crítico: basal-bolo, nunca escala móvil sola. Meta 140–180 mg/dL.",
  "flow": [
    [
      "1",
      "Suspender orales en enfermedad aguda"
    ],
    [
      "2",
      "Dosis total por peso y glucemia"
    ],
    [
      "3",
      "50 % basal / 50 % prandial"
    ],
    [
      "4",
      "Ajuste diario 10–20 %"
    ]
  ],
  "criteria": [
    "Dosis total: 0,2–0,3 U/kg si ≥ 70 años o TFG < 60 · 0,4 U/kg si glucemia 140–200 · 0,5 U/kg si 201–400.",
    "Nada vía oral: solo basal reducida 20–25 % + corrección."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Dieta para diabético con carbohidratos constantes"
    },
    {
      "d": "Suspender",
      "n": "Metformina (contraste, LRA, hipoxia, sepsis), sulfonilureas, iSGLT2 (enfermedad aguda; 3 días antes de cirugía). iDPP-4 pueden seguir."
    },
    {
      "d": "Dosis total de insulina",
      "dose": "0,4–0,5 U/kg/día (0,2–0,3 si ≥ 70 años o TFG < 60)",
      "calc": {
        "t": "tdd",
        "lo": 0.4,
        "hi": 0.5
      }
    },
    {
      "d": "Basal (50 %)",
      "dose": "Glargina SC c/24 h",
      "a": "NPH en 2 dosis (2/3 en la mañana, 1/3 en la noche)."
    },
    {
      "d": "Prandial (50 % en 3 comidas)",
      "dose": "Lispro/aspart antes de comer o regular 30 min antes; omitir si no come"
    },
    {
      "d": "Corrección",
      "dose": "+2 U si 201–250 · +4 U 251–300 · +6 U 301–350 · +8 U > 350",
      "n": "Nunca como única terapia."
    },
    {
      "d": "Glucometría",
      "dose": "Antes de cada comida y al acostarse (c/4–6 h si nada VO)"
    },
    {
      "d": "Ajustes",
      "n": "< 100: bajar basal 10–20 % · < 70: bajar 20–40 % y buscar causa · > 180 persistente: subir 10–20 %. Protocolo de hipoglucemia escrito."
    },
    {
      "d": "Laboratorios y otros",
      "n": "HbA1c si no hay de 3 meses, Cr, K, lípidos; enoxaparina 40 mg/día; revisión de pies; educación en insulina."
    }
  ],
  "goals": [
    "Glucemia 140–180 mg/dL sin hipoglucemia"
  ],
  "alerts": [
    "La HbA1c de ingreso define el esquema de egreso (ver ficha de alta)"
  ],
  "rel": [
    "cad",
    "hipoglu",
    "hiperglu",
    "r-metabolico",
    "mi-dm-alta"
  ],
  "g": {
    "co": {
      "n": "GPC Diabetes mellitus tipo 2, MinSalud",
      "y": "2016",
      "st": "old",
      "txt": "Se complementa con ADA Standards of Care 2026."
    },
    "intl": "ADA Standards of Care 2026 (secc. 16)",
    "dif": [
      "NPH y glargina en PBS."
    ]
  }
},
{
  "id": "mi-dm-alta",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Endocrino",
  "name": "Alta del paciente con diabetes según HbA1c",
  "aka": "alta diabetes egreso hba1c umpierrez insulina basal isglt2 glp1 metformina",
  "page": "Fuente: Guía colombiana · ADA 2026 · Umpierrez, Diabetes Care 2014",
  "sub": "La HbA1c orienta la intensidad; no autoriza el alta por sí sola.",
  "flow": [
    [
      "HbA1c < 7 %",
      "Reanudar régimen previo (sulfonilurea −50 %)"
    ],
    [
      "7–9 %",
      "Orales + basal al 50 % de la dosis hospitalaria"
    ],
    [
      "> 9 %",
      "Basal al 80 % o basal-bolo"
    ],
    [
      "Control",
      "1–2 semanas"
    ]
  ],
  "criteria": [
    "Algoritmo validado de Umpierrez (DT2). ADA 2026 usa cortes < 8 / 8–10 / > 10 % con la misma lógica.",
    "Hiperglucemia de estrés con HbA1c < 7 % no se intensifica. Anciano con esquema complejo: simplificar.",
    "DT1 siempre necesita basal."
  ],
  "orders": [
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "HbA1c < 7 %",
      "dose": "Régimen previo; reducir o suspender sulfonilurea"
    },
    {
      "d": "HbA1c 7–9 %",
      "dose": "Orales previos + glargina al 50 % de la dosis diaria hospitalaria"
    },
    {
      "d": "HbA1c > 9 %",
      "dose": "Glargina al 80 % de la dosis hospitalaria ± orales, o basal-bolo"
    },
    {
      "d": "Metformina",
      "dose": "500 mg con comida, titular hasta 2000 mg/día (TFG ≥ 30; máx 1000 mg si 30–45)"
    },
    {
      "d": "Protección de órgano (independiente de HbA1c)",
      "dose": "Empagliflozina o dapagliflozina 10 mg/día si ERC (TFG ≥ 20), IC o ECV; semaglutida o liraglutida si ECV aterosclerótica u obesidad"
    },
    {
      "d": "Checklist",
      "n": "Conciliación, insumos (insulina, agujas, glucómetro, tirillas), educación con demostración, reglas de días de enfermedad, plan escrito, cita."
    }
  ],
  "goals": [
    "HbA1c < 7 % (< 8 % en frágiles)",
    "PA < 130/80, LDL < 70 (< 55 con ECV)"
  ],
  "alerts": [
    "Evita glibenclamida en ancianos"
  ],
  "rel": [
    "mi-dm"
  ],
  "g": {
    "co": {
      "n": "GPC Diabetes mellitus tipo 2, MinSalud",
      "y": "2016",
      "st": "old",
      "txt": "Se complementa con ADA 2026 y Umpierrez 2014."
    },
    "intl": "ADA 2026 · Umpierrez, Diabetes Care 2014",
    "dif": [
      "Garantiza glucómetro, tirillas e insulina con la EPS antes del alta; cobertura de iSGLT2 y arGLP-1 variable (PBS/MIPRES)."
    ]
  }
},
{
  "id": "mi-tiroides",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Endocrino",
  "name": "Tiroides: piso tras la crisis y manejo crónico",
  "aka": "hipotiroidismo levotiroxina graves metimazol hipertiroidismo tiroiditis embarazo nodulo",
  "page": "Fuente: ATA 2016 · ATA 2014",
  "sub": "Transición de la tormenta o el mixedema y tratamiento de hipo e hipertiroidismo ambulatorio.",
  "flow": [
    [
      "Hipertiroidismo tratado",
      "Sigue con T4L/T3, no con TSH"
    ],
    [
      "Graves",
      "Metimazol 12–18 meses o definitivo"
    ],
    [
      "Hipotiroidismo",
      "Levotiroxina 1,6 mcg/kg/día"
    ],
    [
      "Embarazo",
      "↑ 25–30 % la dosis"
    ]
  ],
  "criteria": [
    "Tiroiditis subaguda: AINE o prednisona + betabloqueador, NO tionamidas."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Tormenta estabilizada",
      "dose": "Propranolol 60–80 mg c/4–6 h · metimazol 20 mg c/6 h · lugol 4–8 gotas c/8 h · hidrocortisona 100 mg IV c/8 h · colestiramina 4 g c/6 h",
      "n": "Suspender yodo a los 7–10 días; T4L/T3 c/48–72 h; hemograma y hepáticas."
    },
    {
      "d": "Mixedema",
      "dose": "Hidrocortisona 100 mg IV c/8 h + levotiroxina 50–100 mcg/día IV (o 100–200 mcg VO/SNG)"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Hipotiroidismo primario",
      "dose": "Levotiroxina 1,6 mcg/kg/día en ayunas",
      "calc": {
        "t": "kg",
        "lo": 1.6,
        "hi": 1.6,
        "unit": "mcg",
        "label": "/día"
      },
      "n": "≥ 60 años o coronario: 25–50 mcg y subir 12,5–25 c/6–8 semanas. TSH a las 6–8 semanas."
    },
    {
      "d": "Subclínico",
      "n": "Tratar si TSH ≥ 10, embarazo o búsqueda de embarazo."
    },
    {
      "d": "Graves",
      "dose": "Metimazol 10–30 mg/día + propranolol 20–40 mg c/6–8 h",
      "n": "Fiebre u odinofagia: suspender y hemograma (agranulocitosis). Definitivo: yodo-131 o cirugía.",
      "a": "Propiltiouracilo en el 1.er trimestre del embarazo."
    },
    {
      "d": "Nódulo",
      "n": "TSH + ecografía TI-RADS → BACAF; Bethesda."
    }
  ],
  "goals": [
    "Eutiroidismo clínico y bioquímico"
  ],
  "alerts": [
    "No cambies de marca de levotiroxina sin control"
  ],
  "rel": [
    "tormenta",
    "mixedema",
    "r-endocrino"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ATA 2016 · ATA 2014 · ATA 2017 embarazo",
    "dif": [
      "Levotiroxina en PBS; yodo-131 en ciudades principales."
    ]
  }
},
{
  "id": "mi-lra",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Nefro y LEV",
  "name": "LRA en piso y seguimiento",
  "aka": "lra piso lesion renal aguda ajuste dosis sedimento seguimiento erc dias de enfermedad",
  "page": "Fuente: KDIGO 2012 · borrador KDIGO 2026 LRA/ERA",
  "sub": "Órdenes de piso de la LRA y control posalta.",
  "flow": [
    [
      "Volemia diaria",
      "Examen + POCUS"
    ],
    [
      "Suspender y ajustar",
      "Nefrotóxicos y dosis por TFG"
    ],
    [
      "Eco ≤ 24 h",
      "Descartar obstrucción"
    ],
    [
      "3 meses",
      "Cr + albuminuria: ¿ERC?"
    ]
  ],
  "criteria": [
    "Cilindros granulosos 'café' = NTA; hematíes dismórficos o cilindros hemáticos = glomerular."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Dieta",
      "dose": "Proteína 0,8–1,0 g/kg/día (1,0–1,5 en diálisis), 20–30 kcal/kg/día; restringir K y fósforo si altos"
    },
    {
      "d": "Líquidos según balance diario",
      "n": "Sin mantenimiento fijo."
    },
    {
      "d": "Suspender",
      "n": "AINE, aminoglucósidos, vancomicina sin niveles, contraste, IECA/ARA-II, espironolactona, iSGLT2, metformina (TFG ≤ 30)."
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "ClCr ≥ 30: enoxaparina 40 mg/día · < 30: 20–30 mg/día",
      "a": "Heparina no fraccionada 5000 U SC c/8–12 h."
    },
    {
      "d": "Control",
      "n": "Balance estricto, peso diario; Cr, BUN, Na, K, gases c/24 h; Ca, P, Mg; sedimento, FENa/FEUrea."
    },
    {
      "d": "Interconsulta a nefrología",
      "n": "Estadio 3, causa no clara, glomerular, indicación de diálisis."
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Control 1–2 semanas",
      "n": "Cr, K, PA, revisión de medicamentos; reintroducir IECA/ARA-II, iSGLT2 y diuréticos con Cr estable."
    },
    {
      "d": "Reglas de días de enfermedad",
      "n": "Si vómito, diarrea o fiebre con poca ingesta: suspender metformina, IECA/ARA-II, diuréticos, iSGLT2 y AINE."
    }
  ],
  "goals": [
    "Cr estable o en descenso 24–48 h al alta"
  ],
  "alerts": [
    "Evita morfina en falla renal"
  ],
  "rel": [
    "lra",
    "rabdo",
    "r-renal",
    "r-orina"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2012 · borrador KDIGO 2026 LRA/ERA · KDIGO 2024 ERC",
    "dif": []
  }
},
{
  "id": "mi-electrolitos",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Nefro y LEV",
  "name": "Na, K y Ca en piso: órdenes, reglas del potasio y estudio de la causa",
  "aka": "electrolitos piso sodio potasio calcio reglas del potasio magnesio siadh hiperaldosteronismo",
  "page": "Fuente: Guía europea 2014 hiponatremia · KDIGO 2020",
  "sub": "Órdenes de piso por trastorno; tu examinador pide no subir el Na más de 8 mEq/L en 24 h.",
  "flow": [
    [
      "Hiponatremia",
      "Osm sérica → Osm urinaria → Na urinario"
    ],
    [
      "Potasio",
      "Nunca en bolo · magnesio siempre"
    ],
    [
      "HTA + hipoK",
      "Aldosterona/renina"
    ],
    [
      "Calcio",
      "PTH define el camino"
    ]
  ],
  "criteria": [
    "Diuresis acuosa súbita (> 100 mL/h) durante la corrección = riesgo de sobrecorregir el sodio."
  ],
  "orders": [
    {
      "cat": "Reglas del potasio IV"
    },
    {
      "d": "Vía oral preferida si K > 2,5 y sin síntomas",
      "dose": "KCl 40–100 mEq/día en 2–5 tomas (máx 40 mEq por toma)"
    },
    {
      "d": "Vena periférica",
      "dose": "≤ 10 mEq/h y ≤ 40 mEq/L"
    },
    {
      "d": "Catéter central + telemetría",
      "dose": "Hasta 20 mEq/h"
    },
    {
      "d": "UCI con ECG continuo (K < 2 con parálisis o arritmia)",
      "dose": "Hasta 40 mEq/h"
    },
    {
      "d": "Magnesio",
      "dose": "Sulfato de magnesio 2 g IV en 1 h si bajo",
      "n": "Sin corregir Mg el K no sube. Diluir en salina, no en dextrosa."
    },
    {
      "cat": "Hiponatremia"
    },
    {
      "d": "Restricción hídrica en SIADH o hipervolémica",
      "dose": "≤ 1 L/día"
    },
    {
      "d": "Na c/2 h con NaCl 3 %, luego c/4–6 h; diuresis horaria"
    },
    {
      "d": "Suspender",
      "n": "Tiazidas, ISRS, carbamazepina, desmopresina."
    },
    {
      "cat": "Consulta externa"
    },
    {
      "d": "SIADH crónico",
      "dose": "Restricción 800–1000 mL/día; urea 15–30 g/día (magistral)",
      "a": "Tolvaptán ≤ 30 días (costoso)."
    },
    {
      "d": "Hiperpotasemia crónica en ERC/IC",
      "n": "No abandones el bloqueo del SRAA: dieta, diurético, bicarbonato si HCO₃ < 22, quelante."
    },
    {
      "d": "Hipoparatiroidismo",
      "dose": "Carbonato de calcio 1–2 g/día de calcio elemental + calcitriol 0,25–0,5 mcg c/12 h"
    }
  ],
  "goals": [
    "Na ↑ ≤ 8 mEq/L en 24 h",
    "K 4–5 mEq/L"
  ],
  "alerts": [
    "Hospitalizar: Na < 125 o > 155, K ≥ 6 o ≤ 2,5, Ca ≥ 14 o sintomático"
  ],
  "rel": [
    "hipona",
    "hiperna",
    "hiperk",
    "hipok",
    "hiperca",
    "hipoca",
    "r-electrolitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Guía europea 2014 hiponatremia · KDIGO 2020 · UKKA 2023 · Endocrine Society",
    "dif": [
      "Urea por fórmula magistral; quelantes nuevos con disponibilidad variable."
    ]
  }
},
{
  "id": "mi-lev",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Nefro y LEV",
  "name": "Líquidos endovenosos de mantenimiento",
  "aka": "lev liquidos endovenosos mantenimiento hidratacion balanceado potasio",
  "page": "Fuente: NICE 2013/2017 CG174 · NEJM 2018 (cristaloides balanceados)",
  "sub": "Solo si el paciente no puede tomar lo que necesita por vía oral o enteral.",
  "flow": [
    [
      "¿Necesita IV?",
      "Si puede VO, no"
    ],
    [
      "Mantenimiento",
      "25–30 mL/kg/día isotónico"
    ],
    [
      "Reevalúa",
      "Balance y electrolitos diarios"
    ]
  ],
  "criteria": [
    "Soluciones hipotónicas en adultos hospitalizados aumentan el riesgo de hiponatremia."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Cristaloide isotónico balanceado",
      "dose": "25–30 mL/kg/día (≈ 1–1,25 mL/kg/h)",
      "calc": {
        "t": "kgh",
        "lo": 1.04,
        "hi": 1.25,
        "conc": 1,
        "unit": "mL"
      },
      "a": "SSN 0,9 %."
    },
    {
      "d": "Potasio",
      "dose": "≈ 1 mEq/kg/día (p. ej., 20 mEq por litro) si función renal normal"
    },
    {
      "d": "Glucosa",
      "dose": "50–100 g/día (DAD 5 %) si ayuno prolongado"
    },
    {
      "d": "Control diario",
      "n": "Peso, balance, Na, K, Cr; reducir en IC, ERC, ancianos."
    }
  ],
  "goals": [
    "Euvolemia y electrolitos normales"
  ],
  "alerts": [
    "Suspender en cuanto tolere VO"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "NICE 2013/2017 CG174 · NEJM 2018 (cristaloides balanceados)",
    "dif": []
  }
},
{
  "id": "mi-ivu",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Nefro y LEV",
  "name": "IVU complicada en piso e IVU recurrente",
  "aka": "ivu piso pielonefritis complicada recurrente profilaxis bacteriuria asintomatica embarazo hombre",
  "page": "Fuente: Guía colombiana · IDSA 2025 IVU complicada · IDSA 2019 bacteriuria asintomática",
  "sub": "Órdenes de la pielonefritis hospitalizada y manejo de recurrencias.",
  "flow": [
    [
      "Ingreso",
      "Urocultivo antes del antibiótico"
    ],
    [
      "Sin riesgo BLEE",
      "Ceftriaxona"
    ],
    [
      "Riesgo BLEE",
      "Ertapenem"
    ],
    [
      "Afebril 24–48 h",
      "VO por antibiograma, 7 días total"
    ]
  ],
  "criteria": [
    "Bacteriuria asintomática: solo se trata en embarazo o antes de cirugía urológica con sangrado.",
    "IVU en hombre = complicada."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Ceftriaxona",
      "dose": "1 g IV c/24 h",
      "a": "Ertapenem 1 g IV c/24 h si riesgo de BLEE."
    },
    {
      "d": "Urocultivo y hemocultivos si fiebre alta"
    },
    {
      "d": "Ecografía renal ≤ 24 h si sepsis, anuria, litiasis o sin mejoría a 48–72 h"
    },
    {
      "d": "Retirar o cambiar la sonda"
    },
    {
      "d": "Paracetamol; evitar AINE si LRA"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "IVU recurrente (≥ 2 en 6 meses o ≥ 3 en 1 año)",
      "n": "+1,5 L de agua/día, estrógeno vaginal en posmenopáusicas, arándano."
    },
    {
      "d": "Profilaxis",
      "dose": "Nitrofurantoína 50–100 mg poscoital o cada noche, o fosfomicina 3 g c/10 días, por 6–12 meses"
    },
    {
      "d": "Hombre",
      "n": "7 días; prostatitis 2–4 semanas; estudiar próstata."
    },
    {
      "d": "Embarazo",
      "n": "Tamizaje semanas 12–16; tratar bacteriuria; pielonefritis = hospitalizar."
    }
  ],
  "goals": [
    "Afebril 24–48 h y VO según antibiograma al alta"
  ],
  "alerts": [
    "Obstrucción infectada: drenaje urgente"
  ],
  "rel": [
    "cistitis",
    "pielo-amb",
    "foco-uri",
    "r-orina"
  ],
  "g": {
    "co": {
      "n": "Guía colombiana de IVU complicada (Infectio 2023) y recomendaciones de la Sociedad Colombiana de Urología",
      "y": "2023",
      "st": "ok",
      "txt": "Referencia nacional reciente; se complementa con IDSA 2025."
    },
    "intl": "IDSA 2025 IVU complicada · IDSA 2019 bacteriuria asintomática · AUA/CUA/SUFU",
    "dif": [
      "Alta prevalencia de BLEE: ertapenem como opción de hospitalización."
    ]
  }
},
{
  "id": "mi-dp",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Nefro y LEV",
  "name": "Peritonitis asociada a diálisis peritoneal",
  "aka": "peritonitis dialisis peritoneal dp efluente turbio ispd intraperitoneal vancomicina",
  "page": "Fuente: ISPD 2022 peritonitis",
  "sub": "Efluente turbio o dolor abdominal en paciente en DP: muestra y antibiótico intraperitoneal inmediato.",
  "flow": [
    [
      "Diagnóstico",
      "2 de 3 criterios ISPD"
    ],
    [
      "Muestra",
      "Celularidad, diferencial y cultivo"
    ],
    [
      "Empírico IP",
      "Gram + y Gram − de inmediato"
    ],
    [
      "Ajuste",
      "Por cultivo; 2–3 semanas"
    ]
  ],
  "criteria": [
    "ISPD 2022: clínica (dolor o efluente turbio) + leucocitos > 100/µL con > 50 % PMN tras permanencia ≥ 2 h + cultivo positivo; basta 2 de 3.",
    "No confundir con PBE del cirrótico (≥ 250 PMN/µL). En DP automatizada el recuento total puede ser < 100 y el % PMN > 50 igual apoya."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Muestra del efluente",
      "n": "Recuento, diferencial, Gram y cultivo (frascos de hemocultivo)."
    },
    {
      "d": "Vancomicina intraperitoneal",
      "dose": "15–30 mg/kg IP c/5–7 días (según niveles)",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 30,
        "unit": "mg"
      },
      "a": "Cefazolina 15–20 mg/kg IP c/24 h en la permanencia larga."
    },
    {
      "d": "+ Cobertura de Gram negativos",
      "dose": "Ceftazidima 1–1,5 g IP c/24 h",
      "a": "Gentamicina 0,6 mg/kg IP c/24 h."
    },
    {
      "d": "Heparina en la bolsa si fibrina",
      "dose": "500 U/L"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Duración",
      "dose": "2 semanas (3 semanas para S. aureus, Gram negativos o enterococo)"
    },
    {
      "d": "Retiro del catéter",
      "n": "Refractaria (no aclara en 5 días), fúngica, recaída, o infección del túnel con el mismo germen."
    }
  ],
  "goals": [
    "Efluente claro en 3–5 días"
  ],
  "alerts": [
    "'Relacionada con el catéter': mismo germen en orificio o túnel dentro de 3 meses"
  ],
  "rel": [
    "pbe",
    "r-ascitis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ISPD 2022 peritonitis",
    "dif": []
  }
},
{
  "id": "mi-anemia",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Hematología",
  "name": "Anemia: estudio en piso y tratamiento por tipo",
  "aka": "anemia ferropenica hierro sacarosa carboximaltosa b12 folato hemolitica erc eritropoyetina",
  "page": "Fuente: AABB 2023 · BSG 2021",
  "sub": "Estudia antes de transfundir: la transfusión altera ferritina, B12/folato y el extendido.",
  "flow": [
    [
      "1",
      "Laboratorios antes de transfundir"
    ],
    [
      "2",
      "Transfundir por umbral, 1 unidad"
    ],
    [
      "3",
      "Reposición específica"
    ],
    [
      "4",
      "Buscar la causa"
    ]
  ],
  "criteria": [
    "Ferropenia en hombre o mujer posmenopáusica = endoscopia alta + colonoscopia.",
    "Déficit de hierro (Ganzoni, mg) = peso × (Hb meta − Hb actual) × 2,4 + 500."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Estudio",
      "n": "Hemograma con índices, reticulocitos, extendido, ferritina, hierro, saturación, B12, folato, LDH, bilirrubina indirecta, haptoglobina, Coombs directo, Cr, hepáticas, TSH."
    },
    {
      "d": "Transfusión",
      "dose": "Hb < 7 (< 8 cardiopatía; considerar < 10 en IAM), 1 unidad y reevaluar"
    },
    {
      "d": "Hierro IV (ferropenia)",
      "dose": "Hierro sacarosa 200 mg IV interdiario hasta completar el déficit",
      "a": "Carboximaltosa férrica 1 g IV dosis única."
    },
    {
      "d": "Vitamina B12",
      "dose": "Cianocobalamina 1000 mcg IM c/24 h"
    },
    {
      "d": "Ácido fólico en hemólisis",
      "dose": "1 mg/día"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Ferropenia",
      "dose": "Sulfato ferroso 1 tableta (60 mg de hierro elemental) en días alternos, lejos de lácteos e IBP, hasta 3 meses después de normalizar la Hb",
      "n": "Esperar ↑ 1–2 g/dL a las 2–4 semanas."
    },
    {
      "d": "Déficit de B12",
      "dose": "1000 mcg IM diaria × 1 semana → semanal × 4 → mensual",
      "a": "1000–2000 mcg VO/día (eficaz aun en anemia perniciosa)."
    },
    {
      "d": "Déficit de folato",
      "dose": "Ácido fólico 1–5 mg/día × 4 meses (tras descartar déficit de B12)"
    },
    {
      "d": "Anemia de la ERC",
      "n": "Hierro hasta ferritina > 100 y saturación > 20 %; eritropoyetina si Hb < 10 (meta 10–11,5)."
    },
    {
      "d": "Hemolítica autoinmune",
      "dose": "Prednisona 1 mg/kg/día × 3 semanas y desmonte lento",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "/día",
        "max": 80
      }
    }
  ],
  "goals": [
    "Hb estable 24–48 h sin sangrado al alta",
    "Causa identificada o estudio programado"
  ],
  "alerts": [
    "Bi/pancitopenia, blastos o hemólisis: hematología"
  ],
  "rel": [
    "gr",
    "c-ganzoni",
    "r-hemograma",
    "r-hierro"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AABB 2023 · BSG 2021 · KDIGO anemia",
    "dif": [
      "Sulfato ferroso en PBS; hierro sacarosa disponible."
    ]
  }
},
{
  "id": "mi-dengue",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Infectología",
  "name": "Dengue en piso (grupo B2) y criterios de alta",
  "aka": "dengue hospitalizado b2 signos de alarma criterios de alta hematocrito plaquetas",
  "page": "Fuente: Guía colombiana · OPS 2022 · OMS 2025 arbovirosis",
  "sub": "Órdenes de piso del dengue con signos de alarma y seguimiento ambulatorio.",
  "flow": [
    [
      "B2",
      "Cristaloide escalonado"
    ],
    [
      "Hto y plaquetas",
      "c/4–6 h"
    ],
    [
      "Alta",
      "Afebril ≥ 48 h, Hto estable, plaquetas en ascenso"
    ]
  ],
  "criteria": [
    "Grupo A: control clínico y hemograma diario desde el día 3 hasta 48 h después de la defervescencia."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Reposo relativo, dieta blanda y líquidos VO"
    },
    {
      "d": "Lactato de Ringer",
      "dose": "10 mL/kg en 1 h → 5–7 mL/kg/h × 2–4 h → 3–5 mL/kg/h × 2–4 h → 2–4 mL/kg/h y retirar",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mL",
        "label": "bolo 1 h"
      },
      "n": "Si no mejora: repetir hasta 3 veces → grupo C."
    },
    {
      "d": "Paracetamol",
      "dose": "1 g VO c/6 h (máx 4 g/día)",
      "n": "Nada de AINE, ASA, dipirona IM ni esteroides."
    },
    {
      "d": "Evitar",
      "n": "Inyecciones IM, sonda nasogástrica y punciones innecesarias."
    },
    {
      "d": "Signos vitales c/1 h al inicio, luego c/2–4 h; diuresis ≥ 0,5 mL/kg/h"
    },
    {
      "d": "Laboratorios",
      "n": "Hto y plaquetas c/4–6 h; albúmina, transaminasas, Cr; NS1 (≤ 5 días) o IgM (≥ 6 días)."
    },
    {
      "d": "Ecografía para fuga plasmática; notificación Sivigila"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Convalecencia",
      "n": "Fatiga y bradicardia por semanas; rash pruriginoso (antihistamínico); vigilar sobrecarga."
    },
    {
      "d": "Comorbilidades",
      "n": "Ajustar antihipertensivos y antitrombóticos en la fase crítica."
    }
  ],
  "goals": [
    "Afebril ≥ 48 h sin antipiréticos",
    "Hto estable sin líquidos IV",
    "Plaquetas en ascenso"
  ],
  "alerts": [
    "Gestante con dengue: obstetricia"
  ],
  "rel": [
    "dengue"
  ],
  "g": {
    "co": {
      "n": "Guía de atención clínica integral del paciente con dengue, MinSalud e INS",
      "y": "2010",
      "st": "old",
      "txt": "Se complementa con OPS 2022 y OMS 2025."
    },
    "intl": "OPS 2022 · OMS 2025 arbovirosis",
    "dif": []
  }
},
{
  "id": "malaria",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Infectología",
  "name": "Malaria (no complicada y complicada)",
  "aka": "malaria paludismo vivax falciparum cloroquina primaquina artemeter lumefantrina artesunato gota gruesa",
  "page": "Fuente: Guía colombiana · OMS 2024 malaria",
  "sub": "Fiebre en zona endémica: gota gruesa con recuento. Notificación obligatoria.",
  "flow": [
    [
      "Vivax",
      "Cloroquina 3 días + primaquina 14 días"
    ],
    [
      "Falciparum no complicada",
      "Artemeter-lumefantrina + primaquina dosis única"
    ],
    [
      "Complicada",
      "Artesunato IV sin esperar"
    ],
    [
      "Control",
      "Gota gruesa días 3, 7 y 28"
    ]
  ],
  "criteria": [
    "Complicada: alteración de conciencia o convulsiones, postración, dificultad respiratoria, choque, glucosa < 40, acidosis, Hb < 7, ictericia con disfunción, Cr > 3, sangrado, hiperparasitemia (guía colombiana > 50 000/µL; OMS > 10 %).",
    "Primaquina contraindicada en embarazo, lactancia < 6 meses y déficit de G6PD."
  ],
  "orders": [
    {
      "cat": "P. vivax"
    },
    {
      "d": "Cloroquina (mg de BASE)",
      "dose": "10 mg/kg día 1 + 7,5 mg/kg días 2 y 3 (adulto, tabletas de 150 mg: 4 + 3 + 3)",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mg",
        "label": "día 1"
      }
    },
    {
      "d": "Primaquina",
      "dose": "0,25 mg/kg/día × 14 días",
      "calc": {
        "t": "kg",
        "lo": 0.25,
        "hi": 0.25,
        "unit": "mg",
        "label": "/día"
      },
      "a": "OMS acepta 0,5 mg/kg/día × 7 días."
    },
    {
      "cat": "P. falciparum no complicada"
    },
    {
      "d": "Artemeter-lumefantrina 20/120 mg",
      "dose": "4 tabletas VO a las 0, 8, 24, 36, 48 y 60 h con alimento graso"
    },
    {
      "d": "+ Primaquina",
      "dose": "0,25 mg/kg dosis única (gametocitocida)",
      "calc": {
        "t": "kg",
        "lo": 0.25,
        "hi": 0.25,
        "unit": "mg"
      }
    },
    {
      "cat": "Complicada (UCI o intermedio)"
    },
    {
      "d": "Artesunato",
      "dose": "2,4 mg/kg IV a las 0, 12 y 24 h → c/24 h hasta tolerar VO; completar artemeter-lumefantrina 3 días",
      "calc": {
        "t": "kg",
        "lo": 2.4,
        "hi": 2.4,
        "unit": "mg"
      },
      "a": "Quinina 20 mg/kg IV en 4 h y luego 10 mg/kg c/8 h + clindamicina."
    },
    {
      "d": "Soporte",
      "n": "Líquidos restrictivos (riesgo de EAP), glucometría c/4 h (c/2 h con quinina o embarazo), transfusión si Hb < 7, ceftriaxona si choque; sin esteroides, manitol ni heparina."
    },
    {
      "d": "Laboratorios",
      "n": "Gota gruesa c/12–24 h hasta negativa; Hb días 7, 14, 21 y 28 tras artesunato (hemólisis tardía)."
    }
  ],
  "goals": [
    "Gota gruesa negativa",
    "Sin disfunción orgánica"
  ],
  "alerts": [
    "Embarazo con vivax: cloroquina semanal hasta el parto, sin primaquina"
  ],
  "g": {
    "co": {
      "n": "Guía de atención clínica de malaria, MinSalud e INS; protocolo de vigilancia INS",
      "y": "2010",
      "st": "old",
      "txt": "Referencia nacional; se complementa con OMS 2024."
    },
    "intl": "OMS 2024 malaria",
    "dif": [
      "Antimaláricos y artesunato IV los suministra gratis el programa de ETV: pídelo a la secretaría desde el ingreso."
    ]
  }
},
{
  "id": "mi-vih",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Infectología",
  "name": "VIH hospitalizado y seguimiento",
  "aka": "vih hospitalizado tar cd4 carga viral falla virologica prep",
  "page": "Fuente: Guía colombiana · OMS 2021 · DHHS",
  "sub": "No suspendas el TAR; revisa interacciones y busca oportunistas.",
  "flow": [
    [
      "TAR",
      "Mantener; naïve: iniciar ≤ 2 semanas"
    ],
    [
      "CD4 < 200",
      "CrAg, LAM urinario, TMP-SMX"
    ],
    [
      "Seguimiento",
      "Carga viral 4–8 semanas y luego c/3–6 meses"
    ],
    [
      "Falla",
      "> 200 copias confirmada → genotipo"
    ]
  ],
  "criteria": [
    "Diferir TAR en meningitis criptocócica (4–6 semanas) y TB meníngea (4–8 semanas)."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Aislamiento respiratorio si sospecha de TB"
    },
    {
      "d": "TAR",
      "dose": "TDF 300 mg + FTC 200 mg (o 3TC 300 mg) + dolutegravir 50 mg c/24 h",
      "n": "Con rifampicina: dolutegravir 50 mg c/12 h."
    },
    {
      "d": "TMP-SMX profiláctico si CD4 < 200",
      "dose": "160/800 mg VO c/24 h"
    },
    {
      "d": "Laboratorios",
      "n": "CD4, carga viral, CrAg sérico, LAM urinario, hemocultivos para hongos/micobacterias, HBsAg, anti-VHC, VDRL, toxoplasma IgG."
    },
    {
      "d": "Vigilar SIRI y toxicidad de TMP-SMX (hiperK, citopenias, rash)"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Suspender TMP-SMX",
      "n": "CD4 ≥ 200 por ≥ 3 meses con TAR (no una duración fija)."
    },
    {
      "d": "TB preventiva",
      "dose": "Isoniazida 300 mg/día × 6–9 meses + piridoxina"
    },
    {
      "d": "PrEP y PEP",
      "n": "Indetectable = intransmisible; PrEP TDF/FTC para parejas serodiscordantes."
    }
  ],
  "goals": [
    "Carga viral indetectable"
  ],
  "alerts": [
    "Todo diagnóstico nuevo: programa de VIH en ≤ 2 semanas"
  ],
  "rel": [
    "tar",
    "pep",
    "oportunistas",
    "sifilis"
  ],
  "g": {
    "co": {
      "n": "GPC VIH MinSalud 2021 y Vía clínica 2024",
      "y": "2021/2024",
      "st": "ok",
      "txt": "Dolutegravir por MIPRES (Circular 006/2025)."
    },
    "intl": "OMS 2021 · DHHS",
    "dif": []
  }
},
{
  "id": "oportunistas",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Infectología",
  "name": "Infecciones oportunistas en VIH (PCP, toxoplasma, criptococo, histoplasma)",
  "aka": "oportunistas vih neumocistosis pcp toxoplasmosis criptococo histoplasmosis anfotericina",
  "page": "Fuente: Guía colombiana · OMS 2022 criptococo · OPS 2020 histoplasmosis",
  "sub": "Tratamientos de inducción y la opción realista en Colombia.",
  "flow": [
    [
      "PCP",
      "TMP-SMX 21 días ± prednisona"
    ],
    [
      "Toxoplasma",
      "TMP-SMX o pirimetamina-sulfadiazina 6 semanas"
    ],
    [
      "Criptococo",
      "Anfotericina + fluconazol; punciones evacuadoras"
    ],
    [
      "Histoplasma",
      "Anfotericina → itraconazol"
    ]
  ],
  "criteria": [
    "PCP con PaO₂ < 70 o gradiente A-a ≥ 35: prednisona en ≤ 72 h.",
    "Profilaxis toxoplasma: IgG + y CD4 < 100 (TMP-SMX DS diario cubre ambas)."
  ],
  "orders": [
    {
      "d": "Neumocistosis",
      "dose": "TMP-SMX 15–20 mg/kg/día de TMP en 3–4 dosis × 21 días",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 20,
        "unit": "mg TMP",
        "label": "/día"
      },
      "n": "Prednisona 40 mg c/12 h d1–5 → 40 mg/día d6–10 → 20 mg/día d11–21."
    },
    {
      "d": "Toxoplasmosis cerebral",
      "dose": "TMP-SMX 5 mg/kg de TMP c/12 h × 6 semanas",
      "calc": {
        "t": "kg",
        "lo": 5,
        "hi": 5,
        "unit": "mg TMP",
        "label": "c/12 h"
      },
      "a": "Pirimetamina 200 mg carga → 50–75 mg/día + sulfadiazina 1–1,5 g c/6 h + ácido folínico 10–25 mg/día."
    },
    {
      "d": "Meningitis criptocócica",
      "dose": "Anfotericina B deoxicolato 1 mg/kg/día + fluconazol 1200 mg/día × 7 días → fluconazol 1200 mg/día × 7 días",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "mg",
        "label": "anfotericina"
      },
      "n": "Prehidratar con SSN 1 L y reponer K y Mg. Punciones evacuadoras si presión > 25 cmH₂O. Luego fluconazol 800 mg × 8 semanas → 200 mg/día.",
      "a": "Ideal OMS: anfotericina liposomal 10 mg/kg dosis única + flucitosina + fluconazol."
    },
    {
      "d": "Histoplasmosis diseminada",
      "dose": "Anfotericina B liposomal 3 mg/kg/día × 1–2 semanas → itraconazol 200 mg c/8 h × 3 días → c/12 h ≥ 12 meses",
      "calc": {
        "t": "kg",
        "lo": 3,
        "hi": 3,
        "unit": "mg"
      }
    }
  ],
  "goals": [
    "Mejoría clínica y TAR iniciado en el momento correcto"
  ],
  "alerts": [
    "TAR rápido salvo criptococo y TB meníngea"
  ],
  "rel": [
    "mi-vih"
  ],
  "g": {
    "co": {
      "n": "GPC VIH MinSalud 2021 y Vía clínica 2024",
      "y": "2021/2024",
      "st": "ok",
      "txt": "Referencia nacional."
    },
    "intl": "OMS 2022 criptococo · OPS 2020 histoplasmosis · NIH OI",
    "dif": [
      "Flucitosina no disponible y anfotericina liposomal limitada; pirimetamina/sulfadiazina irregulares → TMP-SMX. Histoplasmosis muy frecuente en Colombia."
    ]
  }
},
{
  "id": "sifilis",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Infectología",
  "name": "Sífilis y neurosífilis (incluida en VIH)",
  "aka": "sifilis neurosifilis vdrl rpr puncion lumbar penicilina benzatinica cristalina vih",
  "page": "Fuente: Guía colombiana · CDC 2021 ITS · NIH OI",
  "sub": "A quién puncionar, cómo confirmar neurosífilis y cómo tratar.",
  "flow": [
    [
      "¿Clínica neurológica?",
      "PL antes de tratar"
    ],
    [
      "Ocular u ótica aislada",
      "Tratar como neurosífilis sin esperar LCR"
    ],
    [
      "Terciaria CV/gomatosa",
      "PL antes de tratar"
    ],
    [
      "Resto",
      "No PL de rutina; tratar según estadio"
    ]
  ],
  "criteria": [
    "RPR ≥ 1:32 o CD4 ≤ 350 sin síntomas NO son indicación autónoma de PL.",
    "VDRL en LCR confirma (no descarta); FTA-ABS en LCR negativo descarta. En VIH sin TAR, pleocitosis > 20 células/µL."
  ],
  "orders": [
    {
      "d": "Sífilis temprana (primaria, secundaria, latente < 1 año)",
      "dose": "Penicilina benzatínica 2,4 millones U IM dosis única",
      "a": "Doxiciclina 100 mg VO c/12 h × 14 días (no en embarazo)."
    },
    {
      "d": "Latente tardía o de duración desconocida",
      "dose": "Penicilina benzatínica 2,4 millones U IM semanal × 3",
      "a": "Doxiciclina 100 mg c/12 h × 28 días."
    },
    {
      "d": "Neurosífilis, ocular u ótica",
      "dose": "Penicilina G cristalina 18–24 millones U/día IV (3–4 millones c/4 h) × 10–14 días",
      "a": "Ceftriaxona 2 g IV/día × 10–14 días; en alergia, preferir desensibilización."
    },
    {
      "d": "Seguimiento",
      "n": "RPR/VDRL a los 6, 12 y 24 meses; fracaso si no cae 4 veces (descartar reinfección)."
    }
  ],
  "goals": [
    "Descenso serológico ≥ 4 veces"
  ],
  "alerts": [
    "Desabastecimiento global de penicilina benzatínica 2026: priorizar gestantes",
    "En gestante alérgica: desensibilizar (no hay alternativa)"
  ],
  "rel": [
    "mi-vih"
  ],
  "g": {
    "co": {
      "n": "GPC ITS (MinSalud 2013) y guía de sífilis gestacional y congénita",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021 ITS · NIH OI",
    "dif": []
  }
},
{
  "id": "mi-piel",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Infectología",
  "name": "Piel y tejidos blandos en piso (incluye pie diabético)",
  "aka": "celulitis piso pie diabetico osteomielitis cultivo tejido profundo celulitis recurrente",
  "page": "Fuente: Guía colombiana · IDSA 2014 · IWGDF/IDSA 2023",
  "sub": "Celulitis moderada o pie diabético hospitalizado.",
  "flow": [
    [
      "Marcar bordes",
      "Reevaluar 48–72 h"
    ],
    [
      "Pie diabético",
      "Cultivo de tejido profundo, no hisopado"
    ],
    [
      "Duración",
      "Celulitis 5 días · osteomielitis 6 semanas"
    ]
  ],
  "criteria": [
    "Nunca retrases la cirugía en fascitis por esperar imagen."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Marcar el eritema con fecha y hora; elevación y descarga del pie"
    },
    {
      "d": "Celulitis",
      "dose": "Cefazolina 2 g IV c/8 h",
      "a": "Oxacilina 2 g IV c/4–6 h; purulenta o SAMR: vancomicina 15–20 mg/kg c/8–12 h."
    },
    {
      "d": "Pie diabético moderado",
      "dose": "Ampicilina-sulbactam 3 g IV c/6 h"
    },
    {
      "d": "Imagen",
      "n": "Ecografía si absceso; pie diabético: Rx, prueba de sonda a hueso, VSG/PCR, RM si duda."
    },
    {
      "d": "Control glucémico basal-bolo (meta 140–180)"
    },
    {
      "d": "Enoxaparina 40 mg/día, analgesia, curaciones, toxoide tetánico"
    },
    {
      "cat": "Consulta externa y egreso"
    },
    {
      "d": "Celulitis recurrente (≥ 3–4/año)",
      "dose": "Penicilina V 250 mg VO c/12 h",
      "a": "Penicilina benzatínica 1,2–2,4 millones U IM c/2–4 semanas."
    },
    {
      "d": "Prevención de pie diabético",
      "n": "Examen anual (monofilamento, pulsos), calzado, podología."
    }
  ],
  "goals": [
    "Afebril, eritema en retroceso, antibiótico VO al alta"
  ],
  "alerts": [
    "Isquemia crítica: cirugía vascular"
  ],
  "rel": [
    "foco-piel",
    "celulitis-amb",
    "foco-nec"
  ],
  "g": {
    "co": {
      "n": "GPC Infecciones de piel y tejidos blandos (Colombia 2019)",
      "y": "2019",
      "st": "ok",
      "txt": "Referencia nacional; se complementa con IDSA e IWGDF."
    },
    "intl": "IDSA 2014 · IWGDF/IDSA 2023",
    "dif": []
  }
},
{
  "id": "les-fiebre",
  "sys": "Medicina interna (piso y consulta)",
  "group": "Reumatología",
  "name": "LES con fiebre: ¿infección o brote?",
  "aka": "lupus les fiebre infeccion brote procalcitonina vsg pcr sledai",
  "page": "Fuente: Abdel-Magied, BMC Rheumatol 2024 · EULAR 2023 LES",
  "sub": "Tratamientos opuestos: ante la duda, descarta infección antes de subir inmunosupresión.",
  "flow": [
    [
      "1",
      "Cultivos + panel: PCT, VSG, PCR, hemograma"
    ],
    [
      "PCT ≥ 0,9 ng/mL",
      "Tratar como infección"
    ],
    [
      "VSG/PCR < 2 o NLR > 2",
      "Probable infección: buscar foco y cubrir"
    ],
    [
      "Ninguno",
      "Probable brote: SLEDAI, anti-dsDNA, C3/C4"
    ],
    [
      "48–72 h",
      "Repetir PCT"
    ]
  ],
  "criteria": [
    "SLEDAI alto NO excluye infección; pueden coexistir.",
    "Serositis y artritis lúpicas sí elevan la PCR.",
    "En inmunosupresión profunda una PCT baja no descarta infección."
  ],
  "orders": [
    {
      "d": "Hemocultivos y cultivos según foco antes del antibiótico"
    },
    {
      "d": "Infección probable",
      "dose": "Antibiótico empírico según foco (ver fichas de sepsis)",
      "n": "No escalar esteroides; mantener dosis de estrés si usa esteroide crónico."
    },
    {
      "d": "Brote probable grave (órgano en riesgo)",
      "dose": "Metilprednisolona 500–1000 mg IV/día × 3 días",
      "n": "Solo tras descartar infección razonablemente."
    },
    {
      "d": "Hidroxicloroquina",
      "dose": "Mantener (≤ 5 mg/kg/día de peso real)"
    }
  ],
  "goals": [
    "Diagnóstico diferenciado en 24–48 h"
  ],
  "alerts": [
    "Escalar ya: PCT > 2 o en ascenso, hemocultivo +, sepsis, inmunosupresión intensa reciente"
  ],
  "rel": [
    "sepsis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Abdel-Magied, BMC Rheumatol 2024 · EULAR 2023 LES",
    "dif": []
  }
}
];
