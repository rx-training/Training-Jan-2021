async function startTimer(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve("Time out"), 5000);
    });
    let result = await promise;
    alert(result);
    return false;
};