// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "orzuelo",
  "sys": "Oftalmología",
  "group": "Párpado",
  "name": "Orzuelo",
  "aka": "orzuelo parpado chalazion",
  "page": "Fuente: AAO",
  "sub": "Nódulo doloroso, eritematoso en el borde palpebral.",
  "flow": [
    [
      "1",
      "Compresas tibias"
    ],
    [
      "2",
      "Higiene palpebral"
    ],
    [
      "> 2 semanas o celulitis",
      "Remitir"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Compresas tibias",
      "dose": "10–15 min 4 veces al día"
    },
    {
      "d": "Higiene palpebral",
      "dose": "Champú neutro diluido 2 veces al día"
    },
    {
      "d": "Antibiótico tópico solo si blefaritis o drenaje",
      "dose": "Ungüento de eritromicina o tobramicina c/12 h por 7 días"
    }
  ],
  "goals": [
    "Resolución en 1–2 semanas"
  ],
  "alerts": [
    "No exprimir",
    "Celulitis preseptal: antibiótico oral"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO",
    "dif": []
  }
},
{
  "id": "conj-viral",
  "sys": "Oftalmología",
  "group": "Conjuntivitis",
  "name": "Conjuntivitis viral",
  "aka": "conjuntivitis viral ojo rojo adenovirus",
  "page": "Fuente: AAO PPP 2023",
  "sub": "Ojo rojo con secreción acuosa, sensación de arena, adenopatía preauricular; muy contagiosa.",
  "flow": [
    [
      "1",
      "Sintomático"
    ],
    [
      "2",
      "Higiene"
    ],
    [
      "Alarma",
      "Dolor, fotofobia, baja visión: oftalmología"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Lágrimas artificiales",
      "dose": "1–2 gotas c/4–6 h"
    },
    {
      "d": "Compresas frías",
      "dose": "3–4 veces al día"
    },
    {
      "d": "Higiene",
      "n": "Lavado de manos, toallas propias; incapacidad 7–10 días si hay contacto con público."
    }
  ],
  "goals": [
    "Resolución en 1–3 semanas"
  ],
  "alerts": [
    "No antibiótico ni corticoide tópico sin oftalmólogo"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO PPP 2023",
    "dif": []
  }
},
{
  "id": "conj-bact",
  "sys": "Oftalmología",
  "group": "Conjuntivitis",
  "name": "Conjuntivitis bacteriana",
  "aka": "conjuntivitis bacteriana ojo rojo secrecion purulenta",
  "page": "Fuente: AAO PPP 2023",
  "sub": "Ojo rojo con secreción purulenta y párpados pegados al despertar.",
  "flow": [
    [
      "1",
      "Antibiótico tópico 5–7 días"
    ],
    [
      "Hiperaguda",
      "Gonococo: sistémico y oftalmología"
    ],
    [
      "Usuario de lentes",
      "Cobertura de Pseudomonas"
    ]
  ],
  "criteria": [],
  "orders": [
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Tobramicina 0,3 % gotas",
      "dose": "1–2 gotas c/6 h por 5–7 días",
      "a": "Moxifloxacino 0,5 % c/8 h (usuario de lentes); polimixina-trimetoprim c/6 h."
    },
    {
      "d": "Limpieza de secreciones con SSN"
    }
  ],
  "goals": [
    "Mejoría en 2–3 días"
  ],
  "alerts": [
    "Retira lentes de contacto"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "AAO PPP 2023",
    "dif": []
  }
}
];
