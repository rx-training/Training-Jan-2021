// Videos 

// 1. Variables
var orderId=9001;
console.log(orderId);  // 9001

var orderId="ORD-9001";
orderId=1201;
console.log(orderId);   // 1201 

var orderId;
console.log(orderId);  // undefined

'use strict';
orderId=9001;
console.log(orderId);  //ReferenceError: orderId is not defined

var orderId=9001;
console.log(typeof orderId);  // number
// 9001.01 - number, "098bkjh" - string, true/false - boolean, {}/[]/null - object
// The type of an undefined variable is always UNDEFINED.

// 2. Functions
function abc(){
    console.log("Trial function");
}
abc();

function abc(orderId){
    console.log("Trial function:" +orderId);
}
abc('9002');  // Trial function:9002
// It doesn't matter whether the function is called first or at last, it will give the same output

function cal(qty, price){
    return qty*price;
}
var total = cal(2, 4.00);
console.log(total);  // 8
total = cal(3, 3.00);
console.log(total);  // 9

var abc = function(){
    console.log("Activate");
};
abc();  // Activate

// 3. If and Switch
var total = 99.99
var shipping = false;
if(total >= 50){
    shipping = true;
}
console.log(shipping);  // true

var orderType = "business";
var shipMethod;
if(orderType == "business"){
    shipMethod = "FedEx";
}
else if(orderType == "personal"){
    shipMethod = "UPS ground";
}
else{
    shipMethod = "UPSC";
}
console.log(shipMethod);  // FedEx

var orderType = "business";
var shipMethod;
switch(orderType){
    case "business":
        shipMethod = "FedEx";
        break;
    case "personal":
        shipMethod = "UPS ground";
        break;
    default:
        shipMethod = "UPSC";
}
console.log(shipMethod);  // FedEx

// 4. While and do while
var line = 3;
var current = 0;
while(current<line){
    console.log(current)  // 0 1 2
    current++;   // can also merge this and its above statement
}

var line = 3;
var current = 0;
do{
    console.log(current)  // 0 1 2
    current++;
}while(current<line);

// 5. For loop
var line = 3;
for(var i = 0; i < line; i++){
    console.log(i);  // 0 1 2
}

var line = 3;
for(var i = 0; i < line; i++){
    console.log(i);  // 0 1
    if(i == 1){
        break;
    }
}

var line = {
    product: 'P1',
    qty: 4,
    price: 9.5
};
for(var field in line){
    console.log(field);  // product qty price
}

var line = {
    product: 'P1',
    qty: 4,
    price: 9.5
};
for(var field in line){
    console.log(field + " : " + line[field]);  // product : P1 qty : 4 price : 9.5
}

// 6. Hoisting
abc();
function abc(){
    console.log("Output");
}

// 7. Numbers
var hex = 0x10;
console.log(hex);  // 16

var value = 3.2e4;
console.log(value);  // 32000

var value = 3.2e-4;
console.log(value);  // 0.00032

// 8. Operators
var total = 5.1 + 3.3;
console.log(total);  // 8.399999999999999   JS bug in float

var total = 5.1 + 3.3;
console.log(total.toFixed(2));  // 8.40 

var abc = "PRD" + undefined;
console.log(abc);  // PRDundefined

// "PRD" + null = PRDnull  2000 + null = 2000
// 200 + NaN = NaN   "PRD" + NaN = PRDNaN
// "300" - "200" = 100
// string - string = NaN
// 300 - undefined = NaN
// number * string = NaN

var obj = {
    valueOf: function(){return 100;}
};
var total = 300-obj;
console.log(total);  // 200