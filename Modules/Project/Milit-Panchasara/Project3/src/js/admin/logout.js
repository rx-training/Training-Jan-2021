'use strict';

var logoutAdmin = function() { // class
   
};

logoutAdmin.prototype.logOut = function() {
    let userData = localStorage.getItem('logged_in_admin_data');
    let userID = localStorage.getItem('logged_in_admin');
    if(userID != null && userData != null) {
        localStorage.removeItem('logged_in_admin_data');
        localStorage.removeItem('logged_in_admin');
        window.location.href='login.html';
    }
};