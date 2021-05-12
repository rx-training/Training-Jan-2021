export interface IApplicantions
{
    ApplicantID : number;
    ApplicantName : string;
    ApplicantAddress : string
    ApplicantPhoneNumber : number;
    ApplicantQualification :  string;
    ApplicantPost : string;
}
export interface IApplicantions1
{
    ApplicantID : number;
    ApplicantName : string;
    ApplicantQualification :  string;
    ApplicantPost : string;
}
class Applicant implements IApplicantions
{
    ApplicantID : number;
    ApplicantName : string;
    ApplicantAddress : string
    ApplicantPhoneNumber : number;
    ApplicantQualification :  string;
    ApplicantPost : string;
    constructor(AppID :number,AppName : string,AppAddress : string,AppPNumber : number,AppQualification : string ,AppPost :  string)
    {
        this.ApplicantID = AppID;
        this.ApplicantName = AppName;
        this.ApplicantAddress = AppAddress;
        this.ApplicantPhoneNumber = AppPNumber;
        this.ApplicantQualification = AppQualification;
        this.ApplicantPost = AppPost;
    }
}
var apply = [new Applicant(1,"Riya","Xyz Appartment,near Sola road,Ahmedabad",9999999999,"MCA","Software Developer"),new Applicant(2,"Meena","Xyz-2 Appartment,near Sola road,Ahmedabad",9999999998,"MCA","Software Tester"),new Applicant(3,"Reena","Xyz-3 Appartment,near Sola road,Ahmedabad",9999999997,"Bcom","HR")];
console.log(apply);
