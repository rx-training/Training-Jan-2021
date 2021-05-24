export function practice(){
    function moveForward() {
        window.location.assign("Practice2.html");
    }
    function moveNext() {
        window.history.forward();
    }

    function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }
}