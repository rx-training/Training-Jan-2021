var details = require('./export-file.js');

// Practices From Node Site
console.log();
console.log('-------------------- Practices --------------------')

console.log(details.name);
console.log(details.age);

console.log(details.person);
console.log();


//Practice1 : Create hello.js file and exports a value of constant variable greeting=”Greeting of the day!!!” and load the same in index.js
console.log('-------------------- Practice1 --------------------')
var greetings = require('./hello.js');
console.log(greetings);
console.log();


//Practice2 : Create Rectangle.js and compute AreaofRectangle and perimeter of Rectangle, and exports area and perimeter of rectangle
console.log('-------------------- Practice2 --------------------')

var rectangle = require('./rectangle.js');

console.log('Area of Rectangle : ' + rectangle.area(5, 10));
console.log('Perimeter of Rectangle : ' + rectangle.perimeter(5, 10));
console.log();


// Assignment
console.log('-------------------- Assignment --------------------')
var { MoBike } = require('./bike');

var args = process.argv.slice(2);
var bike1 = new MoBike(args[0], args[1], args[2], parseInt(args[3]));

console.log(`Bike No. : ${bike1.getBikeNumber()}
Phone No. : ${bike1.getPhoneNumber()}
No. of Days : ${bike1.getDays()}
Charge : ${bike1.compute()}`);

console.log();