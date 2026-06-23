// Задание 3 — Абстрактный класс Appliance

export abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

export class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing machine is now ON");
  }

  turnOff(): void {
    console.log("Washing machine is now OFF");
  }
}

export class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON");
  }

  turnOff(): void {
    console.log("Refrigerator is now OFF");
  }
}
