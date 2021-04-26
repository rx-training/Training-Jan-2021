const express = require('express');
const app = express();
const userRouter = require('./user/user');
const studentRouter = require('./student/student');


app.get('/' , (req , res)=>{
    res.send('server is runing fine!');
});
app.use('/user' ,userRouter );
app.use('/student',studentRouter);


app.listen(5000 , ()=>{
    console.log('server is runing on port 5000 ...');
})