// Assignment:

// Collections as follows:

// Students=[{“ID”:1,”Name”:Reena”,”Address”:”Ahmedabad”,”Fees”:{“Amount:10000,”PaymentDate”:”12/12/2020”,”Status”:”true”},”Result”:{“Hindi”:80,”Eng”:70,”Math”:60,”Total”:210,”Grade”:”A”}
// },{“ID”:2,”Name”:”Rita”,”Address”:”Surat”, ”Fees”:{“Amount:12000,”PaymentDate”:”12/12/2020”,”Status”:”false”},
// ”Result”:{“Hindi”:80,”Eng”:70,”Math”:60,”Total”:210,”Grade”:”A”}
// }]

var persons = require('./json/day5_persons.json')
const express = require('express')
const app = express()

// 1. Create a RESTFUL API which will return a Studentlist.
// http://localhost:3000/students
app.all('/students', (req, res) => {
	if( persons ) {
		res.status(200).json(persons)
	} else {
		res.status(400).send('Persons not found')
	}
})



// 2. Create RESTFUL API which will return a Particular Student Record
// http://localhost:3000/students/1
app.get('/students/:id', (req, res) => {

	var found = 0
	for (var i = 0; i < persons.Students.length; i++) {
		if( persons.Students[i].ID == req.params.id ) {
			found = persons.Students[i]
			break
		}
	}

	if( found ) {
		res.status(200).json(found)
	} else {
		res.status(404).send('Student not found')
	}

})



// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are http://localhost:3000/students/1/fees
app.get('/students/:id/fees', (req, res) => {

	var found = 0
	for (var i = 0; i < persons.Students.length; i++) {
		if( persons.Students[i].ID == req.params.id ) {
			found = persons.Students[i].Fees
			break
		}
	}

	if( found ) {
		res.status(200).json(found)
	} else {
		res.status(404).send('Student not found')
	}

})



// 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are http://localhost:/3000/students/1/result
app.get('/students/:id/result', (req, res) => {

	var found = 0
	for (var i = 0; i < persons.Students.length; i++) {
		if( persons.Students[i].ID == req.params.id ) {
			found = persons.Students[i].Result
			break
		}
	}

	if( found ) {
		res.status(200).json(found)
	} else {
		res.status(404).send('Student not found')
	}

})



// 5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
app.put('/students/:id', (req, res) => {
	var englishMark = 75
	var updated = 0
	for (var i = 0; i < persons.Students.length; i++) {
		if( persons.Students[i].ID == req.params.id ) {
			persons.Students[i].Result.Eng = englishMark
			updated = 1
			break
		}
	}

	if( updated ) {
		res.status(200).json(persons.Students[i].Result)
	} else {
		res.status(404).send('Student not updated')
	}

})


app.listen(3001, () => console.log('3001 server started'))


