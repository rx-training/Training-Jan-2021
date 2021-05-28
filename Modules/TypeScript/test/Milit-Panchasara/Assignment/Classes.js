"use strict";
exports.__esModule = true;
exports.Orders = exports.OrderItems = exports.orderIdSeed = exports.menuList = exports.Menu = exports.bookingList = exports.bookingListSeed = exports.Bookings = exports.customerList = exports.Customers = exports.customerIdSeed = exports.tableList = exports.Tables = exports.branchList = exports.Branches = void 0;
var Branches = /** @class */ (function () {
    function Branches() {
    }
    Branches.prototype.getAllBranches = function () {
        for (var _i = 0, branchList_1 = exports.branchList; _i < branchList_1.length; _i++) {
            var branch = branchList_1[_i];
            console.log("ID: " + branch.id + ", Address: " + branch.address + ", " + branch.city + ", " + branch.state);
        }
    };
    Branches.CheckIfBranchExists = function (branchId) {
        var res = exports.branchList.filter(function (branch, i, branchList) { return branch.id == branchId; });
        if (res.length == 0) {
            return false;
        }
        return true;
    };
    return Branches;
}());
exports.Branches = Branches;
exports.branchList = [
    {
        id: 1,
        address: 'S.G. Highway',
        city: 'Ahmedabad',
        state: 'Gujarat'
    },
    {
        id: 2,
        address: 'Borivalli',
        city: 'Mumbai',
        state: 'Maharastra'
    }
];
var Tables = /** @class */ (function () {
    function Tables() {
    }
    Tables.prototype.addTable = function (input) {
        if (!Branches.CheckIfBranchExists(input.branchId)) {
            console.log("invalid branch id.");
            return;
        }
        if (input.sittingCapacity < 1) {
            console.log("invalid sitting capacity.");
            return;
        }
        exports.tableList.push(input);
    };
    Tables.prototype.getAllTables = function (branchId) {
        if (!Branches.CheckIfBranchExists(branchId)) {
            console.log("invalid branch id.");
            return;
        }
        var res = exports.tableList.filter(function (table, i, tableList) { return table.branchId == branchId; });
        if (res.length == 0) {
            console.log('no tables found.');
            return;
        }
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var table = res_1[_i];
            console.log("ID: " + table.id + ", Branch Id: " + table.branchId + ", Dining room type: " + table.diningRoom + ", sitting capacity: " + table.sittingCapacity);
        }
    };
    Tables.prototype.GetTable = function (tableId) {
        var res = exports.tableList.filter(function (table, i, tableList) { return table.id == tableId; });
        if (res.length == 0) {
            return null;
        }
        return res[0];
    };
    Tables.CheckIfTableExists = function (tableId) {
        var res = exports.tableList.filter(function (table, i, tableList) { return table.id == tableId; });
        if (res.length == 0) {
            return false;
        }
        return true;
    };
    return Tables;
}());
exports.Tables = Tables;
exports.tableList = [
    {
        id: 1,
        branchId: 1,
        diningRoom: 'AC',
        sittingCapacity: 4
    },
    {
        id: 2,
        branchId: 2,
        diningRoom: 'Open Terrace',
        sittingCapacity: 2
    }
];
exports.customerIdSeed = 3;
var Customers = /** @class */ (function () {
    function Customers() {
    }
    Customers.prototype.addCustomer = function (input) {
        if (input.email.trim() == '' || input.contactNumber.trim() == '' || input.name.trim() == '') {
            console.log("invalid customer detail.");
            return;
        }
        exports.customerList.push(input);
        exports.customerIdSeed++;
    };
    Customers.prototype.viewAllCustomers = function () {
        for (var _i = 0, customerList_1 = exports.customerList; _i < customerList_1.length; _i++) {
            var customer = customerList_1[_i];
            console.log("ID: " + customer.id + ", Name: " + customer.name + ", Email: " + customer.email + ", Address: " + customer.address + ", Contact: " + customer.contactNumber + ", Is Veg? " + (customer.isVeg ? "YES" : "NO"));
        }
    };
    return Customers;
}());
exports.Customers = Customers;
exports.customerList = [
    {
        id: 1,
        name: 'Milit',
        email: 'milit@gmail.com',
        address: "rajkot",
        contactNumber: '7878787878',
        isVeg: true
    },
    {
        id: 2,
        name: 'John',
        email: 'john@gmail.com',
        address: "Mumbai",
        contactNumber: '4848484848',
        isVeg: false
    }
];
var Bookings = /** @class */ (function () {
    function Bookings() {
    }
    Bookings.prototype.createBooking = function (input) {
        if (!Branches.CheckIfBranchExists(input.branchId)) {
            console.log("invalid branch id.");
            return;
        }
        var tables = new Tables();
        var table = tables.GetTable(input.tableId);
        // table id must be present in tables list
        if (table == null) {
            console.log("invalid table id.");
            return;
        }
        // table should be capable to serve all persons
        if (table.sittingCapacity < input.noOfPersons) {
            console.log("Cannot book this table with " + input.noOfPersons + " persons.");
            return;
        }
        // table cant be book before less than 6 hours, and more than 1 month earlier.
        var currentDate = new Date();
        var diff = (+input.startTime - +currentDate) / (1000 * 60 * 60);
        if (currentDate.getFullYear() == input.startTime.getFullYear() && currentDate.getDate() == input.startTime.getDate() && currentDate.getMonth() == input.startTime.getMonth()) {
            if (diff < 6) {
                console.log('You have to book this table 6 hours earlier.');
                return;
            }
        }
        //
        if (diff / (24 * 30) > 1) {
            console.log('Booking date should be up to 1 month in advance.');
            return;
        }
        // table must be available in given time slot
        var bookingsDone = exports.bookingList.filter(function (booking, i, bookingList) {
            return (booking.tableId == input.tableId && ((booking.startTime > input.startTime && booking.startTime < input.EndTime) || (booking.startTime < input.startTime && booking.EndTime > input.startTime)));
        });
        if (bookingsDone.length != 0) {
            console.log('Table has been already booked in this slot.');
            return;
        }
        exports.bookingList.push(input);
        exports.bookingListSeed++;
        console.log('Table booked successfully.');
    };
    Bookings.prototype.showBookings = function () {
        for (var _i = 0, bookingList_1 = exports.bookingList; _i < bookingList_1.length; _i++) {
            var booking = bookingList_1[_i];
            console.log("ID: " + booking.id + ", Branch Id: " + booking.branchId + ", TableId: " + booking.tableId + ", Persons: " + booking.noOfPersons + ", booking time: From " + booking.startTime + " To " + booking.EndTime + ", Token : " + booking.bookingToken);
        }
    };
    return Bookings;
}());
exports.Bookings = Bookings;
exports.bookingListSeed = 2;
exports.bookingList = [
    {
        id: 1,
        tableId: 1,
        branchId: 1,
        customerId: 1,
        startTime: new Date(2021, 4, 8, 13, 0, 0),
        EndTime: new Date(2021, 4, 8, 15, 0, 0),
        noOfPersons: 3,
        bookingToken: exports.bookingListSeed
    }
];
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.viewMenu = function () {
        for (var _i = 0, menuList_1 = exports.menuList; _i < menuList_1.length; _i++) {
            var item = menuList_1[_i];
            console.log("ID: " + item.id + ", Item Name: " + item.itemName + ", Price: " + item.price + ", Is Veg?: " + (item.isVeg ? "YES" : "NO"));
        }
    };
    return Menu;
}());
exports.Menu = Menu;
exports.menuList = [
    {
        id: 1,
        itemName: 'Pizza1',
        price: 500,
        isVeg: true,
        serves: 3
    },
    {
        id: 2,
        itemName: 'Pizza2',
        price: 400,
        isVeg: true,
        serves: 2
    },
    {
        id: 3,
        itemName: 'Omlet',
        price: 90,
        isVeg: false,
        serves: 1
    }
];
exports.orderIdSeed = 1;
var OrderItems = /** @class */ (function () {
    function OrderItems(productId, quantity) {
        this.item = [productId, quantity];
    }
    return OrderItems;
}());
exports.OrderItems = OrderItems;
var Orders = /** @class */ (function () {
    function Orders() {
    }
    Orders.prototype.createOrder = function (input) {
        var _loop_1 = function (item) {
            var res = exports.menuList.filter(function (menuItem, i, menuList) { return menuItem.id == item.item[0]; });
            if (res.length == 0) {
                console.log('invalid menu item selected. Cannot place order.');
                return { value: void 0 };
            }
            res = [];
        };
        // item in order must be present in menu
        for (var _i = 0, _a = input.orderItems; _i < _a.length; _i++) {
            var item = _a[_i];
            var state_1 = _loop_1(item);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        //setting expected delivery time (30 minutes)
        input.expectedDeliveryTime = new Date(input.time.getTime() + 30 * 60000);
        orderList.push(input);
        exports.orderIdSeed++;
        console.log('order placed.');
    };
    Orders.prototype.viewOrder = function (id) {
        var results = orderList.filter(function (order, i, orderList) { return order.orderId == id; });
        if (results.length == 0) {
            console.log("no order found with this id.");
            return;
        }
        var res = results[0];
        console.log('---------------------------------');
        console.log("OrderID: " + res.orderId);
        console.log("Order Created on: " + res.time);
        console.log("Expected Time of arrival: " + res.expectedDeliveryTime);
        console.log("Order Items:");
        var totalPrice = 0;
        for (var _i = 0, _a = res.orderItems; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var _b = 0, menuList_2 = exports.menuList; _b < menuList_2.length; _b++) {
                var menuItem = menuList_2[_b];
                if (menuItem.id == item.item[0]) {
                    console.log("ID: " + menuItem.id + ", Item Name: " + menuItem.itemName + ", Price: " + menuItem.price + ", Quantity: " + item.item[1] + ", Is Veg?: " + (menuItem.isVeg ? "YES" : "NO"));
                    totalPrice += (menuItem.price * item.item[1]);
                }
            }
        }
        console.log("Total price: " + totalPrice);
        console.log('---------------------------------');
    };
    return Orders;
}());
exports.Orders = Orders;
var orderList = [];
