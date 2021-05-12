"use strict";
exports.__esModule = true;
exports.tablesAvailable = void 0;
var TablesAvailable = /** @class */ (function () {
    function TablesAvailable(TID, TCapacity, TAvailable, RID, RName) {
        this.TableID = TID;
        this.TableCapacity = TCapacity;
        this.TableAvailable = TAvailable;
        this.ResturantID = RID;
        this.ResturantName = RName;
    }
    return TablesAvailable;
}());
exports.tablesAvailable = [new TablesAvailable(1, 4, 10, 1, "Honest"), new TablesAvailable(1, 6, 5, 1, "Honest"), new TablesAvailable(1, 10, 4, 1, "Honest")];
