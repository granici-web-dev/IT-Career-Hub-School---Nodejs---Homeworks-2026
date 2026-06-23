// Задание 4 — Модуль для работы с числовыми последовательностями

// Числа Фибоначчи, не превышающие limit.
export function generateFibonacci(limit: number): number[] {
  const sequence: number[] = [];
  let a = 0;
  let b = 1;
  while (a <= limit) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

// Простые числа от 2 до limit включительно.
export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(n);
  }
  return primes;
}
