var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labeledObj) {
    var newMessage = { label: "Good Morning!!!" };
    if (labeledObj.label) {
        newMessage.label = labeledObj.label;
    }
    return newMessage;
}
var myObj = printLabel({});
var myObj1 = printLabel({ label: "Happy Birthday!!!" });
console.log(myObj);
console.log(myObj1);
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.message = function () {
        console.log("Hello, I am " + this.name);
    };
    return Person;
}());
var person1 = new Person("Mike");
person1.message();
var persons = [new Person("John"), new Person("Linda")];
persons.push(person1);
for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
    var p = persons_1[_i];
    p.message();
}
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(theName, salary) {
        var _this = _super.call(this, theName) || this;
        _this.Salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        var PF = Number(this.Salary) * 0.12;
        console.log(this.name + "'s Salary is " + this.Salary + " and his contribution to the PF is " + PF);
    };
    return Employee;
}(Person));
var employee1 = new Employee("Mike", 2000);
employee1.message();
employee1.display();
