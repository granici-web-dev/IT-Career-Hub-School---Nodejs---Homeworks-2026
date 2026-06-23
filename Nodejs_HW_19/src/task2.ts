// Задание 2 — Интерфейс функции string

export interface StringToBooleanFunction {
  (value: string): boolean;
}

export const isNotEmpty: StringToBooleanFunction = (value) => {
  return value.trim().length > 0;
};
