
/*!!!!!!!!!!!!!!PLEASE UNCOMMENT PERTICULER FUNCTION CAALLING FOR BWFORE RUN!!!!!!!!!!!!!!!!*/

/*************** Practice 01 ****************
  Create one txt file name it as person.txt and write in that hello world
*/

const fs = require('fs');
const { stderr } = require('process');
// this will create file and if already exist data will be replace if want to append use flag : 'a+'
function pr01(){
    const text = 'hello world'
    fs.writeFile('person.txt',text,{flag : 'w+'},error => {
        if(error){
            console.log(error);
        }
    })
}


//pr01()


/*************** Practice 02 ****************
 Append hello India in person.txt.
*/

function pr02(){
    const text = 'hello India'
    fs.appendFile('person.txt',text,error => {
        if(error){
            console.log(error);
        }
    })
}


//pr02()


/*************** Practice 03 ****************
. Accept your name from command line. And append it to person.txt as “hello “+“name”.
*/

function pr03(){
    const text =`Hello ${process.argv.slice(2)[0]}`

    fs.appendFile('person.txt',text,error => {
        if(error){
            console.log(error);
        }
    })
}

//pr03()


/*************** Practice 04 ****************
. Create two txt files, write some dummy text. 
Read two file content and print it in the console. use async and await.
*/

// using async await both file are read at same time so small file will print data first



async function pr04(){

    //first create two file
    const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam dignissimos amet. Possimus, consequuntur nostrum! Dolore nesciunt vero quam voluptate.'
    const text2 =  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, dolorem velit. Modi reprehenderit in voluptatum.'
    fs.writeFile('demo1.txt',text1,{flag : 'w+'},error => {
        if(error){
            console.log(error);
        }
    })
    fs.writeFile('demo1.txt',text2,{flag : 'w+'},error => {
        if(error){
            console.log(error);
        }
    })
    // file created wih dummy data

    //reading both file 

    await fs.readFile('demo1.txt',(error,data) => {
        if(error){
            console.log(error);
        }
        console.log(data.toString());
    })
    await fs.readFile('demo2.txt',(error,data) => {
        if(error){
            console.log(error);
        }
        console.log(data.toString());
    })
}

//pr04()


/*************** Practice 05 ****************
. Write your address in one txt file and find out how many consonants are there.
*/

 

function pr05(){
    /*
    //you can create addtess text file by uncomment this

    const text =
    `a-301-shine supperb app,
    near sayona tilak
    new sg road,gota
    ahmedabad-382481`

    fs.writeFile('address.txt',text,{flag : 'w+'},error => {
        if(error){
            console.log(error);
        }
        
    })*/
    fs.readFile('address.txt',(error,data) => {
        if(error){
            console.log(error);
        }
       const add = data.toString();
       console.log(`Address file data is : 
       ${add}
       
       `);
       var count = 0;
       for(i of add){
           var index = i.charCodeAt(0);
           
           if((index >=65 && index<=90 ) || (index >=97 && index<=122 ) &&
                i!='a' && i!='a' && i!='e' && i!='i' && i!='o' && i!='u'){
               count++
           }
        }
        console.log(`Total consonants  in address file is ${count}`);
    })
}
//pr05()


/*************** Practice 06 ****************
. Remove person.txt file.
*/
function pr06(){
    fs.unlink('person.txt',(err) => {
        console.log(err);
    })
}
//-pr06()



/*************** Practice 06 ****************
Create one folder files and move person.txt in that file.
*/
 
function pr07(){
    //if persont.txt is not aailable please run this pr01() to create 
    pr01()
    fs.mkdir('movePersone',(err) => {
        console.log(err);
    })
    fs.copyFile('person.txt','movePersone/person.txt',(err) => {
        console.log(err);
    })
    pr06()
}

//pr07()