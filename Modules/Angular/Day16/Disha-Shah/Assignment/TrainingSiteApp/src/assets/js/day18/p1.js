    function mySquare(callBack) {
        var num1 = parseInt(document.getElementById("num1").value);
        callBack(num1);
        return false;

    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }