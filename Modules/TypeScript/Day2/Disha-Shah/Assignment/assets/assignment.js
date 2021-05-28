// Enum
var Quantity;
(function (Quantity) {
    Quantity[Quantity["minQty"] = 5] = "minQty";
})(Quantity || (Quantity = {}));
// Class implement interface
var Product = /** @class */ (function () {
    // Constructor
    function Product(id, name, qty, price) {
        this.productId = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    // Get information of product
    Product.prototype.getProduct = function () {
        console.log("Available: ProductId = " + this.productId + ", Name = " + this.name + ", Quantity = " + this.qty + ", Price = " + this.price);
    };
    // Buy a product
    Product.prototype.buyProduct = function (qtyToBuy) {
        if (qtyToBuy > this.qty) {
            console.log("Quantity is greater than available quantity");
            this.getProduct();
        }
        else {
            this.qty -= qtyToBuy;
            console.log("successfully placed order");
            this.getProduct();
            if (this.qty < Quantity.minQty) {
                this.reOrder(50);
            }
        }
    };
    // Add new product
    Product.prototype.addProduct = function () {
        var product = new Product(this.productId, this.name, this.qty, this.price);
        prodArray.push(product);
    };
    // Reorder product
    Product.prototype.reOrder = function (reOrderQty) {
        this.qty += reOrderQty;
        console.log("Re-Order for " + reOrderQty + " pieces of " + this.name + " is successfully placed");
        console.log("After Delivery: Name: " + this.name + ", Total Quantity Available: " + this.qty);
    };
    return Product;
}());
var prod1 = new Product(1, "Cutter", 50, 100);
var prod2 = new Product(2, "Drill", 50, 100);
var prod3 = new Product(3, "Saw", 12, 100);
var prodArray = [];
prodArray.push(prod1);
prodArray.push(prod2);
prodArray.push(prod3);
console.log("----------------------------Products List------------------------------------");
console.log(prodArray);
console.log();
console.log("----------------------------------Product Order--------------------------------");
console.log();
prodArray[0].buyProduct(200);
console.log();
prodArray[1].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();
console.log("-----------------------------------Add product----------------------------------");
var prod4 = new Product(4, "Saw", 20, 100);
prod4.addProduct();
console.log("------------------------------------New List------------------------------------");
console.log(prodArray);
//# sourceMappingURL=assignment.js.map