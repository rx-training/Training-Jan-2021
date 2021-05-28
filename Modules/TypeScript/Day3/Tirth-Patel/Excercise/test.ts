/// <reference path="Validation.ts" />
/// <reference path="LetterOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
//lets try that

var  str = ["Hello","98052","321"];

//validators to use
let validators :{[s:string]:Validation.StringValidator} ={};
validators["ZIP Code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

//lets see if each string passed in each validator

for(let s of str){
    for(let name in validators){
        console.log(`"${s}" -${validators[name].isAcceptable(s) ? "matches":"Does not match"}
        ${name}`);
    }
}