"use strict";
exports.__esModule = true;
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var str = ["hello", "22222", "21"];
str.forEach(function (s) {
    console.log("\"" + s + "\" " + (StaticZipCodeValidator_1["default"](s) ? "matches" : "does not match"));
});
