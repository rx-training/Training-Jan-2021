"use strict";
exports.__esModule = true;
exports.Employee = exports.ApplicantData = exports.Vacancies = void 0;
var app_1 = require("./app");
var Vacancies = /** @class */ (function () {
    function Vacancies() {
    }
    Vacancies.prototype.setVacancyData = function (data) {
        app_1.vacancyList.push(data);
    };
    Vacancies.prototype.PostAd = function () {
        for (var _i = 0, VL_1 = app_1.vacancyList; _i < VL_1.length; _i++) {
            var item = VL_1[_i];
            console.log("Company is hiring for " + item.Post + " Post");
            console.log("\t Date for Interview: " + item.DateOfInterview);
            console.log("\t Venue: " + item.venue);
            console.log("\t Required Experience: " + item.Experience + " Years as " + item.Post);
            console.log("\t Available Seats: " + item.TotalSeat);
            console.log("\t Salary: " + (item.Salary - 1000) + " to " + (item.Salary + 1000) + " INR");
            if (item.Bond != null) {
                console.log("\t Bond: " + item.Bond + " Years");
            }
        }
    };
    Vacancies.prototype.removeVacancy = function (VacancyID) {
        for (var _i = 0, VL_2 = app_1.vacancyList; _i < VL_2.length; _i++) {
            var item = VL_2[_i];
            if (VacancyID == item.VacancyID) {
                var index = app_1.vacancyList.indexOf(item);
                app_1.vacancyList.splice(index, 1);
            }
        }
    };
    return Vacancies;
}());
exports.Vacancies = Vacancies;
var ApplicantData = /** @class */ (function () {
    function ApplicantData() {
    }
    ApplicantData.prototype.setApplicantData = function (data) {
        for (var _i = 0, VL_3 = app_1.vacancyList; _i < VL_3.length; _i++) {
            var item = VL_3[_i];
            if (data.VacancyID == item.VacancyID) {
                if (item.status == true && data.Result != null) {
                    app_1.ApplicantList.push(data);
                }
                else {
                    console.log("This interview is completed please enter the result of applicant");
                }
                if (item.status == false && data.Result == null) {
                    app_1.ApplicantList.push(data);
                }
                else {
                    console.log("This interview is not completed please do not enter the result of applicant");
                }
            }
            else {
                console.log("No vacancy available for VacancyID " + data.VacancyID);
            }
        }
    };
    ApplicantData.prototype.ShowApplicants = function () {
        for (var _i = 0, AL_1 = app_1.ApplicantList; _i < AL_1.length; _i++) {
            var item = AL_1[_i];
            console.log(item);
        }
    };
    return ApplicantData;
}());
exports.ApplicantData = ApplicantData;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    //constructor() { }
    Employee.prototype.setEmployeeData = function (data) {
        app_1.EmployeeList.push(data);
    };
    Employee.prototype.scheduleInterview = function () {
        for (var _i = 0, VL_4 = app_1.vacancyList; _i < VL_4.length; _i++) {
            var item = VL_4[_i];
            if (item.status == false) {
                console.log("Interview for " + item.Post + " On " + item.DateOfInterview);
            }
        }
    };
    Employee.prototype.storingResult = function () {
        var ApplicantResult = [];
        for (var _i = 0, AL_2 = app_1.ApplicantList; _i < AL_2.length; _i++) {
            var item = AL_2[_i];
            if (item.Result != null) {
                console.log({ ID: item.VacancyID, Name: item.Name, Result: item.Result });
                ApplicantResult.push({ ID: item.VacancyID, Name: item.Name, Result: item.Result });
            }
        }
        console.log(app_1.ApplicantList);
        console.log(ApplicantResult);
        return ApplicantResult;
    };
    Employee.prototype.HiringApplicant = function () {
        console.log("List of Hired Applicant");
        for (var _i = 0, AL_3 = app_1.ApplicantList; _i < AL_3.length; _i++) {
            var item = AL_3[_i];
            if (item.Result != null && item.Result > 60) {
                console.log(item.Name + "\t" + item.Result);
            }
        }
    };
    Employee.prototype.GenerateReport = function () {
        for (var _i = 0, VL_5 = app_1.vacancyList; _i < VL_5.length; _i++) {
            var item = VL_5[_i];
            if (item.status == true) {
                console.log("For Post of " + item.Post);
                for (var _a = 0, AL_4 = app_1.ApplicantList; _a < AL_4.length; _a++) {
                    var a = AL_4[_a];
                    if (a.VacancyID == item.VacancyID) {
                        if (a.Result > 60) {
                            console.log(a.ApplicantID + "  " + a.Name + "  " + a.Result + "  Selected");
                        }
                        else {
                            console.log(a.ApplicantID + "  " + a.Name + "  " + a.Result + "  Not Selected");
                        }
                    }
                }
            }
            else {
                console.log("Interview for the Post of " + item.Post + " to be held on " + item.DateOfInterview);
            }
        }
    };
    return Employee;
}());
exports.Employee = Employee;
