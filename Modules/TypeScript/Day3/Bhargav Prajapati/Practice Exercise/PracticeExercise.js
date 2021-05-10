"use strict";
exports.__esModule = true;
exports.DisplayData = exports.StudentInfo = exports.Identity = void 0;
console.log("===========================Generic Function ============================");
function Identity(args) {
    return args;
}
exports.Identity = Identity;
var result = Identity("Hello World");
console.log("String Data is Printed :- " + result);
var result1 = Identity(25);
console.log("Integer data is Printed :- " + result1);
console.log("===============================Generic Class=================================");
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.SetValue = function (Id, Name) {
        this.Id = Id;
        this.Name = Name;
    };
    StudentInfo.prototype.GetValue = function () {
        console.log("Id :- " + this.Id);
        console.log("Name :- " + this.Name);
    };
    return StudentInfo;
}());
exports.StudentInfo = StudentInfo;
var std = new StudentInfo();
std.SetValue(101, "Rohit");
std.GetValue();
std.SetValue("202", "Virat");
std.GetValue();
console.log("===============================Generic InterFace=================================");
function DisplayData(Id, Value) {
    console.log("Id :- " + Id);
    console.log("Name :- " + Value);
}
exports.DisplayData = DisplayData;
var std4 = DisplayData;
std4(1, "Rohit Sharma");
