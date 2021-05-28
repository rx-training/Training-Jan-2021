import {Person} from './Person';
import {vacancyList} from './Vacancy';

export interface Applicant extends Person {
    appliedDate:string,
    vacancyId:number
}

export class Applicants {

    createApplicant(input: Applicant) {
        var isExist = vacancyList.filter((vacancy, i, vacancyList) => {return vacancy.id == input.vacancyId});
        if(isExist.length < 1) {
            console.log();
            console.log("Invalid vacancy Id");
            return;
        }
        applicantList.push(input);
    }

    viewAllApplicants() {
        console.log();
        console.log("APPLICANTS:");
        applicantList.forEach(applicant => {
            console.log(`ID: ${applicant.id}, Name: ${applicant.name}, Email: ${applicant.email}, Apply Date: ${applicant.appliedDate}, Applied for (vacancy Id): ${applicant.vacancyId}`);
        });
        console.log();
    }

    viewApplicant(id:number) {
        console.log();
        for (const key in applicantList) {
            if(applicantList[key].id == id) {
                let applicant = applicantList[key];
                console.log(`ID: ${applicant.id}, Name: ${applicant.name}, Email: ${applicant.email}, Apply Date: ${applicant.appliedDate}, Applied for (vacancy Id): ${applicant.vacancyId}`);
                console.log();
                return;
            }
        }
        console.log("Invalid applicant id: "+id);
        console.log();
    }
}

export var applicantList:Applicant[] = [
    {
        id:1,
        name:"Rohan",
        email:"rohan@gmail.com",
        appliedDate: '2020-05-01',
        vacancyId: 1
    },
    {
        id:2,
        name:"Mohan",
        email:"mohan@gmail.com",
        appliedDate: '2020-05-11',
        vacancyId: 1
    }
];