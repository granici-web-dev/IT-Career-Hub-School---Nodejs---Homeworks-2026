import { Animal, Dog } from "./task1.js";
import { Library } from "./task2.js";
import { Vehicle, Motorcycle } from "./task3.js";

// --- Задание 1 ---
console.log("=== Задание 1: Animal / Dog ===");
const animal = new Animal("Generic", "unknown");
animal.sound();

const dog = new Dog("Rex", "Canis familiaris", "Labrador");
dog.sound();
console.log(`${dog.name} — порода: ${dog.breed}, вид: ${dog.species}`);

// --- Задание 2 ---
console.log("\n=== Задание 2: Library (static) ===");
const lib1 = new Library();
const lib2 = new Library();

lib1.addBook();
lib1.addBook();
lib2.addBook();

console.log(`Всего книг: ${Library.totalBooks}`);

// --- Задание 3 ---
console.log("\n=== Задание 3: Vehicle / Motorcycle ===");
const vehicle = new Vehicle("Ford", "Focus");
console.log(vehicle);

const moto = new Motorcycle("Harley-Davidson", "Iron 883", "cruiser");
console.log(moto);
console.log(`${moto.make} ${moto.model} — тип: ${moto.type}`);
