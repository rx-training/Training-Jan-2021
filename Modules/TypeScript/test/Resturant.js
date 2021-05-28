"use strict";
exports.__esModule = true;
exports.resturant = void 0;
var Resturant = /** @class */ (function () {
    function Resturant(RID, RName, RAddress, RCountry) {
        this.ResturantID = RID;
        this.ResturantName = RName;
        this.ResturantAddress = RAddress;
        this.ResturantCountry = RCountry;
    }
    return Resturant;
}());
exports.resturant = [new Resturant(1, "Honest", "Sola", "India"), new Resturant(2, "Sankalp", "Atlanta", "USA"), new Resturant(3, "Jalaram Parotha House", "Any", "Canada")];
