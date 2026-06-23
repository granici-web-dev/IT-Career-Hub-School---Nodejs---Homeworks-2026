// ============================================
// Задание 1 — Функция приветствия
// ============================================
function greetUser(name: string): void {
  console.log(`Привет, ${name}!`);
}

greetUser("Serghei");

// ============================================
// Задание 2 — Типизация функции с объектом
// ============================================
interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`,
  );
}

printPersonInfo({ name: "Alice", age: 30, city: "Berlin" });

// ============================================
// Задание 3 — Типизация числового параметра
// ============================================
function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(5)); // 25

// ============================================
// Задание 4 — Функция с boolean
// ============================================
function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// ============================================
// Задание 5 — Интерфейс для объекта Student
// ============================================
interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
}

printStudentInfo({ name: "Bob", grade: 5 });

// ============================================
// Задание 6 — Функция с типом void
// ============================================
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, TypeScript!");
