'use strict';

var session = function() { // class
   
};

session.prototype.checkSession = function() {
    let userData = localStorage.getItem('logged_in_user_data');
    let userID = localStorage.getItem('logged_in_user');
    if(userID == null || userData == null) {
        window.location.href='login.html';
    }
};

session.prototype.isLoggedIn = function() {
    let userData = localStorage.getItem('logged_in_user_data');
    let userID = localStorage.getItem('logged_in_user');
    if(userID != null && userData != null) {
        window.location.href = 'index.html';
    }
};