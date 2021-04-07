const http = require('http');
const fs = require('fs');
const url = require('url');
const queryStrig = require('querystring');

http.createServer((req , res)=>{
    if(req.url == '/'){
        res.write('hello world');
        res.end();
    }

    if(req.url == '/upload')
    {
        fs.readFile('./index.js' ,'utf8', (err , data)=>{
            if(err) throw err;
            console.log(data);
            res.write(data);
            res.end();
        })
    }




}).listen(3001)
 