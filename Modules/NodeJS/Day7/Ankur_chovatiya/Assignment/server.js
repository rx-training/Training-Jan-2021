const express = require('express');
const app = express();
const router = require('./controller/employee');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/employee' , router);



app.get('/' , (req , res)=>{
    res.send('server is runing fine!');
});




app.listen(5000 , ()=>{
    console.log('server is runing on port 5000.....');
})