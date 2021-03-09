function stringArray(){
    var str = document.getElementById('strinCheck').value;
    if(str == "")
    {
        alert("Enter string");
    }
    else{
        var res = str.split(" ");
        document.getElementById("outputArray").innerHTML ="Array length : "+res.length+"<br>Array : "+res;
    }
    return false;
}