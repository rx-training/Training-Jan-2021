const EventEmmiter = require("events")
const fs = require('./exam.json')
const myEvent = new EventEmmiter();


const start = async () => {
    let startPromise = new Promise((resolve,reject) => {
        resolve('start')
    })
    return startPromise
}

const exam = async () => {
    let exam = new Promise((resolve,reject) => {
        var str =''
        for(q of fs){
            str+= `
            ${q.question}
            a: ${q.a} b: ${q.b} c: ${q.c} d: ${q.d} ` 
        }
        resolve(str)
        resolve(fs[1].question)
    })
    return exam
}
/*
const end = async () => {
    let endPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('exam over')
    }, 5000);    
    })
    return endPromise
}*/

myEvent.on('end',async () => {
        setTimeout(() => {
            console.log('Exam over');
        }, 5000);    
})

myEvent.on('start',async()=> {
    const start1 = await start()
    console.log(start1);

    const exam1 = await exam()
    console.log(exam1);

    myEvent.emit('end');
})



myEvent.emit('start');
