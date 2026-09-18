// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "botropico",
  "sys": "Causas externas",
  "group": "Accidente ofídico",
  "name": "Accidente ofídico botrópico (mapaná, talla X, cuatro narices)",
  "aka": "ofidico botropico bothrops mapana talla equis serpiente mordedura antiveneno antiofidico",
  "page": "Fuente: Guía colombiana · OMS 2016 manejo de mordeduras de serpiente",
  "sub": "Edema, dolor, equimosis y sangrado local; coagulopatía (sangre incoagulable) y riesgo de necrosis, sangrado sistémico y LRA.",
  "flow": [
    [
      "1",
      "Clasifica: leve, moderado, grave"
    ],
    [
      "2",
      "Antiveneno IV (sin prueba de sensibilidad)"
    ],
    [
      "3",
      "Tiempo de coagulación 6 y 12 h"
    ],
    [
      "4",
      "Dosis adicional si persiste incoagulable"
    ]
  ],
  "criteria": [
    "Leve: edema 1–2 segmentos, sin sangrado sistémico. Moderado: 2–3 segmentos o sangrado sistémico no grave. Grave: > 3 segmentos, necrosis, shock, sangrado grave o LRA.",
    "Tiempo de coagulación en tubo seco a los 20 min, TP, TTPa, fibrinógeno, plaquetas, creatinina, CK, parcial de orina."
  ],
  "orders": [
    {
      "d": "Antiveneno polivalente",
      "dose": "Orientativo: leve 2 · moderado 4 · grave 6 viales IV, diluidos en 250–500 mL SSN en 30–60 min",
      "n": "Inicia lento los primeros 10 min con adrenalina lista. Confirma la dosis con la guía nacional y el inserto.",
      "a": "Si falta antiveneno: remisión inmediata y comunicación con el INS o la red de antivenenos."
    },
    {
      "d": "Dosis adicional",
      "dose": "2 viales si la sangre sigue incoagulable a las 12–24 h"
    },
    {
      "d": "Reacción al antiveneno",
      "dose": "Suspender, adrenalina 0,5 mg IM, reiniciar más lento al resolver"
    },
    {
      "d": "Analgesia",
      "dose": "Dipirona 1–2 g IV c/6–8 h ± opioide",
      "n": "Evita AINE."
    },
    {
      "d": "Profilaxis antitetánica"
    },
    {
      "d": "Antibiótico solo si infección (absceso, celulitis)",
      "dose": "Ampicilina-sulbactam 3 g IV c/6 h",
      "a": "Clindamicina 600 mg c/8 h + ciprofloxacino 400 mg c/12 h."
    },
    {
      "d": "Hidratación para diuresis ≥ 1 mL/kg/h"
    }
  ],
  "goals": [
    "Sangre coagulable a las 12–24 h",
    "Sin progresión del edema"
  ],
  "alerts": [
    "No torniquete, incisión, succión ni hielo",
    "Fasciotomía solo con presión compartimental confirmada"
  ],
  "g": {
    "co": {
      "n": "Guía y lineamientos para el manejo del accidente ofídico, MinSalud e INS",
      "y": "",
      "st": "ok",
      "txt": "Referencia nacional: define la gravedad y los viales de antiveneno. Las dosis dependen del antiveneno disponible (INS o Probiol): verifica siempre el inserto."
    },
    "intl": "OMS 2016 manejo de mordeduras de serpiente",
    "dif": [
      "Colombia tiene antiveneno del INS y de Probiol con capacidad neutralizante distinta: la cantidad de viales cambia."
    ]
  }
},
{
  "id": "crotalico",
  "sys": "Causas externas",
  "group": "Accidente ofídico",
  "name": "Accidente ofídico crotálico (cascabel)",
  "aka": "crotalico cascabel crotalus serpiente neurotoxico miotoxico",
  "page": "Fuente: Guía colombiana · OMS 2016",
  "sub": "Poco edema local; neurotoxicidad (ptosis, facies miasténica, visión borrosa), miotoxicidad (mialgias, orina oscura) y riesgo de LRA y falla respiratoria.",
  "flow": [
    [
      "1",
      "Clasifica gravedad"
    ],
    [
      "2",
      "Antiveneno con cobertura crotálica"
    ],
    [
      "3",
      "Rabdomiólisis: líquidos"
    ],
    [
      "4",
      "Vigila ventilación"
    ]
  ],
  "criteria": [
    "CK, creatinina, parcial de orina (mioglobinuria), tiempo de coagulación."
  ],
  "orders": [
    {
      "d": "Antiveneno polivalente (con fracción anticrotálica)",
      "dose": "Orientativo: leve 5 · moderado 10 · grave 15 viales IV en 250–500 mL SSN en 30–60 min",
      "n": "Dosis mayores que en Bothrops. Confirma con la guía nacional y el inserto."
    },
    {
      "d": "Líquidos para diuresis 1–2 mL/kg/h",
      "dose": "SSN 0,9 % o Lactato de Ringer",
      "calc": {
        "t": "kgh",
        "lo": 1,
        "hi": 2,
        "conc": 1,
        "unit": "mL"
      }
    },
    {
      "d": "Monitoreo respiratorio",
      "n": "Intubación si hay falla ventilatoria."
    },
    {
      "d": "Profilaxis antitetánica y analgesia sin AINE"
    }
  ],
  "goals": [
    "Diuresis adecuada",
    "CK en descenso",
    "Sin falla respiratoria"
  ],
  "alerts": [
    "La LRA es la principal causa de muerte"
  ],
  "g": {
    "co": {
      "n": "Guía y lineamientos para el manejo del accidente ofídico, MinSalud e INS",
      "y": "",
      "st": "ok",
      "txt": "Referencia nacional: define la gravedad y los viales de antiveneno. Las dosis dependen del antiveneno disponible (INS o Probiol): verifica siempre el inserto."
    },
    "intl": "OMS 2016",
    "dif": []
  }
},
{
  "id": "intox",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Intoxicación: abordaje general",
  "aka": "intoxicacion general toxidrome descontaminacion carbon activado antidoto",
  "page": "Fuente: Guía colombiana · AACT/EAPCCT · Goldfrank",
  "sub": "ABCDE, reconocimiento de toxíndrome, descontaminación y antídoto.",
  "flow": [
    [
      "1",
      "ABCDE + glucometría + ECG"
    ],
    [
      "2",
      "Toxíndrome"
    ],
    [
      "3",
      "Descontamina si aplica"
    ],
    [
      "4",
      "Antídoto / eliminación"
    ]
  ],
  "criteria": [
    "Toxíndromes: colinérgico, anticolinérgico, simpaticomimético, opioide, sedante-hipnótico, serotoninérgico.",
    "Pide nivel de paracetamol en toda intoxicación intencional."
  ],
  "orders": [
    {
      "d": "Carbón activado",
      "dose": "1 g/kg (máx 50 g) VO o SNG, si < 1 h y vía aérea protegida",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "g",
        "max": 50
      },
      "n": "No en cáusticos, hidrocarburos, alcoholes, metales ni litio."
    },
    {
      "d": "ECG",
      "n": "QRS > 100 ms (bloqueo de canales de sodio) o QT largo."
    },
    {
      "d": "Laboratorios",
      "n": "Glucosa, gases, electrolitos, brecha aniónica y osmolar, creatinina, CK, niveles específicos."
    },
    {
      "d": "Valoración por psiquiatría si es intencional"
    }
  ],
  "goals": [
    "Estabilidad",
    "Antídoto oportuno"
  ],
  "alerts": [
    "Consulta al centro de información toxicológica (línea nacional de toxicología del MinSalud) ante dudas de dosis o antídotos.",
    "El lavado gástrico casi nunca está indicado"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "AACT/EAPCCT · Goldfrank",
    "dif": []
  }
},
{
  "id": "atc",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Antidepresivos tricíclicos",
  "aka": "triciclicos amitriptilina imipramina intoxicacion qrs ancho bicarbonato",
  "page": "Fuente: Guía colombiana · Goldfrank · revisiones de toxicología",
  "sub": "Anticolinérgico + convulsiones + hipotensión + QRS ancho y arritmias ventriculares.",
  "flow": [
    [
      "QRS > 100 ms",
      "Bicarbonato"
    ],
    [
      "Convulsión",
      "Benzodiazepina"
    ],
    [
      "Hipotensión",
      "Líquidos + noradrenalina"
    ],
    [
      "Refractario",
      "Lidocaína, emulsión lipídica"
    ]
  ],
  "criteria": [
    "R en aVR > 3 mm y QRS > 100 ms predicen convulsiones y arritmias."
  ],
  "orders": [
    {
      "d": "Bicarbonato de sodio 8,4 %",
      "dose": "1–2 mEq/kg IV en bolo; repetir hasta estrechar QRS",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 2,
        "unit": "mEq"
      },
      "n": "Meta pH 7,45–7,55. Infusión: 150 mEq en 1 L DAD5 % a 150–250 mL/h."
    },
    {
      "d": "Carbón activado si < 2 h y vía aérea segura",
      "dose": "1 g/kg (máx 50 g)"
    },
    {
      "d": "Benzodiazepina para convulsiones",
      "dose": "Midazolam 5–10 mg IV/IM o diazepam 10 mg IV"
    },
    {
      "d": "Noradrenalina si hipotensión tras volumen",
      "dose": "0,05–0,5 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.5,
        "conc": 16
      }
    },
    {
      "d": "Lidocaína (arritmia refractaria)",
      "dose": "1–1,5 mg/kg IV"
    },
    {
      "d": "Emulsión lipídica 20 % (paro o refractario)",
      "dose": "1,5 mL/kg IV en bolo, luego 0,25 mL/kg/min",
      "calc": {
        "t": "kg",
        "lo": 1.5,
        "hi": 1.5,
        "unit": "mL"
      }
    }
  ],
  "goals": [
    "QRS < 100 ms",
    "PAM ≥ 65"
  ],
  "alerts": [
    "No fenitoína, flumazenil, fisostigmina ni antiarrítmicos IA/IC",
    "Consulta al centro de información toxicológica (línea nacional de toxicología del MinSalud) ante dudas de dosis o antídotos."
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "Goldfrank · revisiones de toxicología",
    "dif": []
  }
},
{
  "id": "bzd",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Benzodiazepinas",
  "aka": "benzodiazepinas clonazepam alprazolam intoxicacion flumazenil",
  "page": "Fuente: Guía colombiana · Goldfrank",
  "sub": "Sedación con signos vitales usualmente conservados; la gravedad aumenta con alcohol u opioides.",
  "flow": [
    [
      "1",
      "Soporte de vía aérea"
    ],
    [
      "2",
      "Flumazenil solo en casos seleccionados"
    ],
    [
      "3",
      "Observación"
    ]
  ],
  "criteria": [
    "Si hay depresión respiratoria marcada, busca coingesta (opioides, alcohol)."
  ],
  "orders": [
    {
      "d": "Soporte ventilatorio y posición lateral"
    },
    {
      "d": "Flumazenil (sedación iatrogénica o ingesta pura sin uso crónico)",
      "dose": "0,2 mg IV c/1 min hasta 1 mg (máx 3 mg)",
      "n": "Puede re-sedarse: vigila 2–4 h."
    }
  ],
  "goals": [
    "Vía aérea permeable",
    "Recuperación de conciencia"
  ],
  "alerts": [
    "Flumazenil puede causar convulsiones en usuarios crónicos o coingesta con tricíclicos"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "Goldfrank",
    "dif": []
  }
},
{
  "id": "bb-tox",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Betabloqueadores",
  "aka": "betabloqueador propranolol metoprolol intoxicacion glucagon insulina altas dosis",
  "page": "Fuente: Guía colombiana · Consenso de expertos 2019 (betabloqueadores y calcioantagonistas)",
  "sub": "Bradicardia, hipotensión, bloqueo AV; propranolol además QRS ancho y convulsiones.",
  "flow": [
    [
      "1",
      "Atropina y líquidos"
    ],
    [
      "2",
      "Calcio y glucagón"
    ],
    [
      "3",
      "Insulina en dosis altas"
    ],
    [
      "4",
      "Vasopresores, marcapasos, lípidos"
    ]
  ],
  "criteria": [
    "Glucosa y potasio frecuentes si usas insulina."
  ],
  "orders": [
    {
      "d": "Atropina",
      "dose": "1 mg IV c/3–5 min (máx 3 mg)"
    },
    {
      "d": "Gluconato de calcio 10 %",
      "dose": "30–60 mL IV en 10 min"
    },
    {
      "d": "Glucagón",
      "dose": "3–10 mg IV (50–150 mcg/kg) en 3–5 min; infusión 1–5 mg/h",
      "calc": {
        "t": "kg",
        "lo": 0.05,
        "hi": 0.15,
        "unit": "mg"
      },
      "a": "Glucagón escaso: pasa directo a insulina en dosis altas."
    },
    {
      "d": "Insulina en dosis altas",
      "dose": "1 U/kg IV en bolo + 1 U/kg/h (titular hasta 10 U/kg/h)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 1,
        "unit": "U",
        "label": "bolo"
      },
      "n": "Dextrosa 25 g en bolo si glucosa < 250 y DAD 10–20 % para glucosa 150–250; K⁺ 2,5–2,8 o más."
    },
    {
      "d": "Vasopresor",
      "dose": "Adrenalina o noradrenalina 0,05–0,5 mcg/kg/min",
      "calc": {
        "t": "kgmin",
        "lo": 0.05,
        "hi": 0.5,
        "conc": 16
      }
    },
    {
      "d": "Bicarbonato si QRS ancho (propranolol)",
      "dose": "1–2 mEq/kg"
    },
    {
      "d": "Marcapasos o emulsión lipídica si refractario"
    }
  ],
  "goals": [
    "PAM ≥ 65",
    "FC > 50"
  ],
  "alerts": [
    "Consulta al centro de información toxicológica (línea nacional de toxicología del MinSalud) ante dudas de dosis o antídotos."
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "Consenso de expertos 2019 (betabloqueadores y calcioantagonistas)",
    "dif": [
      "Glucagón con existencias limitadas en muchos servicios."
    ]
  }
},
{
  "id": "of",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Organofosforados y carbamatos",
  "aka": "organofosforados carbamatos plaguicidas insecticida colinergico atropina pralidoxima",
  "page": "Fuente: Guía colombiana · OMS · Eddleston et al.",
  "sub": "Síndrome colinérgico: miosis, secreciones, broncorrea, bradicardia, fasciculaciones, debilidad y depresión respiratoria.",
  "flow": [
    [
      "1",
      "Descontaminación (con protección)"
    ],
    [
      "2",
      "Atropina duplicando dosis"
    ],
    [
      "3",
      "Oxima si organofosforado"
    ],
    [
      "4",
      "Vigila síndrome intermedio 24–96 h"
    ]
  ],
  "criteria": [
    "Colinesterasa eritrocitaria o plasmática confirma pero no retrasa el tratamiento."
  ],
  "orders": [
    {
      "d": "Descontaminación",
      "n": "Retira ropa, lava piel con agua y jabón; personal con guantes y bata."
    },
    {
      "d": "Atropina",
      "dose": "1–3 mg IV; duplicar c/5 min hasta atropinización (secreciones secas, FC > 80, PAS > 80, pulmón claro)",
      "n": "Mantenimiento: 10–20 % de la dosis total de carga por hora.",
      "a": "Sin atropina suficiente: glicopirrolato (no cruza al SNC)."
    },
    {
      "d": "Pralidoxima (organofosforados)",
      "dose": "30 mg/kg IV en 30 min, luego 8–10 mg/kg/h",
      "calc": {
        "t": "kg",
        "lo": 30,
        "hi": 30,
        "unit": "mg",
        "label": "carga"
      },
      "a": "Si no hay oxima: atropina y soporte ventilatorio."
    },
    {
      "d": "Diazepam para convulsiones o agitación",
      "dose": "10 mg IV"
    },
    {
      "d": "Intubación si falla respiratoria",
      "n": "Rocuronio; evita succinilcolina (bloqueo prolongado)."
    }
  ],
  "goals": [
    "Atropinización sostenida",
    "Sin falla respiratoria"
  ],
  "alerts": [
    "Síndrome intermedio: debilidad proximal y respiratoria a las 24–96 h",
    "Consulta al centro de información toxicológica (línea nacional de toxicología del MinSalud) ante dudas de dosis o antídotos."
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "OMS · Eddleston et al.",
    "dif": [
      "Intoxicación muy frecuente en Colombia (zonas rurales); la pralidoxima es difícil de conseguir y la atropina es el pilar."
    ]
  }
},
{
  "id": "coca",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Cocaína / basuco",
  "aka": "cocaina crack basuco simpaticomimetico agitacion dolor toracico",
  "page": "Fuente: Guía colombiana · AHA 2008 dolor torácico por cocaína · Goldfrank",
  "sub": "Toxíndrome simpaticomimético: agitación, taquicardia, hipertensión, hipertermia, midriasis; riesgo de SCA, disección, ACV, convulsiones, rabdomiólisis.",
  "flow": [
    [
      "1",
      "Benzodiazepina"
    ],
    [
      "2",
      "Enfriamiento si hipertermia"
    ],
    [
      "3",
      "Dolor torácico: ASA + nitratos"
    ],
    [
      "4",
      "QRS ancho: bicarbonato"
    ]
  ],
  "criteria": [
    "ECG, troponina, CK, creatinina, temperatura."
  ],
  "orders": [
    {
      "d": "Diazepam",
      "dose": "5–10 mg IV c/5–10 min hasta sedación",
      "a": "Midazolam 2–5 mg IV o 5–10 mg IM."
    },
    {
      "d": "Enfriamiento activo si T > 40 °C"
    },
    {
      "d": "Dolor torácico",
      "dose": "ASA 300 mg VO + nitroglicerina SL/IV"
    },
    {
      "d": "Hipertensión refractaria a benzodiazepinas",
      "dose": "Nitroglicerina o nitroprusiato IV",
      "a": "Calcioantagonista; evita betabloqueador no selectivo en la fase aguda."
    },
    {
      "d": "Bicarbonato si QRS ancho",
      "dose": "1–2 mEq/kg IV"
    }
  ],
  "goals": [
    "Agitación controlada",
    "T < 38,5 °C"
  ],
  "alerts": [
    "La hipertermia es la principal causa de muerte",
    "No uses haloperidol como primera línea"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "AHA 2008 dolor torácico por cocaína · Goldfrank",
    "dif": []
  }
},
{
  "id": "metanol",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Metanol",
  "aka": "metanol alcohol adulterado licor adulterado acidosis brecha osmolar",
  "page": "Fuente: Guía colombiana · EXTRIP 2015 · AACT",
  "sub": "Licor adulterado: latencia 12–24 h, luego acidosis metabólica con brecha aniónica alta, alteración visual, coma.",
  "flow": [
    [
      "1",
      "Bloquea la alcohol-deshidrogenasa (etanol)"
    ],
    [
      "2",
      "Bicarbonato si pH < 7,3"
    ],
    [
      "3",
      "Ácido folínico"
    ],
    [
      "4",
      "Hemodiálisis"
    ]
  ],
  "criteria": [
    "Brecha osmolar > 10 apoya el diagnóstico; puede cerrarse cuando ya hay acidosis.",
    "Hemodiálisis: pH ≤ 7,15, coma, convulsiones, alteración visual, LRA o brecha aniónica > 24."
  ],
  "orders": [
    {
      "d": "Etanol VO/SNG",
      "dose": "Carga 0,8 g/kg: aguardiente 29 % ≈ 3,5 mL/kg o licor 40 % ≈ 2,5 mL/kg",
      "calc": {
        "t": "kg",
        "lo": 3.5,
        "hi": 3.5,
        "unit": "mL",
        "label": "aguardiente carga"
      },
      "n": "Mantenimiento: aguardiente 29 % 0,3 mL/kg/h (no bebedor) a 0,7 mL/kg/h (bebedor); duplicar en hemodiálisis.",
      "a": "Fomepizol 15 mg/kg y luego 10 mg/kg c/12 h (no disponible regularmente en Colombia)."
    },
    {
      "d": "Etanol IV al 10 % (alternativa)",
      "dose": "Carga 10 mL/kg en 30–60 min, luego 0,8–2 mL/kg/h",
      "calc": {
        "t": "kg",
        "lo": 10,
        "hi": 10,
        "unit": "mL",
        "label": "carga"
      }
    },
    {
      "d": "Bicarbonato de sodio",
      "dose": "1–2 mEq/kg IV si pH < 7,3"
    },
    {
      "d": "Ácido folínico",
      "dose": "1 mg/kg IV (máx 50 mg) c/4–6 h",
      "a": "Ácido fólico 50 mg IV c/4–6 h."
    },
    {
      "d": "Hemodiálisis según criterios"
    }
  ],
  "goals": [
    "Etanolemia 100–150 mg/dL",
    "pH > 7,3"
  ],
  "alerts": [
    "Glucometría c/1–2 h con etanol (hipoglucemia)",
    "Consulta al centro de información toxicológica (línea nacional de toxicología del MinSalud) ante dudas de dosis o antídotos."
  ],
  "rel": [
    "c-osm",
    "c-ag"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "EXTRIP 2015 · AACT",
    "dif": [
      "Brotes por licor adulterado son frecuentes; el etanol (aguardiente) es el antídoto práctico porque el fomepizol no se consigue."
    ]
  }
},
{
  "id": "co",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Monóxido de carbono",
  "aka": "monoxido de carbono co calentador incendio carboxihemoglobina",
  "page": "Fuente: Guía colombiana · UHMS · ACEP 2017",
  "sub": "Cefalea, náuseas, síncope o coma tras exposición a combustión (calentadores, incendios, espacios cerrados).",
  "flow": [
    [
      "1",
      "O₂ al 100 %"
    ],
    [
      "2",
      "Carboxihemoglobina, ECG, troponina"
    ],
    [
      "3",
      "¿Criterio de hiperbárica?"
    ],
    [
      "4",
      "Incendio: piensa en cianuro"
    ]
  ],
  "criteria": [
    "La oximetría de pulso es falsamente normal.",
    "Hiperbárica si: pérdida de conciencia, déficit neurológico, COHb > 25 % (> 15 % embarazada), isquemia miocárdica."
  ],
  "orders": [
    {
      "d": "Oxígeno al 100 %",
      "dose": "Máscara con reservorio 15 L/min o intubación",
      "n": "Hasta COHb < 3 % y asintomático (≈ 6 h)."
    },
    {
      "d": "Hidroxocobalamina (sospecha de cianuro en incendio)",
      "dose": "5 g IV en 15 min",
      "a": "Tiosulfato de sodio 12,5 g IV."
    }
  ],
  "goals": [
    "COHb < 3 %",
    "Asintomático"
  ],
  "alerts": [
    "Secuelas neurológicas tardías: control a las 2–6 semanas"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "UHMS · ACEP 2017",
    "dif": [
      "Pocas cámaras hiperbáricas en Colombia: consulta disponibilidad sin retrasar el O₂ al 100 %."
    ]
  }
},
{
  "id": "opioides",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Opioides",
  "aka": "opioides morfina tramadol metadona fentanilo heroina naloxona",
  "page": "Fuente: Guía colombiana · AHA 2023 intoxicaciones · AACT",
  "sub": "Depresión respiratoria + miosis + alteración de conciencia.",
  "flow": [
    [
      "1",
      "Ventila con bolsa"
    ],
    [
      "2",
      "Naloxona titulada"
    ],
    [
      "3",
      "Infusión si recurre"
    ],
    [
      "4",
      "Observación"
    ]
  ],
  "criteria": [
    "Tramadol: puede dar convulsiones y síndrome serotoninérgico."
  ],
  "orders": [
    {
      "d": "Naloxona",
      "dose": "0,04–0,4 mg IV, titular c/2–3 min hasta FR ≥ 12 (puede llegar a 2 mg y repetirse hasta 10 mg)",
      "n": "Meta: respiración adecuada, no despertar completo.",
      "a": "Sin vía IV: 0,4–2 mg IM/SC."
    },
    {
      "d": "Infusión de naloxona si recurre",
      "dose": "2/3 de la dosis que revirtió, por hora"
    }
  ],
  "goals": [
    "FR ≥ 12, SatO₂ ≥ 94 %"
  ],
  "alerts": [
    "Observa ≥ 4–6 h (metadona o liberación prolongada: 24 h)",
    "Abstinencia precipitada en usuarios crónicos"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "AHA 2023 intoxicaciones · AACT",
    "dif": [
      "Naloxona en ampollas de 0,4 mg/mL."
    ]
  }
},
{
  "id": "paracet",
  "sys": "Causas externas",
  "group": "Intoxicaciones",
  "name": "Paracetamol (acetaminofén)",
  "aka": "paracetamol acetaminofen intoxicacion n-acetilcisteina nomograma",
  "page": "Fuente: Guía colombiana · Consenso EE. UU./Canadá 2023 · Australia/NZ 2020",
  "sub": "Ingesta ≥ 150 mg/kg (o ≥ 10 g) o nivel sobre la línea de tratamiento del nomograma (4–24 h).",
  "flow": [
    [
      "< 1–2 h",
      "Carbón activado"
    ],
    [
      "4 h",
      "Nivel sérico → nomograma"
    ],
    [
      "Indicación",
      "N-acetilcisteína"
    ],
    [
      "Tiempo desconocido o > 24 h con daño",
      "NAC sin esperar"
    ]
  ],
  "criteria": [
    "Nivel, AST/ALT, INR, creatinina, glucosa, gases."
  ],
  "orders": [
    {
      "d": "N-acetilcisteína IV (3 bolsas)",
      "dose": "150 mg/kg en 200 mL DAD5 % en 60 min → 50 mg/kg en 500 mL en 4 h → 100 mg/kg en 1000 mL en 16 h",
      "n": "Peso máximo de cálculo 100 kg.",
      "calc": {
        "t": "nac"
      },
      "a": "NAC VO: 140 mg/kg y luego 70 mg/kg c/4 h × 17 dosis."
    },
    {
      "d": "Carbón activado si < 1–2 h",
      "dose": "1 g/kg (máx 50 g)"
    }
  ],
  "goals": [
    "NAC iniciada < 8 h de la ingesta",
    "AST/ALT e INR en descenso"
  ],
  "alerts": [
    "Continúa NAC si al terminar hay nivel detectable o transaminasas elevadas",
    "Criterios de trasplante (King's College): remite temprano"
  ],
  "rel": [
    "r-niveles"
  ],
  "g": {
    "co": {
      "n": "Guías para el manejo de urgencias toxicológicas, MinSalud",
      "y": "2017",
      "st": "ok",
      "txt": "Referencia nacional vigente para intoxicaciones; se complementa con literatura toxicológica internacional."
    },
    "intl": "Consenso EE. UU./Canadá 2023 · Australia/NZ 2020",
    "dif": [
      "NAC IV disponible (ampollas 300 mg/3 mL)."
    ]
  }
}
];
