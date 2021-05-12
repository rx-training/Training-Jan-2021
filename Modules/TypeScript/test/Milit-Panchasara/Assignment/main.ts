import {customerIdSeed,Bookings, Branches, Tables, bookingListSeed, Menu, OrderItems, Orders, orderIdSeed, Customers} from './Classes';

var branches = new Branches();
console.log();
console.log("Branches:");
branches.getAllBranches();

var tables = new Tables();
console.log();
console.log("Tables:");
tables.getAllTables(1); // get all tables for branch id 1

var customers = new Customers();
//creating customer record
customers.addCustomer({
    id: customerIdSeed,
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
var bookings = new Bookings();
console.log();
bookings.createBooking({
    id:bookingListSeed,
    tableId:1,
    branchId:1,
    customerId:1,
    startTime:new Date(2021,4,8,12,0,0),
    EndTime: new Date(2021,4,8,14,0,0),
    noOfPersons:3,
    bookingToken:1
});

// booking a table
console.log();
bookings.createBooking({
    id:bookingListSeed,
    tableId:1,
    branchId:1,
    customerId:1,
    startTime:new Date(2021,4,8,12,0,0),
    EndTime: new Date(2021,4,8,13,0,0),
    noOfPersons:3,
    bookingToken:1
});

// shows all bookings done
console.log();
console.log("Bookings:");
bookings.showBookings();

console.log();
console.log("ONLINE ORDER SYSTEM");
console.log();


var menu = new Menu();
// views restaurant menu
console.log("Menu:");
menu.viewMenu();

// new order with 3 order items , with invalid item id (order won't be placed)
var items:OrderItems[] = [
    new OrderItems(1, 5),
    new OrderItems(2, 7),
    new OrderItems(8, 20)
];

var orders = new Orders();

console.log();
// new order
orders.createOrder({
    orderId:orderIdSeed,
    orderItems: items,
    time: new Date()
});

console.log();
//displaying order if exist, error message instead
orders.viewOrder(1);

// new order with 2 valid order items
var items2:OrderItems[] = [
    new OrderItems(1, 2),
    new OrderItems(2, 2)
];

var orders = new Orders();

console.log();
// new order
orders.createOrder({
    orderId:orderIdSeed,
    orderItems: items2,
    time: new Date()
});

console.log();
//displaying order
console.log("Your Order:");
orders.viewOrder(1);
