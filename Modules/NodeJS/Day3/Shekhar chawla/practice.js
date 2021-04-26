// Day3:

// What to Learn

// Debugging Node Application.
// Usage of Nodemon.
// Global Objects
// Creating Module
// Loading a Module

// Practice Exercise:

// 1. Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!” and load the same in index.js
const hello = require('./hello.js')
console.log(hello.greeting)


// 2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, and exports area and perimeter of rectangle
const Rect = require('./Rectangle.js')
const myobj = new Rect()
console.log(`Area: ${myobj.area(15, 20)}`)
console.log(`Perimeter: ${myobj.perimeter(30, 20)}`)


