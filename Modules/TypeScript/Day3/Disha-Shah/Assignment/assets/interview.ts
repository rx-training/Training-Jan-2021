import { Applicant } from "./applicant";

export class Interview{
    interviewDate: Date = new Date();

    scheduleInterview(applicant: Applicant): string{
        this.interviewDate.setDate(applicant.appliedDate.getDate() + 2);
        var dd = this.interviewDate.getDate();
        var mm = this.interviewDate.getMonth() + 1;
        var yy = this.interviewDate.getFullYear();
        var res = `Hello ${applicant.name}, Your interview for ${applicant.applyFor} has been scheduled on ${dd}/${mm}/${yy} at 10:30 AM`;
        applicant.setInterviewDate(this.interviewDate);
        return res;
    }

    storingInterviewResult(applicant: Applicant): void {
        const result = Math.floor(Math.random() * 70);
        applicant.setInterviewResult(result);
        if (result > 40) {
            console.log();
            console.log(`Your score is: ${result}. You have successfully cleared the exam!!`);
            this.hiring(applicant);
        }
        else {
            console.log();
            console.log(`Your score is: ${result}. Please try again next time.`);
        }
    }

    hiring(applicant: Applicant): void {
        console.log();
        console.log(`Based on your interview scores we are happy to anounce that Mr./Ms. ${applicant.name} have successfully been hired for the ${applicant.applyFor} position. Please come to the office for completing document process on the coming Monday.`)
    }

    generateReport(applicants: Applicant[]): Applicant[] {
        var newArray = applicants.filter((applicants, i, arr) => {
            return applicants.interviewResult>40;
        });
        
        return newArray;
    }
}