// assignment 1 and 2 combine

let  ans;
let fun = function (a , b ,operator ){

    switch(operator){
        case '+':
            ans =  a + b;
            break;
        case '-':
            ans = a - b;
            break;
        case '*':
            ans = a * b;
            break;
        case '/':
            ans = a / b;
            break;
        default :
            console.log('you chose wrong operator')
    }
      return ans;

}
let answer = fun( 5 , 8 , '-')
console.log(answer)

// ============    3

const args = process.argv;
// console.log(args);
const mainArgs = args.slice(2 , args.length);
// console.log(mainArgs);

let num1 , num2;
num1 = mainArgs[0];
num2 = mainArgs[1];

console.log(`you enter two number ${num1} , ${num2} from commnad line `);

// =========   4
const fs = require('fs');

let answer;
let a=5 , b = 10;
let add = function(a ,b ){
   return a + b;
    
}

let sub = function(a , b){
    return a - b;
}

let mul = function(a , b){
    return a * b;
}

let div = function(a , b){
    return a / b;
}


const resultAdd = add( a , b)

    fs.writeFile('./result.txt' , ` sum of number is ${resultAdd}\n` , 'utf8' , (err)=> {
        if(err) throw err;
   
    } ) 
     



const resultSub = sub( a , b)

fs.appendFile('./result.txt' , ` sub of number is ${resultSub}\n` , 'utf8' , (err)=> {
    if(err) throw err;
} )

const resultMul = mul( a , b)

fs.appendFile('./result.txt' , ` Multiplication of number is ${resultMul}\n` , 'utf8' , (err)=> {
    if(err) throw err;
} )

const resultDiv = div( a , b)

fs.appendFile('./result.txt' , ` Division of number is ${resultDiv}\n` , 'utf8' , (err)=> {
    if(err) throw err;
} )


// read

fs.readFile('./result.txt' , 'utf8' , (err,  data)=> {
    if(err) throw err;

    console.log(data);
})