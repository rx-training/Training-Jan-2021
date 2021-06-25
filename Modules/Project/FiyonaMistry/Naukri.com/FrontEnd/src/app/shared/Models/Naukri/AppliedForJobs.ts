import { IAppliedForJobs } from '../INaukri/IAppliedForJobs';

export class AppliedForJobs implements IAppliedForJobs{
    companyId : number;
    jobId : number;
    jobSeekerId : number;

    constructor(companyId : number, jobId : number, jobSeekerId : number){
        this.companyId = companyId;
        this.jobId = jobId;
        this.jobSeekerId = jobSeekerId;
    }
}