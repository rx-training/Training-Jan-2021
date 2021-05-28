"use strict";
exports.__esModule = true;
var Interview = /** @class */ (function () {
    function Interview(IID, VID, VName, VNumber, Vqualification, Qualification, Post) {
        this.InterviewID = IID;
        this.VacancyID = VID;
        this.VacancyName = VName;
        this.VacancyNumber = VNumber;
        this.VacancyQualification = this.VacancyQualification;
        this.Qualification = Qualification;
        this.Post = Post;
    }
    return Interview;
}());
var interview = [new Interview(1, 1, "Software Developer", 10, "MCA", "MCA", "Software Developer"), new Interview(2, 2, "Software Tester", 11, "MCA", "MCA", "Software Tester")];
function DispalyData() {
    console.log(interview);
}
exports["default"] = DispalyData;
DispalyData();
