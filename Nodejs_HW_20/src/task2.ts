// Задание 2 — Статическое свойство для учёта всех книг

export class Library {
  static totalBooks: number = 0;

  addBook(): void {
    Library.totalBooks++;
  }
}
