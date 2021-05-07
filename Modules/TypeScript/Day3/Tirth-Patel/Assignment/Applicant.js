"use strict";
exports.__esModule = true;
exports.ApplicantList = exports.Applicants = void 0;
var Applicants = /** @class */ (function () {
    function Applicants() {
    }
    Applicants.prototype.CreateApplicant = function (param) {
        exports.ApplicantList.push(param);
    };
    Applicants.prototype.DisplayAllApplicant = function () {
        exports.ApplicantList.forEach(function (element) {
            console.log("Id-" + element.Id + " of  " + element.name + " applicant Has applied ");
        });
    };
    return Applicants;
}());
exports.Applicants = Applicants;
exports.ApplicantList = [];
exports.ApplicantList.push({ Id: 101, name: "Tirth", age: 23, Email: "xyz@x.com"
}, { Id: 102, name: "Jimmy", age: 33, Email: "jimmy@gmail.com"
}, { Id: 101, name: "Akshar", age: 21, Email: "Akshar@gmail.com"
});
