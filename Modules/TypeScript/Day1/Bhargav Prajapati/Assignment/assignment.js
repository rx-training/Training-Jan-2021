var EmployeeDetails = [
    { id: 1, FirstName: "Jaydeep", LastName: "Rana", Address: "27 ssadsds,Ahmedabad,Gujarat", Salary: 50000 },
    { id: 2, FirstName: "Ayaush", LastName: "Panchal", Address: "28 sdkiw,Surat,Gujarat", Salary: 60000 },
    { id: 3, FirstName: "Jay", LastName: "Patel", Address: "29 sdsds,Mumbai, Maharastra", Salary: 45000 },
    { id: 4, FirstName: "Karan", LastName: "Chauhan", Address: "29 sdsds,Mumbai, Maharastra", Salary: 45000 },
    { id: 5, FirstName: "Jimit", LastName: "Modi", Address: "29 sdsds,Pune, Maharastra", Salary: 55000 }
];
//Insert The Employee
console.log("=============================");
console.log("Insert Employee");
var insert = { id: 6, FirstName: "Akash", LastName: "Thakkar", Address: "27 cvcvcvcx,Ahmedabad,Gujarat", Salary: 50000 };
EmployeeDetails.push(insert);
console.log(EmployeeDetails);
//Search Employee
console.log("==========================================");
console.log("Search By Employee Id");
var index = 3;
// for (var k=0;k<EmployeeDetails.length;k++)
//  {
//      if(EmployeeDetails[k].id==index)
//      {
//        console.log("Employee Id :- "+EmployeeDetails[k].id);
//        console.log("FirstName :- "+EmployeeDetails[k].FirstName);
//        console.log("LastName :- "+EmployeeDetails[k].LastName);
//        console.log("Salary :- "+EmployeeDetails[k].Salary);
//        console.log("Address :-"+EmployeeDetails[k].Address);
//     }
// }
var findemployee = EmployeeDetails.filter(function (EmployeeDetails) { return EmployeeDetails.id == index; })[0];
console.log("Employee Id :- " + findemployee.id);
console.log("FirstName :- " + findemployee.FirstName);
console.log("LastName :- " + findemployee.LastName);
console.log("Salary :- " + findemployee.Salary);
console.log("Address :-" + findemployee.Address);
//Delete the Employyeee
console.log("================================");
console.log("Delete Employee");
console.log(EmployeeDetails.pop());
//create one more employee
console.log("========================================");
console.log("Mearge Two Array");
var emp = [
    { id: 6, FirstName: "Jenil", LastName: "Virani", Address: "30 dmdkdddfd,Ahmedabad,Gujarat", Salary: 70000 },
    { id: 7, FirstName: "Kasim", LastName: "vora", Address: "28 dfdsfsd,Surat,Gujarat", Salary: 80000 }
];
EmployeeDetails = EmployeeDetails.concat(emp);
console.log(EmployeeDetails);
//When display list combine firstname and lastname as fullname, From the address field flatnumber,city,state and should be splited.PF should be computed and total salary should be display.
console.log("==================================================");
console.log("Employee Data");
var pf = 0.30;
var address;
console.log("employeeId\t\tFullName\t\tSalary\t\tFlat\t\t\tCity\t\t\tState");
for (var _i = 0, EmployeeDetails_1 = EmployeeDetails; _i < EmployeeDetails_1.length; _i++) {
    var emps = EmployeeDetails_1[_i];
    address = emps.Address.split(',');
    console.log(emps.id + "\t\t" + emps.FirstName + ' ' + emps.LastName + "\t\t\t" + (emps.Salary * pf + emps.Salary) + "\t\t" + address[0] + "\t\t" + address[1] + "\t\t" + address[2]);
}
