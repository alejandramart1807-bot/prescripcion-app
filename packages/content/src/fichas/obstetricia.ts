// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "hpp",
  "sys": "Obstetricia",
  "group": "Parto y puerperio",
  "name": "Hemorragia posparto (código rojo)",
  "aka": "hemorragia posparto codigo rojo atonia uterina oxitocina misoprostol metilergonovina acido tranexamico",
  "page": "Fuente: Guía colombiana · FIGO 2022 · OMS 2023",
  "sub": "Pérdida ≥ 500 mL (vaginal) o ≥ 1000 mL (cesárea) o inestabilidad. Activa código rojo y piensa en las 4 T.",
  "flow": [
    [
      "0 min",
      "Activar, 2 accesos, O₂, masaje uterino"
    ],
    [
      "Uterotónicos",
      "Oxitocina → metilergonovina → misoprostol"
    ],
    [
      "< 3 h",
      "Ácido tranexámico"
    ],
    [
      "20–30 min sin control",
      "Balón, sutura compresiva, cirugía"
    ]
  ],
  "criteria": [
    "4 T: tono (70 %), trauma, tejido (retención), trombina.",
    "Índice de choque > 0,9 = sangrado significativo."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Oxitocina",
      "dose": "5 UI IV lenta + 30–40 UI en 500 mL de cristaloide a 125 mL/h",
      "a": "10 UI IM si no hay acceso."
    },
    {
      "d": "Ácido tranexámico",
      "dose": "1 g IV en 10 min; repetir 1 g a los 30 min si persiste (dentro de 3 h del parto)"
    },
    {
      "d": "Metilergonovina",
      "dose": "0,2 mg IM c/2–4 h (máx 5 dosis)",
      "n": "Contraindicada en HTA/preeclampsia."
    },
    {
      "d": "Misoprostol",
      "dose": "800 mcg sublingual"
    },
    {
      "d": "Cristaloide tibio 500 mL en bolo y reevaluar; transfusión temprana según choque",
      "n": "Glóbulos rojos O negativo si no hay pruebas; relación 1:1:1 si masiva."
    },
    {
      "d": "Sonda vesical, masaje bimanual y revisión del canal"
    }
  ],
  "goals": [
    "Control del sangrado",
    "Índice de choque < 0,9"
  ],
  "alerts": [
    "Taponamiento con balón como puente a cirugía"
  ],
  "rel": [
    "tm"
  ],
  "g": {
    "co": {
      "n": "Protocolo código rojo y GPC Complicaciones del embarazo (HPP), MinSalud",
      "y": "2013",
      "st": "ok",
      "txt": "El código rojo es el estándar operativo en Colombia."
    },
    "intl": "FIGO 2022 · OMS 2023 · WOMAN",
    "dif": []
  }
},
{
  "id": "app",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Amenaza de parto pretérmino",
  "aka": "amenaza de parto pretermino tocolisis nifedipino betametasona sulfato de magnesio neuroproteccion",
  "page": "Fuente: Guía colombiana · ACOG 2016/2017 · FIGO 2021",
  "sub": "Contracciones regulares con cambios cervicales entre 24 y 34 semanas.",
  "flow": [
    [
      "24–34 sem",
      "Corticoide antenatal"
    ],
    [
      "Tocolisis 48 h",
      "Para completar corticoide"
    ],
    [
      "< 32 sem",
      "Sulfato de magnesio neuroprotector"
    ],
    [
      "EGB desconocido",
      "Profilaxis intraparto"
    ]
  ],
  "criteria": [
    "No tocolizar si: corioamnionitis, abrupción, preeclampsia grave, muerte fetal, estado fetal no tranquilizador."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Betametasona",
      "dose": "12 mg IM c/24 h × 2 dosis",
      "a": "Dexametasona 6 mg IM c/12 h × 4 dosis."
    },
    {
      "d": "Nifedipino (tocolisis)",
      "dose": "20 mg VO, luego 10–20 mg c/4–6 h por 48 h (máx 160 mg/día)",
      "a": "Atosibán 6,75 mg IV, luego 300 mcg/min × 3 h y 100 mcg/min hasta 45 h."
    },
    {
      "d": "Sulfato de magnesio (< 32 semanas, parto inminente)",
      "dose": "4 g IV en 20 min + 1 g/h hasta el parto (máx 24 h)"
    },
    {
      "d": "Profilaxis de EGB si estado desconocido",
      "dose": "Penicilina G 5 millones U IV, luego 2,5–3 millones U c/4 h",
      "a": "Ampicilina 2 g y luego 1 g c/4 h; cefazolina 2 g y 1 g c/8 h si alergia no grave."
    }
  ],
  "goals": [
    "Corticoide completo antes del parto"
  ],
  "alerts": [
    "Nifedipino + magnesio: vigila hipotensión"
  ],
  "rel": [
    "rpm"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "ACOG 2016/2017 · FIGO 2021",
    "dif": []
  }
},
{
  "id": "rpm",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Ruptura prematura de membranas",
  "aka": "ruptura prematura de membranas rpm pretermino latencia ampicilina azitromicina",
  "page": "Fuente: Guía colombiana · ACOG 2020 RPM",
  "sub": "Salida de líquido amniótico antes del trabajo de parto.",
  "flow": [
    [
      "< 34 sem",
      "Expectante + antibiótico de latencia + corticoide"
    ],
    [
      "≥ 34 sem",
      "Terminar"
    ],
    [
      "< 32 sem",
      "+ sulfato de magnesio si parto inminente"
    ]
  ],
  "criteria": [
    "Signos de Triple I: terminar el embarazo."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Antibiótico de latencia (< 34 sem)",
      "dose": "Ampicilina 2 g IV c/6 h × 48 h + azitromicina 1 g VO dosis única, luego amoxicilina 250 mg VO c/8 h × 5 días",
      "a": "Eritromicina 250 mg c/6 h en lugar de azitromicina."
    },
    {
      "d": "Betametasona 12 mg IM c/24 h × 2"
    },
    {
      "d": "Vigilancia de infección",
      "n": "Temperatura, FC materna y fetal, leucocitos."
    },
    {
      "d": "≥ 34 semanas: inducción",
      "dose": "Oxitocina (ver ficha de conducción)"
    }
  ],
  "goals": [
    "Prolongar latencia sin infección"
  ],
  "alerts": [
    "No tactos vaginales innecesarios"
  ],
  "rel": [
    "app",
    "triple-i"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "ACOG 2020 RPM",
    "dif": []
  }
},
{
  "id": "triple-i",
  "sys": "Obstetricia",
  "group": "Parto y puerperio",
  "name": "Triple I (corioamnionitis)",
  "aka": "triple i corioamnionitis infeccion intraamniotica fiebre intraparto ampicilina gentamicina",
  "page": "Fuente: Guía colombiana · ACOG 2017 Triple I",
  "sub": "Fiebre ≥ 39 °C (o 38–38,9 °C persistente) + taquicardia fetal, leucocitosis o líquido purulento.",
  "flow": [
    [
      "1",
      "Antibiótico"
    ],
    [
      "2",
      "Antipirético"
    ],
    [
      "3",
      "Terminación del embarazo"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ampicilina + gentamicina",
      "dose": "Ampicilina 2 g IV c/6 h + gentamicina 5 mg/kg IV c/24 h",
      "calc": {
        "t": "kg",
        "lo": 5,
        "hi": 5,
        "unit": "mg",
        "label": "gentamicina"
      },
      "a": "Alergia: clindamicina 900 mg c/8 h + gentamicina."
    },
    {
      "d": "Si cesárea",
      "dose": "Añadir clindamicina 900 mg IV o metronidazol 500 mg IV"
    },
    {
      "d": "Paracetamol",
      "dose": "1 g IV/VO c/6 h"
    }
  ],
  "goals": [
    "Parto con cobertura antibiótica"
  ],
  "alerts": [
    "No es indicación de cesárea por sí sola"
  ],
  "rel": [
    "endometritis"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "ACOG 2017 Triple I",
    "dif": []
  }
},
{
  "id": "endometritis",
  "sys": "Obstetricia",
  "group": "Parto y puerperio",
  "name": "Endometritis posparto",
  "aka": "endometritis posparto fiebre puerperal clindamicina gentamicina",
  "page": "Fuente: Guía colombiana · ACOG · Cochrane",
  "sub": "Fiebre posparto con útero doloroso y loquios fétidos, más frecuente tras cesárea.",
  "flow": [
    [
      "1",
      "Clindamicina + gentamicina"
    ],
    [
      "Afebril 24–48 h",
      "Suspender (sin VO)"
    ],
    [
      "No mejora 72 h",
      "Absceso, tromboflebitis pélvica, restos"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Clindamicina + gentamicina",
      "dose": "Clindamicina 900 mg IV c/8 h + gentamicina 5 mg/kg IV c/24 h",
      "calc": {
        "t": "kg",
        "lo": 5,
        "hi": 5,
        "unit": "mg",
        "label": "gentamicina"
      },
      "a": "Ampicilina-sulbactam 3 g IV c/6 h."
    },
    {
      "d": "+ Ampicilina si no mejora (enterococo)",
      "dose": "2 g IV c/6 h"
    }
  ],
  "goals": [
    "Afebril 24–48 h"
  ],
  "alerts": [
    "Lactancia compatible"
  ],
  "rel": [
    "triple-i"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "ACOG · Cochrane",
    "dif": []
  }
},
{
  "id": "anti-d",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Isoinmunización Rh: inmunoglobulina anti-D",
  "aka": "isoinmunizacion rh inmunoglobulina anti d rhogam coombs indirecto",
  "page": "Fuente: Guía colombiana · ACOG 2017 · RCOG",
  "sub": "Gestante Rh(D) negativa no sensibilizada (Coombs indirecto negativo).",
  "flow": [
    [
      "28 semanas",
      "Anti-D 300 mcg"
    ],
    [
      "Posparto ≤ 72 h",
      "Si RN Rh +"
    ],
    [
      "Eventos sensibilizantes",
      "Aborto, ectópico, sangrado, trauma, procedimientos"
    ]
  ],
  "criteria": [
    "Hemorragia feto-materna grande: Kleihauer-Betke para dosis adicional."
  ],
  "orders": [
    {
      "d": "Inmunoglobulina anti-D",
      "dose": "300 mcg (1500 UI) IM a las 28 semanas y ≤ 72 h posparto si el RN es Rh +"
    },
    {
      "d": "Evento < 12 semanas",
      "dose": "50–120 mcg IM (o 300 mcg si es la disponible)"
    }
  ],
  "goals": [
    "Prevención de sensibilización"
  ],
  "alerts": [
    "Ya sensibilizada: no sirve; seguimiento por medicina materno-fetal"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "ACOG 2017 · RCOG",
    "dif": []
  }
},
{
  "id": "dmg",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Diabetes gestacional",
  "aka": "diabetes gestacional ptog insulina nph metformina embarazo",
  "page": "Fuente: Guía colombiana · ADA 2026 · ACOG 2018",
  "sub": "PTOG 75 g entre 24 y 28 semanas (≥ 1 valor: ayunas ≥ 92, 1 h ≥ 180, 2 h ≥ 153 mg/dL).",
  "flow": [
    [
      "1",
      "Nutrición y actividad 1–2 semanas"
    ],
    [
      "No en meta",
      "Insulina"
    ],
    [
      "Alternativa",
      "Metformina"
    ]
  ],
  "criteria": [
    "Metas: ayunas < 95, 1 h posprandial < 140, 2 h < 120 mg/dL."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Nutrición y actividad física",
      "n": "Glucometría en ayunas y posprandial."
    },
    {
      "d": "Ayunas altas",
      "dose": "Insulina NPH 0,1–0,2 U/kg al acostarse",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.2,
        "unit": "U"
      }
    },
    {
      "d": "Posprandiales altas",
      "dose": "Insulina regular o análogo rápido 2–4 U antes de la comida implicada"
    },
    {
      "d": "Alternativa",
      "dose": "Metformina 500 mg con la cena, titular hasta 2000–2500 mg/día",
      "n": "Cruza la placenta; informar."
    },
    {
      "d": "Posparto",
      "n": "Suspender tratamiento; PTOG 75 g a las 4–12 semanas."
    }
  ],
  "goals": [
    "Glucemias en meta"
  ],
  "alerts": [
    "Evita glibenclamida"
  ],
  "rel": [
    "mi-dm",
    "r-embarazo"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "ADA 2026 · ACOG 2018",
    "dif": []
  }
},
{
  "id": "ive",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Interrupción voluntaria del embarazo (IVE) con medicamentos",
  "aka": "ive aborto farmacologico mifepristona misoprostol interrupcion voluntaria",
  "page": "Fuente: Guía colombiana · OMS 2022 atención del aborto",
  "sub": "En Colombia la IVE es un derecho hasta la semana 24 (Sentencia C-055/2022) y después bajo las causales.",
  "flow": [
    [
      "< 12 sem",
      "Mifepristona + misoprostol (o misoprostol solo)"
    ],
    [
      "≥ 12 sem",
      "Mifepristona + misoprostol repetido, institucional"
    ],
    [
      "Siempre",
      "Anti-D si Rh–, anticoncepción, analgesia"
    ]
  ],
  "criteria": [
    "Descarta ectópico si la ubicación no es clara."
  ],
  "orders": [
    {
      "d": "< 12 semanas",
      "dose": "Mifepristona 200 mg VO; 24–48 h después misoprostol 800 mcg bucal, sublingual o vaginal",
      "a": "Misoprostol solo: 800 mcg c/3 h (≥ 3 dosis)."
    },
    {
      "d": "≥ 12 semanas",
      "dose": "Mifepristona 200 mg; 24–48 h después misoprostol 400 mcg c/3 h hasta la expulsión"
    },
    {
      "d": "Analgesia",
      "dose": "Ibuprofeno 400–800 mg c/8 h"
    },
    {
      "d": "Anti-D si Rh negativa ≥ 12 semanas"
    },
    {
      "d": "Anticoncepción (DIU o implante pueden ponerse de inmediato)"
    }
  ],
  "goals": [
    "Aborto completo y seguro"
  ],
  "alerts": [
    "Sangrado > 2 toallas/hora × 2 h: consulta"
  ],
  "rel": [
    "anti-d",
    "ae"
  ],
  "g": {
    "co": {
      "n": "Sentencia C-055 de 2022 y Resolución 051 de 2023, MinSalud",
      "y": "2022/2023",
      "st": "ok",
      "txt": "Marco legal y lineamiento de atención de la IVE."
    },
    "intl": "OMS 2022 atención del aborto",
    "dif": [
      "Mifepristona con registro INVIMA; misoprostol disponible."
    ]
  }
},
{
  "id": "ectopico",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Embarazo ectópico: metotrexato",
  "aka": "embarazo ectopico metotrexato hcg salpingectomia",
  "page": "Fuente: ACOG 2018 · RCOG 2016",
  "sub": "Tratamiento médico solo en paciente estable y adherente.",
  "flow": [
    [
      "Inestable o roto",
      "Cirugía"
    ],
    [
      "Criterios médicos",
      "Metotrexato 50 mg/m²"
    ],
    [
      "Seguimiento",
      "hCG días 4 y 7 (descenso ≥ 15 %)"
    ]
  ],
  "criteria": [
    "Criterios: estable, hCG < 5000 mUI/mL, masa < 3,5–4 cm sin actividad cardíaca, sin contraindicación (ERC, hepatopatía, citopenias, lactancia).",
    "SC (m²) = √(talla cm × peso kg / 3600)."
  ],
  "orders": [
    {
      "d": "Metotrexato",
      "dose": "50 mg/m² IM dosis única"
    },
    {
      "d": "Laboratorios basales",
      "n": "Hemograma, Cr, transaminasas, Rh."
    },
    {
      "d": "Evitar",
      "n": "AINE, ácido fólico, alcohol, sol y relaciones hasta resolver."
    },
    {
      "d": "Anti-D si Rh negativa"
    }
  ],
  "goals": [
    "hCG negativa"
  ],
  "alerts": [
    "Dolor intenso o hipotensión: ruptura → cirugía"
  ],
  "rel": [
    "anti-d"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACOG 2018 · RCOG 2016",
    "dif": []
  }
},
{
  "id": "hiperemesis",
  "sys": "Obstetricia",
  "group": "Embarazo",
  "name": "Hiperémesis gravídica",
  "aka": "hiperemesis gravidica vomito embarazo doxilamina ondansetron tiamina",
  "page": "Fuente: ACOG 2018 · RCOG 2024",
  "sub": "Vómito persistente con pérdida > 5 % del peso, cetonuria o alteraciones electrolíticas.",
  "flow": [
    [
      "1",
      "Doxilamina-piridoxina"
    ],
    [
      "2",
      "+ antiemético"
    ],
    [
      "Hospital",
      "LEV + tiamina + electrolitos"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "SSN 0,9 % o Lactato de Ringer + KCl según K⁺"
    },
    {
      "d": "Tiamina",
      "dose": "100 mg IV antes de soluciones con glucosa"
    },
    {
      "d": "Antiemético",
      "dose": "Metoclopramida 10 mg IV c/8 h",
      "a": "Ondansetrón 4–8 mg IV c/8 h (preferible después de la semana 10); dimenhidrinato 50 mg IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Doxilamina 10 mg + piridoxina 10 mg",
      "dose": "2 tabletas en la noche; hasta 4/día"
    }
  ],
  "goals": [
    "Tolerancia oral y cetonuria negativa"
  ],
  "alerts": [
    "Encefalopatía de Wernicke si no hay tiamina"
  ],
  "rel": [
    "nauseas"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACOG 2018 · RCOG 2024",
    "dif": []
  }
},
{
  "id": "oxitocina",
  "sys": "Obstetricia",
  "group": "Parto y puerperio",
  "name": "Inducción y conducción del trabajo de parto",
  "aka": "induccion conduccion oxitocina misoprostol maduracion cervical bishop",
  "page": "Fuente: Guía colombiana · FIGO 2023 · ACOG",
  "sub": "Maduración cervical si Bishop < 6; oxitocina con monitoreo continuo.",
  "flow": [
    [
      "Bishop < 6",
      "Misoprostol o sonda Foley"
    ],
    [
      "Bishop ≥ 6",
      "Oxitocina"
    ],
    [
      "Taquisistolia",
      "Suspender oxitocina"
    ]
  ],
  "criteria": [
    "Contraindicado misoprostol con cicatriz uterina."
  ],
  "orders": [
    {
      "d": "Misoprostol",
      "dose": "25 mcg vaginal c/4–6 h o 25 mcg VO c/2 h",
      "a": "Sonda Foley transcervical 30–60 mL."
    },
    {
      "d": "Oxitocina",
      "dose": "Inicio 1–2 mU/min, subir 1–2 mU/min c/30–40 min (habitual ≤ 20 mU/min)",
      "dil": "10 UI en 1000 mL = 10 mU/mL",
      "calc": {
        "t": "min",
        "lo": 1,
        "hi": 20,
        "conc": 10,
        "unit": "mU"
      }
    }
  ],
  "goals": [
    "Actividad uterina adecuada (3–5 en 10 min)"
  ],
  "alerts": [
    "Taquisistolia (> 5 en 10 min): suspender, decúbito lateral, O₂"
  ],
  "rel": [
    "rpm",
    "hpp",
    "c-bishop"
  ],
  "g": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Referencia nacional; se complementa con ACOG, FIGO y OMS."
    },
    "intl": "FIGO 2023 · ACOG",
    "dif": []
  }
}
];
