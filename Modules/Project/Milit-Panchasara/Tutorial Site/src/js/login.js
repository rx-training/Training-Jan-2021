'use strict';

var loginUser = function() { // loginUser class
    // Properties
    this.email = $('#email').val();
    this.password = $('#password').val();
    
    
};

//function to login
loginUser.prototype.login = async function() {
    if(!this.validateFields(this.email, this.password)) {
        return;
    }

    //do validations and redirect
    var adminFile = await fetch("../../json/users.json");
    var data = await adminFile.json();

    //finds user and matches credentials
    data.admins.forEach(admin => {
        if(admin.email == this.email && admin.password == this.password) {
            localStorage.setItem("logged_in_user_data",JSON.stringify(admin));
            localStorage.setItem("logged_in_user",JSON.stringify(admin.id));
            window.location.href = '../index.html';
        }
        else {
            $('#login-error span').html('Invalid Credentials');
            return;
        }
    });
};

loginUser.prototype.validateFields = function(email, password) {
    let isValid = true;
    $('#email-error span').html('');
    $('#password-error span').html('');
    if(email.trim() == "") {
        $('#email-error span').html('Please enter E-mail');
        isValid = false;
    }
    if(password.trim() == "") {
        $('#password-error span').html('Please enter password');
        isValid = false;
    }

    return isValid;
}