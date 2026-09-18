import { useHashRoute } from "./lib/useHashRoute";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";

// Migración de Tinterno al monorepo. Esta app hoy solo renderiza las
// calculadoras; el resto de fichas y tablas sigue en index.html (raíz) hasta
// que se migren. No tocar index.html de la raíz.
//
// Las rutas usan las anclas canónicas `#<id>` de la v7 (regla 6 del
// CLAUDE.md): hay enlaces compartidos apuntando a `#sepsis`, `#c-meld`, etc.
export default function App() {
  const route = useHashRoute();

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
      <main id="main">{route.name === "ficha" ? <CalculatorPage id={route.id} /> : <HomePage />}</main>
    </div>
  );
}
