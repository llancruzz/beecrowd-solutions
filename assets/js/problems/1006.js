"use strict";

export function problem(lines) {
  const A = parseFloat(lines[0]);
  const B = parseFloat(lines[1]);
  const C = parseFloat(lines[2]);

  const peso_A = 2;
  const peso_B = 3;
  const peso_C = 5;

  const soma_pesos = peso_A + peso_B + peso_C;

  const MEDIA = (A * peso_A + B * peso_B + C * peso_C) / soma_pesos;

  console.log(`MEDIA = ${MEDIA.toFixed(1)}`);
}
