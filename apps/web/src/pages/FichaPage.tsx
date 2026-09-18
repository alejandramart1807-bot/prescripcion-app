import { useEffect, useMemo, useRef, useState } from "react";
import { DX, GUIDES } from "@tinterno/content";
import type { FichaOrders, FichaRef, Guide, OrderLine } from "@tinterno/content";
import { fichaHref } from "../lib/useHashRoute";
import { usarPeso } from "../lib/almacenamiento";
import { estadoGuia, guiaPrincipal } from "../lib/guia";
import { resaltarNotificacion } from "../lib/resaltarTexto";
import {
  copiarAlPortapapeles,
  lineaOrden,
  numeroDeOrden,
  seleccionInicial,
  textoParaCopiar,
  totalOrdenes,
  vibrarCopiado,
} from "../lib/copiarOrdenes";
import GuiaFicha from "../components/GuiaFicha";
import OrdenItem from "../components/OrdenItem";
import TablaReferencia from "../components/TablaReferencia";

function esFichaRef(d: (typeof DX)[number]): d is FichaRef {
  return "rows" in d && Array.isArray((d as FichaRef).rows);
}

function esFichaOrders(d: (typeof DX)[number]): d is FichaOrders {
  return "orders" in d && Array.isArray((d as FichaOrders).orders);
}

/** "1", "1." o "1)": paso numerado del flujo (igual a `isNum()` de index.html). */
const isNum = (x: string) => /^\s*\d+[.)]?\s*$/.test(x);

/** Cuántas órdenes dependen del peso (excluye `min`/`h`, que no lo necesitan). */
function ordenesConPeso(ficha: FichaOrders): number {
  return ficha.orders.filter(
    (o): o is OrderLine => !("cat" in o) && !!o.calc && o.calc.t !== "min" && o.calc.t !== "h",
  ).length;
}

interface FichaPageProps {
  id: string;
}

export default function FichaPage({ id }: FichaPageProps) {
  const ficha = useMemo(() => DX.find((d) => d.id === id), [id]);

  if (!ficha) {
    return (
      <div className="page">
        <p className="cf-txt">
          No encontramos la ficha <code>{id}</code>.
        </p>
        <a className="btn secondary" href="#/">
          Volver al inicio
        </a>
      </div>
    );
  }

  if (esFichaRef(ficha)) return <FichaRefView key={ficha.id} ficha={ficha} />;
  if (esFichaOrders(ficha)) return <FichaOrdersView key={ficha.id} ficha={ficha} />;

  // No debería ocurrir: App.tsx enruta las fichas con calcForm a CalculatorPage.
  return (
    <div className="page">
      <p className="cf-txt">
        <code>{id}</code> no es una ficha de prescripción ni una tabla de referencia.
      </p>
      <a className="btn secondary" href="#/">
        Volver al inicio
      </a>
    </div>
  );
}

