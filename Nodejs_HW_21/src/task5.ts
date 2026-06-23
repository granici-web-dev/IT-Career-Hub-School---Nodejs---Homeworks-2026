// Задание 5 — Абстрактный класс Media

export abstract class Media {
  abstract play(): void;
}

export class Audio extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

export class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}
