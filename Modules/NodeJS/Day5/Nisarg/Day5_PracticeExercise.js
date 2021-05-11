const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log("started");
});

eventEmitter.emit("start");

// RemoveListener
const ee = new EventEmitter();

const pong = () => {
    console.log("Hi Parth");
};

ee.on("ping", pong);
//ee.once("ping", pong);
ee.removeListener("ping", pong);
ee.emit("ping");
//ee.emit("ping");

//Example 1 — Create an Event Emitter Instance and Register a Couple of Callbacks
const myEmitter = new EventEmitter();
function c1() {
    console.log("an event occurred!");
}

function c2() {
    console.log("yet another event occurred!");
}

myEmitter.on("eventOne", c1); // Register for eventOne
myEmitter.on("eventOne", c2); // Register for eventOne
myEmitter.emit("eventOne");

//Example 2 — Registering for the Event to Be Fired Only One Time Using Once
myEmitter.once("eventOnce", () => console.log("eventOnce once fired"));
myEmitter.emit("eventOnce");
myEmitter.emit("eventOnce");

//Example 3 — Registering for the Event With Callback Parameters
myEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`));
myEmitter.emit("status", 200, "ok");

//Example 4 — Unregistering Events
myEmitter.off("eventOne", c1);
myEmitter.off("eventOne", c2);
myEmitter.emit("eventOne"); // noop

//Example 5 — Getting Listener Count
console.log(myEmitter.listenerCount("eventOne"));
//NOTE: If the event has been unregistered using off or removeListener method, then the count will be 0.

//Example 6 — Getting Raw Listeners
console.log(myEmitter.rawListeners("eventOne"));

//OS Module
const os = require("os");
console.log("Free Memory : " + os.freemem());
console.log("Total Memory : " + os.totalmem());
console.log(os.EOL);
console.log(os.arch());
console.log(os.constants);
console.log(os.cpus());
console.log(os.endianness());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log( os.platform());
console.log(os.type());
console.log(os.version());
console.log(os.userInfo);