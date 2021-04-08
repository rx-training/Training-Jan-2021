const http = require('http')
const url = require('url')

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
    console.log(req.url);
}).listen(3000,() => {
    console.log("server created");
})