import { IScheduleInterview1 } from './ScheduleInterview';
import { IApplicantions1 } from './Applications';
import { IInterview1 } from './Interview';
class Result implements IInterview1,IApplicantions1,IScheduleInterview1
{
    ApplicantID : number;
    ApplicantName : string;
    ApplicantQualification :  string;
    ApplicantPost : string;
    InterviewID : number;
    VacancyID : number;
    Qualification :  string;
    Post : string;
    ScheduleTime: number;
    RoundName1 : string;
    RoundName2 : string;
    RoundName3 : string;
    RoundName1Result : string;
    RoundName2Result : string;
    RoundName3Result : string;
    FinalResult : string

    constructor(ApplicantID:number,ApplicantName:string,ApplicantPost : string,ApplicationQualification:string,InterviewID : number,VacancyID : number,Qualification : string,Post : string,ScheduleTime:number,RoundName1:string,RoundName2: string,RoundName3 : string,RoundName1Result : string,RoundName2Result : string,RoundName3Result : string,FinalResult:string)
    {
        this.ApplicantID = ApplicantID;
        this.ApplicantName = ApplicantName;
        this.ApplicantPost = ApplicantPost;
        this.ApplicantQualification = ApplicationQualification;
        this.InterviewID = InterviewID;
        this.VacancyID = VacancyID;
        this.Qualification = Qualification;
        this.Post = Post;
        this.ScheduleTime = ScheduleTime;
        this.RoundName1 = RoundName1;
        this.RoundName2 = RoundName2;
        this.RoundName3 = RoundName3;
        this.RoundName1Result = RoundName1Result;
        this.RoundName2Result = RoundName2Result;
        this.RoundName3Result = RoundName3Result;
        this.FinalResult = FinalResult;
    }
}
var results = [new Result(1,"Riya","Software Developer","MCA",1,1,"MCA","Software Developer",12,"Aptitude","Technical","Personal Interview","Pass","Pass","Pass","Pass")];
export default function DispalyData()
{   
        console.log(results);
}
DispalyData();