import { useEffect, useState } from "react";
import type { Ficha } from "@tinterno/content";
import type { Route } from "../lib/useHashRoute";
import { fichaHref } from "../lib/useHashRoute";
import { usarBarraLateral, usarRecientes } from "../lib/almacenamiento";
import { byId, CTX, inCtx, inMac, MAC, macroDe, subOf } from "../lib/taxonomia";
import Icono from "./Icono";
import PanelPaciente from "./PanelPaciente";

/** Mismo orden de subgrupos que en CategoriaPage/`subsOf()` de index.html. */
function pesoSub(sub: string): number {
  if (sub === "Escalas y calculadoras") return 2;
  if (/Medicina interna|hospitalaria/.test(sub)) return 1;
  return 0;
}

function subsDeMacro(macro: string): Array<[string, Ficha[]]> {
  const mapa = new Map<string, Ficha[]>();
  inMac(macro).forEach((d) => {
    const s = subOf(d);
    const arr = mapa.get(s);
    if (arr) arr.push(d);
    else mapa.set(s, [d]);
  });
  return [...mapa.entries()].sort((a, b) => pesoSub(a[0]) - pesoSub(b[0]));
}

interface BarraLateralProps {
  route: Route;
  favoritos: string[];
  esFavorito: (id: string) => boolean;
  peso: number | null;
  fijarPeso: (kg: number | null) => void;
}

/**
 * Barra lateral (≥ 1024 px), en vez de la barra inferior — misma estructura
 * que `renderSidebar()` en index.html: favoritos, recientes, contextos y un
 * acordeón de sistemas con una sección abierta a la vez. Se puede colapsar
 * (estado en localStorage, `usarBarraLateral`, clave `tinterno-sb`).
 *
 * Agrega, arriba de esas secciones, los accesos que en la v7 vive en el
 * encabezado de escritorio (Inicio, Buscar, Favoritos y Paciente): aquí
 * BarraInferior no existe en pantallas grandes, así que estos cuatro
 * destinos quedan en la barra lateral para no perder ningún camino.
 *
 * `favoritos`/`esFavorito`/`peso`/`fijarPeso` vienen de App.tsx (una sola
 * llamada a `usarFavoritos`/`usarPeso` para toda la cáscara): repetir esas
 * llamadas aquí y en BarraInferior las desincroniza, porque cada `useState`
 * es independiente y no se entera de lo que cambia el otro.
 */
export default function BarraLateral({ route, favoritos, esFavorito, peso, fijarPeso }: BarraLateralProps) {
  const { colapsada, alternar } = usarBarraLateral();
  const recientes = usarRecientes();
  const [pacienteAbierto, setPacienteAbierto] = useState(false);

  const [abiertoMac, setAbiertoMac] = useState<string | null>(() => {
    if (route.name === "ficha") return macroDe(route.id);
    if (route.name === "cat") return route.macro;
    return null;
  });

  // Mantiene el acordeón sincronizado con la ficha o categoría actual, igual
  // que `route()` en index.html (que reasigna SB_OPEN en cada navegación).
  useEffect(() => {
    if (route.name === "ficha") {
      const mac = macroDe(route.id);
      if (mac) setAbiertoMac(mac);
    } else if (route.name === "cat") {
      setAbiertoMac(route.macro);
    }
  }, [route]);

  const fav = favoritos
    .map(byId)
    .filter((d): d is Ficha => !!d)
    .slice(0, 6);
  const rec = recientes
    .map(byId)
    .filter((d): d is Ficha => !!d)
    .slice(0, 5);

  const esFichaActual = (id: string) => route.name === "ficha" && route.id === id;

  return (
    <>
      <aside className={`nav-sidebar${colapsada ? " nav-sidebar-off" : ""}`} aria-label="Navegación de Tinterno">
        <button
          type="button"
          className="nav-sb-toggle"
          onClick={alternar}
          aria-expanded={!colapsada}
          aria-controls="nav-sb-body"
        >
          <Icono nombre="panel" />
          <span>{colapsada ? "Mostrar barra" : "Ocultar barra"}</span>
        </button>

        {!colapsada && (
          <div id="nav-sb-body">
            <nav className="nav-sb-top" aria-label="Accesos principales">
              <a href="#/" aria-current={route.name === "inicio" ? "page" : undefined}>
                <Icono nombre="home" />
                Inicio
              </a>
              <a href="#buscar" aria-current={route.name === "buscar" ? "page" : undefined}>
                <Icono nombre="search" />
                Buscar
              </a>
              <a href="#favoritos" aria-current={route.name === "favoritos" ? "page" : undefined}>
                <Icono nombre="star" />
                Favoritos
              </a>
              <button type="button" onClick={() => setPacienteAbierto(true)}>
                <Icono nombre="scale" />
                {peso ? `${peso} kg` : "Paciente"}
              </button>
            </nav>

            <h2>Favoritos</h2>
            {fav.length > 0 ? (
              <ul className="nav-nl">
                {fav.map((f) => (
                  <li key={f.id}>
                    <a href={fichaHref(f.id)} aria-current={esFichaActual(f.id) ? "page" : undefined}>
                      {f.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="nav-sb-empty">Marca fichas con la estrella para tenerlas aquí.</p>
            )}

            {rec.length > 0 && (
              <>
                <h2>Recientes</h2>
                <ul className="nav-nl">
                  {rec.map((f) => (
                    <li key={f.id}>
                      <a href={fichaHref(f.id)} aria-current={esFichaActual(f.id) ? "page" : undefined}>
                        {f.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2>Contextos</h2>
            <ul className="nav-nl">
              {CTX.map((c) => (
                <li key={c.k}>
                  <a href={`#ctx/${c.k}`} aria-current={route.name === "ctx" && route.ctx === c.k ? "page" : undefined}>
                    {c.n}
                    <span className="nav-cnt">{inCtx(c.k).length}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h2>Sistemas</h2>
            <ul className="nav-nl">
              {MAC.map((m) => {
                const abierto = abiertoMac === m.k;
                return (
                  <li key={m.k}>
                    <button
                      type="button"
                      aria-expanded={abierto}
                      onClick={() => setAbiertoMac(abierto ? null : m.k)}
                    >
                      {m.n}
                      <span className="nav-cnt">{inMac(m.k).length}</span>
                      <Icono nombre="right" className="nav-chev" />
                    </button>
                    {abierto && (
                      <ul className="nav-sub-nl">
                        {subsDeMacro(m.k).map(([s, fichas]) => (
                          <li key={s}>
                            <span className="nav-sh">{s}</span>
                            <ul className="nav-nl">
                              {fichas.map((f) => (
                                <li key={f.id}>
                                  <a href={fichaHref(f.id)} aria-current={esFichaActual(f.id) ? "page" : undefined}>
                                    {f.name}
                                    {esFavorito(f.id) && <Icono nombre="starFill" className="nav-nl-fav" />}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </aside>
      <PanelPaciente
        abierta={pacienteAbierto}
        onCerrar={() => setPacienteAbierto(false)}
        peso={peso}
        fijarPeso={fijarPeso}
      />
    </>
  );
}
