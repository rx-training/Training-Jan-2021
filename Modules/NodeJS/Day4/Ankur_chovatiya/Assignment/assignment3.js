const http = require('http');
const fs = require('fs');
const url = require('url');
const queryStrig = require('querystring');

http.createServer((req , res)=>{
res.write('hello world \n');
console.log(req.url);
// const qs = req.url;
// console.log(queryStrig.parse(qs));

const queryObject = url.parse(req.url , true).query;

let name =  queryObject.input;
let nam = name.toLowerCase();
for(var i =0; i <name.length; i++ ){
    if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u'){
        res.write(`your name's first vowel character is : ${name[i]}`);
        break;
    }
}




res.end();

}).listen(3001)
   