"use strict";
exports.__esModule = true;
exports.guest = void 0;
var Guest = /** @class */ (function () {
    function Guest(GID, GName, GNumber) {
        this.GuestID = GID;
        this.GuestName = GName;
        this.GuestPhoneNumber = GNumber;
    }
    return Guest;
}());
exports.guest = [new Guest(1, "Riya", 9999999999)];
