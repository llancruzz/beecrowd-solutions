"use strict";

export function problem(input) {
  const raio = parseFloat(input);

  const n = 3.14159;
  const area = n * raio * raio;

  console.log("A=" + area.toFixed(4));
}
