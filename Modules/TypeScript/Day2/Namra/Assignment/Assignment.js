var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Declined"] = 0] = "Declined";
})(Status || (Status = {}));
//Products Daata
var Products = [
    { Id: 1, Name: "A", Quantity: 15, Price: 10 },
    { Id: 2, Name: "B", Quantity: 20, Price: 20 },
    { Id: 3, Name: "C", Quantity: 18, Price: 30 },
    { Id: 4, Name: "D", Quantity: 19, Price: 45 },
    { Id: 5, Name: "E", Quantity: 10, Price: 9 },
];
function checkAvailability(orderProduct) {
    for (var _i = 0, Products_1 = Products; _i < Products_1.length; _i++) {
        var element = Products_1[_i];
        if (element['Id'] == orderProduct['Id']) {
            if (element['Quantity'] > orderProduct['Quantity']) {
                return Status.Success;
            }
            else {
                return Status.Declined;
            }
        }
    }
    ;
    return Status.Declined;
}
var shop = /** @class */ (function () {
    function shop(name) {
        this.customerName = name;
    }
    shop.prototype.Order = function (orderData) {
        for (var _i = 0, orderData_1 = orderData; _i < orderData_1.length; _i++) {
            var item = orderData_1[_i];
            if (checkAvailability(item) == 0) {
                return "Hello, " + this.customerName + ", Quantity you are asking for product id :" + item['Id'] + " is not available enough...";
            }
        }
        var Bill = 0;
        orderData.forEach(function (element) {
            Products.forEach(function (productElement) {
                if (element['Id'] == productElement['Id']) {
                    productElement['Quantity'] -= element['Quantity'];
                    Bill += productElement['Price'] * element['Quantity'];
                }
            });
        });
        console.log('--------------------------------------------------------');
        console.log("Hello " + this.customerName + ", Your order is placed successfully and your total bill is " + Bill);
        orderData.forEach(function (element) {
            console.log(element);
        });
    };
    shop.prototype.checkProducts = function () {
        var ProductLess5 = Products.filter(function (s) { return s.Quantity <= 5; });
        if (ProductLess5.length == 0) {
            console.log("Products are in stock..");
        }
        else {
            console.log('--------------------------------------------------------');
            console.log('Products have less stock:');
            console.log();
            ProductLess5.forEach(function (element) {
                console.log(element['Name'] + " : " + [element['Quantity']]);
            });
        }
    };
    shop.prototype.DisplayProducts = function () {
        console.log('--------------------------------------------------------');
        console.log("products and its data....");
        console.log();
        Products.forEach(function (element) {
            console.log(element);
        });
    };
    return shop;
}());
// Order Data
var Orders = [
    { Id: 1, Name: "A", Quantity: 5 },
    { Id: 2, Name: "B", Quantity: 19 },
    { Id: 3, Name: "C", Quantity: 10 }
];
// Creating object of shop
var shopk = new shop('Namra');
shopk.Order(Orders);
shopk.checkProducts();
shopk.DisplayProducts();
