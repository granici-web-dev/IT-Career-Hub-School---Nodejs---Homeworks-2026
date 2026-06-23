// Задание 1 — Модуль для работы со строками

export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
