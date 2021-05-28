"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmpMap_1 = require("./EmpMap");
const Employee_1 = require("./Employee");
//Search the Employee with ID
function SerachByID(id) {
    for (let key of EmpMap_1.EmpMap.keys()) {
        if (key == id) {
            console.log(EmpMap_1.EmpMap.get(key));
        }
    }
}
SerachByID(1);
//Search the employees who has joined after year 2020
console.log(`---------------------------------------------`);
console.log(`---Employee joined after Year 2020`);
function EmpJoiningDate(Year) {
    for (var emp of Employee_1.Employees) {
        if (emp.DOJ.getFullYear() > Year) {
            console.log(emp);
        }
    }
}
EmpJoiningDate(2020);
//Search the employee who has joined after year 2020 and stays in Mumbai city
console.log(`---------------------------------------------`);
console.log(`---Employee joined after Year 2020 And from Mumbai are ->`);
function EmpFromMumbai(Year, city) {
    for (var emp of Employee_1.Employees) {
        if (emp.DOJ.getFullYear() > Year && emp.City.toLowerCase() == city.toLowerCase()) {
            console.log(emp);
        }
    }
}
EmpFromMumbai(2020, "mumbai");
