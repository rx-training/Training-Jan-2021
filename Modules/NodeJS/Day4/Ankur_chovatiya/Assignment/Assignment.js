const http = require('http');
const fs = require('fs');

http.createServer((req , res)=>{
    if(req.url == '/' ) {
           res.write('Hello world ');
           res.end();
       }
     else if(req.url == '/person')
       {
   
           fs.readFile('./person.json','utf8', (err , data)=>{
               if(err) throw err;
               console.log(JSON.parse( data));
               let dat = JSON.parse(data);
               res.write(JSON.stringify(dat).toString());
               res.end();
           })
          
       }
    else if(req.url == '/app.js'){
        
                const queryObject = url.parse(req.url , true).query;

                let num1 = parseInt( queryObject.param1);
                let num2 = parseInt(queryObject.param2);
                let sum = num1 + num2;
                res.write(`your sum is : ${sum.toString()}`);
                 }

    else if(req.url =='/user.js' ){

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
          }
         else if(req.url == '/upload')
          {
              fs.readFile('./index.html' ,'utf8', (err , data)=>{
                  if(err) throw err;
                  console.log(data);

                  fs.writeFile('./upload.html',data,(err)=>{
                    if(err) throw err;
                  });
                  res.write(data);
                  res.end();
              })
          }

      
   }).listen(3001);