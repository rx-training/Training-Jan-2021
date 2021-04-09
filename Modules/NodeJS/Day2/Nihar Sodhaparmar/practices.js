const fs  = require("fs");

// Practice1 : Create one txt file name it as person.txt and write in that hello world
fs.writeFile('./person.txt', 'Hello World.', err => {
    if(err){
        console.error(err);
        return;
    }
})


// Practice2 : Append hello India in person.txt.
fs.writeFile('./person.txt', '\nHello India.', { flag : 'a+'}, err => {
    if(err){
        console.error(err);
        return;
    }
})


// Practice3 : Accept your name from command line. And append it to person.txt as "hello " + "name".
var args = process.argv.slice(2);
var content = '\nHello ' + args[0];
fs.writeFile('./person.txt', content, { flag : 'a+'}, err => {
    if(err){
        console.error(err);
        return;
    }
})


// Practice4 : Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.
async function readTwoFiles(){
    await fs.readFile('./demo-text.txt', (err, data) => {
        if(err){
            console.error(err);
            return;
        }

        console.log(data.toString());
    })

    await fs.readFile('./demo-file1.txt', (err, data) => {
        if(err){
            console.error(err);
            return;
        }

        console.log(data.toString());
    })
}

readTwoFiles();


// Practice5 : Write your address in one txt file and find out how many consonants are there.
fs.readFile('./address.txt', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    var address = data.toString();

    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

    let count = 0;

    for(let letter of address.toLowerCase()){
        if(consonants.includes(letter)){
            count++;
        }
    }

    console.log('Total Number Consonants : ' + count);
})


// Practice7 : Create one folder files and move person.txt in that file.
async function moveFile(){
    await fs.mkdir('./practice7', err => {
        if(err){
            console.error(err);
            return;
        }
    })
    
    await fs.rename('./person.txt', './practice7/person.txt', err => {
        if(err){
            console.error(err);
            return;
        }
    })
}

moveFile();


// Practice6 : Remove person.txt file.
fs.unlink('./person.txt', err => {
    if(err){
        console.error(err);
        return;
    }
})