namespace InterviewProcess
{
   export interface IInterviewProcess
    {
        RoundNumber:number;
        Test:string;
        FacultyName:string;
        MinimumQualificationMark:number;
        TimeDuration:string;
    }

   export var InterviewProcessdata:IInterviewProcess[]=
    [
        {RoundNumber:1,Test:"Apptitude",FacultyName:"XYZ",MinimumQualificationMark:35,TimeDuration:"60 Min"},
        {RoundNumber:2,Test:"GroupDicussion",FacultyName:"ABC",MinimumQualificationMark:45,TimeDuration:"30 Min"},
        {RoundNumber:3,Test:"CoddingRound",FacultyName:"PQR",MinimumQualificationMark:55,TimeDuration:"1 HR 20 Min"},
        {RoundNumber:4,Test:"HR Round",FacultyName:"AQWEE",MinimumQualificationMark:15,TimeDuration:"30 Min"}
    ]
}
