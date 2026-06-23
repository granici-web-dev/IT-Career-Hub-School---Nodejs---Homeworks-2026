// Вспомогательная функция: промис, который резолвится через ms миллисекунд.
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
