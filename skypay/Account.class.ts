type Transaction = {
  date: string;
  amount: number;
  balance: number;
};

interface AccountService {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  printStatement(): void;
}

export default class Account implements AccountService {
  balance: number = 0;
  private transactions: Array<Transaction> = [];
  constructor() {}
  deposit(amount: number) {
    try {
      if (amount <= 0) throw new Error("Amount must be greater than zero.");
      this.transactions.push({
        date: new Date().toLocaleDateString("en-GB"),
        amount: amount,
        balance: this.balance + amount,
      });
      // update balance
      this.balance += amount;
    } catch (err: any) {
      console.error(err);
      throw new Error(err);
    }
  }
  public withdraw(amount: number) {
    try {
      if (amount <= 0) throw new Error("Amount must be greater than zero.");
      if (amount > this.balance)
        throw new Error("Insufficient funds for withdrawal.");
      this.transactions.push({
        date: new Date().toLocaleDateString("en-GB"),
        amount: amount,
        balance: this.balance - amount,
      });
      // update global balance
      this.balance -= amount;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  public printStatement() {
    if (this.transactions.length === 0)
      console.log("This account has no transactions yet.");
    console.table(this.transactions);
    console.log(this.transactions);
    return this.transactions;
  }
}

const acc = new Account();
acc.deposit(1500);
acc.deposit(800);
acc.withdraw(700);
acc.printStatement();
