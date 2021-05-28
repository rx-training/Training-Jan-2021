"use strict";
exports.__esModule = true;
exports.Vacancies = void 0;
var Vacancies = /** @class */ (function () {
    function Vacancies() {
    }
    Vacancies.prototype.CreateVacancy = function (param) {
        VacList.push(param);
    };
    Vacancies.prototype.viewallVacancy = function () {
        VacList.forEach(function (element) {
            console.log("Id-" + element.VacId + " of  " + element.name + " department has " + element.NuofVacancy + " Vacacies");
        });
    };
    return Vacancies;
}());
exports.Vacancies = Vacancies;
//creating varible of type interface to push into a list
var VacList = [
    {
        NuofVacancy: 20,
        name: "Devloper-.net",
        VacId: 1
    },
    {
        NuofVacancy: 20,
        name: "Devloper-Node",
        VacId: 2
    },
    {
        NuofVacancy: 20,
        name: "Devloper-Shopify",
        VacId: 3
    },
];
