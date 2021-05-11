"use strict";
exports.__esModule = true;
// Generic 
function Generic(args) {
    return args;
}
console.log(Generic(2363256));
console.log(Generic("This is a GENERIC demo"));
function GenericFunc(args, val) {
    console.log("Id : " + args + ", Value : " + val);
}
var variable = GenericFunc;
variable(23456236, "This is a Generic Interface");
// Generic Class
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var a = new GenericClass();
a.add = function (x, y) {
    return x + y;
};
console.log(a.add(23, 34));
// Module
var Calculator_1 = require("./Calculator");
var c = new Calculator_1.Calculator();
Calculator_1.test(c, "76+2*33/11 = ");
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
