"use strict";
exports.__esModule = true;
exports.BookTable = void 0;
var index_1 = require("./index");
var Country = [];
var DateTime = [];
var Dinning = [];
var Coun;
var DateSet;
var BookTable = /** @class */ (function () {
    function BookTable() {
    }
    BookTable.prototype.AvailableTotal = function () {
        for (var _i = 0, data_1 = index_1.data; _i < data_1.length; _i++) {
            var val = data_1[_i];
            console.log(val);
        }
    };
    BookTable.prototype.AvailableByCountry = function (country) {
        index_1.data.filter(function (ele, i, arr) {
            if (country.toLowerCase() == ele.country.toLowerCase()) {
                Country.push(ele);
                Coun = country;
                return country.toLowerCase() == ele.country.toLowerCase();
            }
        });
        for (var _i = 0, Country_1 = Country; _i < Country_1.length; _i++) {
            var val = Country_1[_i];
            console.log(val);
        }
    };
    BookTable.prototype.AvaliableByTime = function (year, month, day, hour, minute) {
        index_1.data.filter(function (ele, i, arr) {
            if (Coun.toLowerCase() == ele.country.toLowerCase() && ele.DateTime.toString() == new Date(year, month, day, hour, minute).toString()) {
                DateTime.push(ele);
                DateSet = ele.DateTime.toString();
                return Coun.toLowerCase() == ele.country.toLowerCase() && ele.DateTime, toString() == new Date(year, month, day, hour, minute).toString();
            }
        });
        for (var _i = 0, DateTime_1 = DateTime; _i < DateTime_1.length; _i++) {
            var val = DateTime_1[_i];
            console.log(val);
        }
    };
    BookTable.prototype.AvaliableDinningRoomWithTable = function (name) {
        index_1.data.filter(function (ele, i, arr) {
            if (Coun.toLowerCase() == ele.country.toLowerCase() && ele.DateTime.toString() == DateSet && ele.name.toLowerCase() == name.toLowerCase()) {
                Dinning.push(ele);
                return Coun.toLowerCase() == ele.country.toLowerCase() &&
                    ele.DateTime.toString() == DateSet &&
                    ele.name.toLowerCase() == name.toLowerCase();
            }
        });
        for (var _i = 0, Dinning_1 = Dinning; _i < Dinning_1.length; _i++) {
            var val = Dinning_1[_i];
            console.log(val);
        }
    };
    return BookTable;
}());
exports.BookTable = BookTable;
