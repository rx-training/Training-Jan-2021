var employees = [{ "ID": 1, "FirstName": "Bhumi", "LastName": "Patel", "Address": "101-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 10000 },
    { "ID": 2, "FirstName": "Beena", "LastName": "Patel", "Address": "101-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 20000 },
    { "ID": 3, "FirstName": "Reena", "LastName": "Shah", "Address": "102-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 30000 },
    { "ID": 4, "FirstName": "John", "LastName": "Shah", "Address": "103-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 40000 },
    { "ID": 5, "FirstName": "Riya", "LastName": "Patel", "Address": "104-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 50000 }
];
//Insert Data
var Emp1 = { "ID": 6, "FirstName": "Meena", "LastName": "Patel", "Address": "105-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 50000 };
employees.push(Emp1);
console.log(employees);
//Delete Data
employees.pop();
console.log(employees);
//Search Data
var i = employees.filter(function (employees, i, arr) { return employees.ID == 2; });
console.log(i);
//Add new Array
var emp = [{ "ID": 101, "FirstName": "Joy", "LastName": "Patel", "Address": "107-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 50000 },
    { "ID": 102, "FirstName": "John", "LastName": "Patel", "Address": "108-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 90000 },
    { "ID": 103, "FirstName": "Roy", "LastName": "Shah", "Address": "109-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 60000 },
    { "ID": 104, "FirstName": "Meena", "LastName": "Shah", "Address": "110-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 80000 },
    { "ID": 105, "FirstName": "Chris", "LastName": "Patel", "Address": "111-Xyz Appartment,Ahemdabad,Gujarat", "Salary": 70000 }
];
//Join Array
var joindArrays = employees.concat(emp);
console.log(joindArrays);
//display list 
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    var pf = 0;
    console.log(employee.FirstName + " " + employee.LastName);
    console.log(employee.Address.split(','));
    pf = employee.Salary * 5 / 100;
    employee.Salary = employee.Salary + pf;
    console.log("Total Salary is:" + employee.Salary);
    console.log("PF is:" + pf);
}
