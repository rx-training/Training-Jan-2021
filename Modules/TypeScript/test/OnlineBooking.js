"use strict";
exports.__esModule = true;
exports.booking = void 0;
var OnlineBooking = /** @class */ (function () {
    function OnlineBooking(GID, GName, GNumber, TID, TCapacity, BID, BDate, TAavailable, RID, RNAme, NoGuests, CDate) {
        this.GuestID = GID;
        this.GuestName = GName;
        this.GuestPhoneNumber = GNumber;
        this.TableID = TID;
        this.TableCapacity = TCapacity;
        this.BookID = BID;
        this.BookDateTime = BDate;
        this.TableAvailable = this.TableAvailable;
        this.ResturantID = RID;
        this.ResturantName = RNAme;
        this.NoOfGuest = NoGuests;
        this.CurrentBookDateTime = CDate;
    }
    return OnlineBooking;
}());
exports.booking = [new OnlineBooking(1, "Riya", 999999999, 1, 4, 1, new Date(2021, 5, 7, 10, 4, 5, 6), 1, 1, "Honest", 2, new Date(2021, 5, 7, 4, 4, 5, 6))];
