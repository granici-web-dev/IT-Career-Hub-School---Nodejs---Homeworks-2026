// Задание 2 — Асинхронная обработка массива строк (параллельно)

import { delay } from "./delay.js";

async function processString(str: string): Promise<string> {
  await delay(150);
  return str.toUpperCase();
}

export async function processAll(strings: string[]): Promise<string[]> {
  const results = await Promise.all(strings.map((str) => processString(str)));
  return results;
}
