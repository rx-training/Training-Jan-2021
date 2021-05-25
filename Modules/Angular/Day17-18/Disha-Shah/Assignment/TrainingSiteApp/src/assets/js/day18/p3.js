    function getPromise() {
        var strValue = document.getElementById("strValue").value;
        let myPromise = new Promise((resolve, reject) => {
            let successMessage = {
                status : 'Success',
                message: 'valid string & reversed string is: ' + reverseStr(strValue)
            };
            let errorMessage = {
                status : 'Error',
                message: 'invalid input'
            };
            if(isNaN(parseInt(strValue)) && strValue != "") {
                setTimeout(() => resolve(successMessage), 500);  
            }
            else{
                reject(errorMessage);
            }
        })
        promise(myPromise);
        return false;
    }

    function reverseStr(data) {
        return data.split('').reverse().join('');
    }

    function promise(myPromise) {
        myPromise.then(
            (successMessage)=>{
                document.getElementById("result").innerHTML=successMessage.message
            },
            (errorMessage)=>{
                document.getElementById("result").innerHTML=errorMessage.message
            }
        );
        return;
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }