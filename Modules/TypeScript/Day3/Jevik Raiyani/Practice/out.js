var First;
(function (First) {
    function annualFeeCalc(feeAmt, term) {
        return feeAmt * term;
    }
    First.annualFeeCalc = annualFeeCalc;
})(First || (First = {}));
//namespace
///<reference path = "DemonameSpace.ts" />
let totalFees = First.annualFeeCalc(12, 544);
console.log(totalFees);
