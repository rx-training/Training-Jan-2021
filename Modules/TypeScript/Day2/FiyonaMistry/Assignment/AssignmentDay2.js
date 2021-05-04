// There is a retail shop which need to manage the inventory, whenever some purchase is being made product quantity should be reduced, if quantity is less than 5 reorder request should be raised. Design an interface and classes for the same.
var RetailShop = /** @class */ (function () {
    function RetailShop(ID, Name, Decs, Comp, Qty, Price) {
        this.productId = ID;
        this.productName = Name;
        this.productDescription = Decs;
        this.productCompany = Comp;
        this.productQty = Qty;
        this.productPrice = Price;
    }
    RetailShop.prototype.productList = function (P) {
        console.log("Product List : ");
        // this.purchaseProduct(P);
        return P;
    };
    RetailShop.prototype.purchaseProduct = function (P) {
        this.productQty -= 1;
        console.log("After purchasing the product : ");
        this.reorderRequest();
        return P;
    };
    RetailShop.prototype.reorderRequest = function () {
        if (this.productQty < 5) {
            console.log("Time for re-ordering the product");
        }
    };
    return RetailShop;
}());
var Product = [
    new RetailShop(1, "Laptop", "Slim Laptop", "Hp", 7, 50000),
    new RetailShop(2, "Smart Phone", "Latest Smart Phone", "Samsung", 4, 12000)
];
for (var _i = 0, Product_1 = Product; _i < Product_1.length; _i++) {
    var p = Product_1[_i];
    console.log(p.productList(p));
    console.log(p.purchaseProduct(p));
    console.log("");
}
