    function varFunc() {
        var x = 10;
        var i=0;
        {
            var x = 45;
            document.getElementById("demo1").innerHTML = "value inside block " + x + "<br>";
        }
        document.getElementById("demo1").innerHTML += "value outside block " + x + "<br>";
        document.getElementById("demo1").innerHTML += "value of i before loop " + i + "<br>";
        for(var i = 0; i<5; i++){

        }
        document.getElementById("demo1").innerHTML += "value of i after block " + i + "<br>";
        return false;
    }

    function letFunc() {
        let x = 10;
        let i=0;
        {
            let x = 45;
            document.getElementById("demo2").innerHTML = "value inside block " + x + "<br>";
        }
        document.getElementById("demo2").innerHTML += "value outside block " + x + "<br>";
        document.getElementById("demo2").innerHTML += "value of i before loop " + i + "<br>";
        for(let i = 0; i<5; i++){

        }
        document.getElementById("demo2").innerHTML += "value of i after block " + i + "<br>";
        return false;
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }