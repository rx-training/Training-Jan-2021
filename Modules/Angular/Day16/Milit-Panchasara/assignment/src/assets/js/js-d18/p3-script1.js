let promise = (new Promise((resolve, reject) => {
    var successMessage = {
        'code':1,
        'message':'Success! Given input is a string.'
    }
    var errorMessage = {
        'code':0,
        'message':'Error! Given input is not a string.'
    }
    var x = "abcd";
    if(typeof x == 'string')
    {
        setTimeout(() => resolve(successMessage), 500);
    }
    else
        setTimeout(() => reject(errorMessage), 500);
})).then(
    result => console.log(result.message),
    error => console.log(error.message)
);