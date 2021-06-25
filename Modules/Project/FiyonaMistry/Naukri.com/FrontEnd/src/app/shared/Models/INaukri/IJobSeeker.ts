export interface IJobSeeker{
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
    jobSeekerAreaPinCode : number;
    jobSeekerProjects? : string;
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
}