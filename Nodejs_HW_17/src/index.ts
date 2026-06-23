// Точка входа — демонстрация всех заданий.
// Импорты с расширением .js — требование NodeNext (ESM).

import { calculateTotal } from "./task1.js";
import { displayId, type Id } from "./task2.js";
import { filterOrdersByStatus, orders } from "./task3.js";
import { updateStock, type ProductInfo, type Inventory } from "./task4.js";

// --- Задание 1 ---
console.log("=== Задание 1: calculateTotal ===");
console.log(calculateTotal(100, 3));        // 300  (скидки нет)
console.log(calculateTotal(100, 3, 10));    // 270  (скидка 10%)
console.log(calculateTotal(250, 2, 25));    // 375  (скидка 25%)

// --- Задание 2 ---
console.log("\n=== Задание 2: displayId ===");
const stringId: Id = "abc-123";
const numberId: Id = 42;
displayId(stringId); // ID: ABC-123
displayId(numberId); // ID: 420

// --- Задание 3 ---
console.log("\n=== Задание 3: filterOrdersByStatus ===");
console.log(filterOrdersByStatus(orders, "pending"));
console.log(filterOrdersByStatus(orders, "shipped"));

// --- Задание 4 ---
console.log("\n=== Задание 4: updateStock ===");
const inventory: Inventory = { apple: 10, banana: 5 };

const addApples: ProductInfo = ["apple", 1.2, 7];   // товар уже есть
const addCherry: ProductInfo = ["cherry", 3.5, 12]; // нового товара ещё нет

console.log(updateStock(inventory, addApples)); // { apple: 17, banana: 5 }
console.log(updateStock(inventory, addCherry)); // { apple: 10, banana: 5, cherry: 12 }
console.log(inventory); // { apple: 10, banana: 5 } — исходный не изменился
