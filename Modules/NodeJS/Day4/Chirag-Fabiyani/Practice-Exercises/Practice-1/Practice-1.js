const http = require('http');
const url = require('url');
const urljoin = require('url-join')

http.createServer(function (req, res) {
   var add= urljoin("http:",req.headers.host,req.url)
   console.log(add)
    res.end();
}).listen(3001)