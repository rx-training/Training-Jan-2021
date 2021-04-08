/********************* practice 03 ***************
  Write a Nodejs server that serves as a RESTFUL API that accepts a string as an 
  input name and returns the first vowel character from the string.
 */
   const http = require('http')
   const url = require('url')
   
   http.createServer((req,res) => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const myData = url.parse(req.url,true).query
        var str =  myData.input.toLowerCase()
        var flag = 0
        for(i of str){
            if(i=='a'|| i=='e'|| i=='i'|| i=='o'|| i=='u'){
                flag = 1
                res.write(`First vowel in "${myData.input}" is ${i}`);
                break;
            }
        }
        if(flag == 0){
            res.write('vowel not found')
        }
        res.end();
       
   }).listen(3001,() => {
       console.log("server created at 3001");
   })