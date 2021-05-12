"use strict";
exports.__esModule = true;
var ScheduleInterview = /** @class */ (function () {
    function ScheduleInterview(IID, VID, VName, VNumber, Vqualification, Qualification, Post, Round1, Round2, Round3, ApplicantID, ApplicantName, ApplicantQulaification, ApplicantPost, ApplicantAddress, ApplicantPhoneNumber) {
        this.InterviewID = IID;
        this.VacancyID = VID;
        this.VacancyName = VName;
        this.VacancyNumber = VNumber;
        this.VacancyQualification = this.VacancyQualification;
        this.Qualification = Qualification;
        this.Post = Post;
        this.RoundName1 = Round1;
        this.RoundName2 = Round2;
        this.RoundName3 = Round3;
        this.ApplicantID = ApplicantID;
        this.ApplicantName = ApplicantName;
        this.ApplicantAddress = ApplicantAddress;
        this.ApplicantPhoneNumber = ApplicantPhoneNumber;
        this.ApplicantQualification = ApplicantQulaification;
        this.ApplicantPost = ApplicantPost;
    }
    return ScheduleInterview;
}());
var SInterview = [new ScheduleInterview(1, 1, "Software Developer", 1, "MCA", "MCA", "Software Dwveloper", "Aptitude", "Technical", "Personal Interview", 1, "Riya", "Xyz Appartment,near Sola road,Ahmedabad", "MCA", "Software Developer", 9999999999)];
function DispalyData() {
    console.log(SInterview);
}
exports["default"] = DispalyData;
DispalyData();
