const getTodo = (callback) =>{
    var name = 'anks';
        setTimeout(() => {
          callback(name)
          /* callback ({text:"this is json data from call back function"} */
      } , 2000)
    }
    
    const todo = (objs) =>{
    console.log("hello everyone");
    console.log(objs);
    //return objs;
    }
    
    
    getTodo(todo)
    
    
    /* getTodo(todo =>{
    console.log(todo)
    }) */
    
    
    