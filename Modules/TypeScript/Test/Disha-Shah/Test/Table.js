"use strict";
exports.__esModule = true;
exports.Table = void 0;
// Table class
var Table = /** @class */ (function () {
    function Table(id, name, guests) {
        this.isBooked = false;
        this.bookingDate = new Date();
        this.id = id;
        this.name = name;
        this.guests = guests;
    }
    Table.prototype.bookTableForNextHours = function (customer, currentDate) {
        this.isBooked = true;
        var token = Math.floor(Math.random() * 1000);
        this.bookingDate.setHours(currentDate.getHours() + 6);
        console.log();
        console.log("Hello Mr./Ms. " + customer.name + ", Your table \"" + this.name + "\" of " + this.guests + " people has been successfully booked for " + this.bookingDate + ". Your token is: " + token);
    };
    Table.prototype.bookTableForNextMonth = function (customer, currentDate) {
        this.isBooked = true;
        var token = Math.floor(Math.random() * 1000);
        this.bookingDate.setMonth(currentDate.getMonth() + 1);
        console.log();
        console.log("Hello Mr./Ms. " + customer.name + ", Your table \"" + this.name + "\" of " + this.guests + " people has been successfully booked for " + this.bookingDate + ". Your token is: " + token);
    };
    return Table;
}());
exports.Table = Table;
