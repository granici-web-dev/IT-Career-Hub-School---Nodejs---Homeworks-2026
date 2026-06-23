import { capitalize, reverseString } from "./stringUtils.js";
import { Finance } from "./finance.js";
import { UserManagement } from "./userManagement.js";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils.js";

// --- Задание 1 ---
console.log("=== Задание 1: stringUtils ===");
console.log(capitalize("hello")); // Hello
console.log(reverseString("typescript")); // tpircsepyt

// --- Задание 2 ---
console.log("\n=== Задание 2: Finance ===");
const loanCalc = new Finance.LoanCalculator();
const payment = loanCalc.calculateMonthlyPayment(100000, 12, 24); // 100000 под 12% на 24 мес.
console.log(`Ежемесячный платёж: ${payment.toFixed(2)}`);

const taxCalc = new Finance.TaxCalculator();
const tax = taxCalc.calculateTax(50000, 13); // налог 13%
console.log(`Налог: ${tax.toFixed(2)}`);

// --- Задание 3 ---
console.log("\n=== Задание 3: UserManagement ===");
const admin = new UserManagement.Admin.AdminUser(
  "Serghei",
  "serghei@example.com",
);
console.log(admin); // isSuperAdmin: false
admin.grantSuperAdmin();
console.log(`После повышения isSuperAdmin: ${admin.isSuperAdmin}`); // true
admin.revokeSuperAdmin();
console.log(`После понижения isSuperAdmin: ${admin.isSuperAdmin}`); // false

// --- Задание 4 ---
console.log("\n=== Задание 4: sequenceUtils ===");
console.log("Fibonacci до 100:", generateFibonacci(100));
console.log("Простые до 30:", generatePrimeNumbers(30));
