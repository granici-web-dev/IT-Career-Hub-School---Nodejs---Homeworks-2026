// Задание 4 — Абстрактный класс Account

export abstract class Account {
  protected balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

export class SavingsAccount extends Account {
  constructor(
    initialBalance: number,
    private interestRate: number, // например 0.05 = 5%
  ) {
    super(initialBalance);
  }

  deposit(amount: number): void {
    this.balance += amount;
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(
      `Savings: +${amount}, проценты +${interest.toFixed(2)}, баланс ${this.balance.toFixed(2)}`,
    );
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Savings: недостаточно средств");
      return;
    }
    this.balance -= amount;
    console.log(`Savings: -${amount}, баланс ${this.balance.toFixed(2)}`);
  }
}

export class CheckingAccount extends Account {
  constructor(
    initialBalance: number,
    private fee: number,
  ) {
    super(initialBalance);
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Checking: +${amount}, баланс ${this.balance.toFixed(2)}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total > this.balance) {
      console.log("Checking: недостаточно средств (с учётом комиссии)");
      return;
    }
    this.balance -= total;
    console.log(
      `Checking: -${amount} (комиссия ${this.fee}), баланс ${this.balance.toFixed(2)}`,
    );
  }
}
