// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "eh",
  "sys": "Gastroenterología y hepatología",
  "group": "Hígado",
  "name": "Encefalopatía hepática",
  "aka": "encefalopatia hepatica cirrosis lactulosa rifaximina amonio",
  "page": "Fuente: EASL 2022 encefalopatía hepática · AASLD/EASL 2014",
  "sub": "Alteración neuropsiquiátrica en cirrosis o falla hepática; gradúa con West Haven.",
  "flow": [
    [
      "1",
      "Protege la vía aérea si grado III–IV"
    ],
    [
      "2",
      "Busca el precipitante"
    ],
    [
      "3",
      "Lactulosa"
    ],
    [
      "4",
      "Rifaximina si recurre"
    ]
  ],
  "criteria": [
    "Precipitantes: sangrado GI, infección (descarta PBE), hipopotasemia, deshidratación, diuréticos, sedantes, estreñimiento.",
    "El amonio no se necesita para diagnosticar ni seguir."
  ],
  "orders": [
    {
      "d": "Lactulosa",
      "dose": "25 mL VO c/1–2 h hasta 2 deposiciones; luego 15–30 mL c/8–12 h (meta 2–3 deposiciones blandas/día)",
      "a": "Sin vía oral: enemas de lactulosa 300 mL en 700 mL de agua c/6–8 h."
    },
    {
      "d": "Rifaximina",
      "dose": "550 mg VO c/12 h",
      "n": "Añadir a la lactulosa si recurre o no responde.",
      "a": "Metronidazol 250 mg VO c/8–12 h por tiempo corto."
    },
    {
      "d": "L-ornitina L-aspartato (adyuvante)",
      "dose": "20–30 g/día IV en infusión"
    },
    {
      "d": "Corregir K⁺, volemia y suspender sedantes"
    },
    {
      "d": "Nutrición",
      "dose": "35–40 kcal/kg/día y proteína 1,2–1,5 g/kg/día",
      "n": "No restringir proteína."
    }
  ],
  "goals": [
    "Mejoría del grado de West Haven",
    "2–3 deposiciones al día"
  ],
  "alerts": [
    "Evita benzodiazepinas",
    "Descarta otras causas: hipoglucemia, HSD, Wernicke"
  ],
  "rel": [
    "mi-cirrosis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "EASL 2022 encefalopatía hepática · AASLD/EASL 2014",
    "dif": [
      "L-ornitina L-aspartato y rifaximina disponibles en Colombia."
    ]
  }
},
{
  "id": "hda-nv",
  "sys": "Gastroenterología y hepatología",
  "group": "Sangrado digestivo",
  "name": "Hemorragia digestiva alta no variceal",
  "aka": "hda hemorragia digestiva alta ulcera peptica melenas hematemesis omeprazol",
  "page": "Fuente: ACG 2021 · ESGE 2021",
  "sub": "Hematemesis, melenas o sangre en SNG sin sospecha de hipertensión portal. Estratifica con Glasgow-Blatchford.",
  "flow": [
    [
      "1",
      "Reanimación y transfusión restrictiva"
    ],
    [
      "2",
      "IBP IV"
    ],
    [
      "3",
      "Endoscopia < 24 h"
    ],
    [
      "4",
      "IBP alta dosis post-terapia endoscópica"
    ]
  ],
  "criteria": [
    "Glasgow-Blatchford 0–1: puede manejarse ambulatorio.",
    "Suspende AINE; ASA en prevención secundaria se reinicia pronto tras hemostasia."
  ],
  "orders": [
    {
      "d": "Dos accesos gruesos, cristaloides, hemoclasificación"
    },
    {
      "d": "Transfusión restrictiva",
      "dose": "Glóbulos rojos si Hb < 7 g/dL (< 8 si enfermedad cardiovascular)"
    },
    {
      "d": "Omeprazol o esomeprazol",
      "dose": "80 mg IV en bolo, luego 40 mg IV c/12 h",
      "n": "Tras terapia endoscópica de alto riesgo: 40 mg IV c/12 h o 8 mg/h por 72 h.",
      "a": "Pantoprazol 80 mg IV y luego 40 mg IV c/12 h."
    },
    {
      "d": "Eritromicina (preendoscopia)",
      "dose": "250 mg IV 30–120 min antes de la endoscopia",
      "n": "Mejora la visualización."
    },
    {
      "d": "Endoscopia digestiva alta < 24 h"
    }
  ],
  "goals": [
    "Hb ≥ 7 (≥ 8 si cardiópata)",
    "Hemostasia endoscópica"
  ],
  "alerts": [
    "No uses ácido tranexámico (sin beneficio y más trombosis)",
    "Inestable pese a reanimación: endoscopia urgente o angiografía"
  ],
  "rel": [
    "c-gbs"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACG 2021 · ESGE 2021",
    "dif": []
  }
},
{
  "id": "hda-v",
  "sys": "Gastroenterología y hepatología",
  "group": "Sangrado digestivo",
  "name": "Hemorragia digestiva alta variceal",
  "aka": "varices esofagicas sangrado variceal cirrosis terlipresina octreotide",
  "page": "Fuente: Baveno VII 2022 · AASLD 2024 hipertensión portal",
  "sub": "Sangrado alto en paciente con cirrosis o hipertensión portal: trátalo como variceal hasta demostrar lo contrario.",
  "flow": [
    [
      "1",
      "Vasoactivo ya"
    ],
    [
      "2",
      "Ceftriaxona"
    ],
    [
      "3",
      "Transfusión restrictiva"
    ],
    [
      "4",
      "Endoscopia < 12 h con ligadura"
    ],
    [
      "5",
      "TIPS si falla o alto riesgo"
    ]
  ],
  "criteria": [
    "Child-Pugh C < 14 o B > 7 con sangrado activo: considerar TIPS preventivo en 72 h."
  ],
  "orders": [
    {
      "d": "Terlipresina",
      "dose": "2 mg IV c/4 h (1 mg si < 50 kg) hasta control, luego 1 mg c/4 h por 2–5 días",
      "a": "Octreotide 50 mcg IV bolo + 50 mcg/h, o somatostatina 250 mcg bolo + 250 mcg/h."
    },
    {
      "d": "Ceftriaxona",
      "dose": "1 g IV c/24 h por 7 días",
      "a": "Ciprofloxacino 400 mg IV c/12 h si alergia."
    },
    {
      "d": "Transfusión restrictiva",
      "dose": "Glóbulos rojos si Hb < 7; meta 7–9 g/dL",
      "n": "Evita sobrecarga de volumen (aumenta la presión portal)."
    },
    {
      "d": "Omeprazol",
      "dose": "40 mg IV c/12 h hasta la endoscopia"
    },
    {
      "d": "Lactulosa",
      "dose": "25 mL c/8–12 h para prevenir encefalopatía"
    },
    {
      "d": "Endoscopia < 12 h con ligadura",
      "a": "Sangrado incontrolable: balón de Sengstaken (máx 24 h) o prótesis esofágica y TIPS de rescate."
    }
  ],
  "goals": [
    "Hb 7–9 g/dL",
    "Control del sangrado y sin resangrado a 5 días"
  ],
  "alerts": [
    "Terlipresina: isquemia periférica o coronaria, hiponatremia",
    "Protege la vía aérea si hay hematemesis masiva o encefalopatía"
  ],
  "rel": [
    "mi-cirrosis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Baveno VII 2022 · AASLD 2024 hipertensión portal",
    "dif": [
      "Terlipresina y octreotide disponibles; somatostatina con disponibilidad variable."
    ]
  }
},
{
  "id": "hdb",
  "sys": "Gastroenterología y hepatología",
  "group": "Sangrado digestivo",
  "name": "Hemorragia digestiva baja",
  "aka": "hdb hemorragia digestiva baja hematoquecia rectorragia diverticular",
  "page": "Fuente: ACG 2023 · BSG 2019",
  "sub": "Hematoquecia o rectorragia. Estratifica con Oakland (≤ 8: alta segura).",
  "flow": [
    [
      "1",
      "Reanima y descarta HDA (15 % de hematoquecias con shock)"
    ],
    [
      "2",
      "Estable: colonoscopia electiva hospitalaria"
    ],
    [
      "3",
      "Inestable: angioTAC → embolización"
    ]
  ],
  "criteria": [
    "BUN/creatinina alto o sangre en SNG sugiere origen alto."
  ],
  "orders": [
    {
      "d": "Cristaloides y dos accesos"
    },
    {
      "d": "Transfusión",
      "dose": "Glóbulos rojos si Hb < 7 (< 8 si cardiovascular)"
    },
    {
      "d": "AngioTAC abdominal si inestable o sangrado activo",
      "a": "Sin angioTAC: EVDA para descartar origen alto y remisión."
    },
    {
      "d": "Preparación para colonoscopia",
      "dose": "Polietilenglicol 4–6 L VO en 3–4 h (por SNG si es necesario)"
    },
    {
      "d": "Revisar antitrombóticos",
      "n": "Suspende AINE y anticoagulantes; ASA en prevención secundaria usualmente se mantiene."
    }
  ],
  "goals": [
    "Estabilidad hemodinámica",
    "Localización del sangrado"
  ],
  "alerts": [
    "Anticoagulado con sangrado grave: revierte (ver ficha de HIC para antídotos)"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACG 2023 · BSG 2019",
    "dif": []
  }
},
{
  "id": "panc",
  "sys": "Gastroenterología y hepatología",
  "group": "Páncreas y peritoneo",
  "name": "Pancreatitis aguda",
  "aka": "pancreatitis aguda lipasa amilasa biliar alcohol atlanta",
  "page": "Fuente: ACG 2024 pancreatitis aguda · IAP/APA 2013",
  "sub": "2 de 3: dolor típico, lipasa o amilasa > 3 veces lo normal, imagen compatible. Gravedad por Atlanta revisada.",
  "flow": [
    [
      "1",
      "Líquidos moderados"
    ],
    [
      "2",
      "Analgesia"
    ],
    [
      "3",
      "Dieta oral temprana"
    ],
    [
      "4",
      "Causa: biliar → CPRE si colangitis; colecistectomía"
    ]
  ],
  "criteria": [
    "No se necesita TAC al ingreso si el diagnóstico es claro; hazla a las 72–96 h si no mejora.",
    "Pide ecografía abdominal, triglicéridos y calcio."
  ],
  "orders": [
    {
      "d": "Lactato de Ringer",
      "dose": "Bolo 10 mL/kg si hay hipovolemia, luego 1,5 mL/kg/h",
      "calc": {
        "t": "kgh",
        "lo": 1.5,
        "hi": 1.5,
        "conc": 1,
        "unit": "mL"
      },
      "n": "Reevalúa a las 12 h; evita reanimación agresiva.",
      "a": "SSN 0,9 % si no hay Lactato de Ringer."
    },
    {
      "d": "Analgesia",
      "dose": "Dipirona 1–2 g IV c/6–8 h y/o morfina 2–4 mg IV c/4 h o hidromorfona 0,5–1 mg IV c/4 h",
      "a": "Tramadol 50–100 mg IV c/8 h."
    },
    {
      "d": "Dieta oral",
      "dose": "Iniciar en 24–72 h según tolerancia",
      "a": "Si no tolera a los 3–5 días: nutrición enteral por sonda."
    },
    {
      "d": "Antiemético",
      "dose": "Ondansetrón 4–8 mg IV c/8 h",
      "a": "Metoclopramida 10 mg IV c/8 h."
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h"
    }
  ],
  "goals": [
    "Diuresis > 0,5 mL/kg/h",
    "Tolerancia a la vía oral"
  ],
  "alerts": [
    "No antibióticos profilácticos",
    "CPRE < 24 h si colangitis",
    "Hipertrigliceridemia > 1000: insulina en infusión o plasmaféresis"
  ],
  "rel": [
    "c-bisap"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACG 2024 pancreatitis aguda · IAP/APA 2013",
    "dif": [
      "La dipirona (metamizol) es de uso amplio en Colombia como analgésico de base."
    ]
  }
},
{
  "id": "pbe",
  "sys": "Gastroenterología y hepatología",
  "group": "Páncreas y peritoneo",
  "name": "Peritonitis bacteriana espontánea (PBE)",
  "aka": "pbe peritonitis bacteriana espontanea ascitis cirrosis paracentesis",
  "page": "Fuente: AASLD 2021 ascitis · EASL 2018 cirrosis descompensada",
  "sub": "Ascitis con PMN ≥ 250/mm³ sin fuente quirúrgica. Paracentesis diagnóstica a todo cirrótico con ascitis que se hospitaliza.",
  "flow": [
    [
      "1",
      "Paracentesis: PMN, cultivo en frascos de hemocultivo"
    ],
    [
      "2",
      "Antibiótico"
    ],
    [
      "3",
      "Albúmina días 1 y 3"
    ],
    [
      "4",
      "Profilaxis secundaria"
    ]
  ],
  "criteria": [
    "Sospecha peritonitis secundaria si: proteínas > 1 g/dL, glucosa < 50, LDH alta o polimicrobiana."
  ],
  "orders": [
    {
      "d": "Ceftriaxona (adquirida en comunidad)",
      "dose": "2 g IV c/24 h por 5–7 días",
      "a": "Cefotaxima 2 g IV c/8 h; ciprofloxacino si alergia y no hay profilaxis previa con quinolona."
    },
    {
      "d": "Piperacilina-tazobactam (nosocomial)",
      "dose": "4,5 g IV c/6 h",
      "a": "Meropenem 1 g IV c/8 h si riesgo de BLEE o shock."
    },
    {
      "d": "Albúmina 20 %",
      "dose": "1,5 g/kg el día 1 y 1 g/kg el día 3",
      "calc": {
        "t": "kg",
        "lo": 1.5,
        "hi": 1.5,
        "unit": "g",
        "label": "día 1"
      },
      "n": "Indicada si Cr > 1, BUN > 30 o bilirrubina > 4."
    },
    {
      "d": "Paracentesis de control a las 48 h si no mejora",
      "n": "Falla si PMN no bajan ≥ 25 %."
    },
    {
      "d": "Profilaxis secundaria al egreso",
      "dose": "Norfloxacino 400 mg/día o ciprofloxacino 500 mg/día",
      "a": "TMP-SMX 160/800 mg/día."
    }
  ],
  "goals": [
    "Descenso de PMN ≥ 25 % a 48 h",
    "Prevención de síndrome hepatorrenal"
  ],
  "alerts": [
    "Suspende betabloqueador si hay hipotensión o LRA",
    "Evita AINE y nefrotóxicos"
  ],
  "rel": [
    "r-ascitis",
    "mi-cirrosis",
    "mi-dp"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AASLD 2021 ascitis · EASL 2018 cirrosis descompensada",
    "dif": []
  }
},
{
  "id": "shr",
  "sys": "Gastroenterología y hepatología",
  "group": "Hígado",
  "name": "Síndrome hepatorrenal (SHR-LRA)",
  "aka": "sindrome hepatorrenal shr lra cirrosis terlipresina albumina",
  "page": "Fuente: ICA/ADQI 2024 · AASLD 2021",
  "sub": "LRA en cirrosis con ascitis (↑ Cr ≥ 0,3 mg/dL en 48 h o ≥ 50 %) sin respuesta a 48 h de albúmina, sin shock ni nefrotóxicos ni daño estructural.",
  "flow": [
    [
      "1",
      "Suspende diuréticos y nefrotóxicos"
    ],
    [
      "2",
      "Albúmina 48 h"
    ],
    [
      "3",
      "Sin respuesta: vasoconstrictor + albúmina"
    ],
    [
      "4",
      "Trasplante: remisión"
    ]
  ],
  "criteria": [
    "Descarta PBE, sangrado y obstrucción urinaria."
  ],
  "orders": [
    {
      "d": "Albúmina 20 %",
      "dose": "1 g/kg/día por 2 días (máx 100 g/día)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "g",
        "label": "/día",
        "max": 100
      }
    },
    {
      "d": "Terlipresina",
      "dose": "1 mg IV c/4–6 h (o 2 mg/24 h en infusión continua); subir hasta 2 mg c/4–6 h si Cr no baja ≥ 25 % al día 3",
      "n": "+ albúmina 20–40 g/día.",
      "a": "Noradrenalina 0,5–3 mg/h en UCI + albúmina."
    },
    {
      "d": "Balance hídrico estricto"
    }
  ],
  "goals": [
    "Cr ↓ ≥ 25 % a 72 h",
    "Cr < 1,5 mg/dL (respuesta completa)"
  ],
  "alerts": [
    "Terlipresina contraindicada si SatO₂ < 90 % o ACLF grado 3 con Cr ≥ 5",
    "Vigila sobrecarga de volumen con la albúmina"
  ],
  "rel": [
    "mi-cirrosis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ICA/ADQI 2024 · AASLD 2021 · EASL 2018",
    "dif": [
      "Midodrina con disponibilidad limitada: la combinación midodrina-octreotide casi no se usa."
    ]
  }
},
{
  "id": "colico-abd",
  "sys": "Gastroenterología y hepatología",
  "group": "Síntomas digestivos",
  "name": "Cólico abdominal inespecífico",
  "aka": "colico abdominal dolor abdominal espasmo buscapina hioscina",
  "page": "Fuente: Revisiones de dolor abdominal en urgencias",
  "sub": "Dolor abdominal tipo cólico sin signos de alarma tras examen.",
  "flow": [
    [
      "1",
      "Descarta abdomen quirúrgico y embarazo"
    ],
    [
      "2",
      "Antiespasmódico + analgésico"
    ],
    [
      "3",
      "Reevalúa"
    ]
  ],
  "criteria": [
    "Alarma: peritonismo, fiebre, sangrado, vómito persistente, > 65 años, inmunosupresión: estudia antes de dar de alta."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Butilbromuro de hioscina + dipirona",
      "dose": "Hioscina 20 mg + dipirona 2,5 g IV lento (o IM)",
      "a": "Hioscina 20 mg IV + paracetamol 1 g IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Butilbromuro de hioscina",
      "dose": "10–20 mg VO c/8 h por 3 días"
    },
    {
      "d": "Paracetamol",
      "dose": "500 mg–1 g VO c/6–8 h"
    }
  ],
  "goals": [
    "Dolor controlado y examen tranquilo en la reevaluación"
  ],
  "alerts": [
    "Dolor que no cede o empeora: no es cólico simple"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Revisiones de dolor abdominal en urgencias",
    "dif": []
  }
},
{
  "id": "diarrea",
  "sys": "Gastroenterología y hepatología",
  "group": "Síntomas digestivos",
  "name": "Diarrea aguda",
  "aka": "diarrea aguda gastroenteritis disenteria suero oral loperamida",
  "page": "Fuente: ACG 2016 diarrea aguda · IDSA 2017",
  "sub": "≥ 3 deposiciones líquidas en 24 h por < 14 días.",
  "flow": [
    [
      "1",
      "Evalúa deshidratación"
    ],
    [
      "2",
      "Suero de rehidratación oral"
    ],
    [
      "Disentería o sepsis",
      "Antibiótico"
    ],
    [
      "Sin fiebre ni sangre",
      "Loperamida si hace falta"
    ]
  ],
  "criteria": [
    "Coprocultivo: disentería, fiebre, inmunosupresión, brote.",
    "Antibiótico reciente: piensa en C. difficile."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Deshidratación grave: Lactato de Ringer",
      "dose": "20–30 mL/kg en bolo y reevaluar",
      "calc": {
        "t": "kg",
        "lo": 20,
        "hi": 30,
        "unit": "mL"
      }
    },
    {
      "d": "Ondansetrón si vómito",
      "dose": "4–8 mg IV/VO"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Suero de rehidratación oral (osmolaridad reducida)",
      "dose": "200–400 mL después de cada deposición + a libre demanda"
    },
    {
      "d": "Loperamida (sin fiebre ni sangre)",
      "dose": "4 mg VO inicial, luego 2 mg por deposición (máx 16 mg/día)",
      "a": "Racecadotrilo 100 mg VO c/8 h."
    },
    {
      "d": "Disentería o diarrea del viajero grave",
      "dose": "Azitromicina 1 g VO dosis única o 500 mg/día por 3 días",
      "a": "Ciprofloxacino 500 mg c/12 h por 3 días (resistencia creciente)."
    },
    {
      "d": "C. difficile",
      "dose": "Vancomicina 125 mg VO c/6 h por 10 días",
      "a": "Metronidazol 500 mg VO c/8 h por 10–14 días si no hay otra opción."
    }
  ],
  "goals": [
    "Hidratación adecuada"
  ],
  "alerts": [
    "No loperamida en disentería ni sospecha de C. difficile"
  ],
  "rel": [
    "mi-diarrea"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACG 2016 diarrea aguda · IDSA 2017 · OMS",
    "dif": []
  }
},
{
  "id": "dispepsia",
  "sys": "Gastroenterología y hepatología",
  "group": "Síntomas digestivos",
  "name": "Dispepsia / epigastralgia",
  "aka": "dispepsia epigastralgia gastritis dolor epigastrico omeprazol helicobacter",
  "page": "Fuente: ACG/CAG 2017 dispepsia · Maastricht VI 2022",
  "sub": "Dolor o ardor epigástrico, llenura posprandial o saciedad precoz.",
  "flow": [
    [
      "1",
      "Descarta SCA, pancreatitis, vía biliar"
    ],
    [
      "2",
      "Alarma → endoscopia"
    ],
    [
      "3",
      "Sin alarma: IBP y H. pylori"
    ]
  ],
  "criteria": [
    "Alarma: > 50 años o antecedente familiar de cáncer gástrico, pérdida de peso, anemia, sangrado, disfagia, vómito persistente, masa.",
    "Colombia tiene alta incidencia de cáncer gástrico: umbral bajo para endoscopia."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Antiácido",
      "dose": "Hidróxido de aluminio + magnesio 10–20 mL VO"
    },
    {
      "d": "Omeprazol",
      "dose": "40 mg IV o VO",
      "a": "Esomeprazol o pantoprazol 40 mg."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Omeprazol",
      "dose": "20–40 mg VO en ayunas c/24 h por 4–8 semanas",
      "a": "Esomeprazol 40 mg o lansoprazol 30 mg."
    },
    {
      "d": "Prueba de H. pylori",
      "n": "Antígeno en heces o prueba de aliento; tratar si es positivo."
    }
  ],
  "goals": [
    "Control de síntomas en 4–8 semanas"
  ],
  "alerts": [
    "ECG en epigastralgia con factores de riesgo cardiovascular"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACG/CAG 2017 dispepsia · Maastricht VI 2022",
    "dif": [
      "Colombia es zona de alta incidencia de cáncer gástrico."
    ]
  }
},
{
  "id": "nauseas",
  "sys": "Gastroenterología y hepatología",
  "group": "Síntomas digestivos",
  "name": "Náuseas y vómito",
  "aka": "nauseas vomito emesis ondansetron metoclopramida dimenhidrinato",
  "page": "Fuente: Revisiones de antieméticos · ACOG 2018 náuseas del embarazo",
  "sub": "Tratamiento sintomático tras descartar causa grave (embarazo, obstrucción, CAD, IAM, HTEC).",
  "flow": [
    [
      "1",
      "Busca la causa"
    ],
    [
      "2",
      "Hidratación"
    ],
    [
      "3",
      "Antiemético según contexto"
    ]
  ],
  "criteria": [
    "Prueba de embarazo en mujer en edad fértil."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ondansetrón",
      "dose": "4–8 mg IV lento",
      "n": "Prolonga QT.",
      "a": "Metoclopramida 10 mg IV lento (extrapiramidalismo) o dimenhidrinato 50 mg IV."
    },
    {
      "d": "SSN 0,9 % o Lactato de Ringer si deshidratación",
      "dose": "500–1000 mL"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ondansetrón",
      "dose": "4–8 mg VO c/8 h por 2–3 días",
      "a": "Metoclopramida 10 mg c/8 h por máx 5 días; dimenhidrinato 50 mg c/6–8 h."
    },
    {
      "d": "Embarazo",
      "dose": "Doxilamina 10 mg + piridoxina 10 mg, 2 tabletas en la noche (hasta 4/día)"
    }
  ],
  "goals": [
    "Tolerancia oral"
  ],
  "alerts": [
    "Metoclopramida: evitar en Parkinson y epilepsia"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Revisiones de antieméticos · ACOG 2018 náuseas del embarazo",
    "dif": [
      "Dimenhidrinato de uso amplio en Colombia."
    ]
  }
},
{
  "id": "pirosis",
  "sys": "Gastroenterología y hepatología",
  "group": "Síntomas digestivos",
  "name": "Pirosis (reflujo gastroesofágico)",
  "aka": "pirosis agrieras reflujo erge ardor",
  "page": "Fuente: ACG 2022 ERGE",
  "sub": "Ardor retroesternal que asciende, empeora acostado o después de comer.",
  "flow": [
    [
      "1",
      "Descarta SCA"
    ],
    [
      "2",
      "Antiácido en urgencias"
    ],
    [
      "3",
      "IBP 4–8 semanas"
    ]
  ],
  "criteria": [
    "Disfagia, pérdida de peso o sangrado: endoscopia."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Antiácido",
      "dose": "Hidróxido de aluminio + magnesio 10–20 mL VO",
      "a": "Alginato 10–20 mL."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Omeprazol",
      "dose": "20 mg VO c/24 h en ayunas por 4–8 semanas"
    },
    {
      "d": "Medidas",
      "n": "Cabecera elevada, cena 3 h antes de acostarse, bajar de peso, evitar alcohol y comidas copiosas."
    }
  ],
  "goals": [
    "Sin síntomas"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACG 2022 ERGE",
    "dif": []
  }
}
];
