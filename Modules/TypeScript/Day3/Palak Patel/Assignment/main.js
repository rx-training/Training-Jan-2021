"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var OEmployee = new classes_1.Employee();
var OApplicant = new classes_1.ApplicantData();
var OVacancy = new classes_1.Vacancies();
OEmployee.GenerateReport();
OEmployee.HiringApplicant();
OEmployee.scheduleInterview();
var results = OEmployee.storingResult();
for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
    var item = results_1[_i];
    console.log(item);
}
OApplicant.setApplicantData({
    ApplicantID: 5,
    Name: "Mike",
    Age: 24,
    Experience: 4,
    Address: "Surat",
    VacancyID: 3
});
OApplicant.ShowApplicants();
OVacancy.PostAd();
OVacancy.setVacancyData({
    VacancyID: 3,
    DateOfInterview: new Date(12 - 9 - 2021),
    Post: "PHP Developer",
    Experience: 0,
    venue: "Ahmedabad",
    TotalSeat: 7,
    Salary: 8000,
    status: false
});
OVacancy.removeVacancy(2);
