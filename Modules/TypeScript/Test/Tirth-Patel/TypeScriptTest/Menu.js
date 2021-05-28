"use strict";
exports.__esModule = true;
exports.wholemenuItems = exports.NonVegItems = exports.Tables = exports.VegItems = exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.ShowAllVegItems = function () { };
    ;
    Menu.prototype.OrderAItem = function () { };
    ;
    return Menu;
}());
exports.Menu = Menu;
var VegItems = [];
exports.VegItems = VegItems;
VegItems.push({ ItemId: 1, ItemName: "Samosa", ItemPrice: 50, ItemQnty: 100, ItemCategory: "Veg" }, { ItemId: 2, ItemName: "Vadapav", ItemPrice: 40, ItemQnty: 70, ItemCategory: "Veg" }, { ItemId: 3, ItemName: "Dabeli", ItemPrice: 60, ItemQnty: 45, ItemCategory: "Veg" }, { ItemId: 4, ItemName: "Burger", ItemPrice: 50, ItemQnty: 100, ItemCategory: "Veg" }, { ItemId: 5, ItemName: "Sandwich", ItemPrice: 100, ItemQnty: 40, ItemCategory: "Veg" });
var NonVegItems = [];
exports.NonVegItems = NonVegItems;
NonVegItems.push({ ItemId: 6, ItemName: "Chicken", ItemPrice: 50, ItemQnty: 100, ItemCategory: "NonVeg" }, { ItemId: 7, ItemName: "FriedEggs", ItemPrice: 40, ItemQnty: 70, ItemCategory: "NonVeg" }, { ItemId: 8, ItemName: "kheema", ItemPrice: 60, ItemQnty: 45, ItemCategory: "NonVeg" }, { ItemId: 9, ItemName: "omlet", ItemPrice: 50, ItemQnty: 100, ItemCategory: "NonVeg" }, { ItemId: 10, ItemName: "FriedRice", ItemPrice: 100, ItemQnty: 40, ItemCategory: "NonVeg" });
var wholemenuItems = [];
exports.wholemenuItems = wholemenuItems;
wholemenuItems.push({ ItemId: 1, ItemName: "Samosa", ItemPrice: 50, ItemQnty: 100, ItemCategory: "Veg" }, { ItemId: 2, ItemName: "Vadapav", ItemPrice: 40, ItemQnty: 70, ItemCategory: "Veg" }, { ItemId: 3, ItemName: "Dabeli", ItemPrice: 60, ItemQnty: 45, ItemCategory: "Veg" }, { ItemId: 4, ItemName: "Burger", ItemPrice: 50, ItemQnty: 100, ItemCategory: "Veg" }, { ItemId: 5, ItemName: "Sandwich", ItemPrice: 100, ItemQnty: 40, ItemCategory: "Veg" }, { ItemId: 6, ItemName: "Chicken", ItemPrice: 50, ItemQnty: 100, ItemCategory: "NonVeg" }, { ItemId: 7, ItemName: "FriedEggs", ItemPrice: 40, ItemQnty: 70, ItemCategory: "NonVeg" }, { ItemId: 8, ItemName: "kheema", ItemPrice: 60, ItemQnty: 45, ItemCategory: "NonVeg" }, { ItemId: 9, ItemName: "omlet", ItemPrice: 50, ItemQnty: 100, ItemCategory: "NonVeg" }, { ItemId: 10, ItemName: "FriedRice", ItemPrice: 100, ItemQnty: 40, ItemCategory: "NonVeg" });
var Tables = [];
exports.Tables = Tables;
Tables.push({
    Name: "Super", Type: "luxurious", TableId: 1, TableCapacity: 30, TableType: "S"
}, { Name: "Normal", Type: "Rich", TableId: 2, TableCapacity: 20, TableType: "A" }, { Name: "Normal", Type: "Affordable", TableId: 3, TableCapacity: 10, TableType: "B" }, { Name: "Super", Type: "VIP", TableId: 4, TableCapacity: 25, TableType: "S" }, { Name: "Super", Type: "Affordable", TableId: 5, TableCapacity: 15, TableType: "A" }, { Name: "Super", Type: "V-VIP", TableId: 6, TableCapacity: 15, TableType: "S"
});
