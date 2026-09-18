# Tinterno — contexto del proyecto para Claude Code

> Guárdalo en la raíz del repositorio como `CLAUDE.md`. Claude Code lo lee automáticamente al abrir el proyecto.
> Última actualización: 18 de septiembre de 2026 · Versión de la app: **7.5**

---

## 1. Qué es

**Tinterno** ("tinto" + "interno") es una PWA de apoyo clínico para médicos en turno en Colombia (internos, médicos generales y residentes). Funciona sin cuenta, sin backend y sin conexión una vez abierta.

**Contenido actual: 358 fichas**

| Tipo | Cantidad | Qué es |
|---|---|---|
| Fichas de prescripción | 286 | Diagnóstico → flujo de decisión → órdenes médicas con dosis, vía, frecuencia, dilución y alternativa |
| Escalas y calculadoras | 51 | Interactivas (Glasgow, NIHSS, CHA₂DS₂-VA, HEART, Wells, CURB-65, NEWS2, MELD-Na, CKD-EPI, Adrogué-Madias, MME…) |
| Valores de referencia | 21 | Tablas (hemograma, gases con valores para Medellín y Bogotá, LCR, líquidos corporales, niveles de fármacos…) |

**Acción principal:** buscar un diagnóstico → ingresar el peso → las dosis por kilo y las velocidades de infusión se calculan solas → copiar las órdenes a la historia clínica.

**Dueño:** Jacobo, médico en Medellín (coordinación académica en Universidad CES).

---

## 2. Reglas no negociables

1. **No modificar el contenido clínico** (dosis, vías, frecuencias, diluciones, indicaciones, algoritmos, fuentes) salvo instrucción explícita de Jacobo.
2. **No inventar información clínica.** Todo contenido nuevo se redacta a partir de guías oficiales y se marca la fuente.
3. **Jerarquía de guías por ficha:** 1.° guía colombiana (MinSalud, INS, sociedades colombianas) → 2.° AHA/ACC → 3.° ESC u otras internacionales. Se marca el estado: `ok` (vigente), `old` (desactualizada, se complementa), `none` (no existe), `na` (sin verificar).
4. **Derechos de autor:** no citar ni referenciar libros comerciales (se quitaron las referencias al libro "Prescribiendo" en la v5.5). El contenido está redactado a partir de guías, no copiado.
5. **Privacidad:** nada sale del dispositivo.
   - Peso → `sessionStorage` (se borra al cerrar, a propósito, para no arrastrarlo al siguiente paciente).
   - Favoritos, recientes y tema → `localStorage`.
6. Mantener las URL/anclas de las fichas (`#<id>`), la PWA, el modo sin conexión, los temas claro/oscuro, copiar e imprimir.
7. Cada ficha conserva "segunda línea / si no hay" por disponibilidad en Colombia.
8. Tono: claro, directo, humano y clínicamente preciso. Español de Colombia.

---

## 3. Despliegue

- **Repositorio GitHub:** `alejandramart1807-bot/prescripcion-app` (público). Jacobo sube los cambios con *Add file → Upload files → Commit changes* o con `git push`.
- **Hosting:** Netlify conectado al repositorio (se despliega solo en cada commit a `main`). URL actual: `https://guia-prescripcion-co.netlify.app/` (nombres anteriores: prescribiendo, tinterno). No hay build: se sirve la raíz tal cual.
- **Al publicar un cambio importante:** subir la versión del caché en `sw.js` (`const CACHE = "tinterno-v7-0"` → `v7-1`…) para que los celulares descarten la copia vieja.
- Hay una copia privada en Claude.ai (artifact) que no es la fuente de verdad.

### Archivos del repositorio

```
index.html            # TODA la app: CSS + marcado + datos clínicos + interfaz (≈530 KB)
sw.js                 # service worker: primero red, con respaldo en caché
manifest.webmanifest  # PWA (name, short_name "Tinterno", colores, íconos)
icon.svg              # logo: taza con "T" y línea de pulso
icon-192.png, icon-512.png
LEEME.txt             # instrucciones antiguas de Netlify (puede estar desactualizado)
```

