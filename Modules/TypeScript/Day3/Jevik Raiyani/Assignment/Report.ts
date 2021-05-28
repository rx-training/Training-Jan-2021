import {vacancy}  from "./demo";
import {applicant}  from "./demo";
import {Interviewer} from "./demo";

var Shorted =[];
var FinalVacancy = vacancy;

export class Report{

    TotalVacancy(){
        for (const val of vacancy) {
            console.log(`Id: ${val.Vacancyid}, VacanyName:${val.VacancyPosition}, VacancyPosition:${val.VacancyNumber}`)
        }
    }
    TotalApplicant(){
        for (const val of applicant) {          
            
            console.log(`Id:${val.ApplicantId}, ApplicantName:${val.ApplicantName}, AppliedPositon:${val.ApplyForDesignation},Graduate%: ${val.ApplicantGraduationPercentage} `);
            
        }
        
    }
    SortedAppllicant(){
        
       var p = applicant.filter(x=>x.ApplicantGraduationPercentage>60);
       var Shorteddata = p.filter(({ApplyForDesignation:id1})=> vacancy.some(({VacancyPosition:id2})=>id2.toLowerCase()==id1.toLowerCase()));
        
       for (const val of Shorteddata) {
            Shorted.push(val);
       }

       console.log("Shortlist for Interview");
        for (const i of Shorted) {
            console.log(i)
        }
    }
    SheduleInterview(){
        for (const i of Shorted) {
            console.log(i);
            for (const p of Interviewer) {
                console.log("Your Interviewer Name is:"+p.name+" on Tomorrow");
            }
            
        }   
    }
    FinalList(){

        console.log("Congratulation you are selected");
        let  i=4;
        for (const val of Shorted) 
        {
            i--;
            console.log(val);
            if(i==0){
                break;
            }
        }

    }
}

