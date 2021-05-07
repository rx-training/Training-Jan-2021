/// <reference path="Validation.ts" />
/// <reference path="LetterOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
//lets try that
var str = ["Hello", "98052", "321"];
//validators to use
var validators = {};
validators["ZIP Code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
//lets see if each string passed in each validator
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" -" + (validators[name_1].isAcceptable(s) ? "matches" : "Does not match") + "\n        " + name_1);
    }
}
