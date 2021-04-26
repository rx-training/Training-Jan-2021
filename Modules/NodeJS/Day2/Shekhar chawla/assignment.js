// Assignment:
//                 Do mathematical operation like Addition, subtraction, multiplication, div.
// Use case statement.
// Accept two numbers from the user from the command line.
// Create Separate function for add, sub, multi and div
// And store the result in one txt file. And display the result from file.

const add = (a, b) => a+b ;
const sub = (a, b) => a-b ;
const mul = (a, b) => a*b ;
const div = (a, b) => a/b ;

var ops = (num1, op, num2) => {
	try {
		num1 = parseInt(num1)
		num2 = parseInt(num2)	
	} catch(e) {
		console.log('Invalid Input', e)
	}
	
	switch( op ) {
		case '*' :
			return mul(num1, num2)
			break
		case '/' :
			return div(num1, num2)
			break
		case '+' :
			return add(num1, num2)
			break
		case '-' :
			return sub(num1, num2)
			break
		default :
			return 'Invalid input'
	}
}

function assignment() {
	var result = ops(process.argv[2], process.argv[3], process.argv[4])
	console.log(`${result}`)

	var data = `\n|${process.argv[2]}\t${process.argv[3]}\t${process.argv[4]}|\t\t Result: ${result}` 
	fs.appendFile('result.txt', data, err => {
		if (err) throw err
		console.log('Data appended to file')
	})
}
// assignment()