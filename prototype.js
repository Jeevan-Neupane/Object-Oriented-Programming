function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;


   

    this.withdraw=(amount)=>{
        this.balance-=amount;
    }

}

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;

}
const JeevanAccount=new BankAccount("Jeevan Neupane");

JeevanAccount.deposit(4500)

console.log(JeevanAccount);

// const JohnAccount=new BankAccount("John Doe");


