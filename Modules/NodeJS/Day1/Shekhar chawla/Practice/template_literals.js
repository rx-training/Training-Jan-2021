let apple = 1, ball = 5 
console.log(`apple is ${apple} 
		ball is ${ball}`)	
/* apple is 1 
		ball is 5
*/


function f(strings, name, age){
	return `${strings} ${name} ${age}`	
	// My name is , and i am , years old rambo 34
	// strings[0] = 'My name is '
}
let name = 'rambo', age = 34
console.log(f`My name is ${name} and i am ${age} years old`)


let str = String.raw`Hello\nWorld`		// Hello\nWorld
let br = Array.from(str).join(',')		// H,e,l,l,o,\,n,W,o,r,l,d  'str'

