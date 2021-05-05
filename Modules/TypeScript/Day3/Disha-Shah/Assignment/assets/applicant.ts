import { IApplicantVacancy } from "./IApplicantVacancy";

export class Applicant implements IApplicantVacancy {
    id: number;
    name: string;
    address: string;
    qualification: string;
    age: number;
    applyFor: string;
    experience: number;
    appliedDate: Date;
    interviewDate: Date;
    interviewResult: number;

    constructor(id: number, name: string, addresss: string, qualification: string, age: number, applyFor: string, experience: number) {
        this.id = id;
        this.name = name;
        this.address = addresss;
        this.qualification = qualification;
        this.age = age;
        this.applyFor = applyFor;
        this.experience = experience;
        this.appliedDate = new Date();
    }

    getApplicant() {
        console.log(`Id: ${this.id}, Name: ${this.name}, Address: ${this.address}, Qualification: ${this.qualification}, Age: ${this.age}, ApplyFor: ${this.applyFor}, Experience: ${this.experience}`);
    }

    add(applicantArr: Applicant[]): void {
        var applicantItem = new Applicant(this.id, this.name, this.address, this.qualification, this.age, this.applyFor, this.experience);
        applicantArr.push(applicantItem);
    }

    setInterviewDate(interviewDate: Date) {
        this.interviewDate = interviewDate;
    }

    setInterviewResult(interviewResult: number) {
        this.interviewResult = interviewResult;
    }
}