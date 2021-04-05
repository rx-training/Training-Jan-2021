
var arr = [1,4,6,7,0];
var str = 'hello world'


function BasicPrinting(){
    var temp;
    var arr = [1,4,6,7,0];
    var str = 'hello world' 
    var a=3,b=6;
    for (temp of arr){
        document.getElementById("print").innerHTML += temp+', ';
    }
    document.getElementById("print").innerHTML += '<br>';
    for(temp of str){
        document.getElementById("print").innerHTML += ''+temp;
    }
    document.getElementById("print").innerHTML += '<br>';
    document.getElementById("print").innerHTML += 'Addition of a & b =  '+ (a+b);
}

 arrow = () => {
    document.getElementById("arrow").innerHTML += 'this is arrow function';
}

function StrictMode(){
    'use strict';
    x = 'strict mode'
    document.getElementById("strict").innerHTML += 'error';
}


// Asynchronous
function timer(){
    setInterval(timerprint, 1000);
}

var j = 15;
function timerprint() {
    let d = new Date();
    document.getElementById("timer").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
  }

//callback
function second(){
    console.log('this will always excecute second');
}
function first(demo){
    console.log('this is always excecute first');
    demo()
}
first(second)

//promise

let myPromise = new Promise(function(resolve,reject){
    var x = 1;
    if(x==0){
        resolve(x)
    }
    else{
        reject(x)
    }
})

myPromise.then(
    resolve = (x) => console.log( x + ' is zero'),
    reject = (x) => console.log(x + ' is not zero')
)