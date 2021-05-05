"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (ZipCodeValidator_1.default(s) ? "matches" : "does not match"));
});
//# sourceMappingURL=ParseIntBasedZipCodeValidator.js.map