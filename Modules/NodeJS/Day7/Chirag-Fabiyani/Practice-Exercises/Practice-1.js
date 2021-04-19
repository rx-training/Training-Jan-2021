const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("HII");
    next();
});

app.use('/user/:id',(req, res, next) => {
    console.log('Request Type:', req.method)
    next();
});

app.get('/user/:id', (req, res, next) => {
    console.log('USER');
    next();
});

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
});

app.get('/user/:id', function (req, res, next) {
    if (req.params.id === '0') next('route');
    else next()
  }, function (req, res, next) {
    console.log('regular')
});
  
app.get('/user/:id', function (req, res, next) {
    console.log('special')
    next()
});

function logOriginalUrl (req, res, next) {
    console.log('Hii2')
    next()
}
  
function logMethod (req, res, next) {
    console.log('Hii3')
    next()
}
  
var logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, function (req, res, next) {
    console.log('User Info')
});

app.listen(3000);