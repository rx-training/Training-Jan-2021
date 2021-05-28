"use strict";
exports.__esModule = true;
exports.TConfimation = void 0;
var TokenConfirmation = /** @class */ (function () {
    function TokenConfirmation(GuestID, GuestName, GuestPhoneNumber, TokenNumber) {
        this.GuestID = GuestID;
        this.GuestName = GuestName;
        this.GuestPhoneNumber = GuestPhoneNumber;
        this.TokenNumber = TokenNumber;
    }
    return TokenConfirmation;
}());
exports.TConfimation = [new TokenConfirmation(1, "Riya", 9999999999, 1000)];
