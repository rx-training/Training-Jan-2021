namespace ResultofInterview
{
   export interface IResultofInterview
    {
    CandidateFirstName:string;
    CandidateLastName:string;
    ScoredMark:number;
    QualifiedRound:number;
    StatusOfResult:string;
    }

   export var ResultofInterviewData:IResultofInterview[]=
    [
        {CandidateFirstName:"Jenil",CandidateLastName:"Virani",ScoredMark:250,QualifiedRound:4,StatusOfResult:"Pending"},
        {CandidateFirstName:"Kasim",CandidateLastName:"Vora",ScoredMark:250,QualifiedRound:4,StatusOfResult:"Pending"},
        {CandidateFirstName:"Parth",CandidateLastName:"Modi",ScoredMark:250,QualifiedRound:4,StatusOfResult:"Pending"},
        {CandidateFirstName:"Jimit",CandidateLastName:"Modi",ScoredMark:250,QualifiedRound:2,StatusOfResult:"Pending"},
        {CandidateFirstName:"Bhavik",CandidateLastName:"Prajapati",ScoredMark:250,QualifiedRound:2,StatusOfResult:"Pending"},
    ]

    export class CalculateResult
    {
        Result()
        {
        for (var data of ResultofInterviewData) {
            var temp=ResultofInterviewData.filter(ResultofInterviewData=>ResultofInterviewData.CandidateFirstName==data.CandidateFirstName)[0];
            var resultstatus=ResultofInterviewData.indexOf(temp);

            if(data.QualifiedRound==4)
            {
                ResultofInterviewData[resultstatus].StatusOfResult="Hired";
            }
            else
            {
                ResultofInterviewData[resultstatus].StatusOfResult="Not Hired";
            }
            
        }
    }
}
}

