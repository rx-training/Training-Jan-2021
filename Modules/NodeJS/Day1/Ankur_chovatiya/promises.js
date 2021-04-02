const getTodo =  () => {
    return new Promise ((resolve , reject) =>{
        setTimeout( () =>{
            let tag = false;
            if(!tag){
                resolve({name : "anks"})
            }
            else
                reject()
        } , 2000)
    })
}

getTodo().then(answer  =>{
    console.log(answer)
})
