// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "tetanos",
  "sys": "Profilaxis",
  "group": "Profilaxis",
  "name": "Profilaxis antitetánica en heridas",
  "aka": "tetanos profilaxis herida vacuna td inmunoglobulina",
  "page": "Fuente: Guía colombiana · CDC/ACIP",
  "sub": "Depende del tipo de herida y del esquema de vacunación.",
  "flow": [
    [
      "Herida limpia menor",
      "Td si < 3 dosis o última > 10 años"
    ],
    [
      "Herida tetanígena",
      "Td si < 3 dosis o última > 5 años"
    ],
    [
      "+ < 3 dosis o desconocido",
      "+ inmunoglobulina"
    ]
  ],
  "criteria": [
    "Tetanígena: contaminada con tierra o heces, punzante, avulsión, quemadura, mordedura, necrosis, > 6 h de evolución."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Toxoide tetánico-diftérico (Td)",
      "dose": "0,5 mL IM",
      "n": "Completa el esquema de 3 dosis si estaba incompleto."
    },
    {
      "d": "Inmunoglobulina antitetánica humana (herida tetanígena + < 3 dosis o desconocido)",
      "dose": "250 UI IM en sitio distinto a la vacuna (500 UI si > 24 h o muy contaminada)",
      "a": "Antitoxina tetánica equina según inserto y protocolo institucional si no hay humana."
    },
    {
      "d": "Lavado y desbridamiento de la herida"
    }
  ],
  "goals": [
    "Esquema completo"
  ],
  "alerts": [
    "Embarazo: Tdap entre semanas 20 y 36"
  ],
  "g": {
    "co": {
      "n": "Lineamientos del Programa Ampliado de Inmunizaciones (PAI), MinSalud",
      "y": "",
      "st": "ok",
      "txt": "Definen el esquema de Td en adultos."
    },
    "intl": "CDC/ACIP",
    "dif": [
      "La inmunoglobulina humana no siempre está disponible; en algunos lugares se usa antitoxina equina."
    ]
  }
}
];
