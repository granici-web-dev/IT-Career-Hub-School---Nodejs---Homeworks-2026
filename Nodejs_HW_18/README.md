## Домашняя работа 18 — TypeScript

Объединение/пересечение типов, вложенные объекты, интерфейсы функций, наследование интерфейсов.

## Структура

```
homework_18/
├── package.json
├── tsconfig.json
├── .gitignore
└── src/
    ├── task1.ts            — Admin & User → AdminUser (пересечение)
    ├── task2.ts            — Car + вложенный engine + опциональный year
    ├── task3.ts            — интерфейс функции calculateDiscount
    ├── task5_salaries.ts   — Задание 5 (первое): Employee[] → зарплаты
    ├── task5_student.ts    — Задание 5 (второе): Person → Student
    ├── task6.ts            — интерфейс функции concatStrings
    └── index.ts            — запуск всех заданий
```

> В методичке два задания идут под номером «5» — они разнесены в `task5_salaries.ts` и `task5_student.ts`. Задания 4 в методичке нет.

## Запуск

```bash
npm install
npm run dev   # tsc + node dist/index.js
```

Или по шагам: `npm run build` → `npm start`.
