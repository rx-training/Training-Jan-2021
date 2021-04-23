const express = require ('express');

const app = express();
const router = require('./controller/index');

app.get('/' , (req , res)=>{
    res.send('welcome to Hospital API');
});


app.use('/api' ,router);



app.listen(5000 , ()=>{
    console.log('server is running on port 5000......');
})