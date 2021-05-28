"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Interviewproceess_1 = require("./Interviewproceess");
var interview = new Interviewproceess_1.InterviewProcess();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Final_Employee = function () {
        console.log("----------------Final Employee---------------");
        console.log();
        console.log(interview.reportEmp);
        console.log("--------------------------------------------------");
    };
    return Employee;
}());
exports.Employee = Employee;
