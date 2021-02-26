'use strict';

var manageUser = function() { // class
    this.email = $("#email").val();
    this.name = $("#name").val();
    this.password = $('#password').val();
    this.c_password = $('#cpassword').val();
    this.type = $('input[name="c-type"]:checked').val();
};

manageUser.prototype.create = function() {
    if(this.password.match(/[A-Z]+/g) != null && this.password.match(/[a-z]+/g) != null && this.password.match(/[0-9]+/g) != null && this.password.length > 5) {
        if(this.password != this.c_password) {
            $("#cpassword-error span").html("Password didn't match !");
            return;
        }
        let newUserCount = 1;
        if(localStorage.getItem('totalUsersCount') != null) {
            newUserCount = (parseInt(localStorage.getItem('totalUsersCount')) + 1);
        }
        var userData = {
            "id": newUserCount,
            "name": this.name,
            "email": this.email,
            "date_created": Date(),
            "account_type" : this.type,
            "is_blocked" : 0,
            "money":0,
            "password": this.password
        };


        let users = localStorage.getItem('users');
        if(users != null) {
            // users += "|" + JSON.stringify(userData);
            users = JSON.parse(users);
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
        }
        else {
            users = new Array(userData);
            localStorage.setItem('users', JSON.stringify(users));
        }

        localStorage.setItem('totalUsersCount', newUserCount);
        $("#add-user-form").trigger("reset");
        $("#add-user-modal").modal("toggle");
        return;
    }
    else {
        $("#password-error span").html("Password should include at least 1 Uppercase letter, 1 lowercase letter, 1 number & minimum length of 6 characters.");
        return;
    }
};












