import {applicantList} from './Applicant';

export interface Interview {
    id: number,
    applicantId: number,
    type: string,
    time: string,
    result?: boolean
}

export class Interviews {

    createInterview(input: Interview) {
        var isExist = applicantList.filter((app, i, applicantList) => {return app.id == input.applicantId});
        if(isExist.length < 1) {
            console.log();
            console.log("Invalid applicant Id");
            return;
        }
        interviewList.push(input);
    }

    updateInterviewResult(id:number, result:boolean) {
        for (const key in interviewList) {
            if(interviewList[key].id == id) {
                interviewList[key].result = result;
                return;
            }
        }
    }

    viewAllInterviews() {
        console.log();
        console.log("APPLICANTS:");
        interviewList.forEach(interview => {
            console.log(`ID: ${interview.id}, Applicant: ${interview.applicantId}, Interview Type: ${interview.type}, Scheduled at: ${interview.time}, result: ${(interview.result === undefined)?"Pending":((interview.result)?"Passed":"Failed")}`);
        });
        console.log();
    }

    viewInterview(id:number) {
        console.log();
        for (const key in interviewList) {
            if(interviewList[key].id == id) {
                let interview = interviewList[key];
                console.log(`ID: ${interview.id}, Applicant: ${interview.applicantId}, Interview Type: ${interview.type}, Scheduled at: ${interview.time}, result: ${(interview.result === undefined)?"Pending":((interview.result)?"Passed":"Failed")}`);
                console.log();
                return;
            }
        }
        console.log("Invalid interview id: "+id);
        console.log();
    }
}

export var interviewList: Interview[] = [];