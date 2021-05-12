import { IVacancie } from './Assignment';
export interface IInterview extends IVacancie
{
    InterviewID : number;
    VacancyID : number;
    Qualification :  string;
    Post : string;
}
export interface IInterview1 
{
    InterviewID : number;
    VacancyID : number;
    Qualification :  string;
    Post : string;
}
 class Interview implements IInterview
{
    InterviewID : number;
    VacancyID : number;
    VacancyName : string;
    VacancyNumber : number;
    VacancyQualification : string;
    Qualification :  string;
    Post : string;
    constructor(IID :number,VID : number,VName: string,VNumber : number,Vqualification : string,Qualification : string ,Post :  string)
    {
        this.InterviewID = IID;
        this.VacancyID = VID;
        this.VacancyName = VName;
        this.VacancyNumber = VNumber;
        this.VacancyQualification = this.VacancyQualification;
        this.Qualification = Qualification;
        this.Post = Post;
    }
}

var interview = [new Interview(1,1,"Software Developer",10,"MCA","MCA","Software Developer"),new Interview(2,2,"Software Tester",11,"MCA","MCA","Software Tester")];
export default function DispalyData()
{
     console.log(interview);
}
DispalyData();