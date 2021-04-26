// Day6

// What to Learn

// Express JS
// Advantage of Express
// Creating a WebServer with ExpressJS
// Creating a Restfull API with API (GET/PUT/POST/DELETE)
const express = require('express')
const myapp = express()

const customers = require('./json/customers.json')

// Practice Exercise

// 1.Create a Restful API, which will return Customer list in JSON format.
// http://localhost:3000/customers

myapp.all('/customers', (req, res) => {
	res.writeHead(200, {'Content-type': 'application/json'})
	res.end( JSON.stringify(customers) )
})



// 2. Create a Restful API which will search a particular record from the customer list.
// http://localhost:3000/customers/1

myapp.get('/customers/:id', (req, res) => {

	var wantedCustomer = customers.customers[req.params.id-1]

	if( wantedCustomer) {
		res.status(200).json(wantedCustomer)
		// res.writeHead(200, {'Content-type': 'application/json' })
		// res.end( JSON.stringify(wantedCustomer) )
			
	} else {
		res.status(404).send( 'Customer Not found' )		
	}
	
})




// 3. Create a Restful API which will insert a new customer object in the customer list.
// http://localhost:3000/customer
myapp.post('/customer', (req, res) => {

	var customer = {
		"address": {
			"city": "New Delhi",
			"state": "Delhi",
			"street": "4549 N Gandhi St",
			"zip": "382446"
		},
		"first_name": "Mohan",
		"id": 4,
		"last_name": "Butterburg"
	}

	var found = 0
	for (var i = 0; i < customers.customers.length; i++) {
			if( customers.customers[i].id == 4 ) {
				found = 1
				break
			} 
	}

	if(!found) {
		customers.customers.push(customer)
		res.status(200).json(customers)
	} else {
		res.status(404).send( 'Customer Already exists' )
		res.end()
	}
	
})


// 4. Create a Restful API which update a name of existing customer whose customer ID is 1
// http://locahost:3000/customer
myapp.put('/customer', (req, res) => {

	var name = 'Rohan'

	var updated = 0
	for (var i = 0; i < customers.customers.length; i++) {
			if( customers.customers[i].first_name == 'Art' ) {
				customers.customers[i].first_name = name
				updated = 1
				break
			} 
	}

	if(updated) {
		res.status(200).json(customers)
	} else {
		res.status(404).send( 'Customer Not updated' )
		res.end()
	}
	
})



// 5. Create a Restful API which will delete a record from the customer list.
// http://localhost:3000/customer
myapp.delete('/customer', (req, res) => {

	var id = 3

	var deleted = 0
	for (var i = 0; i < customers.customers.length; i++) {
			if( customers.customers[i].id == id ) {
				delete customers.customers[i]
				deleted = 1
				break
			} 
	}

	if(deleted) {
		res.status(200).json(customers)
	} else {
		res.status(404).send( 'Customer Not deleted' )
		res.end()
	}
	
})





myapp.listen('3000', () => console.log('Server started') )

