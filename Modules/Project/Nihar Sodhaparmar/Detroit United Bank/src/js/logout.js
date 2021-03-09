$(document).ready(function (){

    $("#logout-btn").on("click", function (){

        localStorage.removeItem("loggedUserAccountNumber");
        location.assign("index.html");
    });
});