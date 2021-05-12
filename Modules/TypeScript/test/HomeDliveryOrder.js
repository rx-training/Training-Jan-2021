"use strict";
exports.__esModule = true;
exports.HomeOrder = exports.order = void 0;
var Orders = /** @class */ (function () {
    function Orders(CustomerID, CustomerName, FoodID, FoodName, Price, Quantity, CurrentOrderDateTime, OrderDateTime, TypeOfFood) {
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.FoodID = FoodID;
        this.FoodName = FoodName;
        this.Price = Price;
        this.Quantity = Quantity;
        this.CurrentOrderDateTime = CurrentOrderDateTime;
        this.OrderDateTime = OrderDateTime;
        this.TypeOfFood = TypeOfFood;
    }
    return Orders;
}());
exports.order = [new Orders(1, "Bina", 1, "Pizza", 110, 1, new Date(2021, 5, 7, 3, 4, 5, 6), new Date(2021, 4, 7, 3, 4, 5, 6), "Non-Vegetarian")];
for (var _i = 0, order_1 = exports.order; _i < order_1.length; _i++) {
    var i = order_1[_i];
    if (i.CustomerID == 1) {
        exports.HomeOrder = i;
    }
}
