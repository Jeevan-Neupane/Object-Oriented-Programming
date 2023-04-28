class BankAccount{
  customerName;
  accountNumber;
  balance=0;

  constructor(name,balance=0){
    this.customerName=name;
    this.accountNumber=Date.now();
    this.balance=balance;
  }

  deposit(depositAmount){
    this.balance+=depositAmount;
  }

  withdraw(withdrawAmount){
    this.balance-=withdrawAmount;
  }




}


const JeevanAccount=new BankAccount("Jeevan Neupane",36000);
JeevanAccount.deposit(3000)
JeevanAccount.withdraw(3000)
console.log(JeevanAccount);



const JohnWickAccount=new BankAccount("Jhon Wick",100000);
JohnWickAccount.deposit(10000000)
JohnWickAccount.withdraw(10000000)
console.log(JohnWickAccount);