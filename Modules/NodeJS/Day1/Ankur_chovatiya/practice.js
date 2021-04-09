// ============ Asynchronous vs Synchronous Programming

var count = 0;
for(var i = 0 ; i<10 ; i++)
{
    setTimeout( () => {
        console.log("hello");
        count++;
    } , 2000)
    
   
}
console.log("hello")
//console.log(count)
setTimeout(() =>{
    console.log("ha ha ")
} , 3000)



// ==================

const getTodo = () => {
    setTimeout(() => {
        return { text: 'Complete Code Example' }
    }, 2000)
}
const todo = getTodo()
setTimeout(() => {

	console.log(todo.text)
} , 3000)




// =======================


 var count = 0;
console.log("hello")
for(var i=0 ; i<100000000 ; i++){
 count++ ;
}
console.log(count)
console.log("hi") 

//===============

const  getTodo = () =>{
	setTimeout(() => {
  		return {name : "anks"}
  }, 2000) 
} 
setTimeout(() =>{
	const todo = getTodo();
  console.log(todo.text)
} , 3000)