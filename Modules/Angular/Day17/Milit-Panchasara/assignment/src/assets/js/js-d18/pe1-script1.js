function practice1(){
    var promise = (new Promise((resolve, reject)=>{
        var num = parseInt(document.getElementById('num1').value);
        if(isNaN(num)) {
            reject("INVALID DATA!!!");
        }
        else{
            num *= num;
            console.log(num);
            resolve("Result: " + num);
        }
    }));
    
    promise.then((num) => console.log(num),(error) => {});
    promise.then(()=>console.log('finish'),()=>console.log('finish'));
    promise.catch((er)=>console.log(er));         // catches error block fromm any then block
    return false;
}

async function practice2(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("SUCCESS!!!"),3000)
    });

    let result = await promise;

    console.log("AFTER 3 SECONDS: " + result);
}