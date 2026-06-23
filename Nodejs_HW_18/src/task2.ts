// Задание 2 — Вложенные объекты и опциональные поля

export interface Engine {
  type: string;
  horsepower: number;
}

export interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
}

export function printCarInfo(car: Car): void {
  const year = car.year ? ` (${car.year})` : "";
  console.log(
    `${car.make} ${car.model}${year} — двигатель ${car.engine.type}, ${car.engine.horsepower} л.с.`,
  );
}

export const car: Car = {
  make: "BMW",
  model: "M3",
  engine: { type: "twin-turbo I6", horsepower: 510 },
  year: 2024,
};
