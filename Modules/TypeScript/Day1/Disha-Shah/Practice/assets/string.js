document.getElementById("app").innerHTML += "<br> String Methods Practice <br>";
// Template Strings
let employeeName = "John Smith";
let employeeDept = "Finance";
// Pre-ES6 
let employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6 
let employeeDesc2 = `${employeeName} works in the ${employeeDept} department.`;
console.log(employeeDesc1); //John Smith works in the Finance department. 
console.log(employeeDesc2); //John Smith works in the Finance department. 
// charAt()
document.getElementById("app").innerHTML += employeeName.charAt(3) + "<br>";
// concat()
document.getElementById("app").innerHTML += employeeName.concat(", ", employeeDept) + "<br>";
//indexOf()
document.getElementById("app").innerHTML += employeeName.indexOf("Smi") + "<br>";
// replace()
document.getElementById("app").innerHTML += employeeName.replace("Smith", "Doe") + "<br>";
// split()
document.getElementById("app").innerHTML += employeeName.split(' ') + "<br>";
// toUpperCase()
document.getElementById("app").innerHTML += employeeName.toLocaleUpperCase() + "<br>";
// toLowerCase()
document.getElementById("app").innerHTML += employeeName.toLocaleLowerCase() + "<br>";
// includes()
document.getElementById("app").innerHTML += employeeName.includes("John") + "<br>";
// endsWith()
document.getElementById("app").innerHTML += `${employeeName.endsWith("Smith")}<br>`;
// lastIndexOf()
document.getElementById("app").innerHTML += `${employeeName.lastIndexOf("Smith")}<br>`;
document.getElementById("app").innerHTML += `${employeeDept.localeCompare("finance")}<br>`;
// padEnd()
document.getElementById("app").innerHTML += `${employeeName.padEnd(13, "*")}<br>`;
// padStart()
document.getElementById("app").innerHTML += `${employeeName.padStart(13, "*")}<br>`;
// repeat()
document.getElementById("app").innerHTML += `${employeeName.repeat(3)}<br>`;
// search()
document.getElementById("app").innerHTML += `${employeeName.search("smith")}<br>`;
// slice()
document.getElementById("app").innerHTML += `${employeeName.slice(1, 7)}<br>`;
// startsWith()
document.getElementById("app").innerHTML += `${employeeName.startsWith("John")}<br>`;
// substr()
document.getElementById("app").innerHTML += `${employeeName.substr(0, 7)}<br>`;
// substring()
document.getElementById("app").innerHTML += `${employeeName.substring(0, 7)}<br>`;
// trim()
document.getElementById("app").innerHTML += `${employeeName.trim()}<br>`;
// trimLeft()
var demo = "    Hello      ";
document.getElementById("app").innerHTML += `${demo.trimLeft()}<br>`;
// trimEnd()
var demo1 = "    Hello      ";
document.getElementById("app").innerHTML += `${demo1.trimEnd()}<br>`;
let fullName = `Bob Bobbington`;
let ageNew = 37;
let sentenceNew = `Hello, my name is ${fullName}.

I'll be ${ageNew + 1} years old next month.`;
document.getElementById("app").innerHTML += `${sentenceNew}<br>`;
let sentence = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (ageNew + 1) +
    " years old next month.";
document.getElementById("app").innerHTML += `${sentence}<br>`;
