const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//os module
const os = require("os");
console.log("Free Memory : " + os.freemem());
console.log("Total Memory : " + os.totalmem());
console.log("Architecture : " + os.arch());
console.log("Host Name : " + os.hostname());
console.log("Platform : " + os.platform());
console.log("Release : " + os.release());
console.log("Type : " + os.type());
console.log("Up Time : " + os.uptime());
console.log("Version : " + os.version());

// registering event
eventEmitter.on("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

// calling event
eventEmitter.emit("start", 1, 100);

// remving event
eventEmitter.off("start", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

// Registering for the Event to Be Fired Only One Time Using Once
eventEmitter.once("eventOnce", () => console.log("eventOnce once fired"));
eventEmitter.emit("eventOnce");
eventEmitter.emit("eventOnce");

// Registering for the Event With Callback Parameters

eventEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`));
eventEmitter.emit("status", 200, "ok");

//Getting Listener Count
console.log(eventEmitter.listenerCount("start"));

//Getting Raw Listeners
console.log(eventEmitter.rawListeners("start"));
