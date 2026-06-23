// Задание 1 — Последовательная цепочка промисов с async/await

import { delay } from "./delay.js";

async function stepOne(): Promise<string> {
  await delay(300);
  return "Шаг 1 завершён (300мс)";
}

async function stepTwo(): Promise<string> {
  await delay(200);
  return "Шаг 2 завершён (200мс)";
}

async function stepThree(): Promise<string> {
  await delay(100);
  return "Шаг 3 завершён (100мс)";
}

export async function runSequential(): Promise<void> {
  const start = Date.now();

  const r1 = await stepOne();
  console.log(r1);

  const r2 = await stepTwo();
  console.log(r2);

  const r3 = await stepThree();
  console.log(r3);

  console.log(`Всего времени: ~${Date.now() - start}мс`);
}
