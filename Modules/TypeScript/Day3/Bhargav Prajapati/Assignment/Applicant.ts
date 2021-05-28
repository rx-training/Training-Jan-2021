namespace Applicant
{
    export interface IApplicant
    {
        FirstName:string;
        LastName:string;
        Qualification:string;
        JobPost:string;
        Experience:number;
        ExpectedSalary:number;
        Eamil:string;
        PhoneNumber:string;
        Address:string;
        Hobby:string;

    }

    export var Applicantdata:IApplicant[]=
    [
        {FirstName:"Jenil",LastName:"Virani",Qualification:"B.Tec",Experience:5,ExpectedSalary:350000,JobPost:".net",Eamil:"jeni123@gmail.com",PhoneNumber:"91568878877",Address:"Ahmedabad",Hobby:"Pyaing Cricket"},
        {FirstName:"Kasim",LastName:"Vora",Qualification:"BCA",Experience:7,ExpectedSalary:550000,JobPost:".net",Eamil:"Kasim123@gmail.com",PhoneNumber:"91568878877",Address:"Surat",Hobby:"Pyaing Chess"},
        {FirstName:"Parth",LastName:"Modi",Qualification:"Computer Science",Experience:2,ExpectedSalary:250000,JobPost:"Java",Eamil:"Parth123@gmail.com",PhoneNumber:"91568878877",Address:"Baroda",Hobby:"Watching Movies"},
        {FirstName:"Karan",LastName:"Chauhan",Qualification:"MCA",Experience:2,ExpectedSalary:150000,JobPost:"java",Eamil:"Karan123@gmail.com",PhoneNumber:"91568878877",Address:"Baroda",Hobby:"Reading Bookes"},
        {FirstName:"Jimit",LastName:"Modi",Qualification:"B.Tec",Experience:2,ExpectedSalary:350000,JobPost:"Node",Eamil:"Jimit123@gmail.com",PhoneNumber:"98787878448",Address:"Mumbai",Hobby:"Travelling"},
        {FirstName:"Bhavik",LastName:"Prajapati",Qualification:"MCA",Experience:5,ExpectedSalary:350000,JobPost:"HR",Eamil:"Bhavik123@gmail.com",PhoneNumber:"91568878877",Address:"Mumbai",Hobby:"Watching Cricket"}
    ]
}