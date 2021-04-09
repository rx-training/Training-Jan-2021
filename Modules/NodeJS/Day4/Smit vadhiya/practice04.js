
/********************* practice 04 ***************
 Write a Nodejs server that serve as a RESTFUL API that 
 accepts a file content and writes them to the disk.
 */
const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == '/upload'){
        fs.readFile('./myhtml/index.html',(err,data) => {
            res.write(data);
            res.end();
        })
    }
    

    
}).listen(3001,() => {
    console.log("server created at 3001");
})