const http = require('http')
const fs= require('fs')
const url = require('url')

http.createServer((req,res) => {
    console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        fs.readFile("./person.json",(err,data)=>{
            var myData = data.toString();
            res.write(myData);
            res.end();
        })
    } else if (req.url == '/product?param1=5&param2=10'){
        res.writeHead(200, {'Content-Type': 'text'});
        const myData = url.parse(req.url,true).query
        var p1 = parseInt(myData.param1)
        var p2 = parseInt(myData.param2)
        res.write(`sum of param1 : ${p1} and param2 : ${p2} is ${p1 + p2}  `)
        res.end();
    } else if(req.url == '/vowefind?input=rita'){
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
    } else if(req.url == '/upload') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./myhtml/index.html',(err,data) => {
            if(err){
                console.log(err);
            } else {

                res.write(data);
                if(!fs.existsSync('./download')){
                    fs.mkdirSync('./download')
                }
                fs.writeFile('./download/inde.html',data.toString(),{flag : 'w+'},(err) => {})
                res.end();
            }
        })
    }
}).listen(3001,() => {
    console.log("server created at 3001");
})