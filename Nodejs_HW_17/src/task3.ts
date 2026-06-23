// Задание 3 — Массив объектов и фильтрация по статусу

export type OrderStatus = "pending" | "shipped" | "delivered";

export interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

export const orders: Order[] = [
  { orderId: "A-001", amount: 120, status: "pending" },
  { orderId: "A-002", amount: 340, status: "shipped" },
  { orderId: "A-003", amount: 90, status: "delivered" },
  { orderId: "A-004", amount: 510, status: "pending" },
  { orderId: "A-005", amount: 75, status: "shipped" },
];

export function filterOrdersByStatus(
  orders: Order[],
  status: OrderStatus
): Order[] {
  return orders.filter((order) => order.status === status);
}
