import {InterviewProcess} from "./Interviewproceess";
var interview = new InterviewProcess();
interface Empdata{
        EmpId:number;
        EmpName:string;
        Emppost:string;
        EmpSalary:number;
    }
    export class Employee implements Empdata { 
        EmpId:number;
        EmpName:string;
        Emppost:string;
        EmpSalary:number;
               
        Final_Employee()
        {
            console.log(`----------------Final Employee---------------`);
            console.log();
            console.log(interview.reportEmp);
            console.log(`--------------------------------------------------`);
        }
        
    }
     