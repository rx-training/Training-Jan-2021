function result(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    function calculation(number1,number2) {
        
        this.height=number1;
        this.width=number2;
    }
    var x= new calculation(num1,num2)
    var area = x.height*x.width;
    alert("Area Of The Rectengle Is := "+area);
    
}