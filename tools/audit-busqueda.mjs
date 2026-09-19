import fs from 'fs';
import { searchDX as nuevo } from '../apps/web/src/lib/busqueda.ts';
const noop = () => {};
const mkEl = () => new Proxy(function () {}, {
  get: (t, p) => { if (p === 'value') return ''; if (p === 'hidden' || p === 'checked') return false;
    if (p === 'length') return 0; if (p === Symbol.iterator) return [][Symbol.iterator].bind([]);
    if (p === 'classList') return { add: noop, remove: noop, toggle: noop, contains: () => false };
    if (p === 'style' || p === 'dataset') return {}; if (!(p in t)) t[p] = mkEl(); return t[p]; },
  set: () => true, apply: () => mkEl() });
const fakeEl = mkEl();
globalThis.document = { querySelector: () => fakeEl, querySelectorAll: () => [], getElementById: () => fakeEl,
  createElement: () => fakeEl, addEventListener: noop, documentElement: fakeEl, body: fakeEl, head: fakeEl,
  activeElement: null, readyState: 'loading' };
globalThis.window = { addEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }),
  location: { hash: '' }, scrollTo: noop, innerWidth: 390, innerHeight: 844, getComputedStyle: () => ({ getPropertyValue: () => '' }) };
globalThis.scrollTo = noop; globalThis.location = { hash: '', href: '' };
globalThis.localStorage = { getItem: () => null, setItem: noop, removeItem: noop };
globalThis.sessionStorage = { getItem: () => null, setItem: noop, removeItem: noop };
Object.defineProperty(globalThis, 'navigator', { value: { userAgent: 'node', serviceWorker: { register: () => Promise.resolve() } }, configurable: true });
globalThis.matchMedia = () => ({ matches: false, addEventListener: noop }); globalThis.addEventListener = noop;

import path from 'path';
// Este archivo se empaqueta con esbuild antes de correr, así que import.meta.url
// apuntaría al bundle. Se ejecuta siempre con cwd en la raíz del repo.
const RAIZ = process.cwd();
const h = fs.readFileSync(`${RAIZ}/index.html`, 'utf8');
const s = h.indexOf('<script>', h.indexOf('</style>')) + 8;
const e = h.lastIndexOf('</script>');
const viejo = eval(h.slice(s, e) + '; ({searchDX})');


const CONSULTAS = ['sepsis', 'apendisitis', 'enoxaparina', 'IAM', 'noradrenalina', 'fa', 'acv', 'dengue',
  'cetoacidosis', 'meld', 'glasgow', 'hiponatremia', 'neumonia', 'cefalea', 'asma', 'eda', 'itu', 'trombolisis'];

let iguales = 0, distintas = 0;
for (const q of CONSULTAS) {
  const a = viejo.searchDX(q).map(r => r.d.id);
  const b = nuevo(q).map(r => r.d.id);
  const mismo = a.length === b.length && a.every((x, i) => x === b[i]);
  if (mismo) { iguales++; console.log(`✓ "${q}" (${a.length})`); }
  else {
    distintas++;
    console.log(`✗ "${q}" — viejo ${a.length}, nuevo ${b.length}`);
    console.log(`    viejo: ${a.slice(0, 4).join(', ')}`);
    console.log(`    nuevo: ${b.slice(0, 4).join(', ')}`);
  }
}
console.log(`\n${iguales} consultas idénticas · ${distintas} distintas`);
