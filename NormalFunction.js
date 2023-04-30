function Hello(name,rollNo){
    name:name;
    rollNo:rollNo;
}

Hello.prototype.changeName=function(name){
    name:name;
}
console.log(Hello.prototype)