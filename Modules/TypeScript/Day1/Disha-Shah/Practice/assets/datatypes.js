document.getElementById("app").innerHTML += "Data Types Practice <br>";
// number variable
var age = 44;
document.getElementById("app").innerHTML += age + "<br>";
// string variable
var message = "Hello";
document.getElementById("app").innerHTML += message + "<br>";
// boolean variable
var isUpdated = true;
document.getElementById("app").innerHTML += isUpdated + "<br>";
// hexadecimal number
var second = 0x37CF;
document.getElementById("app").innerHTML += second + "<br>";
// octal number
var third = 255;
document.getElementById("app").innerHTML += third + "<br>";
// binary number
var fourth = 57;
document.getElementById("app").innerHTML += fourth + "<br>";
// void
function sayHi() {
    document.getElementById("app").innerHTML += "Hi!<br>";
}
var speech = sayHi();
console.log(speech); //Output: undefined
// undefined
// Not much else we can assign to these variables!
var u = undefined;
document.getElementById("app").innerHTML += u + "<br>";
// null
var n = null;
document.getElementById("app").innerHTML += n + "<br>";
// boolean
var isPresent = true;
document.getElementById("app").innerHTML += isPresent + "<br>";
// any
var something = "Hello World!";
document.getElementById("app").innerHTML += something + "<br>";
something = 23;
document.getElementById("app").innerHTML += something + "<br>";
something = true;
document.getElementById("app").innerHTML += something + "<br>";
var arr = ["John", 212, true];
arr.push("Smith");
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
var val = 'Hi';
document.getElementById("app").innerHTML += val + "<br>";
val = 555;
document.getElementById("app").innerHTML += val + "<br>";
val = true;
document.getElementById("app").innerHTML += val + "<br>";
function ProcessData(x, y) {
    return x + y;
}
var result;
result = ProcessData("Hello", "Any!");
document.getElementById("app").innerHTML += result + "<br>";
result = ProcessData(2, 3);
document.getElementById("app").innerHTML += result + "<br>";
var looselyTyped = 4;
// OK, ifItExists might exist at runtime
document.getElementById("app").innerHTML += looselyTyped + "<br>";
document.getElementById("app").innerHTML += looselyTyped.ifItExists() + "<br>";
// OK, toFixed exists (but the compiler doesn't check)
document.getElementById("app").innerHTML += looselyTyped.toFixed() + "<br>";
// let strictlyTyped: unknown = 4;
// document.getElementById("app").innerHTML += strictlyTyped.toFixed() + "<br>";
var looselyTyped1 = {};
var d = looselyTyped1.a.b.c.d;
document.getElementById("app").innerHTML += d + "<br>";
//# sourceMappingURL=datatypes.js.map