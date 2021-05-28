"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interview = void 0;
var Interview = /** @class */ (function () {
    function Interview() {
        this.interviewDate = new Date();
    }
    Interview.prototype.scheduleInterview = function (applicant) {
        this.interviewDate.setDate(applicant.appliedDate.getDate() + 2);
        var dd = this.interviewDate.getDate();
        var mm = this.interviewDate.getMonth() + 1;
        var yy = this.interviewDate.getFullYear();
        var res = "Hello " + applicant.name + ", Your interview for " + applicant.applyFor + " has been scheduled on " + dd + "/" + mm + "/" + yy + " at 10:30 AM";
        applicant.setInterviewDate(this.interviewDate);
        return res;
    };
    Interview.prototype.storingInterviewResult = function (applicant) {
        var result = Math.floor(Math.random() * 70);
        applicant.setInterviewResult(result);
        if (result > 40) {
            console.log();
            console.log("Your score is: " + result + ". You have successfully cleared the exam!!");
            this.hiring(applicant);
        }
        else {
            console.log();
            console.log("Your score is: " + result + ". Please try again next time.");
        }
    };
    Interview.prototype.hiring = function (applicant) {
        console.log();
        console.log("Based on your interview scores we are happy to anounce that Mr./Ms. " + applicant.name + " have successfully been hired for the " + applicant.applyFor + " position. Please come to the office for completing document process on the coming Monday.");
    };
    Interview.prototype.generateReport = function (applicants) {
        var newArray = applicants.filter(function (applicants, i, arr) {
            return applicants.interviewResult > 40;
        });
        return newArray;
    };
    return Interview;
}());
exports.Interview = Interview;
//# sourceMappingURL=interview.js.map