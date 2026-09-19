/**
 * Auditoría independiente del paquete de contenido.
 *
 * No usa verify-content.mjs (lo escribió el mismo agente que hizo la
 * extracción). En vez de comparar datos contra datos, hace la prueba
 * end-to-end: mete los datos NUEVOS dentro de la interfaz VIEJA y exige que
 * produzca exactamente la línea base v7.0 congelada antes de la migración.
 *
 * Si una sola dosis, dilución, alternativa o meta cambió en cualquiera de las
 * 358 fichas a cualquiera de los 8 pesos, esto falla.
 */
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const noop = () => {};
const mkEl = () => new Proxy(function () {}, {
  get: (t, p) => {
    if (p === 'value') return '';
    if (p === 'hidden' || p === 'checked') return false;
    if (p === 'length') return 0;
    if (p === Symbol.iterator) return [][Symbol.iterator].bind([]);
    if (p === 'classList') return { add: noop, remove: noop, toggle: noop, contains: () => false };
    if (p === 'style' || p === 'dataset') return {};
    if (!(p in t)) t[p] = mkEl();
    return t[p];
  },
  set: () => true, apply: () => mkEl(),
});
const fakeEl = mkEl();
globalThis.document = {
  querySelector: () => fakeEl, querySelectorAll: () => [], getElementById: () => fakeEl,
  createElement: () => fakeEl, addEventListener: noop, documentElement: fakeEl,
  body: fakeEl, head: fakeEl, activeElement: null, readyState: 'loading',
};
globalThis.window = { addEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }), location: { hash: '' }, scrollTo: noop, innerWidth: 390, innerHeight: 844, getComputedStyle: () => ({ getPropertyValue: () => '' }) };
globalThis.scrollTo = noop;
globalThis.location = { hash: '', href: '' };
globalThis.localStorage = { getItem: () => null, setItem: noop, removeItem: noop };
globalThis.sessionStorage = { getItem: () => null, setItem: noop, removeItem: noop };
Object.defineProperty(globalThis, 'navigator', { value: { userAgent: 'node', serviceWorker: { register: () => Promise.resolve() } }, configurable: true });
globalThis.matchMedia = () => ({ matches: false, addEventListener: noop });
globalThis.addEventListener = noop;

// Interfaz vieja, tal cual está en producción.
const h = fs.readFileSync(`${RAIZ}/index.html`, 'utf8');
const s = h.indexOf('<script>', h.indexOf('</style>')) + 8;
const e = h.lastIndexOf('</script>');
const ctx = eval(h.slice(s, e) + `; ({DX, GUIDES, ALT, orderLine, fmt, setKG: v => { KG = v; }})`);

// Trasplante: datos nuevos dentro de la interfaz vieja.
const nuevo = await import(`${RAIZ}/packages/content/src/index.ts`);
ctx.DX.length = 0;
ctx.DX.push(...nuevo.DX);
for (const k of Object.keys(ctx.GUIDES)) delete ctx.GUIDES[k];
Object.assign(ctx.GUIDES, nuevo.GUIDES);
for (const k of Object.keys(ctx.ALT)) delete ctx.ALT[k];
Object.assign(ctx.ALT, nuevo.ALT);

const { DX, GUIDES, orderLine, fmt, setKG } = ctx;

function textoFicha(d, kg) {
  let n = 0;
  const g = GUIDES[d.id] || d.g;
  const L = [`TINTERNO — ${d.name}`];
  if (g) L.push(`Guías: ${g.co.st === 'none' || g.co.st === 'na' ? '(sin GPC colombiana)' : g.co.n + ' ' + g.co.y} · ${g.intl}`);
  L.push(kg > 0 ? `Peso: ${fmt(kg)} kg` : 'Peso: no registrado (dosis por kilo sin calcular)');
  d.orders.forEach(o => { if (o.cat) { L.push('', o.cat.toUpperCase()); return; } n++; L.push(orderLine(d, o, n)); });
  if (d.goals?.length) L.push('', 'Metas: ' + d.goals.join('; '));
  return L.join('\n');
}

const base = JSON.parse(fs.readFileSync(`${RAIZ}/tools/__baseline__/v7-0.json`, 'utf8'));
let iguales = 0, distintos = 0;
const fallos = [];

if (DX.length !== base.n) { console.log(`FALLO: ${DX.length} fichas vs ${base.n} en la línea base`); process.exit(1); }
const ordenIgual = DX.map(d => d.id).join(',') === base.orden.join(',');

for (const kg of Object.keys(base.pesos)) {
  setKG(Number(kg));
  for (const d of DX) {
    const esperado = base.pesos[kg][d.id];
    if (esperado === undefined) { fallos.push(`ficha nueva no vista en la base: ${d.id}`); distintos++; continue; }
    let actual;
    if (d.orders) actual = textoFicha(d, Number(kg));
    else if (d.rows) actual = JSON.stringify(d.rows);
    else if (d.calcForm) actual = JSON.stringify(d.calcForm.inputs) + '||' + String(d.calcForm.compute).replace(/\s+/g, ' ');
    if (actual === esperado) iguales++;
    else { distintos++; if (fallos.length < 6) fallos.push(`${d.id} @ ${kg}kg`); }
  }
}

console.log(`Orden de navegación idéntico : ${ordenIgual ? 'sí' : 'NO'}`);
console.log(`Instantáneas idénticas       : ${iguales}`);
console.log(`Instantáneas distintas       : ${distintos}`);
if (fallos.length) { console.log('\nPrimeras diferencias:'); fallos.forEach(f => console.log('  ' + f)); }
process.exit(distintos === 0 && ordenIgual ? 0 : 1);
