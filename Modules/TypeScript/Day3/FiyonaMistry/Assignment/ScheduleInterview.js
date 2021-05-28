"use strict";
exports.__esModule = true;
exports.ScheduleInterview = void 0;
var ScheduleInterview = /** @class */ (function () {
    function ScheduleInterview(date, time, location) {
        this.InterviewDate = date;
        this.InterviewTime = time;
        this.Location = location;
    }
    ScheduleInterview.prototype.display = function (data) {
        console.log("Interview Scheduled at : ");
        console.log(data);
        console.log("");
    };
    return ScheduleInterview;
}());
exports.ScheduleInterview = ScheduleInterview;
