// Задание 4 — Асинхронная функция с динамическим временем выполнения

import { delay } from "./delay.js";

export async function resolveAfterDelays(numbers: number[]): Promise<number[]> {
  const promises = numbers.map(async (n) => {
    await delay(n);
    console.log(`Готово через ${n}мс`);
    return n;
  });

  return Promise.all(promises);
}
