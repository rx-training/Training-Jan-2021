"use strict";
exports.__esModule = true;
exports.Applicant = void 0;
var Applicant = /** @class */ (function () {
    function Applicant(id, fname, lname, email, phoneNumber, degree) {
        this.Id = id;
        this.Fname = fname;
        this.Lname = lname;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
        this.Degree = degree;
    }
    Applicant.prototype.display = function (data) {
        console.log("Storing Applicants data : ");
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var applicant = data_1[_i];
            console.log(applicant);
        }
        console.log("");
        console.log("Starting Interview Process...");
        console.log("");
    };
    return Applicant;
}());
exports.Applicant = Applicant;
