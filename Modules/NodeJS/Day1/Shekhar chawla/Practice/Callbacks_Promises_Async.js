
// CALLBACK -------------------
function a() {
	setTimeout(() => {
		console.log('aee')
	}, 1000 );
}

function b(callback) {
	setTimeout(() => {
		console.log('bee')
		callback()
	}, 10000 );
}
b(a)



// PROMISE -----------------
function b() {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			const error = false

			if(!error) {
				resolve('Promise resolved')
			} else {
				reject('reject')
			}
		}, 5000);
		
	})
}

b()
.then(a)
.catch(err => console.log(err))



// PROMISE.ALL() -----------------
const p1 = Promise.resolve('hello world')
const p2 = 10 
const p3 = new Promise( (res, rej) => setTimeout(res, 1000, 'Bye') )
const fetch = require('node-fetch')
const p4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json())

Promise.all([p1, p2, p3, p4])
.then( values => console.log(values))



// ASYNC AWAIT
async function c() {
	let result = await b() 		// return Promise
	console.log(result)
	a();
}
c()