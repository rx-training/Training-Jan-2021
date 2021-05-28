export interface IVacancie
{
    VacancyID : number;
    VacancyName : string;
    VacancyNumber : number;
    VacancyQualification : string;
}
class Vacancies implements IVacancie
{
    VacancyID : number;
    VacancyName : string;
    VacancyNumber : number;
    VacancyQualification : string;
    constructor(Id : number , Name: string,VNumber : number,VQualification : string) 
    {
        this.VacancyID = Id;
        this.VacancyName = Name;
        this.VacancyNumber = VNumber;
        this.VacancyQualification = VQualification;
    }
}

var vacancies = [new Vacancies(1,"Software Developer",10,"MCA"),
new Vacancies(2,"Software Tester",11,"MCA"),
new Vacancies(3,"HR",20,"Bcom"),
new Vacancies(4,"Accountant",4,"Bcom"),
new Vacancies(5,"Techincal Consultant",5,"BscIT")];
export default function DispalyData()
{   
        console.log(vacancies);
}
DispalyData();
