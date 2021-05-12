"use strict";
exports.__esModule = true;
var Vacancies = /** @class */ (function () {
    function Vacancies(Id, Name, VNumber, VQualification) {
        this.VacancyID = Id;
        this.VacancyName = Name;
        this.VacancyNumber = VNumber;
        this.VacancyQualification = VQualification;
    }
    return Vacancies;
}());
var vacancies = [new Vacancies(1, "Software Developer", 10, "MCA"),
    new Vacancies(2, "Software Tester", 11, "MCA"),
    new Vacancies(3, "HR", 20, "Bcom"),
    new Vacancies(4, "Accountant", 4, "Bcom"),
    new Vacancies(5, "Techincal Consultant", 5, "BscIT")];
function DispalyData() {
    console.log(vacancies);
}
exports["default"] = DispalyData;
DispalyData();
