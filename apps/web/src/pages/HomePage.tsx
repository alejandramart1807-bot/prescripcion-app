import { useMemo, useState } from "react";
import { DX } from "@tinterno/content";
import type { FichaCalc } from "@tinterno/content";
import { calcHref } from "../lib/useHashRoute";

function isFichaCalc(d: (typeof DX)[number]): d is FichaCalc {
  return "calcForm" in d && !!d.calcForm;
}

const CALCS: FichaCalc[] = DX.filter(isFichaCalc);

/**
 * Portada mínima para navegar las 51 calculadoras mientras el resto de la
 * migración a apps/web sigue en curso (fichas de prescripción y tablas de
 * referencia todavía no se renderizan aquí).
 */
export default function HomePage() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return CALCS;
    return CALCS.filter(
      (c) => c.name.toLowerCase().includes(query) || c.aka.toLowerCase().includes(query),
    );
  }, [q]);

  return (
    <div className="page">
      <h1>Calculadoras</h1>
      <p className="cf-sub">{DX.length} fichas en el contenido · 51 calculadoras interactivas.</p>
      <input
        className="home-search"
        type="search"
        placeholder="Buscar calculadora…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Buscar calculadora"
      />
      <ul className="home-list">
        {results.map((c) => (
          <li key={c.id}>
            <a href={calcHref(c.id)}>
              <span className="t">
                <b>{c.name}</b>
                <small>{c.sub}</small>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
