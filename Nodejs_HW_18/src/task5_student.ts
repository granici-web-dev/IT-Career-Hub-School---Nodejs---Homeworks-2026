// Задание 5 (второе) — Наследование интерфейсов

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Student extends Person {
  grade: number;
}

export function printStudentInfo(student: Student): void {
  console.log(
    `${student.firstName} ${student.lastName}, оценка: ${student.grade}`,
  );
}

export const student: Student = {
  firstName: "Ivan",
  lastName: "Petrov",
  grade: 5,
};
