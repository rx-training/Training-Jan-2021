var Purchases = /** @class */ (function () {
    function Purchases(ItemID, ItemName, ItemQuantity) {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
    }
    return Purchases;
}());
var Inventories = /** @class */ (function () {
    function Inventories(ItemID, ItemName, ItemQuantity) {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
    }
    return Inventories;
}());
var Orders = /** @class */ (function () {
    function Orders(ItemID, ItemName, ItemQuantity) {
        this.ItemID = ItemID;
        this.ItemName = ItemName;
        this.ItemQuantity = ItemQuantity;
    }
    return Orders;
}());
var purchase = [new Purchases(1, "Pen", 16), new Purchases(2, "Book", 10), new Purchases(3, "Pencile", 20)];
var order = [new Orders(1, "Pen", 20), new Orders(2, "Book", 20), new Orders(3, "Pencile", 50)];
var Inventory12;
var reorder;
var item12 = [];
var qty;
var id;
var iname;
console.log("Items purchased is:");
console.log(purchase);
for (var _i = 0, purchase_1 = purchase; _i < purchase_1.length; _i++) {
    var i = purchase_1[_i];
    for (var _a = 0, order_1 = order; _a < order_1.length; _a++) {
        var j = order_1[_a];
        if (i.ItemID == j.ItemID) {
            Inventory12 = { "ItemID": i.ItemID, "ItemName": i.ItemName, "ItemQuantity": j.ItemQuantity - i.ItemQuantity };
            item12.push(Inventory12);
            qty = Inventory12.ItemQuantity;
            id = Inventory12.ItemID;
            iname = Inventory12.ItemName;
        }
    }
    if (qty < 5) {
        reorder = [new Orders(id, iname, qty + 5)];
        console.log("Items Ordered sucessfully");
        console.log(reorder);
    }
}
console.log("Items in inventory is:");
console.log(item12);
