const fs = require('fs');
const path = require('path');

fs.unlink('./file.txt', (err) => {
    if (err) throw err;
    console.log('successfully deleted file.txt');
  });


//  // ===========    2

fs.open('./file.txt' , 'r' , (err , fd) => {
    if(err) throw err;
    console.log('file open scucess');
    fs.close(fd , (err) =>{
        if(err) throw err;
    })
});

//  //    ========       3 (write)


fs.open('./fil.txt' , 'wx' , (err , fd) =>{
    if(err){
        if(err.code == 'EEXIST'){
            console.error('myfile already exists');
            return;
        }
        throw err;
    }

    fs.writeFile('./fil.txt' ,'hello everyone' , 'utf8' , (err) =>{
        if(err) throw err;
        console.log('the file has been saved!')
    } );

} );

// //    ============      4 (read)

fs.open('./files.txt', 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('myfile does not exist');
        return;
      }
  
      throw err;
    }
     
fs.readFile('./files.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });
  });


  

