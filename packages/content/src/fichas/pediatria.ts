// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "ped-antipireticos",
  "sys": "Pediatría",
  "group": "General",
  "name": "Antipiréticos y analgésicos pediátricos",
  "aka": "paracetamol ibuprofeno pediatrico dosis por kilo fiebre niño",
  "page": "Fuente: AAP 2011 fiebre",
  "sub": "Dosis por peso; el objetivo es el confort, no normalizar la temperatura.",
  "flow": [
    [
      "Fiebre con malestar",
      "Paracetamol o ibuprofeno"
    ],
    [
      "< 3 meses con fiebre",
      "Evaluación inmediata"
    ],
    [
      "Alternar",
      "No de rutina"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Paracetamol",
      "dose": "15 mg/kg VO c/6 h (máx 1 g por dosis; 75 mg/kg/día)",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 15,
        "unit": "mg",
        "max": 1000
      }
    },
    {
      "d": "Ibuprofeno (≥ 6 meses)",
      "dose": "10 mg/kg VO c/6–8 h (máx 400 mg por dosis; 40 mg/kg/día)",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mg",
        "max": 400
      }
    }
  ],
  "goals": [
    "Niño confortable e hidratado"
  ],
  "alerts": [
    "No ASA en < 16 años (Reye)",
    "Ibuprofeno: evitar en deshidratación o varicela"
  ],
  "rel": [
    "r-ped-signos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2011 fiebre",
    "dif": []
  }
},
{
  "id": "bronquiolitis",
  "sys": "Pediatría",
  "group": "Respiratorio",
  "name": "Bronquiolitis",
  "aka": "bronquiolitis vsr lactante sibilancias",
  "page": "Fuente: Guía colombiana · AAP 2014 · NICE 2021",
  "sub": "Primer episodio de sibilancias con pródromo catarral en < 2 años. Tratamiento de soporte.",
  "flow": [
    [
      "Soporte",
      "Lavados, succión, hidratación"
    ],
    [
      "SatO₂ baja",
      "O₂ (cánula o alto flujo)"
    ],
    [
      "No sirven",
      "Salbutamol, corticoide, antibiótico"
    ]
  ],
  "criteria": [
    "Hospitalizar: < 3 meses o prematuro con dificultad, apneas, SatO₂ < 90–92 %, no tolera VO, cardiopatía o neumopatía."
  ],
  "orders": [
    {
      "d": "Lavados nasales con SSN y succión antes de comer"
    },
    {
      "d": "Oxígeno si SatO₂ < 90–92 %",
      "n": "Cánula nasal; alto flujo si trabajo respiratorio importante."
    },
    {
      "d": "Hidratación",
      "n": "VO fraccionada o por sonda; LEV isotónicos si no tolera."
    },
    {
      "d": "SSN 3 % nebulizada",
      "n": "Solo en hospitalizados; no en urgencias."
    }
  ],
  "goals": [
    "Hidratación y SatO₂ adecuadas"
  ],
  "alerts": [
    "No salbutamol, corticoides ni antibióticos de rutina"
  ],
  "rel": [
    "croup"
  ],
  "g": {
    "co": {
      "n": "GPC Neumonía y bronquiolitis en niños, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con AAP y AIEPI."
    },
    "intl": "AAP 2014 · NICE 2021",
    "dif": []
  }
},
{
  "id": "croup",
  "sys": "Pediatría",
  "group": "Respiratorio",
  "name": "Crup (laringotraqueítis)",
  "aka": "crup croup laringotraqueitis estridor tos perruna dexametasona adrenalina nebulizada",
  "page": "Fuente: Cochrane · guías canadienses",
  "sub": "Tos perruna, disfonía y estridor. Gravedad por Westley.",
  "flow": [
    [
      "Leve",
      "Dexametasona VO"
    ],
    [
      "Moderado-grave",
      "+ adrenalina nebulizada"
    ],
    [
      "Tras adrenalina",
      "Observar ≥ 2–4 h"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Dexametasona",
      "dose": "0,15–0,6 mg/kg VO/IM dosis única (máx 16 mg)",
      "calc": {
        "t": "kg",
        "lo": 0.15,
        "hi": 0.6,
        "unit": "mg",
        "max": 16
      },
      "a": "Prednisolona 1–2 mg/kg VO."
    },
    {
      "d": "Adrenalina (1 mg/mL) nebulizada",
      "dose": "0,5 mL/kg (máx 5 mL) sin diluir",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 0.5,
        "unit": "mL",
        "max": 5
      }
    },
    {
      "d": "Ambiente tranquilo; O₂ si SatO₂ baja"
    }
  ],
  "goals": [
    "Sin estridor en reposo"
  ],
  "alerts": [
    "Babeo, toxicidad, posición en trípode: epiglotitis/traqueítis"
  ],
  "rel": [
    "bronquiolitis",
    "c-westley"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Cochrane · guías canadienses",
    "dif": []
  }
},
{
  "id": "nac-ped",
  "sys": "Pediatría",
  "group": "Respiratorio",
  "name": "Neumonía adquirida en la comunidad en niños",
  "aka": "neumonia pediatrica niño amoxicilina alta dosis ampicilina",
  "page": "Fuente: Guía colombiana · PIDS/IDSA 2011",
  "sub": "Fiebre, taquipnea y tirajes (AIEPI). Amoxicilina en dosis altas es la primera línea.",
  "flow": [
    [
      "Ambulatorio",
      "Amoxicilina 5 días"
    ],
    [
      "Hospital",
      "Ampicilina IV"
    ],
    [
      "Grave o no vacunado",
      "Ceftriaxona"
    ]
  ],
  "criteria": [
    "Hospitalizar: < 3–6 meses, SatO₂ < 90–92 %, dificultad grave, no tolera VO, complicaciones."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Amoxicilina",
      "dose": "90 mg/kg/día VO en 2 dosis × 5 días (máx 4 g/día)",
      "calc": {
        "t": "kg",
        "lo": 90,
        "hi": 90,
        "unit": "mg",
        "label": "/día",
        "max": 4000
      }
    },
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Ampicilina",
      "dose": "150–200 mg/kg/día IV c/6 h (máx 2 g/dosis)",
      "calc": {
        "t": "kg",
        "lo": 150,
        "hi": 200,
        "unit": "mg",
        "label": "/día",
        "max": 12000
      },
      "a": "Penicilina G cristalina 200 000 U/kg/día c/4–6 h."
    },
    {
      "d": "Ceftriaxona (grave, no vacunado, complicada)",
      "dose": "50–100 mg/kg/día IV c/24 h (máx 2 g)",
      "calc": {
        "t": "kg",
        "lo": 50,
        "hi": 100,
        "unit": "mg",
        "label": "/día",
        "max": 2000
      }
    }
  ],
  "goals": [
    "Mejoría en 48–72 h"
  ],
  "alerts": [
    "Sin mejoría: derrame o empiema"
  ],
  "rel": [
    "nac-amb"
  ],
  "g": {
    "co": {
      "n": "GPC Neumonía y bronquiolitis en niños, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con AAP y AIEPI."
    },
    "intl": "PIDS/IDSA 2011",
    "dif": [
      "Colombia usa AIEPI para la clasificación."
    ]
  }
},
{
  "id": "oma",
  "sys": "Pediatría",
  "group": "Respiratorio",
  "name": "Otitis media aguda",
  "aka": "otitis media aguda oma niño amoxicilina timpano",
  "page": "Fuente: AAP 2013",
  "sub": "Otalgia + membrana abombada. En ≥ 2 años leve puede observarse 48–72 h.",
  "flow": [
    [
      "< 2 años o grave",
      "Antibiótico"
    ],
    [
      "≥ 2 años leve unilateral",
      "Observación con analgesia"
    ],
    [
      "ATB 30 días o conjuntivitis",
      "Amoxicilina-clavulanato"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Analgesia",
      "dose": "Ibuprofeno 10 mg/kg c/6–8 h",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mg",
        "max": 400
      }
    },
    {
      "d": "Amoxicilina",
      "dose": "80–90 mg/kg/día VO en 2 dosis (máx 4 g) · < 2 años: 10 días; ≥ 2 años: 5–7 días",
      "calc": {
        "t": "kg",
        "lo": 80,
        "hi": 90,
        "unit": "mg",
        "label": "/día",
        "max": 4000
      }
    },
    {
      "d": "Amoxicilina-clavulanato",
      "dose": "90 mg/kg/día de amoxicilina en 2 dosis",
      "a": "Alergia no grave: cefuroxima 30 mg/kg/día en 2 dosis; ceftriaxona 50 mg/kg IM × 1–3 días."
    }
  ],
  "goals": [
    "Mejoría en 48–72 h"
  ],
  "alerts": [
    "Mastoiditis: edema retroauricular → hospitalizar"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2013",
    "dif": []
  }
},
{
  "id": "faringitis-ped",
  "sys": "Pediatría",
  "group": "Respiratorio",
  "name": "Faringoamigdalitis estreptocócica en niños",
  "aka": "faringitis niño estreptococo penicilina benzatinica amoxicilina",
  "page": "Fuente: IDSA 2012 · AHA 2009",
  "sub": "Confirma con prueba rápida o cultivo (raro en < 3 años).",
  "flow": [
    [
      "VO",
      "Amoxicilina 10 días"
    ],
    [
      "IM",
      "Penicilina benzatínica"
    ],
    [
      "Alergia",
      "Cefalexina o azitromicina"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Amoxicilina",
      "dose": "50 mg/kg/día en 1–2 dosis × 10 días (máx 1 g/día)",
      "calc": {
        "t": "kg",
        "lo": 50,
        "hi": 50,
        "unit": "mg",
        "label": "/día",
        "max": 1000
      }
    },
    {
      "d": "Penicilina benzatínica",
      "dose": "600 000 U IM (< 27 kg) o 1 200 000 U (≥ 27 kg) dosis única",
      "calc": {
        "t": "table",
        "rows": [
          [
            27,
            "600 000 U IM"
          ],
          [
            999,
            "1 200 000 U IM"
          ]
        ]
      }
    },
    {
      "d": "Alergia no grave",
      "dose": "Cefalexina 20 mg/kg/dosis c/12 h × 10 días (máx 500 mg)",
      "calc": {
        "t": "kg",
        "lo": 20,
        "hi": 20,
        "unit": "mg",
        "max": 500
      },
      "a": "Azitromicina 12 mg/kg/día × 5 días (máx 500 mg)."
    }
  ],
  "goals": [
    "Prevenir fiebre reumática"
  ],
  "alerts": [],
  "rel": [
    "faringitis",
    "fiebre-reumatica"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2012 · AHA 2009",
    "dif": []
  }
},
{
  "id": "asma-ped",
  "sys": "Pediatría",
  "group": "Respiratorio",
  "name": "Crisis asmática en niños",
  "aka": "asma pediatrica crisis salbutamol prednisolona dexametasona niño",
  "page": "Fuente: GINA (vigente)",
  "sub": "Salbutamol con inhalocámara y corticoide sistémico temprano.",
  "flow": [
    [
      "1 h",
      "Salbutamol c/20 min × 3"
    ],
    [
      "Temprano",
      "Corticoide sistémico"
    ],
    [
      "Grave",
      "Ipratropio + sulfato de magnesio"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Salbutamol IDM con inhalocámara",
      "dose": "< 6 años: 2–6 puff · ≥ 6 años: 4–10 puff c/20 min × 1 h"
    },
    {
      "d": "Prednisolona",
      "dose": "1–2 mg/kg VO/día × 3–5 días (máx 40 mg)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 2,
        "unit": "mg",
        "max": 40
      },
      "a": "Dexametasona 0,6 mg/kg VO × 1–2 días (máx 16 mg)."
    },
    {
      "d": "Ipratropio (grave)",
      "dose": "250 mcg (< 6 años) o 500 mcg nebulizado c/20 min × 3"
    },
    {
      "d": "Sulfato de magnesio (grave)",
      "dose": "50 mg/kg IV en 20 min (máx 2 g)",
      "calc": {
        "t": "kg",
        "lo": 50,
        "hi": 50,
        "unit": "mg",
        "max": 2000
      }
    }
  ],
  "goals": [
    "SatO₂ ≥ 94 %, sin trabajo respiratorio"
  ],
  "alerts": [],
  "rel": [
    "asma"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "GINA (vigente)",
    "dif": []
  }
},
{
  "id": "eda-ped",
  "sys": "Pediatría",
  "group": "Gastro y nutrición",
  "name": "Diarrea aguda y deshidratación en niños (planes A, B y C)",
  "aka": "eda pediatrica diarrea niño deshidratacion suero oral plan a b c zinc ondansetron",
  "page": "Fuente: Guía colombiana · OMS · ESPGHAN 2014",
  "sub": "Clasifica la hidratación (AIEPI) y elige el plan.",
  "flow": [
    [
      "Sin deshidratación",
      "Plan A: casa"
    ],
    [
      "Algún grado",
      "Plan B: SRO en 4 h"
    ],
    [
      "Grave",
      "Plan C: LEV"
    ]
  ],
  "criteria": [
    "Plan C: letargia, no puede beber, pliegue muy lento, ojos muy hundidos."
  ],
  "orders": [
    {
      "d": "Plan A",
      "dose": "SRO después de cada deposición: < 2 años 50–100 mL; ≥ 2 años 100–200 mL; continuar alimentación"
    },
    {
      "d": "Zinc",
      "dose": "10 mg/día (< 6 meses) o 20 mg/día (≥ 6 meses) × 10–14 días"
    },
    {
      "d": "Plan B",
      "dose": "SRO 75 mL/kg en 4 h",
      "calc": {
        "t": "kg",
        "lo": 75,
        "hi": 75,
        "unit": "mL",
        "label": "en 4 h"
      }
    },
    {
      "d": "Plan C",
      "dose": "Lactato de Ringer 100 mL/kg: < 12 meses 30 mL/kg en 1 h + 70 mL/kg en 5 h · ≥ 12 meses 30 mL/kg en 30 min + 70 mL/kg en 2,5 h",
      "calc": {
        "t": "kg",
        "lo": 100,
        "hi": 100,
        "unit": "mL",
        "label": "total"
      }
    },
    {
      "d": "Ondansetrón si vómito impide SRO",
      "dose": "0,15 mg/kg VO dosis única (máx 4 mg)",
      "calc": {
        "t": "kg",
        "lo": 0.15,
        "hi": 0.15,
        "unit": "mg",
        "max": 4
      }
    }
  ],
  "goals": [
    "Hidratado y tolerando VO"
  ],
  "alerts": [
    "No antidiarreicos ni antieméticos de rutina",
    "Disentería: azitromicina 10 mg/kg/día × 3 días"
  ],
  "rel": [
    "diarrea"
  ],
  "g": {
    "co": {
      "n": "GPC Enfermedad diarreica aguda en menores de 5 años, MinSalud (y AIEPI)",
      "y": "2013",
      "st": "ok",
      "txt": "Planes A, B y C de hidratación."
    },
    "intl": "OMS · ESPGHAN 2014",
    "dif": []
  }
},
{
  "id": "desnutricion",
  "sys": "Pediatría",
  "group": "Gastro y nutrición",
  "name": "Desnutrición aguda moderada y severa en < 5 años",
  "aka": "desnutricion aguda severa f75 ftlc resomal marasmo kwashiorkor",
  "page": "Fuente: Guía colombiana · OMS 2013",
  "sub": "Puntaje Z peso/talla < −2 (moderada) o < −3 o edema (severa). Busca complicaciones.",
  "flow": [
    [
      "Sin complicaciones + apetito",
      "Ambulatorio con FTLC"
    ],
    [
      "Con complicaciones",
      "Hospital: estabilización con F-75"
    ],
    [
      "Rehabilitación",
      "FTLC o F-100"
    ]
  ],
  "criteria": [
    "Complicaciones: sin apetito, edema grave, hipoglucemia, hipotermia, deshidratación, infección, alteración de conciencia."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Hipoglucemia",
      "dose": "DAD 10 % 5 mL/kg IV o 50 mL VO/SNG",
      "calc": {
        "t": "kg",
        "lo": 5,
        "hi": 5,
        "unit": "mL"
      }
    },
    {
      "d": "F-75",
      "dose": "~130 mL/kg/día en tomas c/2–3 h (100 mL/kg/día si edema grave)",
      "calc": {
        "t": "kg",
        "lo": 130,
        "hi": 130,
        "unit": "mL",
        "label": "/día"
      }
    },
    {
      "d": "Deshidratación",
      "dose": "ReSoMal 5 mL/kg c/30 min × 2 h, luego 5–10 mL/kg/h",
      "n": "LEV solo en choque, con cautela."
    },
    {
      "d": "Antibiótico",
      "dose": "Sin complicaciones: amoxicilina 90 mg/kg/día × 7 días · complicada: ampicilina 50 mg/kg c/6 h + gentamicina 7,5 mg/kg/día"
    },
    {
      "d": "Calor, vitamina A y ácido fólico según lineamiento"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "FTLC según peso y control semanal"
    }
  ],
  "goals": [
    "Ganancia de peso ≥ 5 g/kg/día"
  ],
  "alerts": [
    "Síndrome de realimentación: fósforo y K"
  ],
  "g": {
    "co": {
      "n": "Resolución 2350 de 2020 (lineamiento de desnutrición aguda en < 5 años), MinSalud",
      "y": "2020",
      "st": "ok",
      "txt": "Referencia nacional; notificación obligatoria."
    },
    "intl": "OMS 2013",
    "dif": []
  }
},
{
  "id": "parasitosis",
  "sys": "Pediatría",
  "group": "Gastro y nutrición",
  "name": "Parasitosis intestinal",
  "aka": "parasitosis intestinal albendazol giardia metronidazol nitazoxanida oxiuros amebiasis",
  "page": "Fuente: OMS · AAP Red Book",
  "sub": "Tratamiento según parásito.",
  "flow": [
    [
      "Helmintos",
      "Albendazol"
    ],
    [
      "Giardia",
      "Metronidazol o tinidazol"
    ],
    [
      "Amebiasis",
      "Metronidazol + luminal"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Helmintos",
      "dose": "Albendazol 400 mg VO dosis única (200 mg en 12–23 meses)",
      "n": "Oxiuros: repetir en 2 semanas y tratar la familia."
    },
    {
      "d": "Giardia",
      "dose": "Metronidazol 15 mg/kg/día en 3 dosis × 5–7 días (máx 750 mg/día)",
      "calc": {
        "t": "kg",
        "lo": 15,
        "hi": 15,
        "unit": "mg",
        "label": "/día",
        "max": 750
      },
      "a": "Tinidazol 50 mg/kg dosis única (máx 2 g) o nitazoxanida 100 mg (1–3 a), 200 mg (4–11 a), 500 mg (≥ 12 a) c/12 h × 3 días."
    },
    {
      "d": "Amebiasis invasiva",
      "dose": "Metronidazol 35–50 mg/kg/día en 3 dosis × 7–10 días",
      "calc": {
        "t": "kg",
        "lo": 35,
        "hi": 50,
        "unit": "mg",
        "label": "/día",
        "max": 2250
      }
    }
  ],
  "goals": [
    "Erradicación"
  ],
  "alerts": [
    "Strongyloides: ivermectina 200 mcg/kg × 2 días"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "OMS · AAP Red Book",
    "dif": []
  }
},
{
  "id": "ivu-ped",
  "sys": "Pediatría",
  "group": "Nefro-urología",
  "name": "Infección urinaria en niños",
  "aka": "ivu pediatrica infeccion urinaria niño cefalexina ceftriaxona ecografia renal",
  "page": "Fuente: AAP 2016 · NICE 2022",
  "sub": "Confirma con urocultivo por sonda o punción en quien no controla esfínteres.",
  "flow": [
    [
      "< 2 meses",
      "Hospital: ampicilina + gentamicina"
    ],
    [
      "Tolera VO",
      "Cefalexina"
    ],
    [
      "No tolera o tóxico",
      "Ceftriaxona"
    ],
    [
      "1.ª IVU febril",
      "Ecografía renal"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Cefalexina",
      "dose": "50–100 mg/kg/día VO en 4 dosis × 7–10 días (máx 4 g)",
      "calc": {
        "t": "kg",
        "lo": 50,
        "hi": 100,
        "unit": "mg",
        "label": "/día",
        "max": 4000
      },
      "a": "Cefuroxima 30 mg/kg/día en 2 dosis; nitrofurantoína solo cistitis."
    },
    {
      "d": "Ceftriaxona",
      "dose": "50–75 mg/kg/día IV/IM c/24 h (máx 2 g)",
      "calc": {
        "t": "kg",
        "lo": 50,
        "hi": 75,
        "unit": "mg",
        "label": "/día",
        "max": 2000
      }
    },
    {
      "d": "< 2 meses",
      "dose": "Ampicilina + gentamicina IV según edad"
    }
  ],
  "goals": [
    "Afebril en 48 h"
  ],
  "alerts": [
    "Recurrente o eco anormal: nefrología pediátrica"
  ],
  "rel": [
    "mi-ivu"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2016 · NICE 2022",
    "dif": []
  }
},
{
  "id": "nefrotico",
  "sys": "Pediatría",
  "group": "Nefro-urología",
  "name": "Síndrome nefrótico y nefrítico en niños",
  "aka": "sindrome nefrotico prednisolona edema proteinuria sindrome nefritico postestreptococico",
  "page": "Fuente: KDIGO 2021 glomerulares",
  "sub": "Nefrótico: proteinuria nefrótica + hipoalbuminemia + edema. Nefrítico: hematuria, HTA, edema, oliguria.",
  "flow": [
    [
      "Nefrótico",
      "Prednisolona 8 semanas"
    ],
    [
      "Edema refractario",
      "Albúmina + furosemida"
    ],
    [
      "Nefrítico",
      "Sal, líquidos, furosemida"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Nefrótico: prednisolona",
      "dose": "2 mg/kg/día (60 mg/m²) × 4 semanas (máx 60 mg), luego 1,5 mg/kg días alternos × 4 semanas (máx 40 mg)",
      "calc": {
        "t": "kg",
        "lo": 2,
        "hi": 2,
        "unit": "mg",
        "label": "/día",
        "max": 60
      }
    },
    {
      "d": "Edema refractario",
      "dose": "Albúmina 20 % 0,5–1 g/kg IV + furosemida 1–2 mg/kg",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "g",
        "label": "albúmina"
      }
    },
    {
      "d": "Nefrítico postestreptocócico",
      "dose": "Restricción de sal y líquidos; furosemida 1–2 mg/kg",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 2,
        "unit": "mg",
        "max": 40
      }
    }
  ],
  "goals": [
    "Remisión (proteinuria negativa)"
  ],
  "alerts": [
    "Riesgo de peritonitis por neumococo y trombosis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "KDIGO 2021 glomerulares",
    "dif": []
  }
},
{
  "id": "ictericia-neo",
  "sys": "Pediatría",
  "group": "Neonatología",
  "name": "Ictericia neonatal (hiperbilirrubinemia)",
  "aka": "ictericia neonatal hiperbilirrubinemia fototerapia exanguinotransfusion",
  "page": "Fuente: AAP 2022",
  "sub": "Decide fototerapia con la curva por horas de vida, edad gestacional y factores de neurotoxicidad (AAP 2022).",
  "flow": [
    [
      "< 24 h",
      "Patológica: estudiar"
    ],
    [
      "Sobre la línea",
      "Fototerapia intensiva"
    ],
    [
      "Cerca de exanguinotransfusión",
      "IVIG si hemólisis isoinmune"
    ]
  ],
  "criteria": [
    "Factores de neurotoxicidad: < 38 semanas, albúmina < 3, hemólisis isoinmune, G6PD, sepsis, inestabilidad."
  ],
  "orders": [
    {
      "d": "Fototerapia intensiva",
      "n": "Bilirrubina c/4–12 h según nivel; lactancia continua."
    },
    {
      "d": "IVIG (hemólisis isoinmune)",
      "dose": "0,5–1 g/kg IV en 2 h",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "g"
      }
    },
    {
      "d": "Hidratación si deshidratación"
    }
  ],
  "goals": [
    "Bilirrubina bajo el umbral"
  ],
  "alerts": [
    "Signos neurológicos: exanguinotransfusión urgente"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2022",
    "dif": []
  }
},
{
  "id": "hipoglu-neo",
  "sys": "Pediatría",
  "group": "Neonatología",
  "name": "Hipoglucemia neonatal",
  "aka": "hipoglucemia neonatal gel de dextrosa carga de glucosa",
  "page": "Fuente: AAP 2011 · PES 2015",
  "sub": "En riesgo (hijo de diabética, grande o pequeño, prematuro tardío): glucemia < 40–45 mg/dL en las primeras horas.",
  "flow": [
    [
      "Asintomático",
      "Gel de dextrosa + alimentación"
    ],
    [
      "Sintomático o persistente",
      "Bolo DAD 10 % + infusión"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Gel de dextrosa 40 %",
      "dose": "0,5 mL/kg en la mucosa bucal + alimentar",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 0.5,
        "unit": "mL"
      }
    },
    {
      "d": "DAD 10 % en bolo",
      "dose": "2 mL/kg IV",
      "calc": {
        "t": "kg",
        "lo": 2,
        "hi": 2,
        "unit": "mL"
      }
    },
    {
      "d": "Infusión de glucosa",
      "dose": "VIG 6–8 mg/kg/min = DAD 10 % a 3,6–4,8 mL/kg/h",
      "calc": {
        "t": "kgh",
        "lo": 3.6,
        "hi": 4.8,
        "conc": 1,
        "unit": "mL"
      }
    }
  ],
  "goals": [
    "Glucemia > 45–50 mg/dL"
  ],
  "alerts": [
    "Persistente > 48 h: estudio endocrino"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2011 · PES 2015",
    "dif": []
  }
},
{
  "id": "sepsis-neo",
  "sys": "Pediatría",
  "group": "Neonatología",
  "name": "Sepsis neonatal",
  "aka": "sepsis neonatal temprana tardia ampicilina gentamicina",
  "page": "Fuente: AAP 2018/2019",
  "sub": "Temprana (< 72 h): EGB y E. coli. Tardía: incluye estafilococos y gérmenes nosocomiales.",
  "flow": [
    [
      "Temprana",
      "Ampicilina + gentamicina"
    ],
    [
      "Tardía",
      "Según epidemiología de la unidad"
    ],
    [
      "Meningitis",
      "Dosis meníngeas"
    ]
  ],
  "criteria": [
    "Hemocultivo antes del antibiótico; PL si estable."
  ],
  "orders": [
    {
      "d": "Ampicilina",
      "dose": "50 mg/kg IV c/8–12 h según edad (100 mg/kg c/8 h si meningitis)",
      "calc": {
        "t": "kg",
        "lo": 50,
        "hi": 50,
        "unit": "mg"
      }
    },
    {
      "d": "+ Gentamicina",
      "dose": "4 mg/kg IV c/24 h (≥ 35 semanas; ajustar por edad gestacional)",
      "calc": {
        "t": "kg",
        "lo": 4,
        "hi": 4,
        "unit": "mg"
      }
    },
    {
      "d": "Tardía",
      "dose": "Oxacilina o vancomicina + cefepime o meropenem según la unidad"
    }
  ],
  "goals": [
    "Suspender a las 36–48 h si cultivos negativos y clínica bien"
  ],
  "alerts": [
    "Dosis dependen de edad gestacional y posnatal: verifica en la tabla de la unidad"
  ],
  "rel": [
    "meningitis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2018/2019",
    "dif": []
  }
},
{
  "id": "sifilis-cong",
  "sys": "Pediatría",
  "group": "Neonatología",
  "name": "Sífilis congénita",
  "aka": "sifilis congenita penicilina cristalina recien nacido vdrl",
  "page": "Fuente: Guía colombiana · CDC 2021",
  "sub": "Según el tratamiento materno y la evaluación del RN (VDRL comparado, examen, LCR, Rx de huesos largos).",
  "flow": [
    [
      "Probada o probable",
      "Penicilina cristalina 10 días"
    ],
    [
      "Madre bien tratada, RN normal",
      "Penicilina benzatínica única o seguimiento"
    ]
  ],
  "criteria": [
    "Notificación obligatoria."
  ],
  "orders": [
    {
      "d": "Penicilina G cristalina",
      "dose": "50 000 U/kg IV c/12 h (≤ 7 días de vida) o c/8 h (> 7 días) × 10 días",
      "calc": {
        "t": "kg",
        "lo": 50000,
        "hi": 50000,
        "unit": "U"
      },
      "a": "Penicilina procaínica 50 000 U/kg IM c/24 h × 10 días."
    },
    {
      "d": "Penicilina benzatínica (bajo riesgo)",
      "dose": "50 000 U/kg IM dosis única",
      "calc": {
        "t": "kg",
        "lo": 50000,
        "hi": 50000,
        "unit": "U"
      }
    }
  ],
  "goals": [
    "VDRL negativo a los 6 meses"
  ],
  "alerts": [
    "Tratar también a la madre y su pareja"
  ],
  "rel": [
    "sifilis"
  ],
  "g": {
    "co": {
      "n": "GPC Sífilis gestacional y congénita, MinSalud; protocolo INS",
      "y": "2014",
      "st": "old",
      "txt": "Referencia nacional; se complementa con CDC 2021."
    },
    "intl": "CDC 2021",
    "dif": []
  }
},
{
  "id": "crisis-febril",
  "sys": "Pediatría",
  "group": "Neurología",
  "name": "Crisis febril",
  "aka": "crisis febril convulsion febril niño midazolam",
  "page": "Fuente: AAP 2011",
  "sub": "Convulsión con fiebre en 6 meses–5 años sin infección del SNC. Simple: generalizada, < 15 min, única en 24 h.",
  "flow": [
    [
      "> 5 min",
      "Benzodiazepina"
    ],
    [
      "Simple",
      "Buscar foco; no EEG ni imagen de rutina"
    ],
    [
      "Signos meníngeos",
      "PL"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Midazolam bucal o intranasal",
      "dose": "0,2–0,3 mg/kg (máx 10 mg)",
      "calc": {
        "t": "kg",
        "lo": 0.2,
        "hi": 0.3,
        "unit": "mg",
        "max": 10
      },
      "a": "Diazepam rectal 0,5 mg/kg (máx 10 mg) o IV 0,2–0,3 mg/kg."
    },
    {
      "d": "Antipirético para confort (no previene recurrencias)"
    }
  ],
  "goals": [
    "Cese de la crisis"
  ],
  "alerts": [
    "No profilaxis anticonvulsiva de rutina"
  ],
  "rel": [
    "ee"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAP 2011",
    "dif": []
  }
},
{
  "id": "fiebre-reumatica",
  "sys": "Pediatría",
  "group": "Infectología",
  "name": "Fiebre reumática: tratamiento y profilaxis secundaria",
  "aka": "fiebre reumatica jones profilaxis penicilina benzatinica carditis",
  "page": "Fuente: AHA 2015 Jones · WHF 2024",
  "sub": "Criterios de Jones 2015; erradicar el estreptococo y profilaxis prolongada.",
  "flow": [
    [
      "Erradicación",
      "Penicilina benzatínica"
    ],
    [
      "Artritis",
      "AINE"
    ],
    [
      "Carditis grave",
      "Prednisona"
    ],
    [
      "Profilaxis",
      "c/3–4 semanas por años"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Penicilina benzatínica",
      "dose": "600 000 U (< 27 kg) o 1 200 000 U (≥ 27 kg) IM c/3–4 semanas",
      "calc": {
        "t": "table",
        "rows": [
          [
            27,
            "600 000 U IM"
          ],
          [
            999,
            "1 200 000 U IM"
          ]
        ]
      }
    },
    {
      "d": "Artritis",
      "dose": "Naproxeno 10–20 mg/kg/día en 2 dosis",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 20,
        "unit": "mg",
        "label": "/día",
        "max": 1000
      }
    },
    {
      "d": "Duración de la profilaxis",
      "n": "Sin carditis: 5 años o hasta 21 años · carditis sin secuela: 10 años o hasta 21 · valvulopatía: 10 años o hasta 40 (a veces de por vida)."
    }
  ],
  "goals": [
    "Sin recurrencias"
  ],
  "alerts": [],
  "rel": [
    "faringitis-ped"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AHA 2015 Jones · WHF 2024",
    "dif": []
  }
}
];
