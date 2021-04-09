const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();
const fs = require('fs');



// myEmitter.on('loadQue' , (data)=>{
//     setTimeout(()=>{
//         console.log('your Question is loading.....');

//         fs.readFile('./Questions.json' , 'utf8' , (err , data)=>{
//             if(err) throw err;
//             console.log(data);
//         })

//     } , 3000);
// });


// myEmitter.on('start' ,()=>{
//     return new Promise((res , rej) =>{

//         setTimeout(()=>{
//             console.log(' exam start');
//         },5000); 
//         res('exam ');
//     })   
// })

// myEmitter.on('submit' , ()=>{
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//             console.log('your time is over')
//         } , 8000);
//         res('submit');
//     }) 
// })

// myEmitter.emit('loadQue')
// myEmitter.emit('start');
// myEmitter.emit('submit');


// second way





 async function exam(){

    function load() {
        return new Promise((res, rej)=>{
            fs.readFile('./Questions.json' , 'utf8' , (err , data)=>{
                res(data)
            });
            
        })
    }

    let jo = await load();
    console.log(jo);

    myEmitter.on('start' ,()=>{
            return new Promise((res , rej) =>{
        
                setTimeout(()=>{
                    console.log(' exam start');
                },100); 
                res('exam start');
            })   
        })

    myEmitter.emit('start');


    
myEmitter.on('submit' , ()=>{
    return new Promise((res , rej)=>{
        setTimeout(()=>{
            console.log('your time is over')
        } , 10800000);
        res('submit');
    }) 
})

myEmitter.emit('submit')
}

 exam();
