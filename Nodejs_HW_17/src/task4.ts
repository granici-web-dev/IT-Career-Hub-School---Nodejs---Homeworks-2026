// Задание 4 — Кортежи и объекты

export type ProductInfo = [string, number, number];

export type Inventory = Record<string, number>;

export function updateStock(
  inventory: Inventory,
  productInfo: ProductInfo,
): Inventory {
  const [name, , quantity] = productInfo;
  return {
    ...inventory,
    [name]: (inventory[name] ?? 0) + quantity,
  };
}
