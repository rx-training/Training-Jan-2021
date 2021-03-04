'use strict';

var sessionAdmin = function() { // sessionAdmin class
   
};

// function to check session status
sessionAdmin.prototype.checkSession = function() {
    let userData = localStorage.getItem('logged_in_admin_data');
    let userID = localStorage.getItem('logged_in_admin');
    if(userID == null || userData == null) {
        window.location.href='login.html';
    }
};

//function to avoid user from opening login page.
sessionAdmin.prototype.isLoggedIn = function() {
    let userData = localStorage.getItem('logged_in_admin_data');
    let userID = localStorage.getItem('logged_in_admin');
    if(userID != null && userData != null) {
        window.location.href = 'index.html';
    }
};