function FichaRefView({ ficha }: { ficha: FichaRef }) {
  return (
    <article className="page" aria-labelledby="ftitle">
      <header className="ficha-head">
        <a className="cf-back" href="#/">
          ← Inicio
        </a>
        <h1 id="ftitle">{ficha.name}</h1>
        {ficha.sub && <p className="cf-sub">{ficha.sub}</p>}
        <span className="badge neutral">Valores de referencia</span>
      </header>

      <TablaReferencia ficha={ficha} />

      {ficha.notes.length > 0 && (
        <ul className="criteria" style={{ marginTop: 16 }}>
          {ficha.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}

      <Relacionado rel={ficha.rel} />

      <p className="foot">Rangos aproximados de adulto salvo que se indique. Prevalecen los valores de tu laboratorio.</p>
    </article>
  );
}

function FichaOrdersView({ ficha }: { ficha: FichaOrders }) {
  const guide: Guide | undefined = GUIDES[ficha.id] || ficha.g;
  const { peso, fijarPeso } = usarPeso();
  const [seleccion, setSeleccion] = useState<Set<number>>(() => seleccionInicial(ficha));
  const [aviso, setAviso] = useState<string | null>(null);
  const avisoTimeout = useRef<number | undefined>(undefined);
  const [evidenciaAbierta, setEvidenciaAbierta] = useState(false);

  useEffect(() => () => window.clearTimeout(avisoTimeout.current), []);

  function mostrarAviso(msg: string) {
    setAviso(msg);
    window.clearTimeout(avisoTimeout.current);
    avisoTimeout.current = window.setTimeout(() => setAviso(null), 2200);
  }

  function alternarSeleccion(index: number) {
    setSeleccion((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const total = totalOrdenes(ficha);
  const nSel = seleccion.size;

  async function copiarSeleccionadas() {
    const texto = textoParaCopiar(ficha, guide, peso, seleccion);
    const ok = await copiarAlPortapapeles(texto);
    if (ok) {
      vibrarCopiado();
      mostrarAviso("Órdenes copiadas al portapapeles");
    } else {
      mostrarAviso("No se pudo copiar");
    }
  }

  async function copiarUna(index: number) {
    const orden = ficha.orders[index];
    if (!orden || "cat" in orden) return;
    const n = numeroDeOrden(ficha, index);
    const texto = lineaOrden(ficha.id, orden, n, peso);
    const ok = await copiarAlPortapapeles(texto);
    if (ok) {
      vibrarCopiado();
      mostrarAviso(`Orden ${n} copiada`);
    } else {
      mostrarAviso("No se pudo copiar");
    }
  }

  const primeraOrden = ficha.orders.find((o): o is OrderLine => !("cat" in o));
  const resumen: Array<[string, string, boolean]> = [];
  if (ficha.flow && ficha.flow[0]) {
    const f0 = ficha.flow[0];
    resumen.push(["Primer paso", isNum(f0[0]) ? f0[1] ?? "" : `${f0[0]}: ${f0[1] ?? ""}`, false]);
  }
  if (primeraOrden) {
    resumen.push(["Primera orden", `${primeraOrden.d}${primeraOrden.dose ? " — " + primeraOrden.dose : ""}`, true]);
  }
  if (ficha.goals && ficha.goals[0]) resumen.push(["Meta", ficha.goals[0], false]);
  if (ficha.alerts && ficha.alerts[0]) resumen.push(["Alerta principal", ficha.alerts[0], false]);

  const [estBadge] = [estadoGuia(guide)];
  const nPeso = ordenesConPeso(ficha);

  return (
    <article className="page" aria-labelledby="ftitle">
      <header className="ficha-head">
        <a className="cf-back" href="#/">
          ← Inicio
        </a>
        <h1 id="ftitle">{ficha.name}</h1>
        {ficha.sub && <p className="cf-sub">{ficha.sub}</p>}
        <div className="fmeta">
          <span className={`badge ${estBadge.clase}`}>{estBadge.texto}</span>
        </div>
        {guiaPrincipal(guide) && (
          <div className="evstrip">
            <span>
              <b>Guía principal:</b> {guiaPrincipal(guide)}
            </span>
            <button type="button" onClick={() => setEvidenciaAbierta(true)}>
              Ver evidencia
            </button>
          </div>
        )}
      </header>

      {resumen.length > 0 && (
        <section className="fsec panel summary" aria-labelledby="h-sum">
          <h2 id="h-sum" className="sr-only">
            Resumen de la conducta
          </h2>
          <dl>
            {resumen.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{resaltarNotificacion(v)}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {nPeso > 0 && (
        <div className={`wnote-top${peso ? " wnote-ok" : ""}`}>
          {peso ? (
            <>
              <span>
                Dosis por peso calculadas con <b>{peso} kg</b>.
              </span>
              <button type="button" className="btn small" onClick={() => fijarPeso(null)}>
                Cambiar
              </button>
            </>
          ) : (
            <span>
              Esta ficha tiene <b>{nPeso}</b> {nPeso > 1 ? "dosis que dependen" : "dosis que depende"} del peso del
              paciente. Ingresa el peso en la orden correspondiente.
            </span>
          )}
        </div>
      )}

      {ficha.flow && ficha.flow.length > 0 && (
        <section className="fsec" aria-labelledby="h-fl">
          <h2 className="sec" id="h-fl">
            Flujo de decisión
          </h2>
          <ol className="flow">
            {ficha.flow.map((f, i) => (
              <li key={i}>{isNum(f[0]) ? <b>{f[1] ?? ""}</b> : <><b>{f[0]}</b><span>{f[1] ?? ""}</span></>}</li>
            ))}
          </ol>
        </section>
      )}

      {ficha.criteria && ficha.criteria.length > 0 && (
        <section className="fsec" aria-labelledby="h-an">
          <h2 className="sec" id="h-an">
            Antes de ordenar
          </h2>
          <ul className="criteria">
            {ficha.criteria.map((c, i) => (
              <li key={i}>{resaltarNotificacion(c)}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="fsec" aria-labelledby="h-or">
        <div className="oh">
          <h2 className="sec" id="h-or">
            Órdenes médicas
          </h2>
          <div className="oh-sel">
            <button type="button" onClick={() => setSeleccion(seleccionInicial(ficha))}>
              Todas
            </button>
            <button type="button" onClick={() => setSeleccion(new Set())}>
              Ninguna
            </button>
          </div>
        </div>
        <ol className="orders">
          {ficha.orders.map((o, i) =>
            "cat" in o ? (
              <li className="ord ocat" key={i}>
                {o.cat}
              </li>
            ) : (
              <OrdenItem
                key={i}
                fichaId={ficha.id}
                orden={o}
                index={i}
                peso={peso}
                seleccionada={seleccion.has(i)}
                onAlternarSeleccion={alternarSeleccion}
                onFijarPeso={fijarPeso}
                onCopiar={copiarUna}
              />
            ),
          )}
        </ol>
      </section>

      {((ficha.goals && ficha.goals.length > 0) || (ficha.alerts && ficha.alerts.length > 0)) && (
        <section className="fsec twin" aria-label="Metas y alertas">
          {ficha.goals && ficha.goals.length > 0 && (
            <div className="box goals">
              <h3>Metas</h3>
              <ul>
                {ficha.goals.map((g, i) => (
                  <li key={i}>{resaltarNotificacion(g)}</li>
                ))}
              </ul>
            </div>
          )}
          {ficha.alerts && ficha.alerts.length > 0 && (
            <div className="box alerts">
              <h3>Alertas</h3>
              <ul>
                {ficha.alerts.map((a, i) => (
                  <li key={i}>{resaltarNotificacion(a)}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <Relacionado rel={ficha.rel} />

      <section className="fsec">
        <details className="evd panel" open={evidenciaAbierta} onToggle={(e) => setEvidenciaAbierta(e.currentTarget.open)}>
          <summary>Evidencia y referencias</summary>
          <GuiaFicha guide={guide} />
        </details>
      </section>

      <div className="factbar">
        <button type="button" className="btn primary" disabled={nSel === 0} onClick={copiarSeleccionadas}>
          {nSel === 0
            ? "Selecciona al menos una orden"
            : `Copiar ${nSel}${nSel !== total ? ` de ${total}` : ""} ${nSel === 1 ? "orden" : "órdenes"}`}
        </button>
        <button type="button" className="btn" onClick={() => window.print()}>
          Imprimir
        </button>
      </div>

      <p className="foot" role="status" aria-live="polite">
        {aviso || "Apoyo a la decisión clínica. Verifica dosis, diluciones de tu servicio, función renal, alergias, embarazo e interacciones."}
      </p>
    </article>
  );
}

function Relacionado({ rel }: { rel?: string[] }) {
  const relacionados = useMemo(
    () => (rel || []).map((id) => DX.find((x) => x.id === id)).filter((x): x is (typeof DX)[number] => !!x),
    [rel],
  );
  if (relacionados.length === 0) return null;
  return (
    <section className="fsec" aria-labelledby="h-rel">
      <h2 className="sec" id="h-rel">
        Relacionado
      </h2>
      <ul className="home-list">
        {relacionados.map((r) => (
          <li key={r.id}>
            <a href={fichaHref(r.id)}>
              <span className="t">
                <b>{r.name}</b>
                {r.sub && <small>{r.sub}</small>}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
