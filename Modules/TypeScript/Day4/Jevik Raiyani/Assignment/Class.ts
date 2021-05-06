import {EmpData} from "./index"


class EmpFunction{
    JoingAfterYear(year:number){
        var JoinAferYear = EmpData.filter(x=>x.DOJ.getFullYear() >year);
        console.log(JoinAferYear)
    }
    
    GetAll(){
        console.log(EmpData);
    }
    GetById(id:number){
        var GetEmpbyId = EmpData.filter(x=>x.Id==id)
        console.log(GetEmpbyId);
    }
    
    GetEmpByCityYear(year:number,city:string){
        var JoinAferYear = EmpData.filter(x=>x.DOJ.getFullYear() >year && x.City==city);
        console.log(JoinAferYear);
    }
}

let data = new EmpFunction();
data.GetAll();
data.GetById(5);
data.JoingAfterYear(2020);
data.GetEmpByCityYear(2020,"Mumbai");