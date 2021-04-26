/*function main() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
  }
  
  //main();
  
  function main1() {
    require("fs").readFile('./xyz.txt', () => {
      setTimeout(() => console.log('1'), 0);
      setImmediate(() => console.log('2'));
    });
  }
  
   //main1();
function main2() {
    setTimeout(() => console.log('1'), 50);
    process.nextTick(() => console.log('2'));
    setImmediate(() => console.log('3'));
    process.nextTick(() => console.log('4'));
  }
  
   //main2();

function main3() {
    setTimeout(() => console.log('1'), 50);
    process.nextTick(() => console.log('2'));
    setImmediate(() => console.log('3'));
    process.nextTick(() => setTimeout(() => {
      console.log('4');
    }, 1000));
  }
  
   //main3();

function main4() {
    setTimeout(() => console.log('1'), 50);
    process.nextTick(() => console.log('2'));
    setImmediate(() => console.log('3'));
    process.nextTick(() => console.log('4'));
  }
  
  // main4();
const EventEmitter = require('events')
const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}
myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.emit('eventOne');
myEmitter.emit('eventOne');


myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');

*/
const  EventEmitter = require("events");
const  eventEmitter = new EventEmitter();

const  f1 = async () => {​​​​​​​​
    let ordercake = new Promise((resolve, reject) => {​​​​​​​​
       setTimeout(() => {​​​​​​​​resolve({​​​​​​​​"Success":"True" ,"OrderCake":"Done"}​​​​​​​​);}​​​​​​​​, 5000);
    }​​​​​​​​);
    return ordercake;
}​​​​​​​​
 
const f2 = async(data , Success)=>{​​​​​​​​
    let arrangeCelebrate =  new Promise((resolve,reject) => {​​​​​​​​
        setTimeout(() => {​​​​​​​​
            resolve("Celebration Dance , Cut the Cake ,Snacks ,Movie :" + data + " :" + Success);
        }​​​​​​​​, 10000);
    }​​​​​​​​);
    return arrangeCelebrate;
}​​​​​​​​


async function fun(){​​​​​​​​
    eventEmitter.on("start",  async (data) => {​​​​​​​​
        console.log("started");
        let ordercake1 = await f1();
        console.log(ordercake1);
        let demo1 = await f2(data.venue , ordercake1.Success);
        console.log(demo1);
        
    }​​​​​​​​)
    eventEmitter.emit("start" ,{​​​​​​​​venue :'Kasindra'}​​​​​​​​);
}​​​​​​​​

ordercake.then((value)=>{​​​​​​​​
  console.log(value);
}​​​​​​​​);
arrangeCelebrate.then((value) =>{​​​​​​​​
  console.log(value);
}​​​​​​​​);
fun();

    