/**  Do mathematical operation like Addition, subtraction, multiplication, div.

Use case statement.

Accept two numbers from the user from the command line.

Create Separate function for add, sub, multi and div

And store the result in one txt file. And display the result from file. 

!!!!!!!!!!!!!!!! PLEASE READ THIS BEFORE RUN !!!!!!!!!!!!!

PLEASE TAKE 3 INPUT 
FIRST IS CASE(0-3)
        0 => for addition
        1 => for subtraction
        2 => for multiplication
        3 => for division
SECOND IS ANY DIGIT(FIRST DIGIT)
THIRD IS ANY DIGIUT(SECOND DIGIT) 

EX :-  "node node Assignment.js 2 4 6"

ANS = 24 (BECAUSE FIRST 2 INDICATE MULTIPLICATION OF 4 AND 6)
*/

function addition(a,b){
    console.log(a+b); 
}
function subtraction(a,b){
    console.log(a-b); 
}
function multiplication(a,b){
    console.log(a*b); 
}
function devision(a,b){
    if(b==0){
       console.log('devider can\'t be zero');
    }else{

        console.log(a/b); 
    }
}
const arr = process.argv.slice(2)
console.log(arr);
function calculate(a,b){
    const flag = parseInt(arr[0]);
    switch(flag){
        case 0 :
            addition(a,b)
            break;
        case 1 :
            subtraction(a,b)
            break;
        case 2 :
            multiplication(a,b)
            break;
        case 3 :
            devision(a,b)
            break;
        default :
            'wrong case'
    }
}
calculate(parseInt(arr[1]),parseInt(arr[2]))