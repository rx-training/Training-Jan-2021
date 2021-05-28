import {InterviewResult} from "./StoreInterviewResult";

export class Report{

    hiredApplicant(result : any) : any{

        console.log("Repor for Hired Employees : ");
        
        for(var r of result){
            console.log(r);
        }

    }

}