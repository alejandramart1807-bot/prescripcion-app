// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "sepsis",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Sepsis: paquete de la primera hora",
  "aka": "sepsis bundle hora cero lactato hemocultivos antibiotico",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Infección con disfunción orgánica (↑ SOFA ≥ 2). Shock séptico: vasopresor para PAM ≥ 65 y lactato > 2 pese a volumen.",
  "flow": [
    [
      "1",
      "Lactato"
    ],
    [
      "2",
      "Hemocultivos × 2"
    ],
    [
      "3",
      "Antibiótico: < 1 h si shock, < 3 h si sepsis probable"
    ],
    [
      "4",
      "30 mL/kg si hipotensión o lactato ≥ 4"
    ],
    [
      "5",
      "Vasopresor si PAM < 65"
    ]
  ],
  "criteria": [
    "qSOFA no sirve solo como tamizaje.",
    "Control de fuente en < 6–12 h."
  ],
  "orders": [
    {
      "d": "Lactato sérico; repetir a las 2–4 h si > 2"
    },
    {
      "d": "Hemocultivos (2 sets) antes del antibiótico, sin retrasarlo"
    },
    {
      "d": "Antibiótico empírico según foco",
      "n": "Ver fichas de foco."
    },
    {
      "d": "Cristaloide balanceado",
      "dose": "30 mL/kg en las primeras 3 h si hipotensión o lactato ≥ 4",
      "calc": {
        "t": "kg",
        "lo": 30,
        "hi": 30,
        "unit": "mL"
      },
      "n": "Reevalúa respuesta (llenado capilar, lactato, POCUS).",
      "a": "SSN 0,9 %."
    },
    {
      "d": "Noradrenalina si PAM < 65",
      "dose": "0,05–1 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 1,
        "conc": 16
      },
      "dil": "4 mg en 250 mL = 16 mcg/mL; puede iniciarse por vía periférica"
    }
  ],
  "goals": [
    "PAM ≥ 65",
    "Lactato en descenso",
    "Llenado capilar normal",
    "Diuresis ≥ 0,5 mL/kg/h"
  ],
  "alerts": [
    "Desescala a las 48–72 h según cultivos"
  ],
  "rel": [
    "c-qsofa",
    "c-news2",
    "r-inflamacion",
    "les-fiebre"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-abd",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Sepsis de foco abdominal",
  "aka": "sepsis abdominal peritonitis colangitis absceso intraabdominal",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Peritonitis secundaria, colangitis, absceso: el control de la fuente es tan importante como el antibiótico.",
  "flow": [
    [
      "Comunidad sin riesgo",
      "Ceftriaxona + metronidazol"
    ],
    [
      "Riesgo BLEE",
      "Ertapenem"
    ],
    [
      "Grave o nosocomial",
      "Piperacilina-tazobactam o meropenem"
    ],
    [
      "Fuente",
      "Cirugía, drenaje o CPRE"
    ]
  ],
  "criteria": [
    "Riesgo de BLEE: antibiótico o hospitalización en 90 días, BLEE previo, institucionalizado."
  ],
  "orders": [
    {
      "d": "Ceftriaxona + metronidazol",
      "dose": "Ceftriaxona 2 g IV c/24 h + metronidazol 500 mg IV c/8 h",
      "a": "Alergia a betalactámicos: ciprofloxacino 400 mg c/12 h + metronidazol."
    },
    {
      "d": "Ertapenem (riesgo de BLEE, estable)",
      "dose": "1 g IV c/24 h"
    },
    {
      "d": "Piperacilina-tazobactam (grave o nosocomial)",
      "dose": "4,5 g IV c/6 h (infusión extendida si es posible)",
      "a": "Meropenem 1 g IV c/8 h si shock o BLEE."
    },
    {
      "d": "Control de la fuente < 6–12 h"
    }
  ],
  "goals": [
    "4 días de antibiótico tras control adecuado de la fuente"
  ],
  "alerts": [
    "Nosocomial con falla terapéutica: considera Candida y enterococo"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-sangre",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Bacteriemia / infección asociada a catéter",
  "aka": "bacteriemia catéter infeccion torrente sanguineo cvc",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Hemocultivos positivos o sepsis en portador de catéter sin otro foco.",
  "flow": [
    [
      "1",
      "Hemocultivos periférico + catéter"
    ],
    [
      "2",
      "Vancomicina + antipseudomona"
    ],
    [
      "3",
      "Retira el catéter"
    ],
    [
      "4",
      "Ajusta por cultivo"
    ]
  ],
  "criteria": [
    "S. aureus: ecocardiograma y mínimo 14 días.",
    "Candida: retira catéter y fondo de ojo."
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
      "a": "Linezolid 600 mg IV c/12 h o daptomicina 8–10 mg/kg/día."
    },
    {
      "d": "+ Cefepime",
      "dose": "2 g IV c/8 h",
      "a": "Piperacilina-tazobactam 4,5 g c/6 h o meropenem 1 g c/8 h (BLEE o shock)."
    },
    {
      "d": "+ Equinocandina si riesgo de Candida",
      "dose": "Caspofungina 70 mg día 1, luego 50 mg/día",
      "n": "Nutrición parenteral, femoral, antibióticos de amplio espectro, colonización múltiple."
    },
    {
      "d": "Retiro del catéter"
    }
  ],
  "goals": [
    "Hemocultivos de control negativos"
  ],
  "alerts": [
    "S. aureus sensible: cambia a cefazolina u oxacilina"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-piel",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Piel y partes blandas (no necrotizante)",
  "aka": "celulitis erisipela absceso piel partes blandas",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Celulitis, erisipela o absceso con repercusión sistémica.",
  "flow": [
    [
      "No purulenta",
      "Estreptococo: cefazolina"
    ],
    [
      "Purulenta",
      "S. aureus / SAMR: drenaje + vancomicina"
    ],
    [
      "¿Necrosis?",
      "Ver fascitis"
    ]
  ],
  "criteria": [
    "Dolor desproporcionado, crepitación, bulas o toxicidad → sospecha necrotizante."
  ],
  "orders": [
    {
      "d": "Cefazolina (no purulenta)",
      "dose": "2 g IV c/8 h",
      "a": "Oxacilina 2 g c/4 h; alergia: clindamicina 600 mg c/8 h."
    },
    {
      "d": "Vancomicina (purulenta o SAMR)",
      "dose": "Carga 25–30 mg/kg, luego 15–20 mg/kg c/8–12 h",
      "calc": {
        "t": "kg",
        "lo": 25,
        "hi": 30,
        "unit": "mg",
        "label": "carga",
        "max": 3000
      },
      "a": "Linezolid 600 mg c/12 h o clindamicina 600 mg c/8 h si sensible; TMP-SMX VO al egreso."
    },
    {
      "d": "Drenaje del absceso"
    },
    {
      "d": "Elevación de la extremidad"
    }
  ],
  "goals": [
    "Mejoría en 48–72 h",
    "5–7 días de tratamiento"
  ],
  "alerts": [
    "Marca el borde del eritema para seguimiento"
  ],
  "rel": [
    "mi-piel"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-nec",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Infección necrotizante de partes blandas (fascitis)",
  "aka": "fascitis necrotizante gangrena fournier necrosis",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Emergencia quirúrgica: dolor desproporcionado, bulas, crepitación, anestesia cutánea, toxicidad sistémica.",
  "flow": [
    [
      "1",
      "Cirugía urgente (desbridamiento)"
    ],
    [
      "2",
      "Amplio espectro + clindamicina"
    ],
    [
      "3",
      "Reintervención c/24–48 h"
    ]
  ],
  "criteria": [
    "La imagen no debe retrasar la cirugía."
  ],
  "orders": [
    {
      "d": "Piperacilina-tazobactam",
      "dose": "4,5 g IV c/6 h",
      "a": "Meropenem 1 g IV c/8 h."
    },
    {
      "d": "+ Vancomicina (si riesgo de SAMR o shock)",
      "dose": "Carga 25–30 mg/kg IV (máx 3 g), luego 15–20 mg/kg c/8–12 h",
      "calc": {
        "t": "kg",
        "lo": 25,
        "hi": 30,
        "unit": "mg",
        "label": "carga",
        "max": 3000
      },
      "a": "Linezolid 600 mg IV c/12 h."
    },
    {
      "d": "+ Clindamicina (antitoxina)",
      "dose": "900 mg IV c/8 h",
      "a": "Linezolid 600 mg c/12 h (también inhibe toxinas)."
    },
    {
      "d": "Interconsulta a cirugía de inmediato"
    }
  ],
  "goals": [
    "Desbridamiento < 6 h"
  ],
  "alerts": [
    "Mortalidad aumenta con cada hora de retraso quirúrgico"
  ],
  "rel": [
    "c-lrinec",
    "mi-piel"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-pulm",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Neumonía grave (foco pulmonar)",
  "aka": "neumonia nac grave nosocomial nav sepsis pulmonar",
  "page": "Fuente: Guía colombiana · ATS/IDSA 2019 NAC · IDSA/ATS 2016 nosocomial",
  "sub": "NAC grave (criterios ATS/IDSA) o neumonía nosocomial o asociada al ventilador.",
  "flow": [
    [
      "NAC grave",
      "Betalactámico + macrólido"
    ],
    [
      "Riesgo SAMR / Pseudomonas",
      "Añade cobertura"
    ],
    [
      "Nosocomial",
      "Antipseudomona ± vancomicina"
    ],
    [
      "Adyuvante",
      "Hidrocortisona en NAC grave"
    ]
  ],
  "criteria": [
    "Riesgo SAMR/Pseudomonas: aislamiento respiratorio previo, hospitalización con ATB IV en 90 días."
  ],
  "orders": [
    {
      "d": "Ceftriaxona + azitromicina (NAC)",
      "dose": "Ceftriaxona 2 g IV c/24 h + azitromicina 500 mg IV c/24 h",
      "a": "Ampicilina-sulbactam 3 g c/6 h + claritromicina 500 mg c/12 h; alergia: levofloxacino 750 mg c/24 h."
    },
    {
      "d": "Antipseudomona (nosocomial o riesgo)",
      "dose": "Piperacilina-tazobactam 4,5 g c/6 h o cefepime 2 g c/8 h",
      "a": "Meropenem 1 g c/8 h si BLEE."
    },
    {
      "d": "+ Vancomicina (si riesgo de SAMR o shock)",
      "dose": "Carga 25–30 mg/kg IV (máx 3 g), luego 15–20 mg/kg c/8–12 h",
      "calc": {
        "t": "kg",
        "lo": 25,
        "hi": 30,
        "unit": "mg",
        "label": "carga",
        "max": 3000
      },
      "a": "Linezolid 600 mg IV c/12 h."
    },
    {
      "d": "Hidrocortisona (NAC grave)",
      "dose": "200 mg/día IV (50 mg c/6 h o infusión) por 4–7 días"
    },
    {
      "d": "Oseltamivir si influenza posible",
      "dose": "75 mg VO c/12 h"
    }
  ],
  "goals": [
    "5–7 días si hay estabilidad clínica"
  ],
  "alerts": [
    "Pide antígenos urinarios y panel viral según disponibilidad"
  ],
  "rel": [
    "mi-nac"
  ],
  "g": {
    "co": {
      "n": "Recomendaciones colombianas de NAC en adultos (ACIN)",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con ATS/IDSA 2019 y SCCM 2024 (corticoides en NAC grave)."
    },
    "intl": "ATS/IDSA 2019 NAC · IDSA/ATS 2016 nosocomial · SCCM 2024",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-uri",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Sepsis de foco urinario (urosepsis)",
  "aka": "urosepsis pielonefritis infeccion urinaria complicada",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Pielonefritis o IVU complicada con disfunción orgánica.",
  "flow": [
    [
      "Sin riesgo BLEE",
      "Ceftriaxona"
    ],
    [
      "Riesgo BLEE",
      "Ertapenem"
    ],
    [
      "Shock",
      "Meropenem"
    ],
    [
      "Obstrucción",
      "Descompresión urgente"
    ]
  ],
  "criteria": [
    "Ecografía renal para descartar obstrucción o absceso."
  ],
  "orders": [
    {
      "d": "Ceftriaxona",
      "dose": "1–2 g IV c/24 h",
      "a": "Amikacina 15 mg/kg IV c/24 h (buena actividad contra BLEE)."
    },
    {
      "d": "Ertapenem (riesgo de BLEE)",
      "dose": "1 g IV c/24 h"
    },
    {
      "d": "Meropenem (shock)",
      "dose": "1 g IV c/8 h"
    },
    {
      "d": "Cambiar la sonda vesical si la tiene"
    }
  ],
  "goals": [
    "7 días de tratamiento si hay respuesta"
  ],
  "alerts": [
    "Hidronefrosis infectada: nefrostomía o catéter doble J urgente"
  ],
  "rel": [
    "mi-ivu"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "foco-nd",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Sepsis sin foco definido",
  "aka": "sepsis sin foco fiebre sin foco tropical rickettsia leptospirosis malaria dengue",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Sepsis sin foco evidente tras evaluación inicial.",
  "flow": [
    [
      "1",
      "Amplio espectro"
    ],
    [
      "2",
      "Busca foco: imagen, cultivos"
    ],
    [
      "3",
      "Colombia: piensa en tropicales"
    ]
  ],
  "criteria": [
    "En zona endémica: gota gruesa (malaria), dengue (NS1/IgM), leptospirosis, rickettsiosis (Antioquia, Córdoba, Cundinamarca)."
  ],
  "orders": [
    {
      "d": "Piperacilina-tazobactam",
      "dose": "4,5 g IV c/6 h",
      "a": "Meropenem 1 g IV c/8 h si shock o BLEE."
    },
    {
      "d": "+ Vancomicina (si riesgo de SAMR o shock)",
      "dose": "Carga 25–30 mg/kg IV (máx 3 g), luego 15–20 mg/kg c/8–12 h",
      "calc": {
        "t": "kg",
        "lo": 25,
        "hi": 30,
        "unit": "mg",
        "label": "carga",
        "max": 3000
      },
      "a": "Linezolid 600 mg IV c/12 h."
    },
    {
      "d": "Doxiciclina si sospecha de rickettsia o leptospirosis",
      "dose": "100 mg VO/SNG c/12 h",
      "n": "No esperes confirmación: la rickettsiosis tiene alta letalidad."
    }
  ],
  "goals": [
    "Identificar el foco en 24–48 h"
  ],
  "alerts": [
    "Dengue grave: no uses AINE ni sobrecarga de volumen"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "shock",
  "sys": "Paciente crítico",
  "group": "Sepsis",
  "name": "Shock séptico",
  "aka": "shock septico vasopresor noradrenalina vasopresina hidrocortisona",
  "page": "Fuente: Surviving Sepsis Campaign 2021 · IDSA",
  "sub": "Sepsis con vasopresor para PAM ≥ 65 y lactato > 2 pese a volumen adecuado.",
  "flow": [
    [
      "1",
      "Noradrenalina"
    ],
    [
      "NE ≥ 0,25",
      "+ vasopresina + hidrocortisona"
    ],
    [
      "Disfunción cardíaca",
      "+ dobutamina o adrenalina"
    ],
    [
      "Reevalúa",
      "Lactato c/2 h, llenado capilar"
    ]
  ],
  "criteria": [
    "Línea arterial y catéter central en cuanto sea posible."
  ],
  "orders": [
    {
      "d": "Noradrenalina",
      "dose": "Iniciar 0,1 mcg/kg/min, titular a PAM ≥ 65",
      "dil": "4 mg en 250 mL = 16 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 1,
        "conc": 16
      },
      "a": "Adrenalina 0,05–0,5 mcg/kg/min; dopamina solo si bradicardia y bajo riesgo de arritmia."
    },
    {
      "d": "Vasopresina (NE ≥ 0,25–0,5)",
      "dose": "0,03 U/min (fija)",
      "dil": "20 U en 100 mL = 0,2 U/mL → 9 mL/h",
      "a": "Disponibilidad variable: adrenalina como segundo vasopresor."
    },
    {
      "d": "Hidrocortisona (NE ≥ 0,25 por ≥ 4 h)",
      "dose": "50 mg IV c/6 h (o 200 mg/día en infusión)"
    },
    {
      "d": "Dobutamina (hipoperfusión con PAM adecuada y bajo gasto)",
      "dose": "2,5–20 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 2.5,
        "hi": 20,
        "conc": 1000
      },
      "dil": "250 mg en 250 mL = 1000 mcg/mL"
    },
    {
      "d": "Balance hídrico",
      "n": "Tras la reanimación inicial, evita balance muy positivo."
    }
  ],
  "goals": [
    "PAM ≥ 65",
    "Lactato < 2",
    "Llenado capilar < 3 s"
  ],
  "alerts": [
    "Noradrenalina periférica: vena gruesa proximal, vigila extravasación"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud de sepsis del adulto."
    },
    "intl": "Surviving Sepsis Campaign 2021 · IDSA",
    "dif": [
      "Alta prevalencia de E. coli y Klebsiella BLEE y endemicidad de KPC en Colombia: ajusta el esquema al antibiograma de tu institución (reportes GREBO)."
    ]
  }
},
{
  "id": "sri",
  "sys": "Paciente crítico",
  "group": "Vía aérea y ventilación",
  "name": "Secuencia rápida de intubación (SRI)",
  "aka": "sri intubacion secuencia rapida inductor bloqueante neuromuscular",
  "page": "Fuente: DAS 2018 · SCCM",
  "sub": "Preparación, preoxigenación, optimización hemodinámica, inducción + bloqueo simultáneos, intubación y cuidados posteriores.",
  "flow": [
    [
      "Prepara",
      "Equipo, plan B y C, aspiración"
    ],
    [
      "Preoxigena",
      "3 min O₂ alto flujo o VNI"
    ],
    [
      "Optimiza",
      "PA: volumen o vasopresor antes"
    ],
    [
      "Induce + bloquea"
    ],
    [
      "Confirma",
      "Capnografía"
    ]
  ],
  "criteria": [
    "Predictores de vía aérea difícil (LEMON) y fisiológicamente difícil (hipotensión, hipoxemia, acidosis)."
  ],
  "orders": [
    {
      "cat": "Inductor (uno)"
    },
    {
      "d": "Ketamina (shock, broncoespasmo)",
      "dose": "1–2 mg/kg IV (0,5–1 si shock)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 2,
        "unit": "mg"
      }
    },
    {
      "d": "Etomidato",
      "dose": "0,3 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.3,
        "hi": 0.3,
        "unit": "mg"
      }
    },
    {
      "d": "Propofol (estable)",
      "dose": "1–2 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 2,
        "unit": "mg"
      },
      "a": "Midazolam 0,1–0,3 mg/kg (inicio lento, hipotensión)."
    },
    {
      "cat": "Bloqueante neuromuscular (uno)"
    },
    {
      "d": "Rocuronio",
      "dose": "1–1,2 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1.2,
        "unit": "mg"
      },
      "n": "Reversión: sugammadex 16 mg/kg."
    },
    {
      "d": "Succinilcolina",
      "dose": "1,5 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 1.5,
        "hi": 1.5,
        "unit": "mg"
      },
      "n": "Contraindicada: hiperpotasemia, quemados o inmovilizados > 24–72 h, enfermedad neuromuscular, rabdomiólisis, hipertermia maligna."
    },
    {
      "cat": "Soporte"
    },
    {
      "d": "Adrenalina en bolo (push-dose)",
      "dose": "10–20 mcg IV c/2–5 min",
      "dil": "1 mg en 100 mL SSN = 10 mcg/mL",
      "a": "Fenilefrina 50–100 mcg IV."
    },
    {
      "d": "Fentanilo (pretratamiento opcional)",
      "dose": "1–3 mcg/kg IV 3 min antes",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 3,
        "unit": "mcg"
      }
    }
  ],
  "goals": [
    "Intubación al primer intento sin desaturación",
    "Capnografía confirmada"
  ],
  "alerts": [
    "Inicia sedoanalgesia continua inmediatamente después",
    "Paciente en shock: reduce dosis del inductor"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "DAS 2018 · SCCM · consenso de manejo de vía aérea en crítico 2023",
    "dif": [
      "Etomidato, ketamina, rocuronio, succinilcolina y sugammadex disponibles; sugammadex con costo alto."
    ]
  }
},
{
  "id": "sedacion",
  "sys": "Paciente crítico",
  "group": "Vía aérea y ventilación",
  "name": "Sedación y analgesia continua",
  "aka": "sedacion continua analgesia fentanilo propofol midazolam dexmedetomidina rass",
  "page": "Fuente: SCCM PADIS 2018 · actualización 2025",
  "sub": "Primero analgesia, luego sedación ligera guiada por escala.",
  "flow": [
    [
      "1",
      "Analgesia primero"
    ],
    [
      "2",
      "Sedación ligera: RASS −2 a 0"
    ],
    [
      "3",
      "Interrupción diaria"
    ],
    [
      "4",
      "CAM-ICU para delirium"
    ]
  ],
  "criteria": [
    "RASS −4 a −5 solo si SDRA grave con bloqueo, hipertensión endocraneana o estado epiléptico."
  ],
  "orders": [
    {
      "d": "Fentanilo",
      "dose": "0,5–2 mcg/kg/h (25–150 mcg/h)",
      "dil": "1000 mcg en 100 mL = 10 mcg/mL",
      "calc": {
        "t": "kgh",
        "lo": 0.5,
        "hi": 2,
        "conc": 10,
        "unit": "mcg"
      },
      "a": "Morfina 2–10 mg/h si estable y función renal normal."
    },
    {
      "d": "Propofol 1 %",
      "dose": "5–50 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 5,
        "hi": 50,
        "conc": 10000
      },
      "dil": "Sin diluir: 10 mg/mL = 10 000 mcg/mL"
    },
    {
      "d": "Dexmedetomidina",
      "dose": "0,2–1,4 mcg/kg/h",
      "dil": "200 mcg en 50 mL = 4 mcg/mL",
      "calc": {
        "t": "kgh",
        "lo": 0.2,
        "hi": 1.4,
        "conc": 4,
        "unit": "mcg"
      }
    },
    {
      "d": "Midazolam (si propofol no es opción)",
      "dose": "0,02–0,1 mg/kg/h",
      "dil": "100 mg en 100 mL = 1 mg/mL",
      "calc": {
        "t": "kgh",
        "lo": 0.02,
        "hi": 0.1,
        "conc": 1,
        "unit": "mg"
      }
    },
    {
      "d": "Ketamina (adyuvante)",
      "dose": "0,1–0,5 mg/kg/h",
      "calc": {
        "t": "kgh",
        "lo": 0.1,
        "hi": 0.5,
        "conc": 1,
        "unit": "mg"
      },
      "dil": "100 mg en 100 mL = 1 mg/mL"
    }
  ],
  "goals": [
    "Dolor controlado (CPOT/BPS)",
    "RASS −2 a 0"
  ],
  "alerts": [
    "Propofol > 4 mg/kg/h por > 48 h: síndrome de infusión; triglicéridos c/48 h",
    "Benzodiazepinas aumentan delirium"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "SCCM PADIS 2018 · actualización 2025",
    "dif": []
  }
},
{
  "id": "vm",
  "sys": "Paciente crítico",
  "group": "Vía aérea y ventilación",
  "name": "Ventilación mecánica: programación inicial (VCV y PCV)",
  "aka": "ventilacion mecanica ventilador programacion volumen control presion control peep sdra",
  "page": "Fuente: ATS/ESICM/SCCM 2017 y 2024 SDRA · ESICM 2023",
  "sub": "Ventilación protectora con volumen corriente por peso predicho.",
  "flow": [
    [
      "1",
      "Peso predicho"
    ],
    [
      "2",
      "VT 6–8 mL/kg"
    ],
    [
      "3",
      "PEEP y FiO₂ para SatO₂ 92–96 %"
    ],
    [
      "4",
      "Gases a los 30 min"
    ],
    [
      "5",
      "Meseta < 30, driving < 15"
    ]
  ],
  "criteria": [
    "Peso predicho (kg): hombre 50 + 0,91 × (talla cm − 152,4); mujer 45,5 + 0,91 × (talla − 152,4).",
    "Referencia rápida: 160 cm → H 57 / M 52 · 170 cm → H 66 / M 61 · 180 cm → H 75 / M 70."
  ],
  "orders": [
    {
      "cat": "Volumen control (VCV)"
    },
    {
      "d": "Volumen corriente",
      "dose": "6–8 mL/kg de peso predicho (6 en SDRA)"
    },
    {
      "d": "Frecuencia respiratoria",
      "dose": "14–18/min (20–30 en SDRA o acidosis metabólica)"
    },
    {
      "d": "PEEP",
      "dose": "5–8 cmH₂O; en SDRA según tabla PEEP/FiO₂"
    },
    {
      "d": "FiO₂",
      "dose": "Iniciar 100 % y bajar a la mínima para SatO₂ 92–96 %"
    },
    {
      "d": "Flujo e I:E",
      "dose": "Flujo 60 L/min, I:E 1:2"
    },
    {
      "cat": "Presión control (PCV)"
    },
    {
      "d": "Presión inspiratoria",
      "dose": "Ajustar para lograr el VT objetivo (usualmente 12–20 cmH₂O sobre PEEP)",
      "n": "Tiempo inspiratorio 0,8–1 s."
    },
    {
      "cat": "Situaciones especiales"
    },
    {
      "d": "Asma o EPOC",
      "dose": "FR 8–12, VT 6–8 mL/kg, I:E 1:3–1:5, flujo 80–100 L/min",
      "n": "Vigila auto-PEEP e hipotensión."
    }
  ],
  "goals": [
    "Presión meseta < 30 cmH₂O",
    "Driving pressure < 15",
    "pH > 7,25"
  ],
  "alerts": [
    "SDRA con PaO₂/FiO₂ < 150: prono ≥ 16 h/día"
  ],
  "rel": [
    "c-pbw",
    "r-gases"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "ATS/ESICM/SCCM 2017 y 2024 SDRA · ESICM 2023",
    "dif": []
  }
},
{
  "id": "pcr-fv",
  "sys": "Paciente crítico",
  "group": "Paro cardiorrespiratorio",
  "name": "PCR: ritmo desfibrilable (FV / TV sin pulso)",
  "aka": "paro cardiaco fibrilacion ventricular tv sin pulso desfibrilacion rcp",
  "page": "Fuente: AHA 2025 RCP y SVCA · ERC 2025",
  "sub": "Desfibrila lo antes posible y minimiza las pausas.",
  "flow": [
    [
      "Descarga",
      "→ RCP 2 min"
    ],
    [
      "2.ª descarga",
      "→ adrenalina"
    ],
    [
      "3.ª descarga",
      "→ amiodarona 300"
    ],
    [
      "Sigue",
      "Adrenalina c/3–5 min, amiodarona 150"
    ]
  ],
  "criteria": [
    "RCP: 100–120/min, 5–6 cm, relleno completo; 30:2 sin vía aérea avanzada; con vía avanzada, 1 ventilación c/6 s.",
    "Capnografía: ETCO₂ < 10 mmHg tras 20 min sugiere mal pronóstico; un ascenso brusco sugiere RCE."
  ],
  "orders": [
    {
      "d": "Desfibrilación",
      "dose": "Bifásico 120–200 J (según fabricante) c/2 min",
      "n": "FV refractaria: considerar cambio de vector (anteroposterior)."
    },
    {
      "d": "Adrenalina",
      "dose": "1 mg IV/IO c/3–5 min tras la 2.ª descarga"
    },
    {
      "d": "Amiodarona",
      "dose": "300 mg IV/IO en bolo; 2.ª dosis 150 mg",
      "a": "Lidocaína 1–1,5 mg/kg y luego 0,5–0,75 mg/kg (máx 3 mg/kg)."
    },
    {
      "d": "Sulfato de magnesio si torsade de pointes",
      "dose": "2 g IV en bolo"
    }
  ],
  "goals": [
    "RCE",
    "Fracción de compresiones > 80 %"
  ],
  "alerts": [
    "Busca 5 H y 5 T"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "En Colombia se sigue el SVCA de la AHA."
    },
    "intl": "AHA 2025 RCP y SVCA · ERC 2025",
    "dif": []
  }
},
{
  "id": "pcr-aesp",
  "sys": "Paciente crítico",
  "group": "Paro cardiorrespiratorio",
  "name": "PCR: ritmo no desfibrilable (AESP / asistolia) y 5 H – 5 T",
  "aka": "paro cardiaco asistolia aesp actividad electrica sin pulso 5h 5t",
  "page": "Fuente: AHA 2025 RCP y SVCA · ERC 2025",
  "sub": "Adrenalina lo antes posible y tratamiento de la causa reversible.",
  "flow": [
    [
      "1",
      "RCP + adrenalina ya"
    ],
    [
      "2",
      "Revisa ritmo c/2 min"
    ],
    [
      "3",
      "5 H y 5 T con POCUS"
    ],
    [
      "4",
      "Trata la causa"
    ]
  ],
  "criteria": [
    "5 H: hipovolemia, hipoxia, hidrogeniones (acidosis), hipo/hiperpotasemia, hipotermia.",
    "5 T: neumotórax a tensión, taponamiento, tóxicos, trombosis pulmonar, trombosis coronaria."
  ],
  "orders": [
    {
      "d": "Adrenalina",
      "dose": "1 mg IV/IO lo antes posible y c/3–5 min"
    },
    {
      "d": "Hiperpotasemia",
      "dose": "Gluconato de calcio 10 % 30 mL IV + bicarbonato 50 mEq IV"
    },
    {
      "d": "TEP sospechado",
      "dose": "Alteplasa 50 mg IV en bolo; continuar RCP 60–90 min"
    },
    {
      "d": "Neumotórax a tensión",
      "dose": "Descompresión con aguja 5.º espacio intercostal línea axilar media, luego tubo"
    },
    {
      "d": "Taponamiento",
      "dose": "Pericardiocentesis guiada por eco"
    },
    {
      "d": "Hipovolemia o sangrado",
      "dose": "Cristaloide / hemoderivados en bolo"
    },
    {
      "d": "Tóxicos",
      "n": "Bicarbonato (tricíclicos), emulsión lipídica (anestésicos locales), naloxona."
    }
  ],
  "goals": [
    "RCE",
    "Causa identificada"
  ],
  "alerts": [
    "No interrumpas compresiones > 10 s para el POCUS"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "En Colombia se sigue el SVCA de la AHA."
    },
    "intl": "AHA 2025 RCP y SVCA · ERC 2025",
    "dif": []
  }
},
{
  "id": "post-pcr",
  "sys": "Paciente crítico",
  "group": "Paro cardiorrespiratorio",
  "name": "Cuidados posparo",
  "aka": "post paro cuidados postparo rce control de temperatura",
  "page": "Fuente: AHA 2025 RCP y SVCA · ERC 2025",
  "sub": "Tras el retorno de circulación espontánea: oxigenación, PA, coronariografía y control de temperatura.",
  "flow": [
    [
      "1",
      "Vía aérea y ventilación"
    ],
    [
      "2",
      "PAM ≥ 65"
    ],
    [
      "3",
      "ECG: ¿IAMCEST? → hemodinamia"
    ],
    [
      "4",
      "Control de temperatura"
    ],
    [
      "≥ 72 h",
      "Pronóstico neurológico"
    ]
  ],
  "criteria": [
    "TAC de cráneo si causa no clara o paciente en coma."
  ],
  "orders": [
    {
      "d": "SatO₂ 92–98 % y PaCO₂ 35–45 mmHg"
    },
    {
      "d": "Noradrenalina para PAM ≥ 65",
      "dose": "0,05–1 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 1,
        "conc": 16
      }
    },
    {
      "d": "Coronariografía urgente si IAMCEST o shock cardiogénico"
    },
    {
      "d": "Control de temperatura",
      "dose": "Evitar fiebre (≤ 37,5 °C) al menos 72 h en pacientes en coma"
    },
    {
      "d": "Glucemia 140–180 mg/dL"
    },
    {
      "d": "EEG si coma o sospecha de convulsiones"
    },
    {
      "d": "Sedación y analgesia (ver ficha)"
    }
  ],
  "goals": [
    "PAM ≥ 65",
    "Normoxemia y normocapnia",
    "Sin fiebre"
  ],
  "alerts": [
    "No pronostiques antes de 72 h"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "En Colombia se sigue el SVCA de la AHA."
    },
    "intl": "AHA 2025 RCP y SVCA · ERC 2025",
    "dif": []
  }
},
{
  "id": "vasoactivos",
  "sys": "Paciente crítico",
  "group": "Guías rápidas",
  "name": "Guía rápida: fármacos vasoactivos",
  "aka": "vasoactivos vasopresores inotropicos noradrenalina adrenalina dobutamina milrinona diluciones",
  "page": "Fuente: SSC 2021 · ESC 2021 IC",
  "sub": "Dosis y diluciones estándar con velocidad calculada por peso.",
  "flow": [
    [
      "Vasopresor",
      "Noradrenalina 1.ª línea"
    ],
    [
      "2.º vasopresor",
      "Vasopresina o adrenalina"
    ],
    [
      "Inotrópico",
      "Dobutamina, milrinona, levosimendán"
    ]
  ],
  "criteria": [
    "Si tu servicio usa otra dilución, ajusta: mL/h = dosis × peso × 60 / concentración."
  ],
  "orders": [
    {
      "d": "Noradrenalina",
      "dose": "0,05–1 mcg/kg/min",
      "dil": "4 mg en 250 mL = 16 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 1,
        "conc": 16
      }
    },
    {
      "d": "Adrenalina",
      "dose": "0,05–0,5 mcg/kg/min",
      "dil": "4 mg en 250 mL = 16 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.5,
        "conc": 16
      }
    },
    {
      "d": "Vasopresina",
      "dose": "0,03 U/min",
      "dil": "20 U en 100 mL = 0,2 U/mL",
      "calc": {
        "t": "min",
        "lo": 0.03,
        "hi": 0.03,
        "conc": 0.2,
        "unit": "U"
      }
    },
    {
      "d": "Fenilefrina",
      "dose": "20–200 mcg/min",
      "dil": "10 mg en 250 mL = 40 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 20,
        "hi": 200,
        "conc": 40
      }
    },
    {
      "d": "Dopamina",
      "dose": "5–20 mcg/kg/min",
      "dil": "400 mg en 250 mL = 1600 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 5,
        "hi": 20,
        "conc": 1600
      }
    },
    {
      "d": "Dobutamina",
      "dose": "2,5–20 mcg/kg/min",
      "dil": "250 mg en 250 mL = 1000 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 2.5,
        "hi": 20,
        "conc": 1000
      }
    },
    {
      "d": "Milrinona",
      "dose": "0,375–0,75 mcg/kg/min (sin bolo)",
      "dil": "20 mg en 100 mL = 200 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.375,
        "hi": 0.75,
        "conc": 200
      }
    },
    {
      "d": "Levosimendán",
      "dose": "0,05–0,2 mcg/kg/min por 24 h (sin bolo)",
      "dil": "12,5 mg en 500 mL DAD5 % = 25 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.2,
        "conc": 25
      }
    },
    {
      "d": "Nitroglicerina",
      "dose": "5–200 mcg/min",
      "dil": "50 mg en 250 mL = 200 mcg/mL",
      "calc": {
        "t": "min",
        "lo": 5,
        "hi": 200,
        "conc": 200
      }
    },
    {
      "d": "Nitroprusiato",
      "dose": "0,3–5 mcg/kg/min",
      "dil": "50 mg en 250 mL DAD5 % = 200 mcg/mL",
      "calc": {
        "t": "kgmin",
        "lo": 0.3,
        "hi": 5,
        "conc": 200
      }
    }
  ],
  "goals": [
    "Usa la dosis mínima eficaz"
  ],
  "alerts": [
    "Doble verificación de dilución y bomba"
  ],
  "rel": [
    "c-infusion"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "SSC 2021 · ESC 2021 IC",
    "dif": [
      "Vasopresina, milrinona y levosimendán con disponibilidad variable fuera de UCI de alto nivel."
    ]
  }
},
{
  "id": "sedo-guia",
  "sys": "Paciente crítico",
  "group": "Guías rápidas",
  "name": "Guía rápida: sedoanalgesia y bloqueo neuromuscular",
  "aka": "guia rapida sedoanalgesia bloqueo neuromuscular dosis bolo rocuronio cisatracurio sugammadex",
  "page": "Fuente: SCCM PADIS · ASA",
  "sub": "Dosis en bolo para procedimientos, intubación y reversión.",
  "flow": [
    [
      "Analgesia",
      "Fentanilo, morfina, ketamina"
    ],
    [
      "Sedación",
      "Propofol, midazolam, etomidato"
    ],
    [
      "Bloqueo",
      "Rocuronio, succinilcolina, cisatracurio"
    ],
    [
      "Reversión",
      "Sugammadex, neostigmina, naloxona, flumazenil"
    ]
  ],
  "criteria": [
    "Reduce dosis en ancianos, shock e insuficiencia hepática."
  ],
  "orders": [
    {
      "d": "Fentanilo analgesia",
      "dose": "0,5–1 mcg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "mcg"
      }
    },
    {
      "d": "Morfina",
      "dose": "0,05–0,1 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.05,
        "hi": 0.1,
        "unit": "mg"
      }
    },
    {
      "d": "Ketamina analgesia",
      "dose": "0,1–0,3 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.3,
        "unit": "mg"
      }
    },
    {
      "d": "Ketamina sedación para procedimiento",
      "dose": "1–1,5 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1.5,
        "unit": "mg"
      }
    },
    {
      "d": "Propofol sedación para procedimiento",
      "dose": "0,5–1 mg/kg IV y 0,25–0,5 mg/kg c/3–5 min",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1,
        "unit": "mg"
      }
    },
    {
      "d": "Midazolam",
      "dose": "0,02–0,05 mg/kg IV (sedación) · 0,1–0,3 mg/kg (inducción)",
      "calc": {
        "t": "kg",
        "lo": 0.02,
        "hi": 0.05,
        "unit": "mg"
      }
    },
    {
      "d": "Cisatracurio",
      "dose": "0,15–0,2 mg/kg bolo, luego 1–3 mcg/kg/min",
      "calc": {
        "t": "kg",
        "lo": 0.15,
        "hi": 0.2,
        "unit": "mg"
      },
      "n": "Elección en falla renal o hepática."
    },
    {
      "d": "Vecuronio",
      "dose": "0,1 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.1,
        "unit": "mg"
      }
    },
    {
      "d": "Sugammadex",
      "dose": "2 mg/kg (bloqueo superficial) · 4 mg/kg (profundo) · 16 mg/kg (rescate inmediato)",
      "calc": {
        "t": "kg",
        "lo": 16,
        "hi": 16,
        "unit": "mg",
        "label": "rescate"
      }
    },
    {
      "d": "Neostigmina + atropina",
      "dose": "Neostigmina 0,04–0,07 mg/kg (máx 5 mg) + atropina 0,01–0,02 mg/kg"
    }
  ],
  "goals": [
    "Titular al efecto"
  ],
  "alerts": [
    "Ten naloxona y flumazenil disponibles"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "SCCM PADIS · ASA",
    "dif": []
  }
}
];
