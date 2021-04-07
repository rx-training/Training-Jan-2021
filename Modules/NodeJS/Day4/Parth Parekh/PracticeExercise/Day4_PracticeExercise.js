//Path Module
const path = require("path");
var pathObject = path.parse(__filename);
console.log(pathObject);

//OS Module
const os = require("os");
console.log("Free Memory : " + os.freemem());
console.log("Total Memory : " + os.totalmem());

//File System Module
const fs = require("fs");
fs.readdir("./", (err, result) => {
    if (err) {
        console.log(err);
    } else console.log(result);
});

//Event Module
const EventEmitter = require("events");
const emitter = new EventEmitter();
// Register a Listener
emitter.on("messageLogged", (arg) => {
    console.log("Listener Called", arg);
});
//Raise an event
emitter.emit("messageLogged", { id: 1, url: "https://"  , message :'Hi there'});

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit("messageLogged", { id: 1, url: "https://"});
    }
}
module.exports = Logger;

//Http Module
const http = require("http");
http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.write(' Hello parth');
        res.end();
    }
    if( req.url === '/api/courses'){
        res.write(JSON.stringify([ {'Name':'Parth'}]));
        res.end();
    }
    

}).listen(3000, () => {
    console.log("server running");
});