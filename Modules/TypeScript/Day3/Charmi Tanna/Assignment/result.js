"use strict";
exports.__esModule = true;
var Result = /** @class */ (function () {
    function Result(ApplicantID, ApplicantName, ApplicantPost, ApplicationQualification, InterviewID, VacancyID, Qualification, Post, ScheduleTime, RoundName1, RoundName2, RoundName3, RoundName1Result, RoundName2Result, RoundName3Result, FinalResult) {
        this.ApplicantID = ApplicantID;
        this.ApplicantName = ApplicantName;
        this.ApplicantPost = ApplicantPost;
        this.ApplicantQualification = ApplicationQualification;
        this.InterviewID = InterviewID;
        this.VacancyID = VacancyID;
        this.Qualification = Qualification;
        this.Post = Post;
        this.ScheduleTime = ScheduleTime;
        this.RoundName1 = RoundName1;
        this.RoundName2 = RoundName2;
        this.RoundName3 = RoundName3;
        this.RoundName1Result = RoundName1Result;
        this.RoundName2Result = RoundName2Result;
        this.RoundName3Result = RoundName3Result;
        this.FinalResult = FinalResult;
    }
    return Result;
}());
var results = [new Result(1, "Riya", "Software Developer", "MCA", 1, 1, "MCA", "Software Developer", 12, "Aptitude", "Technical", "Personal Interview", "Pass", "Pass", "Pass", "Pass")];
function DispalyData() {
    console.log(results);
}
exports["default"] = DispalyData;
DispalyData();
