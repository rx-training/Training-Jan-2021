//class
var Employee = /** @class */ (function () {
    function Employee(EmployeeID, EmployeeName) {
        this.EmployeeID = EmployeeID;
        this.EmployeeName = EmployeeName;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var e = new Employee(1, "Bhumi Shah");
console.log(e);
console.log(e.getSalary());
//Tuples
var arr;
arr = ["abc", 10, false];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color["Green"] = "4";
})(Color || (Color = {}));
;
console.log(Color.Green);
var c;
c = Color.Green;
console.log(c);
var Emp = /** @class */ (function () {
    function Emp(EmployeeID, EmployeeName) {
        this.EmployeeID = EmployeeID;
        this.EmployeeName = EmployeeName;
    }
    Emp.prototype.getSalary = function (EmployeeID) {
        return 20000;
    };
    return Emp;
}());
var e1 = new Emp(10, "Bhumi");
console.log(e1);
console.log(e1.getSalary(20000));
//Function
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//Anonymous Function
var sum = function (a, b) {
    return a + b;
};
console.log(sum(20, 30));
//Interface initialization
var empObj = {
    PersonName: "Riya",
    PersonNumber: 2,
    EmployeeID: 1
};
console.log(empObj);
var key1 = { key: 1, value: "Riya" };
console.log(key1);
;
function addKeyValue(key, value) {
    console.log(key + " " + value);
}
var NewArr = [1, 2, 3];
NewArr[0];
NewArr[1];
console.log(NewArr);
var empObj2 = {
    empCode: 1,
    empName: "Reena"
};
console.log(empObj2);
//Unions 
var data = 30;
data = false;
console.log(data);
//Interface
function PrintLabel(LabeledObJ) {
    console.log(LabeledObJ.label);
}
var myObj = { size: 10, label: "Size 10 objects" };
PrintLabel(myObj);
//String Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up);
