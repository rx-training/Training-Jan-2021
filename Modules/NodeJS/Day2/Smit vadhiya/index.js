const minimist = require('minimist')

//functions in node
function myFun(){
    console.log('hello')
}
myFun()

//take all data of argument with node path and file path
process.argv.forEach((val, index) => {
      console.log(`${index}: ${val}`)
})

//array of all arguments without path
const inputArr = process.argv.slice(2)
console.log(inputArr);


//array of all arguments without path use of mini mist 
 const inputArr2 = require('minimist')(process.argv.slice(2));
 console.log(inputArr2,inputArr2['name']);
///run this for see use of minimist  "node index.js --name=smit"

//practice for fs


const fs = require('fs')
const path = require('path')
fs.stat('demo.txt',(err,stats) => {
    if(err){
        console.log(err);
        return
    }
    else{
        console.log(err,stats);
     console.log(stats.isFile());    
    console.log(stats.isDirectory())  ; 
    console.log(stats.isSymbolicLink()) ;    
    console.log(stats.size ) ;
    }
})

const notes = 'demo.txt'
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));
console.log(path.resolve(notes));
console.log(path.basename(notes,path.extname(notes)));

const fs = require('fs')

fs.readFile('demo.txt',(err,data) => {
    console.log(data.toString());
})
const text = 'why yes??';
fs.writeFile('demo.txt',text,{ flag: 'w+' },(err) => {
    if(err){
        console.log(err);
    }
})

fs.appendFile('demo.txt',text,(err) => {
    console.log(err);
})




const folderPath = 'newf'

console.log(fs.readdirSync(folderPath)); 