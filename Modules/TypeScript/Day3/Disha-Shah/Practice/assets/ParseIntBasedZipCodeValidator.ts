import validate from "./ZipCodeValidator";
let strings = ["Hello", "98052", "101"];
// Use function validate
strings.forEach((s) => {
    console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`);
});