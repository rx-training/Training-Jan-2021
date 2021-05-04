var employee = [
    { "id": 1, "Fname": "jevik", "LName": "Raiyani", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 },
    { "id": 2, "Fname": "Pratik", "LName": "Usadatiya", "Address": "11 Premnagar ,Varacha ,Surat ,Gujarat", "Salary": 2124 },
    { "id": 3, "Fname": "Tirath", "LName": "Savasaiya", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 },
    { "id": 4, "Fname": "Raj", "LName": "sojitra", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 },
    { "id": 5, "Fname": "X", "LName": "Y", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 }
];
//all
for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
    var i = employee_1[_i];
    console.log(i);
}
//by index
console.log(employee[0]);
//emp by id
var GetbyId = employee.filter(function (element, index, id) {
    return element.id == 4;
});
console.log(GetbyId);
//Push
employee.push({ "id": 6, "Fname": "Fname", "LName": "Lname", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 });
console.log(employee);
//delete
employee.pop();
console.log(employee);
//emp array
var emp = employee;
for (var _a = 0, emp_1 = emp; _a < emp_1.length; _a++) {
    var val = emp_1[_a];
    console.log("Id: " + val.id + ", Name : " + val.Fname.concat(" ").concat(val.LName) + "  Address: " + val.Address.split(",") + " Salary : " + val.Salary * 1.2 + " ");
}
