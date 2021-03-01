'use strict';

var profile = function() { // class
   
};

profile.prototype.show = function() {
    var userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    $("#name").val(userData.name);
    $("#email").val(userData.email);
    $("#c-type-"+userData.account_type).prop("checked", true);
};

profile.prototype.update = function() {
    $("#name-error span").html('');
    $("#email-error span").html('');

    let email = $("#email").val();
    let name = $("#name").val();
    let type = $('input[name="c-type"]:checked').val();
    
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

profile.prototype.updatePassword = function() {
    let currentPass = $("#curr-password").val();
    let pass = $("#password").val();
    let confirmPass = $('#cpassword').val();
    
    $("#curr-password-error span").html('');
    $("#cpassword-error span").html('');
    $("#password-error span").html('');

    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    if(userData.password != currentPass) {
        $("#curr-password-error span").html("Incorrect Password");
        return;
    }

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
            for (let i = 0; i < users.length; i++) {
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


profile.prototype.checkEmailFormat = function (email) {
    if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) != email) {
        return false;
    }
    else {
        return true;
    }
}

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
