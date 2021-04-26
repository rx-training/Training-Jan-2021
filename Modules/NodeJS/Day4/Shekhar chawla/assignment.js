// Assignment:
const http = require('http')
const fs = require('fs')

const url = require('url')

const server = http.createServer( (req,res) => {
	// 1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in JSON format.
	if(req.url === '/persons' && req.method === 'GET'){
		const persons = require('./person')
		res.writeHead(200, {'Content-type': 'application/json'})
		res.end(JSON.stringify(persons))
	}



	// 2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum.
	// http://localhost:3001/product?param1=5&param2=10

	else if( req.url.match(/\/product\?param1=[0-9]*&param2=[0-9]*/) ){
		const myurl = new URL('http://localhost:3001'+req.url)	
		const myParams = myurl.searchParams

		const param1 = myParams.get('param1')
		const param2 = myParams.get('param2')
		const result = parseInt(param1) + parseInt(param2)

		
		res.writeHead(200, {'Content-type': 'text/html'})
		res.end('<h1>Result :</h1>'+result)
	}


	
	// 3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string.
	//  http://localhost:3001/vowelfind?input=rita

	else if( req.url.match(/\/vowelfind\?input=[a-z]*/) ){

		const myurl = new URL('http://localhost:3001'+req.url)	
		const myParams = myurl.searchParams
		
		const input = myParams.get('input')
		const vowels = ['a' , 'e' , 'i' ,'o' , 'u']
		var resultVowel = null

		if(input){
			for (var i = 0; i < input.length; i++) {
				for (var j = 0; j < vowels.length; j++) {
					if(input[i]===vowels[j]){
						resultVowel = input[i]
						break	
					}
				}
				if(resultVowel){
					break
				}
			}
		}
		res.writeHead(200, {'Content-type': 'text/html'})
		
		res.end('<h1>First Vowel : </h1>'+ resultVowel)
	}
		
	// 4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.
	// http://localhost:3001/upload

	else if (req.url.match(/\/upload\/[a-z]*.html/i)) {
		const url = req.url.split('/')
		const file = url[2]

		const fs = require('fs')
		
		fs.readFile(file, (err,data) => {
			if (err) throw err 

			fs.access('./upload', (err) => {
				if (err) {
					fs.mkdir('upload', (e) => {
						if(e) throw err
					});
				} 

				fs.appendFile('upload/container.txt',`\n---------${file} : ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()+1}\n` + data.toString(), (err) => {
					if (err) throw err
						console.log('data appended...')
				});
				
			})

			
		});

		res.writeHead(200, {'Content-type': 'text/html'})
		
		res.end('<h1>File uploaded</h1>')
	}
	
		
	
	else {
		res.writeHead(404, {'Content-type': 'application/json'})
		res.end(JSON.stringify({'message': 'Route not found'}))
	}
	
})



const hostname = 'localhost'
const port = 3001 
// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port} -------------------`)
// })




// Online reference:

// https://www.tutorialspoint.com/nodejs/nodejs_utility_module.htm

// https://nodejs.org/api/http.html

// 1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in JSON format.
/*
const server = http.createServer((req , res) => {
	res.statusCode = 200
	res.setHeader('Content-type', 'text/plain')

	
	fs.readFile('person.json' , (err, readPersons) => {
		if (err) throw err 
		const persons = readPersons.toString()

		try {
			console.log(JSON.parse(persons))
		} catch(e) {
			console.log('data is not json', e)
		}
		res.write(persons)
		res.end()
	})
	
	
})
*/

