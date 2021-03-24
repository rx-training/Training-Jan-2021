// Practice1 Define a function called callback which receives an argument and prints the square of that number.
var print = (value,id='callBack') => {
	document.getElementById(id).innerHTML = value;
}
var square = (x,callback) => {
	result = x * x;
	callback(result);
}
square(5, print);

// Practice2 Explain difference between var and let keyword using example. 
var x = 5;
var varDemo = () => {
	x += 1;
	print(x, 'var')
}
varDemo(x);

let y = 5;
var letDemo = () => {
	// y += 1; // gives y=6
	let y = 1;
	print(y, 'let')
}
letDemo(y);

// Practice3
// Make a function that takes in a single parameter and returns a new promise. using setTimeout, after 500 milliseconds, the promise will either resolove or reject. if the input is a string, the promise resolves with that reverse string . if the input is anything but a string it rejects with that same input call the function wrong Input

var checkIp = () => {
	value = document.getElementById("ip").value;
	op = document.getElementById("op").value
	var myPromise = new Promise( (solve,reject) => {
		if(value == ""){
			setTimeout( () => solve("empty"),500);
		}
		else if(!isNaN(value)){
			setTimeout( () => solve("Input is a number"),500);
		} else {
			setTimeout( () => reject("Input is a string"),500);
		}
	});
	myPromise.then( (message) => {
		console.log(message);
		document.getElementById("op").innerHTML = message;
	}).catch( (message) => {
		console.log(message);
		document.getElementById("op").innerHTML = message;
	});
}


// Assignment

// University of Mumbai needs to set an online exam for their students. For that they need to set a timer for three hours. After 3 hours exams should be finished.
async function exam() {
	document.getElementById("status").innerHTML = "exam started";
	
	let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Exam over"); }, 3000);
 	});
  	document.getElementById("time").innerHTML = await myPromise;
}
