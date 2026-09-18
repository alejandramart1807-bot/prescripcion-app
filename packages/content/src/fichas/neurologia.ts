// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "hic",
  "sys": "Neurología",
  "group": "ACV",
  "name": "Hemorragia intracerebral: tratamiento integral",
  "aka": "acv hemorragico hic hemorragia intracerebral reversion anticoagulacion hipertension endocraneana",
  "page": "Fuente: AHA/ASA 2022 HIC · ESO 2025",
  "sub": "Todo lo que no es presión arterial: reversión de antitrombóticos, hipertensión endocraneana, convulsiones y soporte. Para la PA ver 'ACV hemorrágico (HIC) con PA elevada'.",
  "flow": [
    [
      "1",
      "PA 130–150 en la 1.ª hora"
    ],
    [
      "2",
      "Revierte el antitrombótico"
    ],
    [
      "3",
      "HTEC: osmoterapia, cabecera"
    ],
    [
      "4",
      "Neurocirugía según volumen y localización"
    ]
  ],
  "criteria": [
    "TAC simple; angioTAC si sospecha de lesión vascular.",
    "Neurocirugía: cerebelosa > 3 cm o con hidrocefalia/compresión de tallo."
  ],
  "orders": [
    {
      "cat": "Reversión según fármaco"
    },
    {
      "d": "Warfarina",
      "dose": "Complejo protrombínico de 4 factores 25–50 U/kg según INR + vitamina K 10 mg IV",
      "a": "Sin complejo protrombínico: plasma fresco 10–15 mL/kg + vitamina K."
    },
    {
      "d": "Dabigatrán",
      "dose": "Idarucizumab 5 g IV",
      "a": "Complejo protrombínico 50 U/kg; hemodiálisis."
    },
    {
      "d": "Rivaroxabán, apixabán, edoxabán",
      "dose": "Complejo protrombínico 50 U/kg IV",
      "a": "Andexanet si disponible (casi no en Colombia)."
    },
    {
      "d": "Heparina no fraccionada",
      "dose": "Protamina 1 mg por cada 100 U recibidas en las últimas 2–3 h (máx 50 mg)"
    },
    {
      "d": "Enoxaparina",
      "dose": "Protamina 1 mg por cada 1 mg de enoxaparina en las últimas 8 h (máx 50 mg)"
    },
    {
      "d": "Postrombólisis",
      "dose": "Crioprecipitado 10 U + ácido tranexámico 1 g IV"
    },
    {
      "cat": "Hipertensión endocraneana"
    },
    {
      "d": "Cabecera a 30°, normocapnia, normotermia, sedación y analgesia"
    },
    {
      "d": "Manitol 20 %",
      "dose": "0,5–1 g/kg IV en 15–20 min",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "g"
      },
      "a": "SSN 3 % 250 mL en 15–20 min o NaCl 20 % 30–60 mL por vía central."
    },
    {
      "cat": "Otros"
    },
    {
      "d": "Levetiracetam solo si convulsiones",
      "dose": "60 mg/kg IV (máx 4500 mg) en 10 min, luego 500–1000 mg c/12 h",
      "n": "No se recomienda profilaxis."
    },
    {
      "d": "Glucemia 140–180 mg/dL"
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Compresión neumática desde el ingreso; enoxaparina 40 mg SC tras 24–48 h si la hemorragia está estable"
    }
  ],
  "goals": [
    "PAS 130–150",
    "Reversión en < 1 h",
    "Glasgow estable"
  ],
  "alerts": [
    "Suspende todo antiagregante y anticoagulante",
    "No uses corticoides para el edema"
  ],
  "rel": [
    "mi-reversion"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AHA/ASA 2022 HIC · ESO 2025",
    "dif": [
      "Complejo protrombínico en instituciones de alto nivel; idarucizumab con disponibilidad limitada."
    ]
  }
},
{
  "id": "acvi",
  "sys": "Neurología",
  "group": "ACV",
  "name": "ACV isquémico con indicación de reperfusión",
  "aka": "acv isquemico trombolisis alteplasa tenecteplasa trombectomia codigo acv",
  "page": "Fuente: Guía colombiana · AHA/ASA ACV isquémico agudo (vigente) · ESO 2023 tenecteplasa",
  "sub": "Déficit neurológico agudo; TAC sin sangrado; inicio < 4,5 h (trombólisis) o oclusión de gran vaso hasta 24 h (trombectomía).",
  "flow": [
    [
      "Puerta-TAC",
      "< 20 min"
    ],
    [
      "PA",
      "< 185/110 antes"
    ],
    [
      "Puerta-aguja",
      "< 60 min"
    ],
    [
      "Oclusión de gran vaso",
      "Trombectomía"
    ]
  ],
  "criteria": [
    "Glucometría antes de trombolizar.",
    "Contraindicaciones: sangrado activo, HIC previa, TCE o ACV < 3 meses, cirugía mayor < 14 días, plaquetas < 100 000, INR > 1,7, anticoagulante directo < 48 h."
  ],
  "orders": [
    {
      "d": "Alteplasa",
      "dose": "0,9 mg/kg (máx 90 mg): 10 % en bolo en 1 min, resto en 60 min",
      "calc": {
        "t": "altacv"
      },
      "a": "Tenecteplasa 0,25 mg/kg (máx 25 mg) en bolo único."
    },
    {
      "d": "Tenecteplasa (alternativa preferida donde esté)",
      "dose": "0,25 mg/kg IV en bolo (máx 25 mg)",
      "calc": {
        "t": "kg",
        "lo": 0.25,
        "hi": 0.25,
        "unit": "mg",
        "max": 25
      }
    },
    {
      "d": "Control de PA",
      "dose": "< 180/105 las 24 h siguientes (ver ficha de ACV isquémico con PA elevada)"
    },
    {
      "d": "Monitoreo neurológico",
      "dose": "NIHSS c/15 min × 2 h, c/30 min × 6 h, luego c/h × 16 h"
    },
    {
      "d": "Sin antitrombóticos 24 h; TAC de control a las 24 h"
    },
    {
      "d": "Glucemia 140–180, SatO₂ > 94 %, normotermia"
    }
  ],
  "goals": [
    "Puerta-aguja < 60 min",
    "Sin complicación hemorrágica"
  ],
  "alerts": [
    "Deterioro neurológico: suspende la infusión, TAC urgente, crioprecipitado y ácido tranexámico",
    "Angioedema (más con IECA): suspende, antihistamínico, corticoide, adrenalina si compromete vía aérea"
  ],
  "rel": [
    "c-nihss"
  ],
  "g": {
    "co": {
      "n": "GPC Ataque cerebrovascular isquémico agudo, MinSalud",
      "y": "2015",
      "st": "old",
      "txt": "Anterior a tenecteplasa y a la trombectomía extendida; se complementa con AHA/ASA y ESO."
    },
    "intl": "AHA/ASA ACV isquémico agudo (vigente) · ESO 2023 tenecteplasa",
    "dif": [
      "Trombectomía solo en centros con neurointervencionismo: remite temprano sin retrasar la trombólisis."
    ]
  }
},
{
  "id": "ee",
  "sys": "Neurología",
  "group": "Convulsiones",
  "name": "Crisis convulsiva / estado epiléptico",
  "aka": "estado epileptico status convulsion crisis convulsiva benzodiazepina levetiracetam",
  "page": "Fuente: AES 2016 · NCS 2012",
  "sub": "Crisis ≥ 5 min o crisis repetidas sin recuperar la conciencia entre ellas.",
  "flow": [
    [
      "0–5 min",
      "ABC, glucometría, O₂"
    ],
    [
      "5–20 min",
      "Benzodiazepina (hasta 2 dosis)"
    ],
    [
      "20–40 min",
      "Segundo fármaco IV"
    ],
    [
      "> 40 min",
      "Intubación + infusión anestésica + EEG"
    ]
  ],
  "criteria": [
    "Busca causa: hipoglucemia, hiponatremia, tóxicos, abstinencia, infección del SNC, ACV, eclampsia."
  ],
  "orders": [
    {
      "d": "Midazolam",
      "dose": "10 mg IM (> 40 kg) o 0,2 mg/kg IM/IV; puede repetirse una vez",
      "a": "Diazepam 0,15–0,2 mg/kg IV (máx 10 mg por dosis), repetir una vez. Lorazepam 4 mg IV si está disponible."
    },
    {
      "d": "Levetiracetam",
      "dose": "60 mg/kg IV (máx 4500 mg) en 10 min",
      "calc": {
        "t": "kg",
        "lo": 60,
        "hi": 60,
        "unit": "mg",
        "max": 4500
      },
      "a": "Ácido valproico 40 mg/kg IV (máx 3000 mg) o fenitoína 20 mg/kg IV (máx 50 mg/min, monitoreo ECG) o fenobarbital 15–20 mg/kg."
    },
    {
      "d": "Tiamina + dextrosa si hipoglucemia o alcoholismo",
      "dose": "Tiamina 200 mg IV + DAD 10 % 250 mL"
    },
    {
      "cat": "Refractario"
    },
    {
      "d": "Midazolam en infusión (con intubación)",
      "dose": "0,2 mg/kg bolo, luego 0,05–2 mg/kg/h",
      "dil": "100 mg en 100 mL = 1 mg/mL",
      "calc": {
        "t": "kgh",
        "lo": 0.05,
        "hi": 2,
        "conc": 1,
        "unit": "mg"
      },
      "a": "Propofol 1–2 mg/kg y 20–200 mcg/kg/min, o ketamina."
    }
  ],
  "goals": [
    "Cese clínico y eléctrico",
    "Recuperación de conciencia"
  ],
  "alerts": [
    "Fenitoína: hipotensión y arritmias; evitar en intoxicación por tricíclicos",
    "Valproato: evitar en embarazo y hepatopatía"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AES 2016 · NCS 2012",
    "dif": [
      "Lorazepam IV y fosfenitoína no se consiguen de forma regular: midazolam o diazepam, y levetiracetam o fenitoína."
    ]
  }
},
{
  "id": "acv-sin",
  "sys": "Neurología",
  "group": "ACV",
  "name": "ACV isquémico sin indicación de reperfusión",
  "aka": "acv isquemico sin trombolisis antiagregacion aspirina clopidogrel ait",
  "page": "Fuente: Guía colombiana · AHA/ASA ACV isquémico agudo (vigente) · POINT/CHANCE",
  "sub": "ACV isquémico fuera de ventana o con contraindicación para trombólisis; también AIT.",
  "flow": [
    [
      "1",
      "Tamizaje de deglución antes de VO"
    ],
    [
      "2",
      "Antiagregación en 24–48 h"
    ],
    [
      "Menor (NIHSS ≤ 3) o AIT alto riesgo",
      "Doble antiagregación 21 días"
    ],
    [
      "3",
      "Estatina, PA permisiva"
    ]
  ],
  "criteria": [
    "AIT de alto riesgo: ABCD² ≥ 4.",
    "FA: anticoagular en 2–14 días según tamaño del infarto."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ácido acetilsalicílico",
      "dose": "300 mg VO (o rectal/SNG si disfagia), luego 100 mg c/24 h"
    },
    {
      "d": "Menor o AIT alto riesgo: + clopidogrel",
      "dose": "300–600 mg VO carga, luego 75 mg c/24 h por 21 días junto con ASA",
      "a": "Ticagrelor 180 mg carga + 90 mg c/12 h con ASA por 30 días."
    },
    {
      "d": "Atorvastatina",
      "dose": "40–80 mg VO c/24 h"
    },
    {
      "d": "PA: tratar solo si > 220/120 (bajar 15 % en 24 h)"
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h si inmovilizado"
    },
    {
      "d": "Cabecera 0–30°, glucemia 140–180, normotermia"
    }
  ],
  "goals": [
    "Antiagregación en < 48 h",
    "Sin broncoaspiración"
  ],
  "alerts": [
    "Descarta hemorragia con TAC antes del antiagregante"
  ],
  "rel": [
    "c-abcd2"
  ],
  "g": {
    "co": {
      "n": "GPC Ataque cerebrovascular isquémico agudo, MinSalud",
      "y": "2015",
      "st": "old",
      "txt": "Se complementa con AHA/ASA (doble antiagregación)."
    },
    "intl": "AHA/ASA ACV isquémico agudo (vigente) · POINT/CHANCE",
    "dif": []
  }
},
{
  "id": "migrana",
  "sys": "Neurología",
  "group": "Cefalea",
  "name": "Migraña (crisis)",
  "aka": "migrana jaqueca cefalea migraña triptan",
  "page": "Fuente: AHS 2021 · AAN",
  "sub": "Cefalea pulsátil unilateral, moderada-intensa, con náuseas, foto y fonofobia, 4–72 h. Descarta banderas rojas (SNOOP).",
  "flow": [
    [
      "Urgencias",
      "Antiemético + AINE/dipirona IV + dexametasona"
    ],
    [
      "Casa",
      "AINE o triptán temprano"
    ],
    [
      "≥ 4 crisis/mes",
      "Profilaxis"
    ]
  ],
  "criteria": [
    "Banderas rojas: inicio en trueno, > 50 años, fiebre, déficit focal, cambio de patrón, embarazo, inmunosupresión, desencadenada por esfuerzo."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Metoclopramida",
      "dose": "10 mg IV lento",
      "a": "Dimenhidrinato 50 mg IV u ondansetrón 4 mg IV."
    },
    {
      "d": "Dipirona o ketorolaco",
      "dose": "Dipirona 1–2 g IV o ketorolaco 30 mg IV"
    },
    {
      "d": "Dexametasona (previene recurrencia)",
      "dose": "10 mg IV dosis única"
    },
    {
      "d": "SSN 0,9 % 500–1000 mL si deshidratación"
    },
    {
      "d": "Sumatriptán (si no hay contraindicación cardiovascular)",
      "dose": "6 mg SC",
      "a": "Sumatriptán 50–100 mg VO."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Naproxeno",
      "dose": "500–550 mg VO al inicio, repetir en 12 h si hace falta",
      "a": "Ibuprofeno 400–600 mg; ASA 1000 mg."
    },
    {
      "d": "Sumatriptán",
      "dose": "50–100 mg VO al inicio; repetir en 2 h (máx 200 mg/día)",
      "n": "No en coronariopatía, ACV o HTA no controlada."
    },
    {
      "d": "Metoclopramida",
      "dose": "10 mg VO con el analgésico"
    },
    {
      "d": "Profilaxis si ≥ 4 días/mes",
      "dose": "Propranolol 40–80 mg c/12 h, amitriptilina 10–25 mg noche o flunarizina 5–10 mg noche"
    }
  ],
  "goals": [
    "Dolor ≤ leve en 2 h"
  ],
  "alerts": [
    "Evita opioides",
    "Analgésicos > 10–15 días/mes: cefalea por abuso de medicación"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AHS 2021 · AAN",
    "dif": [
      "Flunarizina disponible y de uso frecuente como profilaxis en Colombia."
    ]
  }
},
{
  "id": "tensional",
  "sys": "Neurología",
  "group": "Cefalea",
  "name": "Cefalea tensional",
  "aka": "cefalea tensional dolor de cabeza opresivo",
  "page": "Fuente: EFNS 2010",
  "sub": "Cefalea bilateral opresiva, leve-moderada, sin náuseas importantes ni empeoramiento con actividad.",
  "flow": [
    [
      "Episódica",
      "Analgésico simple"
    ],
    [
      "Crónica",
      "Amitriptilina + medidas"
    ]
  ],
  "criteria": [
    "Descarta banderas rojas."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dipirona",
      "dose": "1 g IV o VO",
      "a": "Paracetamol 1 g o ibuprofeno 400 mg VO."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ibuprofeno",
      "dose": "400 mg VO al inicio del dolor",
      "a": "Paracetamol 1 g, naproxeno 500 mg o ASA 500–1000 mg."
    },
    {
      "d": "Crónica: amitriptilina",
      "dose": "10–25 mg en la noche"
    }
  ],
  "goals": [
    "Control con analgésico simple"
  ],
  "alerts": [
    "Limita analgésicos a < 10–15 días/mes"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "EFNS 2010",
    "dif": []
  }
},
{
  "id": "meningitis",
  "sys": "Neurología",
  "group": "Infecciones del SNC",
  "name": "Meningitis bacteriana aguda (adulto y niño)",
  "aka": "meningitis bacteriana ceftriaxona vancomicina dexametasona puncion lumbar listeria",
  "page": "Fuente: ESCMID 2016 · IDSA 2004",
  "sub": "Fiebre, cefalea, rigidez nucal o alteración de conciencia: antibiótico sin demora.",
  "flow": [
    [
      "1",
      "Hemocultivos"
    ],
    [
      "TAC antes de PL solo si",
      "Focalidad, papiledema, inmunosupresión, convulsión o coma"
    ],
    [
      "2",
      "Dexametasona + antibiótico"
    ],
    [
      "3",
      "PL"
    ]
  ],
  "criteria": [
    "No retrases el antibiótico por la TAC o la PL."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dexametasona (antes o con la 1.ª dosis)",
      "dose": "Adulto 10 mg IV c/6 h × 4 días · niño 0,15 mg/kg c/6 h",
      "calc": {
        "t": "kg",
        "lo": 0.15,
        "hi": 0.15,
        "unit": "mg",
        "label": "niño",
        "max": 10
      }
    },
    {
      "d": "Ceftriaxona",
      "dose": "Adulto 2 g IV c/12 h · niño 100 mg/kg/día en 1–2 dosis (máx 4 g)",
      "calc": {
        "t": "kg",
        "lo": 100,
        "hi": 100,
        "unit": "mg",
        "label": "niño/día",
        "max": 4000
      }
    },
    {
      "d": "+ Vancomicina",
      "dose": "15–20 mg/kg IV c/8–12 h (niño 60 mg/kg/día c/6 h)",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 20,
        "unit": "mg"
      }
    },
    {
      "d": "+ Ampicilina si > 50 años, embarazo o inmunosupresión (Listeria)",
      "dose": "2 g IV c/4 h"
    },
    {
      "d": "Aciclovir si sospecha de encefalitis",
      "dose": "10 mg/kg IV c/8 h",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mg"
      }
    },
    {
      "d": "Quimioprofilaxis de contactos (meningococo)",
      "dose": "Ciprofloxacino 500 mg VO dosis única o ceftriaxona 250 mg IM"
    }
  ],
  "goals": [
    "Antibiótico < 1 h"
  ],
  "alerts": [
    "Notificación obligatoria (meningitis bacteriana, INS)"
  ],
  "rel": [
    "sepsis",
    "ee",
    "r-lcr"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ESCMID 2016 · IDSA 2004",
    "dif": []
  }
}
];
