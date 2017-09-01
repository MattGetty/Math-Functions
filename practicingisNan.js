var userOne = prompt("User 1 guess a number between 1 and 6");
if ((userOne < 1) || (userOne > 6) || isNan(userOne)) {
  window.alert("You cannot follow directions");
} else {
  var userTwo = prompt("Guess a number between 1 and 6");
  if (userOne == userTwo) {
    window.alert("YOU WIN YAAAAY");
  } else {
    window.alert("Player one answer was " + userOne);
    window.alert("You choose " + userTwo);
  }
}