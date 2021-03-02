'use strict';

var profile = function() { // profile class
   
};

//function to show profile details on page.
profile.prototype.show = function() {
    var userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    $("#name").val(userData.name);
    $("#ac-id").val(userData.account_id);
    $("#email").val(userData.email);
    $("#c-type-"+userData.account_type).prop("checked", true);
};

//function to save updated profile details
profile.prototype.update = function() {
    $("#name-error span").html('');
    $("#email-error span").html('');

    let email = $("#email").val();
    let name = $("#name").val();
    let type = $('input[name="c-type"]:checked').val();
    
    //data validations
    if(name.trim() == "") {
        $("#name-error span").html('Please enter a name.');
        return false;
    }

    if(!this.checkEmailFormat(email)) {
        $("#email-error span").html('Please enter valid email.');
        return false;
    }

    if(this.checkEmailExist(email)) {
        $("#email-error span").html('Email already linked with other account.');
        return false;
    }
    //data validations over

    //fetch user data and save new data
    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    userData.email = email;
    userData.name = name;
    userData.account_type = type;

    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));

    let users = localStorage.getItem('users');
    if(users != null) {
        users = JSON.parse(users);
        for (let i = 0; i < users.length; i++) {
            if(userData.id == users[i].id) {
                users[i] = userData;
                break;
            }
        }
        localStorage.setItem('users',JSON.stringify(users));
        alert("Profile updated successfully.");
        return true;
    }
};

//function to store updated password
profile.prototype.updatePassword = function() {
    let currentPass = $("#curr-password").val();
    let pass = $("#password").val();
    let confirmPass = $('#cpassword').val();
    
    $("#curr-password-error span").html('');
    $("#cpassword-error span").html('');
    $("#password-error span").html('');

    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    //check current password
    if(userData.password != currentPass) {
        $("#curr-password-error span").html("Incorrect Password");
        return;
    }

    //check new password specifications
    if(pass.match(/[A-Z]+/g) != null && pass.match(/[a-z]+/g) != null && pass.match(/[0-9]+/g) != null && pass.length > 5) {
        if(pass != confirmPass) {
            $("#cpassword-error span").html("Password didn't match !");
            return;
        }
        userData.password = pass;

        localStorage.setItem('logged_in_user_data', JSON.stringify(userData));

        let users = localStorage.getItem('users');
        if(users != null) {
            users = JSON.parse(users);
            for (let i = 0; i < users.length; i++) { //find user and save new password
                if(userData.id == users[i].id) {
                    users[i] = userData;
                    break;
                }
            }
            localStorage.setItem('users',JSON.stringify(users));
            $("#change-pass-form").trigger("reset");
            $("#change-pass-modal").modal("toggle");
            return;
        }
    }
    else {
        $("#password-error span").html("Password should include at least 1 Uppercase letter, 1 lowercase letter, 1 number & minimum length of 6 characters.");
        return;
    }
};

//function to check for email field format
profile.prototype.checkEmailFormat = function (email) {
    if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) != email) {
        return false;
    }
    else {
        return true;
    }
}

//function to check for duplicate mail
profile.prototype.checkEmailExist = function (email) {
    let userData = localStorage.getItem('users');
    if(userData == null) {
        return false;
    }
    else {
        let isExist = false;
        userData = JSON.parse(userData);
        userData.forEach(user => {
            if(user.email == email && user.id != localStorage.getItem('logged_in_user')) {
                isExist = true;
                return;
            }
        });
        return isExist;
    }
}
