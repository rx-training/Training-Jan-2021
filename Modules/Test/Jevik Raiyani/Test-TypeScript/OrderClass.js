"use strict";
exports.__esModule = true;
exports.OrderData = void 0;
var index_1 = require("./index");
var Country = [];
var OrderData = /** @class */ (function () {
    function OrderData(name, add, city, country) {
        this.name = name;
        this.AddressLine1 = add;
        this.city = city;
        this.country = country;
    }
    OrderData.prototype.GetMenu = function () {
        for (var _i = 0, OrdeData_1 = index_1.OrdeData; _i < OrdeData_1.length; _i++) {
            var val = OrdeData_1[_i];
            console.log(val);
        }
    };
    OrderData.prototype.OrderItemById = function (id) {
        console.log("you Ordered & Bill");
        console.log(index_1.OrdeData.filter(function (x) { return x.id == id; }));
        console.log(this.name + ",  " + this.AddressLine1 + ", " + this.city + ", " + this.country);
    };
    return OrderData;
}());
exports.OrderData = OrderData;
