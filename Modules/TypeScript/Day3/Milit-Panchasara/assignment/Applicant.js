"use strict";
exports.__esModule = true;
exports.applicantList = exports.Applicants = void 0;
var Vacancy_1 = require("./Vacancy");
var Applicants = /** @class */ (function () {
    function Applicants() {
    }
    Applicants.prototype.createApplicant = function (input) {
        var isExist = Vacancy_1.vacancyList.filter(function (vacancy, i, vacancyList) { return vacancy.id == input.vacancyId; });
        if (isExist.length < 1) {
            console.log();
            console.log("Invalid vacancy Id");
            return;
        }
        exports.applicantList.push(input);
    };
    Applicants.prototype.viewAllApplicants = function () {
        console.log();
        console.log("APPLICANTS:");
        exports.applicantList.forEach(function (applicant) {
            console.log("ID: " + applicant.id + ", Name: " + applicant.name + ", Email: " + applicant.email + ", Apply Date: " + applicant.appliedDate + ", Applied for (vacancy Id): " + applicant.vacancyId);
        });
        console.log();
    };
    Applicants.prototype.viewApplicant = function (id) {
        console.log();
        for (var key in exports.applicantList) {
            if (exports.applicantList[key].id == id) {
                var applicant = exports.applicantList[key];
                console.log("ID: " + applicant.id + ", Name: " + applicant.name + ", Email: " + applicant.email + ", Apply Date: " + applicant.appliedDate + ", Applied for (vacancy Id): " + applicant.vacancyId);
                console.log();
                return;
            }
        }
        console.log("Invalid applicant id: " + id);
        console.log();
    };
    return Applicants;
}());
exports.Applicants = Applicants;
exports.applicantList = [
    {
        id: 1,
        name: "Rohan",
        email: "rohan@gmail.com",
        appliedDate: '2020-05-01',
        vacancyId: 1
    },
    {
        id: 2,
        name: "Mohan",
        email: "mohan@gmail.com",
        appliedDate: '2020-05-11',
        vacancyId: 1
    }
];
