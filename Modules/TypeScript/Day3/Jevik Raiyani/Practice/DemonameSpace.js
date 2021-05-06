var First;
(function (First) {
    function annualFeeCalc(feeAmt, term) {
        return feeAmt * term;
    }
    First.annualFeeCalc = annualFeeCalc;
})(First || (First = {}));
