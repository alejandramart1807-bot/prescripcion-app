import fs from 'fs';
const h = fs.readFileSync('index.html','utf8');
const s = h.indexOf('<script>', h.indexOf('</style>')) + 8;
const e = h.lastIndexOf('</script>');
const js = h.slice(s, e);

// Stub DOM mínimo: la capa de UI solo lo toca dentro de init(), que corre en DOMContentLoaded.
const noop = () => {};
const mkEl = () => new Proxy(function(){}, {
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
  set: () => true,
  apply: () => mkEl(),
});
const fakeEl = mkEl();
globalThis.document = {
  querySelector: () => fakeEl, querySelectorAll: () => [],
  getElementById: () => fakeEl, createElement: () => fakeEl,
  addEventListener: noop, documentElement: fakeEl,
  body: fakeEl,
  head: fakeEl, activeElement: null, readyState: 'loading',
};
globalThis.window = { addEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }), location: { hash: '' }, scrollTo: noop, innerWidth: 390, innerHeight: 844, getComputedStyle: () => ({ getPropertyValue: () => '' }) };
globalThis.scrollTo = noop; globalThis.innerWidth = 390;
globalThis.location = { hash: '', href: '' };
globalThis.localStorage = { getItem: () => null, setItem: noop, removeItem: noop };
globalThis.sessionStorage = { getItem: () => null, setItem: noop, removeItem: noop };
Object.defineProperty(globalThis, 'navigator', { value: { userAgent: 'node', serviceWorker: { register: () => Promise.resolve() } }, configurable: true });
globalThis.matchMedia = () => ({ matches: false, addEventListener: noop });
globalThis.addEventListener = noop;

const ctx = eval(js + `; ({DX, GUIDES, orderLine, fmt, setKG: v => { KG = v; }})`);
const { DX, GUIDES, orderLine, fmt, setKG } = ctx;

// Para cada ficha capturamos EXACTAMENTE lo que el usuario se lleva a la
// historia clínica. Si esto no cambia, no se rompió nada visible.
function textoFicha(d) {
  let n = 0;
  const g = GUIDES[d.id] || d.g;
  const L = [`TINTERNO — ${d.name}`];
  if (g) L.push(`Guías: ${g.co.st === 'none' || g.co.st === 'na' ? '(sin GPC colombiana)' : g.co.n + ' ' + g.co.y} · ${g.intl}`);
  L.push(`Peso: ${fmt(globalThis.__kg) || 'no registrado'}`);
  d.orders.forEach(o => { if (o.cat) { L.push('', o.cat.toUpperCase()); return; } n++; L.push(orderLine(d, o, n)); });
  if (d.goals?.length) L.push('', 'Metas: ' + d.goals.join('; '));
  return L.join('\n');
}

function snapshot(kg) {
  setKG(kg);
  globalThis.__kg = kg;
  const out = {};
  for (const d of DX) {
    if (d.orders) out[d.id] = textoFicha(d);
    else if (d.rows) out[d.id] = JSON.stringify(d.rows);
    else if (d.calcForm) out[d.id] = JSON.stringify(d.calcForm.inputs) + '||' + String(d.calcForm.compute).replace(/\s+/g, ' ');
  }
  return out;
}

const PESOS = [0, 3, 10, 30, 70, 120, 200, 250];
const baseline = { generado: new Date().toISOString(), n: DX.length, orden: DX.map(d => d.id), pesos: {} };
for (const w of PESOS) baseline.pesos[w] = snapshot(w);

const destino = 'tools/__baseline__/v7-0.json';
fs.mkdirSync('tools/__baseline__', { recursive: true });
fs.writeFileSync(destino, JSON.stringify(baseline, null, 1));
console.log(`Línea base v7.0 congelada: ${DX.length} fichas × ${PESOS.length} pesos → ${destino}`);
console.log(`Tamaño: ${(fs.statSync(destino).size / 1024 / 1024).toFixed(1)} MB`);
