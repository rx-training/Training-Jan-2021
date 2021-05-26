"use strict";
exports.__esModule = true;
exports.Menu = exports.MenuArray = exports.order = void 0;
var Customers_1 = require("./Customers");
exports.order = [
    { ItemId: 1, ItemName: 'a', Quantity: 10 },
    { ItemId: 2, ItemName: 'b', Quantity: 10 }
];
exports.MenuArray = [
    { ItemId: 1, ItemName: 'a', ItemPrice: 100 },
    { ItemId: 2, ItemName: 'b', ItemPrice: 110 },
    { ItemId: 3, ItemName: 'k', ItemPrice: 120 },
    { ItemId: 4, ItemName: 'h', ItemPrice: 130 },
    { ItemId: 5, ItemName: 'g', ItemPrice: 100 },
    { ItemId: 6, ItemName: 'd', ItemPrice: 100 },
    { ItemId: 7, ItemName: 'f', ItemPrice: 200 }
];
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.PlaceOrder = function (order, CustomerId) {
        var price = 0;
        order.forEach(function (element) {
            for (var _i = 0, MenuArray_1 = exports.MenuArray; _i < MenuArray_1.length; _i++) {
                var item = MenuArray_1[_i];
                if (item.ItemId == element.ItemId) {
                    price += item.ItemPrice * element.Quantity;
                }
            }
        });
        var address;
        Customers_1.newCustomers.forEach(function (element) {
            if (element.CustomerId == CustomerId) {
                address = element.CustomerAddress;
            }
        });
        return "Your final bill is " + price + " and placed at " + address;
    };
    return Menu;
}());
exports.Menu = Menu;
// To know the bill
var mn = new Menu();
console.log(mn.PlaceOrder(exports.order, 1));
