const express = require('express');
const app = express();
const Student = require('./MongoDB/schema');
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

app.use(express.json())

const mongoDB = 'mongodb://127.0.0.1/Student_Registration';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.get('/' , (req , res) => {
    Student.find((err,data)=>res.send(data))
})

app.post('/' , (req, res)=>{

    const student = new Student(req.body);

    student.save().then(result =>{
        console.log('data saved successfully');
        res.send('student added');
    }).catch(err =>{
        console.log(err);
        res.send('unable to save data')
    })
    
})

app.put('/:id',(req,res)=>{
    const ID = req.params.id;
    Student.findOneAndUpdate({id:ID},req.body).then(result=>{
        console.log(result)
    });
})

app.get('/:id' , (req , res)=>{
    const id = req.params.id;
    Student.findOne({id : id}).then(result =>{
        res.send(result)
    }).catch(err =>{
        console.log(err);
    })
    
})

app.delete('/:id' , (req , res)=>{
    const ID = req.params.id;
    Student.deleteOne({id:ID}).then(result =>{
        console.log(result)
    }).catch(err =>{
        console.log(err);
    })
    
})


app.listen(3001 ,()=>{
    console.log('server is running on port 3001....');
})