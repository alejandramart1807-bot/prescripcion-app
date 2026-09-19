/**
 * Corre el arnés completo. Cualquier salida distinta de cero marca que algo
 * cambió respecto a la línea base v7.0 congelada antes de la migración.
 */
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ESB = path.join(RAIZ, 'node_modules/.bin/esbuild');
const TMP = path.join(RAIZ, 'node_modules/.cache/auditoria');

/** Los que importan TypeScript de apps/web necesitan empaquetarse primero. */
const EMPAQUETAR = new Set(['audit-busqueda.mjs', 'audit-copiar.mjs']);

const PASOS = [
  ['Contenido: 358 fichas × 8 pesos', 'audit-content.mjs'],
  ['Motor de dosis', 'audit-engine.mjs'],
  ['Infusiones', 'audit-infusion.mjs'],
  ['Búsqueda vs. v7', 'audit-busqueda.mjs'],
  ['Texto copiado a la historia clínica', 'audit-copiar.mjs'],
];

let fallos = 0;
for (const [titulo, archivo] of PASOS) {
  console.log(`\n── ${titulo} ${'─'.repeat(Math.max(0, 50 - titulo.length))}`);
  try {
    let objetivo = path.join(RAIZ, 'tools', archivo);
    if (EMPAQUETAR.has(archivo)) {
      const salida = path.join(TMP, archivo);
      execSync(`"${ESB}" "${objetivo}" --bundle --format=esm --platform=node --outfile="${salida}" --log-level=error`, { cwd: RAIZ });
      objetivo = salida;
    }
    console.log(execSync(`node "${objetivo}"`, { cwd: RAIZ, encoding: 'utf8' }).trim());
  } catch (e) {
    fallos++;
    console.log((e.stdout || '').toString().trim());
    console.log(`✗ FALLÓ: ${archivo}`);
  }
}

console.log(fallos === 0 ? '\n✓ Arnés completo en verde.' : `\n✗ ${fallos} paso(s) fallaron.`);
process.exit(fallos === 0 ? 0 : 1);
