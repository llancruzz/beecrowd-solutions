"use strict";
export function problem(lines) {
  const A = parseFloat(lines[0]);
  const B = parseFloat(lines[1]);
  const C = parseFloat(lines[2]);
  const D = parseFloat(lines[3]);

  // DIFERENCA = (A * B - C * D).

  const DIFERENCA = A * B - C * D;

  console.log(`DIFERENCA = ${DIFERENCA}`);
}
