"use strict";
exports.__esModule = true;
exports.BookTable = void 0;
var BookedTable_1 = require("./BookedTable");
var Tables_1 = require("./Tables");
var BookTable = /** @class */ (function () {
    function BookTable() {
    }
    BookTable.prototype.AvailableTable = function (BookedTable, TableId, VDate) {
        for (var _i = 0, BookedTable_2 = BookedTable; _i < BookedTable_2.length; _i++) {
            var item = BookedTable_2[_i];
            if (item.tableId == TableId && item.BDate.getDate() == VDate.getDate() && item.BDate.getMonth() == VDate.getMonth() && item.Bdate.getFullYear() == VDate.getFullYear()) {
                return true;
            }
        }
        return false;
    };
    BookTable.prototype.BookTable = function (TableId, CustomerId, VDate) {
        if (this.AvailableTable(BookedTable_1.BookedTable, TableId, new Date(VDate))) {
            BookedTable_1.BookedTable.push({ tableId: TableId, CustomerId: CustomerId, BDate: new Date(VDate) });
            return "Table is booked..";
        }
        else {
            return "Table is already booked...";
        }
    };
    BookTable.prototype.AvailableTables = function (BookedTable, VDate) {
        var avTables = [{ TableId: 0, TableSize: 0 }];
        for (var _i = 0, Tables_2 = Tables_1.Tables; _i < Tables_2.length; _i++) {
            var tb = Tables_2[_i];
            if (!this.AvailableTable(BookedTable, tb.TableId, new Date(VDate))) {
                avTables.push(tb);
            }
        }
        return avTables;
    };
    return BookTable;
}());
exports.BookTable = BookTable;
var tb = new BookTable();
console.log(tb.AvailableTable(BookedTable_1.BookedTable, 1, new Date('2019-05-07')));
console.log(tb.AvailableTables(BookedTable_1.BookedTable, '2019-05-07'));
// console.log(tb.BookTable(1,1,'2019-05-07'));
