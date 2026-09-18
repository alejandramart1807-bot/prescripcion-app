/**
 * Constantes de UX para el renderizador de calculadoras.
 *
 * `FOCUSED_MODE_THRESHOLD`: a partir de cuántos campos una calculadora pasa
 * de "lista normal" a "modo enfocado" (una pregunta a la vez, a pantalla
 * completa). Medido sobre las 51 calculadoras: 7 tienen más de 8 campos
 * (NIHSS 15, Escala de Padua 11, Wells TVP 10, CIWA-Ar 10, PHQ-9 9,
 * HAS-BLED 9, Glasgow-Blatchford 9); el resto tiene 8 o menos.
 */
export const FOCUSED_MODE_THRESHOLD = 8;

/** Número máximo de opciones de un campo `sel` para mostrarlo como chips en vez de desplegable. */
export const CHIP_MAX_OPTIONS = 5;
