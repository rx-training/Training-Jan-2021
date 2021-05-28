"use strict";
exports.__esModule = true;
var Applicant_1 = require("./Applicant");
var HiredPerson_1 = require("./HiredPerson");
var Interview_1 = require("./Interview");
var Vacancy_1 = require("./Vacancy");
// VACANCIES //
var vac = new Vacancy_1.Vacancies();
vac.viewAllVacancies();
vac.viewVacancy(1);
var newVac = {
    id: 3,
    departmentName: "NodeJS",
    designation: "Junior Developer",
    vacancyNo: 8
};
vac.createVacancy(newVac);
vac.viewAllVacancies();
// APPLICANTS //
var app = new Applicant_1.Applicants();
app.viewAllApplicants();
app.viewApplicant(1);
app.createApplicant({
    id: 3,
    name: "John",
    email: "john@g.g",
    appliedDate: '2020-06-01',
    vacancyId: 2
});
app.viewAllApplicants();
app.createApplicant({
    id: 3,
    name: "John",
    email: "john@g.g",
    appliedDate: '2020-06-01',
    vacancyId: 100
});
// INTERVIEWS //
var interviews = new Interview_1.Interviews();
interviews.createInterview({
    id: 1,
    applicantId: 1,
    type: "Technical1",
    time: '2020-07-01'
});
interviews.createInterview({
    id: 2,
    applicantId: 1,
    type: "Technical2",
    time: '2020-07-01'
});
interviews.createInterview({
    id: 3,
    applicantId: 2,
    type: "Technical1",
    time: '2020-07-02'
});
interviews.viewAllInterviews();
interviews.updateInterviewResult(1, true);
interviews.updateInterviewResult(2, false);
interviews.viewAllInterviews();
var hiredPersons = new HiredPerson_1.HiredPersons();
hiredPersons.createHiredPerson({
    id: 1,
    name: "John",
    email: "john@g.g",
    hiredDate: '2020-12-01',
    salary: 25000
});
hiredPersons.createHiredPerson({
    id: 2,
    name: "Mike",
    email: "Mike@g.g",
    hiredDate: '2020-12-01',
    salary: 20000
});
hiredPersons.viewAllHiredPersons();
hiredPersons.viewHiredPerson(2);
hiredPersons.viewHiredPerson(20);
