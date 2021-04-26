const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'Files'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Folder created successfully!');
});

fs.rename('Person.txt', './Files/Person.txt', err => {
    if (err) {
      return console.error(err)
    }
    console.log('File moved successfully')
  })

let files = fs.readdirSync(__dirname)
files.forEach(file=>{
    console.log(file);
});