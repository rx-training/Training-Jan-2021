"use strict";
exports.__esModule = true;
exports.NonVegFood = exports.VegFood = exports.FItem = void 0;
var FoodItems = /** @class */ (function () {
    function FoodItems(FoodID, FoodName, Price, TypeOfFood) {
        this.FoodID = FoodID;
        this.FoodName = FoodName;
        this.Price = Price;
        this.TypeOfFood = TypeOfFood;
    }
    return FoodItems;
}());
exports.FItem = [new FoodItems(1, "Pizza", 110, "Non-Vegetarian"), new FoodItems(2, "Bhaji Pav", 100, "Vegetarian")];
for (var _i = 0, FItem_1 = exports.FItem; _i < FItem_1.length; _i++) {
    var i = FItem_1[_i];
    if (i.TypeOfFood == "Vegetarian") {
        exports.VegFood = i;
    }
}
for (var _a = 0, FItem_2 = exports.FItem; _a < FItem_2.length; _a++) {
    var i = FItem_2[_a];
    if (i.TypeOfFood == "Non-Vegetarian") {
        exports.NonVegFood = i;
    }
}
