const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer(function (req, res) {
  if(req.url=='/'){
      fs.readFile('Data.json','utf8',(err,data)=>{
          if(err){res.write(err)}
          data=data.toString();
          data=JSON.parse(data);
          res.write(JSON.stringify(data));
          res.end();
      });
  }
  else if(url.parse(req.url,true).pathname=='/product'){
    const querydata = url.parse(req.url,true).query;
    const param1=querydata.param1;
    const param2=querydata.param2;
    const sum= parseInt(param1)+parseInt(param2);
    res.write("Sum of param1 and param2 is: "+sum.toString());
    res.end();
  }
  else if(url.parse(req.url,true).pathname=='/vowefind'){
    const querydata = url.parse(req.url,true).query;
    const name=querydata.input;
    for(let i=0;i<name.length;i++)
    {
        if(name[i]=='a' || name[i]=='e' || name[i]=='i' || name[i]=='o' || name[i]=='u' ||
           name[i]=='A' || name[i]=='E' || name[i]=='I' || name[i]=='O' || name[i]=='U'){
               res.write("The first vowel character from the string is: "+name[i]);
               break;
           }
    }
    res.end();
  }
  else if(url.parse(req.url,true).pathname=='/upload'){
    fs.readFile('1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.writeFile('./Files/1.html', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        return res.end();
      });
  }
}).listen(3001);