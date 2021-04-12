const EventEmitter = require('events');
const http = require('http')
const fs = require('fs')

const myEvent = new EventEmitter();

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        fs.readFile('./homePage.html',(err,data) => {
            if(err){
                console.log(err);
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.end(data)
            }
        })
    }  else if(req.url == '/exam'){
        res.write("hello1")        
        res.write("hello")
        setTimeout(() => {
            res.writeHead(302, {'Location': 'http://localhost:3000/hemo' })
            res.end()
        },3000)
    } else if( req.url = '/hemo'){
        res.end("hello")
    }
})

server.listen(3000,() => {
    console.log('server start at 3000...');
})
/*
console.log(myEvent);

const exam = () => {
    let examPromise = new Promise((resolve,reject) => {
        
    })
}*/
