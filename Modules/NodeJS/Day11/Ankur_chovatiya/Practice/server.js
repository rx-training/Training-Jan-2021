const express = require('express');
const app = express();
const model = require('./MongoDB/Models');

app.get('/',(req , res )=>{
    res.send('Hello developers!');
});

// use postman to get post request

app.post('/register' , [express.json()], async (req , res)=>{

    let user = new model.User(req.body);
    let result = await user.save();
    res.send('You are register successfully!');
});

// add data into database

app.post('/addStudent' , [express.json()] ,async (req , res)=>{

    let student = new model.Student(req.body);
    let result = await student.save();
    res.send('Student added successfully!');

});


//get the data from database

app.get('/getStudent' , async(req , res)=>{
    model.Student.find().select().exec((err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

// update the data into database

app.put('/studentUpdate', [express.json()] , async (req , res)=>{
    let stuName = req.body.stuname;
    let rollNo = req.body.rollNo;
    console.log(rollNo);
    model.Student.updateOne({StuName:stuName},[
        {$set :{StuRollNo:rollNo}}
    ]).exec((err , result)=>{
        if(err) throw err;
        res.send('Your data is succesfully updated');
    });
    
});

// delete the data from database

app.delete('/userDelete' ,[express.json()] , async (req , res)=>{

    let name = req.body.name;
    model.User.deleteOne({name:name}).exec((err , result)=>{
        if(err) throw err;
        console.log(result);
        res.send('your record succesfully deleted');
    });
});


app.listen(5000 , ()=>{
    console.log('Server is running on port 5000.....');
});