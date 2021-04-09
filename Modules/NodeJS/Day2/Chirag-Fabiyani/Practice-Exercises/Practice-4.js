const fs = require('fs')

fs.unlink("Person.txt",(err)=>{
    if (err) console.log(err);
    else {
    console.log("\nDeleted file: Person.txt")
    getFilesinDirectory();
    }
});

function getFilesinDirectory(){
    let files = fs.readdirSync(__dirname)
    files.forEach(file=>{
        console.log(file);
    });
}