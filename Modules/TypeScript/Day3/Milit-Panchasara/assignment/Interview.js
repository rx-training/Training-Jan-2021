"use strict";
exports.__esModule = true;
exports.interviewList = exports.Interviews = void 0;
var Applicant_1 = require("./Applicant");
var Interviews = /** @class */ (function () {
    function Interviews() {
    }
    Interviews.prototype.createInterview = function (input) {
        var isExist = Applicant_1.applicantList.filter(function (app, i, applicantList) { return app.id == input.applicantId; });
        if (isExist.length < 1) {
            console.log();
            console.log("Invalid applicant Id");
            return;
        }
        exports.interviewList.push(input);
    };
    Interviews.prototype.updateInterviewResult = function (id, result) {
        for (var key in exports.interviewList) {
            if (exports.interviewList[key].id == id) {
                exports.interviewList[key].result = result;
                return;
            }
        }
    };
    Interviews.prototype.viewAllInterviews = function () {
        console.log();
        console.log("APPLICANTS:");
        exports.interviewList.forEach(function (interview) {
            console.log("ID: " + interview.id + ", Applicant: " + interview.applicantId + ", Interview Type: " + interview.type + ", Scheduled at: " + interview.time + ", result: " + ((interview.result === undefined) ? "Pending" : ((interview.result) ? "Passed" : "Failed")));
        });
        console.log();
    };
    Interviews.prototype.viewInterview = function (id) {
        console.log();
        for (var key in exports.interviewList) {
            if (exports.interviewList[key].id == id) {
                var interview = exports.interviewList[key];
                console.log("ID: " + interview.id + ", Applicant: " + interview.applicantId + ", Interview Type: " + interview.type + ", Scheduled at: " + interview.time + ", result: " + ((interview.result === undefined) ? "Pending" : ((interview.result) ? "Passed" : "Failed")));
                console.log();
                return;
            }
        }
        console.log("Invalid interview id: " + id);
        console.log();
    };
    return Interviews;
}());
exports.Interviews = Interviews;
exports.interviewList = [];
