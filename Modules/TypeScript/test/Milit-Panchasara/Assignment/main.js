"use strict";
exports.__esModule = true;
var Classes_1 = require("./Classes");
var branches = new Classes_1.Branches();
console.log();
console.log("Branches:");
branches.getAllBranches();
var tables = new Classes_1.Tables();
console.log();
console.log("Tables:");
tables.getAllTables(1); // get all tables for branch id 1
var customers = new Classes_1.Customers();
//creating customer record
customers.addCustomer({
    id: Classes_1.customerIdSeed,
    name: 'Rohan',
    email: 'rohan@r.r',
    address: 'rajkot',
    contactNumber: '7878898978',
    isVeg: true
});
console.log();
// views all customers
console.log("Customers:");
customers.viewAllCustomers();
// booking a table
var bookings = new Classes_1.Bookings();
console.log();
bookings.createBooking({
    id: Classes_1.bookingListSeed,
    tableId: 1,
    branchId: 1,
    customerId: 1,
    startTime: new Date(2021, 4, 8, 12, 0, 0),
    EndTime: new Date(2021, 4, 8, 14, 0, 0),
    noOfPersons: 3,
    bookingToken: 1
});
// booking a table
console.log();
bookings.createBooking({
    id: Classes_1.bookingListSeed,
    tableId: 1,
    branchId: 1,
    customerId: 1,
    startTime: new Date(2021, 4, 8, 12, 0, 0),
    EndTime: new Date(2021, 4, 8, 13, 0, 0),
    noOfPersons: 3,
    bookingToken: 1
});
// shows all bookings done
console.log();
console.log("Bookings:");
bookings.showBookings();
console.log();
console.log("ONLINE ORDER SYSTEM");
console.log();
var menu = new Classes_1.Menu();
// views restaurant menu
console.log("Menu:");
menu.viewMenu();
// new order with 3 order items , with invalid item id (order won't be placed)
var items = [
    new Classes_1.OrderItems(1, 5),
    new Classes_1.OrderItems(2, 7),
    new Classes_1.OrderItems(8, 20)
];
var orders = new Classes_1.Orders();
console.log();
// new order
orders.createOrder({
    orderId: Classes_1.orderIdSeed,
    orderItems: items,
    time: new Date()
});
console.log();
//displaying order if exist, error message instead
orders.viewOrder(1);
// new order with 2 valid order items
var items2 = [
    new Classes_1.OrderItems(1, 2),
    new Classes_1.OrderItems(2, 2)
];
var orders = new Classes_1.Orders();
console.log();
// new order
orders.createOrder({
    orderId: Classes_1.orderIdSeed,
    orderItems: items2,
    time: new Date()
});
console.log();
//displaying order
console.log("Your Order:");
orders.viewOrder(1);
