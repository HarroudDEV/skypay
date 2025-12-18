import { exec } from "node:child_process";
import Account from "./Account.class";

describe("Account withdrawals and deposits", () => {
  it("should throw an error when withdrawing more than the available balance", () => {
    const acc = new Account();

    expect(() => acc.withdraw(100)).toThrow(
      "Insufficient funds for withdrawal."
    );
  });

  it("should throw an error when depositing a negative amount", () => {
    const acc = new Account();
    expect(() => acc.deposit(-50)).toThrow("Amount must be greater than zero.");
  });

  it("should return the transaction history", () => {
    const acc = new Account();
    acc.deposit(1500);
    acc.deposit(800);
    acc.withdraw(700);
    expect(acc.printStatement()).toStrictEqual([
      { date: "18/12/2025", amount: 1500, balance: 1500 },
      { date: "18/12/2025", amount: 800, balance: 2300 },
      { date: "18/12/2025", amount: 700, balance: 1600 },
    ]);
  });
});
