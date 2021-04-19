const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/empcollection',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('server is connected ....'))
    .catch(err => console.log('could not connect to server .....',err))



const EmpSchema = mongoose.Schema({
    id: Number,
    name: String,
    Address: String,
    skills: [ String ],

})

const Emps =  mongoose.model('EmployeeObject ',EmpSchema)
async function insertData(){
    const emp1 = new Emps({
        id: 1,
        name: 'vaidik',
        Address: 'ahmedabad',
        skills: [ 'cricket', 'drawing' ],
    })
    const result  = await emp1.save()
    console.log(result);
}
insertData()