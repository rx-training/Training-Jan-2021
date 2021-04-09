const greeting = require("./hello");
const { AreaOfRectangle, perimeter } = require("./rectangle");

//1. Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!”
// and load the same in index.js

console.log(greeting);

//2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, and exports area
//and perimeter of rectangle

console.log(AreaOfRectangle(4, 2));
console.log(perimeter(4, 2));
