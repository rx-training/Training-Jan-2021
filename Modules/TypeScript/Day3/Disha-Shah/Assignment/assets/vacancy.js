"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacancy = void 0;
var Vacancy = /** @class */ (function () {
    function Vacancy(id, name, jobDesc, expReq, vacancies) {
        this.id = id;
        this.name = name;
        this.jobDesc = jobDesc;
        this.expReq = expReq;
        this.vacancies = vacancies;
    }
    Vacancy.prototype.add = function (vacancyArr) {
        var vacancyItem = new Vacancy(this.id, this.name, this.jobDesc, this.expReq, this.vacancies);
        vacancyArr.push(vacancyItem);
    };
    return Vacancy;
}());
exports.Vacancy = Vacancy;
//# sourceMappingURL=vacancy.js.map