interface Interview{
    InterViewId:number;
    ApplicantId:number;
    SCheduleDate?:Date;
    IsHired?:boolean;
}
class Interviews{
    createInterview(param:Interview){
        ListofInterviews.push(param)
    }
    ScheduleTheInterview(date:string , id:number){
        for(let applicant of ListofInterviews){
            if(applicant.ApplicantId == id){
                //schedule their interview by giving date field
                applicant.SCheduleDate = new Date("2021/05/15") //hard coded date
            }
        }
    }
    ResultGenerator(id:number)
    {
        //business logic to hire someone 
        //for now hiring all as of now
            for(let applicant of ListofInterviews){
                applicant.IsHired = true;
            }
    }
    InterviewReport(){
        //genereating report for the applicant whose date of interview has been passed
        for(let applicant of ListofInterviews){
            if(applicant.IsHired){
                //logic can be implemented accorfingly here
                //hard coding 
                console.log(`${applicant.ApplicantId} has been hired!`)
            }
            else{
                console.log(`${applicant.ApplicantId} better Luck next Time`)
            }
        }
    }
}
var ListofInterviews :Interview[]= [];
ListofInterviews.push({
    InterViewId:1,ApplicantId:101
},{
    InterViewId:2,ApplicantId:102
},{
    InterViewId:1,ApplicantId:103
})

export {Interview,Interviews,ListofInterviews}