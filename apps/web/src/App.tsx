import { useEffect } from "react";
import { useHashRoute } from "./lib/useHashRoute";
import { usarFavoritos, usarPeso } from "./lib/almacenamiento";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import FichaPage from "./pages/FichaPage";
import BuscarPage from "./pages/BuscarPage";
import CategoriaPage from "./pages/CategoriaPage";
import ContextoPage from "./pages/ContextoPage";
import FavoritosPage from "./pages/FavoritosPage";
import AcercaPage from "./pages/AcercaPage";
import ActualizacionAviso from "./components/ActualizacionAviso";
import BarraInferior from "./components/BarraInferior";
import BarraLateral from "./components/BarraLateral";
import { DX } from "@tinterno/content";
import { macName, ctxName } from "./lib/taxonomia";
import "./estilos-navegacion.css";

// Migración de Tinterno al monorepo. Esta app hoy solo renderiza las
// calculadoras; el resto de fichas y tablas sigue en index.html (raíz) hasta
// que se migren. No tocar index.html de la raíz.
//
// Las rutas usan las anclas canónicas `#<id>` de la v7 (regla 6 del
// CLAUDE.md): hay enlaces compartidos apuntando a `#sepsis`, `#c-meld`, etc.
function contenido(route: ReturnType<typeof useHashRoute>) {
  if (route.name === "buscar") return <BuscarPage />;
  if (route.name === "favoritos") return <FavoritosPage />;
  if (route.name === "acerca") return <AcercaPage />;
  if (route.name === "cat") return <CategoriaPage macro={route.macro} sub={route.sub} />;
  if (route.name === "ctx") return <ContextoPage ctx={route.ctx} />;
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
  if (route.name === "cat") return `${route.sub ?? macName(route.macro)} · Tinterno`;
  if (route.name === "ctx") return `${ctxName(route.ctx)} · Tinterno`;
  return TITULO_BASE;
}

export default function App() {
  const route = useHashRoute();
  // Una sola instancia de cada hook para toda la cáscara de navegación
  // (barra inferior, barra lateral, panel del paciente, menú "Más"): cada
  // `usarFavoritos()`/`usarPeso()` es su propio `useState`, así que dos
  // llamadas independientes no se enteran la una de la otra hasta que se
  // vuelve a montar. Con una sola fuente aquí y props hacia abajo, un cambio
  // en cualquier punto de la barra se ve de inmediato en el resto.
  const favoritos = usarFavoritos();
  const pesoPaciente = usarPeso();

  useEffect(() => {
    document.title = tituloDe(route);
  }, [route]);

  return (
    <div className="app-shell">
      {/* No usa href="#main" real: el hash es el router de la app (parseHash trataría
          "#main" como el id de una ficha inexistente). Mueve el foco sin navegar. */}
      <a
        className="nav-skip"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Saltar al contenido
      </a>
      <header className="hdr">
        <div className="hdr-in">
          <a className="logo" href="#/">
            <b>Tinterno</b>
            <small>Guía clínica para el turno</small>
          </a>
        </div>
      </header>
      <div className="nav-layout">
        <BarraLateral
          route={route}
          favoritos={favoritos.favoritos}
          esFavorito={favoritos.esFavorito}
          peso={pesoPaciente.peso}
          fijarPeso={pesoPaciente.fijarPeso}
        />
        <main id="main" tabIndex={-1}>
          {contenido(route)}
        </main>
      </div>
      <BarraInferior
        route={route}
        peso={pesoPaciente.peso}
        fijarPeso={pesoPaciente.fijarPeso}
        esFavorito={favoritos.esFavorito}
        alternarFavorito={favoritos.alternar}
      />
      <ActualizacionAviso />
    </div>
  );
}
