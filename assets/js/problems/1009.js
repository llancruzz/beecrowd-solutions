"use strict";

export function problem(lines) {
  const nameEmployee = lines[0];
  const valueSalary = parseFloat(lines[1]);
  const totalSales = parseFloat(lines[2]);

  const percentage = 0.15; // (15 / 100) = 0.15%

  const totalAmount = totalSales * percentage + valueSalary;

  console.log(`TOTAL = R$ ${totalAmount.toFixed(2)}`);
}
