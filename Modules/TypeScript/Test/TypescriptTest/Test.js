"use strict";
exports.__esModule = true;
var Customers_1 = require("./Customers");
var BookedTable_1 = require("./BookedTable");
var Menu_1 = require("./Menu");
// Adding customer
Customers_1.newCustomers.push({ CustomerId: 3, CustomerName: 'Jitednra', CustomerAddress: "asdd", CustomerIdentity: 'asdsd', CustomerContact: '7889858585' });
// To know all customer
Customers_1.newCustomers.forEach(function (element) {
    console.log(element);
});
var book;
// to check tables availability
console.log(book.AvailableTable(BookedTable_1.BookedTable, 10, '2020-05-01'));
// To check AvailableTables
console.log(book.AvailableTables(BookedTable_1.BookedTable, '2019-05-07'));
// To Book Table
console.log(book.BookTable(5, 4, '2020-05-07'));
// for online order
//To know whole menu
Menu_1.MenuArray.forEach(function (element) {
    console.log(element);
});
//placing order
Menu_1.order.push({ ItemId: 3, ItemName: 'k', Quantity: 15 });
var mn;
console.log(mn.PlaceOrder(Menu_1.order, 2)); //  2 is customer id
