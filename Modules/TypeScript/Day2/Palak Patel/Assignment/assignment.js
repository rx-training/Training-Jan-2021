var Product = /** @class */ (function () {
    function Product(id, name, price, quant, expiry) {
        this.origenalQuant = 0;
        this.ID = id;
        this.Name = name;
        this.Price = price;
        this.Quantity = quant;
        this.Expiry = expiry;
        this.origenalQuant = quant;
    }
    Product.prototype.reorderRequest = function () {
        this.Quantity = this.Quantity + this.origenalQuant;
        console.log(this.Name + " has been restocked. Current Quantity is " + this.Quantity);
    };
    Product.prototype.order = function (q) {
        if (q > this.Quantity) {
            console.log("You cannot place more than " + this.Quantity + " items");
        }
        else {
            this.Quantity = this.Quantity - q;
            console.log("Order for " + this.Name + " has placed successfully");
            if (this.Quantity < 5) {
                this.reorderRequest();
            }
        }
    };
    return Product;
}());
var Cheese = new Product(1, "Cheese", 99, 20);
var Milk = new Product(2, "Milk", 26, 30);
var Eggs = new Product(3, "Eggs", 10, 50);
Cheese.order(2);
Milk.order(5);
Eggs.order(10);
Cheese.order(19);
// function order(orderList:string):Array<string>{
//     var OrderList = orderList.split(',');
//     return OrderList;
// }
// var Orders = order("Cheese,Milk,Eggs");
// for (var o of Orders){
//     o.order();
// }
