
const EventEmitter = require('events');

//   1

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

//  2


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

//   3

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter);
  });
myEmitter.emit('event', 'a', 'b');

//  4

const myEmitter = new MyEmitter();
myEmitter.on('event', (a, b) => {
  console.log(a, b, this); //this is not work in arrow function
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b');

 //   5

 
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
Prints: 2

//   6

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored

//   7


class MyEmitter extends  EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
    console.error('whoops! there was an error');
  });

myEmitter.emit('error' , new Error('whoops!'));



