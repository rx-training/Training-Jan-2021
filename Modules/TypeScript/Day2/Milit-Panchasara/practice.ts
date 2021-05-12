
//union type
function printSomething(input: number | string) {
    console.log(input);
    if(typeof input == "string") { // narrowing union type
        input.toUpperCase();
    }
}

printSomething(1);
printSomething("str");
//printSomething(true); // will show error

// type aliases
type Point = {
    x: number;
    y: number;
}

// need to initialize
var p: Point = {x:2, y:2};
p.x = 1;
p.y = 12;

console.log(p);

interface Persons {
    address:string
}

interface Students extends Persons{
    name: string;
    standard: number;
}

var s1: Students = {
    name:"s1",
    standard:12,
    address:"Rajkot"
}

console.log(s1);

enum Direction {
    Up = 10, //starting from 10
    Down,
    Left,
    Right,
}

enum UserResponse {
    No = 0,
    Yes = 1,
}

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

console.log(Direction.Down);

function optparam(x?:number) {
    console.log(x);
}

optparam();

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

// concat with comma in log function
console.log(x, p.x, 'xaxa');
