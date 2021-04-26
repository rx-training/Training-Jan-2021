const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Create an Event Emitter Instance and Register a Couple of Callbacks

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1);
myEmitter.on('eventOne', c2);

myEmitter.emit('eventOne');

// Registering for the Event to Be Fired Only One Time Using Once

myEmitter.once('eventOnce', () => {
    console.log('eventOnce once fired')
});

myEmitter.emit('eventOnce');

// Registering for the Event With Callback Parameters

myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));
myEmitter.emit('status', 200, 'ok');

// Unregistering Events

myEmitter.off('eventOne', c1);
myEmitter.emit('eventOne');

// Getting Listener Count

console.log(myEmitter.listenerCount('eventOne'));

// Getting Raw Listeners

console.log(myEmitter.rawListeners('eventOne'));