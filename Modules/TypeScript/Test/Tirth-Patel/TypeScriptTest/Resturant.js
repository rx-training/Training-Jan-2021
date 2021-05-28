"use strict";
exports.__esModule = true;
var Booking_1 = require("./Booking");
var Menu_1 = require("./Menu");
var Customer_1 = require("./Customer");
var ordering_1 = require("./ordering");
console.log("Welcome To restarutant");
var newCustomer = new Customer_1.Customers("Tirth", 1, 2020202020, "Ahmedabad");
console.log("All the tables are listed below");
console.log("Select table id you want to book as per list below");
for (var _i = 0, Tables_1 = Menu_1.Tables; _i < Tables_1.length; _i++) {
    var table = Tables_1[_i];
    console.log(table);
}
//while creating object you should pass the tableid you want to book and date for whcih you want to book
var book1 = new Booking_1.Book(null, newCustomer.CustomerId, 2, new Date("2021-09-10"));
book1.Createbooking(book1);
//checking the all the bookings 
for (var _a = 0, AllBookings_1 = Booking_1.AllBookings; _a < AllBookings_1.length; _a++) {
    var bookings = AllBookings_1[_a];
    console.log(bookings);
}
//online food ordering
//whole Veg ordering module
//first we see the list of menu items Which is for vegetarian
for (var _b = 0, VegItems_1 = Menu_1.VegItems; _b < VegItems_1.length; _b++) {
    var item = VegItems_1[_b];
    console.log(item);
}
//try to order an item
var order = new ordering_1.Orders(null, [4, 5, 1, 2], 1, null);
order.CreateOrder(order);
//Non Veg Module
for (var _c = 0, NonVegItems_1 = Menu_1.NonVegItems; _c < NonVegItems_1.length; _c++) {
    var item = NonVegItems_1[_c];
    console.log(item);
}
//try to order an item
var nonvegorder = new ordering_1.Orders(null, [6, 7, 8], 1, null);
nonvegorder.CreateOrder(nonvegorder);
//list of all orders
for (var _d = 0, ListoFOrder_1 = ordering_1.ListoFOrder; _d < ListoFOrder_1.length; _d++) {
    var orders = ListoFOrder_1[_d];
    console.log("---------------------------------------------------");
    console.log("Custoemr id:" + orders.CustomerId + " has ordered items: " + orders.items + " and bill amount is " + orders.BillAmount);
    console.log("with token number " + orders.OrderId + " will be deliverd in " + orders.Time + "minute");
    console.log("---------------------------------------------------");
}
var date1 = new Date("2021-05-07");
var date2 = new Date("2021-07-07");
var res = date1.getDay() - date2.getDay();
console.log(res);
