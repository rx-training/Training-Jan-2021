$(document).ready(function () {
    $("#loadUserData").click(() => {
        var user = fetch('./Asset/JSON/user.JSON');
        user.then(result => result.json()).then(userData => {
            localStorage.setItem("Users", JSON.stringify(userData));
        });
        alert("Users loaded successfully");
    });
    $("#validateUser").click(() => {
        var userId = parseInt($("#userID").val());
        var userPassword = $("#userPassword").val();
        //alert(userId +" "+userPassword);
        var userArr = JSON.parse(localStorage.getItem("Users"));
        var loginFlag = false;
        userArr.Users.forEach(element => {
            if (userId == element.UserName && userPassword == element.Password) {
                loginFlag = true;
                window.location.href = "./Asset/Pages/loggedIn1.html";
                localStorage.setItem("LoggedUser", JSON.stringify(element));
            }
        });
        if (loginFlag == false) {
            $("#userID").css({ "border": " 1px solid red", "box-shadow": "0 4px 8px 0 rgba(255, 0, 0, 0.5), 0 6px 20px 0 rgba(255, 0, 0, 0.19)" });
            $("#userPassword").css({ "border": " 1px solid red", "box-shadow": "0 4px 8px 0 rgba(255, 0, 0, 0.5), 0 6px 20px 0 rgba(255, 0, 0, 0.19)" });
        }
        return false;
    });
    $("#userID").change(() => {
        $("#userID").css({ "border": "none", "box-shadow": "none" });
        $("#userPassword").css({ "border": "none", "box-shadow": "none" });

        if ((($("#userID").val()).length) != 7) {
            $("#userID").css({ "border": " 1px solid red", "box-shadow": "0 4px 8px 0 rgba(255, 0, 0, 0.5), 0 6px 20px 0 rgba(255, 0, 0, 0.19)" });
        }
        else {
            $("#userID").css({ "border": "none", "box-shadow": "none" });
        }
    });
});

