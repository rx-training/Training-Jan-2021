'use strict';

var logout = function() { // logout class
   
};

//function to logout user
logout.prototype.userLogOut = function() {
    //fetch and remove logged in user data to finish session
    let userData = localStorage.getItem('logged_in_user_data');
    let userID = localStorage.getItem('logged_in_user');
    if(userID != null && userData != null) {
        localStorage.removeItem('logged_in_user_data');
        localStorage.removeItem('logged_in_user');
        window.location.href='/html/login.html';
    }
};