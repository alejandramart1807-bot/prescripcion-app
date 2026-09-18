// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "as",
  "sys": "Ortopedia y reumatología",
  "group": "Reumatología",
  "name": "Artritis séptica",
  "aka": "artritis septica monoartritis articulacion infeccion",
  "page": "Fuente: BSR/BOA · revisiones de expertos (no hay guía internacional única)",
  "sub": "Monoartritis aguda caliente y dolorosa: artrocentesis antes del antibiótico.",
  "flow": [
    [
      "1",
      "Artrocentesis: Gram, cultivo, cristales, leucocitos"
    ],
    [
      "2",
      "Hemocultivos"
    ],
    [
      "3",
      "Antibiótico empírico"
    ],
    [
      "4",
      "Drenaje"
    ]
  ],
  "criteria": [
    "Leucocitos sinoviales > 50 000 con > 90 % PMN sugieren infección; cristales no la descartan."
  ],
  "orders": [
    {
      "d": "Vancomicina",
      "dose": "Carga 25–30 mg/kg IV (máx 3 g), luego 15–20 mg/kg c/8–12 h",
      "calc": {
        "t": "kg",
        "lo": 25,
        "hi": 30,
        "unit": "mg",
        "label": "carga",
        "max": 3000
      },
      "a": "Linezolid 600 mg c/12 h, o clindamicina 600 mg c/8 h si sensible."
    },
    {
      "d": "+ Ceftriaxona (Gram negativos, gonococo o inmunosupresión)",
      "dose": "2 g IV c/24 h",
      "a": "Cefepime 2 g c/8 h si riesgo de Pseudomonas."
    },
    {
      "d": "S. aureus sensible a oxacilina (según cultivo)",
      "dose": "Cefazolina 2 g IV c/8 h",
      "a": "Oxacilina 2 g IV c/4 h."
    },
    {
      "d": "Drenaje articular",
      "n": "Artrocentesis repetidas o lavado artroscópico/quirúrgico."
    },
    {
      "d": "Analgesia",
      "dose": "Dipirona 1–2 g IV c/6–8 h ± opioide"
    }
  ],
  "goals": [
    "Mejoría clínica en 48–72 h",
    "Duración total 3–4 semanas (2 IV)"
  ],
  "alerts": [
    "Prótesis articular: interconsulta a ortopedia de inmediato"
  ],
  "rel": [
    "r-sinovial"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BSR/BOA · revisiones de expertos (no hay guía internacional única)",
    "dif": [
      "SAMR de la comunidad frecuente en Colombia: por eso la vancomicina empírica."
    ]
  }
},
{
  "id": "dolor-art",
  "sys": "Ortopedia y reumatología",
  "group": "Articulaciones",
  "name": "Dolor articular agudo",
  "aka": "dolor articular artralgia monoartritis rodilla",
  "page": "Fuente: EULAR · ACR",
  "sub": "Primero separa monoartritis inflamatoria (séptica, gota) de dolor mecánico o periarticular.",
  "flow": [
    [
      "Monoartritis caliente",
      "Artrocentesis (séptica vs cristales)"
    ],
    [
      "Mecánico",
      "AINE + reposo relativo"
    ],
    [
      "Poliartritis",
      "Estudio reumatológico"
    ]
  ],
  "criteria": [
    "Fiebre, articulación caliente e incapacidad funcional: artritis séptica hasta demostrar lo contrario."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ketorolaco",
      "dose": "30 mg IV/IM",
      "a": "Diclofenaco 75 mg IM o dipirona 1–2 g IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Naproxeno",
      "dose": "500 mg VO c/12 h por 5–7 días",
      "a": "Ibuprofeno 400–600 mg c/8 h; diclofenaco gel c/8 h."
    },
    {
      "d": "Paracetamol",
      "dose": "1 g c/8 h"
    },
    {
      "d": "Hielo 15–20 min c/4–6 h las primeras 48 h"
    }
  ],
  "goals": [
    "Dolor controlado y diagnóstico definido"
  ],
  "alerts": [
    "Monoartritis febril: ficha de artritis séptica"
  ],
  "rel": [
    "r-sinovial"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "EULAR · ACR",
    "dif": []
  }
},
{
  "id": "lumbalgia",
  "sys": "Ortopedia y reumatología",
  "group": "Columna",
  "name": "Lumbalgia mecánica aguda",
  "aka": "lumbalgia dolor lumbar lumbago ciatica",
  "page": "Fuente: ACP 2017 · NICE 2020",
  "sub": "Dolor lumbar sin banderas rojas; mejora en 4–6 semanas en la mayoría.",
  "flow": [
    [
      "1",
      "Busca banderas rojas"
    ],
    [
      "2",
      "AINE + relajante corto"
    ],
    [
      "3",
      "Mantenerse activo"
    ],
    [
      "Sin mejoría a 6 semanas",
      "Reevaluar"
    ]
  ],
  "criteria": [
    "Banderas rojas: déficit neurológico progresivo, síndrome de cauda equina (retención, anestesia en silla de montar), fiebre, cáncer, pérdida de peso, trauma, osteoporosis, uso de drogas IV, > 50 años con primer episodio."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Diclofenaco",
      "dose": "75 mg IM",
      "a": "Ketorolaco 30 mg IM/IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Naproxeno",
      "dose": "500 mg VO c/12 h por 5–7 días",
      "a": "Ibuprofeno 400–600 mg c/8 h."
    },
    {
      "d": "Ciclobenzaprina",
      "dose": "5–10 mg VO en la noche por máx 1–2 semanas",
      "a": "Metocarbamol 750 mg c/8 h."
    },
    {
      "d": "Calor local y actividad según tolerancia",
      "n": "El reposo en cama empeora el pronóstico."
    }
  ],
  "goals": [
    "Mejoría funcional en 2–4 semanas"
  ],
  "alerts": [
    "No imágenes de rutina sin banderas rojas",
    "Evita opioides de uso prolongado"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACP 2017 · NICE 2020",
    "dif": []
  }
},
{
  "id": "esguince",
  "sys": "Ortopedia y reumatología",
  "group": "Extremidades",
  "name": "Esguince de tobillo",
  "aka": "esguince tobillo torcedura ligamento ottawa",
  "page": "Fuente: Ottawa · KNGF 2023",
  "sub": "Inversión forzada con dolor y edema lateral. Aplica reglas de Ottawa para decidir Rx.",
  "flow": [
    [
      "Ottawa +",
      "Rx"
    ],
    [
      "Grado I–II",
      "Inmovilización funcional + AINE"
    ],
    [
      "Grado III o fractura",
      "Ortopedia"
    ]
  ],
  "criteria": [
    "Ottawa: dolor maleolar + sensibilidad en borde posterior o punta de maléolos o incapacidad de dar 4 pasos."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Analgesia",
      "dose": "Ketorolaco 30 mg IM o dipirona 1 g VO"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Hielo, compresión y elevación",
      "dose": "Hielo 15–20 min c/3–4 h × 48–72 h"
    },
    {
      "d": "Tobillera o vendaje funcional",
      "dose": "1–3 semanas; apoyo según tolerancia"
    },
    {
      "d": "AINE tópico u oral",
      "dose": "Diclofenaco gel c/8 h o ibuprofeno 400 mg c/8 h por 3–7 días"
    },
    {
      "d": "Ejercicios de movilidad y propiocepción tras 48–72 h"
    }
  ],
  "goals": [
    "Apoyo completo en 1–3 semanas"
  ],
  "alerts": [
    "No inmovilices con yeso los grados I–II"
  ],
  "rel": [
    "c-ottawa"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "Ottawa · KNGF 2023",
    "dif": []
  }
},
{
  "id": "gota",
  "sys": "Ortopedia y reumatología",
  "group": "Articulaciones",
  "name": "Gota: artritis gotosa aguda",
  "aka": "gota acido urico podagra colchicina",
  "page": "Fuente: ACR 2020 gota · EULAR 2016",
  "sub": "Monoartritis muy dolorosa (primer metatarsofalángico) de inicio nocturno; cristales de urato si se punciona.",
  "flow": [
    [
      "< 24 h",
      "Colchicina, AINE o corticoide"
    ],
    [
      "No suspender alopurinol si ya lo toma"
    ],
    [
      "Después",
      "Reductor de urato si criterios"
    ]
  ],
  "criteria": [
    "Descarta artritis séptica si hay fiebre o duda."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Colchicina",
      "dose": "1 mg VO y 0,5 mg 1 h después; luego 0,5 mg c/12–24 h hasta resolver",
      "n": "Tabletas de 0,5 mg en Colombia. Reduce dosis en ERC y con claritromicina, azoles o estatinas."
    },
    {
      "d": "o Naproxeno",
      "dose": "500 mg VO c/12 h por 5–7 días",
      "a": "Indometacina 50 mg c/8 h."
    },
    {
      "d": "o Prednisolona (si ERC o contraindicación de AINE)",
      "dose": "30–35 mg VO c/24 h por 5 días"
    },
    {
      "d": "Reductor de urato (≥ 2 crisis/año, tofos, ERC, litiasis)",
      "dose": "Alopurinol 100 mg/día, subir cada 2–4 semanas hasta urato < 6 mg/dL, con colchicina 0,5 mg/día profiláctica 3–6 meses"
    }
  ],
  "goals": [
    "Resolución en 3–7 días",
    "Urato < 6 mg/dL a largo plazo"
  ],
  "alerts": [
    "Alopurinol: tamiza HLA-B*5801 en población de riesgo; ajusta a TFG"
  ],
  "rel": [
    "r-sinovial"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ACR 2020 gota · EULAR 2016",
    "dif": [
      "Colchicina en tabletas de 0,5 mg (no 0,6): usa 1 mg + 0,5 mg."
    ]
  }
},
{
  "id": "fx-abierta",
  "sys": "Ortopedia y reumatología",
  "group": "Trauma",
  "name": "Fractura abierta",
  "aka": "fractura abierta gustilo antibiotico cefazolina desbridamiento",
  "page": "Fuente: EAST 2022 · BOAST 2017",
  "sub": "Antibiótico en la primera hora, toxoide y lavado-desbridamiento quirúrgico.",
  "flow": [
    [
      "< 1 h",
      "Antibiótico"
    ],
    [
      "Gustilo I–II",
      "Cefazolina"
    ],
    [
      "Gustilo III",
      "Ceftriaxona"
    ],
    [
      "< 24 h",
      "Desbridamiento"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Gustilo I–II: cefazolina",
      "dose": "2 g IV c/8 h (3 g si ≥ 120 kg) hasta 24 h tras el cierre",
      "a": "Alergia: clindamicina 900 mg IV c/8 h."
    },
    {
      "d": "Gustilo III: ceftriaxona",
      "dose": "2 g IV c/24 h hasta 72 h o 24 h tras cobertura",
      "a": "Cefazolina + gentamicina 5 mg/kg/día."
    },
    {
      "d": "Profilaxis antitetánica (ver ficha)"
    },
    {
      "d": "Cubrir con gasa húmeda estéril, alinear e inmovilizar; analgesia"
    }
  ],
  "goals": [
    "Antibiótico < 1 h"
  ],
  "alerts": [
    "Vigila síndrome compartimental"
  ],
  "rel": [
    "tetanos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "EAST 2022 · BOAST 2017",
    "dif": []
  }
},
{
  "id": "sd-compart",
  "sys": "Ortopedia y reumatología",
  "group": "Trauma",
  "name": "Síndrome compartimental agudo",
  "aka": "sindrome compartimental fasciotomia dolor al estiramiento pasivo",
  "page": "Fuente: BOAST 2016",
  "sub": "Dolor desproporcionado y al estiramiento pasivo tras fractura, aplastamiento o reperfusión. Diagnóstico clínico.",
  "flow": [
    [
      "Sospecha",
      "Retirar vendajes y yesos"
    ],
    [
      "Extremidad a nivel del corazón",
      "No elevar"
    ],
    [
      "ΔP < 30 mmHg o clínica clara",
      "Fasciotomía urgente"
    ]
  ],
  "criteria": [
    "ΔP = PAD − presión compartimental."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Abrir vendajes y yeso hasta la piel"
    },
    {
      "d": "Extremidad a nivel del corazón; corregir hipotensión; oxígeno"
    },
    {
      "d": "Analgesia sin bloqueos regionales que enmascaren"
    },
    {
      "d": "Ortopedia para fasciotomía"
    }
  ],
  "goals": [
    "Fasciotomía < 6 h"
  ],
  "alerts": [
    "Pulso presente no descarta"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "BOAST 2016",
    "dif": []
  }
}
];
