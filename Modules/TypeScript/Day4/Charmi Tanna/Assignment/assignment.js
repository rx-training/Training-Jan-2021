var Employee = /** @class */ (function () {
    function Employee(ID, Name, City, DOJ) {
        this.ID = ID;
        this.Name = Name;
        this.City = City;
        this.DOJ = DOJ;
    }
    return Employee;
}());
var EmpData;
//Store 5 Employee Data(ID,Name,City,DOJ) in one Array.
EmpData = [new Employee(1, "Riya", "Surat", new Date(2020, 10, 10)),
    new Employee(2, "Reena", "Ahmedabad", new Date(2019, 5, 30)),
    new Employee(3, "Meena", "Navsari", new Date(2018, 6, 10)),
    new Employee(4, "Roy", "Vadodara", new Date(2017, 7, 10)),
    new Employee(5, "John", "Mumbai", new Date(2021, 8, 10)),];
var id = 5;
console.log(EmpData);
console.log("employee having id 5:");
for (var _i = 0, EmpData_1 = EmpData; _i < EmpData_1.length; _i++) {
    var i = EmpData_1[_i];
    if (i.ID == id) {
        console.log(i);
    }
}
//Search the employees who has joined after year 2020
console.log("Employees who has joined after year 2020");
for (var _a = 0, EmpData_2 = EmpData; _a < EmpData_2.length; _a++) {
    var i = EmpData_2[_a];
    if (i.DOJ.getFullYear() > 2020) {
        console.log(i);
    }
}
//Search the employee who has joined after year 2020 and stays in Mumbai city
console.log("Employee who has joined after year 2020 and stays in Mumbai city");
for (var _b = 0, EmpData_3 = EmpData; _b < EmpData_3.length; _b++) {
    var i = EmpData_3[_b];
    if (i.DOJ.getFullYear() > 2020) {
        if (i.City == "Mumbai") {
            console.log(i);
        }
    }
}
