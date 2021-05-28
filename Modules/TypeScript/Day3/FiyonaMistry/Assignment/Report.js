"use strict";
exports.__esModule = true;
exports.Report = void 0;
var Report = /** @class */ (function () {
    function Report() {
    }
    Report.prototype.hiredApplicant = function (result) {
        console.log("Repor for Hired Employees : ");
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var r = result_1[_i];
            console.log(r);
        }
    };
    return Report;
}());
exports.Report = Report;
