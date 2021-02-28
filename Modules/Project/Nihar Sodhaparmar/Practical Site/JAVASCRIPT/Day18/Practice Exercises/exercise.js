//Function For Exercise1
function squareNumber(){

    function mySquare (num, callback){
        callback(num*num);
    }

    function print(square){
        document.getElementById('square').innerText = "Square : " + square;
    }

    number =  document.getElementById('number').value;
    mySquare(number,print);
}


//Function For Exercise2
function example(){
    var differenceDiv = document.getElementById('difference');
    var number = document.getElementById('numberGlobal').value;
    differenceDiv.innerHTML = "<div class='lead'>Using Var</div> <div>Value of number before function : " + number + "</div>";
    function usingVar(){
        number = document.getElementById('numberLocal').value;
    }
    usingVar();
    differenceDiv.innerHTML += "<div>Value of number after function : " + number + "</div>"

    var number = document.getElementById('numberGlobal').value;
    differenceDiv.innerHTML += "<div class='lead'>Using Let</div> <div>Value of number before function : " + number + "</div>";
    function usingLet(){
        let number = document.getElementById('numberLocal').value;
    }
    usingLet();
    differenceDiv.innerHTML += "<div>Value of number after function : " + number + "</div>"
}

//Function For Exercise3
function checkStr(){
    var str = document.getElementById('str').value;
    var ret = myValidateFunction(str);
    ret.then(
        result => {
            document.getElementById('strValid').innerText=result;
        },
        error => {
            document.getElementById('strValid').innerText=error;
        },
    );
}

function myValidateFunction(str){
    return new Promise((resolve,rejet)=>{
        if(typeof str !== 'string' || str == "")
        {
            setTimeout(()=>rejet(new Error("Wrong Input!!!")),500);
        }
        else
        {
            setTimeout(()=>{resolve(reverseString(str))},500);
        }
    });
}

function reverseString(str) { 
  
    if(!str) { 
        return 'Not valid';  
    } 
      
    const revArray = []; 
    const length = str.length - 1; 
      
    for(let i = length; i >= 0; i--) { 
        revArray.push(str[i]); 
    } 
      
    return revArray.join(''); 
} 