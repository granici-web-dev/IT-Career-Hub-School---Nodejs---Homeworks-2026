import { Animal, Dog, Cat } from "./task1.js";
import { ColoredShape, ColoredCircle, ColoredRectangle } from "./task2.js";
import { Appliance, WashingMachine, Refrigerator } from "./task3.js";
import { SavingsAccount, CheckingAccount } from "./task4.js";
import { Media, Audio, Video } from "./task5.js";

// --- Задание 1 ---
console.log("=== Задание 1: Animal[] ===");
const animals: Animal[] = [new Dog(), new Cat()];
for (const animal of animals) {
  console.log(animal.makeSound());
}

// --- Задание 2 ---
console.log("\n=== Задание 2: ColoredShape ===");
const shapes: ColoredShape[] = [
  new ColoredCircle(5, "red"),
  new ColoredRectangle(4, 6, "blue"),
];
for (const shape of shapes) {
  console.log(
    `Цвет: ${shape.color}, площадь: ${shape.calculateArea().toFixed(2)}`,
  );
}

// --- Задание 3 ---
console.log("\n=== Задание 3: Appliance[] ===");
const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
for (const appliance of appliances) {
  appliance.turnOn();
  appliance.turnOff();
}

// --- Задание 4 ---
console.log("\n=== Задание 4: Account ===");
const savings = new SavingsAccount(1000, 0.05);
savings.deposit(500);
savings.withdraw(200);

const checking = new CheckingAccount(1000, 2);
checking.deposit(300);
checking.withdraw(500);

// --- Задание 5 ---
console.log("\n=== Задание 5: Media[] ===");
const mediaList: Media[] = [new Audio(), new Video()];
for (const media of mediaList) {
  media.play();
}
