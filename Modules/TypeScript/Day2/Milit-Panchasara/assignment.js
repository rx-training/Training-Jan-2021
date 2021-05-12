var Inventory = /** @class */ (function () {
    function Inventory(productId, productName, price, quantity) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }
    Inventory.prototype.viewInventory = function () {
        console.log("Product ID: " + this.productId + ", Product Name: " + this.productName + ", Price: " + this.price + ", Quantity: " + this.quantity);
    };
    Inventory.prototype.checkStock = function () {
        if (this.quantity < 5) {
            this.sendOrderToFillInventory(this.productId, 10);
        }
    };
    Inventory.prototype.sendOrderToFillInventory = function (productId, reOrderQuantity) {
        console.log("Reordered the product with id " + productId);
        for (var index in inventory) {
            if (inventory[index].productId == productId) {
                inventory[index].quantity += reOrderQuantity;
                break;
            }
        }
    };
    return Inventory;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem(productId, quantity) {
        this.item = [productId, quantity];
    }
    return OrderItem;
}());
var Order = /** @class */ (function () {
    function Order(orderId, orderItems) {
        this.orderId = orderId;
        this.orderItems = orderItems;
        orderIdSeed++;
        this.isPlaced = this.checkValidity();
        if (this.isPlaced)
            this.deductQuantityFromInventory();
    }
    Order.prototype.viewOrder = function () {
        console.log('---------------------------------');
        console.log("OrderID: " + this.orderId);
        console.log("Order Items:");
        for (var _i = 0, _a = this.orderItems; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("Product ID: " + item.item[0] + ", Quantity: " + item.item[1]);
        }
        console.log('---------------------------------');
    };
    Order.prototype.checkValidity = function () {
        var invalidOrder = false;
        var itemFound = false;
        for (var _i = 0, _a = this.orderItems; _i < _a.length; _i++) {
            var item = _a[_i];
            itemFound = false;
            for (var index in inventory) {
                if (inventory[index].productId == item.item[0]) {
                    if (inventory[index].quantity < item.item[1]) {
                        invalidOrder = true;
                        break;
                    }
                    itemFound = true;
                }
            }
            if (!itemFound || invalidOrder) {
                return false;
            }
        }
        return true;
    };
    Order.prototype.deductQuantityFromInventory = function () {
        for (var _i = 0, _a = this.orderItems; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var index in inventory) {
                if (inventory[index].productId == item.item[0]) {
                    inventory[index].quantity -= item.item[1];
                }
            }
        }
    };
    return Order;
}());
// seeders for IDs
var productIdSeed = 5;
var orderIdSeed = 1;
// initial inventory
var inventory = [
    new Inventory(1, 'toy1', 500, 20),
    new Inventory(2, 'toy2', 600, 10),
    new Inventory(3, 'toy3', 700, 15),
    new Inventory(4, 'toy4', 800, 18)
];
// checking initial stock and displaying inventory items
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var product = inventory_1[_i];
    product.checkStock();
    product.viewInventory();
}
// new list with 3 order items
var orderItems = [
    new OrderItem(1, 5),
    new OrderItem(2, 7),
    new OrderItem(3, 1)
];
// new order with 3 order items
var order = new Order(orderIdSeed, orderItems);
//displaying order
order.viewOrder();
// if order is valid: isPlaced = true
console.log("Is order placed: " + order.isPlaced);
// checking stock after order and displaying inventory items
for (var _a = 0, inventory_2 = inventory; _a < inventory_2.length; _a++) {
    var product = inventory_2[_a];
    product.checkStock();
    product.viewInventory();
}
// new order with 3 order items ,order item quantity exceeding available inventory quantity (order won't be placed)
var orderItems2 = [
    new OrderItem(1, 5),
    new OrderItem(2, 7),
    new OrderItem(3, 20)
];
// new order with 3 order items
var order2 = new Order(orderIdSeed, orderItems2);
//displaying order
order2.viewOrder();
// if order is invalid: isPlaced = false
console.log("Is order placed: " + order2.isPlaced);
// checking stock after order and displaying inventory items
for (var _b = 0, inventory_3 = inventory; _b < inventory_3.length; _b++) {
    var product = inventory_3[_b];
    product.checkStock();
    product.viewInventory();
}
