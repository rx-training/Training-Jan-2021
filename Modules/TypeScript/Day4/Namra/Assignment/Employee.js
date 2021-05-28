"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(Id, Name, Contact, Address, Salary, City, Joining) {
        this.Id = Id;
        this.Name = Name;
        this.Contact = Contact;
        this.Address = Address;
        this.Salary = Salary;
        this.City = City;
        this.JoiningDate = new Date(Joining);
    }
    Employee.prototype.SearchById = function (Employees, Id) {
        return Employees.filter(function (s) { return s.Id == Id; });
    };
    ;
    Employee.prototype.JoinedAfter2020 = function (Employees) {
        return Employees.filter(function (s) { return s.JoiningDate.getFullYear() > 2020; });
    };
    ;
    Employee.prototype.JoinedAfter2020InCity = function (Employees, City) {
        return Employees.filter(function (s) { return s.JoiningDate.getFullYear() > 2020 && s.City == City; });
    };
    ;
    return Employee;
}());
exports.Employee = Employee;
