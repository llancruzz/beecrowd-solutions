"use strict";

export function problem(lines) {
  let totalValuesP1 = lines.shift().split(" ");
  let totalValuesP2 = lines.shift().split(" ");

  const codigoP1 = totalValuesP1.shift();
  const numberP1 = totalValuesP1.shift();
  const unitP1 = totalValuesP1.shift();
  const totalP1 = numberP1 * unitP1;

  const codigoP2 = totalValuesP2.shift();
  const numberP2 = totalValuesP2.shift();
  const unitP2 = totalValuesP2.shift();
  const totalP2 = numberP2 * unitP2;

  const totalForPay = totalP1 + totalP2;

  console.log(`VALOR A PAGAR: R$ ${totalForPay.toFixed(2)}`);
}
