const fs = require('fs');
const readline = require('readline').createInterface({

    input: process.stdin,
    output:process.stdout
})



 // =============    1

fs.open('./person.txt' , 'wx' , (err , fd) =>{
        if(err){
            if(err.code == 'EEXIST'){
                console.error('myfile already exists');
                return;
            }
            throw err;
        }
        

        fs.writeFile('./person.txt' ,'hello world\n' , 'utf8' , (err) =>{
            if(err) throw err;
            console.log('the file has been saved!')
        } );
    
    } );


//   ============   2
fs.open('person.txt', 'a', (err, fd) => {
    if (err) throw err;
    fs.appendFile('./person.txt' , 'hello india\n','utf8' , (err) =>{
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
      console.log('the data appended to file!');

    });
  });



// ===========    3

readline.question(`what is your name ?` , name =>{
  
    fs.appendFile('./person.txt' , `hello +${name}\n` ,'utf8', (err) =>{
        console.log('file appned sucessfully')
    } )

    readline.close()
})

 // ========     4


async function fread() {


    let getdata = new Promise((res , rej) => {
        fs.readFile('./file1.txt' , 'utf8' , (err , data) => {
            if (err) {
                console.error(err)
                return
              }
            setTimeout(() => {res(data)}, 5000)
        });
    });

    const data1 = await getdata;
    console.log(data1);

    let getdataSecond = new Promise((res , rej) => {
        fs.readFile('./file2.txt' , 'utf8' , (err , data) => {
            if (err) {
                console.error(err)
                return
              }
            setTimeout(() => {res(data)}, 3000)
        });
    })

    const data2 = await getdataSecond;
    console.log(data2);
}
fread();


  // =============      5



fs.readFile('./Address.txt','utf8', (err, data) => {
    if (err) throw error;
    var dat;
    dat = data.toLowerCase();
    console.log(dat);
    var count=0;
    for(var i=0; i<data.length; i++)
    {
    

        if(dat[i]=='a' || dat[i]=='e' || dat[i]=='i' || dat[i]=='o' || dat[i]=='u')
        {
            continue;
        }
        else if((dat[i]>='b' && dat[i]<='d') || (dat[i]>='f' && dat[i]<='h') || (dat[i]>='j' && dat[i]<='n') || (dat[i]>='p' && dat[i]<='t') || (dat[i]>='v' && 
        
        [i]<='z'))
        {
            count++;
        }
        else{
            continue;
        }
    }
    console.log(count);
  })


//  =============   6

fs.unlink('./person.txt',function(err){
    if(err) 
        return console.log(err);
    console.log('file deleted successfully');
});  

//  ===========    7


fs.mkdir("./folder" , (err) => {
    if(err){
        console.err("error "+err);
        return;
    } 
});

fs.rename('./index.js', './folder/person.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });