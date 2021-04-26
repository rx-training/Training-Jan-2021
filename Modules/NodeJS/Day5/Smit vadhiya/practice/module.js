const EventEmitter = require("events");

class OnEvent extends EventEmitter{
    myEvent(){
        console.log("calling function...");  
        this.emit("messageLog",'[3,"url","hrllo"]')      
        
    }
}

module.exports = OnEvent