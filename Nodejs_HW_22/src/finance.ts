// Задание 2 — Пространство имён для финансовых операций

export namespace Finance {
  export class LoanCalculator {
    calculateMonthlyPayment(
      principal: number,
      annualRatePercent: number,
      months: number,
    ): number {
      const r = annualRatePercent / 100 / 12;
      if (r === 0) return principal / months;
      const factor = Math.pow(1 + r, months);
      return (principal * (r * factor)) / (factor - 1);
    }
  }

  export class TaxCalculator {
    calculateTax(income: number, ratePercent: number): number {
      return income * (ratePercent / 100);
    }
  }
}
