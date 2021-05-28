"use strict";
exports.__esModule = true;
exports.Book = exports.AllBookings = void 0;
var AllBookings = [];
exports.AllBookings = AllBookings;
var Book = /** @class */ (function () {
    function Book(Token, CustomerId, TableId, DateOfBook) {
        this.Token = Token;
        this.CustomerId = CustomerId;
        this.TableId = TableId;
        this.DateOfBook = DateOfBook;
    }
    Book.prototype.CheckBookTime = function (date) {
        var dateNow = new Date();
        //reservation should be 6 hrs advance and should not be greater then 30
        if (date.getHours() - dateNow.getHours() > 6 || date.getDay() - dateNow.getDay() < 30) {
            console.log("Booking Completed");
            return true;
        }
        return false;
    };
    //to create a booking and add to allbooking list
    Book.prototype.Createbooking = function (param) {
        if (this.CheckBookTime(this.DateOfBook)) {
            this.Token = ++this.Token;
            AllBookings.push(param);
            console.log(this.CustomerId + " has Completed their booking with us");
            console.log("The token number is:" + this.Token);
        }
        ;
    };
    ;
    return Book;
}());
exports.Book = Book;
