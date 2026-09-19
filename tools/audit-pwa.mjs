/**
 * Auditoría independiente del PWA.
 *
 * Prueba lo único que no se puede verificar leyendo código: que la app abra
 * SIN CONEXIÓN, y que el service worker nuevo desplace correctamente al que
 * los usuarios ya tienen instalado (`/sw.js`, caché `tinterno-v7-0`).
 *
 * El panel embebido del entorno bloquea el registro de service workers, así
 * que esto corre en un Chromium aparte.
 *
 * Uso: node tools/audit-pwa.mjs <url>   (por defecto http://localhost:8931)
 */
import { chromium } from 'playwright';

const URL_BASE = process.argv[2] || 'http://localhost:8931';
const ok = (b) => (b ? '✓' : '✗');
let fallos = 0;
const comprobar = (etiqueta, cond, detalle = '') => {
  if (!cond) fallos++;
  console.log(`  ${ok(cond)} ${etiqueta}${detalle ? ` — ${detalle}` : ''}`);
};

const navegador = await chromium.launch();
const ctx = await navegador.newContext();
const pag = await ctx.newPage();
const errores = [];
pag.on('pageerror', (e) => errores.push(String(e)));

console.log('\n── El worker se registra donde debe ─────────────────');
await pag.goto(`${URL_BASE}/#sepsis`);
await pag.waitForFunction(() => navigator.serviceWorker.controller !== null, { timeout: 20000 }).catch(() => {});
const reg = await pag.evaluate(async () => {
  const r = await navigator.serviceWorker.getRegistrations();
  return { n: r.length, script: r[0]?.active?.scriptURL ?? null, ambito: r[0]?.scope ?? null, caches: await caches.keys() };
});
comprobar('hay un service worker activo', reg.n > 0);
comprobar('vive en /sw.js (reemplaza al de los usuarios actuales)', (reg.script || '').endsWith('/sw.js'), reg.script || 'ninguno');
comprobar('ámbito raíz', reg.ambito === `${URL_BASE}/`, reg.ambito || '');
comprobar('precargó contenido', reg.caches.length > 0, reg.caches.join(', '));

console.log('\n── Funciona sin conexión ───────────────────────────');
await ctx.setOffline(true);
const p2 = await ctx.newPage();
await p2.goto(`${URL_BASE}/#sepsis`, { waitUntil: 'load' });
await p2.waitForTimeout(1500);
const sinRed = await p2.evaluate(() => document.body.innerText);
comprobar('abre una ficha sin red, en pestaña nueva', /Sepsis/.test(sinRed));
comprobar('trae las órdenes, no solo el cascarón', /Lactato sérico/.test(sinRed));
comprobar('trae el cálculo de infusión', /Noradrenalina/.test(sinRed));
await p2.goto(`${URL_BASE}/#c-nihss`, { waitUntil: 'load' });
await p2.waitForTimeout(1200);
comprobar('abre una calculadora sin red', /NIHSS/.test(await p2.evaluate(() => document.body.innerText)));
await ctx.setOffline(false);

console.log('\n── Desplaza al worker viejo de los usuarios ─────────');
const ctx2 = await navegador.newContext();
const p3 = await ctx2.newPage();
// Simula el estado real de un celular con la v7 instalada.
await p3.goto(`${URL_BASE}/`);
await p3.evaluate(async () => {
  const c = await caches.open('tinterno-v7-0');
  await c.put('/viejo', new Response('contenido de la v7'));
});
const antes = await p3.evaluate(() => caches.keys());
comprobar('estado inicial: existe la caché tinterno-v7-0', antes.includes('tinterno-v7-0'));
await p3.evaluate(async () => {
  const r = await navigator.serviceWorker.getRegistration();
  r?.waiting?.postMessage({ type: 'SKIP_WAITING' });
});
await p3.waitForTimeout(2500);
await p3.reload();
await p3.waitForTimeout(2500);
const despues = await p3.evaluate(() => caches.keys());
comprobar('la caché de la v7 se borró al activar', !despues.includes('tinterno-v7-0'), despues.join(', ') || 'ninguna');

console.log('\n── Sin errores de consola ──────────────────────────');
comprobar('cero errores de página', errores.length === 0, errores[0] || '');

await navegador.close();
console.log(fallos === 0 ? '\n✓ PWA verificado.' : `\n✗ ${fallos} comprobación(es) fallaron.`);
process.exit(fallos === 0 ? 0 : 1);
