//Class example
var book = /** @class */ (function () {
    function book(id, name) {
        this.bookid = id;
        this.bookname = name;
    }
    book.prototype.Bookprice = function () {
        return 1000;
    };
    return book;
}());
var myAdd = function (x, y) {
    return x + y;
};
var note = new book(1, 'Ramyan');
console.log(note.Bookprice());
//  Functions Example
console.log(myAdd(10, 15));
