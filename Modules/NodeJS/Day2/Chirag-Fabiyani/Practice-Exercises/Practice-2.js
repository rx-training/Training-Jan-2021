const fs = require('fs')

async function getFile(){
    let content1 = new Promise(function(myResolve, myReject) {
        fs.readFile('./Person.txt','utf8', (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            setTimeout(function() { myResolve(data); }, 3000);
          })
      });
    let data1=await content1; 
    console.log(data1)
}
async function getFile2(){
    let content2 = new Promise(function(myResolve, myReject) {
        fs.readFile('./People.txt','utf8', (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            setTimeout(function() { myResolve(data); }, 6000);
          })
      });
    let data2=await content2;
    console.log(data2)
}

getFile();
getFile2();