"use strict";
exports.__esModule = true;
exports.Order = void 0;
// Order class
var Order = /** @class */ (function () {
    function Order() {
        this.minDeliveryTime = new Date();
        this.maxDeliveryTime = new Date();
        this.validServiceTime = new Date();
    }
    // method to order food
    Order.prototype.orderFood = function (foodQty, customer, currentDate) {
        // Minimum time for delivery
        this.minDeliveryTime.setMinutes(currentDate.getMinutes() + 60);
        // Maximum time for delivery
        this.maxDeliveryTime.setMinutes(currentDate.getMinutes() + 120);
        // Maximum time for returning order
        this.validServiceTime.setHours(currentDate.getHours() + 24);
        // generate token
        var token = Math.floor(Math.random() * 1000);
        var foodArr = [];
        for (var foodIndex in foodQty) {
            if (foodQty[foodIndex][0].quantity < foodQty[foodIndex][1]) {
                console.log();
                console.log("Sorry, Food is not available");
            }
            else {
                foodQty[foodIndex][0].quantity = foodQty[foodIndex][0].quantity - foodQty[foodIndex][1];
                console.log();
                console.log("Hello " + customer.name + ", You order for " + foodQty[foodIndex][0].name + " is successfully placed. Order will reach you between " + this.minDeliveryTime + " to " + this.maxDeliveryTime + ". Food delivery service is valid upto " + this.validServiceTime + ", you can return food in between this time. Your token is " + token);
                foodArr.push(foodQty[foodIndex]);
            }
        }
        // Call Generate bill method
        this.generateBill(foodArr);
    };
    // method to generate bill
    Order.prototype.generateBill = function (foodArr) {
        console.log("------------------Your Bill-----------------------");
        var finaltotal = 0;
        for (var foodIndex in foodArr) {
            var total = foodArr[foodIndex][1] * foodArr[foodIndex][0].price;
            finaltotal += total;
            console.log();
            console.log("Food Item: " + foodArr[foodIndex][0].name + "          Quantity: " + foodArr[foodIndex][1] + "              Total: " + total);
        }
        var amountToPay = finaltotal + finaltotal * 0.1;
        console.log();
        console.log("Amount to be paid = " + amountToPay);
    };
    return Order;
}());
exports.Order = Order;
