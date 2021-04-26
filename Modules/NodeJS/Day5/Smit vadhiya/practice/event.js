console.log(`
`);

const Event  = require("events")
const myEvent = new Event();

const myClass =  require('./module')
/*console.log(myEvent);
*/
const newI= new myClass() 

newI.on("messageLog",(args) => {
    console.log("listining..",JSON.parse(args));
})

newI.myEvent()