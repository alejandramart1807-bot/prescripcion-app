import fs from 'fs';
import { DX, GUIDES } from '/Users/jacoboposada/Code/prescripcion-app/packages/content/src/index.ts';
import { textoParaCopiar, seleccionInicial } from '/Users/jacoboposada/Code/prescripcion-app/apps/web/src/lib/copiarOrdenes.ts';

const base = JSON.parse(fs.readFileSync('/Users/jacoboposada/Code/prescripcion-app/tools/__baseline__/v7-0.json', 'utf8'));
const PESOS = [0, 3, 10, 30, 70, 120, 200];

let idem = 0, soloInfusion = 0, otras = 0;
const ejemplos = [], problemas = [];

for (const kg of PESOS) {
  for (const d of DX) {
    if (!('orders' in d)) continue;
    const esperado = base.pesos[kg][d.id];
    if (!esperado) continue;
    const actual = textoParaCopiar(d, GUIDES[d.id] || d.g, kg || null, seleccionInicial(d));
    if (actual === esperado) { idem++; continue; }

    // Diferencias línea por línea: solo se admiten las del reencuadre de infusiones.
    const a = esperado.split('\n'), b = actual.split('\n');
    if (a.length !== b.length) { otras++; if (problemas.length < 4) problemas.push(`${d.id}@${kg} distinto número de líneas`); continue; }
    const difs = a.map((l, i) => [l, b[i]]).filter(([x, y]) => x !== y);
    const todasInfusion = difs.every(([x, y]) => /mL\/h/.test(x) && /inicia .* · máx |mL\/h/.test(y));
    if (todasInfusion) {
      soloInfusion++;
      if (ejemplos.length < 3 && kg === 70) ejemplos.push({ id: d.id, ...Object.fromEntries([['antes', difs[0][0]], ['despues', difs[0][1]]]) });
    } else {
      otras++;
      if (problemas.length < 4) problemas.push(`${d.id}@${kg}\n      esperado: ${difs[0][0]}\n      obtenido: ${difs[0][1]}`);
    }
  }
}

console.log(`Texto copiado, contra la línea base v7.0:`);
console.log(`  idéntico                         : ${idem}`);
console.log(`  difiere SOLO en infusiones (ok)  : ${soloInfusion}`);
console.log(`  otras diferencias (NO esperadas) : ${otras}`);
if (problemas.length) { console.log('\nProblemas:'); problemas.forEach(p => console.log('  ' + p)); }
if (ejemplos.length) { console.log('\nEl cambio esperado, a 70 kg:'); ejemplos.forEach(e => console.log(`  ${e.id}\n    antes:   ${e.antes.trim()}\n    después: ${e.despues.trim()}`)); }
process.exit(otras === 0 ? 0 : 1);
