const inquirer = require('inquirer')
const EventEmitter = require("events");
const fs = require('fs');
const { async } = require('rxjs');
const examEvent = new EventEmitter();

var questions = [
  {
    type: 'input',
    name: 'start',
    message: "Do you want to start exam ? (yes/no):"
  }
]

inquirer.prompt(questions).then(answers => {
    if(answers['start'] == 'yes'){

        examEvent.on('start', () => {
            console.log('Exam Started...');

            fs.readFile('./questions.json', (err, data) => {
                if(err){
                    console.error(err);
                    return;
                }

                let questions = JSON.parse(data);
                
                for(q in questions){
                    
                    console.log(q);
                }

            })

        });

        examEvent.on('finished', () => {
            console.log('Exam Finished.');
        })

        function universityExam(){
            
            return new Promise((resolve, reject) => {
            
                setTimeout(() => {
                    resolve('finished');
                }, (3 * 60 * 60 * 1000))
    
            });
        }

        async function startExam(){
            examEvent.emit('start');
            let exam = await universityExam();
            if(exam == 'finished'){
                examEvent.emit('finished');
            }
        }

        startExam();
    }
    else{
        console.log(`Your answer is ${answers['start']}.`);
    }
});