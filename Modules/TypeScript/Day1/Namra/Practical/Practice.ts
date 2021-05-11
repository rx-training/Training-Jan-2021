var fname:string = "Namra";
console.log(fname);

let first :number = 123;
console.log(first);
let second : number = 0x37CF ;
let third : number = 0o377 ;
let fourth : number = 0b111001 ;
console.log(second);
console.log(third);
console.log(fourth);

let OpNumber : number = 1230.034;
var expNumber= OpNumber.toExponential();
console.log(expNumber);
var fixNumber = OpNumber.toFixed(2);
console.log(fixNumber);
console.log("To local string : ");
console.log(OpNumber.toLocaleString());
console.log("To precision :")
console.log(OpNumber.toPrecision());
console.log(OpNumber.toPrecision(1));
//String number
var strNumber = new Number(10);
console.log(strNumber.toString()); 
console.log(strNumber.toString(2)); 
console.log(strNumber.toString(8));
//value of function()
console.log(strNumber.valueOf());

// void 
let unusable : void = undefined;
console.log(unusable);

function helloUser() : void {
    console.log("Function is called...");
}
helloUser();

let employeeName : string = "Namra";
let employeeLastName : string ="Patel";

let employeeFullName : string = `${employeeName} ${employeeLastName}`;
console.log(employeeFullName);
//string
var str : string = "How Are you?";
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

// null

let num : number = null;
let str1 : string = null;
let bool : boolean = null;

//Any

let val : any = "Hi";
val = 555;//Ok

function ProcessData(x:any, y:any)
{
    return x+y;
}
let result : any;
result = ProcessData("Hello","Any!");//Hello Any!
result = ProcessData(2,3); //5

//Array

var list : number[] = [1,3,5];
var list1 : Array<number> = [1,2,3];
//var list2 : (string|number)[] = ['Apple',2,'Orange',3,4,'Banana'];
var list2 : Array<string|number> = ['Apple',2,'Orange',3,4,'Banana'];

for(var index in list)
{
    console.log(list[index]);
}

var fruits : Array<string> = ['A','Orange','Banana'];
fruits.sort();
console.log(fruits);//['A','Banana','Orange']

console.log(fruits.pop());//orange

fruits.push('papaya');//['A','Banana','papaya']

fruits = fruits.concat(['Fig','Mango']);
console.log(fruits); 

fruits.indexOf('papaya');//2
var newArr = fruits.filter((fruits,i,arr)=>{
    return fruits.length<2
});//orange,banana

//Tuple
let x : [string, number];
x = ["Hello",10]; // Ok
//x = [ 10,'Hello'] // will generate error
// x[1].substring(1) will generate error of property'substring does not exist on type number'
// x[0].substring(1) will not give an error

// Enum

enum Color{
    Red,
    Green,
    Blue
}
let c : Color = Color.Blue;
console.log(c);// will print 2 as index number 
enum Colors
{
    Red = 1,
    Green = 2,
    Blue
}
let cl : Colors = Colors.Blue;
console.log(cl);
enum Colors1{
    Red = 1,
    Green = 2,
    Blue = 4
}
let clr : Colors1 = Colors1.Blue;
console.log(clr);

// Unknown 
///////// We may need to descibe the type of variables that we dont know when we are writing application. 
///////// These values may come from dynamic content

let notSure : unknown = 4;
notSure = 'May be a string';
notSure = false;

// Null and undefined

let u : undefined = undefined;
let n : null = null;

//Never
// The never type represents the type of values that never occur. For instance, never is the return type for
// a function expression or an arrow function expression that always throws an exception or one that never returns.
// Variables also acquire the type never when narrowed by any type guards that can never be true.

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}
  
// Inferred return type is never
function fail() {
    return error("Something failed");
}
  
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
    while (true) {}
}

