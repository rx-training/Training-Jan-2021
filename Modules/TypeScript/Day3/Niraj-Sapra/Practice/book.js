"use strict";
exports.__esModule = true;
exports.addToZ = exports.book = void 0;
//Class example
var book = /** @class */ (function () {
    function book(id, name) {
        this.bookid = id;
        this.bookname = name;
    }
    book.prototype.bookdisplay = function () {
        console.log(this.bookid + " and book name is " + this.bookname);
    };
    book.prototype.Bookprice = function () {
        return 1000;
    };
    return book;
}());
exports.book = book;
var z = 100;
function addToZ(x, y) {
    console.log(x + y + z);
}
exports.addToZ = addToZ;
var myAdd = function (x, y) {
    return x + y;
};
var note = new book(1, 'Ramyan');
console.log(note.Bookprice());
//  Functions Example
console.log(myAdd(10, 15));
addToZ(25, 10);
