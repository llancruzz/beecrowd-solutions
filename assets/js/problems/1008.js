"use strict";

export function problem(lines) {
  const numberEmployee = parseInt(lines[0]);
  const numberHoursWorked = parseInt(lines[1]);
  const valueHour = parseFloat(lines[2]);

  // Calculate Salary
  const salary = numberHoursWorked * valueHour;

  console.log(`NUMBER = ${numberEmployee}`);
  console.log(`SALARY = U$ ${salary.toFixed(2)}`);
}
