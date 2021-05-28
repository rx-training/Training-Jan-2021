"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator1 = exports.ZipCodeValidator = exports.numberRegexp = void 0;
var practice_1 = require("./practice");
var practice_2 = require("./practice");
var practice = require("./practice");
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
function default_1(s) {
    return s.length === 5 && exports.numberRegexp.test(s);
}
exports.default = default_1;
var ZipCodeValidator1 = /** @class */ (function () {
    function ZipCodeValidator1() {
    }
    ZipCodeValidator1.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator1;
}());
exports.ZipCodeValidator1 = ZipCodeValidator1;
var zipCode = new ZipCodeValidator();
console.log(zipCode.isAcceptable("12345"));
var std = new practice.StudentInfo();
std.setValue("103", "Rohit");
std.display();
var std1 = new practice_2.StudentInfo();
std1.setValue("104", "Rohit");
std1.display();
var myGenericNumber = new practice_1.GenNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));
//# sourceMappingURL=ZipCodeValidator.js.map