var stem2 = {
  classroom: "F103",
  students: 12,
}
var x = prompt("classroom or students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")){
window.alert(stem2[lowerCase]);
}
else{
	for (i=1; i<3; i++){
  	var x = prompt("classroom or students");
		var lowerCase = x.toLowerCase();
		if ((lowerCase === "classroom") || (lowerCase === "students")){
		window.alert(stem2[lowerCase]);
    i = 3;
  }
}
}
