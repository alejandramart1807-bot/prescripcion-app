// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "cerumen",
  "sys": "Otorrinolaringología",
  "group": "Oído",
  "name": "Tapón de cerumen",
  "aka": "tapon cerumen cera oido hipoacusia",
  "page": "Fuente: AAO-HNS 2017",
  "sub": "Hipoacusia, plenitud ótica o tinnitus con cerumen que ocluye el conducto.",
  "flow": [
    [
      "1",
      "Ceruminolítico 3–5 días"
    ],
    [
      "2",
      "Lavado o extracción"
    ]
  ],
  "criteria": [
    "No lavar si hay perforación timpánica conocida o sospecha, cirugía previa u otitis."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ceruminolítico",
      "dose": "Aceite mineral o gotas con bicarbonato de sodio: 3–5 gotas c/12 h por 3–5 días"
    },
    {
      "d": "Lavado con agua tibia o extracción en consulta"
    }
  ],
  "goals": [
    "Conducto permeable"
  ],
  "alerts": [
    "No usar copitos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO-HNS 2017",
    "dif": []
  }
},
{
  "id": "epistaxis",
  "sys": "Otorrinolaringología",
  "group": "Nariz",
  "name": "Epistaxis",
  "aka": "epistaxis sangrado nasal hemorragia nasal",
  "page": "Fuente: AAO-HNS 2020 epistaxis",
  "sub": "La mayoría es anterior (plexo de Kiesselbach).",
  "flow": [
    [
      "1",
      "Presión 10–15 min inclinado hacia adelante"
    ],
    [
      "2",
      "Vasoconstrictor tópico"
    ],
    [
      "3",
      "Cauterización o taponamiento"
    ],
    [
      "Posterior o no cede",
      "ORL"
    ]
  ],
  "criteria": [
    "Revisa anticoagulantes, PA, plaquetas si es recurrente."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Compresión digital del ala nasal",
      "dose": "10–15 min continuos"
    },
    {
      "d": "Oximetazolina nasal",
      "dose": "2–3 disparos o torunda empapada"
    },
    {
      "d": "Ácido tranexámico tópico",
      "dose": "Torunda con 500 mg (5 mL) en la fosa nasal"
    },
    {
      "d": "Cauterización con nitrato de plata si se ve el vaso"
    },
    {
      "d": "Taponamiento anterior",
      "dose": "Gasa con vaselina o esponja nasal por 24–48 h",
      "n": "Si queda > 48 h, considera antibiótico (amoxicilina-clavulanato)."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Humidificación y vaselina nasal c/12 h por 1 semana"
    }
  ],
  "goals": [
    "Hemostasia"
  ],
  "alerts": [
    "Sangrado posterior o masivo: ORL urgente"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO-HNS 2020 epistaxis",
    "dif": []
  }
},
{
  "id": "faringitis",
  "sys": "Otorrinolaringología",
  "group": "Faringe",
  "name": "Faringoamigdalitis estreptocócica",
  "aka": "faringitis amigdalitis estreptococo penicilina benzatinica centor",
  "page": "Fuente: IDSA 2012 faringitis",
  "sub": "Fiebre, exudado amigdalino, adenopatía cervical anterior dolorosa, sin tos (Centor/McIsaac). Confirma con prueba rápida si es posible.",
  "flow": [
    [
      "Centor 0–1",
      "Sin antibiótico"
    ],
    [
      "2–3",
      "Prueba rápida"
    ],
    [
      "≥ 4 o prueba +",
      "Antibiótico 10 días"
    ]
  ],
  "criteria": [
    "Trismus, voz de papa caliente o desviación de úvula: absceso periamigdalino."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Penicilina benzatínica",
      "dose": "1 200 000 U IM dosis única",
      "a": "Amoxicilina VO (fórmula para la casa)."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Amoxicilina",
      "dose": "500 mg VO c/12 h o 1 g c/24 h por 10 días"
    },
    {
      "d": "Alergia no grave a penicilina",
      "dose": "Cefalexina 500 mg VO c/12 h por 10 días"
    },
    {
      "d": "Alergia grave",
      "dose": "Azitromicina 500 mg VO c/24 h por 5 días",
      "a": "Clindamicina 300 mg c/8 h por 10 días."
    },
    {
      "d": "Analgesia",
      "dose": "Ibuprofeno 400 mg c/8 h o paracetamol 1 g c/6–8 h"
    }
  ],
  "goals": [
    "Mejoría en 48–72 h",
    "Prevención de fiebre reumática"
  ],
  "alerts": [],
  "rel": [
    "c-centor"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2012 faringitis",
    "dif": [
      "Desabastecimientos intermitentes de penicilina benzatínica: la amoxicilina VO 10 días es igual de eficaz."
    ]
  }
},
{
  "id": "otitis-ext",
  "sys": "Otorrinolaringología",
  "group": "Oído",
  "name": "Otitis externa",
  "aka": "otitis externa oido de nadador otalgia gotas oticas",
  "page": "Fuente: AAO-HNS 2014",
  "sub": "Otalgia con dolor al traccionar el pabellón, conducto edematoso con secreción.",
  "flow": [
    [
      "1",
      "Gotas óticas antibióticas 7 días"
    ],
    [
      "2",
      "Analgesia"
    ],
    [
      "Diabético o inmunosuprimido con dolor intenso",
      "Descarta otitis externa maligna"
    ]
  ],
  "criteria": [
    "Si no se ve la membrana: evita aminoglucósidos ototóxicos."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ciprofloxacino + hidrocortisona gotas óticas",
      "dose": "3–4 gotas c/12 h por 7 días",
      "a": "Ofloxacino 0,3 % 10 gotas c/24 h por 7 días."
    },
    {
      "d": "Analgesia",
      "dose": "Ibuprofeno 400 mg c/8 h"
    },
    {
      "d": "Mantener el oído seco",
      "n": "Algodón con vaselina al bañarse."
    }
  ],
  "goals": [
    "Mejoría en 48–72 h"
  ],
  "alerts": [
    "Otitis externa maligna: ciprofloxacino IV/VO sistémico y ORL"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO-HNS 2014",
    "dif": []
  }
},
{
  "id": "bell",
  "sys": "Otorrinolaringología",
  "group": "Nervio facial",
  "name": "Parálisis de Bell",
  "aka": "paralisis de bell paralisis facial periferica prednisona",
  "page": "Fuente: AAO-HNS 2013",
  "sub": "Paresia facial periférica aguda (incluye la frente) sin otra causa.",
  "flow": [
    [
      "< 72 h",
      "Prednisolona"
    ],
    [
      "Grave",
      "± antiviral"
    ],
    [
      "Siempre",
      "Protección ocular"
    ]
  ],
  "criteria": [
    "Respeta la frente o hay otros déficits: piensa en central (ACV).",
    "Vesículas en oído: Ramsay Hunt (antiviral)."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Prednisolona",
      "dose": "60 mg VO c/24 h × 5 días y desmontar 10 mg/día (o 50 mg/día × 10 días)",
      "a": "Prednisona a la misma dosis."
    },
    {
      "d": "Valaciclovir (grave o Ramsay Hunt)",
      "dose": "1 g VO c/8 h por 7 días"
    },
    {
      "d": "Protección ocular",
      "dose": "Lágrimas artificiales c/2–4 h + ungüento y oclusión nocturna"
    }
  ],
  "goals": [
    "Recuperación en 3–6 meses"
  ],
  "alerts": [
    "Sin mejoría a 3 semanas: reevaluar"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO-HNS 2013",
    "dif": []
  }
},
{
  "id": "rinitis",
  "sys": "Otorrinolaringología",
  "group": "Nariz",
  "name": "Rinitis alérgica (intermitente y persistente)",
  "aka": "rinitis alergica estornudos congestion antihistaminico corticoide nasal",
  "page": "Fuente: ARIA 2019",
  "sub": "Estornudos, rinorrea, prurito y congestión con exposición a alérgenos.",
  "flow": [
    [
      "Intermitente leve",
      "Antihistamínico oral a demanda"
    ],
    [
      "Persistente o moderada-grave",
      "Corticoide nasal diario"
    ],
    [
      "No controla",
      "Combinar"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Loratadina",
      "dose": "10 mg VO c/24 h",
      "a": "Cetirizina 10 mg, desloratadina 5 mg, fexofenadina 180 mg o bilastina 20 mg."
    },
    {
      "d": "Mometasona nasal",
      "dose": "2 disparos en cada fosa c/24 h (uso continuo)",
      "a": "Fluticasona o budesonida nasal."
    },
    {
      "d": "Lavados nasales con solución salina"
    }
  ],
  "goals": [
    "Control de síntomas"
  ],
  "alerts": [
    "Evita descongestionantes nasales > 3–5 días"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ARIA 2019",
    "dif": []
  }
},
{
  "id": "sinusitis",
  "sys": "Otorrinolaringología",
  "group": "Nariz",
  "name": "Rinosinusitis bacteriana aguda",
  "aka": "sinusitis rinosinusitis bacteriana amoxicilina",
  "page": "Fuente: IDSA 2012 · AAO-HNS 2015",
  "sub": "Sospecha bacteriana si: síntomas > 10 días sin mejoría, inicio grave (fiebre ≥ 39 °C + rinorrea purulenta ≥ 3 días) o empeoramiento tras mejoría inicial.",
  "flow": [
    [
      "Viral (< 10 días)",
      "Sintomático"
    ],
    [
      "Criterio bacteriano",
      "Amoxicilina-clavulanato 5–7 días"
    ]
  ],
  "criteria": [
    "Alarma: edema periorbitario, diplopía, cefalea intensa, signos meníngeos."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Amoxicilina-clavulanato",
      "dose": "875/125 mg VO c/12 h por 5–7 días",
      "a": "Doxiciclina 100 mg c/12 h; levofloxacino 750 mg c/24 h (alergia grave)."
    },
    {
      "d": "Lavados nasales con solución salina",
      "dose": "2–3 veces al día"
    },
    {
      "d": "Corticoide nasal",
      "dose": "Mometasona 2 disparos c/12 h"
    },
    {
      "d": "Analgesia",
      "dose": "Paracetamol o ibuprofeno"
    }
  ],
  "goals": [
    "Mejoría en 3–5 días"
  ],
  "alerts": [
    "Complicación orbitaria o intracraneal: urgencias y ORL"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "IDSA 2012 · AAO-HNS 2015",
    "dif": []
  }
},
{
  "id": "vertigo",
  "sys": "Otorrinolaringología",
  "group": "Vértigo",
  "name": "Mareo / vértigo agudo: abordaje",
  "aka": "vertigo mareo hints ataxia dimenhidrinato",
  "page": "Fuente: Barany Society · AAO-HNS",
  "sub": "Primero descarta causa central (ACV de circulación posterior).",
  "flow": [
    [
      "Episódico posicional",
      "VPPB (Dix-Hallpike)"
    ],
    [
      "Continuo agudo",
      "HINTS: ¿periférico o central?"
    ],
    [
      "Episódico espontáneo",
      "Ménière o migraña vestibular"
    ]
  ],
  "criteria": [
    "HINTS central (cualquiera): impulso cefálico normal, nistagmo que cambia de dirección, desviación ocular vertical (skew). También: cefalea, déficit neurológico, incapacidad para caminar."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dimenhidrinato",
      "dose": "50 mg IV lento o VO",
      "a": "Meclizina 25 mg VO; diazepam 2–5 mg IV si ansiedad."
    },
    {
      "d": "Ondansetrón si vómito",
      "dose": "4–8 mg IV"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Supresor vestibular por máx 3 días",
      "dose": "Dimenhidrinato 50 mg VO c/6–8 h o meclizina 25 mg c/8–12 h",
      "n": "El uso prolongado retrasa la compensación."
    }
  ],
  "goals": [
    "Diagnóstico sindromático y control de síntomas"
  ],
  "alerts": [
    "Sospecha central: RM y neurología (la TAC no descarta)"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Barany Society · AAO-HNS",
    "dif": [
      "Meclizina con piridoxina es una presentación común en Colombia."
    ]
  }
},
{
  "id": "meniere",
  "sys": "Otorrinolaringología",
  "group": "Vértigo",
  "name": "Enfermedad de Ménière",
  "aka": "meniere vertigo tinnitus hipoacusia plenitud",
  "page": "Fuente: AAO-HNS 2020 Ménière",
  "sub": "Crisis de vértigo de 20 min a 12 h con hipoacusia fluctuante, tinnitus y plenitud ótica.",
  "flow": [
    [
      "Crisis",
      "Supresor vestibular + antiemético"
    ],
    [
      "Mantenimiento",
      "Restricción de sal ± diurético"
    ],
    [
      "Refractaria",
      "ORL"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dimenhidrinato",
      "dose": "50 mg IV/VO",
      "a": "Diazepam 2–5 mg IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Dieta con < 2 g/día de sodio, evitar cafeína y alcohol"
    },
    {
      "d": "Hidroclorotiazida",
      "dose": "25 mg VO c/24 h"
    },
    {
      "d": "Betahistina",
      "dose": "24 mg VO c/12 h",
      "n": "Evidencia limitada."
    }
  ],
  "goals": [
    "Menos crisis"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO-HNS 2020 Ménière",
    "dif": []
  }
},
{
  "id": "migr-vest",
  "sys": "Otorrinolaringología",
  "group": "Vértigo",
  "name": "Migraña vestibular",
  "aka": "migrana vestibular vertigo migraña",
  "page": "Fuente: Barany/ICHD-3",
  "sub": "Crisis vestibulares de 5 min a 72 h en paciente con migraña, con síntomas migrañosos en al menos la mitad de las crisis.",
  "flow": [
    [
      "Crisis",
      "Antiemético + analgésico"
    ],
    [
      "Frecuente",
      "Profilaxis como migraña"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Metoclopramida",
      "dose": "10 mg IV",
      "a": "Dimenhidrinato 50 mg IV."
    },
    {
      "d": "Dipirona o ketorolaco",
      "dose": "1 g IV o 30 mg IV"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Profilaxis",
      "dose": "Flunarizina 5–10 mg en la noche, propranolol 40–80 mg c/12 h o amitriptilina 10–25 mg en la noche"
    }
  ],
  "goals": [
    "Menos crisis"
  ],
  "alerts": [],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Barany/ICHD-3",
    "dif": []
  }
},
{
  "id": "neuritis-vest",
  "sys": "Otorrinolaringología",
  "group": "Vértigo",
  "name": "Neuritis vestibular",
  "aka": "neuritis vestibular vertigo continuo",
  "page": "Fuente: Revisiones de neuro-otología",
  "sub": "Vértigo continuo por días, nistagmo horizontal unidireccional, impulso cefálico anormal, sin hipoacusia.",
  "flow": [
    [
      "1",
      "Confirma HINTS periférico"
    ],
    [
      "2",
      "Supresor vestibular 1–3 días"
    ],
    [
      "3",
      "Rehabilitación vestibular temprana"
    ]
  ],
  "criteria": [
    "Con hipoacusia: laberintitis."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dimenhidrinato",
      "dose": "50 mg IV lento"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Dimenhidrinato",
      "dose": "50 mg VO c/6–8 h por máx 3 días"
    },
    {
      "d": "Prednisolona (opcional, < 72 h)",
      "dose": "1 mg/kg/día por 5 días y desmontar",
      "n": "Beneficio incierto."
    },
    {
      "d": "Ejercicios de rehabilitación vestibular"
    }
  ],
  "goals": [
    "Mejoría en días a semanas"
  ],
  "alerts": [
    "Factores de riesgo vascular: descarta ACV"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Revisiones de neuro-otología",
    "dif": []
  }
},
{
  "id": "vppb",
  "sys": "Otorrinolaringología",
  "group": "Vértigo",
  "name": "Vértigo posicional paroxístico benigno (VPPB)",
  "aka": "vppb vertigo posicional epley dix hallpike",
  "page": "Fuente: AAO-HNS 2017 VPPB",
  "sub": "Vértigo breve (< 1 min) con cambios de posición; Dix-Hallpike positivo.",
  "flow": [
    [
      "1",
      "Dix-Hallpike"
    ],
    [
      "2",
      "Maniobra de Epley (canal posterior)"
    ],
    [
      "3",
      "Sin fármacos de rutina"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Maniobra de Epley",
      "n": "Repetir si persiste positivo."
    },
    {
      "d": "Antiemético solo si náuseas intensas",
      "dose": "Dimenhidrinato 50 mg VO dosis única"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Maniobras de Epley en casa o Brandt-Daroff"
    }
  ],
  "goals": [
    "Resolución tras la maniobra"
  ],
  "alerts": [
    "No supresores vestibulares prolongados"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO-HNS 2017 VPPB",
    "dif": []
  }
}
];
