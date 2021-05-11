import {Report} from "./Report";

export class InterviewResult{

    ID : number;
    Aptitude : number;
    Logic : number;
    Communication : number;
    GK : number;
    PI : number;

    constructor(id : number, aptitude : number, logic : number, comm : number, gk : number, pi : number){
        this.ID = id;
        this.Aptitude = aptitude;
        this.Logic = logic;
        this.Communication = comm;
        this.GK = gk;
        this.PI = pi;
    }

    display(data : any) : any{

        var Result : number = 0;
        var hired = [];
        var report = new Report;

        console.log("Interview Result : ");
        for(var result in data){
            console.log(data[result]);
            
            Result = data[result].Aptitude + data[result].Logic + data[result].Communication + data[result].GK + data[result].PI;
            console.log(`Result : ${Result}`);
            
            if(Result > 110){
                console.log(`You are hired by the company with the Interview score of ${Result}.`);
                hired.push(data[result]);
            }
            else{
                console.log("Sorry! You are not hired by the commpany. Better luck next time.");
            }
        }

        console.log("");
        
        report.hiredApplicant(hired);
    }
}
