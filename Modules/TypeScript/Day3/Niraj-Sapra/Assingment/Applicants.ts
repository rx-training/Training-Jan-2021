    var Applications :any= [
        {Applicate_Id:1,Applicate_name:'Niraj Sapra',Applicate_for_Post:"Apprenties"},
        {Applicate_Id:2,Applicate_name:'Parth Shah',Applicate_for_Post:"Devloper"},
        {Applicate_Id:3,Applicate_name:'Charmi Tanna',Applicate_for_Post:"Devloper"},
        {Applicate_Id:4,Applicate_name:'Priya Maheta',Applicate_for_Post:"Grapics Desinger"},
        {Applicate_Id:5,Applicate_name:'Disha vane',Applicate_for_Post:"Hr_Assistant"},
        {Applicate_Id:6,Applicate_name:'Popap jani',Applicate_for_Post:"Hr_Assistant"},
        {Applicate_Id:7,Applicate_name:'Raj Dabhi',Applicate_for_Post:"Apprenties"},
        {Applicate_Id:8,Applicate_name:'Nill Maheta',Applicate_for_Post:"Grapics Desinger"},
        {Applicate_Id:9,Applicate_name:'Naman Radhuvansi',Applicate_for_Post:"Devloper"},
        {Applicate_Id:10,Applicate_name:'Niru Mankan',Applicate_for_Post:"Hr_Assistant"}
        ];
    export class Application {        
        Applicationpost()
        {
            console.log(`----------------Total Post Vacanies---------------`);
            console.log();
            for(var post of Applications ){
                console.log(post);
            }
            console.log(`--------------------------------------------------`);
        }
        
    }