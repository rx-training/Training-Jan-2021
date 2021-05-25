    function moveForward() {
        window.location.assign("/javascript/day17practice2");
    }
    function moveNext() {
        window.history.forward();
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }