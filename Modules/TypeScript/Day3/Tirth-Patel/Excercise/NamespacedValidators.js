var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    //letter only verfication logic
    var LetterOnlyValidator = /** @class */ (function () {
        function LetterOnlyValidator() {
        }
        LetterOnlyValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && lettersRegexp.test(s);
        };
        return LetterOnlyValidator;
    }());
    Validation.LetterOnlyValidator = LetterOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//lets try that
var str = ["Hello", "98052", "321"];
//validators to use
var validators = {};
validators["ZIP Code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LetterOnlyValidator();
//lets see if each string passed in each validator
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" -" + (validators[name_1].isAcceptable(s) ? "matches" : "Does not match") + "\n        " + name_1);
    }
}
