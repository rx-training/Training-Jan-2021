var http = require('http');
var path = require('path');
var os = require('os');
var EventEmitter = require('events');

// OS Module
console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);


// Events Module
// require logger
var Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (eventArg) => {
    console.log('Listener Called' , eventArg);
})

logger.log('message');


http.createServer((req, res) => {
    console.log(req.url);
    
    if(req.url == '/'){
        res.write('Hello World!');
        res.end();
    }

}).listen(3000, () => {
    console.log('Server Started On Port 3000...');
});