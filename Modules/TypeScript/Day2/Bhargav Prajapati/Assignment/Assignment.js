var obj = [
    { ItemId: 3, ItemName: "IceCream", ItemPrice: 50, ItemQuantity: 150 },
    { ItemId: 1, ItemName: "Cake", ItemPrice: 150, ItemQuantity: 4 },
    { ItemId: 2, ItemName: "Pizza", ItemPrice: 500, ItemQuantity: 35 },
    { ItemId: 4, ItemName: "Burger", ItemPrice: 75, ItemQuantity: 780 },
];
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.Display = function () {
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var data = obj_1[_i];
            console.log("ItemId :-" + data.ItemId + " ");
            console.log("ItemName :- " + data.ItemName);
            console.log("ItemPrice :- " + data.ItemPrice);
            console.log("ItemQuantity :- " + data.ItemQuantity);
            console.log("==============================================");
        }
    };
    Inventory.prototype.BuyProduct = function (Id, Qnt) {
        var Qt = obj.filter(function (obj) { return obj.ItemId == Id; })[0];
        if (Qt.ItemQuantity < 5) {
            console.log("Reorder The " + Qt.ItemName + " Item");
        }
        else {
            var idx = obj.indexOf(Qt);
            obj[idx].ItemQuantity = obj[idx].ItemQuantity - Qnt;
            console.log("Successsfully Purches Product");
        }
    };
    return Inventory;
}());
console.log("=========================Before Any Quantity Deducted =================================");
var Inven = new Inventory();
Inven.Display();
console.log("=========================After Any Quantity Deducted==================================");
Inven.BuyProduct(3, 2);
Inven.Display();
console.log("=======================Quantity is LessThen 5=====================");
Inven.BuyProduct(1, 4);
