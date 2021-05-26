const express = require('express');
const app = express();
const model = require('./MongoDB/model');
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/' , (req , res) => {
    model.student.find({}).then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err);
    })
})

app.get('/show-details/:id' , (req , res) => {
    const id = req.params.id;
    console.log(id);
    model.student.findOne({studentId : id}).then((result) => {
        res.send(result)
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
})

app.post('/' , (req, res)=>{

    const student = new model.student(req.body);

    student.save().then(result =>{
        console.log('data saved successfully');
        res.send('student added');
    }).catch(err =>{
        console.log(err);
        res.send('unable to save data')
    })
    
})

app.put('/edit-student/:id' , (req , res)=>{
    const id = req.params.id;
    // console.log(req.body);
    model.student.updateOne({studentId : id},{$set: req.body}).then(result =>{
        res.send(result)
        console.log('update done');
    }).catch(err =>{
        console.log(err);
    })
    
})

app.delete('/delete-student/:id' , (req , res)=>{
    const id = req.params.id;
    model.student.deleteOne({studentId : id}).then(result =>{
        res.send(result)
    }).catch(err =>{
        console.log(err);
    })
    
})


app.listen(3001 ,()=>{
    console.log('server is running on port 3001....');
})