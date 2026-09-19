import { useRegisterSW } from "virtual:pwa-register/react";

/**
 * Aviso de actualización de la PWA.
 *
 * `registerType: "prompt"` (vite.config.ts) deja el service worker nuevo
 * instalado pero EN ESPERA hasta que alguien confirme acá — no se recarga
 * solo. Al tocar "Actualizar" se manda skipWaiting y, cuando el worker
 * nuevo toma el control, se recarga la MISMA pestaña.
 *
 * Por qué no recarga sola: el peso del paciente vive en sessionStorage
 * (regla 5 del CLAUDE.md, a propósito, para que se borre al cerrar la app).
 * Una recarga de la misma pestaña NO borra sessionStorage — solo cerrar la
 * pestaña o la app lo hace — así que el peso sobrevive la actualización sin
 * arrastrarse al siguiente paciente por accidente.
 */
export default function ActualizacionAviso() {
  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady, setOfflineReady],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error("No se pudo registrar el service worker de Tinterno", error);
    },
  });

  if (offlineReady) {
    // Aviso breve de que ya se puede usar sin señal; no bloquea nada.
    return (
      <div className="pwa-aviso" role="status">
        <span>Tinterno ya quedó disponible sin conexión.</span>
        <button type="button" className="btn small" onClick={() => setOfflineReady(false)}>
          Cerrar
        </button>
      </div>
    );
  }

  if (!needRefresh) return null;

  return (
    <div className="pwa-aviso pwa-aviso-update" role="status">
      <span>Hay una versión nueva de Tinterno.</span>
      <button type="button" className="btn primary small" onClick={() => updateServiceWorker(true)}>
        Actualizar
      </button>
    </div>
  );
}
