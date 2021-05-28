"use strict";
exports.__esModule = true;
exports.Food = void 0;
// Food class
var Food = /** @class */ (function () {
    function Food(id, name, price, quantity, type, personsServed) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.type = type;
        this.personsServed = personsServed;
    }
    return Food;
}());
exports.Food = Food;
