// Задание 3 — Обработка ошибки в параллельных промисах

import { delay } from "./delay.js";

function promiseOk(label: string, ms: number): Promise<string> {
  return delay(ms).then(() => `${label} OK`);
}

function promiseFail(ms: number): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Промис 2 упал намеренно")), ms);
  });
}

export async function runParallelWithError(): Promise<void> {
  try {
    const results = await Promise.all([
      promiseOk("Промис 1", 100),
      promiseFail(150),
      promiseOk("Промис 3", 200),
    ]);
    console.log(results);
  } catch (error) {
    console.log("Поймана ошибка:", (error as Error).message);
  }
}
