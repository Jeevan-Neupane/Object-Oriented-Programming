function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;


    this.deposit=function(amount){
        this.balance+=amount;

    }

    this.withdraw=(amount)=>{
        this.balance-=amount;
    }

}

const JohnAccount=new BankAccount("John",10000);
// console.log( JohnAccount)
// JohnAccount.customerName="John Doe";
// console.log( JohnAccount)

const JeevanAccount=new BankAccount("Jeevan",1000);
// console.log(JeevanAccount);
JeevanAccount.deposit(20000);
// console.log(JeevanAccount);


// JohnAccount.deposit(100000);
// console.log(JohnAccount.balance)

JeevanAccount.withdraw(10000);
console.log(JeevanAccount)