"use strict";
exports.__esModule = true;
//Generic
function users(data) {
    return data;
}
console.log(users({ Name: "Riya", Age: '10' }));
console.log(users("Riya"));
console.log(users(30));
console.log(users({ Name: "Riya", Age: '10' }).Age);
//Modules
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var teacher = new Teacher_1["default"]();
console.log(teacher.data);
var student = new Student_1["default"]();
console.log(student.data);
//Generic function
function Display(arg) {
    return arg;
}
var output1 = Display("Hello World");
var output2 = (100);
console.log(output1);
console.log(output2);
//Generic class
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.diaplay = function () {
        console.log("ID = " + this.Id + ",Name = " + this.Name);
    };
    return StudentInfo;
}());
var s1 = new StudentInfo();
var s2 = new StudentInfo();
s1.setValue(1, "Riya");
s1.diaplay();
s2.setValue("2", "Reena");
s2.diaplay();
;
function StudentData(id, value) {
    console.log(id, value);
}
var std;
console.log(std);
