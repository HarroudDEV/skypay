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

class Account implements AccountService {
  private balance: number = 0;
  private transactions: Array<Transaction> = [];
  constructor() {}
  public deposit(amount: number) {
    try {
      if (amount <= 0) throw new Error("Amount must be greater than zero.");
      this.transactions.push({
        date: new Date().toLocaleDateString("en-GB"),
        amount: amount,
        balance: this.balance + amount,
      });
      // update balance
      this.balance += amount;
    } catch (err) {
      console.error(err);
    }
  }
  public withdraw(amount: number) {
    try {
      if (amount <= 0) throw new Error("Amount must be greater than zero.");
      if (amount > this.balance)
        throw new Error("Insufficient funds for withdrawal.");
      this.transactions.push({
        amount: amount,
        date: new Date().toLocaleDateString("en-GB"),
        balance: this.balance - amount,
      });
      // update global balance
      this.balance -= amount;
    } catch (err) {
      console.error(err);
    }
  }
  public printStatement() {
    if (this.transactions.length === 0)
      console.log("This account has no transactions yet.");
    console.table(this.transactions);
  }
}
const acc = new Account();
acc.deposit(50);
acc.deposit(50);
acc.withdraw(50);
acc.deposit(500);
acc.withdraw(200);
acc.printStatement();
