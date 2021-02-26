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
    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : []);


    users.forEach(user => {
        if(user.email == this.email && user.password == this.password) {
            localStorage.setItem("logged_in_user_data",JSON.stringify(user));
            localStorage.setItem("logged_in_user",JSON.stringify(user.id));
            window.location.href = 'index.html';
            return;
        }
    });
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