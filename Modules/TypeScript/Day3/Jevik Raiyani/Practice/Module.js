"use strict";
exports.__esModule = true;
exports.StudentData = exports.Emp = void 0;
function Emp(id, name) {
    console.log("From Emp Module  " + id + "  " + name);
}
exports.Emp = Emp;
var StudentData = /** @class */ (function () {
    function StudentData(ID, Name) {
        this.id = ID;
        this.name = Name;
    }
    StudentData.prototype.Display = function () {
        console.log(this.id + " and name is " + this.name + " ");
    };
    return StudentData;
}());
exports.StudentData = StudentData;
