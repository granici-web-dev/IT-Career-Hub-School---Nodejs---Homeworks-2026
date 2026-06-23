// Задание 3 — Переопределение конструктора в классе Vehicle

export class Vehicle {
  constructor(
    public make: string,
    public model: string,
  ) {}
}

export class Motorcycle extends Vehicle {
  constructor(
    make: string,
    model: string,
    public type: string,
  ) {
    super(make, model);
  }
}
