var stem2 = {
  classroom: "F103",
  students: 12,
}
var x = prompt("classroom or students");
var lowerCase = x.toLowerCase();//forces whatever they typed to be lowercase
if ((lowerCase === "classroom") || (lowerCase === "students")){
window.alert(stem2[lowerCase]);
}
else{
  tryAgain();
}
function tryAgain() {//function keeps running until user types in classroom or students
var x = prompt("classroom or students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")){
window.alert(stem2[lowerCase]);
}
else{
  tryAgain();
}
}