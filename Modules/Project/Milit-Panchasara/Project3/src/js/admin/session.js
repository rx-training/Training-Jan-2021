'use strict';

var sessionAdmin = function() { // class
   
};

sessionAdmin.prototype.checkSession = function() {
    let userData = localStorage.getItem('logged_in_admin_data');
    let userID = localStorage.getItem('logged_in_admin');
    if(userID == null || userData == null) {
        window.location.href='login.html';
    }
};

sessionAdmin.prototype.isLoggedIn = function() {
    let userData = localStorage.getItem('logged_in_admin_data');
    let userID = localStorage.getItem('logged_in_admin');
    if(userID != null && userData != null) {
        window.location.href = 'index.html';
    }
};