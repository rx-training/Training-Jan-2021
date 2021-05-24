export function practice(){
    var newWindow;

        function moveBackward() {
            window.history.back();
        }

        function newWin() {
            newWindow = window.open("", "", "width=250, height=250");
        }

        function winResize() {
            newWindow.resizeTo(500, 500);
            newWindow.focus();
        }
        
        function myFunc() { 
            var sidebarContent = document.getElementById("sidebar"); 
            sidebarContent.classList.toggle("active");
            return false; 
        }
}