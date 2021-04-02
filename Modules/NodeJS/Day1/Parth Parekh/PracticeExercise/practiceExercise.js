// Arrow function
hello = () => {
    console.log("hello world");
};
hello();

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

let person = "Mike";
let age = 28;

//Template literals
function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a "
    let str2 = strings[2]; // "."

    let ageStr;
    if (ageExp > 99) {
        ageStr = "centenarian";
    } else {
        ageStr = "youngster";
    }

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.

("use strict");
y = 12;
console.log(y);

//Callback
myDisplayer = (some) => {
    console.log(some);
};
myCalculator = (num1, num2, myCallback) => {
    let sum = num1 + num2;
    myCallback(sum);
};
myCalculator(5, 5, myDisplayer);

// Asynchronous JavaScript
setTimeout(() => {
    console.log("I like NodeJS !!");
}, 3000);

// JavaScript Promises
function myDisplay(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    fun = (value) => {
        console.log(value);
    }, //with arror function
    err = (error) => {
        console.log(error);
    }
);
// myPromise.then(
//   function(value) { console.log(value);},
//   function(error) { console.log(error);}
// );

/* Async/Await */
async function Display() {
    let myPromise = new Promise(function (myResolve, myReject) {
        myResolve("I like React too !!");
    });
    console.log( await myPromise);
}
Display();
