var BrysonsBankAccount = {};
BrysonsBankAccount["balance"] = 1000;
var withdrawl = prompt("You currently have $1,000 how much would you like to withdrawl today?");
BrysonsBankAccount["balance"] -= withdrawl;
window.alert(BrysonsBankAccount.balance);
