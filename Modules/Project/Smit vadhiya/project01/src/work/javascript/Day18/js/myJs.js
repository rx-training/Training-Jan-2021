function square(n,callBack){
    
    callBack(n);
}
function myCall(n){
    console.log(n*n);
    document.getElementById("squareResult").innerHTML = "square of "+n+" is "+(n*n);
}

//practice 02
//var and let exampal

var x = 24;
if(true){
    let x= 10;//x is changed in this portion 
    console.log(x);
}
console.log(x);//value of x is 24 now


//practice 03

function check(mainString){ 
    function myPromise(functionString){
        return new Promise(function(resolve, error){
            var str = parseInt(document.getElementById("str").value);
            var str1 = "";
            
            if(isNaN(str)){
                str = document.getElementById("str").value;
                var str1="";
                for(var i = str.length-1 ;i>=0;i--){
                    str1 += str[i];
                }
                setTimeout(console.log("hello"),3000);
                resolve(str1,"hello");
            }
            else{
                str = "Wrong input";
                console.log(str);
                error(str);
            }
        });
    }

    myPromise(mainString).then(
        function(value){
            document.getElementById("checkResult").innerHTML = "reverse string is "+ value;
        },
        function(error){
            document.getElementById("checkResult").innerHTML = error;
        }
    );
}