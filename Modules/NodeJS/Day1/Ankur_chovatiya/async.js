const getTodo = () => {
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            let tag = false;
            if(!tag){
                resolve({name :"anks"})
            }
            else
                reject()
        } , 2000)
    })

}

async function fetchTodo() {
    const todo = await getTodo();
    return todo;
}

fetchTodo().then(answer => console.log(answer) )