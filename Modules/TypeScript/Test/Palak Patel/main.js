"use strict";
exports.__esModule = true;
exports.OMenu = exports.OTables = exports.OCustomers = void 0;
var classes_1 = require("./classes");
exports.OCustomers = [
    new classes_1.Customers(1, "John Doe", 1234567890, "London"),
    new classes_1.Customers(2, "abd", 1234564543, "Paris"),
    new classes_1.Customers(3, "abgd", 9834723574, "Vadodara")
];
exports.OTables = new classes_1.Tables();
exports.OMenu = new classes_1.Menu();
exports.OCustomers[0].ListOfTables();
exports.OCustomers[1].TableBooking(2, new Date(2017, 4, 4, 17, 19, 0, 0));
exports.OCustomers[2].placeOrder([{ ItemName: "Dal Makhni", Quantity: 2 }, { ItemName: "Jeera Rice", Quantity: 2 }], "veg", new Date(2021, 5, 7, 17, 50, 0, 0));
exports.OCustomers[0].WatchMenu();
exports.OCustomers[1].removeBooking(2);
exports.OCustomers[2].orderPlaced(new Date(2021, 5, 7, 16, 50, 0, 0));
