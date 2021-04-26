#!/usr/bin/env node 			// hashbang comments

console.log('monkey\tking')		// monkey	king
console.log('monkey\nking')		// monkey
								// king
console.log('monkey\vking')		// 'vertical tab'

/* multi line comment */
// single line comment

console.log(08)					// 8 		'decimal'
console.log(0777)				// 511 		'octal'
console.log(2e+5)				// 200000	'exponential'
console.log(0b101001)			// 41		'binary'
console.log(0o623)				// 403		'octal'
console.log(0xefda)				// 61402	'hexa'

console.log(123456789123456789123456789123456789123456789)
// 1.2345678912345679e+44		'int'
console.log(123456789123456789123456789123456789123456789n)
// 123456789123456789123456789123456789123456789n	'bigInt'

console.log(1_45_200)			// 145200

var a = 1, b = '2', c = true, d = null
var object = {a, b, d}			// { a: 1, b: '2', d: null }
var object = {x:a, y:b, z:d}	// { x: 1, y: '2', z: null }

console.log('\xA9')				// ©
console.log('\u00A9')			// ©