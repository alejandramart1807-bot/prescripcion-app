import { useState } from "react";
import type { Ficha } from "@tinterno/content";
import { CLAVES, usarFavoritos, usarRecientes } from "../lib/almacenamiento";
import { byId } from "../lib/taxonomia";
import ListaFilas from "../components/ListaFilas";
import Seccion from "../components/Seccion";

/**
 * Ruta `#favoritos`. Misma idea que `renderFavs()` en index.html (raíz):
 * favoritos primero, recientes después, con botón para borrar el historial.
 *
 * Favoritos y recientes viven solo en este dispositivo (`localStorage`,
 * regla 5 del CLAUDE.md) — de ahí el aviso en el estado vacío.
 */
export default function FavoritosPage() {
  const { favoritos, esFavorito } = usarFavoritos();
  const recientesGuardados = usarRecientes();
  const [historialBorrado, setHistorialBorrado] = useState(false);

  const fav = favoritos.map(byId).filter((d): d is Ficha => !!d);
  const rec = historialBorrado ? [] : recientesGuardados.map(byId).filter((d): d is Ficha => !!d);

  function borrarHistorial() {
    try {
      window.localStorage.removeItem(CLAVES.recientes);
    } catch {
      /* sin almacenamiento: no hay historial que borrar */
    }
    setHistorialBorrado(true);
  }

  return (
    <div className="page">
      <h1>Favoritos y recientes</h1>

      {fav.length > 0 ? (
        <Seccion titulo="Favoritos">
          <ListaFilas fichas={fav} esFavorito={esFavorito} />
        </Seccion>
      ) : (
        <div className="empty">
          <b>Aún no tienes favoritos</b>
          Toca la estrella en cualquier ficha para guardarla aquí. Se guardan solo en este dispositivo, no en una
          cuenta. También puedes <a href="#/">buscar una ficha</a> para empezar.
        </div>
      )}

      {rec.length > 0 && (
        <Seccion
          titulo="Recientes"
          accion={
            <button type="button" className="btn small" onClick={borrarHistorial}>
              Borrar historial
            </button>
          }
        >
          <ListaFilas fichas={rec} esFavorito={esFavorito} />
        </Seccion>
      )}
    </div>
  );
}
