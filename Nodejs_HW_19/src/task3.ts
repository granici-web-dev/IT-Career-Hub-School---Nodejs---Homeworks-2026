// Задание 3 — Тип функции (string, string)

export type CompareStrings = (str1: string, str2: string) => boolean;

export const areEqual: CompareStrings = (str1, str2) => {
  return str1 === str2;
};
