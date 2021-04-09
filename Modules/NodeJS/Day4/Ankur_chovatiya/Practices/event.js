const EventEmitter = require('events');

const emitter =  new EventEmitter();

emitter.on('errorLogged' , (args)=>{
    console.log('event listener called' , args);
});


emitter.emit('errorLogged' , { id:1 , url:'http://'});

