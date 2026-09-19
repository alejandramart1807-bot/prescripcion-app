import { useMemo } from "react";
import type { Ficha } from "@tinterno/content";
import { usarFavoritos } from "../lib/almacenamiento";
import { CTX, ctxName, inCtx, macroDe, MAC } from "../lib/taxonomia";
import ListaFilas from "../components/ListaFilas";
import Migas from "../components/Migas";
import Icono from "../components/Icono";

/** Calculadoras y referencias se agrupan por su propio `group`; el resto, por macrocategoría — igual que `renderCtx()`. */
function agruparPorGroup(fichas: Ficha[]): Array<[string, Ficha[]]> {
  const mapa = new Map<string, Ficha[]>();
  fichas.forEach((d) => {
    const arr = mapa.get(d.group);
    if (arr) arr.push(d);
    else mapa.set(d.group, [d]);
  });
  return [...mapa.entries()];
}

function agruparPorMacro(fichas: Ficha[]): Array<[string, Ficha[]]> {
  return MAC.map((m): [string, Ficha[]] => [m.n, fichas.filter((d) => macroDe(d.id) === m.k)]).filter(
    ([, arr]) => arr.length > 0,
  );
}

interface ContextoPageProps {
  ctx?: string;
}

/**
 * Ruta `#ctx/<contexto>`: urgencias, hospital, consulta, crítico, calc, ref
 * y `peso` (fichas con dosis que dependen del peso) — misma lógica que
 * `renderCtx()` en index.html, con `inCtx`/`ctxName` de lib/taxonomia.ts.
 */
export default function ContextoPage({ ctx }: ContextoPageProps) {
  const { esFavorito } = usarFavoritos();
  const c = useMemo(() => CTX.find((x) => x.k === ctx), [ctx]);
  const lista = useMemo(() => (ctx ? inCtx(ctx) : []), [ctx]);

  const existe = !!ctx && (lista.length > 0 || ctx === "peso");
  if (!existe) {
    return (
      <div className="page nav-empty">
        <b>No encontramos esa página</b>
        <a href="#/">Volver al inicio</a>
      </div>
    );
  }

  const plano = ctx === "calc" || ctx === "ref";
  const grupos = plano ? agruparPorGroup(lista) : agruparPorMacro(lista);
  const abrirTodo = plano || grupos.length === 1;

  const descripcion =
    ctx === "peso"
      ? "Fichas con dosis que se calculan con el peso del paciente."
      : `${c ? c.d + ". " : ""}${lista.length} ficha${lista.length === 1 ? "" : "s"}.`;

  return (
    <div className="page">
      <Migas items={[{ href: "#/", texto: "Inicio" }, { texto: "Contextos" }]} />
      <h1>{ctxName(ctx!)}</h1>
      <p className="nav-lead">{descripcion}</p>
      {grupos.length === 0 && <p className="nav-empty">Sin fichas.</p>}
      {grupos.map(([titulo, arr], i) => (
        <details key={titulo} className="hsec" open={abrirTodo || i === 0}>
          <summary className="hsec-h">
            <h2>{titulo}</h2>
            <span className="muted">{arr.length}</span>
            <Icono nombre="right" className="hsec-chev" />
          </summary>
          <ListaFilas fichas={arr} esFavorito={esFavorito} />
        </details>
      ))}
    </div>
  );
}
