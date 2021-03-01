var max=0;
var sum=0;

function outputCheck(){
    var age1=document.getElementById('age1').value;
    var age2=document.getElementById('age2').value;
    var age3=document.getElementById('age3').value;
    console.log(age1);
    window.alert(age2);
    document.write(age3);
}
function calculateAge(){
    var age4=document.getElementById('age4').value;
    var age5=document.getElementById('age5').value;
    var age6=document.getElementById('age6').value;
    if(age4>age5)
    {
        if(age4>age6){
            max=age4;
        }
        else{max=age6;}
    }
    else{
        if(age5>age6){
            max=age5;
        }
        else{max=age6;}
    }
    window.alert("maximum age is "+max);
}
function changeHeading(){
    document.getElementById("head1").innerHTML="<font color='blue'>Practice 1"
}