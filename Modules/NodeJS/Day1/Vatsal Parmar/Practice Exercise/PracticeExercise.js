"use strict";
// Arrow Function And Template Literals
const hello = (x, y) => {
  if (x != "") {
    y.innerHTML = `Hello ${x}`;
  } else {
    alert("Please Enter Name");
  }
};

// js callbacks
function myDisplayer(some) {
  document.getElementById("ans2").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = parseInt(num1) + parseInt(num2);
  myCallback(sum);
}

// Set Time Out

function myFunction() {
  document.getElementById("ans3").innerHTML = "This is showing after 3 second";
}

// Promises

function displayer(some) {
  document.getElementById("ans4").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve("Promise Fulfilled");
  } else {
    myReject("Promise Not Fulfilled");
  }
});

myPromise.then(
  function (value) {
    displayer(value);
  },
  function (error) {
    displayer(error);
  }
);

// Async/Await

async function myDisplay() {
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve("Resolved");
  });
  document.getElementById("ans5").innerHTML = await myPromise;
}
