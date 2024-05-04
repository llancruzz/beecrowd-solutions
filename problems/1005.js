"use strict";

export function problem(lines) {
  const A = parseFloat(lines[0]);
  const B = parseFloat(lines[1]);

  const peso_A = 3.5;
  const peso_B = 7.5;

  const soma_pesos = peso_A + peso_B;

  const MEDIA = (A * peso_A + B * peso_B) / soma_pesos;

  console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
}
