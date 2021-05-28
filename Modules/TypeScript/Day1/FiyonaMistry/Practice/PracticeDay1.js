"use strict";
exports.__esModule = true;
// Boolean Declaration
var a = true;
console.log(a);
// Number Declaration
var decimal = 3.4;
console.log(decimal);
// big : bigint = 100n      # not available when targeting lower than ES2020.
// Hex : number = 0xf00d
// Binary : number = 0b1010
// Octal : number = 0o744
console.log(decimal.toExponential(1)); // String output
console.log(decimal.toPrecision()); // String output
console.log(decimal.valueOf());
// String Declaration, Template String
var color = 'black';
var fname = 'Fiyona';
var sentence = "My name is " + fname + " and my favourite color is " + color;
console.log(sentence);
console.log(sentence.charAt(3)); // n
console.log(sentence.concat(color));
console.log(sentence.indexOf('name'));
console.log(sentence.replace("favourite", "FAVOURITE"));
console.log(sentence.split(" ", 3));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.charCodeAt(10));
console.log(fname.normalize());
// Array Declaration
// var list : number[] = []
var list = [1, 2, 3];
var anotherList = ['String', 'Number', 23, 4, 'Number', 474]; // Can contain values of 2 datatypes, also known as Multi Type Array
list.pop();
list.push(34);
list.shift();
// // 3 ways of fetching from an array
// 1 :
for (var x in list) {
    console.log(list[x]);
}
anotherList.sort();
// 2: 
for (var i = 0; i < anotherList.length; i++) {
    console.log(anotherList[i]);
}
// // 3 :
// for(var y of result){
//     console.log(y);
// }
var result = anotherList.filter(function (anotherList, index, array) {
    return anotherList.valueOf();
});
console.log(result);
// Unknown Type : Can contain any datatype value. Int, string, bigint, array etc
var an = 2554;
an = [1, 2, 5];
//an = 'String';
console.log(an);
// Type Assertions
var anUnknown = an.length;
console.log(anUnknown);
// Type Of
if (typeof an === 'object') {
    console.log(an); // Prints [1,2,5]
}
// Any
var anything = 87568;
console.log(anything.toFixed(2));
function getName(fname) {
    console.log("Calling " + fname + " from Function");
}
getName(fname);
