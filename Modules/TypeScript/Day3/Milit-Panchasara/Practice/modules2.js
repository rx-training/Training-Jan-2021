"use strict";
exports.__esModule = true;
exports.Demo2 = void 0;
var Demo2 = /** @class */ (function () {
    function Demo2(value1, value2) {
        this.prop1 = value1;
        this.prop2 = value2;
    }
    Demo2.prototype.display = function () {
        console.log(this.prop1, ' ', this.prop2);
    };
    return Demo2;
}());
exports.Demo2 = Demo2;
