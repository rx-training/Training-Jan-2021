// greater 
var max = () => {
	num1 = parseInt(prompt("Enter First Number", "11"))
	document.getElementById("num1").innerHTML = num1

	num2 = parseInt(prompt("Enter Second Number", "12"))
	document.getElementById("num2").innerHTML = num2	

	num3 = parseInt(prompt("Enter Third Number", "13"))	
	document.getElementById("num3").innerHTML = num3

	// greater between 3 number
	document.getElementById("answer1").innerHTML = ((num1>num2 && num1>num3)?num1:((num2>num3)?num2:num3))
	// sum of number greater than 40
	var numbers = [num1, num2, num3];
	var sum=0;
	for(var i=0; i<numbers.length; i++){
		if(numbers[i]>40){
			sum += numbers[i];
		}
	}
	document.getElementById("answer2").innerHTML = sum;
}
// Cities
var viewCities = () => {
	var cities = ['Amdavad', 'Bhavnagar', 'Ghandhinagar', 'Surat', 'vadodara']
	for (var i = cities.length - 1; i >= 0; i--) {
		alert(cities[i])
	}
}
//  Calculator

var calculator = function() {
	var num1 = document.getElementById("firstNum").value;
	var num2 = document.getElementById("secondNum").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	if(!num1){
		document.getElementById("msg1").innerHTML = "please enter a number";
	}else {
		document.getElementById("msg1").innerHTML = "";
	}
	if(!num2){
		document.getElementById("msg2").innerHTML = "please enter a number";
	}else {
		document.getElementById("msg2").innerHTML = "";
	}
}
var showResult = function() {
	var num1 = document.getElementById("firstNum").value;
	var num2 = document.getElementById("secondNum").value;
	var result;

	num1 = parseInt(num1)
	num2 = parseInt(num2)
	var operators = document.querySelectorAll('input[name="op"]');
	var selected;
	for(var op of operators){
		if(op.checked){
			selected = op.value;
			break;
		}
	}
	if(selected == "+"){
		result = num1 + num2;
	} else if(selected == "-"){
		result = num1 - num2;
	} else if(selected == "*"){
		result = num1 * num2;
	} else if(selected == "/"){
		result = num1 / num2;
	} else {
		result = "please select a operator"
	}
	document.getElementById("result").innerHTML = result;
	
}
var reset = () => {
	document.getElementById("firstNum").value = 0;
	document.getElementById("secondNum").value = 0;

	document.getElementById("result").innerHTML = "";
}
/******** end of work ****************/


/******** practice ********/
var calculate = function() {
  var distance = document.getElementById("distance").value;
  var time = document.getElementById("time").value;
  var speed = distance/time;

  if (speed=="NaN"){
    document.getElementById("speed").innerHTML="Invalid Input";
    document.getElementById("unit").innerHTML="";
  }else{
    document.getElementById("speed").innerHTML=speed;
  }
};


// var btn = document.getElementById("mbtn")
// var txt = document.getElementById("mtxt")

// btn.addEventListener("click", updatebtn)
// function updatebtn() {
// 	if (btn.textContent === "Start machine") {
// 		btn.textContent = "Stop machine"
// 		txt.textContent = "machine started..."
// 	}
// 	else {
// 		btn.textContent = "Start machine"
// 		txt.textContent = "machine stopped..."
// 	}
// }