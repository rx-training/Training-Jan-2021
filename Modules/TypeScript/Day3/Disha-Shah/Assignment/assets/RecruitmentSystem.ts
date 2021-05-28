import { Applicant } from "./applicant";
import { Interview } from "./interview";
import { Vacancy } from "./vacancy";

console.log("-----------------------------------Applicants-----------------------------------");
var applicant1: Applicant = new Applicant(1, "jakk", "ksajk anslx ajs", "jkabxk", 23, "jkaskx", 2);
var applicant2: Applicant = new Applicant(2, "jakk", "ksajk anslx ajs", "jkabxk", 23, "jkaskx", 3);
var applicantArr: Applicant[] = [];
// add applicant
applicantArr.push(applicant1);
applicantArr.push(applicant2);
console.log(applicantArr);

console.log("---------------------------------------Add Vacancy------------------------------------");
var vacancy1: Vacancy = new Vacancy(1, "Senior Software engineer", "jkask akjdas jkdcks kjbck kbakc", 5, 3);
var vacancy2: Vacancy = new Vacancy(2, "Software engineer", "jkask akjdas jkdcks kjbck kbakc", 3, 10);
var vacancyArr: Vacancy[] = [];
// add vacancy
vacancyArr.push(vacancy1);
vacancyArr.push(vacancy2);

var vacancy3: Vacancy = new Vacancy(3, "Software engineer", "jkask akjdas jkdcks kjbck kbakc", 3, 5);
// add vacancy
vacancy3.add(vacancyArr);

console.log("----------------------------------------Vacancies------------------------------------");
// vacancies present
console.log(vacancyArr);

console.log("----------------------------------------Interview Process Initiation-------------------------");
var interviewProcess: Interview = new Interview();

// schedule interview
var scheduleMsg = interviewProcess.scheduleInterview(applicant1);
console.log(scheduleMsg);

// interview exam result
interviewProcess.storingInterviewResult(applicant1);

console.log("------------------------------------------------Hired Applicants Report--------------------------------");
// hired applicants report
var hired: Applicant[] = interviewProcess.generateReport(applicantArr);
console.log(hired);