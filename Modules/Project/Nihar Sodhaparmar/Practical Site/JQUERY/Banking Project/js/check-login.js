$(document).ready(function (){

    if(localStorage.getItem("loggedUserAccountNumber") === null){
        alert("Please Login First");
        location.assign("index.html");
        return false;
    }

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    $("#acNumber").text(userAcNumber);

})