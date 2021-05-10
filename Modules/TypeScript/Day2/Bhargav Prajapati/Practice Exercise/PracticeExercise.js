//class Example 
console.log("=======================Class Example=============================");
var Employee = /** @class */ (function () {
    function Employee(EmpCode, EmpName) {
        this.EmployeeCode = EmpCode;
        this.EmployeeName = EmpName;
    }
    Employee.prototype.Display = function () {
        console.log("EmployeeCode :- " + this.EmployeeCode);
        console.log("Employee Name :- " + this.EmployeeName);
    };
    return Employee;
}());
var e1 = new Employee(101, "Parth");
var e2 = new Employee(102, "Bhavik");
e1.Display();
e2.Display();
//Enum Example
console.log("=========================Enum Example ==============================");
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
console.log("Blue Color Position :- " + Color.Blue);
console.log("Red Color Position :- " + Color.Red);
console.log(" Greeen Color Position :- " + Color.Green);
console.log("Yellow Color Position :- " + Color.Yellow);
console.log("========================Tuple Example==================");
var emps = [];
emps = [[1, "Stave"], [2, "Bill"], [3, "Jeff1"]];
console.log(emps);
console.log("=========================Union Example============================");
function UninonDisplay(value) {
    if (typeof value == "number") {
        console.log("The type of " + value + "  is Number");
    }
    else {
        console.log("The type of " + value + " is String");
    }
}
UninonDisplay(25);
UninonDisplay("AWSASASASSA");
// InterFace Example
console.log("==================Interface Example===================");
var EmployeesofCompony = /** @class */ (function () {
    function EmployeesofCompony(EmployeeId, EmployeeFullName, EmployeeSalary) {
        this.EmployeeId = EmployeeId;
        this.EmployeeFullName = EmployeeFullName;
        this.EmployeeSalary = EmployeeSalary;
    }
    EmployeesofCompony.prototype.Dispyay = function () {
        console.log("EmployeeId :- " + this.EmployeeId);
        console.log("EmployeeFullName :- " + this.EmployeeFullName);
        console.log("EmployeeSalary :- " + this.EmployeeSalary);
    };
    return EmployeesofCompony;
}());
var data1 = new EmployeesofCompony(1, "Parth Prajapati", 50000);
var data2 = new EmployeesofCompony(2, "Pankaj Thakkar", 70000);
data1.Dispyay();
data2.Dispyay();
//InterFace Can be used  as type
console.log("============================Interface  As Type===========================");
var newkeypairvalue = [{ Key: 1, Value: "Steve" }, { Key: 2, Value: "John" }, { Key: 3, Value: "Doe" }];
for (var _i = 0, newkeypairvalue_1 = newkeypairvalue; _i < newkeypairvalue_1.length; _i++) {
    var iterator = newkeypairvalue_1[_i];
    console.log("Value Of Key :- " + iterator.Key);
    console.log("Value Of Pair :- " + iterator.Value);
}
console.log("========================Interface As Function Type======================");
function AddValueKey(Key, value) {
    console.log("Value Of Key :- " + Key);
    console.log("Value Of Pair :- " + value);
}
var kvp = AddValueKey;
kvp(1, "Hello");
kvp(2, "World");
console.log("===========================Interfade for Array Tye===================");
var numarr = [1, 2, 3, 4];
console.log(numarr[0]);
console.log(numarr[1]);
console.log(numarr[2]);
console.log(numarr[3]);
console.log("=========================Iterface for Creating  Properties===================");
var pepoledata = [{ id: 1, Name: "Abhishek", department: "Computer" }, { id: 2, Name: "Mit" }];
for (var _a = 0, pepoledata_1 = pepoledata; _a < pepoledata_1.length; _a++) {
    var Dataaa = pepoledata_1[_a];
    console.log("Id Of Employee :- " + Dataaa.id);
    console.log("Name of Emplyoyee :- " + Dataaa.Name);
    console.log("Department Of Employee :- " + Dataaa.department);
}
console.log("==================Extending The InterFace In Class====================");
var obj = { id: 1, Name: "ASAWEWD", Address: "dsdsdsdsd", Department: "It" };
console.log("Id :- " + obj.id);
console.log("Name :- " + obj.Name);
console.log("Address :- " + obj.Address);
console.log("Department :- " + obj.Department);
console.log("=======================Function Example=============");
var fun = function (number1, number2) {
    return number1 + number2;
};
console.log("Addition Of Two Number :- " + fun(25, 30));
