'use strict';

var login = function() { // class
    // Properties:
    this.email = $('#email').val();
    this.password = $('#password').val();
    
    
};

login.prototype.userLogin = function() {
    if(!this.validateFields(this.email, this.password)) {
        return;
    }

    //do validations and redirect
    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : JSON.stringify([]));

    let isBlocked = false;
    users.forEach(user => {
        if(user.email == this.email && user.password == this.password) {
            if(user.is_blocked == 1) {
                isBlocked = true;
                return;
            }
            localStorage.setItem("logged_in_user_data",JSON.stringify(user));
            localStorage.setItem("logged_in_user",JSON.stringify(user.id));
            window.location.href = 'index.html';
            return;
        }
    });
    if(isBlocked) {
        $('#login-error span').html('This acoount has been blocked by the Bank admins.');
        return;
    }

    $('#login-error span').html('Invalid Credentials');
    return;
};

login.prototype.validateFields = function(email, password) {
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