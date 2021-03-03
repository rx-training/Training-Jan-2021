
//Login Class
var login = function () {

    this.acNumber = $("#acNumber").val();
    this.password = $("#password").val();

};

//Function for validating Fields of login
login.prototype.validateFields = function () {

    let isValid = true;

    $acNumberError = $("#acNumberError");
    $passwordError = $("#passwordError");

    $acNumberError.html("");
    $passwordError.html("");

    if (this.acNumber == "") {
        $acNumberError.html("Please Provide Account Number");
        isValid = false;
    }

    if (this.password == "") {
        $passwordError.html("Please Provide Password");
        isValid = false;
    }

    return isValid;

};

//User Login Function of login
login.prototype.userLogin = function () {

    if (!this.validateFields()) {
        return false;
    }

    var accounts = JSON.parse(localStorage.getItem("accounts"));
    console.log(accounts);

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber == this.acNumber && accounts[i].password == this.password) {
            console.log("login");
            localStorage.setItem("loggedUserAccountNumber", this.acNumber);
            location.assign("user-home.html");
            return;
        }
    }

    $("#loginError").html("Invalid Login Details");
    return;
};


//Submuit Class for submitting data from index File
var submitUser = function () {

    this.name = $("#name").val();
    this.number = $("#number").val();

};

//Function for Submit User Data of submitUser
submitUser.prototype.submitUserData = function () {

    var isChecked = $("#condition").prop("checked");

    if (!isChecked) {
        $("#checkboxError").html("Please select the Checkbox"); 
        return false;
    }

    var user = {
        "name": this.name,
        "number": this.number
    };

    localStorage.setItem("user", JSON.stringify(user));

    $("#otp-container").html('\
                                        <div class="font-weight-bold mb-5">An SMS with the OTP has been sent to your mobile number.</div>\
                                        <div class="form-group">\
                                            <label class="form-control-label" for="otp">Enter OTP</label>\
                                            <input class="form-control" type="text" name="otp" id="otp" required>\
                                            <div id="otpError" class="text-danger"></div>\
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
};

function nextBtnClick(){
    //alert("next");

    var otp = $("#otp").val();

    if (otp == "0000") {
        //alert("Confirmed");
        location.assign("create-account.html");
    }
    else {
        $("#otpError").html("please provide valid otp");
        return false;
    }
}

function backBtnClick(){
    location.reload();
}