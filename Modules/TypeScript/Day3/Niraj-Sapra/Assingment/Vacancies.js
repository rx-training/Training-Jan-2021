"use strict";
exports.__esModule = true;
exports.Vacancies = void 0;
var Posting = [
    { Department_Id: 1, Department_name: 'Apprenties', number_of_vacanies: 10 },
    { Department_Id: 2, Department_name: 'Grapics Desinger', number_of_vacanies: 7 },
    { Department_Id: 3, Department_name: 'Devloper', number_of_vacanies: 12 },
    { Department_Id: 4, Department_name: 'Hr_Assistant', number_of_vacanies: 9 }
];
var Vacancies = /** @class */ (function () {
    function Vacancies() {
    }
    //  PostVacancie(Department_name:string,number_of_vacanies:number)
    Vacancies.prototype.PostVacancie = function () {
        console.log("----------------Total Post Vacanies---------------");
        console.log();
        for (var _i = 0, Posting_1 = Posting; _i < Posting_1.length; _i++) {
            var post = Posting_1[_i];
            console.log(Posting);
            return Posting;
        }
        console.log("--------------------------------------------------");
    };
    return Vacancies;
}());
exports.Vacancies = Vacancies;
