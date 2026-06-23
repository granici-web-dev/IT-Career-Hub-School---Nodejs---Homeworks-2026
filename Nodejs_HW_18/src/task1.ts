// Задание 1 — Объединение и пересечение типов

export type Admin = {
  name: string;
  permissions: string[];
};

export type User = {
  name: string;
  email: string;
};

export type AdminUser = Admin & User;

export const adminUser: AdminUser = {
  name: "Serghei",
  permissions: ["read", "write", "delete"],
  email: "serghei@example.com",
};
