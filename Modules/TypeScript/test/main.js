"use strict";
exports.__esModule = true;
var TablesAvailable_1 = require("./TablesAvailable");
var Guest_1 = require("./Guest");
var TokenConfirmation_1 = require("./TokenConfirmation");
var OnlineBooking_1 = require("./OnlineBooking");
var HomeDeliveryCustomers_1 = require("./HomeDeliveryCustomers");
var AcceptOrders_1 = require("./AcceptOrders");
var FoodItems_1 = require("./FoodItems");
var FoodItems_2 = require("./FoodItems");
var FoodItems_3 = require("./FoodItems");
var HomeDliveryOrder_1 = require("./HomeDliveryOrder");
var Resturant_1 = require("./Resturant");
console.log("Welcome To Honest resturant situated at sola");
console.log("Enter your choice 1 for Resturant booking & 2 for Home Delivery");
var choice;
choice = 2; //For Resturant Booking
console.log("You have selected First choice : Resturant Booking");
choice = 1; //For Home Delivery Booking
console.log("You have selected First choice : Resturant Booking");
switch (choice) {
    case 1:
        console.log("Resturants list as per the Counties");
        console.log(Resturant_1.resturant);
        console.log("Guests List are:");
        console.log(Guest_1.guest);
        console.log("Tables available are:");
        console.log(TablesAvailable_1.tablesAvailable);
        console.log("Booking:");
        console.log(OnlineBooking_1.booking);
        console.log("Token Confirmation:");
        console.log(TokenConfirmation_1.TConfimation);
        break;
    case 2:
        console.log("Resturants list as per the Counties");
        console.log(Resturant_1.resturant);
        console.log("Customer List are:");
        console.log(HomeDeliveryCustomers_1.customer);
        console.log("Food Item List are as per category like vegetarian and non vegetarian:");
        console.log(FoodItems_1.FItem);
        console.log("Veg Food Items");
        console.log(FoodItems_2.VegFood);
        console.log("Non Veg Food Items");
        console.log(FoodItems_3.NonVegFood);
        console.log("Order:");
        console.log(HomeDliveryOrder_1.order);
        console.log("Accepted Orders are:");
        console.log(AcceptOrders_1.acceptedOrder);
}
