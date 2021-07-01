import { IJobSeeker } from '../INaukri/IJobSeeker';

export class JobSeeker implements IJobSeeker{
    jobSeekerId? : number;
    jobSeekerFirstName : string;
    jobSeekerMiddleName : string;
    jobSeekerLastName : string;
    jobSeekerEmail : string;
    jobSeekerPassword : string;
    jobSeekerPhoneNumber : number;
    jobSeekerType : string;
    jobSeekerResume : string;
    jobSeekerSkills : string;
    jobSeekerDob : Date;
    jobSeekerGender : string;
    jobSeekerAddress : string;
    jobSeekerProjects? : string;
    jobSeekerAreaPinCode : number;
    id : number;
    userId : {}[];
    jobSeekerEducations : {
        JobSeekerEducationId : number;
        jobSeekerField : string;
        jobSeekerCollege : string;
        jobSeekerYearOfCompletion : number;
    }[];
    jobSeekerJobHistories? : {
        JobSeekerDesignation : string;
        JobSeekerCompany : string;
        JobSeekerAnnualSalary : number;
        JobSeekerWorkingFrom : Date;
        JobSeekerWorkingTo : Date;
        JobSeekerCurrentCity : string;
        IsCurrent? : number;
    }[];

    constructor(jobSeekerId : number, fname : string, mname : string, lname : string, email : string, password : string, phonenumber : number, type : string, resume : string, skills : string, dob : Date, gender : string, jobSeekerProjects : string, address : string, areapincode : number, id : number, userId : string, jobSeekerEducations : Array<any>, jobSeekerJobHistories : Array<any>){
        this.jobSeekerId = jobSeekerId;
        this.jobSeekerFirstName = fname;
        this.jobSeekerMiddleName = mname;
        this.jobSeekerLastName = lname;
        this.jobSeekerEmail = email;
        this.jobSeekerPassword = password;
        this.jobSeekerPhoneNumber = phonenumber;
        this.jobSeekerType = type;
        this.jobSeekerResume = resume;
        this.jobSeekerSkills = skills;
        this.jobSeekerDob = dob;
        this.jobSeekerGender = gender;
        this.jobSeekerAddress = address;
        this.jobSeekerProjects = jobSeekerProjects;
        this.id = id;
        this.userId = [userId];
        this.jobSeekerAreaPinCode = areapincode;
        this.jobSeekerEducations = jobSeekerEducations;
        this.jobSeekerJobHistories = jobSeekerJobHistories;
    }
}