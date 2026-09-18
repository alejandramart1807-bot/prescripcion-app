/**
 * Verifica que el reencuadre de infusiones no cambió ningún número.
 *
 * Para cada infusión real de las 358 fichas y cada peso, compara los extremos
 * que produce calcularInfusion() contra los que aparecen en la cadena del
 * motor original. Si un solo dígito se movió, falla.
 */
import fs from 'fs';
import { execSync } from 'child_process';
const RAIZ = '/Users/jacoboposada/Code/prescripcion-app';

const h = fs.readFileSync(`${RAIZ}/index.html`, 'utf8');
const s = h.indexOf('<script>', h.indexOf('</style>')) + 8;
const e = h.indexOf('/* ================= TINTERNO UI v7 ================= */');
const DX = eval(h.slice(s, e) + ';DX');

execSync('./packages/engine/node_modules/.bin/tsc -p packages/engine/tsconfig.json --outDir /tmp/eng-inf --declaration false', { cwd: RAIZ, stdio: 'pipe' });
const { calcular } = await import('/tmp/eng-inf/calc.js');
const { calcularInfusion, formatearInfusion, esInfusion } = await import('/tmp/eng-inf/infusion.js');

const PESOS = [null, 3, 10, 30, 70, 120, 200];
const numerosDe = (t) => (t.match(/[\d.]+,?\d*/g) || []).filter(x => /\d/.test(x));

let ok = 0, mal = 0;
const fallos = [], muestras = [], mejoras = [];

for (const d of DX) {
  for (const o of d.orders || []) {
    if (!o.calc || !esInfusion(o.calc)) continue;
    for (const kg of PESOS) {
      const viejo = calcular(o.calc, kg);
      const nuevo = calcularInfusion(o.calc, kg);
      if (!viejo && !nuevo) continue;
      if (!viejo || !nuevo) { mal++; fallos.push(`${d.id} @ ${kg}kg · uno devolvió null`); continue; }
      // los números del texto nuevo deben ser un subconjunto exacto de los del viejo
      const nv = numerosDe(formatearInfusion(nuevo));
      const vv = numerosDe(viejo.texto);
      const iguales = nv.every(x => vv.includes(x)) && nv.length === vv.length;
      // Caso aceptado: dosis fija (lo === hi). El motor viejo renderiza un
      // rango degenerado ("9–9 mL/h"); el nuevo colapsa a un solo valor.
      const rangoDegenerado = nuevo.puntoUnico && new Set(vv).size === new Set(nv).size && nv.every(x => vv.includes(x));
      if (iguales) { ok++; if (muestras.length < 4 && !nuevo.puntoUnico && kg === 70) muestras.push({ ficha: d.id, orden: o.d, viejo: viejo.texto, nuevo: formatearInfusion(nuevo) }); }
      else if (rangoDegenerado) { if (!mejoras.some(m => m.ficha === d.id && m.orden === o.d)) mejoras.push({ ficha: d.id, orden: o.d, viejo: viejo.texto, nuevo: formatearInfusion(nuevo) }); }
      else { mal++; if (fallos.length < 6) fallos.push(`${d.id} @ ${kg}kg\n      viejo: ${viejo.texto}\n      nuevo: ${formatearInfusion(nuevo)}`); }
    }
  }
}

console.log(`Infusiones verificadas: ${ok} con números idénticos · ${mejoras.length ? mejoras.length + ' mejora(s) de presentación · ' : ''}${mal} con diferencias reales`);
if (mejoras.length) {
  console.log('\nMejoras aceptadas (dosis fija, el rango degenerado desaparece):');
  for (const m of mejoras) console.log(`  ${m.ficha} · ${m.orden}\n    antes:   ${m.viejo}\n    después: ${m.nuevo}`);
}
if (fallos.length) { console.log('\nDiferencias:'); fallos.forEach(f => console.log('  ' + f)); }
if (muestras.length) {
  console.log('\nCómo se ve el cambio (a 70 kg):');
  for (const m of muestras) {
    console.log(`\n  ${m.orden}`);
    console.log(`    antes:   ${m.viejo}`);
    console.log(`    después: ${m.nuevo}`);
  }
}
process.exit(mal === 0 ? 0 : 1);
