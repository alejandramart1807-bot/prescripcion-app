// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "colico-renal",
  "sys": "Urología (Uroclin)",
  "group": "Urología",
  "name": "Cólico renal (nefrítico)",
  "aka": "colico renal nefritico litiasis calculo urolitiasis",
  "page": "Fuente: EAU 2024 urolitiasis · AUA",
  "sub": "Dolor lumbar intenso irradiado a ingle, con hematuria.",
  "flow": [
    [
      "1",
      "AINE IV/IM"
    ],
    [
      "2",
      "Rescate con opioide"
    ],
    [
      "Distal 5–10 mm",
      "Tamsulosina"
    ],
    [
      "Infección + obstrucción",
      "Drenaje urgente"
    ]
  ],
  "criteria": [
    "Alarma: fiebre, LRA, monorreno, dolor refractario, embarazo.",
    "Descarta aneurisma de aorta en > 60 años."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ketorolaco",
      "dose": "30 mg IV/IM (15 mg si > 65 años o ERC leve)",
      "a": "Diclofenaco 75 mg IM; dipirona 2 g IV."
    },
    {
      "d": "Morfina (rescate)",
      "dose": "0,1 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.1,
        "hi": 0.1,
        "unit": "mg",
        "max": 10
      }
    },
    {
      "d": "Antiemético si vómito",
      "dose": "Metoclopramida 10 mg IV"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Ibuprofeno o naproxeno",
      "dose": "Ibuprofeno 400–600 mg c/8 h o naproxeno 500 mg c/12 h por 5–7 días"
    },
    {
      "d": "Tamsulosina (cálculo distal 5–10 mm)",
      "dose": "0,4 mg VO c/24 h por hasta 4 semanas"
    },
    {
      "d": "Colar la orina y control con urología"
    }
  ],
  "goals": [
    "Dolor controlado",
    "Expulsión del cálculo"
  ],
  "alerts": [
    "No fuerces líquidos IV para 'empujar' el cálculo"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "EAU 2024 urolitiasis · AUA",
    "dif": []
  }
},
{
  "id": "cistitis",
  "sys": "Urología (Uroclin)",
  "group": "Urología",
  "name": "Cistitis (IVU baja no complicada)",
  "aka": "cistitis ivu infeccion urinaria baja disuria nitrofurantoina fosfomicina",
  "page": "Fuente: IDSA 2011 · EAU 2024",
  "sub": "Disuria, polaquiuria, urgencia sin fiebre ni dolor lumbar, en mujer no embarazada.",
  "flow": [
    [
      "1",
      "Nitrofurantoína o fosfomicina"
    ],
    [
      "Embarazo, hombre, recurrente",
      "Urocultivo"
    ]
  ],
  "criteria": [
    "Colombia: resistencia de E. coli a TMP-SMX y ciprofloxacino > 20 %: no son de primera línea."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Nitrofurantoína",
      "dose": "100 mg VO c/12 h por 5 días (monohidrato/macrocristales) o 50–100 mg c/6 h (macrocristales)",
      "n": "No si TFG < 30."
    },
    {
      "d": "o Fosfomicina trometamol",
      "dose": "3 g VO dosis única"
    },
    {
      "d": "Alternativa",
      "dose": "Cefalexina 500 mg c/12 h por 5–7 días"
    },
    {
      "d": "Fenazopiridina para disuria intensa",
      "dose": "200 mg VO c/8 h por 2 días"
    }
  ],
  "goals": [
    "Resolución en 48–72 h"
  ],
  "alerts": [
    "Fiebre o dolor lumbar: pielonefritis"
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
    "intl": "IDSA 2011 · EAU 2024",
    "dif": [
      "Alta resistencia de E. coli a TMP-SMX y quinolonas en Colombia."
    ]
  }
},
{
  "id": "pielo-amb",
  "sys": "Urología (Uroclin)",
  "group": "Urología",
  "name": "Pielonefritis (ambulatoria y hospitalaria)",
  "aka": "pielonefritis ivu alta fiebre dolor lumbar",
  "page": "Fuente: IDSA 2011 · EAU 2024",
  "sub": "Fiebre, dolor lumbar, puño-percusión +, con o sin síntomas bajos. Urosepsis: ficha de paciente crítico.",
  "flow": [
    [
      "Tolera VO, estable",
      "Dosis parenteral inicial + oral 7–14 días"
    ],
    [
      "No tolera, embarazo, riesgo",
      "Hospitalizar"
    ],
    [
      "Obstrucción",
      "Drenaje"
    ]
  ],
  "criteria": [
    "Urocultivo siempre.",
    "Riesgo de BLEE: antibiótico u hospitalización reciente, sonda."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ceftriaxona",
      "dose": "1 g IM/IV dosis inicial",
      "a": "Amikacina 15 mg/kg IM/IV dosis inicial."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Según urocultivo; empírico mientras llega",
      "dose": "Cefuroxima 500 mg VO c/12 h o amoxicilina-clavulanato 875/125 mg c/12 h por 10–14 días",
      "a": "Ciprofloxacino 500 mg c/12 h por 7 días solo si el urocultivo es sensible."
    },
    {
      "cat": "En urgencias"
    },
    {
      "d": "Hospitalaria",
      "dose": "Ceftriaxona 1–2 g IV c/24 h",
      "a": "Ertapenem 1 g IV c/24 h si riesgo de BLEE."
    }
  ],
  "goals": [
    "Afebril en 48–72 h"
  ],
  "alerts": [
    "Sin mejoría a 72 h: imagen (absceso, obstrucción)"
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
    "intl": "IDSA 2011 · EAU 2024",
    "dif": [
      "Alta resistencia a quinolonas: empírico con betalactámico y ajuste por cultivo."
    ]
  }
},
{
  "id": "retencion",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Retención urinaria aguda",
  "aka": "retencion urinaria aguda globo vesical sonda foley coude cistostomia twoc",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Imposibilidad de orinar con globo vesical doloroso; en hombres casi siempre HPB, fármacos o estreñimiento.",
  "flow": [
    [
      "1",
      "Sonda uretral"
    ],
    [
      "No pasa",
      "Coudé; no forzar → cistostomía suprapúbica"
    ],
    [
      "2",
      "Alfabloqueador desde el inicio"
    ],
    [
      "2–3 días",
      "Retiro de prueba (TWOC)"
    ]
  ],
  "criteria": [
    "Desencadenantes: anticolinérgicos, antihistamínicos, opioides, descongestionantes, estreñimiento, anestesia, ITU, coágulos.",
    "Diuresis posobstructiva: > 200 mL/h por 2 h o > 3 L/24 h."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Sonda Foley",
      "dose": "14–16 Fr con lubricante anestésico (lidocaína gel 2 %); drenaje completo",
      "a": "Coudé 16–18 Fr; si falla, cistostomía suprapúbica por urología."
    },
    {
      "d": "Tamsulosina",
      "dose": "0,4 mg VO c/24 h desde el ingreso",
      "a": "Alfuzosina 10 mg/día o silodosina 8 mg/día."
    },
    {
      "d": "Laboratorios",
      "n": "Creatinina, electrolitos, uroanálisis y urocultivo; ecografía si LRA o sospecha de obstrucción alta."
    },
    {
      "d": "Diuresis posobstructiva",
      "dose": "Control horario; reponer ~50 % del volumen urinario con SSN 0,45 % si hay hipovolemia"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Sonda a drenaje libre + tamsulosina 2–3 días y retiro de prueba"
    },
    {
      "d": "Suspender o ajustar fármacos desencadenantes; laxante si estreñimiento"
    }
  ],
  "goals": [
    "Vejiga descomprimida",
    "Micción espontánea tras el retiro"
  ],
  "alerts": [
    "Falla del retiro: sonda y valoración para cirugía prostática",
    "No inflar el balón hasta ver orina"
  ],
  "rel": [
    "hpb"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "hpb",
  "sys": "Urología (Uroclin)",
  "group": "Próstata",
  "name": "Hiperplasia prostática benigna (STUI)",
  "aka": "hpb hiperplasia prostatica benigna stui ipss tamsulosina dutasterida finasterida tadalafil prostata",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Síntomas del tracto urinario inferior en hombre: gradúa con IPSS y define volumen prostático.",
  "flow": [
    [
      "Leve (IPSS ≤ 7)",
      "Espera vigilada y medidas"
    ],
    [
      "Moderado-grave",
      "Alfabloqueador"
    ],
    [
      "Próstata > 30–40 mL o PSA > 1,5",
      "+ inhibidor de 5α-reductasa"
    ],
    [
      "Complicaciones",
      "Cirugía (RTU, enucleación)"
    ]
  ],
  "criteria": [
    "Estudio: tacto rectal, uroanálisis, PSA (si cambia la conducta), creatinina si sospecha de daño renal, residuo posmiccional, ecografía.",
    "Cirugía si: RUA recurrente, IVU recurrente, litiasis vesical, hematuria recurrente, LRA por obstrucción o falla del tratamiento médico."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Medidas",
      "n": "Reducir líquidos en la noche, cafeína y alcohol; micción doble; revisar diuréticos y anticolinérgicos."
    },
    {
      "d": "Tamsulosina",
      "dose": "0,4 mg VO c/24 h en la noche",
      "a": "Alfuzosina 10 mg/día, silodosina 8 mg/día o doxazosina 1→8 mg/día."
    },
    {
      "d": "Dutasterida (próstata > 30–40 mL)",
      "dose": "0,5 mg VO c/24 h (efecto en 3–6 meses)",
      "n": "Duplica el PSA medido para interpretarlo.",
      "a": "Finasterida 5 mg/día."
    },
    {
      "d": "Tadalafil (si además disfunción eréctil)",
      "dose": "5 mg VO c/24 h"
    },
    {
      "d": "Síntomas de almacenamiento persistentes",
      "dose": "Mirabegrón 50 mg/día o solifenacina 5 mg/día",
      "n": "Solo si residuo < 150 mL."
    }
  ],
  "goals": [
    "Mejoría del IPSS ≥ 3 puntos a las 4–12 semanas"
  ],
  "alerts": [
    "Alfabloqueador antes de cirugía de catarata: avisar (síndrome de iris flácido)",
    "Hipotensión ortostática con alfabloqueadores"
  ],
  "rel": [
    "retencion",
    "psa",
    "c-ipss"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "prostatitis",
  "sys": "Urología (Uroclin)",
  "group": "Infecciones",
  "name": "Prostatitis bacteriana aguda",
  "aka": "prostatitis aguda bacteriana fiebre prostata dolorosa absceso prostatico",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Fiebre, síntomas urinarios y dolor perineal con próstata muy dolorosa al tacto (no masajear).",
  "flow": [
    [
      "1",
      "Urocultivo y hemocultivos"
    ],
    [
      "Estable",
      "Oral 2–4 semanas según cultivo"
    ],
    [
      "Sistémico",
      "IV y hospitalizar"
    ],
    [
      "Retención",
      "Cistostomía o sonda fina"
    ]
  ],
  "criteria": [
    "Postbiopsia prostática: alta probabilidad de BLEE y resistencia a quinolonas → carbapenem.",
    "Sin mejoría a 48–72 h: ecografía transrectal o TAC (absceso)."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ceftriaxona",
      "dose": "1–2 g IV c/24 h",
      "a": "Piperacilina-tazobactam 4,5 g c/6 h; ertapenem 1 g/día si riesgo BLEE o postbiopsia."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Según urocultivo",
      "dose": "Ciprofloxacino 500 mg c/12 h o TMP-SMX 160/800 mg c/12 h por 2–4 semanas (si sensible)",
      "n": "Buena penetración prostática; en Colombia la resistencia empírica es alta."
    },
    {
      "d": "Analgesia y ablandador de heces",
      "dose": "Ibuprofeno 400 mg c/8 h + polietilenglicol 17 g/día"
    }
  ],
  "goals": [
    "Afebril 48–72 h"
  ],
  "alerts": [
    "Absceso prostático: drenaje"
  ],
  "rel": [
    "pielo-amb",
    "foco-uri"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "epididimitis",
  "sys": "Urología (Uroclin)",
  "group": "Infecciones",
  "name": "Epididimitis / orquiepididimitis",
  "aka": "epididimitis orquiepididimitis dolor escrotal clamidia gonococo",
  "page": "Fuente: Guía colombiana · CDC 2021 · EAU 2026",
  "sub": "Dolor escrotal de inicio gradual, epidídimo engrosado, Prehn +; descarta torsión.",
  "flow": [
    [
      "< 35 años / riesgo de ITS",
      "Ceftriaxona + doxiciclina"
    ],
    [
      "Coito anal insertivo",
      "Ceftriaxona + levofloxacino"
    ],
    [
      "> 35 años / entéricos / instrumentación",
      "Levofloxacino o según urocultivo"
    ]
  ],
  "criteria": [
    "Doppler si duda con torsión (inicio súbito, reflejo cremastérico ausente)."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Ceftriaxona",
      "dose": "500 mg IM dosis única (1 g si ≥ 150 kg)"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Doxiciclina",
      "dose": "100 mg VO c/12 h × 10 días"
    },
    {
      "d": "Patógenos entéricos",
      "dose": "Levofloxacino 500 mg VO c/24 h × 10 días",
      "a": "Según urocultivo: amoxicilina-clavulanato o TMP-SMX."
    },
    {
      "d": "Suspensorio, hielo y AINE",
      "dose": "Ibuprofeno 400–600 mg c/8 h"
    },
    {
      "d": "Tamizaje de ITS y tratamiento de la pareja"
    }
  ],
  "goals": [
    "Mejoría en 72 h"
  ],
  "alerts": [
    "Sin mejoría: absceso, tumor o TB genitourinaria"
  ],
  "rel": [
    "torsion"
  ],
  "g": {
    "co": {
      "n": "GPC Infecciones de transmisión sexual, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CDC 2021."
    },
    "intl": "CDC 2021 · EAU 2026",
    "dif": []
  }
},
{
  "id": "torsion",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Torsión testicular",
  "aka": "torsion testicular escroto agudo dolor testicular subito",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Dolor escrotal súbito intenso, testículo alto y horizontal, reflejo cremastérico ausente. Tiempo = testículo.",
  "flow": [
    [
      "Sospecha alta (TWIST ≥ 5)",
      "Cirugía sin esperar eco"
    ],
    [
      "Duda",
      "Doppler inmediato"
    ],
    [
      "< 6 h",
      "Salvamento > 90 %"
    ]
  ],
  "criteria": [
    "TWIST: edema testicular 2, testículo duro 2, reflejo cremastérico ausente 1, náuseas/vómito 1, testículo alto 1."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Nada vía oral y valoración urológica inmediata"
    },
    {
      "d": "Analgesia",
      "dose": "Morfina 0,05–0,1 mg/kg IV",
      "calc": {
        "t": "kg",
        "lo": 0.05,
        "hi": 0.1,
        "unit": "mg",
        "max": 10
      }
    },
    {
      "d": "Detorsión manual (puente a cirugía)",
      "n": "Rotación hacia lateral ('abrir el libro'); no reemplaza la exploración quirúrgica con orquidopexia bilateral."
    }
  ],
  "goals": [
    "Exploración quirúrgica en < 6 h"
  ],
  "alerts": [
    "No retrases la cirugía por la ecografía"
  ],
  "rel": [
    "epididimitis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "hematuria",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Hematuria macroscópica y retención por coágulos",
  "aka": "hematuria macroscopica coagulos sonda tres vias irrigacion vesical",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Toda hematuria macroscópica en adulto requiere estudio de cáncer urotelial.",
  "flow": [
    [
      "Coágulos o retención",
      "Sonda 3 vías + lavado"
    ],
    [
      "Irrigación continua",
      "Hasta orina rosada clara"
    ],
    [
      "Estudio",
      "UroTAC + cistoscopia"
    ]
  ],
  "criteria": [
    "Revisa antitrombóticos, coagulación y función renal.",
    "Factores de riesgo: > 40 años, tabaquismo, exposición ocupacional, ciclofosfamida, radioterapia pélvica."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Sonda uretral de 3 vías",
      "dose": "20–24 Fr",
      "n": "Lavado manual con jeringa de 50 mL de SSN hasta extraer coágulos."
    },
    {
      "d": "Irrigación vesical continua",
      "dose": "SSN 0,9 % titulada a orina rosada clara",
      "n": "Balance: volumen irrigado − salida = diuresis real."
    },
    {
      "d": "Laboratorios",
      "n": "Hemograma, Cr, TP/TTPa, uroanálisis, urocultivo."
    },
    {
      "d": "Antitrombóticos",
      "n": "Suspender o ajustar según indicación y riesgo trombótico (ver ficha de reversión si sangrado grave)."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "UroTAC y cistoscopia programadas"
    }
  ],
  "goals": [
    "Orina clara sin coágulos"
  ],
  "alerts": [
    "Obstrucción de la sonda: dolor suprapúbico y salida baja → lavado"
  ],
  "rel": [
    "post-rtu"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "obstr-inf",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Obstrucción urinaria infectada (pionefrosis / cálculo con fiebre)",
  "aka": "pionefrosis obstruccion infectada calculo con fiebre urosepsis obstructiva doble j nefrostomia drenaje",
  "page": "Fuente: EAU 2026 infecciones urológicas · IDSA 2025 cUTI",
  "sub": "Cálculo o estenosis + fiebre o sepsis: drenaje y antibiótico en paralelo; la litotricia se difiere.",
  "flow": [
    [
      "1",
      "Paquete de sepsis de la primera hora"
    ],
    [
      "2",
      "Drenaje urgente"
    ],
    [
      "Pus, cálculo impactado, inestable",
      "Nefrostomía percutánea"
    ],
    [
      "Coagulopatía, anticoagulado",
      "Doble J"
    ]
  ],
  "criteria": [
    "Nunca 'esperar el antibiograma' en el inestable.",
    "Colonización previa por KPC: cobertura dirigida desde el inicio."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Hemocultivos × 2 y urocultivo antes del antibiótico"
    },
    {
      "d": "Antibiótico",
      "dose": "Piperacilina-tazobactam 4,5 g IV c/6 h o meropenem 1 g IV c/8 h (BLEE o shock)",
      "a": "KPC conocida: ceftazidima-avibactam 2,5 g c/8 h (infectología)."
    },
    {
      "d": "Cristaloide 30 mL/kg si hipotensión o lactato ≥ 4",
      "calc": {
        "t": "kg",
        "lo": 30,
        "hi": 30,
        "unit": "mL"
      }
    },
    {
      "d": "Drenaje urgente",
      "n": "Doble J retrógrado o nefrostomía; cultivar la orina del riñón obstruido."
    },
    {
      "d": "Litotricia diferida",
      "n": "Solo tras resolver la sepsis."
    }
  ],
  "goals": [
    "Drenaje en horas",
    "Desescalar a 48–72 h"
  ],
  "alerts": [
    "Sin control del foco el antibiótico fracasa"
  ],
  "rel": [
    "colico-renal",
    "foco-uri",
    "sepsis"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 infecciones urológicas · IDSA 2025 cUTI · IDSA 2024 resistentes",
    "dif": [
      "KPC endémica en Colombia: tipifica la carbapenemasa para elegir el rescate."
    ]
  }
},
{
  "id": "fournier",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Gangrena de Fournier",
  "aka": "fournier fascitis necrotizante perineal escrotal genital",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Fascitis necrotizante genitoperineal: el pronóstico depende del tiempo hasta el desbridamiento.",
  "flow": [
    [
      "Sospecha",
      "Dolor desproporcionado, crepitación, anestesia cutánea, toxicidad"
    ],
    [
      "Antibiótico + reanimación",
      "Inmediatos"
    ],
    [
      "Quirófano",
      "Desbridamiento urgente; revisión 24–48 h"
    ]
  ],
  "criteria": [
    "LRINEC ≥ 6 apoya, pero un puntaje bajo NO descarta."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Vancomicina",
      "dose": "Carga 25–30 mg/kg IV (máx 3 g)",
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
      "d": "+ Piperacilina-tazobactam",
      "dose": "4,5 g IV c/6 h",
      "a": "Meropenem 1 g IV c/8 h."
    },
    {
      "d": "+ Clindamicina",
      "dose": "900 mg IV c/8 h (supresión de toxinas)"
    },
    {
      "d": "Reanimación de sepsis y control glucémico"
    },
    {
      "d": "Cirugía urgente (urología/cirugía general)"
    }
  ],
  "goals": [
    "Desbridamiento < 6 h"
  ],
  "alerts": [
    "El antibiótico es adyuvante, nunca sustituto del bisturí"
  ],
  "rel": [
    "foco-nec",
    "c-lrinec"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "priapismo",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Priapismo isquémico",
  "aka": "priapismo isquemico ereccion prolongada fenilefrina aspiracion cavernosa",
  "page": "Fuente: AUA/SMSNA 2022 priapismo · EAU 2026",
  "sub": "Erección > 4 h rígida y dolorosa: emergencia. Gases cavernosos con sangre oscura, pO₂ < 30, pH < 7,25.",
  "flow": [
    [
      "1",
      "Bloqueo peneano"
    ],
    [
      "2",
      "Aspiración + irrigación"
    ],
    [
      "3",
      "Fenilefrina intracavernosa"
    ],
    [
      "Falla",
      "Shunt quirúrgico"
    ]
  ],
  "criteria": [
    "Causas: drepanocitosis, trazodona, antipsicóticos, cocaína, inyecciones intracavernosas, leucemia."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Bloqueo peneano dorsal",
      "dose": "Lidocaína 1 % sin epinefrina 5–10 mL"
    },
    {
      "d": "Aspiración de cuerpos cavernosos",
      "n": "Aguja 16–18 G; irrigar con SSN."
    },
    {
      "d": "Fenilefrina intracavernosa",
      "dose": "100–200 mcg c/3–5 min, hasta 1 mg en 1 h",
      "dil": "10 mg en 100 mL SSN = 100 mcg/mL (o 500 mcg/mL)",
      "n": "Monitoreo de PA y FC; precaución en cardiopatía."
    },
    {
      "d": "Analgesia"
    }
  ],
  "goals": [
    "Detumescencia"
  ],
  "alerts": [
    "> 48 h: alto riesgo de disfunción eréctil definitiva",
    "No isquémico (alto flujo, indoloro): observación"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "AUA/SMSNA 2022 priapismo · EAU 2026",
    "dif": []
  }
},
{
  "id": "parafimosis",
  "sys": "Urología (Uroclin)",
  "group": "Urgencias urológicas",
  "name": "Parafimosis y fimosis",
  "aka": "parafimosis fimosis prepucio retraido reduccion betametasona",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Parafimosis: prepucio retraído que no vuelve, glande edematoso. Urgencia.",
  "flow": [
    [
      "1",
      "Analgesia/bloqueo"
    ],
    [
      "2",
      "Compresión del edema"
    ],
    [
      "3",
      "Reducción manual"
    ],
    [
      "Falla",
      "Incisión dorsal"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Bloqueo peneano",
      "dose": "Lidocaína 1 % sin epinefrina 5–10 mL"
    },
    {
      "d": "Compresión 5–10 min con gasa o hielo; técnicas osmóticas o punciones"
    },
    {
      "d": "Reducción manual con pulgares sobre el glande"
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Fimosis",
      "dose": "Betametasona 0,05 % crema c/12 h por 4–8 semanas con retracción suave"
    },
    {
      "d": "Circuncisión electiva si recurre"
    }
  ],
  "goals": [
    "Reducción sin necrosis"
  ],
  "alerts": [
    "Glande oscuro o necrótico: urología de inmediato"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "urolitiasis-meta",
  "sys": "Urología (Uroclin)",
  "group": "Litiasis",
  "name": "Urolitiasis: indicaciones de intervención y metafilaxis",
  "aka": "urolitiasis calculo renal metafilaxis citrato de potasio hidroclorotiazida alopurinol leoc ureteroscopia nlp tratamiento expulsivo",
  "page": "Fuente: EAU 2026 urolitiasis · AUA 2019 manejo médico",
  "sub": "Después del cólico: quién necesita procedimiento y cómo evitar el siguiente cálculo.",
  "flow": [
    [
      "Ureteral distal 5–10 mm",
      "Tratamiento expulsivo hasta 4 semanas"
    ],
    [
      "> 10 mm, sin expulsión o complicado",
      "URS o LEOC"
    ],
    [
      "Renal > 20 mm",
      "NLP"
    ],
    [
      "Todos",
      "Metafilaxis general; estudio metabólico si alto riesgo"
    ]
  ],
  "criteria": [
    "Intervenir: dolor refractario, obstrucción + infección (drenar primero), monorreno, LRA, bilateral, sin expulsión en 4–6 semanas.",
    "Alto riesgo: recurrente, joven, monorreno, ácido úrico/cistina/estruvita, ERC, nefrocalcinosis → orina de 24 h."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Tratamiento expulsivo",
      "dose": "Tamsulosina 0,4 mg/día hasta 4 semanas"
    },
    {
      "d": "Metafilaxis general",
      "n": "Líquidos para diuresis > 2–2,5 L/día; sal < 5 g/día; proteína animal 0,8–1 g/kg; calcio normal 1–1,2 g/día (no restringir)."
    },
    {
      "d": "Hipercalciuria",
      "dose": "Hidroclorotiazida 25–50 mg/día",
      "a": "Clortalidona 25 mg o indapamida 2,5 mg."
    },
    {
      "d": "Hipocitraturia",
      "dose": "Citrato de potasio 30–60 mEq/día en 2–3 tomas",
      "n": "Comercial o magistral según disponibilidad."
    },
    {
      "d": "Ácido úrico",
      "dose": "Citrato de potasio para pH urinario 6,5–7 + alopurinol 100–300 mg/día si hiperuricosuria"
    }
  ],
  "goals": [
    "Sin recurrencia",
    "Diuresis > 2,5 L/día"
  ],
  "alerts": [
    "Estruvita: extracción completa (infección persistente)"
  ],
  "rel": [
    "colico-renal",
    "obstr-inf"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 urolitiasis · AUA 2019 manejo médico",
    "dif": []
  }
},
{
  "id": "de",
  "sys": "Urología (Uroclin)",
  "group": "Consulta",
  "name": "Disfunción eréctil",
  "aka": "disfuncion erectil impotencia sildenafil tadalafil ipde5",
  "page": "Fuente: EAU 2026 salud sexual masculina · AUA 2018",
  "sub": "Marcador de riesgo cardiovascular: evalúa factores de riesgo antes de tratar.",
  "flow": [
    [
      "1",
      "Riesgo CV, testosterona matinal si baja libido"
    ],
    [
      "2",
      "Inhibidor de PDE-5"
    ],
    [
      "Falla",
      "Inyección intracavernosa o prótesis (urología)"
    ]
  ],
  "criteria": [
    "Contraindicado con nitratos o riociguat."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Sildenafil",
      "dose": "50 mg VO 1 h antes (rango 25–100 mg)",
      "a": "Tadalafil 10–20 mg a demanda o 5 mg/día."
    },
    {
      "d": "Cambios de estilo de vida y control de factores de riesgo"
    }
  ],
  "goals": [
    "Relaciones satisfactorias"
  ],
  "alerts": [
    "No nitratos en 24 h (sildenafil) o 48 h (tadalafil)"
  ],
  "rel": [
    "hpb"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 salud sexual masculina · AUA 2018",
    "dif": []
  }
},
{
  "id": "vejiga-hiper",
  "sys": "Urología (Uroclin)",
  "group": "Consulta",
  "name": "Vejiga hiperactiva e incontinencia urinaria",
  "aka": "vejiga hiperactiva incontinencia urgencia mirabegron solifenacina oxibutinina esfuerzo kegel",
  "page": "Fuente: AUA/SUFU 2024 · EAU 2026",
  "sub": "Urgencia ± incontinencia, frecuencia y nicturia sin infección ni obstrucción.",
  "flow": [
    [
      "1",
      "Medidas y suelo pélvico"
    ],
    [
      "2",
      "Mirabegrón o antimuscarínico"
    ],
    [
      "Refractaria",
      "Toxina botulínica, neuromodulación"
    ],
    [
      "Esfuerzo",
      "Kegel → cirugía"
    ]
  ],
  "criteria": [
    "Descarta ITU, residuo alto y hematuria; diario miccional de 3 días."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Medidas",
      "n": "Reentrenamiento vesical, ajustar líquidos, evitar cafeína, bajar de peso, ejercicios de suelo pélvico."
    },
    {
      "d": "Mirabegrón",
      "dose": "25–50 mg VO c/24 h",
      "n": "Vigilar PA.",
      "a": "Solifenacina 5–10 mg/día; oxibutinina 5 mg c/8–12 h (evitar en ancianos)."
    },
    {
      "d": "Posmenopáusica",
      "dose": "Estrógeno vaginal 2 veces/semana"
    }
  ],
  "goals": [
    "Menos episodios de urgencia"
  ],
  "alerts": [
    "Antimuscarínicos: carga anticolinérgica y deterioro cognitivo en ancianos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "AUA/SUFU 2024 · EAU 2026",
    "dif": []
  }
},
{
  "id": "profilaxis-uro",
  "sys": "Urología (Uroclin)",
  "group": "Procedimientos y posoperatorio",
  "name": "Profilaxis antibiótica en procedimientos urológicos",
  "aka": "profilaxis antibiotica urologia rtu biopsia prostatica ureteroscopia cistoscopia nlp",
  "page": "Fuente: EAU 2026 infecciones urológicas · AUA 2019 profilaxis",
  "sub": "Urocultivo previo y tratar la bacteriuria antes de procedimientos con sangrado de mucosa.",
  "flow": [
    [
      "Cistoscopia / urodinamia",
      "Sin profilaxis de rutina"
    ],
    [
      "RTU próstata, URS, NLP",
      "Dosis única 30–60 min antes"
    ],
    [
      "Biopsia prostática",
      "Preferir transperineal"
    ]
  ],
  "criteria": [
    "Bacteriuria asintomática: tratar solo antes de procedimientos con sangrado de mucosa."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "RTU de próstata o vejiga, URS, NLP",
      "dose": "Cefazolina 2 g IV (3 g si ≥ 120 kg) dosis única",
      "a": "Cefuroxima 1,5 g IV o según urocultivo; alergia: gentamicina 5 mg/kg IV."
    },
    {
      "d": "Biopsia transrectal",
      "dose": "Fosfomicina trometamol 3 g VO 3 h antes (± otra dosis a las 24–48 h), o dirigida por hisopado rectal",
      "n": "La vía transperineal reduce la sepsis y en muchos casos no requiere profilaxis."
    },
    {
      "d": "Vasectomía, circuncisión",
      "n": "Sin profilaxis de rutina."
    }
  ],
  "goals": [
    "Profilaxis ≤ 24 h"
  ],
  "alerts": [
    "Fiebre tras biopsia: urosepsis con probable BLEE → carbapenem"
  ],
  "rel": [
    "mi-ivu"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 infecciones urológicas · AUA 2019 profilaxis",
    "dif": []
  }
},
{
  "id": "post-rtu",
  "sys": "Urología (Uroclin)",
  "group": "Procedimientos y posoperatorio",
  "name": "Posoperatorio de RTU de próstata / vejiga",
  "aka": "posoperatorio rtu prostata irrigacion continua sindrome post rtu hiponatremia sonda tres vias",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Órdenes estándar después de resección transuretral.",
  "flow": [
    [
      "Irrigación",
      "Continua hasta orina clara"
    ],
    [
      "Sonda",
      "Retiro a las 24–72 h"
    ],
    [
      "Alerta",
      "Confusión o bradicardia → sodio (síndrome post-RTU)"
    ]
  ],
  "criteria": [
    "Síndrome post-RTU (irrigante hipotónico como glicina): hiponatremia dilucional, HTA, bradicardia, confusión, alteraciones visuales. Raro con resección bipolar en SSN."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Irrigación vesical continua con SSN 0,9 %",
      "n": "Titulada a orina rosada clara; balance de irrigación."
    },
    {
      "d": "Sonda 3 vías a tracción suave si sangrado"
    },
    {
      "d": "Analgesia",
      "dose": "Paracetamol 1 g c/6 h ± tramadol 50 mg c/8 h"
    },
    {
      "d": "Espasmo vesical",
      "dose": "Oxibutinina 5 mg VO c/8 h PRN"
    },
    {
      "d": "Ablandador de heces",
      "dose": "Polietilenglicol 17 g/día"
    },
    {
      "d": "Sodio y hemoglobina a las 6–12 h"
    },
    {
      "d": "Síndrome post-RTU con Na < 120 y síntomas",
      "dose": "SSN 3 % 150 mL en 20 min + restricción; furosemida si sobrecarga"
    },
    {
      "d": "Tromboprofilaxis",
      "n": "Mecánica; farmacológica a las 24 h si hemostasia adecuada."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Evitar esfuerzos y relaciones 4 semanas; hematuria leve intermitente esperable"
    }
  ],
  "goals": [
    "Orina clara y micción espontánea tras retiro de sonda"
  ],
  "alerts": [
    "Coágulos que obstruyen: lavado manual"
  ],
  "rel": [
    "hematuria",
    "antitromb-periop"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "sonda-cuidados",
  "sys": "Urología (Uroclin)",
  "group": "Procedimientos y posoperatorio",
  "name": "Sonda vesical, doble J y nefrostomía: cuidados e infección",
  "aka": "sonda vesical cauti infeccion asociada a sonda doble j nefrostomia cuidados sintomas de cateter",
  "page": "Fuente: EAU 2026 · AUA",
  "sub": "Prevenir la infección asociada a sonda y manejar los síntomas del catéter ureteral.",
  "flow": [
    [
      "Sonda",
      "Retirar lo antes posible"
    ],
    [
      "Bacteriuria sin síntomas",
      "No tratar"
    ],
    [
      "Infección asociada",
      "Cambiar sonda → urocultivo → antibiótico 7 días"
    ],
    [
      "Doble J",
      "Fecha de retiro registrada"
    ]
  ],
  "criteria": [
    "Síntomas de catéter doble J: urgencia, frecuencia, dolor lumbar al orinar, hematuria leve."
  ],
  "orders": [
    {
      "d": "Infección asociada a sonda",
      "dose": "Cambiar la sonda y tomar urocultivo de la nueva; antibiótico según gravedad 7 días (10–14 si respuesta lenta)"
    },
    {
      "d": "Síntomas de doble J",
      "dose": "Tamsulosina 0,4 mg/día ± mirabegrón 50 mg/día o solifenacina 5 mg/día"
    },
    {
      "d": "Nefrostomía que no drena",
      "dose": "Lavado suave con 5–10 mL de SSN; si no drena, imagen"
    },
    {
      "d": "Cateterismo intermitente limpio",
      "n": "Preferible a sonda permanente en retención crónica."
    }
  ],
  "goals": [
    "Sin infección ni catéteres olvidados"
  ],
  "alerts": [
    "Doble J olvidado: incrustación y obstrucción; agenda el retiro"
  ],
  "rel": [
    "mi-ivu"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para estos temas; se siguen EAU y AUA, con las recomendaciones de la Sociedad Colombiana de Urología."
    },
    "intl": "EAU 2026 · AUA",
    "dif": []
  }
},
{
  "id": "psa",
  "sys": "Urología (Uroclin)",
  "group": "Próstata",
  "name": "PSA, tamizaje y cáncer de próstata (inicio de hormonoterapia)",
  "aka": "psa antigeno prostatico tamizaje cancer de prostata biopsia resonancia pirads hormonoterapia bicalutamida leuprolide",
  "page": "Fuente: Guía colombiana · EAU 2026 cáncer de próstata · AUA 2023",
  "sub": "Tamizaje, interpretación del PSA y órdenes básicas al iniciar deprivación androgénica.",
  "flow": [
    [
      "Tamizaje",
      "PSA + tacto rectal según ruta nacional"
    ],
    [
      "PSA elevado",
      "Repetir; descartar ITU/prostatitis"
    ],
    [
      "Persiste",
      "RM multiparamétrica → biopsia si PI-RADS ≥ 3"
    ],
    [
      "Hormonoterapia",
      "Antiandrógeno para evitar el flare"
    ]
  ],
  "criteria": [
    "Falsos positivos: ITU, prostatitis, eyaculación o ciclismo 48 h, sondaje, biopsia reciente.",
    "Inhibidores de 5α-reductasa bajan el PSA ~50 %: duplícalo."
  ],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Tamizaje",
      "n": "Hombres 50–75 años: PSA + tacto rectal c/5 años (decisión informada)."
    },
    {
      "d": "Inicio de agonista LHRH",
      "dose": "Leuprorelina 22,5 mg IM/SC c/3 meses o goserelina 10,8 mg SC c/3 meses",
      "n": "+ bicalutamida 50 mg/día desde 1–2 semanas antes y hasta 2–4 semanas después (evita el flare)."
    },
    {
      "d": "Protección ósea y metabólica",
      "dose": "Calcio + vitamina D; densitometría; glucosa y lípidos"
    }
  ],
  "goals": [
    "Diagnóstico oportuno y seguro"
  ],
  "alerts": [
    "Metástasis vertebrales con dolor o déficit: ficha de compresión medular"
  ],
  "rel": [
    "hpb"
  ],
  "g": {
    "co": {
      "n": "Resolución 3280 de 2018 (RIAS) y GPC cáncer de próstata, MinSalud e INC",
      "y": "2013/2018",
      "st": "ok",
      "txt": "Definen el tamizaje en la ruta de promoción y mantenimiento de la salud."
    },
    "intl": "EAU 2026 cáncer de próstata · AUA 2023",
    "dif": []
  }
}
];
