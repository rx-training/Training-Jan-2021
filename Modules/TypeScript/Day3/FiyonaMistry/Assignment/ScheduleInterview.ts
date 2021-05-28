export class ScheduleInterview{

    InterviewDate : string;
    InterviewTime : number;
    Location : string;

    constructor(date : string, time : number, location : string){
        this.InterviewDate = date;
        this.InterviewTime = time;
        this.Location = location;
    }

    display(data : any) : any{        
        console.log("Interview Scheduled at : ");
        console.log(data);
        console.log("");
    }
}