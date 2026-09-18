// AUTOGENERADO por tools/extract-content.mjs a partir de index.html.
// No editar a mano: los cambios se pierden en la próxima extracción.
// Para modificar contenido clínico, edita index.html y vuelve a correr:
//   node tools/extract-content.mjs && node tools/verify-content.mjs

import type { Ficha } from "../schema.ts";

export const FICHAS: Ficha[] = [
{
  "id": "r-signos",
  "sys": "Valores de referencia",
  "group": "Clínicos",
  "name": "Signos vitales del adulto (y efecto de la altura)",
  "aka": "signos vitales frecuencia cardiaca respiratoria presion saturacion temperatura altura frecuencia cardíaca frecuencia respiratoria presión arterial sato₂ nivel del mar sato₂ en medellín (~1500 m) sato₂ en bogotá (~2600 m) temperatura diuresis",
  "page": "Referencia",
  "sub": "Adulto en reposo.",
  "notes": [
    "Los valores en altura son aproximados: usa los de tu institución."
  ],
  "rows": [
    [
      "Frecuencia cardíaca",
      "60–100 lpm",
      "< 50 bradicardia · > 100 taquicardia"
    ],
    [
      "Frecuencia respiratoria",
      "12–20 rpm",
      "≥ 22: alerta (qSOFA)"
    ],
    [
      "Presión arterial",
      "< 120/80 mmHg",
      "PAM ≥ 65 para perfusión"
    ],
    [
      "SatO₂ nivel del mar",
      "≥ 94 %",
      "EPOC con retención: 88–92 %"
    ],
    [
      "SatO₂ en Medellín (~1500 m)",
      "≈ 93–97 %",
      "Aproximado"
    ],
    [
      "SatO₂ en Bogotá (~2600 m)",
      "≈ 90–94 %",
      "Aproximado"
    ],
    [
      "Temperatura",
      "36,1–37,2 °C",
      "Fiebre ≥ 38,0 °C · hipotermia < 35 °C"
    ],
    [
      "Diuresis",
      "0,5–1 mL/kg/h",
      "Oliguria < 0,5 mL/kg/h o < 400 mL/día"
    ]
  ]
},
{
  "id": "r-ped-signos",
  "sys": "Valores de referencia",
  "group": "Clínicos",
  "name": "Signos vitales pediátricos por edad",
  "aka": "signos vitales pediatricos frecuencia cardiaca respiratoria presion niño neonato lactante hipotension peso estimado neonato (0–28 días) lactante (1–12 meses) 1–2 años 3–5 años 6–11 años 12–15 años peso estimado 1–10 años glucosa neonatal",
  "page": "Referencia",
  "sub": "Despierto, en reposo (PALS 2020, aproximados).",
  "notes": [],
  "rows": [
    [
      "Neonato (0–28 días)",
      "FC 100–205 · FR 30–53 · PAS 60–84",
      "Hipotensión: PAS < 60"
    ],
    [
      "Lactante (1–12 meses)",
      "FC 100–180 · FR 30–53 · PAS 72–104",
      "Hipotensión: PAS < 70"
    ],
    [
      "1–2 años",
      "FC 98–140 · FR 22–37 · PAS 86–106",
      "Hipotensión: PAS < 70 + 2 × edad"
    ],
    [
      "3–5 años",
      "FC 80–120 · FR 20–28 · PAS 89–112",
      "Hipotensión: PAS < 70 + 2 × edad"
    ],
    [
      "6–11 años",
      "FC 75–118 · FR 18–25 · PAS 97–115",
      "Hipotensión: PAS < 70 + 2 × edad (hasta 10 años)"
    ],
    [
      "12–15 años",
      "FC 60–100 · FR 12–20 · PAS 110–131",
      "Hipotensión: PAS < 90"
    ],
    [
      "Peso estimado 1–10 años",
      "(edad + 4) × 2 kg",
      "Usa el peso real cuando lo tengas"
    ],
    [
      "Glucosa neonatal",
      "> 45–50 mg/dL",
      "Ver ficha de hipoglucemia neonatal"
    ]
  ]
},
{
  "id": "r-hemograma",
  "sys": "Valores de referencia",
  "group": "Hematología",
  "name": "Hemograma del adulto",
  "aka": "hemograma hemoglobina hematocrito leucocitos plaquetas vcm neutrofilos linfocitos reticulocitos vsg hemoglobina hematocrito vcm hcm / chcm ade (rdw) leucocitos neutrófilos linfocitos eosinófilos plaquetas reticulocitos vsg",
  "page": "Referencia",
  "sub": "Rangos aproximados; en altura la hemoglobina es mayor.",
  "rel": [
    "mi-anemia"
  ],
  "notes": [],
  "rows": [
    [
      "Hemoglobina",
      "H 13,5–17,5 · M 12–15,5 g/dL",
      "Anemia OMS: H < 13 · M < 12 · embarazo < 11"
    ],
    [
      "Hematocrito",
      "H 41–53 % · M 36–46 %",
      ""
    ],
    [
      "VCM",
      "80–100 fL",
      "< 80 microcitosis · > 100 macrocitosis"
    ],
    [
      "HCM / CHCM",
      "27–33 pg / 32–36 g/dL",
      ""
    ],
    [
      "ADE (RDW)",
      "11,5–14,5 %",
      "Alto en ferropenia"
    ],
    [
      "Leucocitos",
      "4500–11 000 /µL",
      ""
    ],
    [
      "Neutrófilos",
      "1800–7700 /µL",
      "< 500 neutropenia grave"
    ],
    [
      "Linfocitos",
      "1000–4800 /µL",
      ""
    ],
    [
      "Eosinófilos",
      "0–500 /µL",
      "> 500 eosinofilia"
    ],
    [
      "Plaquetas",
      "150 000–450 000 /µL",
      "Ver umbrales de transfusión"
    ],
    [
      "Reticulocitos",
      "0,5–2,5 %",
      "Índice reticulocitario > 2: médula responde"
    ],
    [
      "VSG",
      "H < 20 · M < 30 mm/h",
      "Aprox. edad/2 (H), (edad + 10)/2 (M)"
    ]
  ]
},
{
  "id": "r-hemo-ped",
  "sys": "Valores de referencia",
  "group": "Hematología",
  "name": "Hemoglobina pediátrica por edad",
  "aka": "hemoglobina pediatrica anemia niño lactante neonato neonato a término 2 meses (nadir fisiológico) 6 meses–5 años 5–11 años 12–14 años > 15 años",
  "page": "Referencia",
  "sub": "Límite inferior aproximado para definir anemia.",
  "notes": [],
  "rows": [
    [
      "Neonato a término",
      "14–24 g/dL",
      ""
    ],
    [
      "2 meses (nadir fisiológico)",
      "9–14 g/dL",
      ""
    ],
    [
      "6 meses–5 años",
      "≥ 11 g/dL (OMS)",
      ""
    ],
    [
      "5–11 años",
      "≥ 11,5 g/dL",
      ""
    ],
    [
      "12–14 años",
      "≥ 12 g/dL",
      ""
    ],
    [
      "> 15 años",
      "Valores de adulto",
      ""
    ]
  ]
},
{
  "id": "r-coag",
  "sys": "Valores de referencia",
  "group": "Hematología",
  "name": "Coagulación y anticoagulación",
  "aka": "coagulacion tp inr ttpa fibrinogeno dimero d anti xa tp inr ttpa fibrinógeno dímero d anti-xa (hbpm, 4 h postdosis)",
  "page": "Referencia",
  "sub": "El TTPa varía entre laboratorios.",
  "rel": [
    "mi-reversion"
  ],
  "notes": [],
  "rows": [
    [
      "TP",
      "11–13,5 s",
      ""
    ],
    [
      "INR",
      "0,8–1,2",
      "Meta con warfarina 2–3 (2,5–3,5 prótesis mitral)"
    ],
    [
      "TTPa",
      "25–35 s",
      "HNF terapéutica: 1,5–2,5 veces el control"
    ],
    [
      "Fibrinógeno",
      "200–400 mg/dL",
      "< 150–200 en sangrado: crioprecipitado"
    ],
    [
      "Dímero D",
      "< 500 ng/mL FEU",
      "> 50 años: punto de corte = edad × 10"
    ],
    [
      "Anti-Xa (HBPM, 4 h postdosis)",
      "Terapéutico 0,5–1,0 UI/mL · profiláctico 0,2–0,5",
      ""
    ]
  ]
},
{
  "id": "r-electrolitos",
  "sys": "Valores de referencia",
  "group": "Química",
  "name": "Electrolitos y química básica",
  "aka": "electrolitos sodio potasio cloro bicarbonato calcio ionico magnesio fosforo glucosa osmolalidad lactato acido urico brecha anionica sodio potasio cloro bicarbonato brecha aniónica calcio total calcio iónico magnesio fósforo glucosa en ayunas osmolalidad sérica lactato ácido úrico",
  "page": "Referencia",
  "sub": "Adulto.",
  "rel": [
    "mi-electrolitos"
  ],
  "notes": [],
  "rows": [
    [
      "Sodio",
      "135–145 mEq/L",
      ""
    ],
    [
      "Potasio",
      "3,5–5,0 mEq/L",
      "≥ 6,5 o cambios ECG: emergencia"
    ],
    [
      "Cloro",
      "98–106 mEq/L",
      ""
    ],
    [
      "Bicarbonato",
      "22–28 mEq/L",
      ""
    ],
    [
      "Brecha aniónica",
      "8–12 mEq/L",
      "Corrige por albúmina"
    ],
    [
      "Calcio total",
      "8,5–10,5 mg/dL",
      "Corrige por albúmina"
    ],
    [
      "Calcio iónico",
      "1,12–1,32 mmol/L",
      ""
    ],
    [
      "Magnesio",
      "1,7–2,2 mg/dL",
      ""
    ],
    [
      "Fósforo",
      "2,5–4,5 mg/dL",
      ""
    ],
    [
      "Glucosa en ayunas",
      "70–99 mg/dL",
      "100–125 alterada · ≥ 126 diabetes"
    ],
    [
      "Osmolalidad sérica",
      "275–295 mOsm/kg",
      ""
    ],
    [
      "Lactato",
      "< 2 mmol/L",
      "≥ 4: hipoperfusión grave"
    ],
    [
      "Ácido úrico",
      "H 3,4–7 · M 2,4–6 mg/dL",
      ""
    ]
  ]
},
{
  "id": "r-renal",
  "sys": "Valores de referencia",
  "group": "Química",
  "name": "Función renal y orina de 24 h",
  "aka": "creatinina bun urea tfg albuminuria proteinuria relacion albumina creatinina creatinina bun bun/creatinina tfg albúmina/creatinina urinaria proteinuria 24 h fena",
  "page": "Referencia",
  "sub": "Clasificación KDIGO.",
  "rel": [
    "mi-lra"
  ],
  "notes": [],
  "rows": [
    [
      "Creatinina",
      "H 0,7–1,3 · M 0,6–1,1 mg/dL",
      ""
    ],
    [
      "BUN",
      "7–20 mg/dL",
      "Urea = BUN × 2,14"
    ],
    [
      "BUN/creatinina",
      "10–20",
      "> 20: prerrenal o sangrado digestivo alto"
    ],
    [
      "TFG",
      "≥ 90 mL/min/1,73 m²",
      "G3a 45–59 · G3b 30–44 · G4 15–29 · G5 < 15"
    ],
    [
      "Albúmina/creatinina urinaria",
      "< 30 mg/g (A1)",
      "A2 30–300 · A3 > 300"
    ],
    [
      "Proteinuria 24 h",
      "< 150 mg",
      "> 3,5 g: rango nefrótico"
    ],
    [
      "FENa",
      "< 1 % prerrenal",
      "> 2 % necrosis tubular"
    ]
  ]
},
{
  "id": "r-hepatico",
  "sys": "Valores de referencia",
  "group": "Química",
  "name": "Perfil hepático y pancreático",
  "aka": "transaminasas ast alt fosfatasa alcalina ggt bilirrubina albumina amilasa lipasa amonio ldh ast alt fosfatasa alcalina ggt bilirrubina total bilirrubina directa albúmina proteínas totales amilasa lipasa ldh amonio",
  "page": "Referencia",
  "sub": "Varían entre laboratorios.",
  "rel": [
    "mi-cirrosis"
  ],
  "notes": [],
  "rows": [
    [
      "AST",
      "10–40 U/L",
      ""
    ],
    [
      "ALT",
      "7–45 U/L",
      "R = (ALT/LSN)/(FA/LSN): > 5 hepatocelular · < 2 colestásico"
    ],
    [
      "Fosfatasa alcalina",
      "44–147 U/L",
      "Alta en embarazo y crecimiento"
    ],
    [
      "GGT",
      "9–48 U/L",
      ""
    ],
    [
      "Bilirrubina total",
      "0,3–1,2 mg/dL",
      ""
    ],
    [
      "Bilirrubina directa",
      "< 0,3 mg/dL",
      ""
    ],
    [
      "Albúmina",
      "3,5–5,0 g/dL",
      ""
    ],
    [
      "Proteínas totales",
      "6,0–8,3 g/dL",
      ""
    ],
    [
      "Amilasa",
      "30–110 U/L",
      ""
    ],
    [
      "Lipasa",
      "< 60 U/L (según ensayo)",
      "> 3 veces el límite: pancreatitis"
    ],
    [
      "LDH",
      "140–280 U/L",
      ""
    ],
    [
      "Amonio",
      "15–45 µmol/L",
      "No se requiere para diagnosticar encefalopatía"
    ]
  ]
},
{
  "id": "r-gases",
  "sys": "Valores de referencia",
  "group": "Química",
  "name": "Gases arteriales y venosos (nivel del mar y altura)",
  "aka": "gases arteriales ph paco2 pao2 hco3 exceso de base pafi gases venosos saturacion venosa altura bogota medellin ph paco₂ nivel del mar hco₃⁻ nivel del mar pao₂ nivel del mar exceso de base pao₂/fio₂ medellín (~1500 m) bogotá (~2600 m) gas venoso svco₂",
  "page": "Referencia",
  "sub": "En altura bajan PaO₂, PaCO₂ y HCO₃⁻.",
  "notes": [
    "Compensación esperada: acidosis metabólica → Winter; acidosis respiratoria aguda ↑ HCO₃⁻ 1 por cada 10 de PaCO₂ (crónica 3,5)."
  ],
  "rows": [
    [
      "pH",
      "7,35–7,45",
      ""
    ],
    [
      "PaCO₂ nivel del mar",
      "35–45 mmHg",
      ""
    ],
    [
      "HCO₃⁻ nivel del mar",
      "22–26 mEq/L",
      ""
    ],
    [
      "PaO₂ nivel del mar",
      "80–100 mmHg",
      ""
    ],
    [
      "Exceso de base",
      "−2 a +2",
      ""
    ],
    [
      "PaO₂/FiO₂",
      "> 400",
      "SDRA: ≤ 300 leve · ≤ 200 moderado · ≤ 100 grave"
    ],
    [
      "Medellín (~1500 m)",
      "PaO₂ ≈ 70–85 · PaCO₂ ≈ 32–38 · HCO₃⁻ ≈ 20–24",
      "Aproximados"
    ],
    [
      "Bogotá (~2600 m)",
      "PaO₂ ≈ 60–72 · PaCO₂ ≈ 28–34 · HCO₃⁻ ≈ 19–23",
      "Aproximados"
    ],
    [
      "Gas venoso",
      "pH 7,31–7,41 · PvCO₂ 41–51 mmHg",
      "El pH venoso ≈ arterial − 0,03"
    ],
    [
      "SvcO₂",
      "> 70 %",
      ""
    ]
  ]
},
{
  "id": "r-cardio",
  "sys": "Valores de referencia",
  "group": "Marcadores",
  "name": "Marcadores cardíacos",
  "aka": "troponina ck ck-mb bnp nt-probnp marcadores cardiacos troponina t ultrasensible troponina i ultrasensible ck total ck-mb bnp nt-probnp (agudo)",
  "page": "Referencia",
  "sub": "La troponina depende del ensayo: usa el percentil 99 de tu laboratorio.",
  "notes": [],
  "rows": [
    [
      "Troponina T ultrasensible",
      "< 14 ng/L (p99)",
      "Algoritmo 0/1 h o 0/2 h según ensayo"
    ],
    [
      "Troponina I ultrasensible",
      "Según ensayo (con cortes por sexo)",
      ""
    ],
    [
      "CK total",
      "30–200 U/L",
      "> 5 veces: rabdomiólisis"
    ],
    [
      "CK-MB",
      "< 5 ng/mL",
      ""
    ],
    [
      "BNP",
      "< 100 pg/mL",
      "IC aguda improbable"
    ],
    [
      "NT-proBNP (agudo)",
      "< 300 pg/mL descarta",
      "IC probable: > 450 (< 50 años), > 900 (50–75), > 1800 (> 75)"
    ]
  ]
},
{
  "id": "r-inflamacion",
  "sys": "Valores de referencia",
  "group": "Marcadores",
  "name": "Inflamación e infección",
  "aka": "pcr proteina c reactiva procalcitonina ferritina vsg pcr procalcitonina ferritina vsg",
  "page": "Referencia",
  "sub": "",
  "notes": [],
  "rows": [
    [
      "PCR",
      "< 5 mg/L (0,5 mg/dL)",
      ""
    ],
    [
      "Procalcitonina",
      "< 0,1 ng/mL",
      "0,25–0,5 posible · > 0,5 bacteriana probable · > 2 sepsis probable"
    ],
    [
      "Ferritina",
      "H 24–336 · M 11–307 ng/mL",
      "Reactante de fase aguda"
    ],
    [
      "VSG",
      "H < 20 · M < 30 mm/h",
      ""
    ]
  ]
},
{
  "id": "r-metabolico",
  "sys": "Valores de referencia",
  "group": "Endocrino y metabólico",
  "name": "Glucosa, HbA1c y lípidos",
  "aka": "hba1c glucosa diabetes prediabetes colesterol ldl hdl trigliceridos glucosa en ayunas ptog 75 g a 2 h hba1c colesterol total ldl hdl triglicéridos",
  "page": "Referencia",
  "sub": "Criterios ADA 2026.",
  "rel": [
    "mi-dm"
  ],
  "notes": [],
  "rows": [
    [
      "Glucosa en ayunas",
      "< 100 mg/dL",
      "100–125 prediabetes · ≥ 126 diabetes"
    ],
    [
      "PTOG 75 g a 2 h",
      "< 140 mg/dL",
      "140–199 prediabetes · ≥ 200 diabetes"
    ],
    [
      "HbA1c",
      "< 5,7 %",
      "5,7–6,4 prediabetes · ≥ 6,5 diabetes"
    ],
    [
      "Colesterol total",
      "< 200 mg/dL",
      ""
    ],
    [
      "LDL",
      "Según riesgo",
      "< 100 general · < 70 alto · < 55 muy alto"
    ],
    [
      "HDL",
      "H > 40 · M > 50 mg/dL",
      ""
    ],
    [
      "Triglicéridos",
      "< 150 mg/dL",
      "> 1000: riesgo de pancreatitis"
    ]
  ]
},
{
  "id": "r-endocrino",
  "sys": "Valores de referencia",
  "group": "Endocrino y metabólico",
  "name": "Tiroides y otras hormonas",
  "aka": "tsh t4 libre t3 cortisol pth vitamina d prolactina testosterona hcg tsh t4 libre t3 total cortisol 8 am pth 25-oh vitamina d prolactina testosterona total (hombre) β-hcg",
  "page": "Referencia",
  "sub": "",
  "rel": [
    "mi-tiroides"
  ],
  "notes": [],
  "rows": [
    [
      "TSH",
      "0,4–4,0 mUI/L",
      ""
    ],
    [
      "T4 libre",
      "0,8–1,8 ng/dL",
      ""
    ],
    [
      "T3 total",
      "80–200 ng/dL",
      ""
    ],
    [
      "Cortisol 8 AM",
      "5–25 µg/dL",
      "< 3 insuficiencia suprarrenal probable · > 15–18 la descarta"
    ],
    [
      "PTH",
      "10–65 pg/mL",
      ""
    ],
    [
      "25-OH vitamina D",
      "30–100 ng/mL",
      "< 20 deficiencia"
    ],
    [
      "Prolactina",
      "M < 25 · H < 15 ng/mL",
      ""
    ],
    [
      "Testosterona total (hombre)",
      "300–1000 ng/dL",
      "Muestra matinal"
    ],
    [
      "β-hCG",
      "< 5 mUI/mL negativa",
      ""
    ]
  ]
},
{
  "id": "r-hierro",
  "sys": "Valores de referencia",
  "group": "Hematología",
  "name": "Hierro, B12, folato y hemólisis",
  "aka": "hierro ferritina transferrina saturacion b12 folato haptoglobina hierro sérico tibc saturación de transferrina ferritina vitamina b12 folato haptoglobina",
  "page": "Referencia",
  "sub": "",
  "rel": [
    "mi-anemia"
  ],
  "notes": [],
  "rows": [
    [
      "Hierro sérico",
      "60–170 µg/dL",
      ""
    ],
    [
      "TIBC",
      "250–450 µg/dL",
      ""
    ],
    [
      "Saturación de transferrina",
      "20–50 %",
      "< 20 % ferropenia"
    ],
    [
      "Ferritina",
      "Ver inflamación",
      "Ferropenia < 30 ng/mL (< 100 en inflamación o ERC)"
    ],
    [
      "Vitamina B12",
      "200–900 pg/mL",
      "200–300 limítrofe: ácido metilmalónico"
    ],
    [
      "Folato",
      "> 4 ng/mL",
      ""
    ],
    [
      "Haptoglobina",
      "30–200 mg/dL",
      "Baja en hemólisis"
    ]
  ]
},
{
  "id": "r-orina",
  "sys": "Valores de referencia",
  "group": "Líquidos corporales",
  "name": "Uroanálisis",
  "aka": "uroanalisis parcial de orina piuria nitritos hematuria cilindros densidad densidad ph leucocitos eritrocitos nitritos proteínas, glucosa, cetonas cilindros",
  "page": "Referencia",
  "sub": "",
  "rel": [
    "mi-lra",
    "mi-ivu"
  ],
  "notes": [],
  "rows": [
    [
      "Densidad",
      "1,005–1,030",
      ""
    ],
    [
      "pH",
      "4,5–8",
      ""
    ],
    [
      "Leucocitos",
      "< 5 por campo (< 10/µL)",
      "Piuria ≥ 10/µL"
    ],
    [
      "Eritrocitos",
      "< 3 por campo",
      "≥ 3: hematuria microscópica"
    ],
    [
      "Nitritos",
      "Negativo",
      "Positivo: enterobacterias"
    ],
    [
      "Proteínas, glucosa, cetonas",
      "Negativo",
      ""
    ],
    [
      "Cilindros",
      "Hialinos ocasionales",
      "Granulosos: NTA · hemáticos: glomerular · leucocitarios: pielonefritis"
    ]
  ]
},
{
  "id": "r-lcr",
  "sys": "Valores de referencia",
  "group": "Líquidos corporales",
  "name": "Líquido cefalorraquídeo",
  "aka": "lcr liquido cefalorraquideo puncion lumbar meningitis presión de apertura leucocitos proteínas glucosa bacteriana viral tb / hongos",
  "page": "Referencia",
  "sub": "",
  "notes": [],
  "rows": [
    [
      "Presión de apertura",
      "10–20 cmH₂O",
      "> 25: elevada"
    ],
    [
      "Leucocitos",
      "< 5/µL (neonato < 20–30)",
      ""
    ],
    [
      "Proteínas",
      "15–45 mg/dL",
      ""
    ],
    [
      "Glucosa",
      "50–80 mg/dL (≥ 60 % de la sérica)",
      "< 40 % de la sérica: bacteriana, TB u hongos"
    ],
    [
      "Bacteriana",
      "PMN, glucosa baja, proteínas altas",
      ""
    ],
    [
      "Viral",
      "Linfocitos, glucosa normal, proteínas normales o levemente altas",
      ""
    ],
    [
      "TB / hongos",
      "Linfocitos, glucosa baja, proteínas muy altas",
      "ADA en LCR > 10 sugiere TB"
    ]
  ]
},
{
  "id": "r-pleural",
  "sys": "Valores de referencia",
  "group": "Líquidos corporales",
  "name": "Líquido pleural",
  "aka": "liquido pleural light exudado transudado empiema ada quilotorax criterios de light gradiente de albúmina ph glucosa ldh ada triglicéridos",
  "page": "Referencia",
  "sub": "Ver ficha de derrame pleural.",
  "rel": [
    "mi-derrame"
  ],
  "notes": [],
  "rows": [
    [
      "Criterios de Light",
      "Exudado si ≥ 1:",
      "Proteína P/S > 0,5 · LDH P/S > 0,6 · LDH > 2/3 del LSN sérico"
    ],
    [
      "Gradiente de albúmina",
      "> 1,2 g/dL",
      "Reclasifica como transudado (diuréticos)"
    ],
    [
      "pH",
      "Normal ≈ 7,60",
      "< 7,2: drenaje"
    ],
    [
      "Glucosa",
      "< 60 mg/dL",
      "Paraneumónico complicado, AR, TB, maligno"
    ],
    [
      "LDH",
      "> 1000 U/L",
      "Empiema"
    ],
    [
      "ADA",
      "> 40 U/L",
      "TB pleural"
    ],
    [
      "Triglicéridos",
      "> 110 mg/dL",
      "Quilotórax"
    ]
  ]
},
{
  "id": "r-ascitis",
  "sys": "Valores de referencia",
  "group": "Líquidos corporales",
  "name": "Líquido ascítico",
  "aka": "liquido ascitico gasa pbe paracentesis gasa pmn proteínas peritonitis secundaria diálisis peritoneal",
  "page": "Referencia",
  "sub": "",
  "rel": [
    "mi-cirrosis",
    "mi-dp"
  ],
  "notes": [],
  "rows": [
    [
      "GASA",
      "≥ 1,1 g/dL",
      "Hipertensión portal"
    ],
    [
      "PMN",
      "≥ 250/µL",
      "PBE"
    ],
    [
      "Proteínas",
      "< 1,5 g/dL",
      "Riesgo de PBE (profilaxis primaria)"
    ],
    [
      "Peritonitis secundaria",
      "Proteínas > 1 g/dL, glucosa < 50, LDH > LSN sérico",
      "Criterios de Runyon"
    ],
    [
      "Diálisis peritoneal",
      "Leucocitos > 100/µL con > 50 % PMN",
      "Ver ficha de peritonitis en DP"
    ]
  ]
},
{
  "id": "r-sinovial",
  "sys": "Valores de referencia",
  "group": "Líquidos corporales",
  "name": "Líquido sinovial",
  "aka": "liquido sinovial artrocentesis artritis septica cristales gota normal no inflamatorio inflamatorio séptico cristales",
  "page": "Referencia",
  "sub": "",
  "notes": [],
  "rows": [
    [
      "Normal",
      "< 200 leucocitos/µL",
      ""
    ],
    [
      "No inflamatorio",
      "200–2000 /µL",
      "Artrosis, trauma"
    ],
    [
      "Inflamatorio",
      "2000–50 000 /µL",
      "Cristales, AR"
    ],
    [
      "Séptico",
      "> 50 000 /µL (> 90 % PMN)",
      "Menos en prótesis"
    ],
    [
      "Cristales",
      "Urato: agujas, birrefringencia negativa · pirofosfato: romboides, positiva",
      "Cristales no descartan infección"
    ]
  ]
},
{
  "id": "r-embarazo",
  "sys": "Valores de referencia",
  "group": "Clínicos",
  "name": "Cambios de laboratorio en el embarazo",
  "aka": "embarazo laboratorio hemoglobina creatinina tsh plaquetas gases proteinuria hemoglobina creatinina tsh plaquetas leucocitos gases proteinuria fosfatasa alcalina",
  "page": "Referencia",
  "sub": "",
  "notes": [],
  "rows": [
    [
      "Hemoglobina",
      "≥ 11 g/dL (1.er y 3.er trimestre) · ≥ 10,5 (2.º)",
      ""
    ],
    [
      "Creatinina",
      "Normal < 0,8 mg/dL",
      "> 0,9 anormal"
    ],
    [
      "TSH",
      "Límite superior ≈ 4,0 mUI/L si no hay rango por trimestre",
      "ATA 2017"
    ],
    [
      "Plaquetas",
      "> 100 000 (trombocitopenia gestacional leve)",
      "< 100 000: estudiar (HELLP, PTI)"
    ],
    [
      "Leucocitos",
      "Hasta 15 000 (parto hasta 25 000)",
      ""
    ],
    [
      "Gases",
      "PaCO₂ 27–32 · HCO₃⁻ 18–22",
      "Alcalosis respiratoria compensada"
    ],
    [
      "Proteinuria",
      "< 300 mg/24 h",
      "Relación proteína/creatinina ≥ 0,3: preeclampsia"
    ],
    [
      "Fosfatasa alcalina",
      "Elevada (placentaria)",
      ""
    ]
  ]
},
{
  "id": "r-niveles",
  "sys": "Valores de referencia",
  "group": "Fármacos",
  "name": "Niveles terapéuticos de fármacos",
  "aka": "niveles sericos litio valproato fenitoina carbamazepina digoxina vancomicina gentamicina amikacina clozapina paracetamol litio ácido valproico fenitoína total carbamazepina digoxina vancomicina gentamicina (convencional) amikacina (convencional) clozapina paracetamol",
  "page": "Referencia",
  "sub": "Hora de toma según fármaco.",
  "notes": [],
  "rows": [
    [
      "Litio",
      "0,6–1,2 mEq/L (12 h postdosis)",
      "Tóxico > 1,5"
    ],
    [
      "Ácido valproico",
      "50–100 µg/mL (manía hasta 125)",
      ""
    ],
    [
      "Fenitoína total",
      "10–20 µg/mL (libre 1–2)",
      "Corregir por albúmina baja"
    ],
    [
      "Carbamazepina",
      "4–12 µg/mL",
      ""
    ],
    [
      "Digoxina",
      "0,5–0,9 ng/mL (IC)",
      "Tóxico > 2; más riesgo con hipoK"
    ],
    [
      "Vancomicina",
      "AUC 400–600 mg·h/L",
      "Valle 10–15 (orientativo)"
    ],
    [
      "Gentamicina (convencional)",
      "Pico 5–10 · valle < 1–2 µg/mL",
      ""
    ],
    [
      "Amikacina (convencional)",
      "Pico 20–30 · valle < 5 µg/mL",
      ""
    ],
    [
      "Clozapina",
      "≥ 350 ng/mL",
      ""
    ],
    [
      "Paracetamol",
      "Nomograma: 150 µg/mL a las 4 h",
      "Por encima: N-acetilcisteína"
    ]
  ]
}
];
