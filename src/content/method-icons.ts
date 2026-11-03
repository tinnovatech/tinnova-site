/**
 * Line icons (24x24, stroke-based) for the four method steps, in order:
 * Entender, Definir, Construir, Evoluir. Rendered inside an <svg> with
 * stroke="currentColor", so they take the surrounding text color.
 */
export const METHOD_ICONS = [
  // Entender: magnifier
  '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
  // Definir: target
  '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  // Construir: stacked layers
  '<path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8 12 3.5Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16 8.5 4.5 8.5-4.5"/>',
  // Evoluir: trend up
  '<path d="m3.5 16.5 6-6 4 4 7-7"/><path d="M14.5 7.5h6v6"/>',
];
