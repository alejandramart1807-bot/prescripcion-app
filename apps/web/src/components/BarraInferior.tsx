import { useRef, useState } from "react";
import { GUIDES } from "@tinterno/content";
import type { Route } from "../lib/useHashRoute";
import { byId, tipoDe } from "../lib/taxonomia";
import { copiarAlPortapapeles, seleccionInicial, textoParaCopiar, vibrarCopiado } from "../lib/copiarOrdenes";
import Icono, { type NombreIcono } from "./Icono";
import PanelPaciente from "./PanelPaciente";
import MenuMas from "./MenuMas";

interface BarraInferiorProps {
  route: Route;
  peso: number | null;
  fijarPeso: (kg: number | null) => void;
  esFavorito: (id: string) => boolean;
  alternarFavorito: (id: string) => void;
}

interface Destino {
  href: string;
  icono: NombreIcono;
  etiqueta: string;
  activo: boolean;
}

/**
 * Barra inferior (< 1024 px), reemplazada por BarraLateral en escritorio.
 *
 * La v7 (`renderBnav` en index.html raíz) tenía CINCO destinos: Inicio,
 * Buscar, Explorar, Favoritos, Paciente. Se consolida a CUATRO — Inicio,
 * Buscar, Favoritos, Paciente — porque "Explorar" (hoja con buscador +
 * contextos + sistemas) se solapaba con la portada, que ya trae el mismo
 * buscador y las mismas categorías (`renderHome` en HomePage.tsx ya cubre
 * contextos y "Explorar por sistemas"). Quitar Explorar no pierde ningún
 * camino: sigue siendo alcanzable desde Inicio en un toque.
 *
 * En una ficha (calculadora, tabla o ficha de prescripción) la barra cambia
 * a las acciones de esa ficha — Volver / Copiar u Peso / Favorito / Más —
 * igual que en la v7: es el pulgar el que decide qué acción es la principal.
 * "Copiar órdenes" aquí copia TODAS las órdenes (como `copyOrders(d)` en
 * index.html); FichaPage además ofrece copiar una selección desde su propia
 * barra de acción al final del contenido — dos entradas al mismo verbo, una
 * rápida desde cualquier punto del scroll y otra precisa tras revisar la
 * ficha.
 */
export default function BarraInferior({ route, peso, fijarPeso, esFavorito, alternarFavorito }: BarraInferiorProps) {
  const [pacienteAbierto, setPacienteAbierto] = useState(false);
  const [masAbierto, setMasAbierto] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  const avisoTimeout = useRef<number | undefined>(undefined);

  const ficha = route.name === "ficha" ? byId(route.id) : undefined;

  function mostrarAviso(msg: string) {
    setAviso(msg);
    window.clearTimeout(avisoTimeout.current);
    avisoTimeout.current = window.setTimeout(() => setAviso(null), 2200);
  }

  function volver() {
    if (window.history.length > 1) window.history.back();
    else window.location.hash = "";
  }

  async function copiarTodas() {
    if (!ficha || !("orders" in ficha)) return;
    const guide = GUIDES[ficha.id] || ficha.g;
    const texto = textoParaCopiar(ficha, guide, peso, seleccionInicial(ficha));
    const ok = await copiarAlPortapapeles(texto);
    if (ok) {
      vibrarCopiado();
      mostrarAviso("Órdenes copiadas al portapapeles");
    } else {
      mostrarAviso("No se pudo copiar");
    }
  }

  if (ficha) {
    const puedeCopiar = tipoDe(ficha) === "ficha";
    const favOn = esFavorito(ficha.id);
    return (
      <>
        <nav className="nav-bnav" aria-label="Acciones de la ficha">
          <button type="button" onClick={volver}>
            <Icono nombre="left" />
            <span>Volver</span>
          </button>
          {puedeCopiar ? (
            <button type="button" className="nav-bnav-primary" onClick={copiarTodas}>
              <Icono nombre="copy" />
              {/* Dos rótulos: a 320 px "Copiar órdenes" no cabe junto a los otros tres
                  botones ni reduciendo la letra, así que se acorta en vez de recortarse
                  a medias con elipsis. */}
              <span className="nav-bnav-primary-full">Copiar órdenes</span>
              <span className="nav-bnav-primary-corto">Copiar</span>
            </button>
          ) : (
            <button type="button" onClick={() => setPacienteAbierto(true)}>
              <Icono nombre="scale" />
              <span>{peso ? `${peso} kg` : "Peso"}</span>
            </button>
          )}
          <button
            type="button"
            className={favOn ? "nav-fav-on" : ""}
            aria-pressed={favOn}
            aria-label={favOn ? "Quitar de favoritos" : "Agregar a favoritos"}
            onClick={() => alternarFavorito(ficha.id)}
          >
            <Icono nombre={favOn ? "starFill" : "star"} />
            <span>Favorito</span>
          </button>
          <button type="button" aria-haspopup="dialog" onClick={() => setMasAbierto(true)}>
            <Icono nombre="more" />
            <span>Más</span>
          </button>
        </nav>
        {aviso && (
          <p className="nav-toast" role="status" aria-live="polite">
            {aviso}
          </p>
        )}
        <PanelPaciente
          abierta={pacienteAbierto}
          onCerrar={() => setPacienteAbierto(false)}
          peso={peso}
          fijarPeso={fijarPeso}
        />
        <MenuMas
          abierta={masAbierto}
          onCerrar={() => setMasAbierto(false)}
          fichaId={ficha.id}
          fichaNombre={ficha.name}
          esFavorito={esFavorito}
          alternarFavorito={alternarFavorito}
        />
      </>
    );
  }

  const destinos: Destino[] = [
    { href: "#/", icono: "home", etiqueta: "Inicio", activo: route.name === "inicio" },
    { href: "#buscar", icono: "search", etiqueta: "Buscar", activo: route.name === "buscar" },
    { href: "#favoritos", icono: "star", etiqueta: "Favoritos", activo: route.name === "favoritos" },
  ];

  return (
    <>
      <nav className="nav-bnav" aria-label="Navegación principal">
        {destinos.map((d) => (
          <a key={d.etiqueta} href={d.href} aria-current={d.activo ? "page" : undefined}>
            <Icono nombre={d.icono} />
            <span>{d.etiqueta}</span>
          </a>
        ))}
        <button type="button" aria-label="Paciente" onClick={() => setPacienteAbierto(true)}>
          <Icono nombre="scale" />
          <span>{peso ? `${peso} kg` : "Paciente"}</span>
        </button>
      </nav>
      <PanelPaciente
        abierta={pacienteAbierto}
        onCerrar={() => setPacienteAbierto(false)}
        peso={peso}
        fijarPeso={fijarPeso}
      />
    </>
  );
}
