"use strict";
exports.__esModule = true;
exports.InterviewResult = void 0;
var Report_1 = require("./Report");
var InterviewResult = /** @class */ (function () {
    function InterviewResult(id, aptitude, logic, comm, gk, pi) {
        this.ID = id;
        this.Aptitude = aptitude;
        this.Logic = logic;
        this.Communication = comm;
        this.GK = gk;
        this.PI = pi;
    }
    InterviewResult.prototype.display = function (data) {
        var Result = 0;
        var hired = [];
        var report = new Report_1.Report;
        console.log("Interview Result : ");
        for (var result in data) {
            console.log(data[result]);
            Result = data[result].Aptitude + data[result].Logic + data[result].Communication + data[result].GK + data[result].PI;
            console.log("Result : " + Result);
            if (Result > 110) {
                console.log("You are hired by the company with the Interview score of " + Result + ".");
                hired.push(data[result]);
            }
            else {
                console.log("Sorry! You are not hired by the commpany. Better luck next time.");
            }
        }
        console.log("");
        report.hiredApplicant(hired);
    };
    return InterviewResult;
}());
exports.InterviewResult = InterviewResult;
