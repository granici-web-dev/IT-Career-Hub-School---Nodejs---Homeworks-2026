// Задание 5 (первое) — Массив объектов и функции

export interface Employee {
  name: string;
  salary: number;
}

export const employees: Employee[] = [
  { name: "Anna", salary: 4200 },
  { name: "Boris", salary: 3800 },
  { name: "Clara", salary: 5100 },
];

export function getSalaries(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}
