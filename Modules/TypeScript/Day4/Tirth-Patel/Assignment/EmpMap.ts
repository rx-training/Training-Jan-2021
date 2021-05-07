import {Employees} from "./Employee"
var EmpMap = new Map();

for(var emp of Employees){
    EmpMap.set(emp.ID,emp);
}

export {EmpMap};