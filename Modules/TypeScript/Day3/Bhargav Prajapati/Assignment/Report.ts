/// <reference path="Applicant.ts"/>
/// <reference path="IntervierProcess.ts"/>
/// <reference path="ResultofInterview.ts"/>
/// <reference path="Scheduling.ts"/>
/// <reference path="vacancies.ts"/>



class Report
{
    showReport(Name:string):void
    {
        var resultcal=new ResultofInterview.CalculateResult();
        resultcal.Result();
        var flag:boolean=true;
        var flag1:boolean=true;
        for (const iterator of  Applicant.Applicantdata)
        {
            if(iterator.FirstName==Name)
            {
                flag1=false;
           
                  for(var chkresult of ResultofInterview.ResultofInterviewData)
                 {
 
                     if(chkresult.StatusOfResult=="Hired" && chkresult.CandidateFirstName==Name )
                     {
                         console.log("========================Report Of Hired Employeee====================")

                        console.log(`FirstName :-   ${iterator.FirstName}`);
                        console.log(`LasttName :-   ${iterator.LastName}`);
                        console.log(`EmailAddress :- ${iterator.Eamil}`);
                        console.log(`Phone Number :-  ${iterator.PhoneNumber}`);
                        console.log(`AppliedForPosition :-  ${iterator.JobPost}`);
                        console.log(`Address :- ${iterator.Address}`);
                        console.log(`Exprience :-  ${iterator.Experience} Year`);
                        console.log(`Qulification :- ${iterator.Qualification}`);
                        console.log(`Expected Salary :-  ${iterator.ExpectedSalary}`);
                        console.log(`Scored Mark :-  ${chkresult.ScoredMark}`); 
                        console.log(`Qualified Round :- ${chkresult.QualifiedRound}`); 
                        console.log(`Hobby :- ${iterator.Hobby}`);           
                        console.log("Congratulation You Are Selected :)"); 
                        flag=false;               

                    }
                    
                    
            
                    
                }   
                if(flag==true)
                    {
                        console.log("======================================");
                        console.log(`Sorry ${Name}  You have not Seleted `);
                    }             
                   
           
            }
            
            
        }
        if(flag1==true)
        {
            console.log("======================================");
            console.log(`Please  ${Name} Register For InterView Process`);
        }
    }
   InterviewDetails():void
    {
        console.log("============================Vecancy Related Details=====================");

        for (const iterator of Vecancies.vecencydata)
        {
            
            console.log(`Department Name :-  ${iterator.DepartmentName}`);
            console.log(`Number Of Opning :-  ${iterator.NumberOfOpening}`);
            console.log(`Post for Recrutment :- ${iterator.PostName}`);
            console.log("*********************************************");
            console.log();
            
        }
        console.log("============================Scheduling Related Details=====================");
        for (const Schedule of Scheduling.Schedulingdata) 
        {
            console.log(`Address :- ${Schedule.Address}`);
            console.log(`Data Of Interview :- ${Schedule.Date}`);
            console.log(`Time Of Interview :- ${Schedule.TimeSlot}`);
            console.log("----------------------------------------------");
            console.log();
        }

        console.log("============================Interview Process  Related Details=====================");
        for (const Process of InterviewProcess.InterviewProcessdata)
        {
            console.log(`Round Number :- ${Process.RoundNumber}`);
            console.log(`Test :- ${Process.Test}`);
            console.log(`Time Duration :- ${Process.TimeDuration}`);
            console.log(`Minimum Obtain Marks :-  ${Process.MinimumQualificationMark}`);
            console.log(`FacultyName :-  ${Process.FacultyName}`);
            console.log("++++++++++++++++++++++++++++++++++++++++++++");
            console.log();
        }

        

        

    }


}

var re=new Report();

re.InterviewDetails();

re.showReport("Jenil");


re.showReport("Jimit");


re.showReport("Vishw");