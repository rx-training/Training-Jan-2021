// Day2
// What to Learn

// 1. Run Node.js from the command line.
// 2. npm init to set up node project.
// 3. Running from REPl
// 4. Process Core Module
// 5. Accepting argument from command Line
// 6. Fs module
const fs = require('fs')

function fx() {
	const f = 'person.txt'

	fs.open(f, 'wx', (err, fd) => {
	// checking if file already exists
	if(err) {
		if (err.code === 'EEXIST') {
			console.log('file already exists')
		}
	} else {
		// writing data to file
		fs.writeFile(f, 'hello world', (err) => {
			if (err) throw err 
				console.log('creating file...')
		});	
	}

	// if arguments passed , append data
	if(process.argv[2]){
		fs.appendFile(f, `\nhello ${process.argv[2]}`, (err) => {
			if (err) throw err
				console.log('data appended...')
		});
	}




	})
}
// fx()




// Practice Exercise:



// 1. Create one txt file name it as person.txt and write in that hello world
function f1() {
	fs.writeFile('person.txt', 'hello world', err => {
		if (err) throw err ;
		console.log('file created')
	})
}
// f1()



// 2. Append hello India in person.txt.
function f2(data) {
	fs.appendFile('person.txt', '\nhello '+data, err => {
		if (err) throw err ;
		console.log('data appended')
	})
}
// f2('India')



// 3. Accept your name from command line. And append it to person.txt as “hello “+“name”.
// f2(process.argv[2])



// 4. Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.
function fileOps(file, data, time) {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			fs.writeFile(file, data, (err) => {
				if(err) {
					reject(`Cannot write file ${file}`)
				} 
				fs.readFile(file, (err, d) => {
					if (err) {
						reject(`Cannot read file ${file}`)
					}
					resolve(d.toString())
				})
				
			})
		}
		, time);
	})
}
async function f4() {
	const response = await fileOps('file1.txt', 'hello First file', 5000)
	console.log(response)
	const response2 = await fileOps('file2.txt', 'hello Second file', 2000)
	console.log(response2)
}
// f4()





// 5. Write your address in one txt file and find out how many consonants are there.
function f5() {
	data = 'Girriraj residency, near victoria heights, naroda, ahmedabad'
	fs.writeFile('address.txt', data, (err) => {
		if (err) throw err
		
		var vowels = 'aeiou'
		var consonants = 0
		var flag = 1
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < vowels.length; j++) {
				if( data[i] === vowels[j] ) {		// if vowel
					flag = 0
					break
				} 
				flag = 1						 	// consonant
			}
			if (flag==1) {							// if consonant
				consonants += 1
			}
		}
		console.log(consonants)
	})
}
// f5()


// 6. Remove person.txt file.
function f6() {
	fs.unlink('person.txt', err => {
		if (err) throw err
		console.log('file removed')
	});
}
// f6()


// 7. Create one folder files and move person.txt in that file.
function f7() {
	fs.mkdir('files', err => {
		if (err) throw err
		console.log('folder created')

		fs.rename('person.txt', 'files/person.txt', err => {
			if(err) throw err
			console.log('file moved')
		});
	});
}
// f7()



