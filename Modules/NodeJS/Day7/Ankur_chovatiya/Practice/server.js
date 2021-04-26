var express = require('express');
var app = express();
const middle = require('./AppMiddleware/customer');
const router = require('./Controller/customer');
const error = require('./AppMiddleware/error');
app.use(middle);
app.use(error);
app.use('/customer' , router);
app.get('/' , (req , res)=>{
    res.send('server is working fine!')
})

app.get('/customer' ,(req ,res )=>{
    res.send('we are at customers!');   
});
// app.use('/customer' , router);// order is metter when you define router
app.listen(5000 ,()=>{
    console.log('Server is runing on port 5000....');
})