---

## 4. Estructura de `index.html`

Orden dentro del archivo:

1. `<head>`: metadatos, Google Fonts (Atkinson Hyperlegible y Atkinson Hyperlegible Mono) y un script inline que aplica el tema guardado antes de pintar.
2. `<style>`: sistema de diseño (tokens CSS) y componentes.
3. `<body>`: esqueleto (header, `aside#sidebar`, `main#main`, `nav#bnav`, `#scrim`, `#sheet`, `#ptDlg`, `#menuDlg`, `#toast`).
4. `<script>` único:
   - **Bloque de datos clínicos** (no tocar): comentario de tipos de cálculo → `const DX = [...]` → `GUIDES` → `ALT` + `altFor()` → constantes `URG`, `CASA`, `HOSP`, `CE` → bloques `DX.push(...)` añadidos por versión → `Object.assign(ALT, …)` → enlaces `rel` → cálculo de `d.page` ("Fuente: …") → ordenamiento de `DX` por sistema.
   - **Capa de interfaz v7:** iconos, almacenamiento, taxonomía, cálculos, búsqueda, shell, vistas, router e `init()`.
   - Registro del service worker.

> **Mejora pendiente recomendada:** separar el bloque de datos en `data/fichas.js` (o JSON) y la interfaz en `app.js` y `styles.css`, sin cambiar el contenido. Hay que actualizar la lista `CORE` de `sw.js` para cachear los archivos nuevos.

---

## 5. Modelo de datos (bloque clínico)

### Ficha de prescripción (`DX[i]`)

```js
{
  id: "fa-mas24",                 // ancla URL: #fa-mas24 (NO cambiar ids)
  sys: "Cardiología",             // sistema original (si falta => "Cardiología")
  group: "Fibrilación auricular", // subgrupo
  name: "FA estable > 24 h o de inicio incierto",
  aka: "sinonimos siglas ...",    // para la búsqueda
  page: "",                       // se calcula en tiempo de ejecución: "Fuente: Guía colombiana · ESC 2024 …"
  sub: "Descripción clínica breve",
  flow: [["1","Control de FC en urgencias"], ["Título","texto"]],  // f[0] puede ser un número
  criteria: ["Antes de ordenar …"],
  orders: [
    {cat: "En urgencias"},        // encabezado de categoría (URG/CASA/HOSP/CE u otro texto)
    {d: "Metoprolol", dose: "2,5–5 mg IV …", dil: "…", n: "nota",
     a: "alternativa si no hay",  // si falta, se usa altFor(id, d)
     calc: {t:"kg", lo:0.5, hi:1, unit:"mg", max:100, label:"/día"}}
  ],
  goals: ["FC en reposo < 110 lpm"],
  alerts: ["…"],
  rel: ["c-cha2ds2","c-hasbled"],  // enlaces a otras fichas
  g: { co:{n:"Nombre GPC", y:"2012", st:"ok|old|none|na", txt:"…"},
       intl:"ESC 2024 · ACC/AHA 2023", dif:["Diferencias en Colombia…"] }
  // o bien GUIDES[id] con la misma forma
}
```

### Tipos de `calc` (en `calcText` / `calcCore`)

| `t` | Significado | Salida |
|---|---|---|
| `kgmin` | dosis/kg/min con `conc` (unidad/mL) | mL/h |
| `min` | dosis/min con `conc` | mL/h (no requiere peso) |
| `h` | dosis/h con `conc` | mL/h (no requiere peso) |
| `kgh` | dosis/kg/h, `maxRate` opcional | mL/h |
| `kg` | dosis por kg, `max` opcional, `label` | dosis total |
| `table` | `rows:[[kgExclusivo,"texto"]]` | fila según peso |
| `ccp`, `tdd`, `altacv`, `nac`, `alteplase` | esquemas especiales (CCP por INR, insulina basal-bolo, alteplasa en ACV, NAC, alteplasa) | texto |

