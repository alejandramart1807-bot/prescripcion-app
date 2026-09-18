// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "urticaria",
  "sys": "Dermatología",
  "group": "Alergia",
  "name": "Alergia leve / moderada (urticaria, angioedema sin compromiso de vía aérea)",
  "aka": "urticaria alergia ronchas prurito angioedema antihistaminico",
  "page": "Fuente: EAACI/GA²LEN/WAO 2022 urticaria",
  "sub": "Habones pruriginosos ± angioedema sin compromiso respiratorio ni hemodinámico.",
  "flow": [
    [
      "1",
      "¿Criterios de anafilaxia? → su ficha"
    ],
    [
      "2",
      "Antihistamínico H1 no sedante"
    ],
    [
      "3",
      "Corticoide corto si es extensa"
    ]
  ],
  "criteria": [
    "Angioedema sin urticaria con IECA: bradicinérgico, no responde a antihistamínicos."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Antihistamínico H1",
      "dose": "Difenhidramina 25–50 mg IV/IM",
      "a": "Clorfeniramina 10 mg IV/IM, o cetirizina 10 mg VO."
    },
    {
      "d": "Corticoide si es extensa",
      "dose": "Metilprednisolona 40–60 mg IV o prednisolona 40–50 mg VO"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Cetirizina",
      "dose": "10 mg VO c/24 h (se puede subir hasta 4 veces la dosis si no controla)",
      "a": "Loratadina 10 mg, desloratadina 5 mg, fexofenadina 180 mg o bilastina 20 mg c/24 h."
    },
    {
      "d": "Prednisolona (si era extensa)",
      "dose": "40 mg VO c/24 h por 3–5 días sin desmonte"
    }
  ],
  "goals": [
    "Sin habones ni prurito"
  ],
  "alerts": [
    "Suspende el desencadenante (AINE, antibiótico, alimento)",
    "Educa en signos de anafilaxia"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "EAACI/GA²LEN/WAO 2022 urticaria",
    "dif": []
  }
},
{
  "id": "anafilaxia",
  "sys": "Dermatología",
  "group": "Alergia",
  "name": "Anafilaxia",
  "aka": "anafilaxia shock anafilactico reaccion alergica grave adrenalina",
  "page": "Fuente: WAO 2020 · EAACI 2021 anafilaxia",
  "sub": "Compromiso agudo de piel o mucosas + respiratorio o hemodinámico o GI grave, tras exposición a un alérgeno probable. Hipotensión aislada tras alérgeno conocido también cuenta.",
  "flow": [
    [
      "1",
      "Adrenalina IM ya"
    ],
    [
      "2",
      "Posición supina, O₂, volumen"
    ],
    [
      "3",
      "Repite adrenalina c/5–15 min"
    ],
    [
      "Refractaria",
      "Infusión de adrenalina"
    ]
  ],
  "criteria": [
    "La adrenalina IM es el único fármaco de primera línea; antihistamínicos y corticoides son coadyuvantes."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Adrenalina (1 mg/mL)",
      "dose": "0,01 mg/kg IM (máx 0,5 mg) en cara anterolateral del muslo; repetir c/5–15 min",
      "calc": {
        "t": "kg",
        "lo": 0.01,
        "hi": 0.01,
        "unit": "mg",
        "max": 0.5
      }
    },
    {
      "d": "SSN 0,9 %",
      "dose": "1–2 L en bolo si hipotensión (20 mL/kg)",
      "calc": {
        "t": "kg",
        "lo": 20,
        "hi": 20,
        "unit": "mL"
      }
    },
    {
      "d": "Oxígeno y salbutamol si broncoespasmo",
      "dose": "Salbutamol 4–8 puff o 2,5–5 mg nebulizado"
    },
    {
      "d": "Adrenalina en infusión (refractaria)",
      "dose": "0,05–0,3 mcg/kg/min",
      "dil": "4 mg en 250 mL = 16 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.3,
        "conc": 16
      }
    },
    {
      "d": "Glucagón si toma betabloqueador",
      "dose": "1–5 mg IV en 5 min"
    },
    {
      "d": "Coadyuvantes",
      "dose": "Difenhidramina 25–50 mg IV + metilprednisolona 1–2 mg/kg IV",
      "a": "Clorfeniramina 10 mg IV; hidrocortisona 200 mg IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Antihistamínico + prednisolona por 3 días",
      "dose": "Cetirizina 10 mg c/24 h + prednisolona 40 mg c/24 h"
    },
    {
      "d": "Remisión a alergología y plan escrito"
    }
  ],
  "goals": [
    "Estabilidad hemodinámica y respiratoria"
  ],
  "alerts": [
    "Observación ≥ 6 h (12–24 h si fue grave o requirió varias dosis)",
    "Nunca retrases la adrenalina por un antihistamínico"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "WAO 2020 · EAACI 2021 anafilaxia",
    "dif": [
      "Los autoinyectores de adrenalina casi no se consiguen en Colombia: enseña al paciente a buscar atención inmediata."
    ]
  }
},
{
  "id": "celulitis-amb",
  "sys": "Dermatología",
  "group": "Infecciones de piel",
  "name": "Celulitis / erisipela (manejo ambulatorio u hospital de día)",
  "aka": "celulitis erisipela piel infeccion ambulatoria cefalexina",
  "page": "Fuente: IDSA 2014 infecciones de piel y partes blandas",
  "sub": "Eritema, calor y edema sin absceso y sin toxicidad sistémica importante. Si hay sepsis o necrosis: fichas de paciente crítico.",
  "flow": [
    [
      "Leve",
      "Oral en casa"
    ],
    [
      "Moderada",
      "Dosis IV/IM inicial y reevaluar en 24–48 h"
    ],
    [
      "Grave",
      "Hospitalizar"
    ]
  ],
  "criteria": [
    "Marca el borde del eritema.",
    "Busca puerta de entrada (tinea pedis, úlcera) y trátala."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dosis inicial parenteral (moderada)",
      "dose": "Cefazolina 2 g IV o ceftriaxona 1 g IM/IV",
      "a": "Alergia: clindamicina 600 mg IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Cefalexina",
      "dose": "500 mg VO c/6 h por 5 días (extender si no mejora)",
      "a": "Dicloxacilina 500 mg c/6 h; alergia: clindamicina 300 mg c/6–8 h."
    },
    {
      "d": "Erisipela típica",
      "dose": "Amoxicilina 500 mg VO c/8 h por 5 días",
      "a": "Penicilina V 500 mg c/6 h."
    },
    {
      "d": "Elevar la extremidad y analgesia"
    }
  ],
  "goals": [
    "Mejoría en 48–72 h (el eritema puede avanzar las primeras 24 h)"
  ],
  "alerts": [
    "Absceso o SAMR: ficha de forúnculo",
    "Dolor desproporcionado o bulas: fascitis"
  ],
  "rel": [
    "mi-piel"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2014 infecciones de piel y partes blandas",
    "dif": []
  }
},
{
  "id": "aftas",
  "sys": "Dermatología",
  "group": "Piel y mucosas",
  "name": "Estomatitis aftosa",
  "aka": "aftas estomatitis aftosa ulcera oral boca",
  "page": "Fuente: Revisiones de medicina oral",
  "sub": "Úlceras orales dolorosas, redondas, de fondo blanco-amarillo y halo rojo; recurrentes.",
  "flow": [
    [
      "1",
      "Analgesia tópica"
    ],
    [
      "2",
      "Corticoide tópico"
    ],
    [
      "Recurrente o atípica",
      "Estudio (Behçet, celiaquía, VIH, déficit de B12, hierro o folato)"
    ]
  ],
  "criteria": [
    "Úlcera > 2–3 semanas sin cicatrizar: biopsia."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Triamcinolona 0,1 % en pasta oral",
      "dose": "Aplicar c/8–12 h por 5–7 días",
      "a": "Enjuague con dexametasona elixir 0,5 mg/5 mL, 5 mL 3 veces al día sin tragar."
    },
    {
      "d": "Lidocaína viscosa 2 %",
      "dose": "5 mL en enjuague antes de comer"
    },
    {
      "d": "Clorhexidina 0,12 % enjuague",
      "dose": "15 mL c/12 h por 7 días"
    }
  ],
  "goals": [
    "Menos dolor y cicatrización en 7–14 días"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Revisiones de medicina oral",
    "dif": []
  }
},
{
  "id": "atopica",
  "sys": "Dermatología",
  "group": "Dermatitis",
  "name": "Dermatitis atópica (eccema)",
  "aka": "dermatitis atopica eccema piel seca prurito",
  "page": "Fuente: AAD 2023 dermatitis atópica",
  "sub": "Eccema pruriginoso crónico y recurrente, piel seca, antecedente atópico.",
  "flow": [
    [
      "Base",
      "Emolientes diarios"
    ],
    [
      "Brote",
      "Corticoide tópico según zona"
    ],
    [
      "Mantenimiento",
      "2 veces por semana en zonas recurrentes"
    ]
  ],
  "criteria": [
    "Sobreinfección: costras melicéricas (impétigo) o vesículas en sacabocados (eccema herpético: urgente)."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Emoliente sin perfume",
      "dose": "Aplicar 2–3 veces al día, en toda la piel"
    },
    {
      "d": "Corticoide de potencia media (cuerpo)",
      "dose": "Mometasona 0,1 % crema c/24 h por 1–2 semanas",
      "a": "Betametasona valerato 0,1 % c/12 h."
    },
    {
      "d": "Corticoide de baja potencia (cara, pliegues)",
      "dose": "Hidrocortisona 1 % c/12 h por máx 1 semana",
      "a": "Tacrolimus 0,1 % o pimecrolimus 1 % (sin atrofia)."
    },
    {
      "d": "Hidroxicina para prurito nocturno",
      "dose": "25 mg VO en la noche"
    }
  ],
  "goals": [
    "Control del prurito y del brote"
  ],
  "alerts": [
    "Eccema herpético: aciclovir sistémico urgente"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAD 2023 dermatitis atópica",
    "dif": []
  }
},
{
  "id": "contacto",
  "sys": "Dermatología",
  "group": "Dermatitis",
  "name": "Dermatitis de contacto",
  "aka": "dermatitis de contacto alergica irritativa eccema",
  "page": "Fuente: AAD · ACDS",
  "sub": "Eccema en la zona de contacto con un irritante o alérgeno.",
  "flow": [
    [
      "1",
      "Identifica y evita el agente"
    ],
    [
      "Leve-moderada",
      "Corticoide tópico potente"
    ],
    [
      "Grave (> 20 % SC o cara/genitales)",
      "Prednisona sistémica 2–3 semanas"
    ]
  ],
  "criteria": [
    "Pruebas de parche si es recurrente."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Clobetasol 0,05 % (cuerpo)",
      "dose": "c/12 h por 1–2 semanas",
      "a": "Betametasona dipropionato 0,05 %."
    },
    {
      "d": "Hidrocortisona 1 % (cara, pliegues)",
      "dose": "c/12 h por máx 1 semana"
    },
    {
      "d": "Prednisona (grave)",
      "dose": "0,5–1 mg/kg/día por 5–7 días y desmontar en 2–3 semanas",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "mg",
        "label": "/día",
        "max": 60
      },
      "n": "Desmontes cortos causan rebote."
    },
    {
      "d": "Antihistamínico sedante para prurito",
      "dose": "Hidroxicina 25 mg VO en la noche"
    },
    {
      "d": "Compresas frías y emolientes"
    }
  ],
  "goals": [
    "Resolución en 2–3 semanas"
  ],
  "alerts": [
    "No uses corticoides potentes en cara por más de 1 semana"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAD · ACDS",
    "dif": []
  }
},
{
  "id": "escabiosis",
  "sys": "Dermatología",
  "group": "Infestaciones",
  "name": "Escabiosis (sarna)",
  "aka": "escabiosis sarna acaro prurito nocturno permetrina ivermectina",
  "page": "Fuente: IACS 2020 · CDC",
  "sub": "Prurito nocturno intenso, pápulas y surcos en espacios interdigitales, muñecas, axilas, cintura, genitales; convivientes con síntomas.",
  "flow": [
    [
      "1",
      "Trata paciente y todos los convivientes a la vez"
    ],
    [
      "2",
      "Repite a los 7–14 días"
    ],
    [
      "3",
      "Lava ropa y sábanas"
    ]
  ],
  "criteria": [
    "Costrosa (noruega): tópico + ivermectina en varias dosis; aislamiento."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Permetrina 5 % crema",
      "dose": "Aplicar del cuello a los pies (incluye uñas y genitales), dejar 8–14 h y bañar; repetir en 7 días",
      "a": "Ivermectina 200 mcg/kg VO con comida, repetir en 7–14 días."
    },
    {
      "d": "Ivermectina (alternativa o brotes)",
      "dose": "200 mcg/kg VO, repetir en 7–14 días",
      "calc": {
        "t": "kg",
        "lo": 0.2,
        "hi": 0.2,
        "unit": "mg"
      },
      "n": "No en embarazo ni < 15 kg."
    },
    {
      "d": "Antihistamínico para prurito",
      "dose": "Hidroxicina 25 mg en la noche",
      "n": "El prurito puede durar 2–4 semanas tras curar."
    },
    {
      "d": "Lavar ropa y sábanas a > 60 °C o guardar en bolsa cerrada 72 h"
    }
  ],
  "goals": [
    "Sin lesiones nuevas a las 2–4 semanas"
  ],
  "alerts": [
    "No reapliques permetrina más de lo indicado (dermatitis irritativa)"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IACS 2020 · CDC",
    "dif": [
      "Ivermectina oral disponible y de bajo costo en Colombia."
    ]
  }
},
{
  "id": "foliculitis",
  "sys": "Dermatología",
  "group": "Infecciones de piel",
  "name": "Foliculitis",
  "aka": "foliculitis pustulas foliculo piel",
  "page": "Fuente: IDSA 2014",
  "sub": "Pústulas centradas en folículos pilosos.",
  "flow": [
    [
      "Localizada",
      "Antiséptico o antibiótico tópico"
    ],
    [
      "Extensa o recurrente",
      "Antibiótico oral"
    ]
  ],
  "criteria": [
    "Foliculitis de piscina o jacuzzi: Pseudomonas, suele resolver sola."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Mupirocina 2 % ungüento",
      "dose": "c/8 h por 7 días",
      "a": "Ácido fusídico 2 % crema c/8 h."
    },
    {
      "d": "Lavado con clorhexidina 4 %",
      "dose": "Diario por 1 semana"
    },
    {
      "d": "Extensa: cefalexina",
      "dose": "500 mg VO c/6 h por 7 días",
      "a": "Dicloxacilina 500 mg c/6 h; sospecha de SAMR: TMP-SMX 160/800 mg c/12 h."
    }
  ],
  "goals": [
    "Resolución en 7–10 días"
  ],
  "alerts": [
    "Evita afeitar la zona durante el tratamiento"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2014",
    "dif": []
  }
},
{
  "id": "forunculo",
  "sys": "Dermatología",
  "group": "Infecciones de piel",
  "name": "Forúnculo / absceso cutáneo",
  "aka": "forunculo absceso piel drenaje staphylococcus samr",
  "page": "Fuente: IDSA 2014",
  "sub": "Nódulo doloroso fluctuante centrado en un folículo; el drenaje es el tratamiento principal.",
  "flow": [
    [
      "Fluctuante",
      "Incisión y drenaje"
    ],
    [
      "> 2 cm, celulitis, fiebre, inmunosupresión o sitio difícil",
      "+ antibiótico oral"
    ],
    [
      "Pequeño",
      "Calor local"
    ]
  ],
  "criteria": [
    "SAMR de la comunidad es frecuente en Colombia: el antibiótico debe cubrirlo."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Incisión y drenaje",
      "n": "Cultivo del material."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Compresas tibias",
      "dose": "15 min 3–4 veces al día"
    },
    {
      "d": "TMP-SMX",
      "dose": "160/800 mg VO c/12 h por 5–10 días (320/1600 mg c/12 h si > 100 kg)",
      "a": "Clindamicina 300–450 mg c/8 h; doxiciclina 100 mg c/12 h."
    },
    {
      "d": "Mupirocina tópica en lesiones pequeñas",
      "dose": "c/8 h por 5–7 días"
    }
  ],
  "goals": [
    "Resolución en 7–10 días"
  ],
  "alerts": [
    "Forúnculo en triángulo nasal: riesgo de trombosis del seno cavernoso"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2014",
    "dif": [
      "Alta prevalencia de SAMR de la comunidad en Colombia."
    ]
  }
},
{
  "id": "furunculosis",
  "sys": "Dermatología",
  "group": "Infecciones de piel",
  "name": "Furunculosis recurrente",
  "aka": "furunculosis recurrente decolonizacion mupirocina clorhexidina",
  "page": "Fuente: IDSA 2014",
  "sub": "≥ 2–3 episodios en 6–12 meses: decoloniza al paciente y a los convivientes.",
  "flow": [
    [
      "1",
      "Trata el episodio agudo"
    ],
    [
      "2",
      "Decolonización 5 días"
    ],
    [
      "3",
      "Higiene y objetos personales"
    ]
  ],
  "criteria": [
    "Descarta diabetes, inmunosupresión, hidradenitis supurativa."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Mupirocina 2 % nasal",
      "dose": "En ambas fosas nasales c/12 h por 5 días"
    },
    {
      "d": "Baño con clorhexidina 4 %",
      "dose": "Diario por 5–14 días"
    },
    {
      "d": "Higiene",
      "n": "No compartir toallas ni máquinas de afeitar; lavar ropa de cama con agua caliente."
    }
  ],
  "goals": [
    "Sin nuevos episodios"
  ],
  "alerts": [
    "Si recurre pese a decolonización: estudiar convivientes"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2014",
    "dif": []
  }
},
{
  "id": "herpes-simple",
  "sys": "Dermatología",
  "group": "Infecciones virales",
  "name": "Herpes simple (labial y genital)",
  "aka": "herpes simple labial genital aciclovir valaciclovir",
  "page": "Fuente: Guía colombiana · CDC 2021 ITS",
  "sub": "Vesículas agrupadas sobre base eritematosa, dolorosas, que se ulceran.",
  "flow": [
    [
      "Labial recurrente",
      "Tópico o valaciclovir en 1 día"
    ],
    [
      "Genital primer episodio",
      "Oral 7–10 días"
    ],
    [
      "Genital recurrente",
      "Oral 1–5 días"
    ]
  ],
  "criteria": [
    "Primer episodio genital: tamiza otras ITS (VIH, sífilis)."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Labial: valaciclovir",
      "dose": "2 g VO c/12 h por 1 día (iniciar en el pródromo)",
      "a": "Aciclovir crema 5 % 5 veces al día por 4 días."
    },
    {
      "d": "Genital primer episodio: aciclovir",
      "dose": "400 mg VO c/8 h por 7–10 días",
      "a": "Valaciclovir 1 g c/12 h por 7–10 días."
    },
    {
      "d": "Genital recurrente",
      "dose": "Aciclovir 800 mg c/8 h por 2 días o valaciclovir 500 mg c/12 h por 3 días"
    }
  ],
  "goals": [
    "Resolución de lesiones"
  ],
  "alerts": [
    "Afección ocular: remite a oftalmología"
  ],
  "g": {
    "co": {
      "n": "GPC Infecciones de transmisión sexual, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021 ITS",
    "dif": []
  }
},
{
  "id": "zoster",
  "sys": "Dermatología",
  "group": "Infecciones virales",
  "name": "Herpes zóster",
  "aka": "herpes zoster culebrilla dermatoma valaciclovir",
  "page": "Fuente: IDSA · revisiones de zóster",
  "sub": "Dolor y vesículas en un dermatoma. Antiviral idealmente en < 72 h.",
  "flow": [
    [
      "< 72 h o lesiones nuevas",
      "Antiviral 7 días"
    ],
    [
      "Oftálmico",
      "Remite a oftalmología"
    ],
    [
      "Diseminado o inmunosuprimido",
      "Aciclovir IV"
    ]
  ],
  "criteria": [
    "Signo de Hutchinson (lesión en punta nasal): compromiso ocular probable."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Valaciclovir",
      "dose": "1 g VO c/8 h por 7 días",
      "a": "Aciclovir 800 mg VO 5 veces al día por 7 días."
    },
    {
      "d": "Analgesia",
      "dose": "Paracetamol 1 g c/6–8 h ± tramadol 50 mg c/8 h",
      "n": "Dolor intenso: añade pregabalina o gabapentina."
    },
    {
      "d": "Compresas frías y lesiones cubiertas",
      "n": "Contagioso para quien no ha tenido varicela."
    },
    {
      "cat": "En urgencias"
    },
    {
      "d": "Diseminado o inmunosuprimido grave",
      "dose": "Aciclovir 10 mg/kg IV c/8 h",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mg"
      }
    }
  ],
  "goals": [
    "Cicatrización en 2–4 semanas",
    "Dolor controlado"
  ],
  "alerts": [
    "Ajusta antivirales a función renal"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA · revisiones de zóster",
    "dif": []
  }
},
{
  "id": "nph",
  "sys": "Dermatología",
  "group": "Infecciones virales",
  "name": "Neuralgia posherpética",
  "aka": "neuralgia posherpetica dolor neuropatico pregabalina gabapentina",
  "page": "Fuente: NeuPSIG 2015 dolor neuropático",
  "sub": "Dolor que persiste > 3 meses en el dermatoma tras el zóster.",
  "flow": [
    [
      "1",
      "Pregabalina o gabapentina, o amitriptilina"
    ],
    [
      "Localizada",
      "Lidocaína tópica"
    ],
    [
      "Refractaria",
      "Combinar; remitir a clínica del dolor"
    ]
  ],
  "criteria": [
    "Ajusta gabapentinoides a función renal."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Pregabalina",
      "dose": "75 mg VO c/12 h; subir a 150 mg c/12 h en 1 semana",
      "a": "Gabapentina 300 mg en la noche, subir hasta 1800–3600 mg/día en 3 tomas."
    },
    {
      "d": "Amitriptilina",
      "dose": "10–25 mg VO en la noche, subir cada semana (máx 75 mg)",
      "n": "Evitar en ancianos, cardiopatía, glaucoma o prostatismo.",
      "a": "Nortriptilina 10–25 mg en la noche (menos anticolinérgica)."
    },
    {
      "d": "Lidocaína 5 % parche",
      "dose": "Hasta 3 parches 12 h puestos / 12 h sin parche",
      "a": "Capsaicina 0,075 % crema c/6–8 h."
    }
  ],
  "goals": [
    "Reducción del dolor ≥ 30–50 %"
  ],
  "alerts": [
    "Mareo y somnolencia con gabapentinoides"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "NeuPSIG 2015 dolor neuropático",
    "dif": []
  }
},
{
  "id": "larva",
  "sys": "Dermatología",
  "group": "Infestaciones",
  "name": "Larva migrans cutánea",
  "aka": "larva migrans cutanea bicho de pata ancylostoma",
  "page": "Fuente: CDC",
  "sub": "Trayecto serpiginoso muy pruriginoso en pies o glúteos tras contacto con arena o tierra.",
  "flow": [
    [
      "1",
      "Ivermectina dosis única"
    ],
    [
      "2",
      "Antihistamínico"
    ]
  ],
  "criteria": [
    "Autolimitada en semanas, pero el tratamiento acorta el prurito."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ivermectina",
      "dose": "200 mcg/kg VO dosis única (repetir en 1–2 días si persiste)",
      "calc": {
        "t": "kg",
        "lo": 0.2,
        "hi": 0.2,
        "unit": "mg"
      },
      "a": "Albendazol 400 mg VO c/24 h por 3–7 días."
    },
    {
      "d": "Hidroxicina",
      "dose": "25 mg VO en la noche"
    }
  ],
  "goals": [
    "Sin prurito en 1 semana"
  ],
  "alerts": [
    "No usar ivermectina en embarazo"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "CDC",
    "dif": []
  }
},
{
  "id": "mpox",
  "sys": "Dermatología",
  "group": "Infecciones virales",
  "name": "Mpox (viruela símica)",
  "aka": "mpox monkeypox viruela simica viruela del mono",
  "page": "Fuente: Guía colombiana · OMS · CDC",
  "sub": "Fiebre, adenopatías y lesiones que evolucionan de mácula a pústula umbilicada y costra; a menudo genitales o perianales.",
  "flow": [
    [
      "1",
      "Aislamiento hasta costras caídas"
    ],
    [
      "2",
      "PCR de lesión"
    ],
    [
      "3",
      "Soporte y analgesia"
    ],
    [
      "Grave",
      "Hospitalizar"
    ]
  ],
  "criteria": [
    "Notificación obligatoria al INS (Sivigila).",
    "Tamiza VIH y otras ITS."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Analgesia",
      "dose": "Paracetamol 1 g c/6–8 h ± ibuprofeno 400 mg c/8 h",
      "n": "Proctitis: lidocaína gel, laxante suave, baños de asiento."
    },
    {
      "d": "Cuidado de lesiones",
      "n": "Mantener secas y cubiertas; no rascar."
    },
    {
      "d": "Aislamiento",
      "n": "Sin contacto sexual ni compartir objetos hasta que caigan las costras y haya piel nueva."
    }
  ],
  "goals": [
    "Resolución en 2–4 semanas"
  ],
  "alerts": [
    "Lesiones oculares, extensas o inmunosupresión: remite",
    "Tecovirimat no disponible de forma regular"
  ],
  "g": {
    "co": {
      "n": "Lineamientos para mpox, MinSalud e INS",
      "y": "",
      "st": "ok",
      "txt": "Definen notificación, aislamiento y manejo."
    },
    "intl": "OMS · CDC",
    "dif": []
  }
},
{
  "id": "pediculosis",
  "sys": "Dermatología",
  "group": "Infestaciones",
  "name": "Pediculosis (piojos)",
  "aka": "pediculosis piojos liendres permetrina",
  "page": "Fuente: AAP · CDC",
  "sub": "Prurito del cuero cabelludo con piojos vivos o liendres cerca de la raíz.",
  "flow": [
    [
      "1",
      "Permetrina 1 % y repetir día 9"
    ],
    [
      "2",
      "Liendrera"
    ],
    [
      "3",
      "Revisa convivientes"
    ]
  ],
  "criteria": [
    "Solo trata si hay piojos vivos."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Permetrina 1 % loción",
      "dose": "Aplicar en cabello seco, dejar 10 min y enjuagar; repetir el día 9",
      "a": "Ivermectina 200 mcg/kg VO, repetir en 7 días (casos resistentes)."
    },
    {
      "d": "Peinado con liendrera",
      "dose": "Cada 2–3 días por 2 semanas"
    },
    {
      "d": "Lavar peines, sábanas y gorros a > 50 °C"
    }
  ],
  "goals": [
    "Sin piojos vivos a las 2 semanas"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP · CDC",
    "dif": []
  }
},
{
  "id": "tinea-pedis",
  "sys": "Dermatología",
  "group": "Infecciones de piel",
  "name": "Tiña del pie (tinea pedis)",
  "aka": "tinea pedis pie de atleta hongos pie terbinafina",
  "page": "Fuente: AAD",
  "sub": "Descamación, maceración y fisuras interdigitales o en planta, pruriginosas.",
  "flow": [
    [
      "Leve-moderada",
      "Antimicótico tópico"
    ],
    [
      "Extensa, recurrente o con onicomicosis",
      "Oral"
    ]
  ],
  "criteria": [
    "Es puerta de entrada de celulitis: trátala."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Terbinafina 1 % crema",
      "dose": "c/12 h por 1–2 semanas",
      "a": "Clotrimazol 1 % c/12 h por 4 semanas."
    },
    {
      "d": "Extensa: terbinafina oral",
      "dose": "250 mg VO c/24 h por 2 semanas",
      "n": "Pide transaminasas si hay hepatopatía.",
      "a": "Itraconazol 200 mg c/12 h por 1 semana."
    },
    {
      "d": "Secar entre dedos, medias de algodón, talco antimicótico en calzado"
    }
  ],
  "goals": [
    "Resolución en 2–4 semanas"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAD",
    "dif": []
  }
},
{
  "id": "toxicodermias",
  "sys": "Dermatología",
  "group": "Reacciones graves",
  "name": "Toxicodermias graves (SJS/NET y DRESS)",
  "aka": "stevens johnson necrolisis epidermica toxica dress toxicodermia reaccion medicamentosa grave",
  "page": "Fuente: BAD 2016 · RegiSCAR",
  "sub": "Fiebre + afección mucosa + despegamiento (SJS/NET) o exantema + eosinofilia + daño de órgano (DRESS) semanas tras un fármaco.",
  "flow": [
    [
      "1",
      "Suspender el fármaco culpable"
    ],
    [
      "SJS/NET",
      "Unidad de quemados; SCORTEN"
    ],
    [
      "DRESS",
      "Prednisona con desmonte lento"
    ]
  ],
  "criteria": [
    "Culpables frecuentes: alopurinol, carbamazepina, fenitoína, lamotrigina, sulfonamidas, AINE oxicam, nevirapina."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Suspender todos los fármacos no esenciales"
    },
    {
      "d": "SJS/NET: soporte",
      "n": "Líquidos, curación como quemado, cuidado ocular por oftalmología, analgesia, sin antibiótico profiláctico."
    },
    {
      "d": "SJS/NET: inmunomodulación",
      "dose": "Ciclosporina 3–5 mg/kg/día VO × 7–10 días",
      "calc": {
        "t": "kg",
        "lo": 3,
        "hi": 5,
        "unit": "mg",
        "label": "/día"
      }
    },
    {
      "d": "DRESS",
      "dose": "Prednisona 0,5–1 mg/kg/día y desmonte en 6–8 semanas",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "mg",
        "label": "/día"
      }
    },
    {
      "d": "Exantema simple",
      "dose": "Antihistamínico + corticoide tópico"
    }
  ],
  "goals": [
    "Suspender el fármaco en < 24 h"
  ],
  "alerts": [
    "Registrar la alergia y reportar a farmacovigilancia (INVIMA)"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BAD 2016 · RegiSCAR",
    "dif": []
  }
}
];
