// This project is aimed at developing a web-based and central Recruitment Process System for the HR Group for a company. Some features of this system will be creating vacancies, storing Applicants data, Interview process initiation, Scheduling Interviews, Storing Interview results for the applicant and finally Hiring of the applicant. Reports may be required to be generated for the use of HR group.

import {Report} from "./Report";
import {Applicant} from "./StoreData";
import {ScheduleInterview} from "./ScheduleInterview";
import {InterviewResult} from "./StoreInterviewResult";


// Storing Applicants data
let data : Applicant[] = [
    new Applicant(1, "Fiyona", "Mistry", "fiyona@gmai.com", 7777901827, "MCA"),
    new Applicant(2, "Divyang", "Mistry", "divyang@gmail.com", 7777901836, "IT Engineer"),
    new Applicant(3, "Nita", "Mistry", "nita@gmail.com", 9924721276, "Designer")
];

data[0].display(data);


// Scheduling Interview
let schedule = new ScheduleInterview(new Date(2021, 1, 32).toDateString(), new Date().getHours(), "Ahmedabad");
schedule.display(schedule);


// Interview Result
let result : InterviewResult[] = [
    new InterviewResult(1, 25, 24, 20, 29, 20),
    new InterviewResult(2, 21, 29, 25, 25, 20),
    new InterviewResult(3, 26, 14, 12, 17, 25)
];

result[0].display(result);


