"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var emp1 = new Employee_1.Employee(1, 'Namra', '9766655522', 'abc', 23000, 'Mumbai', '2019-10-12');
var emp2 = new Employee_1.Employee(2, 'Charmi', '9766655521', 'abc', 23000, 'Baroda', '2019-10-12');
var emp3 = new Employee_1.Employee(3, 'Suchi', '9766655523', 'abc', 23000, 'Pune', '2019-10-12');
var emp4 = new Employee_1.Employee(4, 'Nayan', '9766655524', 'abc', 23000, 'Mumbai', '2022-10-12');
var emp5 = new Employee_1.Employee(5, 'Saurav', '9766655552', 'abc', 23000, 'Ahmedabad', '2022-10-12');
var Employees = [];
Employees.push(emp1);
Employees.push(emp2);
Employees.push(emp3);
Employees.push(emp4);
Employees.push(emp5);
// To get by id
console.log('Employees whose id : 1');
console.log(emp2.SearchById(Employees, 1));
console.log('----------------------------------------------------------------');
// To get Employee joined after 2021
console.log('Employees Joined after 2020:');
console.log(emp2.JoinedAfter2020(Employees));
console.log('----------------------------------------------------------------');
// To get Employee Joined after 2021 and living in Mumbai
console.log('Employees joined after and living in Mumbai:');
console.log(emp2.JoinedAfter2020InCity(Employees, 'Mumbai'));
