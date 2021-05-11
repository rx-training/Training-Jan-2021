// Generic 
function Generic<T>(args : T) : T{
    return args;
}
console.log(Generic(2363256));
console.log(Generic("This is a GENERIC demo"));


// Generic Interface
interface IGeneric<T, U>{
    (args : T, value : U) : void;
}

function GenericFunc(args : number, val : string) : void{
    console.log(`Id : ${args}, Value : ${val}`);
}
let variable : IGeneric<number, string> = GenericFunc;
variable(23456236, "This is a Generic Interface");


// Generic Class
class GenericClass<T>{
    temp : T;
    add : (x : T, y : T) => T;
}

var a = new GenericClass<number>();
a.add = function(x , y){
    return x + y;
};
console.log(a.add(23, 34));


// Module
import { Calculator, test } from "./Calculator";
let c = new Calculator();
test(c, "76+2*33/11 = "); 


/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}