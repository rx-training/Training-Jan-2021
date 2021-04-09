const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {

    let q = url.parse(req.url, true);
    let pathName = q.pathname;
    console.log(pathName);
    let queryData = q.query;
    console.log(queryData);
    
    // Practice1: Write a Nodejs server that listen on port 3001 and which will read person.json and
    // return a response in JSON format. (url: http://localhost:3001)
    if(pathName == '/'){
        fs.readFile('./person.json', (err, data) => {
            if(err){
                console.log(err);
                res.write('Error Occured!!!');
                res.end();
                return;
            }
    
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(data.toString()));
            res.end();
        });

    } // Practice2: Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and
      // produces their sum. (url: http://localhost:3001/product?param1=5&param2=10)
    else if(pathName == '/product'){
        
        res.setHeader('Content-Type', 'text/html');
        let result = parseFloat(queryData.param1) + parseFloat(queryData.param2);
        res.write(result.toString());
        res.end();

    } // Practice3: Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and 
      // returns the first vowel character from the string. (url:  http://localhost:3001/vowefind?input=nihar)
    else if(pathName == '/vowefind'){
        res.setHeader('Content-Type', 'text/html');
        let name = queryData.input;

        let vowels = ['a', 'e', 'i', 'o', 'u'];

        for(let letter of name.toLowerCase()){
            if(vowels.includes(letter)){
                res.write(letter);
                res.end();
                return;
            }
        }

    } // Practice4: Write a Nodejs server that serve as a RESTFUL API that accepts a file content and 
      // writes them to the disk. (url: http://localhost:3001/upload?filename=demo.html)
    else if(pathName == '/upload')
    {
        res.setHeader('Content-Type', 'text/html');

        let filename = queryData.filename;

        fs.readFile(`./${filename}`, (err, data) => {
            if(err){
                console.log(err);
                res.write('Error Occured!!!');
                res.end();
                return;
            }

            async function createFolderAndWriteFile(){
                
                await fs.mkdir('./practiceFolder', (err) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                });

                await fs.writeFile('./practiceFolder/demo.html', data.toString(), (err) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                });
            }
            
            createFolderAndWriteFile();

            res.write(data.toString());
            res.end();
            
        });
    }
    else
    {
        res.write('Provide Valid Url...');
        res.end();

    }
       
}).listen(3001, () => {
    console.log('Server listening on port 3001...');
});