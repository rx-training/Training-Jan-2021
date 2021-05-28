var employee = [
    { "id": 1, "Fname": "jevik", "LName": "Raiyani", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 },
    { "id": 2, "Fname": "Pratik", "LName": "Usadatiya", "Address": "11 Premnagar ,Varacha ,Surat ,Gujarat", "Salary": 2124 },
    { "id": 3, "Fname": "Tirath", "LName": "Savasaiya", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 },
    { "id": 4, "Fname": "Raj", "LName": "sojitra", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 },
    { "id": 5, "Fname": "X", "LName": "Y", "Address": "26/11 Bhojarajapara ,Gondal ,Rajkot ,Gujarat", "Salary": 13451 }
];
//all
function GetAll() {
    for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
        var i = employee_1[_i];
        console.log(i);
    }
}
//by index
function GetbyIndex(i) {
    console.log(employee[i]);
}
//emp by id
function GetbyEmpId(i) {
    var GetbyId = employee.filter(function (element, index, id) {
        return element.id == i;
    });
    console.log(GetbyId);
}
//Push
function PushData(id, Fname, LName, Address, Salary) {
    employee.push({ "id": id, "Fname": Fname, "LName": LName, "Address": Address, "Salary": Salary });
}
//delete
function PopEmp() {
    employee.pop();
}
//emp array
function empData() {
    var emp = employee;
    for (var _i = 0, emp_1 = emp; _i < emp_1.length; _i++) {
        var val = emp_1[_i];
        console.log("Id: " + val.id + ", Name : " + val.Fname.concat(" ").concat(val.LName) + "  Address: " + val.Address.split(",") + " Salary : " + val.Salary * 1.2 + " ");
    }
}
GetAll();
GetbyIndex(1);
GetbyEmpId(4);
PushData(6, "Arvind", "Kejrival", "4546 aa Delhi", 4522);
GetAll();
PopEmp();
GetAll();
empData();
