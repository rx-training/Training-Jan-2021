var employeeData = [{ ID: 1, FirstName: "John", LastName: "Doe", Address: "405, London, UK", Salary: 20000 },
    { ID: 2, FirstName: "Perry", LastName: "Lodge", Address: "209, Columbia, USA", Salary: 23000 },
    { ID: 3, FirstName: "Luis", LastName: "Cooper", Address: "308, Paris, France", Salary: 19000 },
    { ID: 4, FirstName: "Jessi", LastName: "Johns", Address: "900, Chicago, USA", Salary: 11000 },
    { ID: 5, FirstName: "Katty", LastName: "Parry", Address: "088, Toronto, Canada", Salary: 20000 }];
//Searching an employee
console.log("Search employee by Employee ID");
console.log("Record of ID 4:");
var employee = employeeData.filter(function (e) { return e.ID == 4; });
console.log(employee);
//Inserting new employee
console.log("Inserting new employee");
var len = employeeData.length;
employeeData.push({ ID: 6, FirstName: "Victoria", LastName: "Lime", Address: "203, Washington, DC", Salary: 45000 });
if (employeeData.length > len) {
    console.log("Data Inserted Successfully");
    for (var _i = 0, employeeData_1 = employeeData; _i < employeeData_1.length; _i++) {
        var item = employeeData_1[_i];
        console.log(item);
    }
}
//Deleting an Employee
console.log("Deleting the employee with ID 5");
var deletedRecord = employeeData.splice(4, 1);
console.log(deletedRecord);
for (var _a = 0, employeeData_2 = employeeData; _a < employeeData_2.length; _a++) {
    var item = employeeData_2[_a];
    console.log(item);
}
var emp = [{ ID: 7, FirstName: "Jimin", LastName: "Park", Address: "43, Seoul, South Korea", Salary: 14000 },
    { ID: 8, FirstName: "Jungkook", LastName: "Jeon", Address: "29, Busan, South Korea", Salary: 13000 }];
console.log("Inserting new employees");
employeeData = employeeData.concat(emp);
for (var _b = 0, employeeData_3 = employeeData; _b < employeeData_3.length; _b++) {
    var item = employeeData_3[_b];
    console.log(item);
}
console.log("Employee Record");
for (var _c = 0, employeeData_4 = employeeData; _c < employeeData_4.length; _c++) {
    var item = employeeData_4[_c];
    var add = item.Address;
    //console.log(add);
    var address = add.split(',');
    var PF = Number(item.Salary) * 0.12;
    console.log("ID: " + item.ID + " \t EmployeeName: " + item.FirstName + " " + item.LastName);
    console.log("\t\tAddress: FlatNumber: " + address[0] + " City: " + address[1] + " State: " + address[2]);
    console.log("\t\tSalary: Basic Salary " + item.Salary + " PF:" + PF);
    console.log(" ");
}
// for (var i=1;i<empRecord.length;i++){
//     for(var j=0;j<5;j++){
//         if(j==3){
//             let add=empRecord[i][j].toString();
//             var address=add.split(',');
//         }
//         if(j==4){
//             var PF = Number(empRecord[i][j]) * 0.12;
//         }
//     }
//     console.log(`ID: ${empRecord[i][0]} \t EmployeeName: ${empRecord[i][1]} ${empRecord[i][2]}`);
//     console.log(`\t\tAddress: FlatNumber: ${address[0]} City: ${address[1]} State: ${address[2]}`);
//     console.log(`\t\tSalary: Basic Salary ${empRecord[i][4]} PF:${PF}`);
// }
