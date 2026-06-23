import { adminUser } from "./task1.js";
import { printCarInfo, car } from "./task2.js";
import { calculateDiscount, type Product } from "./task3.js";
import { getSalaries, employees } from "./task5_salaries.js";
import { printStudentInfo, student } from "./task5_student.js";
import { concatStrings } from "./task6.js";

// --- Задание 1 ---
console.log("=== Задание 1: AdminUser (пересечение типов) ===");
console.log(adminUser);

// --- Задание 2 ---
console.log("\n=== Задание 2: Car ===");
printCarInfo(car);
printCarInfo({
  make: "Toyota",
  model: "Corolla",
  engine: { type: "I4", horsepower: 169 },
});

// --- Задание 3 ---
console.log("\n=== Задание 3: calculateDiscount ===");
const product: Product = { name: "Keyboard", price: 200 };
console.log(calculateDiscount(product, 15)); // 170

// --- Задание 5 (первое) ---
console.log("\n=== Задание 5: getSalaries ===");
console.log(getSalaries(employees)); // [4200, 3800, 5100]

// --- Задание 5 (второе) ---
console.log("\n=== Задание 5: Student (наследование) ===");
printStudentInfo(student);

// --- Задание 6 ---
console.log("\n=== Задание 6: concatStrings ===");
console.log(concatStrings("Type", "Script")); // TypeScript
