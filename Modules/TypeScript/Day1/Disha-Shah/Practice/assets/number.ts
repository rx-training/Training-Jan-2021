document.getElementById("app").innerHTML += "<br> Number Methods Practice <br>";

// tooExponential()
let myNumber: number = 123456;

// returns 1.23456e+5
document.getElementById("app").innerHTML += myNumber.toExponential() + "<br>";

//returns 1.2e+5
document.getElementById("app").innerHTML += myNumber.toExponential(1) + "<br>";

//returns 1.23e+5
document.getElementById("app").innerHTML += myNumber.toExponential(2) + "<br>";

//returns 1.235e+5
document.getElementById("app").innerHTML += myNumber.toExponential(3) + "<br>";

// toFixed()
let myNumber1: number = 10.8788;

document.getElementById("app").innerHTML += myNumber1.toFixed() + "<br>"; // returns 11
document.getElementById("app").innerHTML += myNumber1.toFixed(1) + "<br>"; //returns 10.9
document.getElementById("app").innerHTML += myNumber1.toFixed(2) + "<br>"; //returns 10.88
document.getElementById("app").innerHTML += myNumber1.toFixed(3) + "<br>"; //returns 10.879
document.getElementById("app").innerHTML += myNumber1.toFixed(4) + "<br>"; //returns 10.8788

// toLocaleString()
let myNumber2: number = 10667.987;

document.getElementById("app").innerHTML += myNumber2.toLocaleString() + "<br>"; // returns 10,667.987 - US English
document.getElementById("app").innerHTML += myNumber2.toLocaleString('de-DE') + "<br>"; // returns 10.667,987 - German
document.getElementById("app").innerHTML += myNumber2.toLocaleString('ar-EG') + "<br>"; // returns 10667.987 in Arebic

// toPrecision()
let myNumber3: number = 10.5679;

document.getElementById("app").innerHTML += myNumber3.toPrecision(1) + "<br>"; // returns 1e+1
document.getElementById("app").innerHTML += myNumber3.toPrecision(2) + "<br>"; // returns 11
document.getElementById("app").innerHTML += myNumber3.toPrecision(3) + "<br>"; // returns 10.6
document.getElementById("app").innerHTML += myNumber3.toPrecision(4) + "<br>"; // returns 10.57

// toString()
let myNumber4: number = 123;
document.getElementById("app").innerHTML += myNumber4.toString() + "<br>"; // returns '123'
document.getElementById("app").innerHTML += myNumber4.toString(2) + "<br>"; // returns '1111011'
document.getElementById("app").innerHTML += myNumber4.toString(4) + "<br>"; // returns '1323'
document.getElementById("app").innerHTML += myNumber4.toString(8) + "<br>"; // returns '173'
document.getElementById("app").innerHTML += myNumber4.toString(16) + "<br>"; // returns '7b'
document.getElementById("app").innerHTML += myNumber4.toString(36) + "<br>"; // returns '3f'

// valueOf()
let myNumber5 = new Number(123);
console.log(myNumber5) //Output: a number object with value 123
console.log(myNumber5.valueOf()) //Output: 123
console.log(typeof myNumber5) //Output: object

let num2 = myNumber5.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2) //Output: number
