const EventEmitter = require('events');
const inquirer = require('inquirer');
const emitter = new EventEmitter;
function c1(){
inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });
}
  emitter.on('eventOne', c1);

  emitter.emit('eventOne');
  process.on('kill', () => {
    return console.log(`About to exit with code:`);
  });
  setTimeout(()=>{
   return process.kill();
},3000);