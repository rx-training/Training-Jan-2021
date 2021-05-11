//1. Create hello.js file and exports a value of constant variable 
//greeting= 'Greeting of the day!!!' and load the same in index.js
const greeting = require("./hello");
console.log(greeting);

//2. Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle,
// and exports area and perimeter of rectangle
const area = require("./rectangle");

console.log("----------------------------------");
area.areaofrectangle(4, 3);
area.perimeterofrectangle(4, 3);

// const { areaofrectangle, perimeterofrectangle } = require("./rectangle");
// areaofrectangle(4, 3);
// perimeterofrectangle(4, 3);