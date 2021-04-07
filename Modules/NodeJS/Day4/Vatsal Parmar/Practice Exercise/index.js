const EventEmitter = require("events");
const emitter = new EventEmitter();
const http = require("http");

//os module
const os = require("os");
console.log("Free Memory : " + os.freemem());
console.log("Total Memory : " + os.totalmem());

// Register a listner
emitter.on("messageLogged", (arg) => {
  console.log("Listner Called", arg);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });

// Creating server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("Listning on port 3000...");
