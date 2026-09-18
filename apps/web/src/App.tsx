import { useEffect } from "react";
import { useHashRoute } from "./lib/useHashRoute";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import FichaPage from "./pages/FichaPage";
import BuscarPage from "./pages/BuscarPage";
import { DX } from "@tinterno/content";

// Migración de Tinterno al monorepo. Esta app hoy solo renderiza las
// calculadoras; el resto de fichas y tablas sigue en index.html (raíz) hasta
// que se migren. No tocar index.html de la raíz.
//
// Las rutas usan las anclas canónicas `#<id>` de la v7 (regla 6 del
// CLAUDE.md): hay enlaces compartidos apuntando a `#sepsis`, `#c-meld`, etc.
function contenido(route: ReturnType<typeof useHashRoute>) {
  if (route.name === "buscar") return <BuscarPage />;
  if (route.name === "ficha") {
    // Una calculadora se distingue por tener calcForm; el resto son fichas de
    // prescripción o tablas de referencia. Misma ancla `#<id>` para todas.
    const d = DX.find((x) => x.id === route.id);
    return d && "calcForm" in d ? <CalculatorPage id={route.id} /> : <FichaPage id={route.id} />;
  }
  return <HomePage />;
}

const TITULO_BASE = "Tinterno · Guía clínica para el turno";

/** La v7 actualiza el título por ruta; sin esto el historial y las pestañas
 *  compartidas pierden el nombre de la ficha. */
function tituloDe(route: ReturnType<typeof useHashRoute>): string {
  if (route.name === "ficha") {
    const d = DX.find((x) => x.id === route.id);
    return d ? `${d.name} · Tinterno` : TITULO_BASE;
  }
  if (route.name === "buscar") return "Buscar · Tinterno";
  if (route.name === "favoritos") return "Favoritos · Tinterno";
  if (route.name === "acerca") return "Cómo funciona · Tinterno";
  return TITULO_BASE;
}

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    document.title = tituloDe(route);
  }, [route]);

  return (
    <div className="app-shell">
      <header className="hdr">
        <div className="hdr-in">
          <a className="logo" href="#/">
            <b>Tinterno</b>
            <small>Calculadoras</small>
          </a>
        </div>
      </header>
      <main id="main">{contenido(route)}</main>
    </div>
  );
}
