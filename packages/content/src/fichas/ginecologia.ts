// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "ae",
  "sys": "Ginecología",
  "group": "Anticoncepción",
  "name": "Anticoncepción de emergencia",
  "aka": "anticoncepcion de emergencia pildora del dia despues levonorgestrel",
  "page": "Fuente: Guía colombiana · OMS · CDC US MEC 2024",
  "sub": "Relación sin protección o falla del método en los últimos 3–5 días.",
  "flow": [
    [
      "≤ 72 h",
      "Levonorgestrel"
    ],
    [
      "≤ 120 h",
      "DIU de cobre (más eficaz) o ulipristal"
    ],
    [
      "Después",
      "Método anticonceptivo regular"
    ]
  ],
  "criteria": [
    "Violencia sexual: sigue el protocolo de atención integral (anticoncepción, profilaxis ITS y VIH, ficha de PEP)."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Levonorgestrel",
      "dose": "1,5 mg VO dosis única lo antes posible (hasta 72 h)",
      "n": "IMC > 30: menos eficaz.",
      "a": "DIU de cobre hasta 5 días (el más eficaz) o ulipristal 30 mg si disponible."
    },
    {
      "d": "Prueba de embarazo si no llega la menstruación en 3 semanas"
    },
    {
      "d": "Asesoría anticonceptiva y tamizaje de ITS"
    }
  ],
  "goals": [
    "Anticoncepción regular iniciada"
  ],
  "alerts": [
    "No es abortiva ni afecta un embarazo establecido"
  ],
  "g": {
    "co": {
      "n": "Resolución 3280 de 2018 (ruta de atención) y protocolo de violencia sexual, MinSalud",
      "y": "",
      "st": "ok",
      "txt": "Incluyen la anticoncepción de emergencia gratuita."
    },
    "intl": "OMS · CDC US MEC 2024",
    "dif": [
      "Levonorgestrel 1,5 mg incluido en el plan de beneficios."
    ]
  }
},
{
  "id": "dismenorrea",
  "sys": "Ginecología",
  "group": "Dolor pélvico",
  "name": "Dismenorrea",
  "aka": "dismenorrea colico menstrual dolor menstrual",
  "page": "Fuente: ACOG 2018 dismenorrea",
  "sub": "Dolor pélvico cíclico con la menstruación.",
  "flow": [
    [
      "1",
      "AINE desde 1–2 días antes"
    ],
    [
      "2",
      "Anticonceptivo hormonal si no controla"
    ],
    [
      "Secundaria",
      "Endometriosis, miomas, EPI: estudio"
    ]
  ],
  "criteria": [
    "Dolor intenso de novo, fiebre o flujo: descarta embarazo ectópico y EPI."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ketorolaco",
      "dose": "30 mg IV/IM",
      "a": "Dipirona 1–2 g IV + hioscina 20 mg IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ibuprofeno",
      "dose": "400–600 mg VO c/6–8 h por 2–3 días del ciclo",
      "a": "Naproxeno 500 mg inicial y 250 mg c/6–8 h; ácido mefenámico 500 mg c/8 h."
    },
    {
      "d": "Anticonceptivo oral combinado",
      "n": "Si el AINE no basta y desea anticoncepción."
    }
  ],
  "goals": [
    "Control del dolor"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACOG 2018 dismenorrea",
    "dif": []
  }
},
{
  "id": "sua",
  "sys": "Ginecología",
  "group": "Sangrado",
  "name": "Sangrado uterino anormal (SUA)",
  "aka": "sangrado uterino anormal metrorragia menorragia acido tranexamico",
  "page": "Fuente: ACOG 2013/2019 SUA agudo · FIGO PALM-COEIN",
  "sub": "Sangrado fuera del patrón menstrual o excesivo. Clasifica con PALM-COEIN.",
  "flow": [
    [
      "1",
      "Estabilidad hemodinámica"
    ],
    [
      "2",
      "Prueba de embarazo"
    ],
    [
      "3",
      "Agudo abundante: tranexámico y/o hormonal"
    ],
    [
      "4",
      "Estudio: eco, hemograma"
    ]
  ],
  "criteria": [
    "Posmenopáusica: siempre estudio endometrial.",
    "Hb, plaquetas, TSH; coagulopatía si sangrado desde la menarquia."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ácido tranexámico",
      "dose": "10 mg/kg IV (máx 1 g) o 1 g VO c/8 h",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mg",
        "max": 1000
      }
    },
    {
      "d": "Sangrado agudo abundante (hormonal)",
      "dose": "Anticonceptivo combinado 35 mcg 1 tableta c/8 h × 7 días",
      "a": "Medroxiprogesterona 20 mg VO c/8 h × 7 días (si contraindicado el estrógeno)."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ácido tranexámico",
      "dose": "1 g VO c/8 h por máx 5 días durante el sangrado"
    },
    {
      "d": "AINE",
      "dose": "Ibuprofeno 400 mg c/8 h durante el sangrado"
    },
    {
      "d": "Hierro oral si anemia",
      "dose": "Sulfato ferroso 300 mg c/24 h o días alternos"
    }
  ],
  "goals": [
    "Control del sangrado",
    "Hb estable"
  ],
  "alerts": [
    "Inestable: reanimación, transfusión y ginecología urgente"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACOG 2013/2019 SUA agudo · FIGO PALM-COEIN",
    "dif": []
  }
},
{
  "id": "candida",
  "sys": "Ginecología",
  "group": "Vulvovaginitis",
  "name": "Vulvovaginitis por Candida",
  "aka": "candidiasis vaginal flujo blanco prurito fluconazol",
  "page": "Fuente: Guía colombiana · CDC 2021",
  "sub": "Prurito, ardor, flujo blanco grumoso, pH < 4,5.",
  "flow": [
    [
      "No complicada",
      "Fluconazol 150 mg único"
    ],
    [
      "Grave",
      "2–3 dosis c/72 h"
    ],
    [
      "Recurrente (≥ 3/año)",
      "Supresión 6 meses"
    ]
  ],
  "criteria": [
    "No se trata a la pareja de rutina."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Fluconazol",
      "dose": "150 mg VO dosis única",
      "a": "Clotrimazol óvulo 500 mg dosis única o crema 1 % por 7 días."
    },
    {
      "d": "Embarazo",
      "dose": "Clotrimazol vaginal por 7 días (no fluconazol oral)"
    },
    {
      "d": "Recurrente",
      "dose": "Fluconazol 150 mg c/72 h × 3 y luego semanal por 6 meses"
    }
  ],
  "goals": [
    "Resolución de síntomas"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "GPC Infecciones de transmisión sexual y otras infecciones del tracto genital, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021",
    "dif": []
  }
},
{
  "id": "tricho",
  "sys": "Ginecología",
  "group": "Vulvovaginitis",
  "name": "Tricomoniasis",
  "aka": "tricomoniasis trichomonas flujo espumoso metronidazol",
  "page": "Fuente: Guía colombiana · CDC 2021",
  "sub": "Flujo amarillo-verdoso espumoso, olor, cérvix en fresa, pH > 4,5. Es ITS.",
  "flow": [
    [
      "1",
      "Metronidazol"
    ],
    [
      "2",
      "Tratar a la pareja"
    ],
    [
      "3",
      "Tamiza otras ITS"
    ]
  ],
  "criteria": [
    "Abstinencia sexual hasta terminar el tratamiento de ambos."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Metronidazol (mujer)",
      "dose": "500 mg VO c/12 h por 7 días",
      "a": "Tinidazol 2 g VO dosis única o secnidazol 2 g dosis única."
    },
    {
      "d": "Pareja (hombre)",
      "dose": "Metronidazol 2 g VO dosis única"
    }
  ],
  "goals": [
    "Curación y pareja tratada"
  ],
  "alerts": [
    "No alcohol hasta 24–72 h después del metronidazol o tinidazol"
  ],
  "g": {
    "co": {
      "n": "GPC Infecciones de transmisión sexual y otras infecciones del tracto genital, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021",
    "dif": [
      "Secnidazol disponible en Colombia."
    ]
  }
},
{
  "id": "vb",
  "sys": "Ginecología",
  "group": "Vulvovaginitis",
  "name": "Vaginosis bacteriana",
  "aka": "vaginosis bacteriana flujo olor pescado gardnerella",
  "page": "Fuente: Guía colombiana · CDC 2021",
  "sub": "Flujo gris homogéneo con olor a pescado, pH > 4,5, prueba de aminas positiva, células guía (Amsel ≥ 3).",
  "flow": [
    [
      "1",
      "Metronidazol 7 días"
    ],
    [
      "Embarazo sintomático",
      "Tratar igual"
    ],
    [
      "Pareja",
      "No requiere"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Metronidazol",
      "dose": "500 mg VO c/12 h por 7 días",
      "a": "Metronidazol gel 0,75 % intravaginal por 5 noches; clindamicina crema 2 % por 7 noches; secnidazol 2 g dosis única."
    }
  ],
  "goals": [
    "Resolución de síntomas"
  ],
  "alerts": [
    "Clindamicina crema debilita condones de látex"
  ],
  "g": {
    "co": {
      "n": "GPC Infecciones de transmisión sexual y otras infecciones del tracto genital, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021",
    "dif": []
  }
},
{
  "id": "epi",
  "sys": "Ginecología",
  "group": "Dolor pélvico",
  "name": "Enfermedad pélvica inflamatoria (EPI)",
  "aka": "enfermedad pelvica inflamatoria epi absceso tuboovarico ceftriaxona doxiciclina metronidazol",
  "page": "Fuente: Guía colombiana · CDC 2021",
  "sub": "Dolor pélvico + dolor a la movilización cervical, uterino o anexial en mujer sexualmente activa.",
  "flow": [
    [
      "Leve-moderada",
      "Ambulatorio"
    ],
    [
      "Hospitalizar",
      "Embarazo, absceso, no tolera VO, grave, no mejora 72 h"
    ],
    [
      "Pareja",
      "Tratar"
    ]
  ],
  "criteria": [
    "Prueba de embarazo; NAAT para gonococo y clamidia; VIH y sífilis."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ambulatorio",
      "dose": "Ceftriaxona 500 mg IM dosis única + doxiciclina 100 mg VO c/12 h × 14 días + metronidazol 500 mg VO c/12 h × 14 días"
    },
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Hospitalaria",
      "dose": "Ceftriaxona 1 g IV c/24 h + doxiciclina 100 mg c/12 h + metronidazol 500 mg c/12 h",
      "a": "Clindamicina 900 mg IV c/8 h + gentamicina 5 mg/kg/día."
    }
  ],
  "goals": [
    "Mejoría en 72 h"
  ],
  "alerts": [
    "DIU: no retirar de rutina"
  ],
  "rel": [
    "tricho",
    "vb"
  ],
  "g": {
    "co": {
      "n": "GPC Infecciones de transmisión sexual, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021",
    "dif": []
  }
},
{
  "id": "anticoncepcion",
  "sys": "Ginecología",
  "group": "Anticoncepción",
  "name": "Anticoncepción: elección e inicio",
  "aka": "anticoncepcion metodos diu implante inyectable pildora criterios oms inicio rapido",
  "page": "Fuente: Guía colombiana · OMS MEC 2015 · CDC US MEC 2024",
  "sub": "Ofrece primero métodos de larga duración; inicio el mismo día si hay certeza razonable de no embarazo.",
  "flow": [
    [
      "1",
      "Criterios de elegibilidad OMS"
    ],
    [
      "LARC",
      "DIU cobre, DIU levonorgestrel, implante"
    ],
    [
      "Inicio rápido",
      "Hoy + preservativo 7 días"
    ]
  ],
  "criteria": [
    "Estrógenos contraindicados (categoría 4): migraña con aura, > 35 años fumadora ≥ 15 cig/día, HTA ≥ 160/100, TEV, < 21 días posparto, cáncer de mama, LES con antifosfolípidos."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Implante de etonogestrel o levonorgestrel",
      "dose": "Subdérmico, 3–5 años"
    },
    {
      "d": "DIU de cobre o levonorgestrel",
      "dose": "5–10 años / 3–8 años"
    },
    {
      "d": "Inyectable trimestral",
      "dose": "Medroxiprogesterona 150 mg IM c/12 semanas"
    },
    {
      "d": "Anticonceptivo oral combinado",
      "dose": "1 tableta diaria"
    },
    {
      "d": "Solo progestágeno (lactancia)",
      "dose": "Desogestrel 75 mcg diario"
    }
  ],
  "goals": [
    "Método elegido e iniciado hoy"
  ],
  "alerts": [
    "Rifampicina y anticonvulsivantes inductores reducen la eficacia hormonal"
  ],
  "rel": [
    "ae"
  ],
  "g": {
    "co": {
      "n": "Resolución 3280 de 2018 (RIAS), MinSalud",
      "y": "2018",
      "st": "ok",
      "txt": "Asesoría y métodos incluidos en el plan de beneficios."
    },
    "intl": "OMS MEC 2015 · CDC US MEC 2024",
    "dif": []
  }
},
{
  "id": "menopausia",
  "sys": "Ginecología",
  "group": "Menopausia",
  "name": "Síntomas de la menopausia",
  "aka": "menopausia climaterio bochornos terapia hormonal estradiol progesterona sindrome genitourinario",
  "page": "Fuente: Menopause Society 2022/2023",
  "sub": "Terapia hormonal en < 60 años o < 10 años desde la menopausia, sin contraindicación.",
  "flow": [
    [
      "Con útero",
      "Estrógeno + progestágeno"
    ],
    [
      "Sin útero",
      "Solo estrógeno"
    ],
    [
      "Contraindicación",
      "No hormonal"
    ],
    [
      "Síndrome genitourinario",
      "Estrógeno vaginal"
    ]
  ],
  "criteria": [
    "Contraindicaciones: cáncer de mama, TEV, ACV, cardiopatía isquémica, hepatopatía activa, sangrado no estudiado."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Estradiol",
      "dose": "Transdérmico 50 mcg/día o 1 mg VO/día (preferir transdérmico si riesgo de TEV)"
    },
    {
      "d": "+ Progesterona micronizada (con útero)",
      "dose": "100 mg VO cada noche continuo o 200 mg × 12 días/mes"
    },
    {
      "d": "No hormonal",
      "dose": "Venlafaxina 37,5–75 mg/día o paroxetina 7,5 mg/día; gabapentina 300 mg noche"
    },
    {
      "d": "Síndrome genitourinario",
      "dose": "Estriol o estradiol vaginal 2 veces/semana"
    }
  ],
  "goals": [
    "Control de síntomas con la dosis mínima eficaz"
  ],
  "alerts": [
    "Paroxetina inhibe CYP2D6: no con tamoxifeno"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Menopause Society 2022/2023",
    "dif": []
  }
}
];
