class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(name, balance = 0) {
        this.customerName = name;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(depositAmount) {
        this.balance += depositAmount;
    }

    withdraw(withdrawAmount) {
        this.balance -= withdrawAmount;
    }
}


class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
       

    }
    takeBusinessLoan(amount){
        console.log("Business Loan Taken is ",amount);
        
    }
    
}

class SavingAccount extends BankAccount{
    
    transactionLimit=10000;
    constructor(customerName,balance=0){
        super(customerName,balance);
      
    }
    
    takePersonalLoan(amount){
        console.log("Personal Loan Taken is ",amount);

    }


}

const JohnAccount=new BankAccount("John",5000);

const JohnSavingAccount=new SavingAccount("John",3000);
JohnSavingAccount.deposit(3000);
const JohnCurrentAccount=new CurrentAccount("John",4000);

console.log(JohnAccount);
console.log(JohnSavingAccount)
console.log(JohnCurrentAccount)