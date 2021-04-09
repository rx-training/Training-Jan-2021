const fs = require('fs');

var files = fs.readdirSync('./');

console.log(files);

var files = fs.readdir('./' , (err , files)=>{
    if(err) throw err;
    console.log(files);
} )