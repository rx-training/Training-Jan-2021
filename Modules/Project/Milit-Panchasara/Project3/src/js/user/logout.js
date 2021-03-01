'use strict';

var logout = function() { // class
   
};

logout.prototype.userLogOut = function() {
    let userData = localStorage.getItem('logged_in_user_data');
    let userID = localStorage.getItem('logged_in_user');
    if(userID != null && userData != null) {
        localStorage.removeItem('logged_in_user_data');
        localStorage.removeItem('logged_in_user');
        window.location.href='login.html';
    }
};