import { Applicant } from "./Applicant";

interface HiredPerson extends Applicant{
    Date:string;
    salary:number;
}
class HiredPersons{
    HireAperson(param:HiredPerson){

    }
    viewallHiredPerson(){}
}

var hirePersonList :HiredPerson[] =[];
hirePersonList.push({name:"xys",age:21,Email:"wewqewq@gagaga.com",Date:"10/4/2021",salary:1000,Id:2})