Advertencias: si se aplica el tope → el texto incluye "Tope máximo aplicado". Si el peso es < 3 o > 200 kg → empieza con "Verifica el peso". La interfaz detecta esos textos para pintar en rojo.

### Calculadora (`calcForm`)

```js
{ id:"c-meld", sys:"Escalas y calculadoras", group:"Digestivo", name, aka, sub, notes:[],
  calcForm:{ inputs:[ {id, label, type:"num|sel|chk|date", unit, ph, opts:[["texto",valor]], pts} ],
             compute: v => ({v:"resultado", t:"interpretación", l:"ok|warn|bad"}) } }
```

### Tabla de referencia

```js
{ id:"r-gases", sys:"Valores de referencia", group, name, sub, notes:[], rows:[["Parámetro","Rango","Interpretación"]] }
```

---

## 6. Capa de interfaz v7

### Taxonomía (metadatos, sin duplicar datos) → `TAX[id] = {mac, sub, ctx:Set, kg}`

- **Macrocategorías (`MAC`, 15):** cardio, resp, neuro, renal, dig, endo, infecto, hemo, cx (Cirugía y trauma: cirugía general, ortopedia y reumatología, coloproctología, ORL, oftalmología), **uro (Urología: fichas de Uroclin + IPSS; separada de cirugía y ortopedia desde v7.4)**, mujer, ped, mental, piel, otras.
  - Mapeos: `SYSMAC` (sys → macro), `MIMAC` (medicina interna por group), `CRITMAC` (paciente crítico por group), `CALCMAC`/`CALCID` (calculadoras).
- **Subcategoría `subOf()`:** normalmente el `sys`. Excepciones: "Medicina interna: piso y consulta", "Salud mental hospitalaria", "Toxicología y causas externas", "Escalas y calculadoras".
- **Contextos (`CTX`):** urgencias, hospital, consulta, critico, calc, ref, más la vista `peso` (fichas con `calc` que depende del peso). Se derivan de `sys` y de las categorías de las órdenes (`ctxOf`).

### Rutas (hash)

`#` inicio · `#buscar` · `#favoritos` · `#acerca` · `#cat/<macro>` · `#cat/<macro>/<subcategoría>` · `#ctx/<contexto>` · `#<id>` ficha, calculadora o tabla.

### Componentes (funciones)

| Función | Qué hace |
|---|---|
| `renderSidebar` | Escritorio: favoritos, recientes, contextos y acordeón de sistemas (uno abierto) |
| `renderBnav` | Barra inferior en el celular; en una ficha: Volver / Copiar órdenes / Favorito / Más |
| `openExplore` + `renderExplore` | Hoja inferior "Explorar Tinterno" |
| `openPatient` | Panel del paciente (peso) |
| `openMenu` | Menú de opciones |
| `openLayerEl` / `closeLayer` | Foco, Escape, trampa de Tab, bloqueo de scroll |
| `enableSwipe` | Cerrar la hoja deslizando hacia abajo |
| `renderHome` | Portada: buscador, contextos, recientes, favoritos, urgencias críticas (`CRIT`), calculadoras frecuentes (`FREQ`), por peso, referencias (`REFS`), sistemas, "Cómo funciona" |
| `renderSearch` / `_upd` | Búsqueda con resaltado, conteo, exactas antes que aproximadas; `searchDX` usa Levenshtein y sinónimos `SYN` |
| `renderFicha` | Ruta → título → estado de guía y revisión → franja de guía principal → resumen (primer paso, primera orden, meta, alerta, copiados literalmente) → navegación interna con scrollspy (`spy`) → flujo → antes de ordenar → órdenes → metas/alertas → relacionado → evidencia (`<details>`) → acciones |
| `renderCalcView` / `renderRefView` | Calculadoras y tablas |
| `copyOrders` / `copyOne` | Copiar todas las órdenes o una sola (texto plano, aviso y vibración) |
| `route` | Router por hash; `init()` conecta los eventos |

