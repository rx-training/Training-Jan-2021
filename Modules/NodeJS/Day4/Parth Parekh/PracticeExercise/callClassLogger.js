const Logger = require('./Day4_Practiceexercise');
const logger = new Logger();

logger.on("messageLogged", (arg) => {
    console.log("Listener Called", arg);
});

logger.log('Hello Parth');