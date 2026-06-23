// Задание 1 — Сумма чётных чисел (стрелочная функция)

export const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter((n) => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);
};
