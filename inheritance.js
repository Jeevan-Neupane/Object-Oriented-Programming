function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.balance=balance;

    this.accountNumber=Date.now();
}

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}
BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
}
const JohnAccount=new BankAccount("John Wick",10000);

console.log(JohnAccount)

function SavingAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance);
    this.transactionLimit=10000;
}
SavingAccount.prototype=Object.create(BankAccount.prototype);
SavingAccount.prototype.Loan=function(amount){
    console.log("Taking Personal Loan of ",amount)
} 


const JohnSavingAccount=new SavingAccount("John Doe",10000);
JohnSavingAccount.deposit(1000);
JohnSavingAccount.withdraw(10000);
JohnSavingAccount.Loan(2000);

console.log(JohnSavingAccount);