// Do mathematical operation like Addition, subtraction, multiplication, div.

// Use case statement.

// Accept two numbers from the user from the command line.

// Create Separate function for add, sub, multi and div

// And store the result in one txt file. And display the result from file.

const fs  = require("fs");

var args = process.argv.slice(2);
var a = parseFloat(args[0]);
var b = parseFloat(args[1]);
var operation = args[2];
var result;

switch(operation){
    case 'sum' : 
        result = add(a,b);
        break;
    
    case 'sub' : 
        result = sub(a,b);
        break;
        
    case 'multi' : 
        result = multi(a,b);
        break;

    case 'div' : 
        result = div(a,b);
        break;

    default :
        result = 'Provide Valid Operation';
}

async function writeAndReadData(){
    await fs.writeFile('./result.txt', result.toString(), err => {
        if(err){
            console.error(err);
            return;
        }
    })

    await fs.readFile('./result.txt', (err, data) => {
        if(err){
            console.error(err);
            return;
        }
    
        console.log('result : ' + data.toString());
    })
}

writeAndReadData();

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function multi(a, b){
    return a * b;
}

function div(a, b){
    if(b == 0){
        console.error('Denometer Cann\'t be zero for division');
    }
    return a / b;
}