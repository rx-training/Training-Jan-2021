// Command Line Arguments
process.argv.forEach((val, index) => {
    console.log(`${index} : ${val}`);
})


//Only additional Arguments
const args0 = process.argv.slice(2);
console.log(args0);


//Parse using minimist
console.log("---------- Parse using minimist ----------");
const args = require("minimist")(process.argv.slice(2));
console.log(args['name']);


// variables and format specifires
console.log("---------- variables and format specifires ----------");
console.log('My %s has %d years', 'cat', 2)


// Counting Elements
console.log("---------- Counting Elements ----------");
const oranges = ['orange', 'orange', 'grapes']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})


// Calculate the time spent
console.log("---------- Calculate the time spent ----------");
const doSomething = () => {
    for(i=0; i<25; i++)
    {
        console.log(i);
    }
};
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething();


// Color the output
console.log("---------- Color the output ----------");
const chalk = require('chalk');
console.log(chalk.yellow('Nihar Sodhaparmar'));


// progress bar
console.log("---------- progress bar ----------");

const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total : 10});
const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 100);