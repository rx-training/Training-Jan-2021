function createAccount(){

    var accountType = $("#account-type").val();

    if(accountType == "select"){
        alert ("Please Select Account Type");
        return false;
    }


    var maritalStatus = $("#marital-status").val();

    if(maritalStatus == "select"){
        alert("Please Select Marital Status");
        return false;
    }


    var occupation = $("#occupation").val();

    if(occupation == "select"){
        alert("Please Select Occupation");
        return false;
    }

    var income = $("#income").val();

    if(income == "select"){
        alert("Please Select Income");
        return false;
    }

    var pass = $("#password").val();
    var cpass = $("#cpassword").val();

    if(pass != cpass){
        alert("Password and Confirm Password does not match");
        return false;
    }


    var fullname = $("#fullname").val();
    var fathername = $("#fathername").val();
    var mothername = $("#mothername").val();
    var email = $("#email").val();
    var dob = $("#dob").val();
    var gender = $("input[name='gender']:checked").val();

    var user = JSON.parse(localStorage.getItem("user"));

    var userDetails = {
        "accountType" : accountType,
        "fullname" : fullname,
        "fathername" : fathername,
        "mothername" : mothername,
        "email" : email,
        "gender" : gender,
        "dob" : dob,
        "maritalStatus" : maritalStatus,
        "occupation" : occupation,
        "income" : income,
        "password" : pass,
        "number" : user.number
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    location.assign("add-address.html");
    return false;
    // alert(accountType + " " + maritalStatus + " " + occupation + " " + income);
    // alert(fullname + " " + fathername + " " + mothername + " " + email + " " + dob + " " + gender);
}


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
})