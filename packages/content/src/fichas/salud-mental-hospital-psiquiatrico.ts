// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "hm-ingreso",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Ingreso y seguridad",
  "name": "Ingreso a unidad psiquiátrica: órdenes y descarte de organicidad",
  "aka": "ingreso psiquiatrico ordenes de hospitalizacion examen mental organicidad laboratorios de ingreso",
  "page": "Fuente: Guía colombiana · APA 2016 evaluación psiquiátrica · NICE",
  "sub": "Todo ingreso requiere examen médico completo: muchas 'psicosis' o 'agitaciones' son delirium, tóxicos o enfermedad médica.",
  "flow": [
    [
      "1",
      "Signos vitales, glucometría, examen físico y neurológico"
    ],
    [
      "2",
      "Examen mental + riesgo (suicida, heteroagresión, fuga)"
    ],
    [
      "3",
      "Laboratorios de ingreso"
    ],
    [
      "4",
      "Nivel de vigilancia y plan"
    ]
  ],
  "criteria": [
    "Pistas de organicidad: inicio agudo > 40 años sin antecedente, alteración de conciencia o atención, alucinaciones visuales, signos focales, fiebre, signos vitales anormales, consumo, fármacos nuevos."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Vigilancia según riesgo",
      "n": "Observación continua (1:1), c/15 min o rutinaria; retiro de objetos peligrosos; revisión de pertenencias."
    },
    {
      "d": "Laboratorios de ingreso",
      "n": "Hemograma, glucosa, electrolitos (Na, K, Ca), creatinina, perfil hepático, TSH, uroanálisis, prueba de embarazo, tóxicos en orina, VIH, VDRL; perfil lipídico y HbA1c si antipsicóticos; niveles (litio, valproato) si los toma."
    },
    {
      "d": "ECG basal",
      "n": "Si antipsicóticos, cardiopatía, edad > 40 o combinaciones que alargan QT."
    },
    {
      "d": "Neuroimagen o EEG",
      "n": "Solo si hay pistas de organicidad."
    },
    {
      "d": "Conciliación de medicamentos y consumo de sustancias (CIWA/COWS si aplica)"
    },
    {
      "d": "Dieta, peso diario al inicio, patrón de sueño y deposiciones"
    }
  ],
  "goals": [
    "Organicidad descartada",
    "Nivel de riesgo documentado"
  ],
  "alerts": [
    "Intento de suicidio: notificación a Sivigila"
  ],
  "rel": [
    "delirium",
    "agitacion"
  ],
  "g": {
    "co": {
      "n": "Ley 1616 de 2013 (salud mental) y protocolos institucionales",
      "y": "2013",
      "st": "ok",
      "txt": "Marco legal de derechos, consentimiento y atención en salud mental en Colombia."
    },
    "intl": "APA 2016 evaluación psiquiátrica · NICE",
    "dif": []
  }
},
{
  "id": "hm-contencion",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Ingreso y seguridad",
  "name": "Contención (verbal, farmacológica y física) y marco legal",
  "aka": "contencion fisica mecanica inmovilizacion ingreso involuntario consentimiento ley 1616",
  "page": "Fuente: Guía colombiana · NICE 2015 violencia y agresión",
  "sub": "La contención física es el último recurso, por el menor tiempo posible y con vigilancia médica.",
  "flow": [
    [
      "1",
      "Desescalamiento verbal"
    ],
    [
      "2",
      "Medicación ofrecida VO"
    ],
    [
      "3",
      "Medicación IM"
    ],
    [
      "4",
      "Contención física con reevaluación c/15 min"
    ]
  ],
  "criteria": [
    "Documenta: motivo, alternativas intentadas, hora de inicio y retiro, firmas.",
    "Capacidad y consentimiento: registra la valoración; en riesgo inminente, sigue el protocolo institucional y la Ley 1616."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Contención física",
      "n": "Personal suficiente (5 personas), decúbito supino con cabecera elevada, nunca prono; signos vitales, SatO₂ y perfusión distal c/15 min; hidratación y eliminación; retirar al primer momento seguro."
    },
    {
      "d": "Tromboprofilaxis si inmovilización > 12–24 h",
      "dose": "Enoxaparina 40 mg SC c/24 h"
    },
    {
      "d": "Medicación: ver ficha de agitación"
    }
  ],
  "goals": [
    "Retiro lo antes posible sin lesiones"
  ],
  "alerts": [
    "Muerte súbita asociada a contención: posición prona, agotamiento, tóxicos"
  ],
  "rel": [
    "agitacion"
  ],
  "g": {
    "co": {
      "n": "Ley 1616 de 2013 (salud mental) y protocolos institucionales",
      "y": "2013",
      "st": "ok",
      "txt": "Marco legal de derechos, consentimiento y atención en salud mental en Colombia."
    },
    "intl": "NICE 2015 violencia y agresión",
    "dif": []
  }
},
{
  "id": "hm-esquizo",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Psicosis",
  "name": "Esquizofrenia: episodio agudo y mantenimiento",
  "aka": "esquizofrenia antipsicotico risperidona olanzapina aripiprazol haloperidol quetiapina mantenimiento",
  "page": "Fuente: Guía colombiana · APA 2020 · NICE 2014",
  "sub": "Elige el antipsicótico por perfil de efectos adversos; dosis efectiva mínima por 2–4 semanas antes de cambiar.",
  "flow": [
    [
      "Agudo",
      "Monoterapia a dosis terapéutica"
    ],
    [
      "2–4 semanas sin respuesta",
      "Verificar adherencia → cambiar"
    ],
    [
      "2 fallas adecuadas",
      "Clozapina"
    ],
    [
      "Mala adherencia",
      "Inyectable de depósito"
    ]
  ],
  "criteria": [
    "Monitoreo: peso/IMC, PA, glucosa, lípidos (basal, 12 semanas, anual); prolactina si síntomas; ECG según riesgo."
  ],
  "orders": [
    {
      "d": "Risperidona",
      "dose": "2 mg/día → 4–6 mg/día",
      "n": "Hiperprolactinemia y extrapiramidalismo a dosis altas.",
      "a": "Paliperidona 6–12 mg/día."
    },
    {
      "d": "Olanzapina",
      "dose": "10 mg/día → 10–20 mg/día",
      "n": "Aumento de peso y efectos metabólicos."
    },
    {
      "d": "Aripiprazol",
      "dose": "10–15 mg/día (máx 30)",
      "n": "Perfil metabólico favorable; acatisia."
    },
    {
      "d": "Quetiapina",
      "dose": "300 mg/día → 400–800 mg/día en 2 dosis",
      "n": "Sedante; hipotensión."
    },
    {
      "d": "Haloperidol",
      "dose": "2–10 mg/día",
      "n": "Extrapiramidalismo; considerar biperideno profiláctico solo si alto riesgo."
    },
    {
      "d": "Mantenimiento",
      "n": "Al menos 1–2 años tras el primer episodio; indefinido si recaídas."
    }
  ],
  "goals": [
    "Reducción de síntomas positivos",
    "Adherencia y reintegración"
  ],
  "alerts": [
    "Evita polifarmacia antipsicótica salvo clozapina + aumentación"
  ],
  "rel": [
    "psicosis",
    "hm-lai",
    "hm-clozapina"
  ],
  "g": {
    "co": {
      "n": "GPC Esquizofrenia en adultos, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con APA 2020, NICE y Maudsley."
    },
    "intl": "APA 2020 · NICE 2014 · Maudsley 2024",
    "dif": [
      "Risperidona, olanzapina, quetiapina, aripiprazol, haloperidol y clozapina en el PBS."
    ]
  }
},
{
  "id": "hm-lai",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Psicosis",
  "name": "Antipsicóticos inyectables de depósito",
  "aka": "antipsicotico de deposito lai haloperidol decanoato paliperidona palmitato aripiprazol inyectable",
  "page": "Fuente: Guía colombiana · Maudsley 2024",
  "sub": "Para mala adherencia o preferencia del paciente. Prueba tolerancia oral antes.",
  "flow": [
    [
      "1",
      "Tolerancia oral al mismo fármaco"
    ],
    [
      "2",
      "Carga según producto"
    ],
    [
      "3",
      "Mantenimiento mensual o trimestral"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Haloperidol decanoato",
      "dose": "50–200 mg IM c/4 semanas (≈ 10–15 veces la dosis oral diaria)",
      "n": "Iniciar con dosis de prueba 25–50 mg."
    },
    {
      "d": "Paliperidona palmitato",
      "dose": "234 mg IM deltoides día 1 + 156 mg día 8; luego 75–150 mg c/mes",
      "n": "Sin solapamiento oral."
    },
    {
      "d": "Aripiprazol mensual",
      "dose": "400 mg IM c/mes + aripiprazol oral 10–20 mg × 14 días",
      "a": "Carga de 2 inyecciones + 20 mg oral el mismo día (según producto)."
    }
  ],
  "goals": [
    "Adherencia sostenida"
  ],
  "alerts": [
    "Síndrome posinyección con olanzapina pamoato (observación 3 h)"
  ],
  "rel": [
    "hm-esquizo"
  ],
  "g": {
    "co": {
      "n": "GPC Esquizofrenia en adultos, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con APA 2020, NICE y Maudsley."
    },
    "intl": "Maudsley 2024",
    "dif": []
  }
},
{
  "id": "hm-clozapina",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Psicosis",
  "name": "Clozapina: inicio, monitoreo y efectos adversos",
  "aka": "clozapina esquizofrenia resistente neutropenia miocarditis sialorrea estreñimiento hemograma",
  "page": "Fuente: Guía colombiana · Maudsley 2024 · TRRIP",
  "sub": "Indicada en esquizofrenia resistente (2 antipsicóticos a dosis adecuada) y en riesgo suicida persistente.",
  "flow": [
    [
      "Basal",
      "Hemograma, troponina, PCR, ECG, peso, glucosa, lípidos"
    ],
    [
      "Titulación",
      "12,5 mg noche → 300–450 mg/día en 2–4 semanas"
    ],
    [
      "Semanas 1–4",
      "Troponina y PCR semanal (miocarditis)"
    ],
    [
      "Hemograma",
      "Semanal 18 semanas, luego mensual"
    ]
  ],
  "criteria": [
    "Neutrófilos: ≥ 1500 normal · 1000–1499 continuar con controles 3/semana · < 1000 suspender e interconsultar hematología.",
    "Dejar de fumar sube los niveles (hasta 50 %); infección o inflamación también."
  ],
  "orders": [
    {
      "d": "Titulación",
      "dose": "12,5 mg noche día 1 → subir 25–50 mg/día hasta 300–450 mg/día en 2 tomas (rango 200–600)",
      "n": "Nivel sérico meta ≥ 350 ng/mL si falta respuesta."
    },
    {
      "d": "Estreñimiento (prevención obligatoria)",
      "dose": "Polietilenglicol 17 g/día o senósidos 15 mg noche",
      "n": "Íleo por clozapina puede ser mortal."
    },
    {
      "d": "Sialorrea",
      "dose": "Atropina 1 % 1–2 gotas sublinguales en la noche",
      "a": "Glicopirrolato 1–2 mg/día."
    },
    {
      "d": "Taquicardia sinusal benigna",
      "dose": "Propranolol 10–20 mg c/8 h (si no hay miocarditis)"
    },
    {
      "d": "Convulsiones (dosis altas)",
      "dose": "Ácido valproico 500–1000 mg/día"
    }
  ],
  "goals": [
    "Respuesta a las 6–12 semanas en dosis terapéutica"
  ],
  "alerts": [
    "Fiebre, disnea o dolor torácico en el primer mes: troponina (miocarditis)",
    "Reinicio tras > 48 h sin dosis: retitular desde 12,5 mg"
  ],
  "rel": [
    "hm-esquizo",
    "r-niveles"
  ],
  "g": {
    "co": {
      "n": "GPC Esquizofrenia en adultos, MinSalud",
      "y": "2014",
      "st": "old",
      "txt": "Se complementa con APA 2020, NICE y Maudsley."
    },
    "intl": "Maudsley 2024 · TRRIP",
    "dif": [
      "Hemograma de control según el programa de farmacovigilancia institucional."
    ]
  }
},
{
  "id": "hm-bipolar-dep",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Trastornos afectivos",
  "name": "Depresión bipolar y mantenimiento del trastorno bipolar",
  "aka": "depresion bipolar lamotrigina quetiapina litio mantenimiento bipolar",
  "page": "Fuente: CANMAT/ISBD 2018 · BAP 2016",
  "sub": "Evita antidepresivo en monoterapia (viraje a manía).",
  "flow": [
    [
      "Depresión bipolar",
      "Quetiapina, lurasidona o lamotrigina"
    ],
    [
      "Mantenimiento",
      "Litio (primera línea), quetiapina, valproato, lamotrigina"
    ],
    [
      "Antidepresivo",
      "Solo con estabilizador y corto"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Quetiapina",
      "dose": "50 mg noche → 300 mg noche en 4 días"
    },
    {
      "d": "Lamotrigina",
      "dose": "25 mg/día × 2 semanas → 50 mg × 2 semanas → 100 → 200 mg/día",
      "n": "Mitad de dosis con valproato; doble con carbamazepina. Rash: suspender (SJS)."
    },
    {
      "d": "Litio (mantenimiento)",
      "dose": "Ver ficha de litio; meta 0,6–0,8 mEq/L"
    }
  ],
  "goals": [
    "Eutimia sostenida"
  ],
  "alerts": [
    "Lamotrigina: si se suspende > 5 vidas medias, retitular desde 25 mg"
  ],
  "rel": [
    "mania",
    "hm-litio"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "CANMAT/ISBD 2018 · BAP 2016",
    "dif": []
  }
},
{
  "id": "hm-litio",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Trastornos afectivos",
  "name": "Litio: inicio, niveles e intoxicación",
  "aka": "litio litemia toxicidad litio hemodialisis carbonato de litio",
  "page": "Fuente: EXTRIP 2015 · Maudsley 2024",
  "sub": "Estrecho margen terapéutico: niveles a las 12 h de la última dosis, 5–7 días tras cada cambio.",
  "flow": [
    [
      "Basal",
      "Cr, TSH, Ca, ECG, embarazo"
    ],
    [
      "Metas",
      "Agudo 0,8–1,2 · mantenimiento 0,6–0,8 mEq/L"
    ],
    [
      "Toxicidad",
      "> 1,5 con síntomas"
    ],
    [
      "Grave",
      "Hemodiálisis"
    ]
  ],
  "criteria": [
    "Aumentan el nivel: deshidratación, AINE, IECA/ARA-II, tiazidas, dieta hiposódica, vómito o diarrea.",
    "Toxicidad: temblor grueso, ataxia, disartria, confusión, mioclonías, convulsiones, arritmias."
  ],
  "orders": [
    {
      "d": "Inicio",
      "dose": "Carbonato de litio 300 mg c/12 h; ajustar por niveles"
    },
    {
      "d": "Seguimiento",
      "n": "Litemia c/3 meses el primer año y luego c/6 meses; Cr y TSH c/6 meses; calcio anual."
    },
    {
      "cat": "Intoxicación"
    },
    {
      "d": "Suspender litio, SSN 0,9 % para euvolemia y diuresis",
      "n": "Evita diuréticos; no sirve el carbón activado (considera irrigación intestinal si liberación prolongada)."
    },
    {
      "d": "Hemodiálisis",
      "n": "Litio > 4,0 mEq/L con falla renal, o alteración de conciencia, convulsiones o arritmias; considerar si > 5,0 aun sin síntomas."
    }
  ],
  "goals": [
    "Litemia en rango sin toxicidad"
  ],
  "alerts": [
    "Diabetes insípida nefrogénica e hipotiroidismo a largo plazo"
  ],
  "rel": [
    "mania",
    "hm-bipolar-dep",
    "r-niveles"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "EXTRIP 2015 · Maudsley 2024",
    "dif": []
  }
},
{
  "id": "hm-depresion-grave",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Trastornos afectivos",
  "name": "Depresión grave o resistente hospitalizada",
  "aka": "depresion grave resistente psicotica potenciacion litio aripiprazol venlafaxina mirtazapina",
  "page": "Fuente: Guía colombiana · CANMAT 2023 · NICE 2022",
  "sub": "Hospitalizado: riesgo suicida, síntomas psicóticos, rechazo a comer o beber.",
  "flow": [
    [
      "Sin respuesta a 2 antidepresivos",
      "Resistente"
    ],
    [
      "Potenciar",
      "Litio o aripiprazol"
    ],
    [
      "Psicótica",
      "Antidepresivo + antipsicótico"
    ],
    [
      "Grave o catatónica",
      "TEC"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Cambio de antidepresivo",
      "dose": "Venlafaxina 75 → 225 mg/día o mirtazapina 15 → 45 mg noche",
      "a": "Sertralina hasta 200 mg; escitalopram hasta 20 mg."
    },
    {
      "d": "Potenciación",
      "dose": "Litio para 0,6–0,8 mEq/L o aripiprazol 2–10 mg/día"
    },
    {
      "d": "Depresión psicótica",
      "dose": "Antidepresivo + olanzapina 5–20 mg o quetiapina"
    }
  ],
  "goals": [
    "Respuesta y seguridad"
  ],
  "alerts": [
    "Vigilancia del riesgo suicida en el período de mejoría inicial"
  ],
  "rel": [
    "depresion",
    "hm-tec",
    "suicidio"
  ],
  "g": {
    "co": {
      "n": "GPC Episodio depresivo y trastorno depresivo recurrente en adultos, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Se complementa con CANMAT 2023 y NICE 2022."
    },
    "intl": "CANMAT 2023 · NICE 2022",
    "dif": []
  }
},
{
  "id": "hm-tec",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Trastornos afectivos",
  "name": "Terapia electroconvulsiva (TEC): órdenes previas",
  "aka": "terapia electroconvulsiva tec electrochoque ordenes pre tec anestesia",
  "page": "Fuente: Guía colombiana · APA 2001/2021 · RCPsych",
  "sub": "Indicaciones: depresión grave o psicótica, catatonia, riesgo vital (no come, suicidio), manía refractaria, SNM.",
  "flow": [
    [
      "1",
      "Consentimiento informado"
    ],
    [
      "2",
      "Valoración preanestésica"
    ],
    [
      "3",
      "Ajuste de medicamentos"
    ],
    [
      "Sesiones",
      "2–3 por semana"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Nada vía oral 6–8 h (líquidos claros hasta 2 h)"
    },
    {
      "d": "Evaluación",
      "n": "ECG, electrolitos (K), glucosa; neuroimagen si déficit o sospecha de lesión."
    },
    {
      "d": "Ajustes",
      "n": "Reducir o suspender benzodiazepinas y anticonvulsivantes (suben el umbral); omitir litio la noche previa (delirium); omitir antihipertensivos que den bradicardia excesiva según anestesia."
    },
    {
      "d": "Anestesia (la da anestesiología)",
      "dose": "Propofol o etomidato + succinilcolina 0,5–1 mg/kg"
    }
  ],
  "goals": [
    "Convulsión terapéutica adecuada"
  ],
  "alerts": [
    "Cefalea, confusión y amnesia transitorias esperables"
  ],
  "rel": [
    "hm-catatonia",
    "hm-depresion-grave"
  ],
  "g": {
    "co": {
      "n": "Ley 1616 de 2013 (salud mental) y protocolos institucionales",
      "y": "2013",
      "st": "ok",
      "txt": "Marco legal de derechos, consentimiento y atención en salud mental en Colombia."
    },
    "intl": "APA 2001/2021 · RCPsych",
    "dif": []
  }
},
{
  "id": "hm-catatonia",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Trastornos afectivos",
  "name": "Catatonia",
  "aka": "catatonia estupor mutismo negativismo lorazepam bush francis",
  "page": "Fuente: Maudsley 2024 · BAP 2023 catatonia",
  "sub": "Estupor, mutismo, negativismo, posturas, catalepsia, ecolalia (Bush-Francis). Puede ser psiquiátrica o médica.",
  "flow": [
    [
      "1",
      "Prueba con benzodiazepina"
    ],
    [
      "Responde",
      "Continuar dosis escalonada"
    ],
    [
      "No responde o maligna",
      "TEC urgente"
    ]
  ],
  "criteria": [
    "Evita antipsicóticos (riesgo de catatonia maligna/SNM).",
    "Hidratación, nutrición, tromboprofilaxis y prevención de úlceras."
  ],
  "orders": [
    {
      "d": "Lorazepam",
      "dose": "1–2 mg VO o sublingual; repetir en 3 h; titular a 6–16 mg/día en 3–4 tomas",
      "a": "Diazepam 5–10 mg IV lento (lorazepam IV casi no se consigue en Colombia)."
    },
    {
      "d": "Enoxaparina 40 mg SC c/24 h; LEV o sonda si no come ni bebe"
    }
  ],
  "goals": [
    "Mejoría ≥ 50 % en Bush-Francis"
  ],
  "alerts": [
    "Catatonia maligna (fiebre, disautonomía): UCI + TEC"
  ],
  "rel": [
    "hm-tec",
    "hm-snm"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "Maudsley 2024 · BAP 2023 catatonia",
    "dif": []
  }
},
{
  "id": "hm-snm",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Urgencias por psicofármacos",
  "name": "Síndrome neuroléptico maligno",
  "aka": "sindrome neuroleptico maligno snm rigidez fiebre ck bromocriptina dantroleno",
  "page": "Fuente: Maudsley Prescribing Guidelines 2024 · APA",
  "sub": "Rigidez 'en tubo de plomo', fiebre, alteración mental, disautonomía y CK alta tras antipsicótico (o retiro de dopaminérgicos).",
  "flow": [
    [
      "1",
      "Suspender antipsicótico"
    ],
    [
      "2",
      "Enfriamiento, hidratación, UCI"
    ],
    [
      "3",
      "Benzodiazepina"
    ],
    [
      "Grave",
      "Bromocriptina y/o dantroleno; TEC"
    ]
  ],
  "criteria": [
    "Diferencial: serotoninérgico (clonus, hiperreflexia, inicio rápido), catatonia maligna, infección del SNC, golpe de calor."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Suspender antipsicóticos y anticolinérgicos"
    },
    {
      "d": "SSN para diuresis y prevenir rabdomiólisis; enfriamiento activo"
    },
    {
      "d": "Lorazepam",
      "dose": "1–2 mg VO/SL c/4–6 h",
      "a": "Diazepam 10 mg IV."
    },
    {
      "d": "Bromocriptina",
      "dose": "2,5 mg VO/SNG c/8 h (hasta 40 mg/día)"
    },
    {
      "d": "Dantroleno (grave, hipertermia)",
      "dose": "1–2,5 mg/kg IV (máx 10 mg/kg/día)",
      "calc": {
        "t": "kg",
        "lo": 1,
        "hi": 2.5,
        "unit": "mg"
      },
      "n": "Disponibilidad limitada."
    }
  ],
  "goals": [
    "Normotermia y descenso de CK"
  ],
  "alerts": [
    "Reintroducir antipsicótico ≥ 2 semanas después, de baja potencia y titulación lenta"
  ],
  "rel": [
    "hm-serotoninergico",
    "hm-catatonia"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica el protocolo del hospital; no confirmé una GPC nacional específica."
    },
    "intl": "Maudsley Prescribing Guidelines 2024 · APA · NICE",
    "dif": []
  }
},
{
  "id": "hm-serotoninergico",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Urgencias por psicofármacos",
  "name": "Síndrome serotoninérgico",
  "aka": "sindrome serotoninergico clonus hiperreflexia ciproheptadina isrs tramadol",
  "page": "Fuente: Maudsley Prescribing Guidelines 2024 · APA",
  "sub": "Criterios de Hunter: clonus (inducible, ocular o espontáneo), hiperreflexia, temblor, agitación, diaforesis, hipertermia; inicio en horas.",
  "flow": [
    [
      "1",
      "Suspender serotoninérgicos"
    ],
    [
      "2",
      "Benzodiazepinas"
    ],
    [
      "Moderado",
      "Ciproheptadina"
    ],
    [
      "Grave (> 41 °C)",
      "Sedación, intubación, parálisis"
    ]
  ],
  "criteria": [
    "Combinaciones típicas: ISRS/IRSN + tramadol, linezolid, triptanes, IMAO, litio, metoclopramida, fentanilo."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Suspender todos los serotoninérgicos"
    },
    {
      "d": "Diazepam",
      "dose": "5–10 mg IV"
    },
    {
      "d": "Ciproheptadina",
      "dose": "12 mg VO/SNG, luego 2 mg c/2 h (máx 32 mg/día)"
    },
    {
      "d": "Enfriamiento; evitar sujeción física (empeora la hipertermia)"
    }
  ],
  "goals": [
    "Resolución en 24–72 h"
  ],
  "alerts": [
    "No uses antipiréticos (la fiebre es muscular)"
  ],
  "rel": [
    "hm-snm"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica el protocolo del hospital; no confirmé una GPC nacional específica."
    },
    "intl": "Maudsley Prescribing Guidelines 2024 · APA · NICE",
    "dif": []
  }
},
{
  "id": "hm-eps",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Urgencias por psicofármacos",
  "name": "Efectos extrapiramidales: distonía, acatisia, parkinsonismo y discinesia tardía",
  "aka": "distonia aguda acatisia parkinsonismo discinesia tardia biperideno propranolol extrapiramidal",
  "page": "Fuente: Maudsley 2024",
  "sub": "Frecuentes con antipsicóticos de alta potencia y dosis altas.",
  "flow": [
    [
      "Distonía aguda",
      "Anticolinérgico IM/IV"
    ],
    [
      "Acatisia",
      "Bajar dosis + propranolol"
    ],
    [
      "Parkinsonismo",
      "Bajar dosis o cambiar; anticolinérgico corto"
    ],
    [
      "Discinesia tardía",
      "Cambiar a clozapina o quetiapina"
    ]
  ],
  "criteria": [
    "La acatisia se confunde con agitación: no subas el antipsicótico."
  ],
  "orders": [
    {
      "d": "Distonía aguda",
      "dose": "Biperideno 2–5 mg IM/IV (repetible a los 30 min)",
      "a": "Difenhidramina 50 mg IV/IM."
    },
    {
      "d": "Continuación tras distonía",
      "dose": "Biperideno 2 mg VO c/8–12 h × 3–7 días"
    },
    {
      "d": "Acatisia",
      "dose": "Propranolol 10–20 mg VO c/8–12 h",
      "a": "Mirtazapina 15 mg noche o benzodiazepina corta."
    },
    {
      "d": "Parkinsonismo",
      "dose": "Reducir dosis o cambiar; biperideno 2 mg c/12 h temporal"
    },
    {
      "d": "Discinesia tardía",
      "n": "Suspender anticolinérgicos; cambiar a clozapina o quetiapina."
    }
  ],
  "goals": [
    "Resolución del síntoma"
  ],
  "alerts": [
    "Distonía laríngea: urgencia de vía aérea"
  ],
  "rel": [
    "hm-esquizo"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "Maudsley 2024",
    "dif": [
      "Biperideno disponible en tabletas e inyectable."
    ]
  }
},
{
  "id": "hm-metabolico",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Seguridad de psicofármacos",
  "name": "Efectos metabólicos, QT e hiperprolactinemia por antipsicóticos",
  "aka": "sindrome metabolico antipsicoticos peso metformina qt prolongado hiperprolactinemia",
  "page": "Fuente: ADA/APA 2004 · Maudsley 2024",
  "sub": "Monitoreo sistemático y medidas correctivas.",
  "flow": [
    [
      "Basal",
      "Peso, PA, glucosa, lípidos, ECG si riesgo"
    ],
    [
      "12 semanas",
      "Repetir"
    ],
    [
      "Anual",
      "Repetir"
    ]
  ],
  "criteria": [
    "QTc > 500 ms o ↑ > 60 ms: suspender o cambiar el fármaco. Mayor riesgo: haloperidol IV, ziprasidona, citalopram > 40 mg, combinaciones, hipoK/hipoMg."
  ],
  "orders": [
    {
      "d": "Aumento de peso",
      "dose": "Metformina 500 mg c/12 h → 1 g c/12 h",
      "n": "Considerar cambio a aripiprazol."
    },
    {
      "d": "Hiperprolactinemia sintomática",
      "dose": "Cambiar a aripiprazol o añadir aripiprazol 5 mg/día"
    },
    {
      "d": "QT largo",
      "n": "Corregir K y Mg; suspender fármacos que alargan QT."
    }
  ],
  "goals": [
    "Sin ganancia de peso > 7 %"
  ],
  "alerts": [
    "Olanzapina y clozapina: mayor riesgo metabólico"
  ],
  "rel": [
    "hm-esquizo"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "ADA/APA 2004 · Maudsley 2024",
    "dif": []
  }
},
{
  "id": "hm-polidipsia",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Seguridad de psicofármacos",
  "name": "Hiponatremia en psiquiatría (polidipsia psicógena y fármacos)",
  "aka": "polidipsia psicogena hiponatremia isrs carbamazepina siadh psiquiatria",
  "page": "Fuente: Maudsley Prescribing Guidelines 2024 · APA",
  "sub": "Frecuente en esquizofrenia crónica (polidipsia) y con ISRS, carbamazepina u oxcarbazepina (SIADH).",
  "flow": [
    [
      "Síntomas graves",
      "SSN 3 %"
    ],
    [
      "Polidipsia",
      "Restricción + peso diurno"
    ],
    [
      "SIADH por fármaco",
      "Suspender o cambiar"
    ]
  ],
  "criteria": [
    "La polidipsia corrige muy rápido al restringir: riesgo de sobrecorrección."
  ],
  "orders": [
    {
      "d": "Restricción hídrica supervisada y peso diurno (alarma si ↑ > 5 % en el día)"
    },
    {
      "d": "Na c/4–6 h durante corrección",
      "n": "Límite 8 mEq/L en 24 h (ver ficha de hiponatremia)."
    },
    {
      "d": "Clozapina puede reducir la polidipsia"
    }
  ],
  "goals": [
    "Na > 130 sin sobrecorrección"
  ],
  "alerts": [
    "Convulsión: SSN 3 % 150 mL"
  ],
  "rel": [
    "hipona"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica el protocolo del hospital; no confirmé una GPC nacional específica."
    },
    "intl": "Maudsley Prescribing Guidelines 2024 · APA · NICE",
    "dif": []
  }
},
{
  "id": "hm-abst-bzd",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Sustancias",
  "name": "Dependencia y abstinencia de benzodiazepinas",
  "aka": "abstinencia benzodiazepinas clonazepam alprazolam desmonte diazepam equivalencias",
  "page": "Fuente: Maudsley Prescribing Guidelines 2024 · APA",
  "sub": "Retiro abrupto puede dar convulsiones y delirium.",
  "flow": [
    [
      "1",
      "Convertir a diazepam"
    ],
    [
      "2",
      "Reducir 10–25 % c/1–2 semanas"
    ],
    [
      "Final",
      "Reducciones más pequeñas"
    ]
  ],
  "criteria": [
    "Equivalencias aproximadas a diazepam 10 mg: alprazolam 0,5 mg · clonazepam 0,5 mg · lorazepam 1 mg."
  ],
  "orders": [
    {
      "d": "Diazepam equivalente",
      "dose": "Dividido en 2–3 tomas; desmonte gradual en semanas a meses"
    },
    {
      "d": "Abstinencia complicada",
      "dose": "Diazepam 10–20 mg c/1–2 h hasta control (como en alcohol)"
    }
  ],
  "goals": [
    "Retiro completo sin convulsiones"
  ],
  "alerts": [
    "No suspender de golpe en hospitalizados"
  ],
  "rel": [
    "abstinencia"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica el protocolo del hospital; no confirmé una GPC nacional específica."
    },
    "intl": "Maudsley Prescribing Guidelines 2024 · APA · NICE",
    "dif": []
  }
},
{
  "id": "hm-opioides",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Sustancias",
  "name": "Abstinencia de opioides",
  "aka": "abstinencia opioides heroina cows metadona buprenorfina clonidina",
  "page": "Fuente: ASAM 2020 · OMS",
  "sub": "Midriasis, rinorrea, bostezos, piloerección, diarrea, dolor. Gradúa con COWS. Rara vez letal.",
  "flow": [
    [
      "COWS ≥ 8–12",
      "Agonista opioide (ideal)"
    ],
    [
      "Sin agonista",
      "Clonidina + sintomáticos"
    ],
    [
      "Egreso",
      "Vincular a programa"
    ]
  ],
  "criteria": [
    "Buprenorfina: iniciar solo con abstinencia establecida (evita precipitarla)."
  ],
  "orders": [
    {
      "d": "Metadona",
      "dose": "10–20 mg VO; hasta 30–40 mg el día 1 según síntomas",
      "a": "Buprenorfina 4 mg SL con COWS ≥ 12, hasta 8–16 mg día 1 (disponibilidad limitada)."
    },
    {
      "d": "Clonidina",
      "dose": "0,1–0,2 mg VO c/6–8 h (vigilar PA)"
    },
    {
      "d": "Sintomáticos",
      "dose": "Loperamida 2–4 mg PRN, ondansetrón 4 mg PRN, ibuprofeno 400 mg c/8 h, hidroxicina 25 mg PRN"
    }
  ],
  "goals": [
    "COWS < 5",
    "Vinculación a tratamiento"
  ],
  "alerts": [
    "Pérdida de tolerancia al egreso: riesgo de sobredosis → naloxona para llevar"
  ],
  "rel": [
    "opioides"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "ASAM 2020 · OMS",
    "dif": [
      "Metadona disponible en programas de tratamiento; buprenorfina limitada."
    ]
  }
},
{
  "id": "hm-psicosis-sustancias",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Sustancias",
  "name": "Psicosis inducida por sustancias (cannabis, basuco, estimulantes)",
  "aka": "psicosis inducida cannabis basuco cocaina metanfetamina alucinogenos",
  "page": "Fuente: Maudsley Prescribing Guidelines 2024 · APA",
  "sub": "Síntomas psicóticos durante o poco después del consumo; muchos evolucionan a psicosis primaria.",
  "flow": [
    [
      "Agitación",
      "Benzodiazepina ± antipsicótico"
    ],
    [
      "Persistencia > 4 semanas",
      "Considerar trastorno primario"
    ],
    [
      "Siempre",
      "Intervención en consumo"
    ]
  ],
  "criteria": [
    "Tóxicos en orina y descarte de lesión o infección."
  ],
  "orders": [
    {
      "d": "Lorazepam",
      "dose": "1–2 mg VO c/4–6 h PRN",
      "a": "Diazepam 10 mg VO/IV."
    },
    {
      "d": "Antipsicótico corto",
      "dose": "Risperidona 1–2 mg/día u olanzapina 5–10 mg/día"
    },
    {
      "d": "Entrevista motivacional y remisión a programa de adicciones"
    }
  ],
  "goals": [
    "Resolución de la psicosis"
  ],
  "alerts": [
    "Hipertermia o arritmia con estimulantes: ver ficha de cocaína"
  ],
  "rel": [
    "coca",
    "psicosis"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica el protocolo del hospital; no confirmé una GPC nacional específica."
    },
    "intl": "Maudsley Prescribing Guidelines 2024 · APA · NICE",
    "dif": []
  }
},
{
  "id": "hm-tlp",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Otros trastornos",
  "name": "Crisis en trastorno límite de la personalidad",
  "aka": "trastorno limite de la personalidad crisis autolesiones impulsividad dbt",
  "page": "Fuente: NICE 2009 · APA 2024",
  "sub": "Validación, seguridad y plan; los fármacos son coadyuvantes de corta duración.",
  "flow": [
    [
      "1",
      "Riesgo suicida y lesiones"
    ],
    [
      "2",
      "Validación y plan de crisis"
    ],
    [
      "Agitación grave",
      "Antipsicótico a dosis baja"
    ],
    [
      "Largo plazo",
      "Terapia dialéctico-conductual"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Evitar benzodiazepinas (desinhibición y dependencia)"
    },
    {
      "d": "Agitación o angustia grave",
      "dose": "Quetiapina 25–50 mg u olanzapina 2,5–5 mg PRN, corto"
    },
    {
      "d": "Remisión a psicoterapia estructurada (DBT o mentalización)"
    }
  ],
  "goals": [
    "Seguridad y vinculación a psicoterapia"
  ],
  "alerts": [
    "Hospitalizaciones prolongadas pueden empeorar"
  ],
  "rel": [
    "suicidio"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "NICE 2009 · APA 2024",
    "dif": []
  }
},
{
  "id": "hm-tca",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Otros trastornos",
  "name": "Anorexia nerviosa hospitalizada: realimentación segura",
  "aka": "anorexia nerviosa realimentacion sindrome de realimentacion fosforo tiamina trastorno conducta alimentaria",
  "page": "Fuente: MEED 2022 · APA 2023 TCA",
  "sub": "Criterios de hospitalización médica y prevención del síndrome de realimentación.",
  "flow": [
    [
      "Criterios",
      "Bradicardia < 40–50, hipotensión, hipotermia, trastornos electrolíticos, IMC muy bajo, rechazo total"
    ],
    [
      "Inicio",
      "Aporte progresivo con monitoreo"
    ],
    [
      "Semana 1",
      "P, K, Mg diarios"
    ]
  ],
  "criteria": [
    "Síndrome de realimentación: hipofosfatemia, hipoK, hipoMg, retención de líquidos, arritmias, IC."
  ],
  "orders": [
    {
      "cat": "Órdenes de hospitalización"
    },
    {
      "d": "Tiamina",
      "dose": "100 mg VO/IV antes de iniciar la alimentación y × 10 días"
    },
    {
      "d": "Aporte inicial",
      "n": "Progresivo según riesgo y protocolo de la unidad de nutrición; aumentar cada 1–2 días."
    },
    {
      "d": "Fósforo, K y Mg diarios la primera semana",
      "n": "Reponer fosfato si < 3 mg/dL o en descenso."
    },
    {
      "d": "Monitoreo cardíaco si bradicardia o QT largo; peso a ciegas"
    }
  ],
  "goals": [
    "Ganancia 0,5–1 kg/semana sin realimentación"
  ],
  "alerts": [
    "No usar fármacos que alargan QT sin ECG"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "MEED 2022 · APA 2023 TCA",
    "dif": []
  }
},
{
  "id": "hm-insomnio",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Otros trastornos",
  "name": "Insomnio en paciente hospitalizado",
  "aka": "insomnio hospital trazodona zolpidem melatonina higiene del sueño",
  "page": "Fuente: Maudsley Prescribing Guidelines 2024 · APA",
  "sub": "Primero causas: dolor, ruido, acatisia, abstinencia, manía, fármacos activadores.",
  "flow": [
    [
      "1",
      "Higiene del sueño"
    ],
    [
      "2",
      "Hipnótico corto si necesario"
    ],
    [
      "Evitar",
      "Benzodiazepinas crónicas"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Trazodona",
      "dose": "25–50 mg noche (hasta 100 mg)",
      "a": "Melatonina 2–5 mg; zolpidem 5 mg noche por máx 2–4 semanas."
    },
    {
      "d": "Revisar horario de antidepresivos activadores (a la mañana)"
    }
  ],
  "goals": [
    "Sueño reparador"
  ],
  "alerts": [
    "Quetiapina no como hipnótico de rutina (riesgo metabólico)"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "Verifica el protocolo del hospital; no confirmé una GPC nacional específica."
    },
    "intl": "Maudsley Prescribing Guidelines 2024 · APA · NICE",
    "dif": []
  }
},
{
  "id": "hm-ansiedad",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Otros trastornos",
  "name": "Ansiedad generalizada, TOC y TEPT",
  "aka": "trastorno de ansiedad generalizada toc trastorno obsesivo compulsivo tept estres postraumatico isrs prazosina",
  "page": "Fuente: NICE 2011/2018 · CANMAT 2014",
  "sub": "ISRS/IRSN + psicoterapia específica.",
  "flow": [
    [
      "TAG",
      "ISRS/IRSN + TCC"
    ],
    [
      "TOC",
      "ISRS a dosis altas + exposición con prevención de respuesta"
    ],
    [
      "TEPT",
      "Terapia centrada en trauma ± ISRS"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "TAG",
      "dose": "Escitalopram 10–20 mg/día o sertralina 50–200 mg/día",
      "a": "Venlafaxina 75–225 mg/día; pregabalina 150–600 mg/día; buspirona 15–30 mg/día."
    },
    {
      "d": "TOC",
      "dose": "Fluoxetina 40–80 mg/día o sertralina hasta 200 mg/día; respuesta en 8–12 semanas",
      "a": "Clomipramina 150–250 mg/día (ECG)."
    },
    {
      "d": "TEPT",
      "dose": "Sertralina 50–200 mg/día",
      "n": "Pesadillas: prazosina 1 mg noche → 3–10 mg (evidencia mixta)."
    }
  ],
  "goals": [
    "Reducción de síntomas y funcionalidad"
  ],
  "alerts": [
    "Benzodiazepinas solo por corto tiempo"
  ],
  "rel": [
    "panico",
    "depresion"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "NICE 2011/2018 · CANMAT 2014",
    "dif": []
  }
},
{
  "id": "hm-tdah",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Otros trastornos",
  "name": "TDAH (niño y adulto)",
  "aka": "tdah deficit de atencion hiperactividad metilfenidato atomoxetina",
  "page": "Fuente: NICE 2018 · AAP 2019",
  "sub": "Diagnóstico clínico con información de 2 ambientes.",
  "flow": [
    [
      "Primera línea",
      "Metilfenidato"
    ],
    [
      "Alternativa",
      "Atomoxetina"
    ],
    [
      "Seguimiento",
      "Peso, talla, PA, FC, sueño, apetito"
    ]
  ],
  "criteria": [
    "Antes de estimulantes: antecedente cardíaco personal y familiar, PA y FC."
  ],
  "orders": [
    {
      "d": "Metilfenidato de liberación inmediata",
      "dose": "5 mg c/12 h (mañana y mediodía), subir 5–10 mg/semana (máx 60 mg/día)",
      "a": "Liberación prolongada 18 mg/día → 54–72 mg."
    },
    {
      "d": "Atomoxetina",
      "dose": "0,5 mg/kg/día × 1 semana → 1,2 mg/kg/día (máx 100 mg)",
      "calc": {
        "t": "kg",
        "lo": 0.5,
        "hi": 1.2,
        "unit": "mg",
        "label": "/día",
        "max": 100
      }
    }
  ],
  "goals": [
    "Mejoría funcional escolar o laboral"
  ],
  "alerts": [
    "Vigilar uso indebido de estimulantes"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "NICE 2018 · AAP 2019",
    "dif": []
  }
},
{
  "id": "hm-demencia",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Neuropsiquiatría",
  "name": "Síntomas conductuales y psicológicos en demencia",
  "aka": "demencia agitacion sintomas conductuales donepezilo memantina risperidona",
  "page": "Fuente: NICE 2018 · APA 2016",
  "sub": "Primero descarta delirium, dolor, estreñimiento, retención, infección y fármacos.",
  "flow": [
    [
      "1",
      "Causas médicas y ambientales"
    ],
    [
      "2",
      "Intervenciones no farmacológicas"
    ],
    [
      "Peligro o angustia grave",
      "Antipsicótico a dosis baja y corta"
    ],
    [
      "Base",
      "Inhibidor de colinesterasa ± memantina"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Donepezilo",
      "dose": "5 mg noche × 4–6 semanas → 10 mg",
      "n": "Bradicardia y síntomas GI."
    },
    {
      "d": "Memantina",
      "dose": "5 mg/día → 20 mg/día en 4 semanas"
    },
    {
      "d": "Agitación grave",
      "dose": "Risperidona 0,25–0,5 mg c/12 h (máx 1–2 mg/día) por ≤ 6–12 semanas",
      "n": "Mayor mortalidad y ACV en demencia: consentimiento y revisión."
    },
    {
      "d": "Depresión asociada",
      "dose": "Sertralina 25–50 mg/día"
    }
  ],
  "goals": [
    "Menos angustia con la menor dosis"
  ],
  "alerts": [
    "Demencia por cuerpos de Lewy: sensibilidad extrema a antipsicóticos"
  ],
  "rel": [
    "delirium"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "NICE 2018 · APA 2016",
    "dif": []
  }
},
{
  "id": "hm-discapacidad",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Neuropsiquiatría",
  "name": "Agresividad en discapacidad intelectual o autismo",
  "aka": "discapacidad intelectual autismo agresividad conducta risperidona",
  "page": "Fuente: NICE 2015",
  "sub": "La conducta suele comunicar dolor, malestar o un cambio en el entorno.",
  "flow": [
    [
      "1",
      "Causas médicas (dolor dental, estreñimiento, otitis, reflujo, convulsiones)"
    ],
    [
      "2",
      "Análisis funcional y apoyo conductual"
    ],
    [
      "Refractaria",
      "Risperidona a dosis bajas"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Risperidona",
      "dose": "0,25–0,5 mg/día, titular lento (máx 2–3 mg/día)",
      "a": "Aripiprazol 2–10 mg/día."
    },
    {
      "d": "Revisión periódica y retiro si no hay beneficio"
    }
  ],
  "goals": [
    "Menos conductas agresivas con la menor dosis"
  ],
  "alerts": [
    "Evita polifarmacia sedante"
  ],
  "rel": [
    "agitacion"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "NICE 2015",
    "dif": []
  }
},
{
  "id": "hm-embarazo",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Seguridad de psicofármacos",
  "name": "Psicofármacos en embarazo y lactancia",
  "aka": "psicofarmacos embarazo lactancia sertralina valproato litio antipsicoticos",
  "page": "Fuente: NICE 2020 perinatal · Maudsley 2024",
  "sub": "Balancea el riesgo del fármaco contra el de la enfermedad no tratada.",
  "flow": [
    [
      "Preferidos",
      "Sertralina; antipsicóticos con más datos (quetiapina, olanzapina, haloperidol)"
    ],
    [
      "Evitar",
      "Valproato, carbamazepina"
    ],
    [
      "Litio",
      "Posible con niveles estrechos y eco fetal"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Valproato",
      "n": "Evitar en mujeres en edad fértil sin anticoncepción eficaz (malformaciones y neurodesarrollo)."
    },
    {
      "d": "Litio",
      "n": "Niveles c/4 semanas, semanales al final; suspender o reducir al inicio del parto y revisar posparto."
    },
    {
      "d": "Lactancia",
      "n": "Sertralina y paroxetina con niveles bajos en leche; evitar litio si no hay seguimiento del lactante."
    }
  ],
  "goals": [
    "Madre estable, exposición mínima"
  ],
  "alerts": [
    "Ácido fólico 4–5 mg/día si anticonvulsivantes"
  ],
  "rel": [
    "dmg"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "NICE 2020 perinatal · Maudsley 2024",
    "dif": []
  }
},
{
  "id": "hm-equivalencias",
  "sys": "Salud mental (hospital psiquiátrico)",
  "group": "Seguridad de psicofármacos",
  "name": "Tabla de equivalencias y rangos de antipsicóticos y benzodiazepinas",
  "aka": "equivalencias antipsicoticos clorpromazina benzodiazepinas diazepam rangos dosis",
  "page": "Fuente: Maudsley 2024 · Ashton",
  "sub": "Aproximadas; para cambios cruzados y desmontes.",
  "flow": [
    [
      "Antipsicóticos",
      "Equivalente a clorpromazina 100 mg"
    ],
    [
      "Benzodiazepinas",
      "Equivalente a diazepam 10 mg"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "d": "Antipsicóticos (≈ clorpromazina 100 mg)",
      "dose": "Haloperidol 2 mg · risperidona 1,5 mg · olanzapina 5 mg · quetiapina 75–100 mg · aripiprazol 7,5 mg · clozapina 50 mg"
    },
    {
      "d": "Rangos habituales",
      "dose": "Haloperidol 2–10 · risperidona 2–6 · olanzapina 10–20 · quetiapina 300–800 · aripiprazol 10–30 · clozapina 200–600 mg/día"
    },
    {
      "d": "Benzodiazepinas (≈ diazepam 10 mg)",
      "dose": "Alprazolam 0,5 mg · clonazepam 0,5 mg · lorazepam 1 mg · midazolam 7,5 mg VO"
    }
  ],
  "goals": [
    "Cambios seguros"
  ],
  "alerts": [
    "Son aproximaciones: ajusta por respuesta clínica"
  ],
  "rel": [
    "hm-esquizo",
    "hm-abst-bzd"
  ],
  "g": {
    "co": {
      "n": "Guía nacional por verificar",
      "y": "",
      "st": "na",
      "txt": "No confirmé una GPC nacional vigente; se usan guías internacionales."
    },
    "intl": "Maudsley 2024 · Ashton",
    "dif": []
  }
}
];
