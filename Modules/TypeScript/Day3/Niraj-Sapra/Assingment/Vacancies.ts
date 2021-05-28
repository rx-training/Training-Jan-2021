    var Posting :any= [
        {Department_Id:1,Department_name:'Apprenties',number_of_vacanies:10},
        {Department_Id:2,Department_name:'Grapics Desinger',number_of_vacanies:7},
        {Department_Id:3,Department_name:'Devloper',number_of_vacanies:12},
        {Department_Id:4,Department_name:'Hr_Assistant',number_of_vacanies:9}
        ];
    export class Vacancies {        
      //  PostVacancie(Department_name:string,number_of_vacanies:number)
        PostVacancie()
        {
            console.log(`----------------Total Post Vacanies---------------`);
            console.log();
            for(var post of Posting ){
                console.log(Posting);
                return Posting;
            }
            console.log(`--------------------------------------------------`);
        }
    }