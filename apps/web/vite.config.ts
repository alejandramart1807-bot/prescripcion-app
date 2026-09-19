import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Escribimos el worker a mano (src/sw.ts) en vez de que Workbox lo
      // genere entero: así se controla la estrategia exacta que exige
      // CLAUDE.md (primero red para el documento, primero caché para los
      // assets con hash) con el mismo estilo simple que sw.js de la raíz.
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",
      // CRÍTICO: los celulares con la v7.0 ya tienen un service worker en
      // /sw.js con ámbito "/". El worker nuevo tiene que publicarse en la
      // MISMA ruta — filename + outDir hacen que el build emita
      // dist/sw.js (no dist/assets/sw.js ni ninguna otra ruta) — o esos
      // usuarios se quedarían para siempre en la copia vieja.
      injectManifest: {
        // Por defecto injectManifest solo precarga js/css/html; acá hace
        // falta también los íconos para que el offline sea completo (regla:
        // cualquier ficha se abre sin señal). manifest.webmanifest NO va
        // acá: el plugin ya lo agrega siempre por su cuenta (con su propio
        // hash) vía additionalManifestEntries; listarlo también aquí solo
        // produciría una entrada duplicada.
        globPatterns: ["**/*.{js,css,html,svg,png}"],
      },
      // No usamos el <script> de registro que inyecta el plugin: se
      // registra a mano desde App.tsx con useRegisterSW (virtual:pwa-register/react)
      // para poder mostrar el aviso de actualización tocable.
      injectRegister: false,
      registerType: "prompt",
      manifestFilename: "manifest.webmanifest",
      includeManifestIcons: false,
      manifest: {
        name: "Tinterno · Guía clínica para el turno",
        short_name: "Tinterno",
        description: "Prescripción, escalas, calculadoras y valores de referencia para el turno.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#F4F7F9",
        theme_color: "#1E4B6E",
        lang: "es-CO",
        icons: [
          { src: "icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
          { src: "icon.svg", sizes: "any", type: "image/svg+xml" },
        ],
      },
      devOptions: {
        // Sin esto, `vite dev` no registra ningún worker: se prueba con
        // `pnpm build` + servir dist/, que es como corre en producción.
        enabled: false,
      },
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
