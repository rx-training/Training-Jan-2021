import { IJob } from '../INaukri/IJob';

export class Job implements IJob{
    jobId? : number;
    jobName : string;
    jobExperienceNeeded : string;
    jobKeySkills : string;
    jobSalary : string;
    jobLocation : string;
    jobDescription : string;
    jobRole : string;
    jobEmploymentType : string;
    isOpen : number;
    companyId : number;

    constructor(id : number, name : string, experience : string, skills : string, salary : string, location : string, desc : string, role : string, employment : string, open : number, company : number){
        this.jobId = id;
        this.jobName = name;
        this.jobExperienceNeeded = experience;
        this.jobKeySkills = skills;
        this.jobSalary = salary;
        this.jobLocation = location;
        this.jobDescription = desc;
        this.jobRole = role;
        this.jobEmploymentType = employment;
        this.isOpen = open;
        this.companyId = company
    }
}