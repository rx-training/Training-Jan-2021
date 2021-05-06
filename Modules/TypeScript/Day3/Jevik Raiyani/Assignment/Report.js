"use strict";
exports.__esModule = true;
exports.Report = void 0;
var demo_1 = require("./demo");
var demo_2 = require("./demo");
var demo_3 = require("./demo");
var Shorted = [];
var FinalVacancy = demo_1.vacancy;
var Report = /** @class */ (function () {
    function Report() {
    }
    Report.prototype.TotalVacancy = function () {
        for (var _i = 0, vacancy_1 = demo_1.vacancy; _i < vacancy_1.length; _i++) {
            var val = vacancy_1[_i];
            console.log("Id: " + val.Vacancyid + ", VacanyName:" + val.VacancyPosition + ", VacancyPosition:" + val.VacancyNumber);
        }
    };
    Report.prototype.TotalApplicant = function () {
        for (var _i = 0, applicant_1 = demo_2.applicant; _i < applicant_1.length; _i++) {
            var val = applicant_1[_i];
            console.log("Id:" + val.ApplicantId + ", ApplicantName:" + val.ApplicantName + ", AppliedPositon:" + val.ApplyForDesignation + ",Graduate%: " + val.ApplicantGraduationPercentage + " ");
        }
    };
    Report.prototype.SortedAppllicant = function () {
        var p = demo_2.applicant.filter(function (x) { return x.ApplicantGraduationPercentage > 60; });
        var Shorteddata = p.filter(function (_a) {
            var id1 = _a.ApplyForDesignation;
            return demo_1.vacancy.some(function (_a) {
                var id2 = _a.VacancyPosition;
                return id2.toLowerCase() == id1.toLowerCase();
            });
        });
        for (var _i = 0, Shorteddata_1 = Shorteddata; _i < Shorteddata_1.length; _i++) {
            var val = Shorteddata_1[_i];
            Shorted.push(val);
        }
        console.log("Shortlist for Interview");
        for (var _a = 0, Shorted_1 = Shorted; _a < Shorted_1.length; _a++) {
            var i = Shorted_1[_a];
            console.log(i);
        }
    };
    Report.prototype.SheduleInterview = function () {
        for (var _i = 0, Shorted_2 = Shorted; _i < Shorted_2.length; _i++) {
            var i = Shorted_2[_i];
            console.log(i);
            for (var _a = 0, Interviewer_1 = demo_3.Interviewer; _a < Interviewer_1.length; _a++) {
                var p = Interviewer_1[_a];
                console.log("Your Interviewer Name is:" + p.name + " on Tomorrow");
            }
        }
    };
    Report.prototype.FinalList = function () {
        console.log("Congratulation you are selected");
        var i = 4;
        for (var _i = 0, Shorted_3 = Shorted; _i < Shorted_3.length; _i++) {
            var val = Shorted_3[_i];
            i--;
            console.log(val);
            if (i == 0) {
                break;
            }
        }
    };
    return Report;
}());
exports.Report = Report;
