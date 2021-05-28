import { ApplicantList, Applicants } from "./Applicant";
import { Interview,Interviews,ListofInterviews } from "./Interview";
import { Vacancies } from "./Vacancy";






//vacancy CRUD Funcionality calling

//view all vacancy
let vac = new Vacancies();
vac.viewallVacancy();




//applicant CRUD Funcitonality Calling
 let App = new Applicants();
 //list of all appllicant

 App.DisplayAllApplicant();

 //lets schedule interviews
var inter =  new Interviews();

//give id and date to schedule their interview
inter.ScheduleTheInterview("2021/05/15",101);
inter.ScheduleTheInterview("2021/06/1",102);
inter.ScheduleTheInterview("2021/05/25",103);


 for(let list of ListofInterviews){
     console.log(`List of all interviews is below`);
     for(let app of ApplicantList){
        if(list.ApplicantId == app.Id){
            console.log(`The Interview details of applicant ${app.name} is:"`);
            console.log(`Time of interview ${list.SCheduleDate}`);
        }
     }
 }

 //after interview dates you can assign the result to applicant
 inter.ResultGenerator(101);
 inter.ResultGenerator(102);
 inter.ResultGenerator(103);

 //list of applicant hired

 inter.InterviewReport();