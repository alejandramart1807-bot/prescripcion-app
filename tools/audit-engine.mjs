/**
 * Auditoría independiente del motor de dosis.
 *
 * No usa los fixtures que generó el agente. Toma las especificaciones `calc`
 * reales desde index.html, las corre por el motor NUEVO, y exige que cada
 * resultado aparezca literalmente dentro de la línea base v7.0 congelada
 * ANTES de que empezara la migración.
 */
import fs from 'fs';
import { execSync } from 'child_process';

const RAIZ = '/Users/jacoboposada/Code/prescripcion-app';

// 1. Especificaciones calc reales, desde la app vieja.
const h = fs.readFileSync(`${RAIZ}/index.html`, 'utf8');
const s = h.indexOf('<script>', h.indexOf('</style>')) + 8;
const e = h.indexOf('/* ================= TINTERNO UI v7 ================= */');
const DX = eval(h.slice(s, e) + ';DX');

// 2. Motor nuevo, compilado desde TypeScript.
execSync('./packages/engine/node_modules/.bin/tsc -p packages/engine/tsconfig.json --outDir /tmp/engine-audit --declaration false', { cwd: RAIZ, stdio: 'pipe' });
const { calcular } = await import('/tmp/engine-audit/calc.js');

// 3. Línea base congelada.
const base = JSON.parse(fs.readFileSync(`${RAIZ}/tools/__baseline__/v7-0.json`, 'utf8'));
const PESOS = [3, 10, 30, 70, 120, 200, 250];

let comprobados = 0, ausentes = 0, nulos = 0;
const fallos = [];

for (const d of DX) {
  if (!d.orders) continue;
  for (const o of d.orders) {
    if (!o.calc) continue;
    for (const kg of PESOS) {
      const r = calcular(o.calc, kg);
      const textoBase = base.pesos[kg]?.[d.id];
      if (!textoBase) continue;
      if (r === null) { nulos++; continue; }
      comprobados++;
      if (!textoBase.includes(r.texto)) {
        ausentes++;
        if (fallos.length < 8) fallos.push({ ficha: d.id, orden: o.d, kg, motorNuevo: r.texto });
      }
    }
  }
}

console.log(`Resultados del motor nuevo verificados contra la línea base v7.0:`);
console.log(`  coincidencias exactas : ${comprobados - ausentes}`);
console.log(`  NO encontrados en base: ${ausentes}`);
console.log(`  null (sin resultado)  : ${nulos}`);
if (fallos.length) {
  console.log('\nPrimeras discrepancias:');
  for (const f of fallos) console.log(`  ${f.ficha} @ ${f.kg}kg · "${f.orden}" → motor nuevo dice: ${f.motorNuevo}`);
}
process.exit(ausentes === 0 ? 0 : 1);
