const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // Checking for query
  var q = req.url.indexOf("?");
  if (q == -1) {
    u = req.url;
  } else {
    var u = req.url.substring(0, q);
  }

  //1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a
  //response in JSON format.
  if (u === "/") {
    fs.readFile("person.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let jsonData = JSON.parse(data);
        res.write(JSON.stringify(jsonData));
      }
      res.end();
    });
  }

  /* 2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call 
  and produces their sum. http://localhost:3001/product?param1=5&param2=10 */
  if (u === "/product") {
    if (q != -1) {
      let query = querystring.parse(req.url.slice(q + 1));
      let product = parseInt(query.param1) + parseInt(query.param2);
      res.write("Sum = " + product);
    } else {
      res.write("Find Sum");
    }
    res.end();
  }

  /* 3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and 
  returns the first vowel character from the string.
  http://localhost:3001/vowefind?input=rita */
  if (u === "/vowefind") {
    if (q != -1) {
      let query = querystring.parse(req.url.slice(q + 1));
      let arr = query.input.split("");
      let vovel;
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i] == "A" ||
          arr[i] == "a" ||
          arr[i] == "E" ||
          arr[i] == "e" ||
          arr[i] == "I" ||
          arr[i] == "i" ||
          arr[i] == "o" ||
          arr[i] == "O" ||
          arr[i] == "u" ||
          arr[i] == "U" ||
          arr[i] == " "
        ) {
          vovel = arr[i];
          break;
        } else {
          vovel = "No Vovel";
        }
      }

      res.write("first vowel character = " + vovel);
    } else {
      res.write("Find Vovel");
    }
    res.end();
  }

  /* 4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and 
  writes them to the disk. http://localhost:3001/upload */
  if (u === "/upload") {
    fs.readFile("content.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(3001);
console.log("Listening on 3001");
