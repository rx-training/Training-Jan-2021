/// <reference path="namespace1.ts"/>
/// <reference path="namespace2.ts"/>

// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s1: string]: Validation.StringValidator } = {};

validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(
            `"${s}" - ${
            validators[name].isAcceptable(s) ? "matches" : "does not match"
            } ${name}`
        );
    }
}

// command to generate js file => tsc --outFile sample.js Test.ts
// with order => tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts