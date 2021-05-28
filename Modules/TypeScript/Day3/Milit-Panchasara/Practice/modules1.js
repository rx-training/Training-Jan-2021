"use strict";
exports.__esModule = true;
exports.Demo2 = exports.Demo = void 0;
var modules2_1 = require("./modules2");
exports.Demo2 = modules2_1.Demo2;
var Demo = /** @class */ (function () {
    function Demo(value1, value2) {
        this.prop1 = value1;
        this.prop2 = value2;
    }
    Demo.prototype.display = function () {
        console.log(this.prop1, ' ', this.prop2);
    };
    return Demo;
}());
exports.Demo = Demo;
