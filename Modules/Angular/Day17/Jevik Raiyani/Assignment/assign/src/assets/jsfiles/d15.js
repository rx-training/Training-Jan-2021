
function Calculate(){
 var a = parseInt(document.getElementById("number1").value);
 var b = parseInt(document.getElementById("number2").value);
 var radio = document.getElementsByName('calculate');
 var radiochecks;
 for(i = 0; i < radio.length; i++) { 
     if(radio[i].checked){
         radiochecks=radio[i].value;   
     }  
 } 
 if(radiochecks=="sum"){
             document.getElementById("result1").innerHTML = a + b;
         }
         else if(radiochecks=="sub"){
             document.getElementById("result1").innerHTML = a - b;
         }
         else if(radiochecks=="mul"){
             document.getElementById("result1").innerHTML = a * b;
         }
         else if(radiochecks=="div"){
             document.getElementById("result1").innerHTML = a/b;
         }
         else{
             document.getElementById("result2").innerHTML = "valid number";
         }
         return 0;
} 
function Reset(){
 document.getElementById("result1").innerHTML ="";

    document.getElementById("result2").innerHTML ="";
}