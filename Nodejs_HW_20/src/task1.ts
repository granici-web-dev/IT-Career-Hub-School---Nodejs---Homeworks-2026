// Задание 1 — Класс Animal и наследник Dog

export class Animal {
  constructor(
    public name: string,
    public species: string,
  ) {}

  sound(): void {
    console.log("The animal makes a sound");
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    species: string,
    public breed: string,
  ) {
    super(name, species);
  }

  override sound(): void {
    console.log("The dog barks");
  }
}
