// global

console.log('hello world');


setTimeout(()=>{
    console.log('hello anks');
} , 3000)

 setInterval(() => {
     console.log('hi')
 }, 3000);


 // window is defaul 
 // all the global object
 window.console.log('hello');
 global.console.log('hello');

 // variable are not in global object 

 var str = '';
 console.log(global.str);// undefine