### Sistema de diseño (tokens en `:root`)

- **Claro:** bg `#F4F7F9`, surface `#FFF`, text `#182630`, text-2 `#61717F`, brand `#1E4B6E`, accent `#2E67A0`, accent-soft `#E9F1F6`, amber `#9C5A1C` (ajustado desde #B96B22 por contraste), amber-soft `#FFF4E7`, red `#B43B3B`, red-soft `#FCECEC`, green `#287553`, border `#DCE4EA`.
- **Oscuro:** bg `#0E151B`, surface `#151F27`, surface-2 `#1B2730`, text `#EAF0F4`, text-2 `#A6B4BE`, border `#2B3A45`, brand `#82B4E0`, amber `#E4A35F`, red `#F08B86`, green `#76C69F`.
- **Tema:** automático por `prefers-color-scheme`; manual con `data-theme="light|dark"` (clave `tinterno-theme2`).
- **Escala y forma:** espaciado 4/8/12/16/24/32/48; radios 14 (tarjetas), 10 (controles), 8; control mínimo 44 px; animación 180–220 ms; respeta `prefers-reduced-motion`.
- **Iconos:** SVG de trazo 2 (estilo Lucide) en el objeto `IP`. **No usar emojis como iconos.**
- **Breakpoints:** < 1024 px → barra inferior y hoja inferior; ≥ 1024 px → barra lateral y buscador en el encabezado.
- **Contraste WCAG AA** verificado en 16 pares (4,67–14,5:1).

### Claves de almacenamiento

`tinterno-fav`, `tinterno-recent` (máx. 12), `tinterno-theme2`, `tinterno-sb` (barra lateral), `sessionStorage: tinterno-kg`.

---

## 6b. Funciones de aprendizaje (v7.1) — para que la app no reemplace el criterio

Principio: **ayudar sin atrofiar el pensamiento**. Nunca poner fricción en urgencias críticas.

- **Modos** (`tinterno-mode`: `turno` = **Búsqueda rápida** | `estudio`). En Búsqueda rápida el orden de la ficha es Resumen → Órdenes → Metas y alertas → Flujo → Antes de ordenar, con la evidencia como píldora. En Estudio: Resumen → Flujo → Antes de ordenar → Órdenes (tras "Piensa primero") → Metas y alertas, y la portada muestra primero "Tu aprendizaje". En Estudio, antes de las órdenes aparece "Piensa primero: ¿qué ordenarías tú?". El usuario escribe su plan (queda solo en memoria), lo revela y lo compara con "Tu plan". La "Primera orden" del resumen se oculta. Siempre hay un botón **"Es urgente, muéstrame ya"**. **No aplica en fichas de paciente crítico** (`isCritical`: contexto `critico` o lista `CRIT`).
- **Andamiaje que se retira:** en modo Turno, después de 5 consultas de la misma ficha, aparece un aviso no bloqueante que invita a predecir las órdenes (`nudgeHTML`).
- **"¿Lo sabías?"** al final de cada ficha (Sí / Más o menos / No). "No" o "Más o menos" adelantan el repaso.
- **Repaso espaciado** (`#repaso`): 3 preguntas de opción múltiple generadas **solo con contenido existente** (primera orden, meta o alerta de la ficha; los distractores son valores de otras fichas que no aparecen en esa ficha). Sistema Leitner con intervalos de 1, 3, 7, 16 y 35 días; un error vuelve la ficha a 1 día.
- **Mi aprendizaje** (`#aprendizaje`): selector de modo, repasos pendientes, mapa de dependencia por sistema (barras Sí/Más o menos/No), temas para estudiar y los más consultados. Botón para borrar los datos.
- Datos en `localStorage` → `tinterno-learn` = `{id:{n, first, last, box, due, know:{si,mas,no}, lastKnow, lastQuiz}}`. Solo fichas `quizable` (con órdenes, metas y alertas).
- Sin rachas, puntos ni insignias (decisión deliberada).
- Ideas pendientes: calculadoras que muestren la fórmula y pidan estimar antes de calcular; chequeo de un toque antes de la primera copia del turno (alergias, función renal, embarazo).

## 6d. Enlaces a guías (v7.3) — `app6.js`

- `CO_LINKS`: expresión regular sobre `g.co.n` → URL **verificada** del documento colombiano. Solo agregar URL verificadas (fecha de verificación: 18-sep-2026).
- `GPC_PORTAL`: https://gpc.minsalud.gov.co/SitePages/default.aspx (respaldo para GPC del MinSalud sin documento verificado).
- `ORG_LINKS`: expresión regular sobre cada referencia internacional (`g.intl` separado por "·") → página oficial de guías de la sociedad. `null` = libro sin enlace (Maudsley).
- Cada referencia tiene además un enlace de búsqueda en PubMed, y cada guía colombiana una búsqueda restringida a minsalud.gov.co, gpc.minsalud.gov.co e ins.gov.co.
- Cobertura en v7.3: 33/85 fichas con documento colombiano específico y 52 con portal; 403/542 referencias internacionales con sitio oficial; el resto (ensayos y revisiones) solo PubMed.
- **Pendiente clínico:** la Ley 1616 de 2013 fue modificada por la Ley 2460 de 2025 y la Ley 2564 de 2026; revisar las fichas de salud mental que la citan.
- Siguiente paso sugerido: completar URL verificadas para las GPC más usadas (ACV 2015, DM2 2016, HTA, falla cardíaca 2016, EPOC 2014, esquizofrenia 2014, depresión 2013, dengue, TB Res. 227/2020, Res. 2350/2020, Res. 051/2023).

## 6e. Cuentas y sugerencias (v7.5) — `app7.js` + `supabase-schema.sql`

- **Desactivado por defecto:** `const TINTERNO_CLOUD={url:"",anonKey:""}`. Con valores vacíos, las páginas de cuenta muestran "aún no activadas" y la app funciona 100 % local. Guía de activación: `ACTIVAR-CUENTAS.md`.
- **Cliente:** supabase-js v2 (UMD desde jsdelivr), cargado de forma diferida solo si hay configuración. **Nunca** usar la clave `service_role` en el frontend.
- **Tablas:** `profiles` (display_name, role user|staff; la creación la hace un trigger), `user_data` (jsonb con las claves sincronizadas), `suggestions` (ficha, tipo, sección, orden, texto, fuente, estado, respuesta, revisor).
- **Seguridad (RLS):** cada usuario solo lee y escribe lo suyo. `is_staff()` da lectura global y actualización de estado y respuesta. Los privilegios por columna impiden cambiar el rol o editar el texto ajeno. Límite de 20 sugerencias por usuario cada 24 h. `anon` no tiene acceso.
- **Sincronización:** claves `SYNC_KEYS` = fav, recent, learn, notes, mode. `mergeData` combina lo local y lo remoto (unión de favoritos, recientes ordenados, repaso por `last`, notas por `u`). Se escribe con un retraso de 2,5 s tras cada `LS.set` de esas claves. **El peso (`sessionStorage`) nunca se sincroniza.**
- **Privacidad:** `looksLikePatientData()` bloquea números de 7–10 dígitos, "CC", "cédula", "historia clínica"… en notas y sugerencias. Hay que completar el responsable del tratamiento en `renderPrivacy()`.
- **Rutas:** `#cuenta`, `#revision` (solo staff), `#privacidad`.
- **Pruebas:** con un simulador en memoria (`window.__CLOUD_MOCK`) se verificaron registro, ingreso, error de ingreso, sincronización, notas, bloqueo de datos de pacientes, envío y revisión de sugerencias, y que un usuario normal no ve el panel ni sugerencias ajenas. Falta la prueba contra un proyecto Supabase real.
- `sw.js` no cachea peticiones a `supabase.co`.

## 6c. Código fuente de la interfaz y ensamblado

En el entorno de desarrollo la app se arma desde piezas: `head.html` + `style.css` + `body.html` + `data.js` (bloque clínico, **protegido por huella SHA-256 que empieza por `b72a16881725768c`**) + `app1.js` (iconos, almacenamiento, taxonomía) + `calc.js` + `srch.js` + `app2.js` (shell, diálogos, barra lateral y barra inferior) + `app6.js` (enlaces a guías) + `app3.js` (ficha, calculadora, referencia) + `app5.js` (aprendizaje) + `app7.js` (cuentas, sincronización, sugerencias y revisión) + `app4.js` (portada, búsqueda, listados, router, `init`). El script de ensamblado falla si la huella de los datos cambia. Si en el repositorio solo existe `index.html`, trátalo como la versión ensamblada; al separar archivos, conserva esa verificación de integridad.

## 7. Pruebas (Playwright, Python)

Verificadas en la v7.0 (0 errores de consola, sin desborde a 320/375/390/430/768/1024/1366 px):

- Las 358 fichas renderizan (`#ftitle` existe).
- Búsqueda: "apendisitis" encuentra apendicitis; "enoxaparina" → 15; "IAM" resalta coincidencias.
- Peso de 60 kg en `#nac-ped` → "4.000 mg /día · Tope máximo aplicado".
- Copiar todas y copiar una orden → portapapeles y aviso.
- Favoritos persisten al recargar; el peso persiste en la sesión.
- `#c-meld` (bili 2, Cr 1,5, INR 1,8, Na 130) → "MELD-Na 25 (MELD 20)".
- Escape cierra la hoja; el tema cambia.
- Integridad: el bloque de datos es idéntico al de la versión anterior (comparación de hash).

Esqueleto de prueba:

```python
from playwright.sync_api import sync_playwright
U="file:///ruta/index.html"
with sync_playwright() as p:
    b=p.chromium.launch(); ctx=b.new_context(viewport={"width":390,"height":844})
    ctx.grant_permissions(["clipboard-read","clipboard-write"]); pg=ctx.new_page()
    errs=[]; pg.on("pageerror",lambda e: errs.append(str(e)))
    pg.goto(U)
    for i in pg.evaluate("DX.map(d=>d.id)"):
        pg.evaluate(f"location.hash='{i}'"); assert pg.evaluate("!!document.querySelector('#ftitle')"), i
    assert not errs
```

Recomendado: moverlas a `tests/` y ejecutarlas con GitHub Actions en cada push.

---

## 8. Historial de versiones

| Versión | Cambio principal |
|---|---|
| 1–4 | Piloto de cardiología → paciente crítico → guardia médica → Drive de Medicina Interna CES (186 fichas). Segundas líneas, jerarquía de guías colombianas, calculadoras por peso |
| 5.0 | +Urología (Uroclin), cirugía, GO, pediatría, psiquiatría, anestesia, dermatología, oncología y meningitis (259 fichas) |
| 5.1 | +Salud mental (hospital psiquiátrico), 27 fichas |
| 5.2 | +51 escalas y calculadoras interactivas |
| 5.3 | +21 tablas de valores de referencia |
| 5.4 | Nombre **Tinterno** (antes "Plan de prescripción"), ícono |
| 5.5 | Quitadas las referencias a libros comerciales; fuente = guías oficiales |
| 6.0 | Modo oscuro, barra inferior, alertas de dosis, búsqueda tolerante a errores, aviso al copiar |
| 7.0 | Rediseño completo: navegación por contexto/sistema/herramienta, hoja inferior Explorar, barra lateral colapsable, nueva portada, ficha con resumen y navegación interna, evidencia desplegable, copia por orden, favoritos y recientes, panel del paciente, tokens nuevos, logo SVG, iconos vectoriales |
| 7.1 | Aprendizaje: modo Turno/Estudio ("Piensa primero"), repaso espaciado de lo consultado, "¿Lo sabías?" y mapa de dependencia |
| 7.2 | Dos modos visibles: **Búsqueda rápida** (órdenes primero, evidencia compacta) y **Estudio** (flujo → antes de ordenar → piensa primero → órdenes). Selector segmentado en portada, Explorar y barra lateral, y píldora en la ficha. Enter abre el primer resultado. Búsqueda con prioridad a coincidencia exacta (`PRIO`) y leve penalización de fichas pediátricas y calculadoras en empates |
| 7.3 | Enlaces a las guías en la sección Evidencia: documento oficial verificado (6 fuentes colombianas: toxicología 2017, embarazo 2013, SCA 2013, VIH 2021, Res. 3280, Ley 1616) o portal de GPC del MinSalud; sitios oficiales de más de 60 sociedades internacionales; búsqueda en PubMed y en sitios oficiales como respaldo |
| 7.4 | Urología pasa a ser una categoría propia (21 fichas), separada de Cirugía y trauma / Ortopedia |
| **7.5** | Calculadoras separadas: Obstetricia / Pediatría / Urología / Ortopedia / Tromboprofilaxis (`CALC_GROUP`, `grp()`). Cuentas opcionales con Supabase: registro con autorización de datos (Ley 1581), sincronización de favoritos, recientes, notas, repaso y modo; "Mis notas" por ficha; "Sugerir corrección"; panel de revisión para el personal (`role='staff'`); política de privacidad (#privacidad). Bloqueo de textos que parecen datos de pacientes |

---

## 9. Pendientes

**Clínicos (los confirma Jacobo):**
- Corte de HbA1c para el alta del diabético: Umpierrez (<7 / 7–9 / >9 %) vs. ADA 2026 (<8 / 8–10 / >10 %). La ficha muestra ambos; falta saber cuál prefiere el examinador del CES.
- Verificar la dosis de antiveneno con el inserto del INS o Probiol del hospital.
- Ajustar diluciones si el servicio usa concentraciones distintas.
- Protocolos propios de Uroclin (profilaxis de biopsia, irrigación post-RTU) y del hospital mental (contención, vigilancia, hemograma de clozapina).

**Técnicos y de UX:**
- Separar datos e interfaz (`data/fichas.js`, `app.js`, `styles.css`).
- Campos estructurados por orden (vía, frecuencia, ajuste renal, embarazo, "evitar si") para mostrar etiquetas. **Requiere revisión clínica.**
- URL oficiales de cada guía en la evidencia.
- *Tall-man lettering* en fármacos que se confunden (hidrOXIzina/hidrALAzina, DOPamina/DOBUTamina).
- Selección múltiple de órdenes antes de copiar.
- Confirmación en fichas pediátricas si el peso parece de adulto (y al revés).
- Opción de letra más grande.
- Dominio propio (p. ej. tinterno.co) y registro de marca en la SIC (clases 9, 42 y 44).
- Quitar el distintivo "Powered by Netlify" (no está en el código; revisar la configuración de Netlify y las vistas previas de despliegue).
- Pruebas automáticas en GitHub Actions.

---

## 10. Cómo trabajar con este repositorio en Claude Code

- **Antes de editar:** localiza la sección. El bloque de datos va desde `const DX = [` hasta la línea `(()=>{const order=[...]; DX.sort(...)})();`. La interfaz empieza en `/* ================= TINTERNO UI v7 ================= */`.
- **Cambios de interfaz:** no tocar el bloque de datos. Al terminar, verificar que el bloque siga idéntico (diff) y correr las pruebas.
- **Fichas nuevas:** añadir un `DX.push({...})` con el mismo esquema y una guía `g` con estado. Sus metadatos (`TAX`) se calculan solos; si el `sys` es nuevo, agregarlo a `SYSMAC`.
- **Al publicar:** subir la versión de `CACHE` en `sw.js` y la de `VERSION` y `REV` en la interfaz.
- **Validar sintaxis:** extraer el `<script>` y correr `node --check`.
