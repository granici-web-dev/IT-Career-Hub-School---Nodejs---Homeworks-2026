// Задание 2 — Union типы

export type Id = string | number;

export function displayId(id: Id): void {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`ID: ${id * 10}`);
  }
}
