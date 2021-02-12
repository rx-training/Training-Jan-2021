function greater()
{
    var num1 = parseInt(prompt("Enter number 1"));
    var num2 = parseInt(prompt("Enter number 2"));
    var num3 = parseInt(prompt("Enter number 3"));
    if(num1>num2 && num1>num3)
    {
        document.getElementById('greater').innerHTML="num1="+num1+"<br/>num2="+num2+"<br/>num3="+num3+"<br/> Greater number is :"+num1;
    }
    else if(num2>num1 && num2>num3)
    {
        document.getElementById('greater').innerHTML="num1="+num1+"<br/>num2="+num2+"<br/>num3="+num3+"<br/> Greater number is :"+num2;   
    }
    else if(num3> num1 && num3>num2){
        document.getElementById('greater').innerHTML="num1="+num1+"<br/>num2="+num2+"<br/>num3="+num3+"<br/> Greater number is :"+num3;
    }
    else{
        document.getElementById('greater').innerHTML="Please Enter Some Value";
    }
    var sum=0;
    if(num1>40)
    {
        sum=sum+num1;
    }
    if(num2>40)
    {
        sum=sum+num2;
    }
    if(num3>40){
        sum=sum+num3;
    }
    else{
        
    }
    if(sum==0)
    {
        document.getElementById('sums').innerHTML="No numbers are greater than 40";
    }
    else{
        document.getElementById('sums').innerHTML="sum of greater than 40 numbers are = "+sum;
    }
}
function citites()
{
    var cities = ['Ahmedabad','Surat','Rajkot','Goa','Maharastra'];
    for(city of cities)
    {
        alert(city);
    }
}