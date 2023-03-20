function netSalaryCalculator() {
    const basicSalary = prompt("Enter basic salary: ");
    const benefits = prompt("Enter benefits: ");
    const grossSalary = parseInt(basicSalary) + parseInt(benefits);
  
    // tax computation
    let payee = 0;
    if (grossSalary <= 12298) {
      payee = 0;
    } else if (grossSalary <= 23885) {
      payee = (grossSalary - 12298) * 0.1;
    } else if (grossSalary <= 35472) {
      payee = 1158.7 + (grossSalary - 23885) * 0.15;
    } else if (grossSalary <= 47059) {
      payee = 2963.7 + (grossSalary - 35472) * 0.2;
    } else if (grossSalary <= 58646) {
      payee = 5328.7 + (grossSalary - 47059) * 0.25;
    } else {
      payee = 9023.7 + (grossSalary - 58646) * 0.3;
    }
  
    // nhif computation
    let nhifDeductions = 0;
    if (grossSalary <= 5999) {
      nhifDeductions = 150;
    } else if (grossSalary <= 7999) {
      nhifDeductions = 300;
    } else if (grossSalary <= 11999) {
      nhifDeductions = 400;
    } else if (grossSalary <= 14999) {
      nhifDeductions = 500;
    } else if (grossSalary <= 19999) {
      nhifDeductions = 600;
    } else if (grossSalary <= 24999) {
      nhifDeductions = 750;
    } else if (grossSalary <= 29999) {
      nhifDeductions = 850;
    } else if (grossSalary <= 34999) {
      nhifDeductions = 900;
    } else if (grossSalary <= 39999) {
      nhifDeductions = 950;
    } else
  
  