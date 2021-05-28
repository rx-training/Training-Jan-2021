"use strict";
exports.__esModule = true;
exports.ListoFOrder = exports.Orders = void 0;
var Menu_1 = require("./Menu");
var Orders = /** @class */ (function () {
    function Orders(OrderId, items, CustomerId, Time, BillAmount) {
        if (BillAmount === void 0) { BillAmount = 0; }
        this.OrderId = OrderId;
        this.items = items;
        this.CustomerId = CustomerId;
        this.Time = Time;
        this.BillAmount = BillAmount;
    }
    Orders.prototype.CreateOrder = function (param) {
        var flag;
        //cheking if item id is correct or not!
        //if its correct then add that price to bill amount
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var id = _a[_i];
            for (var _b = 0, wholemenuItems_1 = Menu_1.wholemenuItems; _b < wholemenuItems_1.length; _b++) {
                var items = wholemenuItems_1[_b];
                if (id == items.ItemId) {
                    this.BillAmount += items.ItemPrice;
                    items.ItemQnty--;
                    flag = true;
                }
            }
        }
        if (flag == true) {
            param.Time = 45; //hard coded delivery time
            param.OrderId = Math.floor(Math.random() * 100) + 1;
            param.BillAmount = this.BillAmount;
            exports.ListoFOrder.push(param);
            console.log("Order Accepted");
        }
        else {
            console.log("one of the Item not Availible");
        }
    };
    return Orders;
}());
exports.Orders = Orders;
exports.ListoFOrder = [];
