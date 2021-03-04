$(document).ready(function (){

    $("#login-btn").on("click", function(){
        //alert("login");

        var acNumber = $("#acNumber").val();
        var password = $("#password").val();

        var accounts = JSON.parse(localStorage.getItem("accounts"));

        for(var i = 0; i < accounts.length; i++){
            if(accounts[i].accountNumber == acNumber && accounts[i].password==password){

                localStorage.setItem("loggedUserAccountNumber",acNumber);
                location.assign("user-home.html");
                return false;
            }
        }

        alert("Provide Valid Details");
        return false;

    });
});


function submitUserData(){
    var isChecked = $("#condition").prop("checked");

        if (!isChecked) {
            alert("Please select the Checkbox");
            return false;
        }

        var name = $("#name").val();
        var number = $("#number").val();
        var user = {
            "name": name,
            "number": number
        };

        localStorage.setItem("user", JSON.stringify(user));

        //alert("OTP has been sent to your mobile number");

        $("#otp-container").html('\
                                        <div class="font-weight-bold mb-5">An SMS with the OTP has been sent to your mobile number.</div>\
                                        <div class="form-group">\
                                            <label class="form-control-label" for="otp">Enter OTP</label>\
                                            <input class="form-control" type="text" name="otp" id="otp" required>\
                                        </div>\
                                        <div class="d-flex mt-5">\
                                            <div class="w-50 pr-2">\
                                                <button id="back-btn" class="btn btn-danger btn-block" onclick="backBtnClick()">BACK</button>\
                                            </div>\
                                            <div class="w-50 pl-2">\
                                                <button id="next-btn" class="btn btn-success btn-block" onclick="nextBtnClick()">NEXT</button>\
                                            </div>\
                                        </div>\
                                ');
        return false;
}

function nextBtnClick(){
    //alert("next");

    var otp = $("#otp").val();

    if (otp == "0000") {
        //alert("Confirmed");
        location.assign("create-account.html");
    }
    else {
        alert("please provide valid otp");
        return false;
    }
}

function backBtnClick(){
    location.reload();
}