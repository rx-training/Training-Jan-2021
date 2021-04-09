const http = require('http');
const fs = require('fs');
const url = require('url');
const queryStrig = require('querystring');

http.createServer((req , res)=>{
res.write('hello world \n');
console.log(req.url);
// const qs = req.url;
// console.log(queryStrig.parse(qs));
/app.js?anme = ank'

const queryObject = url.parse(req.url , true).query;

let num1 = parseInt( queryObject.param1);
let num2 = parseInt(queryObject.param2);
let sum = num1 + num2;
res.write(`your sum is : ${sum.toString()}`);


res.end();

}).listen(3001)
   

