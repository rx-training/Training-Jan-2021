
export interface  vacancy{
    NuofVacancy ?:number;
    name: string ;
     VacId:number;

}

 export class Vacancies{
    CreateVacancy(param:vacancy){
        VacList.push(param);

    }
    viewallVacancy(){
        VacList.forEach(element => {
            console.log(`Id-${element.VacId} of  ${element.name} department has ${element.NuofVacancy} Vacacies`)
        });
    }
   
}

//creating varible of type interface to push into a list



var VacList :vacancy[] =
[
    {
        NuofVacancy :20,
        name:"Devloper-.net",
        VacId:1,

    },
    {
        NuofVacancy :20,
        name:"Devloper-Node",
        VacId:2,

    },
    {
        NuofVacancy :20,
        name:"Devloper-Shopify",
        VacId:3,

    },
]
