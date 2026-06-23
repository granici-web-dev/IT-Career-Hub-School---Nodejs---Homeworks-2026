// Задание 2 — Абстрактный класс Shape с цветом

export abstract class Shape {
  abstract calculateArea(): number;
}

export abstract class ColoredShape extends Shape {
  abstract color: string;
}

export class ColoredCircle extends ColoredShape {
  color: string;

  constructor(
    public radius: number,
    color: string,
  ) {
    super();
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class ColoredRectangle extends ColoredShape {
  color: string;

  constructor(
    public width: number,
    public height: number,
    color: string,
  ) {
    super();
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}
