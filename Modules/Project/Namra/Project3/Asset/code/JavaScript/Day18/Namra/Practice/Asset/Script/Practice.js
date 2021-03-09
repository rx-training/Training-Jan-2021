function practice1CallBack(){
    var number = parseInt(document.getElementById("valNumber").value);
    square(number,(c)=>{
        document.getElementById("value").innerHTML="Square of entered number " + c ;
    }); 
    return false;
}
function square(number, callBack){
    c = number * number ;
    callBack(c);
}

function practice2Var(){
    var colorBack = document.getElementById("backColor").value;
    if(true){
        var colorBack = document.getElementById("back2Color").value;
    }
    document.getElementById("sectionOne").style.backgroundColor=colorBack;

    return false;

}
function practice2Let(){
    var colorBack = document.getElementById("backColor").value;
    if(true){
        let colorBack = document.getElementById("back2Color").value;
        alert("Colour of Let Variable : "+colorBack);
    }
    document.getElementById("sectionOne").style.backgroundColor=colorBack;
    
    return false;
}

function practice3(){
    //setTimeout(practice3Work,3000);
    practice3Work().then(
        (successMessage)=>{
            //alert(successMessage.message);
            //console.log(successMessage.status);
            document.getElementById("valuePractice3").innerHTML=successMessage.message;
        },
        (errorMessage)=>{
            //alert(errorMessage.message);
            //console.log(errorMessage.status);
            document.getElementById("valuePractice3").innerHTML=errorMessage.message;
        }
    );
    return false;
}
function practice3Work(){
    var str = document.getElementById("valPractice3").value;
    //setTimeout(practice3Work,3000);
    return new Promise((resolve,reject)=>{
        let successMessage={
            status:'Success',
            message : 'Entered value is String<br>' + ReverseString(str)
        };
        let errorMessage = {
            status : 'Error',
            message : 'Entered value is not string'
        };
        if(typeof(str) !== "string" || str === ""){
            setTimeout(()=>reject(errorMessage),500);
        }
        else{
            setTimeout(()=>resolve(successMessage),500);
        }
    })
}
function ReverseString(str) { 
  
    // Check input 
    if(str.length < 2 ) { 
        return 'Enter string more than length : 1';  
    } 
      
    // Take empty array revArray 
    const reverseArray = []; 
    const length = str.length - 1; 
      
    // Looping from the end 
    for(let i = length; i >= 0; i--) { 
        reverseArray.push(str[i]); 
    } 
      
    // Joining the array elements 
    return `Reversed String : ${reverseArray.join('')}`; 
} 
