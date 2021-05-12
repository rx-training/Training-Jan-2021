import {Person} from "./Person";

export interface Applicant extends Person{
     Id:number;
     Email:string;


}
export class Applicants {
    CreateApplicant(param:Applicant):void{
        ApplicantList.push(param);

    }
    DisplayAllApplicant():void{
        ApplicantList.forEach(element => {
            console.log(`Id-${element.Id} of  ${element.name} applicant Has applied `);
        });
        
    }

    
}
export var ApplicantList :Applicant[]=[];
ApplicantList.push(
   { Id:101,name:"Tirth",age:23,Email:"xyz@x.com"
},
   { Id:102,name:"Jimmy",age:33,Email:"jimmy@gmail.com"
},
   { Id:103,name:"Akshar",age:21,Email:"Akshar@gmail.com"
},
)
