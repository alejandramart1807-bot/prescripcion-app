import { useMemo } from "react";
import type { Ficha } from "@tinterno/content";
import { DX } from "@tinterno/content";
import { usarFavoritos, usarPeso, usarRecientes } from "../lib/almacenamiento";
import { byId, CTX, inCtx, inMac, MAC } from "../lib/taxonomia";
import { fijarConsultaPendiente } from "../lib/busqueda";
import ListaFilas from "../components/ListaFilas";
import Seccion from "../components/Seccion";
import Icono, { type NombreIcono } from "../components/Icono";
import { useAtajoBusqueda } from "../lib/useAtajoBusqueda";

/** Urgencias críticas de la v7 — mismos 14 ids que `CRIT` en index.html. */
const CRIT = [
  "reanimacion",
  "sepsis",
  "shock",
  "pcr-fv",
  "iamcest-icp",
  "acvi",
  "ee",
  "anafilaxia",
  "cad",
  "hiperk",
  "ica",
  "hpp",
  "sri",
  "intox",
];

/** Calculadoras frecuentes de la v7 — mismos 8 ids que `FREQ` en index.html. */
const FREQ = ["c-glasgow", "c-cha2ds2", "c-wellstep", "c-curb65", "c-crcl", "c-news2", "c-infusion", "c-qtc"];

/** Valores de referencia de la v7 — mismos 6 ids que `REFS` en index.html. */
const REFS = ["r-hemograma", "r-electrolitos", "r-gases", "r-renal", "r-lcr", "r-niveles"];

const ICONO_CTX: Record<string, NombreIcono> = {
  urgencias: "pulse",
  hospital: "bed",
  consulta: "steth",
  critico: "heart",
  calc: "calc",
  ref: "flask",
};

function conId(ids: string[]): Ficha[] {
  return ids.map(byId).filter((d): d is Ficha => !!d);
}

/**
 * Portada real de Tinterno: buscador, contextos clínicos, recientes,
 * favoritos, urgencias críticas, calculadoras frecuentes, fichas por peso,
 * valores de referencia y sistemas — tomando `renderHome()` de index.html
 * como referencia.
 *
 * Consolidación de UX pedida: la v7 tenía Inicio/Buscar/Explorar como tres
 * destinos que se solapaban (Explorar era un buscador + las mismas
 * categorías que ya vive aquí). Esta portada ya cubre lo que hacía
 * Explorar (contextos + sistemas), así que cuando se construya la barra
 * inferior puede quedar en cuatro destinos (Inicio, Buscar, Favoritos,
 * Paciente) sin perder nada.
 */
export default function HomePage() {
  const { favoritos, esFavorito } = usarFavoritos();
  const recientes = usarRecientes();
  const { peso } = usarPeso();

  useAtajoBusqueda();

  const rec = useMemo(() => recientes.map(byId).filter((d): d is Ficha => !!d).slice(0, 5), [recientes]);
  const fav = useMemo(() => favoritos.map(byId).filter((d): d is Ficha => !!d).slice(0, 6), [favoritos]);
  const crit = useMemo(() => conId(CRIT), []);
  const freq = useMemo(() => conId(FREQ), []);
  const refs = useMemo(() => conId(REFS), []);
  const porPeso = useMemo(() => inCtx("peso"), []);

  function alEscribirBusqueda(valor: string) {
    fijarConsultaPendiente(valor);
    const hashActual = window.location.hash.replace(/^#\/?/, "");
    if (hashActual !== "buscar") window.location.hash = "buscar";
  }

  return (
    <div className="page hero">
      <h1>¿Qué necesitas durante el turno?</h1>

      <div className="bigsearch" role="search">
        <Icono nombre="search" />
        <label className="vh" htmlFor="hq">
          Buscar
        </label>
        <input
          id="hq"
          type="search"
          autoComplete="off"
          placeholder="Diagnóstico, fármaco o escala…"
          onChange={(e) => alEscribirBusqueda(e.target.value)}
        />
      </div>

      <nav className="ctxnav" aria-label="Contextos clínicos">
        {CTX.map((c) => (
          <a key={c.k} href={`#ctx/${c.k}`}>
            <Icono nombre={ICONO_CTX[c.k] ?? "info"} />
            <span>
              {c.n}
              <small>{inCtx(c.k).length} fichas</small>
            </span>
          </a>
        ))}
      </nav>

      {rec.length > 0 && (
        <Seccion titulo="Consultados recientemente">
          <ListaFilas fichas={rec} esFavorito={esFavorito} />
        </Seccion>
      )}

      {fav.length > 0 && (
        <Seccion titulo="Favoritos">
          <ListaFilas fichas={fav} esFavorito={esFavorito} />
        </Seccion>
      )}

      <Seccion titulo="Urgencias críticas">
        <ListaFilas fichas={crit} esFavorito={esFavorito} />
      </Seccion>

      <Seccion titulo="Calculadoras frecuentes" accion={<a href="#ctx/calc">Ver las {inCtx("calc").length}</a>}>
        <ListaFilas fichas={freq} esFavorito={esFavorito} />
      </Seccion>

      <Seccion titulo="Prescripción por peso">
        <ul className="fichas-lista">
          <li>
            <a href="#ctx/peso" className="fila">
              <Icono nombre="scale" />
              <span className="t">
                <b>{porPeso.length} fichas con dosis por kilo</b>
                <small>
                  {peso
                    ? `Calculando con ${peso.toLocaleString("es-CO", { maximumFractionDigits: 1 })} kg`
                    : "Ingresa el peso una vez y se calculan solas"}
                </small>
              </span>
              <span className="chev" aria-hidden="true">
                <Icono nombre="right" />
              </span>
            </a>
          </li>
        </ul>
      </Seccion>

      <Seccion titulo="Valores de referencia" accion={<a href="#ctx/ref">Ver las {inCtx("ref").length}</a>}>
        <ListaFilas fichas={refs} esFavorito={esFavorito} />
      </Seccion>

      <Seccion titulo="Explorar por sistemas">
        <ul className="fichas-lista sysgrid">
          {MAC.map((m) => (
            <li key={m.k}>
              <a href={`#cat/${m.k}`} className="fila">
                <span className="t">
                  <b>{m.n}</b>
                </span>
                <span className="muted">{inMac(m.k).length}</span>
                <span className="chev" aria-hidden="true">
                  <Icono nombre="right" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Seccion>

      <details className="about">
        <summary>
          <Icono nombre="info" /> Cómo funciona Tinterno
        </summary>
        <AcercaDe />
      </details>
    </div>
  );
}

function AcercaDe() {
  return (
    <>
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
      <p>
        Todo se calcula en tu dispositivo. El peso se borra al cerrar la app; favoritos y recientes se guardan solo
        en este teléfono o computador.
      </p>
      <p>
        <b>Tinterno es apoyo a la decisión clínica y no reemplaza el juicio médico.</b> Antes de ordenar verifica
        dosis, la dilución que usa tu servicio, función renal y hepática, alergias, embarazo, interacciones y
        disponibilidad institucional.
      </p>
    </>
  );
}
