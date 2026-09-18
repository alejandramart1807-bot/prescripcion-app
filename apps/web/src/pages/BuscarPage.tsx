import { useEffect, useMemo, useRef, useState } from "react";
import type { Ficha } from "@tinterno/content";
import { usarFavoritos, usarRecientes } from "../lib/almacenamiento";
import { byId } from "../lib/taxonomia";
import { searchDX, tomarConsultaPendiente } from "../lib/busqueda";
import { useAtajoBusqueda } from "../lib/useAtajoBusqueda";
import ListaFilas from "../components/ListaFilas";
import Seccion from "../components/Seccion";
import Icono from "../components/Icono";

/** Mismas 14 urgencias críticas que la portada — sugerencias cuando aún no se ha escrito nada. */
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

/**
 * Página de búsqueda: la puerta de entrada real de Tinterno. Un médico en
 * turno escribe el diagnóstico y necesita la ficha en segundos.
 *
 * El motor (searchDX) vive en lib/busqueda.ts — aquí solo hay presentación:
 * foco automático, resaltado, conteo, exactas antes que aproximadas y un
 * estado vacío útil (recientes, favoritos y sugerencias en vez de pantalla
 * en blanco).
 */
export default function BuscarPage() {
  const [q, setQ] = useState<string>(() => tomarConsultaPendiente());
  const inputRef = useRef<HTMLInputElement>(null);
  const { favoritos, esFavorito } = usarFavoritos();
  const recientes = usarRecientes();

  useAtajoBusqueda(inputRef);

  // La regla de UX pide foco automático al entrar a #buscar, con el cursor
  // al final si ya venía una consulta (p. ej. desde el buscador de Inicio).
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.focus();
    const l = el.value.length;
    el.setSelectionRange(l, l);
    // Solo al montar: es la entrada a la página, no en cada tecla.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const consulta = q.trim();
  const resultados = useMemo(() => (consulta ? searchDX(consulta) : []), [consulta]);
  const exactos = useMemo(() => resultados.filter((r) => !r.f).map((r) => r.d), [resultados]);
  const aproximados = useMemo(() => resultados.filter((r) => r.f).map((r) => r.d), [resultados]);

  function limpiar() {
    setQ("");
    inputRef.current?.focus();
  }

  return (
    <div className="page">
      <h1>Buscar</h1>
      <div className="bigsearch" role="search">
        <Icono nombre="search" />
        <label className="vh" htmlFor="sq">
          Buscar
        </label>
        <input
          ref={inputRef}
          id="sq"
          type="search"
          autoComplete="off"
          placeholder="Diagnóstico, medicamento, escala o sigla…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {q && (
          <button type="button" className="clr on" aria-label="Limpiar búsqueda" onClick={limpiar}>
            <Icono nombre="x" />
          </button>
        )}
      </div>

      <div aria-live="polite">
        {!consulta ? (
          <EstadoVacio recientes={recientes} favoritos={favoritos} esFavorito={esFavorito} />
        ) : resultados.length === 0 ? (
          <div className="empty">
            <b>Sin resultados para “{consulta}”</b>
            Prueba con una sigla, un medicamento o un síntoma. También puedes explorar por sistemas desde{" "}
            <a href="#/">el inicio</a>.
          </div>
        ) : (
          <>
            <p className="rcount">
              {resultados.length} resultado{resultados.length > 1 ? "s" : ""}
            </p>
            <ListaFilas fichas={exactos} consulta={consulta} esFavorito={esFavorito} />
            {aproximados.length > 0 && (
              <>
                <h2 className="rcount" style={{ marginTop: 24 }}>
                  Coincidencias aproximadas
                </h2>
                <ListaFilas fichas={aproximados} esFavorito={esFavorito} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

interface EstadoVacioProps {
  recientes: string[];
  favoritos: string[];
  esFavorito: (id: string) => boolean;
}

function EstadoVacio({ recientes, favoritos, esFavorito }: EstadoVacioProps) {
  const rec = useMemo(() => recientes.map(byId).filter((d): d is Ficha => !!d).slice(0, 6), [recientes]);
  const fav = useMemo(() => favoritos.map(byId).filter((d): d is Ficha => !!d).slice(0, 6), [favoritos]);
  const sugerencias = useMemo(() => CRIT.map(byId).filter((d): d is Ficha => !!d).slice(0, 6), []);

  return (
    <>
      {rec.length > 0 && (
        <Seccion titulo="Recientes">
          <ListaFilas fichas={rec} esFavorito={esFavorito} />
        </Seccion>
      )}
      {fav.length > 0 && (
        <Seccion titulo="Favoritos">
          <ListaFilas fichas={fav} esFavorito={esFavorito} />
        </Seccion>
      )}
      <Seccion titulo="Sugerencias">
        <ListaFilas fichas={sugerencias} esFavorito={esFavorito} />
      </Seccion>
      <p className="muted buscar-ayuda">
        Busca por diagnóstico, sigla (FA, IAM, TEP), medicamento (enoxaparina), escala (Glasgow) o analito
        (ferritina).
      </p>
    </>
  );
}
