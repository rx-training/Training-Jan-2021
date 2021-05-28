import { IApplicantions } from './Applications';
import { IInterview } from './Interview';

interface IScheduleInterview extends IInterview,IApplicantions
{
    ScheduleTime: number;
    RoundName1 : string;
    RoundName2 : string;
    RoundName3 : string;
}
export interface IScheduleInterview1
{
    ScheduleTime: number;
    RoundName1 : string;
    RoundName2 : string;
    RoundName3 : string;
}
class ScheduleInterview implements IScheduleInterview
{
    InterviewID : number;
    VacancyID : number;
    VacancyName : string;
    VacancyNumber : number;
    VacancyQualification : string;
    Qualification :  string;
    Post : string;
    ScheduleTime: number;
    Rounds : number;
    RoundName1 : string;
    RoundName2 : string;
    RoundName3 : string;
    ApplicantID : number;
    ApplicantName : string;
    ApplicantAddress : string
    ApplicantPhoneNumber : number;
    ApplicantQualification :  string;
    ApplicantPost : string;
    constructor(IID :number,VID : number,VName: string,VNumber : number,Vqualification : string,Qualification : string ,Post :  string,Round1 : string,Round2 : string,Round3 : string,ApplicantID:number,ApplicantName:string,ApplicantQulaification:string,ApplicantPost : string,ApplicantAddress:string,ApplicantPhoneNumber : number)
    {
        this.InterviewID = IID;
        this.VacancyID = VID;
        this.VacancyName = VName;
        this.VacancyNumber = VNumber;
        this.VacancyQualification = this.VacancyQualification;
        this.Qualification = Qualification;
        this.Post = Post;
        this.RoundName1= Round1;
        this.RoundName2 = Round2;
        this.RoundName3 = Round3;
        this.ApplicantID = ApplicantID;
        this.ApplicantName = ApplicantName;
        this.ApplicantAddress = ApplicantAddress;
        this.ApplicantPhoneNumber = ApplicantPhoneNumber;
        this.ApplicantQualification = ApplicantQulaification;
        this.ApplicantPost = ApplicantPost;
    }
}
var SInterview = [new ScheduleInterview(1,1,"Software Developer",1,"MCA","MCA","Software Dwveloper","Aptitude","Technical","Personal Interview",1,"Riya","Xyz Appartment,near Sola road,Ahmedabad","MCA","Software Developer",9999999999)];
export default function DispalyData()
{   
        console.log(SInterview);
}
DispalyData();