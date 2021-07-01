"use strict";
exports.__esModule = true;
var Restorent_Book = [
    {
        ID: 1,
        Customer_name: "Niraj sapra",
        Customer_Phoneno: 756756430,
        No_Customer_Person: 4,
        book_date: '2021-05-21'
    },
    {
        ID: 2,
        Customer_name: "Nita Matheta",
        Customer_Phoneno: 7568548567,
        No_Customer_Person: 6,
        book_date: '2021-05-22'
    }
];
var Book_Table_Resotrent = /** @class */ (function () {
    function Book_Table_Resotrent(CName, Cphone, Noofperson) {
        this.restornet_table_book_Customer_Name = CName;
        this.restornet_table_book_Customer_Phoneno = Cphone;
        this.restornet_table_book_No_Customer_Phoneno = Noofperson;
        this.restorent_total_book_Table = 10;
    }
    //b
    Book_Table_Resotrent.prototype.ListOfAvalible_dining_Table = function () {
        console.log(Restorent_Book.length);
        if (Restorent_Book.length == 0) {
            console.log("This time Avaliable Table Number It is 10.");
        }
        else {
            console.log("---------------List of Book---------------");
            var emptytable = this.restorent_total_book_Table - Restorent_Book.length;
            console.log("Number of Available  Table list is " + emptytable);
            console.log("---------------List of Book---------------");
        }
    };
    //c
    Book_Table_Resotrent.prototype.GetData_Per_table = function () {
        console.log("---------------Name of All Cusomer data---------------");
        for (var _i = 0, Restorent_Book_1 = Restorent_Book; _i < Restorent_Book_1.length; _i++) {
            var list = Restorent_Book_1[_i];
            console.log("Customer Name : " + list.Customer_name + " and tabel no is " + list.ID + " book date is " + list.book_date);
        }
        console.log("---------------------------------------------------");
    };
    //d
    Book_Table_Resotrent.prototype.NewBooking = function (year, month, date, hour, minute, second, millisecond) {
        var data = { ID: Restorent_Book.lenght + 1,
            Customer_name: this.restornet_table_book_Customer_Name,
            Customer_Phoneno: this.restornet_table_book_Customer_Phoneno,
            No_Customer_Person: this.restornet_table_book_No_Customer_Phoneno,
            book_date: Dates(year, month, date, hour, minute, second, millisecond)
        };
        Restorent_Book.push(data);
    };
    return Book_Table_Resotrent;
}());
function Dates(year, month, date, hour, minute, second, millisecond) {
    var dates = new Date(year, month, date, hour, minute, second, millisecond);
    var secondBetweenTwoDate = Math.abs((new Date().getTime() - dates.getTime()) / 1000);
    console.log(secondBetweenTwoDate);
    return dates;
}
var ob = new Book_Table_Resotrent('Prya', 7895461231, 5);
ob.GetData_Per_table();
ob.NewBooking(2018, 5, 5, 17, 23, 42, 11);
