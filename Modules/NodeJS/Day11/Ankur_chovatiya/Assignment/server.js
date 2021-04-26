const express = require('express');
const app = express();

const router = require('./controllers/index')

app.get('/' , (req , res)=>{
    res.send('server is working fine!');
});


app.use('/api' , router);

app.use((err , req , res , next)=>{
    err.cre
});



app.listen(5000 , ()=>{
    console.log('server is running on port 5000 .....');
});