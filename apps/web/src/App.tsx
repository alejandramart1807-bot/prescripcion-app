import { useHashRoute } from "./lib/useHashRoute";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";

// Migración de Tinterno al monorepo. Esta app hoy solo renderiza las
// calculadoras (#/calc/:id); el resto de fichas y tablas sigue en index.html
// (raíz) hasta que se migren. No tocar index.html de la raíz.
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
      <main id="main">{route.name === "calc" ? <CalculatorPage id={route.id} /> : <HomePage />}</main>
    </div>
  );
}
