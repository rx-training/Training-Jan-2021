'use strict';

var login = function() { // login class
    // Properties
    this.email = $('#email').val();
    this.password = $('#password').val();
    
    
};

//function for user login
login.prototype.userLogin = function() {

    //validating input fields
    if(!this.validateFields(this.email, this.password)) {
        return;
    }

    //validations and redirect
    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : JSON.stringify([]));
    let isDone = false;
    let isBlocked = false;
    users.forEach(user => { //find user from array stored in localstorage
        if(user.email == this.email && user.password == this.password) {
            if(user.is_blocked == 1) { //checks whether user is blocked or not
                isBlocked = true;
                return;
            }
            //set user data to handle session
            localStorage.setItem("logged_in_user_data",JSON.stringify(user));
            localStorage.setItem("logged_in_user",JSON.stringify(user.id));
            window.location.href = 'index.html';
            isDone = true;
            return;
        }
    });
    if(isBlocked) {
        $('#login-error span').html('This acoount has been blocked by the Bank admins.');
        return;
    }
    if(!isDone) {
        $('#login-error span').html('Invalid Credentials');
    }
    return;
};

login.prototype.validateFields = function(email, password) { //validation function
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