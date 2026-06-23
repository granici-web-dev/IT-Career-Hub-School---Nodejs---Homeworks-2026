// Задание 4 — Обобщённая (generic) функция: последний элемент массива

export const getLastElement = <T>(arr: T[]): T | undefined => {
  return arr[arr.length - 1];
};
