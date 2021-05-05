import { StringValidator1 } from "./Validation";
import { ZipCodeValidator1 } from "./ZipCodeValidator";
import { LettersOnlyValidator } from "./LettersOnlyValidator";
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s: string]: StringValidator1 } = {};
validators["ZIP code"] = new ZipCodeValidator1();
validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach((s) => {
    for (let name in validators) {
        console.log(
            `"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"
            } ${name}`
        );
    }
});
