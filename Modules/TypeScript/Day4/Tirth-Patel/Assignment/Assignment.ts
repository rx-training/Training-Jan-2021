import {EmpMap} from './EmpMap';
import {Employee,Employees} from './Employee';


//Search the Employee with ID

function SerachByID(id:number){

    for (let key of EmpMap.keys()) {  
       if(key == id)  {
           console.log(EmpMap.get(key));
       }      
    }  
}
SerachByID(1);

//Search the employees who has joined after year 2020
console.log(`---------------------------------------------`);
console.log(`---Employee joined after Year 2020`);
function EmpJoiningDate(Year:number){
  
    for(var emp of Employees){
        
        if(emp.DOJ.getFullYear() > Year ){
            console.log(emp);
        }
    }
}

EmpJoiningDate(2020);

//Search the employee who has joined after year 2020 and stays in Mumbai city
console.log(`---------------------------------------------`);
console.log(`---Employee joined after Year 2020 And from Mumbai are ->`);

function EmpFromMumbai(Year:number,city:string){
  
    for(var emp of Employees){
        
        if(emp.DOJ.getFullYear() > Year && emp.City.toLowerCase() == city.toLowerCase()){
            console.log(emp);
        }
    }
}
EmpFromMumbai(2020,"mumbai");

