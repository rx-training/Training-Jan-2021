export function string(){
    var str = "Please locate where 'locate' occurs!";
        var indexofPos = str.indexOf("locate",15);
        var searchPos = str.search("locate");
        document.getElementById("demo1").innerHTML = "Indexof: " + indexofPos;
        document.getElementById("demo2").innerHTML = "search: " + searchPos;

        var str = "Apple, Banana, Kiwi";
        var sliceRes = str.slice(7,13);
        var subStringRes = str.substring(7,13);
        var subStrRes = str.substr(-4);
        document.getElementById("demo3").innerHTML = "slice: " + sliceRes;
        document.getElementById("demo4").innerHTML = "substring: " + subStringRes; 
        document.getElementById("demo4").innerHTML = "substr: " + subStrRes; 

        function myFunction() {
            var str = document.getElementById("demo5").innerHTML; 
            var txt1 = str.replace(/MICROSOFT/i,"Google");
            document.getElementById("demo5").innerHTML = txt1;
        }

        function myRegExFunc() {
            var str = document.getElementById("demo6").innerHTML; 
            var txt1 = str.replace(/Microsoft/g,"Google");
            document.getElementById("demo6").innerHTML = txt1;
        }

        var trimStr = "      Hello World!";
        var trimRes = trimStr.trim();
        document.getElementById("demo7").innerHTML = "trim: " + trimRes;
        document.getElementById("demo8").innerHTML = "charAt position 2: " + trimRes.charAt(2);

        document.getElementById("demo9").innerHTML = "Original string: " + str;
        var splitStr = str.split(",");
        var i = 0;
        var txt = "";
        for(i; i<splitStr.length; i++) {
            txt += splitStr[i] + "<br>";
        }
        document.getElementById("demo10").innerHTML = "split at ,: " + txt;

        function myFunc() { 
            var sidebarContent = document.getElementById("sidebar"); 
            sidebarContent.classList.toggle("active");
            return false; 
        }
}