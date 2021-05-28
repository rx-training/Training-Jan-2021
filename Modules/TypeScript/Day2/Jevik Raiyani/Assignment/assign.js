var obj = [{ InventoryId: 1, InventoryName: "A", InventoryQuantity: 9, InventoryPrice: 1235 },
    { InventoryId: 2, InventoryName: "P", InventoryQuantity: 15, InventoryPrice: 456 }];
var RetailShop = /** @class */ (function () {
    function RetailShop() {
    }
    RetailShop.prototype.AvaliableRecord = function () {
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var val = obj_1[_i];
            console.log("Id is " + val.InventoryId + ", Name is " + val.InventoryName + ", Quantity is " + val.InventoryQuantity + ", Price is " + val.InventoryPrice + " ");
        }
    };
    RetailShop.prototype.Purchase = function (id, qty) {
        var data = obj.filter(function (x) { return x.InventoryId == id; });
        if (qty < 5) {
            console.log("Qty Atleast 5");
        }
        else {
            if (data[0] == null) {
                console.log("Return Valid Id");
            }
            else if (data[0].InventoryQuantity - qty >= 0) {
                obj[obj.indexOf(data[0])].InventoryQuantity -= qty;
                console.log("Purchase is SuccessFull");
            }
            else {
                console.log("Not enough Qty Available");
            }
        }
    };
    return RetailShop;
}());
var x = new RetailShop();
x.AvaliableRecord();
x.Purchase(1, 5);
x.AvaliableRecord();
x.Purchase(1, 5);
x.AvaliableRecord();
x.Purchase(1, 4);
x.AvaliableRecord();
x.Purchase(3, 6);
x.AvaliableRecord();
