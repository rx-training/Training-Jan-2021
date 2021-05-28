

console.log("===============Exponential Method====================");
var digit: number=123456789;
console.log("Exponential with Defalt :-"+digit.toExponential());
console.log("Exponential with one digit :-"+digit.toExponential(1));
console.log("Exponential with two digit :-"+digit.toExponential(2));
console.log("Exponential with three digit :-"+digit.toExponential(3));

console.log("==================toFixed Method======================");
var Digit1: number=7.888954;
console.log("Fixed with default"+ Digit1.toFixed());
console.log("Fixed with one digit"+ Digit1.toFixed(1));
console.log("Fixed with two digit"+ Digit1.toFixed(2));
console.log("Fixed with three digit"+ Digit1.toFixed(3));
console.log("Fixed with four digit"+ Digit1.toFixed(4));

console.log("======================toLocalString Method==================");
var Digit2: number=10667.987;
console.log("LocalString Method with no Argument :- "+Digit2.toLocaleString());
console.log("LocalString Method with  Argument(German) :- "+Digit2.toLocaleString("de-DE"));
//console.log("LocalString Method with  Argument(Arebic) :- "+Digit2.toLocaleString("ar-EG"));


console.log("======================toPrecision Method==================");
var digit3:number =10.78948;
console.log("Precision with default  :- "+ digit3.toPrecision());
console.log("Precision with One Digit :- "+ digit3.toPrecision(1));
console.log("Precision with Two  Digit :- "+ digit3.toPrecision(2));
console.log("Precision with Three  Digit :- "+ digit3.toPrecision(3));


console.log("========================toString Method==============")
var Digit4: number=123;
console.log("Tostring With Defaut :- "+Digit4.toString());
console.log("Tostring  Method :- "+Digit4.toString(2));
console.log("Tostring  Method :- "+Digit4.toString(4));
console.log("Tostring  Method :- "+Digit4.toString(8));
console.log("Tostring  Method :- "+Digit4.toString(16));
console.log("Tostring  Method :- "+Digit4.toString(32));


console.log("========================valueOf Method==============")
var mynumber=new Number(1230);
console.log("MyNumber Value Before Converson :- "+ mynumber);
console.log("Type Of MyNumber :- "+ typeof mynumber);



var convertion=mynumber.valueOf()
console.log("After Convertion Object Type to Primitive type :- "+ convertion);
console.log("the Type of My Number After Convertion Primitive type :- "+ typeof convertion);


















