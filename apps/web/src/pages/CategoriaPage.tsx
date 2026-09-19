import { useMemo } from "react";
import type { Ficha } from "@tinterno/content";
import { usarFavoritos } from "../lib/almacenamiento";
import { inMac, MAC, subOf } from "../lib/taxonomia";
import ListaFilas from "../components/ListaFilas";
import Migas from "../components/Migas";
import Icono from "../components/Icono";

/**
 * Orden de los subgrupos dentro de una macrocategoría: los sistemas propios
 * primero, "Medicina interna: piso y consulta" después y "Escalas y
 * calculadoras" al final — igual que `subsOf()` en index.html.
 */
function pesoSub(sub: string): number {
  if (sub === "Escalas y calculadoras") return 2;
  if (/Medicina interna|hospitalaria/.test(sub)) return 1;
  return 0;
}

function agruparPorSub(fichas: Ficha[]): Array<[string, Ficha[]]> {
  const mapa = new Map<string, Ficha[]>();
  fichas.forEach((d) => {
    const s = subOf(d);
    const arr = mapa.get(s);
    if (arr) arr.push(d);
    else mapa.set(s, [d]);
  });
  return [...mapa.entries()].sort((a, b) => pesoSub(a[0]) - pesoSub(b[0]));
}

interface CategoriaPageProps {
  macro?: string;
  sub?: string;
}

/**
 * Ruta `#cat/<macro>` y `#cat/<macro>/<sub>`: fichas de una macrocategoría
 * (Cardiovascular, Cirugía y trauma…), agrupadas por subcategoría — misma
 * lógica que `renderCat()` en index.html, con `inMac`/`subOf` de
 * lib/taxonomia.ts (sin modificarlo).
 */
export default function CategoriaPage({ macro, sub }: CategoriaPageProps) {
  const { esFavorito } = usarFavoritos();
  const m = useMemo(() => MAC.find((x) => x.k === macro), [macro]);

  const todos = useMemo(() => (m ? agruparPorSub(inMac(m.k)) : []), [m]);
  const grupos = useMemo(() => (sub ? todos.filter(([s]) => s === sub) : todos), [todos, sub]);

  if (!m) {
    return (
      <div className="page nav-empty">
        <b>No encontramos esa página</b>
        <a href="#/">Volver al inicio</a>
      </div>
    );
  }

  const total = todos.reduce((n, [, arr]) => n + arr.length, 0);
  const abrirTodo = !!sub || grupos.length === 1;

  return (
    <div className="page">
      <Migas
        items={
          sub
            ? [{ href: "#/", texto: "Inicio" }, { href: `#cat/${m.k}`, texto: m.n }, { texto: sub }]
            : [{ href: "#/", texto: "Inicio" }, { texto: "Sistemas" }]
        }
      />
      <h1>{sub || m.n}</h1>
      {!sub && (
        <p className="nav-lead">
          {total} ficha{total === 1 ? "" : "s"} en {todos.length} sección{todos.length === 1 ? "" : "es"}.
        </p>
      )}
      {grupos.length === 0 && <p className="nav-empty">Sin fichas.</p>}
      {grupos.map(([nombreSub, lista], i) => (
        <details key={nombreSub} className="hsec" open={abrirTodo || i === 0}>
          <summary className="hsec-h">
            <h2>{nombreSub}</h2>
            <span className="muted">{lista.length}</span>
            <Icono nombre="right" className="hsec-chev" />
          </summary>
          <ListaFilas fichas={lista} esFavorito={esFavorito} />
        </details>
      ))}
    </div>
  );
}
