var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var emp = new Employee(12, "Jevik");
console.log(emp.getSalary());
var a;
a = ["jevik", 21];
console.log(a);
var emplo;
emplo = [[1, "ejads"], [2, "skadj"], [4, "sad"]];
console.log(emplo);
var code;
code = 123;
code = "jevik";
console.log(code);
function display(value) {
    if (typeof (value) == "number")
        console.log("number data");
    else if (typeof (value) == "string")
        console.log('String Data');
}
display(123);
display("jevik");
var Coler;
(function (Coler) {
    Coler[Coler["red"] = 0] = "red";
    Coler[Coler["geen"] = 1] = "geen";
    Coler[Coler["blue"] = 2] = "blue";
})(Coler || (Coler = {}));
var c;
c = Coler.geen;
console.log(c);
var x = Coler.red;
console.log(x);
console.log(Coler[0]);
var Employees1 = /** @class */ (function () {
    function Employees1(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employees1.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employees1;
}());
var emp1 = new Employees1(1, "ejvi");
console.log(emp1.getSalary(1));
var Kv1 = { key: 1, value: "jevik" };
console.log(Kv1);
;
function addKeyval(key, value) {
    console.log('key =' + key + ',val =' + value);
}
var kvp = addKeyval;
kvp(1, "jevik");
var numarr = [11, 32, 3];
console.log(numarr[0]);
console.log(numarr[1]);
var empObj1 = {
    empCode: 4,
    empName: "jevik",
    SSN: 4
};
console.log(empObj1);
var empObbj = {
    empCode: 1,
    name: "jevik",
    gender: "male"
};
console.log(empObbj);
function addNum(num1, num2) {
    return num1 + num2;
}
var sum = function (a, b) {
    return a + b;
};
console.log(addNum(2, 5));
console.log(sum(1, 2));
