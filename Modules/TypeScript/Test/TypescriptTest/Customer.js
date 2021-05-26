"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customers_1 = require("./Customers");
var Customer = /** @class */ (function () {
    function Customer(id, contact, name, address, Identity) {
        this.CustomerId = id;
        this.CustomerName = name;
        this.CustomerAddress = address;
        this.CustomerContact = contact;
        this.CustomerIdentity = Identity;
    }
    Customer.prototype.CustomerFind = function (Id, Contact) {
        if (typeof (Id) == 'number') {
            if (Customers_1.newCustomers.filter(function (s) { return s.CustomerId == Id && s.CustomerContact == Contact; })) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (typeof (Id) == 'string') {
            if (Customers_1.newCustomers.filter(function (s) { return s.CustomerName == Id && s.CustomerContact == Contact; }))
                return true;
            else
                return false;
        }
        else {
            return false;
        }
    };
    return Customer;
}());
exports.Customer = Customer;
