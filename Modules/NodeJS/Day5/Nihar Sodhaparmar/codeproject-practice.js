const EventEmitter = require('events')

// Example 1 — Create an Event Emitter Instance and Register a Couple of Callbacks
const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);

myEmitter.emit('eventOne');


// Example 2 — Registering for the Event to Be Fired Only One Time Using Once
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));

myEmitter.emit('eventOnce');
myEmitter.emit('eventOnce');


// Example 3 — Registering for the Event With Callback Parameters
myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));

myEmitter.emit('status', 200, 'ok');


//Example 4 — Unregistering Events
myEmitter.off('eventOne', c1);
myEmitter.emit('eventOne');


//Example 5 — Getting Listener Count
console.log(myEmitter.listenerCount('eventOne'));


//Example 6 — Getting Raw Listeners
console.log(myEmitter.rawListeners('eventOne'));


//Example 7 — Async Example Demo
var WithTime = require('./WithTime');
const fetch = require("node-fetch");
const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

const readFile = (url, cb) => {
  fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      cb(null, data);
    });
}

withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');

