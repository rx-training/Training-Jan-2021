"use strict";
exports.__esModule = true;
var Applicant_1 = require("./Applicant");
var Interview_1 = require("./Interview");
var Vacancy_1 = require("./Vacancy");
//vacancy CRUD Funcionality calling
//view all vacancy
var vac = new Vacancy_1.Vacancies();
vac.viewallVacancy();
//applicant CRUD Funcitonality Calling
var App = new Applicant_1.Applicants();
//list of all appllicant
App.DisplayAllApplicant();
//lets schedule interviews
var inter = new Interview_1.Interviews();
//give id and date to schedule their interview
inter.ScheduleTheInterview("2021/05/15", 101);
inter.ScheduleTheInterview("2021/06/1", 102);
inter.ScheduleTheInterview("2021/05/25", 103);
for (var _i = 0, ListofInterviews_1 = Interview_1.ListofInterviews; _i < ListofInterviews_1.length; _i++) {
    var list = ListofInterviews_1[_i];
    console.log("List of all interviews is below");
    for (var _a = 0, ApplicantList_1 = Applicant_1.ApplicantList; _a < ApplicantList_1.length; _a++) {
        var app = ApplicantList_1[_a];
        if (list.ApplicantId == app.Id) {
            console.log("The Interview details of applicant " + app.name + " is:\"");
            console.log("Time of interview " + list.SCheduleDate);
        }
    }
}
//after interview dates you can assign the result to applicant
inter.ResultGenerator(101);
inter.ResultGenerator(102);
inter.ResultGenerator(103);
//list of applicant hired
inter.InterviewReport();
