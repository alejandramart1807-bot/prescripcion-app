// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "reanimacion",
  "sys": "Admisión del paciente grave",
  "group": "Sala de reanimación",
  "name": "Paciente grave en sala de reanimación (ABCDE + MOV)",
  "aka": "shock room reanimacion abcde mov monitoreo oxigeno vena ingreso paciente grave",
  "page": "Fuente: AHA 2025 SVCA · ATLS 11.ª ed.",
  "sub": "Primer contacto con el paciente grave: define si hay pulso y ejecuta ABCDE y MOV al mismo tiempo.",
  "flow": [
    [
      "0 s",
      "¿Responde y tiene pulso? Si no: ficha de PCR"
    ],
    [
      "Simultáneo",
      "ABCDE + monitoreo, oxígeno, vena + ECG"
    ],
    [
      "Reevalúa",
      "Después de cada intervención"
    ],
    [
      "Define",
      "Diagnóstico probable → su ficha"
    ]
  ],
  "criteria": [
    "A: vía aérea permeable (protección cervical si trauma). B: FR, SatO₂, trabajo respiratorio. C: pulso, PA, llenado capilar, sangrado. D: Glasgow, pupilas, glucometría. E: exposición y temperatura.",
    "Hipoxia, hipotensión e hipoglucemia son causas reversibles de alteración de conciencia: corrígelas antes de sedar."
  ],
  "orders": [
    {
      "cat": "MOV"
    },
    {
      "d": "Monitoreo continuo",
      "dose": "PA c/5–15 min, FC, SatO₂, trazado ECG, temperatura, glucometría",
      "n": "ECG de 12 derivaciones en los primeros 10 min si hay dolor torácico, síncope o arritmia."
    },
    {
      "d": "Oxígeno si SatO₂ < 94 %",
      "dose": "Cánula 1–6 L/min · Venturi 24–50 % · máscara con reservorio 10–15 L/min",
      "n": "Meta 94–98 % (88–92 % si EPOC con retención de CO₂).",
      "a": "Si no mejora: cánula de alto flujo, VNI o intubación (ficha SRI)."
    },
    {
      "d": "Dos accesos venosos ≥ 18 G",
      "n": "Con el primer acceso toma los laboratorios.",
      "a": "Sin acceso en 90 s en paro o shock: vía intraósea (tibia proximal o húmero)."
    },
    {
      "d": "Laboratorios iniciales",
      "n": "Hemograma, electrolitos, creatinina, glucosa, gases con lactato; según contexto troponina, hemoclasificación, prueba de embarazo, tóxicos."
    },
    {
      "cat": "Si hay hipoperfusión o hipoglucemia"
    },
    {
      "d": "Cristaloide en bolo",
      "dose": "Lactato de Ringer o SSN 0,9 % 500 mL en 15–30 min y reevaluar",
      "n": "En shock séptico: 30 mL/kg en las primeras 3 h.",
      "calc": {
        "t": "kg",
        "lo": 30,
        "hi": 30,
        "unit": "mL",
        "label": "30 mL/kg ="
      },
      "a": "Sin Lactato de Ringer: SSN 0,9 % (vigila hipercloremia)."
    },
    {
      "d": "Dextrosa si glucometría < 70 mg/dL",
      "dose": "DAD 10 % 150–250 mL IV en 10–15 min o dextrosa 50 % 50 mL",
      "n": "Tiamina 100–200 mg IV antes o junto con la glucosa si alcoholismo o desnutrición.",
      "a": "Sin acceso venoso: glucagón 1 mg IM o SC."
    }
  ],
  "goals": [
    "SatO₂ 94–98 %",
    "PAM ≥ 65 mmHg",
    "Glucemia > 70 mg/dL",
    "Diagnóstico sindromático en los primeros minutos"
  ],
  "alerts": [
    "Sin pulso: inicia RCP de inmediato",
    "Paciente que se deteriora: vuelve a la A"
  ],
  "rel": [
    "c-glasgow",
    "c-news2",
    "r-signos"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional; en Colombia se enseña con SVCA de la AHA y ATLS."
    },
    "intl": "AHA 2025 SVCA · ATLS 11.ª ed.",
    "dif": []
  }
}
];
