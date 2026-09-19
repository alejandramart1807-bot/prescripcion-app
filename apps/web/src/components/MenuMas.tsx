import Icono from "./Icono";
import Capa from "./Capa";

interface MenuMasProps {
  abierta: boolean;
  onCerrar: () => void;
  /** Presente solo cuando el menú se abre desde una ficha (botón "Más" de la barra inferior). */
  fichaId?: string;
  fichaNombre?: string;
  /** `usarFavoritos()` del padre — una sola instancia compartida, ver PanelPaciente.tsx. */
  esFavorito: (id: string) => boolean;
  alternarFavorito: (id: string) => void;
}

/**
 * Menú "Más opciones" del botón homónimo de la barra inferior en una ficha —
 * igual que `openMenu()`/`#menuDlg` en index.html, recortado a lo que no
 * depende de FichaPage (favorito, compartir, imprimir, navegar a
 * Favoritos/Acerca). No incluye "ver evidencia" ni "cambiar tema": la
 * primera vive dentro de la propia ficha (otro agente la mantiene) y la
 * segunda no tiene todavía un interruptor manual en apps/web.
 */
export default function MenuMas({
  abierta,
  onCerrar,
  fichaId,
  fichaNombre,
  esFavorito,
  alternarFavorito,
}: MenuMasProps) {
  async function compartir() {
    const url = `${window.location.href.split("#")[0]}#${fichaId}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: fichaNombre ? `Tinterno · ${fichaNombre}` : "Tinterno", url });
        onCerrar();
        return;
      }
    } catch {
      // el usuario canceló el share sheet: no hace falta respaldo
      onCerrar();
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // sin portapapeles disponible: no hay más respaldo posible aquí
    }
    onCerrar();
  }

  return (
    <Capa titulo="Opciones" abierta={abierta} onCerrar={onCerrar}>
      <ul className="nav-menu-list">
        {fichaId && (
          <>
            <li>
              <button
                type="button"
                onClick={() => {
                  alternarFavorito(fichaId);
                  onCerrar();
                }}
              >
                <Icono nombre={esFavorito(fichaId) ? "starFill" : "star"} />
                {esFavorito(fichaId) ? "Quitar de favoritos" : "Agregar a favoritos"}
              </button>
            </li>
            <li>
              <button type="button" onClick={compartir}>
                <Icono nombre="share" />
                Compartir enlace
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  onCerrar();
                  window.print();
                }}
              >
                Imprimir
              </button>
            </li>
          </>
        )}
        <li>
          <a href="#favoritos" onClick={onCerrar}>
            <Icono nombre="star" />
            Favoritos y recientes
          </a>
        </li>
        <li>
          <a href="#acerca" onClick={onCerrar}>
            <Icono nombre="info" />
            Cómo funciona Tinterno
          </a>
        </li>
      </ul>
    </Capa>
  );
}
