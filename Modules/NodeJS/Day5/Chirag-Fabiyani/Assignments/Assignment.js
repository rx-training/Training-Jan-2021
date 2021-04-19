const EventEmitter = require('events');
const inquirer = require('inquirer');
const emitter = new EventEmitter;
var data = require('./Data.json')

inquirer
.prompt([
    {
        type: 'list',
        name: 'ExamStart',
        message: 'Are you ready to start the exam?',
        choices: ['Yes', 'No'],
    },
])
.then(answers => {
    if(answers.ExamStart=='Yes'){
        emitter.emit('BeginExam');
        emitter.emit('BeginTimer');
    }
    else if(answers.ExamStart=='No'){
        process.exit();
    }
});

emitter.on('BeginExam',()=>{
    inquirer
    .prompt(data)
    .then(answers => {
        if(answers['11)']=='Yes'){
            emitter.emit('EndExam',0);
        }
        else if(answers['11)']=='No'){
            emitter.emit('BeginExam');
        }
    });
});
emitter.on('BeginTimer',()=>{
      setTimeout(()=>{
        emitter.emit('EndExam',1);
      },10800000);
});
emitter.on('EndExam',(args)=>{
      if(args==0){
          console.log("Exam Successfully Submitted");
          process.exit();
      }
      else if(args==1){
          console.log("----------Time is UP!!!----------")
          process.exit();
      }
});
