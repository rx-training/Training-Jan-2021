"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applicant_1 = require("./applicant");
var interview_1 = require("./interview");
var vacancy_1 = require("./vacancy");
console.log("-----------------------------------Applicants-----------------------------------");
var applicant1 = new applicant_1.Applicant(1, "jakk", "ksajk anslx ajs", "jkabxk", 23, "jkaskx", 2);
var applicant2 = new applicant_1.Applicant(2, "jakk", "ksajk anslx ajs", "jkabxk", 23, "jkaskx", 3);
var applicantArr = [];
// add applicant
applicantArr.push(applicant1);
applicantArr.push(applicant2);
console.log(applicantArr);
console.log("---------------------------------------Add Vacancy------------------------------------");
var vacancy1 = new vacancy_1.Vacancy(1, "Senior Software engineer", "jkask akjdas jkdcks kjbck kbakc", 5, 3);
var vacancy2 = new vacancy_1.Vacancy(2, "Software engineer", "jkask akjdas jkdcks kjbck kbakc", 3, 10);
var vacancyArr = [];
// add vacancy
vacancyArr.push(vacancy1);
vacancyArr.push(vacancy2);
var vacancy3 = new vacancy_1.Vacancy(3, "Software engineer", "jkask akjdas jkdcks kjbck kbakc", 3, 5);
// add vacancy
vacancy3.add(vacancyArr);
console.log("----------------------------------------Vacancies------------------------------------");
// vacancies present
console.log(vacancyArr);
console.log("----------------------------------------Interview Process Initiation-------------------------");
var interviewProcess = new interview_1.Interview();
// schedule interview
var scheduleMsg = interviewProcess.scheduleInterview(applicant1);
console.log(scheduleMsg);
// interview exam result
interviewProcess.storingInterviewResult(applicant1);
console.log("------------------------------------------------Hired Applicants Report--------------------------------");
// hired applicants report
var hired = interviewProcess.generateReport(applicantArr);
console.log(hired);
//# sourceMappingURL=RecruitmentSystem.js.map