function stringCheck(){
    var str = document.getElementById('strinCheck').value;
    if(str == "")
    {
        alert("Enter string");
    }
    else{
        alert(str);
    }
    return false;
}