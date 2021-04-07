//1.Write a Nodejs server that listen on port 3001 and which will read person.
//json and return a response in JSON format.

//2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in
//a GET call and produces their sum.
//http://localhost:3001/product?param1=5&param2=10

//3. Write a Nodejs server that serves as a RESTFUL API that accepts a
//string as an input name and returns the first vowel character from the string.

// http://localhost:3001/vowefind?input=rita

// 4. Write a Nodejs server that serve as a RESTFUL API that accepts 
// a file content and writes them to the disk.

http://localhost:3001/upload
const fs = require("fs");
const http = require("http");
const url = require("url");
const querystring = require("querystring");

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./person.json", "utf8", (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
            var x = JSON.parse(data);
            res.write(JSON.stringify(x));
            res.end();
        });
    }

    const myURL = new URL("http://localhost:3001" + req.url);
    console.log(myURL.pathname);
    if (myURL.pathname == "/product") {
        const queryObject = url.parse(req.url, true).query;
        var param1 = parseInt(queryObject.param1);
        var param2 = parseInt(queryObject.param2);
        var sum = param1 + param2;
        res.write(`Sum of ${param1} and ${param2} is : ${sum}`);
        res.end();
    }

    if (myURL.pathname == "/vowefind") {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);
        let input = queryObject.input;
        let data = input.toLowerCase().split("");
        console.log(data);
        for (i = 1; i <= data.length; i++) {
            if (
                data[i] == "a" ||
                data[i] == "e" ||
                data[i] == "i" ||
                data[i] == "o" ||
                data[i] == "u"
            ) {
                res.write(data[i]);
                console.log(data[i]);
                break;
            }
        }
        res.end();
    }

    if (myURL.pathname == "/upload") {
        fs.readFile("./index.html", "utf8", (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
            res.write(data);
            res.end();
        });    
    }

}).listen(3001, () => {
    console.log("Running Server");
});