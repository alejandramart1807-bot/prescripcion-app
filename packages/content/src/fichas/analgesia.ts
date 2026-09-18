// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "analgesia",
  "sys": "Analgesia",
  "group": "Dolor agudo",
  "name": "Analgesia escalonada del dolor agudo",
  "aka": "analgesia dolor agudo paracetamol dipirona ibuprofeno tramadol morfina escalera",
  "page": "Fuente: OMS · ACEP",
  "sub": "Escoge el escalón según la intensidad (EVA) y ajusta a riñón, hígado, sangrado y edad.",
  "flow": [
    [
      "Leve (EVA 1–3)",
      "Paracetamol o dipirona ± AINE"
    ],
    [
      "Moderado (4–6)",
      "+ opioide débil"
    ],
    [
      "Severo (7–10)",
      "Opioide fuerte IV titulado"
    ],
    [
      "Siempre",
      "Reevalúa en 30–60 min"
    ]
  ],
  "criteria": [
    "Evita AINE en ERC, IC descompensada, sangrado GI, anticoagulación, embarazo del 3.er trimestre.",
    "Paracetamol máx 4 g/día (2–3 g en hepatopatía, alcoholismo o desnutrición)."
  ],
  "orders": [
    {
      "cat": "En urgencias"
    },
    {
      "d": "Dipirona",
      "dose": "1–2 g IV lento c/6–8 h",
      "a": "Paracetamol 1 g IV/VO c/6 h."
    },
    {
      "d": "Ketorolaco",
      "dose": "15–30 mg IV/IM c/6–8 h (máx 5 días; 15 mg si > 65 años o < 50 kg)",
      "a": "Diclofenaco 75 mg IM dosis única."
    },
    {
      "d": "Tramadol",
      "dose": "50–100 mg IV lento c/6–8 h (máx 400 mg/día)",
      "n": "Da antiemético; evita con ISRS o epilepsia."
    },
    {
      "d": "Morfina",
      "dose": "0,05–0,1 mg/kg IV, repetir 2–3 mg c/5–10 min hasta control",
      "calc": {
        "t": "kg",
        "lo": 0.05,
        "hi": 0.1,
        "unit": "mg"
      },
      "a": "Hidromorfona 0,5–1 mg IV o fentanilo 0,5–1 mcg/kg IV."
    },
    {
      "cat": "Fórmula para la casa"
    },
    {
      "d": "Paracetamol",
      "dose": "500 mg–1 g VO c/6–8 h"
    },
    {
      "d": "Ibuprofeno",
      "dose": "400–600 mg VO c/8 h con comida por 3–5 días",
      "a": "Naproxeno 250–500 mg c/12 h."
    },
    {
      "d": "Tramadol (dolor moderado)",
      "dose": "50 mg VO c/8 h por máx 3–5 días",
      "a": "Acetaminofén + codeína 325/30 mg c/6–8 h."
    }
  ],
  "goals": [
    "EVA ≤ 3 o reducción ≥ 50 %"
  ],
  "alerts": [
    "Opioides: prescribe por pocos días y con laxante",
    "Naloxona disponible con opioides IV"
  ],
  "rel": [
    "c-mme"
  ],
  "g": {
    "co": {
      "n": "Sin guía de práctica clínica del MinSalud",
      "y": "",
      "st": "none",
      "txt": "No hay guía nacional específica; se siguen las guías internacionales."
    },
    "intl": "OMS · ACEP · revisiones de analgesia en urgencias",
    "dif": [
      "La dipirona es de uso amplio en Colombia; vigila agranulocitosis e hipotensión con la vía IV rápida."
    ]
  }
}
];
