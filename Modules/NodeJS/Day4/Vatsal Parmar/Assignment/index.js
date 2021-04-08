const http = require("http");
const fs = require("fs");
var portNum = 3001;
var uri = "http://localhost:" + portNum;

const server = http.createServer((req, res) => {
  var q = req.url.indexOf("?");

  //Creating URL Instance

  var myUrl = new URL(uri + req.url);

  //1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a
  //response in JSON format.
  if (myUrl.pathname === "/") {
    fs.readFile("person.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let jsonData = JSON.parse(data);
        res.write(JSON.stringify(jsonData));
      }
      res.end();
    });
  } else if (myUrl.pathname === "/product") {
    /* 2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call 
    and produces their sum. http://localhost:3001/product?param1=5&param2=10 */
    if (q != -1) {
      let product =
        parseInt(myUrl.searchParams.get("param1")) +
        parseInt(myUrl.searchParams.get("param2"));
      res.write("Sum = " + product);
    } else {
      res.write("Find Sum");
    }
    res.end();
  } else if (myUrl.pathname === "/vowefind") {
    /* 3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and 
    returns the first vowel character from the string.
    http://localhost:3001/vowefind?input=rita */
    if (q != -1) {
      let query = myUrl.searchParams.get("input");
      let arr = query.split("");
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
  } else if (myUrl.pathname === "/upload") {
    /* 4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and 
    writes them to the disk.
    for upload functionality. you need to keep one html file in your local system and then you need to
    read that file with the help of fs and send the response to the server in another folder
    http://localhost:3001/upload */
    fs.readFile("content.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        let file = data;
        const folderName = "./Uploads";
        try {
          if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
          }
        } catch (err) {
          console.log(err);
        }
        fs.writeFile("./Uploads/upload.txt", file, { flag: "w+" }, (err) => {
          if (err) {
            console.log(err);
            res.end();
          }
          res.write("File Upladed Successfully");
          res.end();
        });
      }
    });
  }
});

server.listen(portNum);
console.log("Listening on " + portNum);
