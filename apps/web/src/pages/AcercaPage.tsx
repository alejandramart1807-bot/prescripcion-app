import { DX } from "@tinterno/content";
import { REV_LONG, VERSION } from "../constants";

/**
 * Ruta `#acerca`. Mismo texto que `aboutText()` + `renderAbout()` en
 * index.html (raíz) — es contenido, no interfaz, así que se copia literal
 * en vez de reescribirse. El descargo de responsabilidad y la versión de
 * revisión de guías vienen de `constants.ts` (VERSION, REV_LONG), que
 * replican `VERSION`/`REV_LONG` de index.html.
 */
export default function AcercaPage() {
  return (
    <div className="page">
      <h1>Cómo funciona Tinterno</h1>
      <p>
        Tinterno reúne {DX.length} fichas: planes de prescripción por diagnóstico, escalas, calculadoras y valores
        de referencia para urgencias, hospitalización y consulta en Colombia.
      </p>
      <p>
        Cada ficha dice primero qué guía colombiana aplica y si está vigente, y con qué guía internacional se
        complementa. Las órdenes traen dosis, vía, frecuencia, dilución y una alternativa por si el fármaco no está
        disponible. Si ingresas el peso del paciente, las dosis por kilo y las velocidades de infusión se calculan
        solas.
      </p>
      <p>Todo se calcula en tu dispositivo. El peso se borra al cerrar la app; favoritos y recientes se guardan solo en este teléfono o computador.</p>
      <p>
        <b>Tinterno es apoyo a la decisión clínica y no reemplaza el juicio médico.</b> Antes de ordenar verifica
        dosis, la dilución que usa tu servicio, función renal y hepática, alergias, embarazo, interacciones y
        disponibilidad institucional. Versión {VERSION} · revisión de guías: {REV_LONG}.
      </p>
      <p>
        <a href="#/">Volver al inicio</a>
      </p>
    </div>
  );
}
