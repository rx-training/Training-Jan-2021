"use strict";
exports.__esModule = true;
exports.acceptedOrder = void 0;
var AcceptOrders = /** @class */ (function () {
    function AcceptOrders(CustomerID, CustomerName, OrderID, Acceptted, TokenNumber, OrderDeliverInTime) {
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.OrderID = OrderID;
        this.Acceptted = Acceptted;
        this.TokenNumber = TokenNumber;
        this.OrderDeliverInTime = OrderDeliverInTime;
    }
    return AcceptOrders;
}());
exports.acceptedOrder = [new AcceptOrders(1, "Bina", 1, "Accepted", 10001, "60 minutes")];
