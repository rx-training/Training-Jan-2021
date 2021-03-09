var str="Hello, How are you?"
function stringArray(){
    var indexNum = parseInt(document.getElementById('indexCount').value);
    var charNum = parseInt(document.getElementById('charCount').value);
    if(isNaN(indexNum)==true || isNaN(charNum) == true)
    {
        alert("Enter value");
    }
    else{
        var res = str.substr(indexNum,charNum);
        var ans = "";
        for(var x in res){
            ans+="character:"+res[x]+"<br>"
        }
        document.getElementById("outputArray").innerHTML = ans;
    }
    return false;
}