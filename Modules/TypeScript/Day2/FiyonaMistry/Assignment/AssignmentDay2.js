// There is a retail shop which need to manage the inventory, whenever some purchase is being made product quantity should be reduced, if quantity is less than 5 reorder request should be raised. Design an interface and classes for the same.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        // console.log("Product List : ");
        return P;
    };
    RetailShop.prototype.reorderRequest = function () {
        if (this.productQty < 5) {
            console.log("Time for re-ordering the product");
        }
    };
    return RetailShop;
}());
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(ID, Name, Decs, Comp, Qty, Price) {
        return _super.call(this, ID, Name, Decs, Comp, Qty, Price) || this;
    }
    return Order;
}(RetailShop));
var Product = [
    new RetailShop(1, "Laptop", "Slim Laptop", "Hp", 7, 50000),
    new RetailShop(2, "Smart Phone", "Latest Smart Phone", "Samsung", 6, 12000)
];
var order;
var order = [
    new Order(1, "Laptop", "Slim Laptop", "Hp", 1, 50000),
    new Order(2, "Smart Phone", "Latest Smart Phone", "Samsung", 2, 12000)
];
// Initial Product List
console.log("Product List : ");
for (var _i = 0, Product_1 = Product; _i < Product_1.length; _i++) {
    var product = Product_1[_i];
    console.log(product.productList(product));
}
console.log("-------------------------------------------------------------");
// Inital Order List 
console.log("Order List : ");
for (var _a = 0, order_1 = order; _a < order_1.length; _a++) {
    var ord = order_1[_a];
    console.log(ord.productList(ord));
}
console.log("-------------------------------------------------------------");
// Product List after ordering the products
console.log("Product list after ordering the products : ");
for (var _b = 0, Product_2 = Product; _b < Product_2.length; _b++) {
    var p = Product_2[_b];
    for (var _c = 0, order_2 = order; _c < order_2.length; _c++) {
        var o = order_2[_c];
        if (p.productId == o.productId) {
            p.productQty -= o.productQty;
        }
    }
    p.reorderRequest();
    console.log(p.productList(p));
}
// for(var o of order){
//     console.log(o.placeOrder(o));
// }
