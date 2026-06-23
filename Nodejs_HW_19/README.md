## Домашняя работа 19 — TypeScript

Стрелочные функции, интерфейсы/типы функций, обобщённые (generic) функции.

## Структура

```
homework_19/
├── package.json
├── tsconfig.json
├── .gitignore
└── src/
    ├── task1.ts   — sumEvenNumbers (сумма чётных)
    ├── task2.ts   — StringToBooleanFunction (интерфейс функции)
    ├── task3.ts   — CompareStrings (тип функции)
    ├── task4.ts   — getLastElement<T> (generic)
    ├── task5.ts   — makeTriple<T> (generic, кортеж [T, T, T])
    └── index.ts   — запуск всех заданий
```

## Запуск

```bash
npm install
npm run dev   # tsc + node dist/index.js
```

Или по шагам: `npm run build` → `npm start`.
