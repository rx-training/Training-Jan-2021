"use strict";
exports.__esModule = true;
var Applicant = /** @class */ (function () {
    function Applicant(AppID, AppName, AppAddress, AppPNumber, AppQualification, AppPost) {
        this.ApplicantID = AppID;
        this.ApplicantName = AppName;
        this.ApplicantAddress = AppAddress;
        this.ApplicantPhoneNumber = AppPNumber;
        this.ApplicantQualification = AppQualification;
        this.ApplicantPost = AppPost;
    }
    return Applicant;
}());
var apply = [new Applicant(1, "Riya", "Xyz Appartment,near Sola road,Ahmedabad", 9999999999, "MCA", "Software Developer"), new Applicant(2, "Meena", "Xyz-2 Appartment,near Sola road,Ahmedabad", 9999999998, "MCA", "Software Tester"), new Applicant(3, "Reena", "Xyz-3 Appartment,near Sola road,Ahmedabad", 9999999997, "Bcom", "HR")];
console.log(apply);
