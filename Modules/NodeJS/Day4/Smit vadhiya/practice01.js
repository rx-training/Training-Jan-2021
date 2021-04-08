/********************* practice 01 ***************
 Write a Nodejs server that listen on port 3001 and which will
  read person.json and return a response in JSON format.
 */

const http = require('http')
const fs= require('fs')

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile("./person.json",(err,data)=>{
        var myData = data.toString();
        res.write(myData);
        res.end();
    })
}).listen(3001,() => {
    console.log("server created at 3001");
})