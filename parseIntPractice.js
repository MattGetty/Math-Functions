var BrysonsBankAccount = {};
BrysonsBankAccount["balance"] = 1000;
var deposit = prompt("You currently have $1,000 how much would you like to deposit today?");
var x = parseInt(deposit);//parse makes it so u can add the value instead of doing -= to subtract value
window.alert(BrysonsBankAccount.balance + x);