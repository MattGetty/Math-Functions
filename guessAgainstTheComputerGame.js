var computerAnswer = Math.floor((Math.random() * 6) +1);
var playerAnswer = prompt("Guess a number between 1 and 6");
if(computerAnswer != playerAnswer){
window.alert("computer chose " + computerAnswer);
window.alert("You Chose " + playerAnswer);
window.alert("You Lost NERD");
}
else{
window.alert("YoU WiN!!!!!")
}
