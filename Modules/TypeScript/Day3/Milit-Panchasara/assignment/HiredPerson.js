"use strict";
exports.__esModule = true;
exports.hiredPersonList = exports.HiredPersons = void 0;
var HiredPersons = /** @class */ (function () {
    function HiredPersons() {
    }
    HiredPersons.prototype.createHiredPerson = function (input) {
        exports.hiredPersonList.push(input);
    };
    HiredPersons.prototype.viewAllHiredPersons = function () {
        console.log();
        console.log("Hired Persons:");
        exports.hiredPersonList.forEach(function (hiredPerson) {
            console.log("ID: " + hiredPerson.id + ", Name: " + hiredPerson.name + ", Email: " + hiredPerson.email + ", Hired Date: " + hiredPerson.hiredDate + ", Salary: " + hiredPerson.salary);
        });
        console.log();
    };
    HiredPersons.prototype.viewHiredPerson = function (id) {
        console.log();
        for (var key in exports.hiredPersonList) {
            if (exports.hiredPersonList[key].id == id) {
                var hiredPerson = exports.hiredPersonList[key];
                console.log("ID: " + hiredPerson.id + ", Name: " + hiredPerson.name + ", Email: " + hiredPerson.email + ", Hired Date: " + hiredPerson.hiredDate + ", Salary: " + hiredPerson.salary);
                console.log();
                return;
            }
        }
        console.log("Invalid person id: " + id);
        console.log();
    };
    return HiredPersons;
}());
exports.HiredPersons = HiredPersons;
exports.hiredPersonList = [];
