// ------------------------------------ CALLBACK ------------------------------------

function squareNumber(num, callback)
{
    callback(num * num);
}

function print(result)
{
    console.log(result);
}

squareNumber(5, print);

setTimeout(function(){squareNumber(10, print)}, 3000);


// ------------------------------------ PROMISE ------------------------------------

let successPromise = new Promise(function(resolve, reject){
    setTimeout(() => resolve('done!!!'), 2000);
});

successPromise.then(
    result => alert(result),
    error => alert(error)
)

let errorPromise = new Promise(function(resolve, reject){
    setTimeout(() => reject('Error!!!'), 1000);
}).finally(() => alert('Promise Ready'));

errorPromise.then(
    result => alert(result),
    err => alert(err)
)

// PROMISE CHAINING
new Promise( (resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
}).then((result) => {
    alert(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 2000);
    });
}).then((result) => {
    alert(result);
})


// ------------------------------------ ASYNC/AWAIT ------------------------------------

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
  
    if (response.status == 200) {
      let json = await response.json(); // (3)
      return json;
    }
  
    throw new Error(response.status);
  }
  
  //loadJson('no-such-user.json')
    //.catch(alert); // Error: 404 (4)


// ------------------------------------ TIMERS ------------------------------------

setTimeout(function(){squareNumber(10, print)}, 3000);

var intervalVar = setInterval(myTimer, 1000);

function myTimer()
{
    console.log(new Date());
}

setTimeout(function(){clearInterval(intervalVar)}, 10000);


// ------------------------------------ CLOUSERS ------------------------------------

var add = (function(){
    var counter = 0;
    return function(){ counter += 1; return counter};
})();

console.log('counter : ' + add());
console.log('counter : ' + add());
console.log('counter : ' + add());