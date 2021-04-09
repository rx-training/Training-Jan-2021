/********************* practice 02 ***************
  Write a Nodejs server that serves as a RESTFUL API
   that takes two parameters in a GET call and produces their sum.
 */
   const http = require('http')
   const url = require('url')
   
   http.createServer((req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const myData = url.parse(req.url,true).query
        var p1 = parseInt(myData.param1)
        var p2 = parseInt(myData.param2)
        res.write(`sum of param1 : ${p1} and param2 : ${p2} is ${p1 + p2}  `)
        res.end();
       
   }).listen(3001,() => {
       console.log("server created at 3001");
   })