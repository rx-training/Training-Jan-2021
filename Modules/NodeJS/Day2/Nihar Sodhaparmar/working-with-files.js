const fs = require('fs');
const path = require('path')

// File Stats
fs.stat('./demo-text.txt', (err, stats) => {
    if(err){
        console.error(err);
        return;
    }

    console.log("---------- File Stats ----------");
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
    console.log();
});


// File Paths
console.log("---------- File Paths ----------");
const filepath = './demo-text.txt';
console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));
// Extract File Name
console.log(path.basename(filepath, path.extname(filepath)));
// Joining Path
var name = 'nihar';
console.log(path.join('/', 'users', name, 'notes.txt'));
// Absolute Path
console.log(path.resolve('demo.txt'));
console.log(path.resolve('tmp','demo-text.txt'));
console.log(path.resolve('/etc', 'demo-text.txt'));
console.log(path.normalize('/users/../demo-text.txt'));
console.log();


// Read File
fs.readFile('./demo-text.txt', (err, data) => {
    console.log("---------- Read File ----------");
    console.log(data.toString());
    console.log();
});


// Write File
const content = 'Writing into file using writeFile.';
fs.writeFile('./demo-file1.txt', content, err => {
    if(err){
        console.error(err);
        return;
    }
});

fs.writeFile('./demo-file1.txt', content, { flag : 'a+'}, err => {
    if(err){
        console.error(err);
        return;
    }
});

fs.appendFile('./demo-file1.txt', content, err => {
    if(err){
        console.error(err);
        return;
    }
});


// Working with Folders

// Create Folder
fs.mkdir('./test', err => {
    if(err){
        console.error(err);
        return;
    }
})

// Read Folder
fs.readdir('../Day2', (err, data) => {
    if(err){
        console.error(err);
        return;
    }

    console.log("---------- Read Folder ----------");
    console.log(data);
})

// Rename Folder
fs.rename('./test', './my-test', err => {
    if(err){
        console.error(err);
        return;
    }
})

// Remove Folder
fs.rmdir('./remove', err => {
    if(err){
        console.error(err);
        return;
    }
})