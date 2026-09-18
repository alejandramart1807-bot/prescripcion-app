// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Guide } from "./schema.ts";

/**
 * Guía/evidencia por ficha para las 18 fichas del `const DX = [...]` inicial
 * que no llevan `g` embebido directamente (ver FichaCommon.base en
 * schema.ts). La interfaz original resuelve esto en tiempo de render con
 * `GUIDES[d.id] || d.g`; aquí se preserva la tabla completa, sin fusionarla
 * en las fichas, para que la comparación con el DX de index.html
 * (tools/verify-content.mjs) sea exacta.
 */
export const GUIDES: Record<string, Guide> = {
  "bradi": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "En Colombia se enseña y certifica con el soporte vital cardiovascular avanzado de la AHA."
    },
    "intl": "AHA 2025 (SVCA/ACLS)",
    "dif": [
      "Dopamina y adrenalina están disponibles en todos los niveles; isoproterenol, de forma muy limitada."
    ]
  },
  "taqui": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "Se sigue el algoritmo AHA de taquicardia con pulso."
    },
    "intl": "AHA 2025 (SVCA/ACLS) · ESC 2019 TSV",
    "dif": [
      "Procainamida y flecainida no se consiguen de forma regular: la amiodarona es la opción IV práctica para QRS ancho.",
      "Adenosina en ampollas de 6 mg/2 mL."
    ]
  },
  "fa-inest": {
    "co": {
      "n": "Guías de diagnóstico y tratamiento de la fibrilación auricular, Sociedad Colombiana de Cardiología",
      "y": "2012",
      "st": "old",
      "txt": "Desactualizada; la propia SCC difunde y adopta las guías ESC y AHA más recientes."
    },
    "intl": "ESC 2024 FA · ACC/AHA/ACCP/HRS 2023 FA · AHA 2025 SVCA",
    "dif": [
      "Etomidato y propofol disponibles para la sedación; ketamina es alternativa si hay hipotensión."
    ]
  },
  "fa-24": {
    "co": {
      "n": "Guías de diagnóstico y tratamiento de la fibrilación auricular, Sociedad Colombiana de Cardiología",
      "y": "2012",
      "st": "old",
      "txt": "Desactualizada; la propia SCC difunde y adopta las guías ESC y AHA más recientes."
    },
    "intl": "ESC 2024 FA · ACC/AHA/ACCP/HRS 2023 FA",
    "dif": [
      "Umbral para cardiovertir sin ETE: la ESC 2024 usa 24 h; la ACC/AHA 2023 mantiene 48 h. Aquí se usa el más conservador (24 h).",
      "Riesgo embólico: ESC 2024 usa CHA₂DS₂-VA (sin sexo); ACC/AHA sigue con CHA₂DS₂-VASc.",
      "Flecainida no se comercializa regularmente: propafenona VO es la alternativa en corazón estructuralmente sano. Diltiazem IV de disponibilidad irregular; metoprolol IV sí."
    ]
  },
  "fa-mas24": {
    "co": {
      "n": "Guías de diagnóstico y tratamiento de la fibrilación auricular, Sociedad Colombiana de Cardiología",
      "y": "2012",
      "st": "old",
      "txt": "Desactualizada; la propia SCC difunde y adopta las guías ESC y AHA más recientes."
    },
    "intl": "ESC 2024 FA · ACC/AHA/ACCP/HRS 2023 FA",
    "dif": [
      "Apixabán, rivaroxabán y dabigatrán tienen registro INVIMA; la cobertura varía por EPS.",
      "Warfarina sigue siendo obligatoria en prótesis mecánica y estenosis mitral moderada-grave."
    ]
  },
  "iamcest-icp": {
    "co": {
      "n": "GPC Síndrome coronario agudo, MinSalud · Colciencias · Universidad de Antioquia (GPC No. 17)",
      "y": "2013",
      "st": "old",
      "txt": "Es la guía nacional de referencia, pero no se ha actualizado desde 2013: los esquemas antitrombóticos se complementan con ESC 2023 y ACC/AHA 2025."
    },
    "intl": "ESC 2023 SCA · ACC/AHA 2025 SCA",
    "dif": [
      "Bivalirudina no se comercializa en Colombia (lo señala la propia GPC): la heparina no fraccionada es el anticoagulante estándar en hemodinamia.",
      "Ticagrelor y prasugrel están disponibles; clopidogrel sigue siendo el más accesible en niveles de menor complejidad."
    ]
  },
  "iamcest-tl": {
    "co": {
      "n": "GPC Síndrome coronario agudo, MinSalud · Colciencias · Universidad de Antioquia (GPC No. 17)",
      "y": "2013",
      "st": "old",
      "txt": "Es la guía nacional de referencia, pero no se ha actualizado desde 2013: los esquemas antitrombóticos se complementan con ESC 2023 y ACC/AHA 2025."
    },
    "intl": "ESC 2023 SCA · ACC/AHA 2025 SCA",
    "dif": [
      "En Colombia se dispone de tenecteplasa, alteplasa y estreptoquinasa; la estreptoquinasa aún se usa en hospitales de menor nivel.",
      "Estrategia farmacoinvasiva: todo paciente trombolizado se remite a un centro con hemodinamia."
    ]
  },
  "iamsest": {
    "co": {
      "n": "GPC Síndrome coronario agudo, MinSalud · Colciencias · Universidad de Antioquia (GPC No. 17)",
      "y": "2013",
      "st": "old",
      "txt": "Es la guía nacional de referencia, pero no se ha actualizado desde 2013: los esquemas antitrombóticos se complementan con ESC 2023 y ACC/AHA 2025."
    },
    "intl": "ESC 2023 SCA · ACC/AHA 2025 SCA",
    "dif": [
      "Bivalirudina no disponible; enoxaparina, fondaparinux y heparina no fraccionada sí.",
      "La ESC 2023 no recomienda precarga rutinaria de P2Y12 si la angiografía será temprana; en centros sin hemodinamia y con traslado demorado, la carga suele darse antes de remitir."
    ]
  },
  "he-general": {
    "co": {
      "n": "GPC Hipertensión arterial primaria, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Enfocada en HTA crónica; no desarrolla el manejo IV de las emergencias hipertensivas."
    },
    "intl": "ACC/AHA 2025 HTA · ESC 2024 HTA",
    "dif": [
      "Nicardipino y clevidipino no se consiguen de forma regular en Colombia; labetalol IV tiene disponibilidad variable. En la práctica el eje es nitroprusiato, nitroglicerina, esmolol y labetalol donde lo haya."
    ]
  },
  "he-encef": {
    "co": {
      "n": "GPC Hipertensión arterial primaria, MinSalud",
      "y": "2013",
      "st": "old",
      "txt": "Enfocada en HTA crónica; no desarrolla el manejo IV de las emergencias hipertensivas."
    },
    "intl": "ACC/AHA 2025 HTA · ESC 2024 HTA",
    "dif": [
      "Nicardipino y clevidipino no se consiguen de forma regular en Colombia; labetalol IV tiene disponibilidad variable. En la práctica el eje es nitroprusiato, nitroglicerina, esmolol y labetalol donde lo haya."
    ]
  },
  "he-hic": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC nacional para hemorragia intracerebral."
    },
    "intl": "AHA/ASA 2022 HIC · ESO 2025",
    "dif": [
      "Complejo protrombínico disponible en instituciones de alto nivel; idarucizumab con disponibilidad limitada; andexanet prácticamente no disponible."
    ]
  },
  "he-isq": {
    "co": {
      "n": "GPC Ataque cerebrovascular isquémico agudo, MinSalud",
      "y": "2015",
      "st": "old",
      "txt": "Las metas de PA para trombólisis son las mismas de la AHA; se complementa con la guía AHA/ASA vigente."
    },
    "intl": "AHA/ASA ACV isquémico agudo (vigente) · ESO",
    "dif": [
      "Alteplasa y tenecteplasa disponibles para trombólisis en centros con código ACV."
    ]
  },
  "he-eap": {
    "co": {
      "n": "GPC Falla cardíaca en mayores de 18 años, MinSalud (GPC No. 53)",
      "y": "2016",
      "st": "old",
      "txt": "Anterior a los iSGLT2 y a las guías ESC 2021/2023, con las que se complementa."
    },
    "intl": "ESC 2021/2023 IC · ACC/AHA/HFSA 2022 IC",
    "dif": [
      "La nitroglicerina IV es el vasodilatador más disponible en urgencias colombianas."
    ]
  },
  "he-aorta": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC nacional de disección aórtica."
    },
    "intl": "ACC/AHA 2022 aorta · ESC 2024 aorta",
    "dif": [
      "Esmolol disponible; si no lo hay, metoprolol IV 5 mg c/5 min es la alternativa práctica."
    ]
  },
  "he-sca": {
    "co": {
      "n": "GPC Síndrome coronario agudo, MinSalud · Colciencias · Universidad de Antioquia (GPC No. 17)",
      "y": "2013",
      "st": "old",
      "txt": "Es la guía nacional de referencia, pero no se ha actualizado desde 2013: los esquemas antitrombóticos se complementan con ESC 2023 y ACC/AHA 2025."
    },
    "intl": "ESC 2023 SCA · ACC/AHA 2025 HTA",
    "dif": []
  },
  "he-eclamp": {
    "co": {
      "n": "GPC Complicaciones del embarazo, parto y puerperio, MinSalud (sección trastornos hipertensivos)",
      "y": "2013",
      "st": "ok",
      "txt": "Vigente en Colombia y coherente con ACOG y FLASOG en sulfato de magnesio y antihipertensivos."
    },
    "intl": "ACOG 2020 · FLASOG",
    "dif": [
      "El esquema de sulfato de magnesio con carga de 4 g y mantenimiento de 1 g/h es el estándar en Colombia.",
      "Labetalol, hidralazina y nifedipino VO son las tres opciones de primera línea."
    ]
  },
  "ica": {
    "co": {
      "n": "GPC Falla cardíaca en mayores de 18 años, MinSalud (GPC No. 53)",
      "y": "2016",
      "st": "old",
      "txt": "Anterior a los iSGLT2 y a las guías ESC 2021/2023, con las que se complementa."
    },
    "intl": "ESC 2021 IC + actualización 2023 · ACC/AHA/HFSA 2022 IC",
    "dif": [
      "Dobutamina y noradrenalina son los vasoactivos de urgencias; levosimendán y milrinona quedan para UCI de alto nivel."
    ]
  },
  "tvp": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay GPC del MinSalud para trombosis venosa profunda."
    },
    "intl": "ASH 2020 · CHEST 2021",
    "dif": [
      "Rivaroxabán y apixabán con registro INVIMA; si la EPS demora la entrega, la enoxaparina puente es lo habitual."
    ]
  }
};

