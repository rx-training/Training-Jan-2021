"use strict";
exports.__esModule = true;
exports.customer = exports.Customers = void 0;
var Customers = /** @class */ (function () {
    function Customers(CustomerID, CustomerName, CustomerPhoneNumber, CustomerAddress) {
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.CustomerPhoneNumber = CustomerPhoneNumber;
        this.CustomerAddress = CustomerAddress;
    }
    return Customers;
}());
exports.Customers = Customers;
exports.customer = [new Customers(1, "Bina", 9999999988, "Xyz Appertment,Sola")];
