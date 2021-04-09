const http = require('http');
const fs = require('fs'); 
 

 http.createServer((req , res)=>{
 if(req.url == '/' ) {
        res.write('Hello world ');
        res.end();
    }
    if(req.url == '/person')
    {

        fs.readFile('./person.json','utf8', (err , data)=>{
            if(err) throw err;
            console.log(JSON.parse( data));
            let dat = JSON.parse(data);
            res.write(JSON.stringify(dat).toString());
            res.end();
        })
       
    }
   
}).listen(3001);