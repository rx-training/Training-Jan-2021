var employees = [
    { Id: 1, FirstName: "Reena", LastName: "Sharma", Address: "C-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 240000 },
    { Id: 2, FirstName: "Meena", LastName: "Tiwari", Address: "H-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 480000 },
    { Id: 3, FirstName: "Rita", LastName: "Pandya", Address: "E-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 360000 },
    { Id: 4, FirstName: "Reshma", LastName: "Shah", Address: "A-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 640000 },
    { Id: 5, FirstName: "Tina", LastName: "Agarwal", Address: "B-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 560000 }
];
var names;
// Get all employees
function GetAllEmployees() {
    document.getElementById("content").innerHTML = "";
    for (var emp in employees) {
        var newAddress = employees[emp].Address.split(',');
        var total = employees[emp].Salary + (employees[emp].Salary * 0.1);
        document.getElementById("content").innerHTML += "<tr><td>" + employees[emp].Id + "</td><td>" + employees[emp].FirstName + " " + employees[emp].LastName + "</td><td>" + newAddress[0] + "</td><td>" + newAddress[1] + "</td><td>" + newAddress[2] + "</td><td>" + newAddress[3] + "</td><td>" + total + "</td><td><button class=\"btn btn-danger\" onclick=\"deleteEmp(" + emp + ")\">Delete</button></td></tr>";
    }
}
console.log(employees);
GetAllEmployees();
// get employee information based on index number
function indexEmp() {
    var index = document.getElementById("myIndex").value;
    var newAddress = employees[index].Address.split(',');
    var total = employees[index].Salary + (employees[index].Salary * 0.1);
    document.getElementById("indexContent").innerHTML = "<tr><td>" + employees[index].Id + "</td><td>" + employees[index].FirstName + " " + employees[index].LastName + "</td><td>" + newAddress[0] + "</td><td>" + newAddress[1] + "</td><td>" + newAddress[2] + "</td><td>" + newAddress[3] + "</td><td>" + total + "</td></tr>";
}
// get employee information based on employee id
function idEmp() {
    var index = document.getElementById("myId").value;
    var newArray = employees.filter(function (employees, i, arr) {
        return employees.Id == parseInt(index);
    });
    var newAddress = newArray[0].Address.split(',');
    var total = newArray[0].Salary + (newArray[0].Salary * 0.1);
    document.getElementById("idContent").innerHTML = "<tr><td>" + newArray[0].Id + "</td><td>" + newArray[0].FirstName + " " + newArray[0].LastName + "</td><td>" + newAddress[0] + "</td><td>" + newAddress[1] + "</td><td>" + newAddress[2] + "</td><td>" + newAddress[3] + "</td><td>" + total + "</td></tr>";
}
// add employee
function addEmp() {
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var salary = parseInt(document.getElementById("salary").value);
    var employee = { Id: employees.length + 1, FirstName: fname, LastName: lname, Address: address, Salary: salary };
    employees.push(employee);
    GetAllEmployees();
}
// delete employee
function deleteEmp(id) {
    var index = parseInt(id);
    employees.splice(index, 1);
    GetAllEmployees();
}
// join two employee arrays
function joinEmp() {
    var employees1 = [
        { Id: 11, FirstName: "Reena", LastName: "Sharma", Address: "C-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 240000 },
        { Id: 21, FirstName: "Meena", LastName: "Tiwari", Address: "H-14, new Naimesh Park Soc, Ahmedabad, Gujarat", Salary: 480000 }
    ];
    var mergedEmp = employees.concat(employees1);
    console.log(mergedEmp);
    document.getElementById("joinContent").innerHTML = "";
    for (var _i = 0, mergedEmp_1 = mergedEmp; _i < mergedEmp_1.length; _i++) {
        var empObj = mergedEmp_1[_i];
        var newAddress = empObj.Address.split(',');
        var total = empObj.Salary + (empObj.Salary * 0.1);
        document.getElementById("joinContent").innerHTML += "<tr><td>" + empObj.Id + "</td><td>" + empObj.FirstName + " " + empObj.LastName + "</td><td>" + newAddress[0] + "</td><td>" + newAddress[1] + "</td><td>" + newAddress[2] + "</td><td>" + newAddress[3] + "</td><td>" + total + "</td></tr>";
    }
}
//# sourceMappingURL=assignment.js.map