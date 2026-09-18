// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "cad",
  "sys": "Endocrinología",
  "group": "Crisis hiperglucémicas",
  "name": "Cetoacidosis diabética (CAD)",
  "aka": "cad cetoacidosis diabetica cetonas acidosis insulina",
  "page": "Fuente: Guía colombiana · Consenso ADA/EASD/JBDS/AACE/DTS 2024 de crisis hiperglucémicas",
  "sub": "Glucosa ≥ 200 mg/dL o diabetes conocida, cetonemia ≥ 3 mmol/L (o cetonuria ≥ 2+) y pH < 7,3 o HCO₃⁻ < 18 mEq/L.",
  "flow": [
    [
      "1",
      "Líquidos"
    ],
    [
      "2",
      "Potasio: ¿≥ 3,5?"
    ],
    [
      "3",
      "Insulina IV"
    ],
    [
      "4",
      "Glucosa < 250: añade dextrosa"
    ],
    [
      "5",
      "Resolución → insulina SC"
    ]
  ],
  "criteria": [
    "Busca el desencadenante: infección, omisión de insulina, IAM, pancreatitis, iSGLT2 (CAD euglucémica), embarazo.",
    "Laboratorios c/1–2 h glucosa; c/2–4 h electrolitos, gases venosos, fósforo; brecha aniónica."
  ],
  "orders": [
    {
      "cat": "Líquidos"
    },
    {
      "d": "Lactato de Ringer o SSN 0,9 %",
      "dose": "1–1,5 L en la primera hora (15–20 mL/kg), luego 250–500 mL/h según volemia",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 20,
        "unit": "mL",
        "label": "1.ª hora"
      },
      "n": "Si el sodio corregido es normal o alto, pasa a SSN 0,45 % después de la primera hora.",
      "a": "Sin Lactato de Ringer: SSN 0,9 %."
    },
    {
      "cat": "Potasio (antes de la insulina)"
    },
    {
      "d": "Cloruro de potasio",
      "dose": "K⁺ < 3,5: 10–20 mEq/h y diferir insulina · 3,5–5,0: 20–30 mEq por litro de líquido · > 5,0: no dar, medir c/2 h",
      "n": "Por vena periférica máx ~10 mEq/h; hasta 20 mEq/h por catéter central con monitoreo."
    },
    {
      "cat": "Insulina"
    },
    {
      "d": "Insulina regular en infusión",
      "dose": "0,1 U/kg/h IV (sin bolo) o bolo 0,1 U/kg + 0,1 U/kg/h",
      "dil": "100 U en 100 mL SSN = 1 U/mL (purgar el equipo)",
      "calc": {
        "t": "kgh",
        "lo": 0.1,
        "hi": 0.1,
        "conc": 1,
        "unit": "U"
      },
      "n": "Meta: descenso de glucosa 50–70 mg/dL/h.",
      "a": "Sin bomba de infusión, CAD leve-moderada: análogo rápido SC 0,2 U/kg y luego 0,1 U/kg c/1 h (o 0,3 U/kg y luego 0,2 U/kg c/2 h)."
    },
    {
      "d": "Dextrosa cuando glucosa < 250 mg/dL",
      "dose": "DAD 5–10 % a 150–250 mL/h y bajar insulina a 0,05 U/kg/h",
      "n": "Mantener glucosa 150–250 mg/dL hasta resolver la cetosis.",
      "calc": {
        "t": "kgh",
        "lo": 0.05,
        "hi": 0.05,
        "conc": 1,
        "unit": "U"
      }
    },
    {
      "cat": "Otros"
    },
    {
      "d": "Bicarbonato solo si pH < 7,0",
      "dose": "100 mEq (100 mL de bicarbonato 8,4 %) en 400 mL de agua estéril + 20 mEq KCl en 2 h"
    },
    {
      "d": "Transición a insulina SC",
      "dose": "Basal (glargina 0,2–0,3 U/kg/día) 2 h antes de suspender la infusión",
      "n": "Resolución: β-hidroxibutirato < 0,6 mmol/L y pH ≥ 7,3 o HCO₃⁻ ≥ 18.",
      "calc": {
        "t": "kg",
        "lo": 0.2,
        "hi": 0.3,
        "unit": "U",
        "label": "basal/día"
      },
      "a": "Sin glargina: NPH 0,2–0,3 U/kg/día dividida en 2 dosis."
    }
  ],
  "goals": [
    "Glucosa ↓ 50–70 mg/dL/h",
    "K⁺ 4–5 mEq/L",
    "Cierre de la brecha aniónica y resolución de cetonemia"
  ],
  "alerts": [
    "No inicies insulina con K⁺ < 3,5",
    "CAD euglucémica con iSGLT2: da dextrosa desde el inicio",
    "Hipoglucemia e hipopotasemia son las complicaciones más frecuentes del tratamiento"
  ],
  "rel": [
    "c-ag",
    "c-nacorr",
    "mi-dm"
  ],
  "g": {
    "co": {
      "n": "GPC Diabetes mellitus tipo 1 en mayores de 15 años, MinSalud",
      "y": "2015",
      "st": "old",
      "txt": "Incluye la cetoacidosis; se complementa con el consenso internacional de crisis hiperglucémicas de 2024."
    },
    "intl": "Consenso ADA/EASD/JBDS/AACE/DTS 2024 de crisis hiperglucémicas",
    "dif": [
      "La cetonemia capilar no está en todos los servicios: usa brecha aniónica y gases venosos."
    ]
  }
},
{
  "id": "ehh",
  "sys": "Endocrinología",
  "group": "Crisis hiperglucémicas",
  "name": "Estado hiperglucémico hiperosmolar (EHH)",
  "aka": "ehh estado hiperosmolar coma hiperosmolar hiperglucemia deshidratacion",
  "page": "Fuente: Guía colombiana · Consenso ADA/EASD/JBDS/AACE/DTS 2024",
  "sub": "Glucosa > 600 mg/dL, osmolalidad efectiva > 300 mOsm/kg, sin cetoacidosis importante; paciente mayor y muy deshidratado.",
  "flow": [
    [
      "1",
      "Líquidos (pilar)"
    ],
    [
      "2",
      "Potasio"
    ],
    [
      "3",
      "Insulina a dosis baja cuando la glucosa deja de bajar"
    ],
    [
      "4",
      "Osmolalidad ↓ lenta"
    ]
  ],
  "criteria": [
    "Osmolalidad efectiva = 2 × Na + glucosa/18.",
    "Sodio corregido = Na + 1,6 × (glucosa − 100)/100."
  ],
  "orders": [
    {
      "d": "SSN 0,9 %",
      "dose": "1 L en la primera hora, luego 250–500 mL/h",
      "n": "Pasa a SSN 0,45 % si el sodio corregido sube y la volemia mejora.",
      "a": "Lactato de Ringer."
    },
    {
      "d": "Cloruro de potasio",
      "dose": "Igual que en CAD: K⁺ < 3,5 corregir antes de insulina; 3,5–5,0: 20–30 mEq/L de líquido"
    },
    {
      "d": "Insulina regular en infusión",
      "dose": "0,05 U/kg/h IV cuando la glucosa deje de bajar con líquidos solos",
      "dil": "1 U/mL",
      "calc": {
        "t": "kgh",
        "lo": 0.05,
        "hi": 0.05,
        "conc": 1,
        "unit": "U"
      }
    },
    {
      "d": "Dextrosa cuando glucosa < 300 mg/dL",
      "dose": "DAD 5 % y mantener glucosa 200–300 mg/dL hasta que mejore el estado mental"
    },
    {
      "d": "Tromboprofilaxis",
      "dose": "Enoxaparina 40 mg SC c/24 h",
      "a": "Heparina no fraccionada 5000 U SC c/8–12 h."
    }
  ],
  "goals": [
    "Osmolalidad ↓ 3–8 mOsm/kg/h",
    "Sodio ↓ ≤ 10 mEq/L en 24 h",
    "Mejoría del estado de conciencia"
  ],
  "alerts": [
    "Descensos rápidos de osmolalidad o sodio → edema cerebral o desmielinización",
    "Alto riesgo de trombosis y rabdomiólisis"
  ],
  "g": {
    "co": {
      "n": "GPC Diabetes mellitus tipo 1 en mayores de 15 años, MinSalud",
      "y": "2015",
      "st": "old",
      "txt": "Incluye la cetoacidosis; se complementa con el consenso internacional de crisis hiperglucémicas de 2024."
    },
    "intl": "Consenso ADA/EASD/JBDS/AACE/DTS 2024",
    "dif": []
  }
},
{
  "id": "hiperglu",
  "sys": "Endocrinología",
  "group": "Crisis hiperglucémicas",
  "name": "Hiperglucemia asintomática",
  "aka": "hiperglucemia sin crisis glucosa alta asintomatica",
  "page": "Fuente: Guía colombiana · ADA Standards of Care (vigentes)",
  "sub": "Glucosa elevada (usualmente > 250–300 mg/dL) sin cetoacidosis ni estado hiperosmolar.",
  "flow": [
    [
      "1",
      "Descarta CAD y EHH"
    ],
    [
      "2",
      "Busca la causa"
    ],
    [
      "3",
      "Corrige sin prisa"
    ],
    [
      "4",
      "Ajusta el plan ambulatorio"
    ]
  ],
  "criteria": [
    "No es necesario normalizar la glucosa en urgencias.",
    "Pide cetonas, gases venosos y osmolalidad si glucosa > 300 o síntomas."
  ],
  "orders": [
    {
      "d": "Hidratación oral",
      "n": "SSN IV solo si hay deshidratación."
    },
    {
      "d": "Insulina de corrección SC",
      "dose": "Análogo rápido o insulina regular según sensibilidad: ~2–4 U por cada 50 mg/dL por encima de 200",
      "n": "Reevalúa glucosa a las 2–4 h."
    },
    {
      "d": "Ajuste del tratamiento de base",
      "dose": "Si glucosa persistente > 300 o HbA1c > 10 %: iniciar insulina basal 0,1–0,2 U/kg/día",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.2,
        "unit": "U",
        "label": "basal/día"
      },
      "a": "NPH 0,1–0,2 U/kg/día en 1–2 dosis."
    }
  ],
  "goals": [
    "Glucosa < 250 al egreso",
    "Plan de control ambulatorio claro"
  ],
  "alerts": [
    "Glucemias > 600 obligan a descartar EHH",
    "Revisa adherencia, infección y corticoides"
  ],
  "rel": [
    "mi-dm"
  ],
  "g": {
    "co": {
      "n": "GPC Diabetes mellitus tipo 2, MinSalud",
      "y": "2016",
      "st": "old",
      "txt": "Se complementa con los Estándares de Cuidado ADA vigentes."
    },
    "intl": "ADA Standards of Care (vigentes)",
    "dif": []
  }
},
{
  "id": "hipoglu",
  "sys": "Endocrinología",
  "group": "Glucosa",
  "name": "Hipoglucemia",
  "aka": "hipoglucemia hipoglicemia glucosa baja sulfonilurea insulina",
  "page": "Fuente: ADA Standards of Care · Endocrine Society 2009",
  "sub": "Glucosa < 70 mg/dL; grave si requiere ayuda de terceros o hay alteración de conciencia.",
  "flow": [
    [
      "¿Traga?",
      "Sí: 15–20 g VO · No: dextrosa IV"
    ],
    [
      "15 min",
      "Repite glucometría"
    ],
    [
      "Estable",
      "Comida con carbohidrato complejo"
    ],
    [
      "Busca",
      "Sulfonilurea, insulina lenta, alcohol, sepsis"
    ]
  ],
  "criteria": [
    "Hipoglucemia por sulfonilurea o insulina de acción prolongada puede recurrir por 24–72 h: hospitaliza.",
    "Sin diabetes: piensa en alcohol, sepsis, insuficiencia suprarrenal, hepática o renal, insulinoma."
  ],
  "orders": [
    {
      "d": "Glucosa oral (si está consciente)",
      "dose": "15–20 g (3–4 tabletas, 150 mL de jugo) y repetir a los 15 min si < 70"
    },
    {
      "d": "Dextrosa IV (alteración de conciencia)",
      "dose": "DAD 10 % 150–250 mL en 10–15 min o dextrosa 50 % 50 mL",
      "n": "Luego infusión DAD 5–10 % a 75–100 mL/h si el riesgo persiste.",
      "a": "Sin acceso venoso: glucagón 1 mg IM/SC (poco útil en alcoholismo o desnutrición)."
    },
    {
      "d": "Tiamina",
      "dose": "100–200 mg IV antes de la dextrosa si alcoholismo o desnutrición"
    },
    {
      "d": "Octreotide (hipoglucemia por sulfonilurea)",
      "dose": "50–100 mcg SC c/6–12 h",
      "a": "Si no hay: dextrosa en infusión continua y vigilancia horaria."
    }
  ],
  "goals": [
    "Glucosa > 100 mg/dL sostenida",
    "Estado mental normal"
  ],
  "alerts": [
    "No des de alta tras una hipoglucemia por sulfonilurea sin observación",
    "Glucometría c/1 h hasta estabilidad"
  ],
  "rel": [
    "mi-dm"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "Se sigue ADA."
    },
    "intl": "ADA Standards of Care · Endocrine Society 2009",
    "dif": []
  }
},
{
  "id": "mixedema",
  "sys": "Endocrinología",
  "group": "Tiroides y suprarrenal",
  "name": "Coma mixedematoso",
  "aka": "coma mixedematoso hipotiroidismo descompensado levotiroxina hipotermia",
  "page": "Fuente: ATA 2014 hipotiroidismo · Endocrine Society",
  "sub": "Hipotiroidismo grave con alteración de conciencia, hipotermia, hipoventilación, hiponatremia o bradicardia.",
  "flow": [
    [
      "1",
      "Hidrocortisona primero"
    ],
    [
      "2",
      "Levotiroxina"
    ],
    [
      "3",
      "Soporte: calor, ventilación, sodio, glucosa"
    ],
    [
      "UCI",
      "Siempre"
    ]
  ],
  "criteria": [
    "Toma TSH, T4L y cortisol antes de tratar, sin retrasar el tratamiento.",
    "Desencadenantes: infección, frío, sedantes, amiodarona, suspensión del tratamiento."
  ],
  "orders": [
    {
      "d": "Hidrocortisona",
      "dose": "100 mg IV c/8 h",
      "n": "Hasta descartar insuficiencia suprarrenal.",
      "a": "Dexametasona 4 mg IV c/12 h o metilprednisolona 40 mg IV c/24 h."
    },
    {
      "d": "Levotiroxina IV",
      "dose": "200–400 mcg IV carga (menos en ancianos o cardiópatas), luego 50–100 mcg IV c/24 h",
      "a": "Levotiroxina IV casi no se consigue en Colombia: 300–500 mcg VO/SNG de carga y luego 100–200 mcg/día (absorción impredecible)."
    },
    {
      "d": "Calentamiento pasivo",
      "n": "Mantas; evita calentamiento activo agresivo (vasodilatación e hipotensión)."
    },
    {
      "d": "Hiponatremia e hipoglucemia",
      "n": "SSN 0,9 %; restricción hídrica si SIADH; dextrosa si glucosa baja."
    },
    {
      "d": "Soporte ventilatorio",
      "n": "Gases arteriales; VNI o intubación si hipercapnia."
    }
  ],
  "goals": [
    "Mejoría del estado de conciencia y temperatura en 24–48 h",
    "T4L en ascenso"
  ],
  "alerts": [
    "Dosis altas de levotiroxina pueden precipitar isquemia o arritmias",
    "Evita sedantes y opioides"
  ],
  "rel": [
    "mi-tiroides"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ATA 2014 hipotiroidismo · Endocrine Society",
    "dif": [
      "Levotiroxina IV y liotironina (T3) prácticamente no disponibles: se usa levotiroxina enteral en dosis altas."
    ]
  }
},
{
  "id": "suprarrenal",
  "sys": "Endocrinología",
  "group": "Tiroides y suprarrenal",
  "name": "Insuficiencia suprarrenal aguda (crisis addisoniana)",
  "aka": "crisis suprarrenal addison adrenal hidrocortisona hipotension",
  "page": "Fuente: Endocrine Society 2016",
  "sub": "Hipotensión o shock, vómito, dolor abdominal, hiponatremia, hiperpotasemia o hipoglucemia en paciente con riesgo (esteroides crónicos, Addison, sepsis).",
  "flow": [
    [
      "1",
      "Cortisol en sangre (sin esperar resultado)"
    ],
    [
      "2",
      "Hidrocortisona IV"
    ],
    [
      "3",
      "SSN 0,9 %"
    ],
    [
      "4",
      "Causa desencadenante"
    ]
  ],
  "criteria": [
    "No retrases el esteroide por pruebas diagnósticas."
  ],
  "orders": [
    {
      "d": "Hidrocortisona",
      "dose": "100 mg IV en bolo, luego 50 mg IV c/6 h (o 200 mg/24 h en infusión)",
      "a": "Dexametasona 4 mg IV c/24 h (no interfiere con el cortisol, sin efecto mineralocorticoide) o metilprednisolona 40 mg IV c/24 h."
    },
    {
      "d": "SSN 0,9 %",
      "dose": "1 L en la primera hora, luego según volemia",
      "n": "Dextrosa si hay hipoglucemia."
    },
    {
      "d": "Desescalar",
      "dose": "Reducir hidrocortisona en 1–3 días al resolver; fludrocortisona 0,05–0,1 mg/día cuando la hidrocortisona < 50 mg/día (insuficiencia primaria)"
    }
  ],
  "goals": [
    "PAM ≥ 65",
    "Corrección de sodio, potasio y glucosa"
  ],
  "alerts": [
    "Todo paciente con esteroides crónicos en estrés agudo requiere dosis de estrés",
    "Educación: duplicar dosis en enfermedad y tarjeta de alerta"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Endocrine Society 2016",
    "dif": []
  }
},
{
  "id": "tormenta",
  "sys": "Endocrinología",
  "group": "Tiroides y suprarrenal",
  "name": "Tormenta tiroidea (crisis tirotóxica)",
  "aka": "tormenta tiroidea crisis tirotoxica hipertiroidismo burch wartofsky",
  "page": "Fuente: ATA 2016 hipertiroidismo · JTA/JES 2016",
  "sub": "Tirotoxicosis con disfunción orgánica: fiebre, taquicardia o FA, IC, agitación o delirio, síntomas GI. Burch-Wartofsky ≥ 45 sugiere tormenta.",
  "flow": [
    [
      "1",
      "Betabloqueador"
    ],
    [
      "2",
      "Tionamida"
    ],
    [
      "3",
      "Yodo ≥ 1 h después"
    ],
    [
      "4",
      "Hidrocortisona"
    ],
    [
      "5",
      "Causa + soporte"
    ]
  ],
  "criteria": [
    "Desencadenantes: infección, cirugía, yodo (contraste, amiodarona), parto, suspensión de antitiroideos."
  ],
  "orders": [
    {
      "d": "Propranolol",
      "dose": "60–80 mg VO/SNG c/4 h",
      "a": "Esmolol 500 mcg/kg y 50–300 mcg/kg/min IV; si betabloqueador contraindicado: diltiazem."
    },
    {
      "d": "Propiltiouracilo (preferido)",
      "dose": "500–1000 mg carga, luego 250 mg VO/SNG c/4 h",
      "a": "Metimazol 20 mg VO/SNG c/4–6 h (60–80 mg/día)."
    },
    {
      "d": "Yodo (≥ 1 h después de la tionamida)",
      "dose": "Lugol 8–10 gotas VO c/6–8 h",
      "n": "Bloquea la liberación de hormona."
    },
    {
      "d": "Hidrocortisona",
      "dose": "300 mg IV carga, luego 100 mg IV c/8 h",
      "a": "Dexametasona 2 mg IV c/6 h."
    },
    {
      "d": "Antipirético y enfriamiento",
      "dose": "Paracetamol 1 g IV/VO c/6–8 h + medios físicos",
      "n": "Evita ácido acetilsalicílico (desplaza T4 de su proteína)."
    },
    {
      "d": "Colestiramina (adyuvante)",
      "dose": "4 g VO c/6 h"
    }
  ],
  "goals": [
    "FC < 100–110",
    "Normotermia",
    "Mejoría neurológica en 24–72 h"
  ],
  "alerts": [
    "Propiltiouracilo: hepatotoxicidad; se prefiere en el primer trimestre del embarazo",
    "Betabloqueador con cautela en IC descompensada"
  ],
  "rel": [
    "mi-tiroides"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ATA 2016 hipertiroidismo · JTA/JES 2016",
    "dif": [
      "Propiltiouracilo de disponibilidad variable; metimazol y lugol sí se consiguen."
    ]
  }
}
];
