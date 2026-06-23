// Задание 3 — Интерфейс для функции с объектом

export interface Product {
  name: string;
  price: number;
}

export interface CalculateDiscount {
  (product: Product, discount: number): number;
}

// discount — процент скидки (0..100).
export const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price - product.price * (discount / 100);
};
