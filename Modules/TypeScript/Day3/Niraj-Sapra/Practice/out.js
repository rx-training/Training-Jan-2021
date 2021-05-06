var studentcals;
(function (studentcals) {
    function Anulalfee(feeammount, term) {
        return feeammount + term;
    }
    studentcals.Anulalfee = Anulalfee;
})(studentcals || (studentcals = {}));
/// <reference path = "./studentcals.ts"/>
let Totalfee = studentcals.Anulalfee(1500, 4);
console.log("Output: " + Totalfee);
