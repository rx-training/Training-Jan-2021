"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var EmpFunction = /** @class */ (function () {
    function EmpFunction() {
    }
    EmpFunction.prototype.JoingAfterYear = function (year) {
        var JoinAferYear = index_1.EmpData.filter(function (x) { return x.DOJ.getFullYear() > year; });
        console.log(JoinAferYear);
    };
    EmpFunction.prototype.GetAll = function () {
        console.log(index_1.EmpData);
    };
    EmpFunction.prototype.GetById = function (id) {
        var GetEmpbyId = index_1.EmpData.filter(function (x) { return x.Id == id; });
        console.log(GetEmpbyId);
    };
    EmpFunction.prototype.GetEmpByCityYear = function (year, city) {
        var JoinAferYear = index_1.EmpData.filter(function (x) { return x.DOJ.getFullYear() > year && x.City == city; });
        console.log(JoinAferYear);
    };
    return EmpFunction;
}());
var data = new EmpFunction();
data.GetAll();
data.GetById(5);
data.JoingAfterYear(2020);
data.GetEmpByCityYear(2020, "Mumbai");
