/// <reference lib="webworker" />
/* eslint-disable no-restricted-globals */

/**
 * Service worker de apps/web (Tinterno).
 *
 * MUY IMPORTANTE — no es un detalle de implementación: este archivo se
 * publica como `/sw.js` en la RAÍZ del sitio (ver `filename: "sw.ts"` +
 * `srcDir: "src"` en vite.config.ts, que hace que el build lo emita como
 * `dist/sw.js`, no dentro de un subdirectorio). Los celulares que ya
 * instalaron la v7.0 tienen un service worker registrado en `/sw.js` con
 * ámbito `/` y caché `tinterno-v7-0`. Si este worker apareciera en otra
 * ruta, el viejo se quedaría registrado indefinidamente sirviendo su copia
 * cacheada y esos usuarios nunca recibirían una actualización — ni una
 * corrección de dosis. Por eso, al activarse, este worker borra cualquier
 * caché que no sea suya (incluida `tinterno-v7-0`) y toma control de las
 * pestañas abiertas.
 *
 * Estrategia — la misma que documenta `sw.js` de la raíz: primero red, con
 * respaldo en caché sin señal. Matiz: los assets con hash de Vite
 * (`/assets/*`, que incluyen las 358 fichas porque el contenido va dentro
 * del bundle) y los íconos sí van primero-caché, porque el hash ya
 * garantiza que no hay versión vieja — evita una ida y vuelta a la red
 * innecesaria. El documento HTML va primero-red a propósito: en una app de
 * dosificación quieres ver la versión nueva de una.
 *
 * Actualización: `registerType: "prompt"` (ver App.tsx / useRegisterSW). El
 * worker nuevo instala y queda en espera hasta que el usuario confirma en el
 * aviso; recién ahí este listener de "message" dispara skipWaiting().
 */

import { precache, matchPrecache, cleanupOutdatedCaches } from "workbox-precaching";
import { setCacheNameDetails } from "workbox-core";

declare let self: ServiceWorkerGlobalScope;

/** Prefijo propio de todas las cachés de este worker (distinto del de la
 *  raíz, "tinterno-v7-0"), para poder identificarlas y no tocar nada ajeno
 *  salvo en la limpieza explícita de "activate". */
const CACHE_PREFIX = "tinterno-web";
setCacheNameDetails({ prefix: CACHE_PREFIX });

// Precarga de todo lo necesario para el offline completo: el documento, los
// assets con hash (358 fichas incluidas, porque el contenido vive en el
// bundle) y los íconos. La lista la llena vite-plugin-pwa en el build a
// partir de `injectManifest.globPatterns` (vite.config.ts).
precache(self.__WB_MANIFEST);
cleanupOutdatedCaches();

self.addEventListener("fetch", (event: FetchEvent) => {
  const { request } = event;
  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    // Documento HTML: primero red (ves la actualización al instante); sin
    // señal, usa la copia precargada en la instalación.
    event.respondWith(
      fetch(request).catch(async () => (await matchPrecache("index.html")) ?? Response.error()),
    );
    return;
  }

  // Todo lo demás que quedó precargado (assets con hash, íconos, manifest):
  // primero caché, porque ya viene versionado por el build o por su propio
  // hash. Lo que no esté precargado (p. ej. Google Fonts) sigue a la red.
  event.respondWith(matchPrecache(request).then((cached) => cached ?? fetch(request)));
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => !key.startsWith(CACHE_PREFIX)).map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

// El registro en modo "prompt" (virtual:pwa-register/react) manda este
// mensaje cuando el usuario confirma el aviso de actualización.
self.addEventListener("message", (event: ExtendableMessageEvent) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
