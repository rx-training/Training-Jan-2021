$(document).ready(function(){
            
    var x = JSON.parse(localStorage.logged_in_admin);
    $("#adminName").append(x.Username).css("text-transform", "capitalize");
    $(".adminName").append(x.Username).css("text-transform", "capitalize");

    $("#logoutBtn").click(function(){
        localStorage.removeItem("logged_in_admin");
    });


});

function myFunc() { 
        var sidebarContent = document.getElementById("sidebar"); 
        sidebarContent.classList.toggle("active");
        return false; 
    }