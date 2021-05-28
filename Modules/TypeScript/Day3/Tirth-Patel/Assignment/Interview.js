"use strict";
exports.__esModule = true;
exports.ListofInterviews = exports.Interviews = void 0;
var Interviews = /** @class */ (function () {
    function Interviews() {
    }
    Interviews.prototype.createInterview = function (param) {
        ListofInterviews.push(param);
    };
    Interviews.prototype.ScheduleTheInterview = function (date, id) {
        for (var _i = 0, ListofInterviews_1 = ListofInterviews; _i < ListofInterviews_1.length; _i++) {
            var applicant = ListofInterviews_1[_i];
            if (applicant.ApplicantId == id) {
                //schedule their interview by giving date field
                applicant.SCheduleDate = new Date("2021/05/15"); //hard coded date
            }
        }
    };
    Interviews.prototype.ResultGenerator = function (id) {
        //for now hiring all as of now
        for (var _i = 0, ListofInterviews_2 = ListofInterviews; _i < ListofInterviews_2.length; _i++) {
            var applicant = ListofInterviews_2[_i];
            applicant.IsHired = true;
        }
    };
    Interviews.prototype.InterviewReport = function () {
        //genereating report for the applicant whose date of interview has been passed
        for (var _i = 0, ListofInterviews_3 = ListofInterviews; _i < ListofInterviews_3.length; _i++) {
            var applicant = ListofInterviews_3[_i];
            if (applicant.IsHired) {
                //logic can be implemented accorfingly here
                //hard coding 
                console.log(applicant.ApplicantId + " has been hired!");
            }
            else {
                console.log(applicant.ApplicantId + " better Luck next Time");
            }
        }
    };
    return Interviews;
}());
exports.Interviews = Interviews;
var ListofInterviews = [];
exports.ListofInterviews = ListofInterviews;
ListofInterviews.push({
    InterViewId: 1, ApplicantId: 101
}, {
    InterViewId: 2, ApplicantId: 102
}, {
    InterViewId: 1, ApplicantId: 103
});
