import { runSequential } from "./task1.js";
import { processAll } from "./task2.js";
import { runParallelWithError } from "./task3.js";
import { resolveAfterDelays } from "./task4.js";

async function main(): Promise<void> {
  // --- Задание 1 ---
  console.log("=== Задание 1: последовательная цепочка ===");
  await runSequential();

  // --- Задание 2 ---
  console.log("\n=== Задание 2: Promise.all над массивом строк ===");
  const upper = await processAll(["hello", "world", "typescript"]);
  console.log(upper); // [ 'HELLO', 'WORLD', 'TYPESCRIPT' ]

  // --- Задание 3 ---
  console.log("\n=== Задание 3: ошибка в Promise.all ===");
  await runParallelWithError();

  // --- Задание 4 ---
  console.log("\n=== Задание 4: динамические задержки ===");
  const result = await resolveAfterDelays([300, 100, 200]);
  console.log("Итог (в порядке массива):", result); // [300, 100, 200]
}

main();
