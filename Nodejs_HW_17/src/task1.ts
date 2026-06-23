// Задание 1 — Типизация функции с несколькими параметрами

export function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0,
): number {
  const subtotal = price * quantity;
  return subtotal - subtotal * (discount / 100);
}
