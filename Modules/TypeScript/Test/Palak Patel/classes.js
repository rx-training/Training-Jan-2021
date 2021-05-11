"use strict";
exports.__esModule = true;
exports.Menu = exports.Tables = exports.Customers = void 0;
var app_1 = require("./app");
var main_1 = require("./main");
var Customers = /** @class */ (function () {
    function Customers(id, name, contactNo, add) {
        this.CustomerID = id,
            this.CName = name;
        this.ContactNo = contactNo;
        this.Address = add;
    }
    Customers.prototype.addNewCustomer = function (data) {
        main_1.OCustomers.push(data);
    };
    Customers.prototype.ListOfTables = function () {
        for (var _i = 0, tables_1 = app_1.tables; _i < tables_1.length; _i++) {
            var item = tables_1[_i];
            if (item.Status == true) {
                console.log("TableNo: " + item.TableID + "\tCapacity: " + item.CapacityOfTable + "\tStatus: Occupied");
            }
            else {
                console.log("TableNo: " + item.TableID + "\tCapacity: " + item.CapacityOfTable + "\tStatus: Available");
            }
        }
    };
    Customers.prototype.TableBooking = function (ID, BookingDateTime) {
        var time = new Date().getTime() - BookingDateTime.getTime();
        console.log(time);
        if (time < 21600) {
            console.log("You have book the table 6 hours before you want to dine-in");
        }
        else {
            for (var _i = 0, tables_2 = app_1.tables; _i < tables_2.length; _i++) {
                var item = tables_2[_i];
                if (item.TableID == ID && item.Status == true) {
                    console.log("This table is already booked. Please Choose another or wait for while");
                }
                else if (item.TableID == ID && item.Status == false) {
                    console.log("Your Reservation is done");
                    this.Token = this.CName + this.CustomerID;
                    item.CustToken = this.Token;
                    item.Status = true;
                }
                else {
                    console.log("There is no such table as " + ID + ". PLease try again!!");
                }
            }
        }
    };
    Customers.prototype.removeBooking = function (ID) {
        for (var _i = 0, tables_3 = app_1.tables; _i < tables_3.length; _i++) {
            var item = tables_3[_i];
            if (item.TableID == ID && item.Status == true && item.CustToken == this.Token) {
                this.Token = null;
                item.CustToken = null;
                item.Status = false;
            }
        }
    };
    Customers.prototype.WatchMenu = function () {
        for (var _i = 0, MenuItems_1 = app_1.MenuItems; _i < MenuItems_1.length; _i++) {
            var item = MenuItems_1[_i];
            console.log(item);
        }
    };
    Customers.prototype.placeOrder = function (ItemList, foodChoice, OrderTime) {
        var bill = 0;
        var foodTypes = foodChoice.split(',');
        if (this.Token != null) {
            console.log("You can not place order since you already have booked one table.");
            console.log("Please Remove booking firrst and then place the order");
        }
        else {
            if (foodTypes.length > 1) {
                for (var _i = 0, ItemList_1 = ItemList; _i < ItemList_1.length; _i++) {
                    var item = ItemList_1[_i];
                    for (var _a = 0, MenuItems_2 = app_1.MenuItems; _a < MenuItems_2.length; _a++) {
                        var i = MenuItems_2[_a];
                        if (item.ItemName == i.ItemName) {
                            bill += (i.ItemPrice * item.Quantity);
                        }
                    }
                }
            }
            else {
                for (var _b = 0, ItemList_2 = ItemList; _b < ItemList_2.length; _b++) {
                    var item = ItemList_2[_b];
                    for (var _c = 0, MenuItems_3 = app_1.MenuItems; _c < MenuItems_3.length; _c++) {
                        var i = MenuItems_3[_c];
                        if (item.ItemName == i.ItemName && foodChoice == i.FoodType) {
                            bill += (i.ItemPrice * item.Quantity);
                        }
                        else {
                            console.log(item.ItemName + " is not " + foodChoice + ", Please order it again in next order");
                        }
                    }
                }
            }
            this.Token = this.CName + this.CustomerID;
            var totalAmount = bill + (bill * 0.12);
            var arrivingTime = new Date(OrderTime.getFullYear(), OrderTime.getMonth(), OrderTime.getDate(), OrderTime.getHours() + 2, OrderTime.getMinutes(), OrderTime.getSeconds());
            console.log("Dear " + this.CName + ", Your order has been placed.");
            console.log("The token for this order is " + this.Token);
            console.log("Your Order summary is:");
            console.log("ItemName\t Quantity\t Price");
            for (var _d = 0, ItemList_3 = ItemList; _d < ItemList_3.length; _d++) {
                var item = ItemList_3[_d];
                for (var _e = 0, MenuItems_4 = app_1.MenuItems; _e < MenuItems_4.length; _e++) {
                    var i = MenuItems_4[_e];
                    if (item.ItemName == i.ItemName) {
                        console.log(item.ItemName + "\t " + item.Quantity + "\t " + i.ItemPrice);
                    }
                }
            }
            console.log("The total Amount inclusive of tax  will be " + totalAmount);
            console.log("It will arrive before " + arrivingTime);
        }
    };
    Customers.prototype.orderPlaced = function (ArrivingTime) {
        if (this.Token != null) {
            this.Token = null;
            console.log("The order for " + this.CName + " has been delivered at " + ArrivingTime);
        }
        else {
            console.log("You haven't placed any order yet!!!");
        }
    };
    return Customers;
}());
exports.Customers = Customers;
var Tables = /** @class */ (function () {
    function Tables() {
    }
    Tables.prototype.addTable = function (data) {
        app_1.tables.push(data);
    };
    return Tables;
}());
exports.Tables = Tables;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.addMenuItem = function (data) {
        app_1.MenuItems.push(data);
    };
    return Menu;
}());
exports.Menu = Menu;
