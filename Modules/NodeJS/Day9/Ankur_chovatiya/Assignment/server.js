// const error = require('node-error')
const express = require('express');
const app = express();
const joiMiddleware = require('./joi/example');
const birthdaySchema = require('./joi/exampleSchema');

const router = require('./controllers/index')

app.get('/' , (req , res)=>{
    res.send('server is working fine!');
});

// joi

app.post('/birthday' ,[express.json(),joiMiddleware(birthdaySchema)],(req , res)=>{
    res.send('your middleware successfully run! Congo');
})

app.use('/api' , router);

app.use((err , req , res , next)=>{
    err.cre
})



app.listen(5000 , ()=>{
    console.log('server is running on port 5000 .....');
});