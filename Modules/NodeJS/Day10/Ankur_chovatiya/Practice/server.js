const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const schema = require('./schema');
// const mongo = require('./mongoDB');
const User = require('./mongoDB');
const { json } = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post('/addname' , [express.json()],(req , res)=>{
    console.log((req.body));

    var myData = new User(req.body);
    // console.log(myData);
    myData.save().then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });

   User.find({'firstName':'anks'} , 'firstName lastName' , (err , result)=>{
        console.log(result);

   });
})

app.listen(5000 , ()=>{
    console.log('server is running on port 5000 ......');
})