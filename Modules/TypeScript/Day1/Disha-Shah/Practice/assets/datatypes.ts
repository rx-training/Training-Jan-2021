document.getElementById("app").innerHTML += "Data Types Practice <br>";

// number variable
var age:number=44;
document.getElementById("app").innerHTML += age + "<br>";

// string variable
var message:string="Hello";
document.getElementById("app").innerHTML += message + "<br>";

// boolean variable
var isUpdated:boolean=true;
document.getElementById("app").innerHTML += isUpdated + "<br>";

// hexadecimal number
var second:number=0x37CF;
document.getElementById("app").innerHTML += second + "<br>";

// octal number
var third:number=0o377;
document.getElementById("app").innerHTML += third + "<br>";

// binary number
var fourth:number=0b111001;
document.getElementById("app").innerHTML += fourth + "<br>";

// void
function sayHi(): void { 
    document.getElementById("app").innerHTML += "Hi!<br>";
} 

var speech: void = sayHi(); 
console.log(speech); //Output: undefined

// undefined
// Not much else we can assign to these variables!
var u: undefined = undefined;
document.getElementById("app").innerHTML += u + "<br>";

// null
var n: null = null;
document.getElementById("app").innerHTML += n + "<br>";

// boolean
var isPresent:boolean = true;
document.getElementById("app").innerHTML += isPresent + "<br>";

// any
let something: any = "Hello World!";
document.getElementById("app").innerHTML += something + "<br>";

something = 23;
document.getElementById("app").innerHTML += something + "<br>";

something = true;
document.getElementById("app").innerHTML += something + "<br>";

let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 

let val: any = 'Hi';
document.getElementById("app").innerHTML += val + "<br>";

val = 555;
document.getElementById("app").innerHTML += val + "<br>";

val = true;
document.getElementById("app").innerHTML += val + "<br>";

function ProcessData(x: any, y: any): any{
    return x+y;
}

let result: any;
result = ProcessData("Hello", "Any!");
document.getElementById("app").innerHTML += result + "<br>";

result=ProcessData(2,3)
document.getElementById("app").innerHTML += result + "<br>";

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
document.getElementById("app").innerHTML += looselyTyped + "<br>";

document.getElementById("app").innerHTML += looselyTyped.ifItExists() + "<br>";
// OK, toFixed exists (but the compiler doesn't check)

document.getElementById("app").innerHTML += looselyTyped.toFixed() + "<br>";

// let strictlyTyped: unknown = 4;
// document.getElementById("app").innerHTML += strictlyTyped.toFixed() + "<br>";

let looselyTyped1: any = {};
let d = looselyTyped1.a.b.c.d;
document.getElementById("app").innerHTML += d + "<br>";