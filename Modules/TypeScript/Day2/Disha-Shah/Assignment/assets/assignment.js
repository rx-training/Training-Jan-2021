var Quantity;
(function (Quantity) {
    Quantity[Quantity["minQty"] = 5] = "minQty";
})(Quantity || (Quantity = {}));
var Product = /** @class */ (function () {
    function Product(id, name, qty, price) {
        this.productId = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Product.prototype.getProduct = function () {
        console.log("ProductId = " + this.productId + ", Name = " + this.name + ", Quantity = " + this.qty + ", Price = " + this.price);
    };
    Product.prototype.buyProduct = function (qtyToBuy) {
        if (qtyToBuy > this.qty) {
            console.log("Quantity is greater than available quantity");
            this.getProduct();
        }
        else if (qtyToBuy < Quantity.minQty) {
            console.log("Quantity is less than 5. Please reorder");
            this.getProduct();
        }
        else {
            this.qty -= qtyToBuy;
            console.log("successfully placed order");
            this.getProduct();
        }
    };
    return Product;
}());
var prod1 = new Product(1, "Cutter", 50, 100);
prod1.buyProduct(200);
prod1.buyProduct(2);
prod1.buyProduct(10);
//# sourceMappingURL=assignment.js.map