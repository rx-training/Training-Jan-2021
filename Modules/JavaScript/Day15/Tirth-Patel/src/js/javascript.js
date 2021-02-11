// function f1(){
// alert('welcome to JS');
// console.log('button clicked');
// }
// var order = 1000;
// console.log(order);
// order = 'hello;'
// console.log(typeof(order));
// 'use strict';
// vari = 10000;
// console.log(vari)

function greater() {
    var max = 0;
    var num1 = prompt("enter 1st number");
    var num2 = prompt("enter 2nd number");
    var num3 = prompt("enter 3rd number");
    // if(num1 ==' ' || num3 ==' ' || num2 ==' ' ){
    //     alert("enter all 3 numbers");

    // }

    if (num1 > num2) {
        if (num1 > num3) {
            var max = num1;
        }
        else {
            var max = num3;
        }
    }
    else {
        if (num2 > num3) {
            var max = num2;
        }
        else {
            var max = num3;
        }

    }

    document.getElementById("max").innerHTML = "max number is " + max;

}
function city() {
    var name = ['ahnmedabad', 'surat', 'rajkot ', ' delhi ', 'mumbai']
    var i = 0;
    for (i = 0; i < 5; i++) {
        alert(name[i]);
    }
}
// assignmet function
function calculate() {
    var result = 0;
    var numb1 = document.getElementById('number1').value;
    var numb2 = document.getElementById('number2').value;
    numb1=parseInt(numb1);
    numb2=parseInt(numb2);
    let opr = document.getElementsByName('op');
    let operator1;

    for (i in opr) {
        if (opr[i].checked) {
            operator1 = opr[i].value;
        }
    }

    switch (operator1) {
        case "addition":
            result = numb1 + numb2;
            console.log(result);
            break;
        case "Subtraction":
            result = numb1 - numb2;
            console.log(result);
            break;
        case "multiplication":
            result = numb1 * numb2;
            console.log(result);
            break;
        case "divison":
            result = numb1 / numb2;
            console.log(result);
            break;
        default:
        console.log('Enter valid input');


    }
    console.log(result);
    document.getElementById('ans').innerHTML = result;

}
 function reset(){
     document.getElementById('add').checked =false;
     alert('reset');
     console.log('reset');
 }