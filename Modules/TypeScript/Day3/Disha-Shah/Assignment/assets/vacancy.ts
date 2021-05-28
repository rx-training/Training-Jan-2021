import { IApplicantVacancy } from "./IApplicantVacancy";

export class Vacancy implements IApplicantVacancy{
    id: number;
    name: string;
    jobDesc: string;
    expReq: number;
    vacancies: number

    constructor(id: number, name: string, jobDesc: string, expReq: number, vacancies: number) {
        this.id = id;
        this.name = name;
        this.jobDesc = jobDesc;
        this.expReq = expReq;
        this.vacancies = vacancies;
    }

    add(vacancyArr: Vacancy[]): void {
        var vacancyItem = new Vacancy(this.id, this.name, this.jobDesc, this.expReq, this.vacancies);
        vacancyArr.push(vacancyItem);
    }
}