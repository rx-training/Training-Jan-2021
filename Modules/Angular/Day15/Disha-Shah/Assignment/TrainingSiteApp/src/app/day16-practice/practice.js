export function practice(){
    function checkString() {
        var userStr = document.getElementById("str").value;
        var userTrimStr = userStr.trim();
        var strLen = userTrimStr.length;
        if (strLen == 0) {
            document.getElementById("demo").innerHTML = "Empty String!!";
        }
        else {
            document.getElementById("demo").innerHTML = "Input is: " + userTrimStr;
        }
        return false;
    }

    function splitWords(){
        var address = document.getElementById("address").value;
        var trimAddress = address.trim();
        var splitStr = trimAddress.split(",");
        var i = 0;
        var txt = "";
        for(i; i<splitStr.length; i++) {
            txt += splitStr[i] + "<br>";
        }
        document.getElementById("demo1").innerHTML = "split at ,: " + txt;
        return false;
    }

    function specifiedChar(){
        var userStr = document.getElementById("userStr").value;
        var userTrimStr = userStr.trim();
        var givenChars = userTrimStr.substr(2,6);
        document.getElementById("demo2").innerHTML = "6 chars are specified to take out: " + givenChars;
        return false;
    }

    function clickForDate(){
        var d = new Date();
        document.getElementById("demo3").innerHTML = d;
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}