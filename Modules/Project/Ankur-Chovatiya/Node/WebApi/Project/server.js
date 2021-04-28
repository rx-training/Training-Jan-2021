const express = require('express');
const app = express();
const router = require('./controllers/airindia')
const adminRouter = require('./adminControllers/')


app.get('/' , (req , res)=>{
    res.send('Welcome to AirIndia Airlines.');
});


app.use('/AirIndia' , router);
app.use('/admin' , adminRouter);

app.use((err , req , res , next)=>{
    if(err) throw err;
    else {
        next();
    }
});


app.listen(5000, ()=>{
    console.log('server is running on port 5000...');
});