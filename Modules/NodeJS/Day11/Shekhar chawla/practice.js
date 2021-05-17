var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";



MongoClient.connect(url, {useUnifiedTopology:true})
    .then( client => {
        console.log('Connected to mongodb...')
        const db = client.db('day9')
        const emps = db.collection('emps')

        var employee = { name : 'a', age: 23 , gender: 'm'}
        emps.insertOne(employee)
            .then( result => console.log(result))
            .catch( error => console.log(error))
    })
    .catch( err => {
        console.log(err)
    })
// MongoClient.connect(url, { useUnifiedTopology: true } , function(err, db) {
//   if (err) throw err;
//   dbThree = db.db('dbThree')
//   employee = { name : 'a', age: 23 , gender: 'm'}

//   dbThree.collection('employees').insertOne( employee, (err, res) => {
//       if(err) throw err
//       console.log('inserted')
//       db.close()
//   })
  
// });