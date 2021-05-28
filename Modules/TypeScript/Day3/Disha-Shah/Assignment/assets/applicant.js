"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicant = void 0;
var Applicant = /** @class */ (function () {
    function Applicant(id, name, addresss, qualification, age, applyFor, experience) {
        this.id = id;
        this.name = name;
        this.address = addresss;
        this.qualification = qualification;
        this.age = age;
        this.applyFor = applyFor;
        this.experience = experience;
        this.appliedDate = new Date();
    }
    Applicant.prototype.getApplicant = function () {
        console.log("Id: " + this.id + ", Name: " + this.name + ", Address: " + this.address + ", Qualification: " + this.qualification + ", Age: " + this.age + ", ApplyFor: " + this.applyFor + ", Experience: " + this.experience);
    };
    Applicant.prototype.add = function (applicantArr) {
        var applicantItem = new Applicant(this.id, this.name, this.address, this.qualification, this.age, this.applyFor, this.experience);
        applicantArr.push(applicantItem);
    };
    Applicant.prototype.setInterviewDate = function (interviewDate) {
        this.interviewDate = interviewDate;
    };
    Applicant.prototype.setInterviewResult = function (interviewResult) {
        this.interviewResult = interviewResult;
    };
    return Applicant;
}());
exports.Applicant = Applicant;
//# sourceMappingURL=applicant.js.map