$(document).ready(function () {

    $("#password").on("blur", function (){

        var pass = $(this).val();

        var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/g;

        if(pattern.test(pass) == false){
            $("#passwordValid").css("display","block");
            $("#passwordValid").text("Password must contain minimum six characters, at least one letter, one number and one special character");
            $("#create-ac-next-btn").prop("disabled", true);
        }
        else{
            $("#passwordValid").text("");
            $("#create-ac-next-btn").prop("disabled", false);
        }
    })
});


//Userprofile Class
var userProfile = function (){

    this.accountType = $("#account-type").val();
    this.maritalStatus = $("#marital-status").val();
    this.occupation = $("#occupation").val();
    this.income = $("#income").val();
    this.pass = $("#password").val();
    this.cpass = $("#cpassword").val();
    this.fullname = $("#fullname").val();
    this.fathername = $("#fathername").val();
    this.mothername = $("#mothername").val();
    this.email = $("#email").val();
    this.dob = $("#dob").val();
    this.gender = $("input[name='gender']:checked").val();

}

//Function for validating fields of userProfile
userProfile.prototype.validateFields = function (){

    $acTypeError = $("#acTypeError");
    $maritalStatusError = $("#maritalStatusError");
    $occupationError = $("#occupationError");
    $incomeError = $("#incomeError");
    $passwordError = $("#passwordError");

    $acTypeError.html("");
    $maritalStatusError.html("");
    $occupationError.html("");
    $incomeError.html("");
    $passwordError.html("");

    var isValid = true;
    if(this.accountType == "select"){
        $acTypeError.html("Please Select Account Type");
        isValid = false;
    }

    if(this.maritalStatus == "select"){
        $maritalStatusError.html("Please Select Marital Status");
        isValid = false;
    }

    if(this.occupation == "select"){
        $occupationError.html("Please Select Occupation");
        isValid = false;
    }

    if(this.income == "select"){
        $incomeError.html("Please Select Income")
        isValid = false;
    }

    if(this.pass != this.cpass){
        $passwordError.html("Password and Confirm Password does not match");
        isValid = false;
    }

    return isValid;

};

//Function for submit data of userProfile
userProfile.prototype.submitUserProfileData = function (){

    if(!this.validateFields()){
        return false;
    }

    var user = JSON.parse(localStorage.getItem("user"));

    var userDetails = {
        "accountType" : this.accountType,
        "fullname" : this.fullname,
        "fathername" : this.fathername,
        "mothername" : this.mothername,
        "email" : this.email,
        "gender" : this.gender,
        "dob" : this.dob,
        "maritalStatus" : this.maritalStatus,
        "occupation" : this.occupation,
        "income" : this.income,
        "password" : this.pass,
        "number" : user.number
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    location.assign("add-address.html");
    return false;
    
};