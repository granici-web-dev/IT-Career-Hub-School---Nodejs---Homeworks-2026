import { sumEvenNumbers } from "./task1.js";
import { isNotEmpty } from "./task2.js";
import { areEqual } from "./task3.js";
import { getLastElement } from "./task4.js";
import { makeTriple } from "./task5.js";

// --- Задание 1 ---
console.log("=== Задание 1: sumEvenNumbers ===");
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([7, 9, 11])); // 0

// --- Задание 2 ---
console.log("\n=== Задание 2: isNotEmpty ===");
console.log(isNotEmpty("hello")); // true
console.log(isNotEmpty("   ")); // false

// --- Задание 3 ---
console.log("\n=== Задание 3: areEqual ===");
console.log(areEqual("abc", "abc")); // true
console.log(areEqual("abc", "xyz")); // false

// --- Задание 4 ---
console.log("\n=== Задание 4: getLastElement ===");
console.log(getLastElement([10, 20, 30])); // 30  (number)
console.log(getLastElement(["a", "b", "c"])); // "c" (string)
console.log(getLastElement([])); // undefined

// --- Задание 5 ---
console.log("\n=== Задание 5: makeTriple ===");
console.log(makeTriple(1, 2, 3)); // [1, 2, 3]
console.log(makeTriple("x", "y", "z")); // ["x", "y", "z"]