/**
 * Segunda línea / alternativa si no hay disponibilidad, por ficha e inicio
 * del nombre de la orden. La interfaz la consulta con altFor(id, name)
 * cuando order.a no viene explícito.
 */
export const ALT: Record<string, Record<string, string>> = {
  "bradi": {
    "Atropina": "Pasa directo a infusión cronotrópica (dopamina o adrenalina) o a marcapasos transcutáneo.",
    "Dopamina": "Adrenalina en infusión (orden siguiente). Isoproterenol 2–10 mcg/min si lo consigues.",
    "Adrenalina": "Dopamina 5–20 mcg/kg/min.",
    "Marcapasos transcutáneo": "Sin marcapasos: mantener infusión cronotrópica y remisión urgente a centro con marcapasos transvenoso."
  },
  "taqui": {
    "Sedoanalgesia": "Ketamina 0,5–1 mg/kg IV (útil si hay hipotensión) o midazolam 1–2 mg IV titulado.",
    "Adenosina": "Verapamilo 2,5–5 mg IV en 2 min o metoprolol 2,5–5 mg IV (si no hay preexcitación ni FEVI reducida).",
    "Metoprolol": "Esmolol 500 mcg/kg en 1 min y 50–300 mcg/kg/min, o verapamilo.",
    "Verapamilo": "Diltiazem 0,25 mg/kg IV o metoprolol IV.",
    "Amiodarona": "Lidocaína 1–1,5 mg/kg IV (repetir 0,5–0,75 mg/kg, máx 3 mg/kg) para TV monomórfica; si falla, cardioversión sincronizada con sedación."
  },
  "fa-inest": {
    "Heparina no fraccionada": "Enoxaparina 1 mg/kg SC (orden siguiente).",
    "o Enoxaparina": "Heparina no fraccionada IV.",
    "Sedoanalgesia": "Ketamina 0,5–1 mg/kg IV o midazolam 1–2 mg IV titulado.",
    "Amiodarona": "Para control de frecuencia: digoxina 0,25–0,5 mg IV."
  },
  "fa-24": {
    "Metoprolol": "Esmolol 500 mcg/kg y 50–300 mcg/kg/min, o verapamilo 5–10 mg IV en 2 min (FEVI conservada).",
    "Diltiazem": "Verapamilo 5–10 mg IV en 2 min o metoprolol IV.",
    "Digoxina": "Amiodarona 150–300 mg IV en 1 h.",
    "Amiodarona (con": "Si no hay amiodarona: control de frecuencia y cardioversión eléctrica programada.",
    "Propafenona": "Flecainida no se consigue regularmente: usa amiodarona o cardioversión eléctrica.",
    "Amiodarona": "Si no hay amiodarona: digoxina para la frecuencia; esmolol si la PA lo permite.",
    "Enoxaparina o anticoagulante": "Dabigatrán 150 mg VO c/12 h (110 mg si ≥ 80 años o alto riesgo de sangrado), o heparina no fraccionada IV."
  },
  "fa-mas24": {
    "Metoprolol": "Esmolol, verapamilo o diltiazem (FEVI conservada).",
    "Digoxina": "Amiodarona IV.",
    "Apixabán": "Rivaroxabán, dabigatrán 150 mg c/12 h o edoxabán 60 mg c/24 h.",
    "o Rivaroxabán": "Apixabán o dabigatrán.",
    "o Enoxaparina": "Heparina no fraccionada IV.",
    "Amiodarona": "Digoxina IV; si no controla, remitir.",
    "Warfarina": "Sin alternativa en prótesis mecánica: enoxaparina 1 mg/kg c/12 h puente hasta INR en meta 2 días seguidos."
  },
  "iamcest-icp": {
    "Ácido acetilsalicílico": "Si no tolera la vía oral: 300 mg vía rectal o acetilsalicilato de lisina IV donde exista. Alergia verdadera: continuar solo con el inhibidor P2Y12.",
    "Ticagrelor": "Prasugrel 60 mg VO o clopidogrel 600 mg VO.",
    "Heparina no fraccionada": "Enoxaparina 0,5 mg/kg IV en bolo.",
    "Atorvastatina": "Rosuvastatina 20–40 mg VO c/24 h.",
    "Nitroglicerina": "Dinitrato de isosorbida 5 mg SL c/5–10 min × 3.",
    "Morfina": "Fentanilo 25–50 mcg IV.",
    "Metoprolol VO": "Carvedilol 6,25 mg VO c/12 h o bisoprolol 2,5 mg VO c/24 h."
  },
  "iamcest-tl": {
    "Ácido acetilsalicílico": "Si no tolera la vía oral: 300 mg vía rectal o acetilsalicilato de lisina IV donde exista. Alergia verdadera: continuar solo con el inhibidor P2Y12.",
    "Tenecteplasa": "Alteplasa o estreptoquinasa (órdenes siguientes).",
    "o Alteplasa": "Tenecteplasa o estreptoquinasa.",
    "o Estreptoquinasa": "Tenecteplasa o alteplasa si están disponibles (preferidas).",
    "Clopidogrel": "Es el único P2Y12 recomendado con fibrinólisis: no sustituir por ticagrelor ni prasugrel en las primeras 24 h.",
    "Enoxaparina (< 75": "Heparina no fraccionada 60 U/kg IV (máx 4000 U) + 12 U/kg/h (máx 1000 U/h) por 24–48 h, o fondaparinux 2,5 mg IV y luego 2,5 mg SC c/24 h (preferido con estreptoquinasa).",
    "Enoxaparina (≥ 75": "Heparina no fraccionada 60 U/kg IV (máx 4000 U) + 12 U/kg/h (máx 1000 U/h), o fondaparinux 2,5 mg SC c/24 h.",
    "Atorvastatina": "Rosuvastatina 20–40 mg VO c/24 h."
  },
  "iamsest": {
    "Ácido acetilsalicílico": "Si no tolera la vía oral: 300 mg vía rectal o acetilsalicilato de lisina IV donde exista. Alergia verdadera: continuar solo con el inhibidor P2Y12.",
    "Inhibidor P2Y12": "Si no hay ticagrelor: clopidogrel 300–600 mg VO.",
    "Enoxaparina": "Fondaparinux o heparina no fraccionada (órdenes siguientes).",
    "Nitroglicerina": "Dinitrato de isosorbida 5 mg SL c/5–10 min × 3.",
    "Metoprolol VO": "Carvedilol 6,25 mg c/12 h o bisoprolol 2,5 mg c/24 h.",
    "Atorvastatina": "Rosuvastatina 20–40 mg VO c/24 h."
  },
  "he-general": {
    "Labetalol": "Esmolol en infusión o metoprolol 5 mg IV c/5–10 min (máx 15 mg).",
    "Nicardipino": "Labetalol, esmolol o nitroprusiato. Hidralazina 10–20 mg IV solo como recurso (respuesta impredecible).",
    "Nitroprusiato": "Nitroglicerina IV (menos potente sobre arteriolas).",
    "Nitroglicerina": "Nitroprusiato IV o dinitrato de isosorbida 5 mg SL.",
    "Esmolol": "Metoprolol 5 mg IV c/5 min (máx 15 mg) o labetalol."
  },
  "he-encef": {
    "Labetalol": "Esmolol en infusión.",
    "o Nicardipino": "Labetalol o esmolol.",
    "o Nitroprusiato": "Último recurso; vigila estado neurológico.",
    "Crisis convulsivas": "Diazepam 10 mg IV lento; si persisten, fenitoína 20 mg/kg IV (máx 50 mg/min)."
  },
  "he-hic": {
    "Labetalol": "Esmolol en infusión o metoprolol 5 mg IV c/5–10 min (máx 15 mg).",
    "o Nicardipino": "Labetalol o esmolol. Nitroprusiato solo como último recurso (↑ PIC).",
    "Reversión si warfarina": "Sin complejo protrombínico: plasma fresco congelado 10–15 mL/kg + vitamina K 10 mg IV."
  },
  "he-isq": {
    "Labetalol": "Esmolol en infusión o hidralazina 10–20 mg IV.",
    "o Nicardipino": "Labetalol, esmolol o nitroprusiato si PAD > 140."
  },
  "he-eap": {
    "Ventilación no invasiva": "Sin VNI: O₂ por máscara con reservorio y preparar intubación si falla.",
    "Nitroglicerina": "Dinitrato de isosorbida 5 mg SL c/5–10 min o nitroprusiato IV.",
    "Furosemida": "Bumetanida 1 mg IV (equivale a 40 mg de furosemida).",
    "Nitroprusiato": "Nitroglicerina en dosis altas."
  },
  "he-aorta": {
    "Esmolol": "Labetalol o metoprolol 5 mg IV c/5 min (máx 15 mg). Si betabloqueador contraindicado: diltiazem o verapamilo IV.",
    "o Labetalol": "Esmolol o metoprolol IV.",
    "Nitroprusiato": "Nitroglicerina IV (menos potente) tras el betabloqueo.",
    "Analgesia": "Morfina 2–4 mg IV si no hay fentanilo, o viceversa."
  },
  "he-sca": {
    "Nitroglicerina": "Dinitrato de isosorbida 5 mg SL c/5–10 min.",
    "Esmolol o metoprolol": "Carvedilol VO si ya está estable."
  },
  "he-eclamp": {
    "Carga": "Sin bomba de infusión (esquema IM de Pritchard): 4 g IV en 20 min + 10 g IM (5 g en cada glúteo), luego 5 g IM c/4 h alternando glúteos.",
    "Mantenimiento": "Sin bomba: esquema IM de Pritchard (orden anterior). Si no hay sulfato de magnesio: diazepam 10 mg IV lento o fenitoína (menos eficaces), y remitir.",
    "Labetalol": "Hidralazina o nifedipino VO.",
    "o Hidralazina": "Labetalol o nifedipino VO.",
    "o Nifedipino": "Labetalol o hidralazina IV."
  },
  "ica": {
    "Furosemida": "Resistencia diurética: añade acetazolamida 500 mg IV c/24 h o hidroclorotiazida 25–50 mg VO. Sin furosemida IV: bumetanida 1 mg IV.",
    "Nitroglicerina": "Nitroprusiato IV o dinitrato de isosorbida 5 mg SL.",
    "Dobutamina": "Milrinona 0,375–0,75 mcg/kg/min o levosimendán 0,05–0,2 mcg/kg/min (UCI).",
    "Noradrenalina": "Dopamina 5–15 mcg/kg/min (más arritmias) o adrenalina 0,05–0,3 mcg/kg/min.",
    "Enoxaparina": "Heparina no fraccionada 5000 U SC c/8–12 h (útil si ClCr < 30)."
  },
  "tvp": {
    "Rivaroxabán": "Apixabán; o dabigatrán 150 mg c/12 h / edoxabán 60 mg c/24 h tras ≥ 5 días de anticoagulación parenteral.",
    "o Apixabán": "Rivaroxabán, o dabigatrán/edoxabán tras 5 días de parenteral.",
    "o Enoxaparina": "Fondaparinux SC c/24 h: 5 mg (< 50 kg), 7,5 mg (50–100 kg), 10 mg (> 100 kg).",
    "o Heparina no fraccionada": "Enoxaparina si ClCr ≥ 30.",
    "Deambulación": ""
  },
  "ehh": {
    "Insulina regular": "Sin bomba de infusión: continúa hidratación (baja la glucosa por sí sola) y remite; análogo rápido SC solo con glucometría horaria."
  },
  "hipoglu": {
    "Glucosa oral": "Sin tabletas: 1 cucharada de azúcar disuelta en agua o 150 mL de gaseosa no dietética."
  },
  "tormenta": {
    "Yodo": "Si hay alergia al yodo: carbonato de litio 300 mg VO c/8 h (vigila niveles)."
  },
  "hda-v": {
    "Omeprazol": "Esomeprazol o pantoprazol 40 mg IV c/12 h.",
    "Lactulosa": "Rifaximina 550 mg c/12 h."
  },
  "panc": {
    "Tromboprofilaxis": "Heparina no fraccionada 5000 U SC c/8–12 h."
  },
  "pbe": {
    "Albúmina 20 %": "Albúmina 25 % en la misma dosis en gramos."
  },
  "shr": {
    "Albúmina 20 %": "Albúmina 25 % en la misma dosis en gramos."
  },
  "cvo": {
    "Tromboprofilaxis": "Heparina no fraccionada 5000 U SC c/8–12 h."
  },
  "rt-hemol": {
    "Vasopresor": "Adrenalina 0,05–0,3 mcg/kg/min."
  },
  "rt-anaf": {
    "Hidrocortisona": "Metilprednisolona 125 mg IV.",
    "Glucagón": "Si no hay glucagón: adrenalina en infusión 0,05–0,3 mcg/kg/min."
  },
  "taco": {
    "Furosemida": "Bumetanida 0,5–1 mg IV."
  },
  "tm": {
    "Calcio": "Cloruro de calcio 10 % 10 mL por vía central."
  },
  "lra": {
    "Furosemida": "Bumetanida 1–2 mg IV."
  },
  "hiperca": {
    "Calcitonina": "Sin calcitonina: SSN + bifosfonato o denosumab (efecto en 2–4 días).",
    "Glucocorticoide": "Hidrocortisona 100 mg IV c/6–8 h."
  },
  "hipoca": {
    "Calcitriol": "Alfacalcidol 0,5–1 mcg/día."
  },
  "hiperk": {
    "Insulina regular": "Sin insulina IV: salbutamol en dosis altas y bicarbonato si hay acidosis, mientras preparas diálisis.",
    "Furosemida": "Bumetanida 1–2 mg IV."
  },
  "hipok": {
    "Sulfato de magnesio": "Hipomagnesemia leve: óxido de magnesio 400 mg VO c/8–12 h."
  },
  "asma": {
    "Sulfato de magnesio": "Sin magnesio o sin respuesta: adrenalina 0,3–0,5 mg IM o terbutalina 0,25 mg SC."
  },
  "epoc": {
    "Salbutamol + ipratropio": "Sin ipratropio: salbutamol solo.",
    "Tromboprofilaxis": "Heparina no fraccionada 5000 U SC c/8–12 h."
  },
  "tep": {
    "Heparina no fraccionada": "Enoxaparina 1 mg/kg c/12 h si no se planea trombólisis.",
    "Noradrenalina": "Adrenalina 0,05–0,3 mcg/kg/min; dobutamina si hay bajo gasto con PA sostenida."
  },
  "hic": {
    "Enoxaparina": "Si pasaron > 8 h: protamina 0,5 mg por cada mg de enoxaparina.",
    "Postrombólisis": "Sin crioprecipitado: concentrado de fibrinógeno o plasma fresco.",
    "Levetiracetam": "Fenitoína 20 mg/kg IV o ácido valproico 40 mg/kg IV.",
    "Tromboprofilaxis": "Heparina no fraccionada 5000 U SC c/8–12 h tras 24–48 h."
  },
  "acvi": {
    "Tenecteplasa": "Alteplasa 0,9 mg/kg (orden anterior)."
  },
  "nf": {
    "Meropenem": "Imipenem 500 mg IV c/6 h.",
    "Bajo riesgo": "Alergia a penicilina: clindamicina 300 mg c/6 h + ciprofloxacino."
  },
  "crotalico": {
    "Antiveneno": "Si falta antiveneno: remisión inmediata y contacto con el INS o la red de antivenenos."
  },
  "atc": {
    "Bicarbonato": "Sin bicarbonato: SSN 3 % 100–200 mL IV (aporte de sodio) y, si está intubado, hiperventilación a pH 7,45–7,55.",
    "Benzodiazepina": "Fenobarbital 15–20 mg/kg IV."
  },
  "bb-tox": {
    "Gluconato de calcio": "Cloruro de calcio 10 % 10–20 mL por vía central."
  },
  "of": {
    "Diazepam": "Midazolam 5–10 mg IV o IM."
  },
  "sepsis": {
    "Noradrenalina": "Adrenalina 0,05–0,5 mcg/kg/min; dopamina solo si no hay otra opción."
  },
  "foco-abd": {
    "Ertapenem": "Meropenem 1 g IV c/8 h."
  },
  "foco-sangre": {
    "+ Equinocandina": "Anidulafungina 200 mg día 1 y 100 mg/día; fluconazol 800 mg carga y 400 mg/día si estable y sin exposición previa a azoles."
  },
  "foco-pulm": {
    "Hidrocortisona": "Metilprednisolona 0,5 mg/kg IV c/12 h por 5 días."
  },
  "foco-uri": {
    "Ertapenem": "Amikacina 15 mg/kg IV c/24 h.",
    "Meropenem": "Imipenem 500 mg IV c/6 h."
  },
  "foco-nd": {
    "Doxiciclina": "Cloranfenicol 50 mg/kg/día IV en 4 dosis si no hay doxiciclina."
  },
  "shock": {
    "Dobutamina": "Milrinona o levosimendán (UCI); adrenalina en dosis bajas."
  },
  "sri": {
    "Ketamina": "Etomidato 0,3 mg/kg.",
    "Etomidato": "Ketamina 1–2 mg/kg.",
    "Rocuronio": "Succinilcolina 1,5 mg/kg si no hay contraindicación.",
    "Succinilcolina": "Rocuronio 1,2 mg/kg."
  },
  "sedacion": {
    "Propofol": "Midazolam en infusión o dexmedetomidina.",
    "Dexmedetomidina": "Propofol en dosis bajas."
  },
  "pcr-fv": {
    "Adrenalina": "Sin acceso IV/IO: 2–2,5 mg por tubo endotraqueal diluida en 10 mL SSN."
  },
  "pcr-aesp": {
    "Adrenalina": "Sin acceso IV/IO: 2–2,5 mg por tubo endotraqueal diluida en 10 mL SSN.",
    "TEP sospechado": "Tenecteplasa en bolo único por peso (esquema de IAM)."
  },
  "post-pcr": {
    "Noradrenalina": "Adrenalina 0,05–0,5 mcg/kg/min."
  }
};

function altForImpl(id: string, name: string): string | undefined {
  const m=ALT[id];if(!m)return "";const k=Object.keys(m).find(k=>name.startsWith(k));return k?m[k]:"";
}
export function altFor(id: string, name: string): string {
  return altForImpl(id, name) ?? "";
}
