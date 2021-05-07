import validate from "./StaticZipCodeValidator";
let str = ["hello","22222","21"];
str.forEach((s)=>{
    console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`);
});