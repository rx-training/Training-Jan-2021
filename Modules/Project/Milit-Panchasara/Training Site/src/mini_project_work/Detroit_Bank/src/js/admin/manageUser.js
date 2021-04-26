'use strict';

var manageUser = function() { // manageUser class
    //properties
    this.email = $("#email").val();
    this.name = $("#name").val();
    this.password = $('#password').val();
    this.c_password = $('#cpassword').val();
    this.type = $('input[name="c-type"]:checked').val();
};

//function to create new user
manageUser.prototype.create = function() {
    $("#name-error span").html('');
    $("#email-error span").html('');

    //validations
    if(this.name.trim() == "") {
        $("#name-error span").html('Please enter a name.');
        return;
    }

    if(!this.checkEmailFormat(this.email)) {
        $("#email-error span").html('Please enter valid email.');
        return;
    }

    if(this.checkEmailExist(this.email)) {
        $("#email-error span").html('Email already linked with other account.');
        return;
    }
    //validations over

    //check password and store new user data
    if(this.password.match(/[A-Z]+/g) != null && this.password.match(/[a-z]+/g) != null && this.password.match(/[0-9]+/g) != null && this.password.length > 5) {
        if(this.password != this.c_password) {
            $("#cpassword-error span").html("Password didn't match !");
            return;
        }
        let newUserCount = 1;
        if(localStorage.getItem('totalUsersCount') != null) {
            newUserCount = (parseInt(localStorage.getItem('totalUsersCount')) + 1);
        }
        let prefix = Math.pow(10, (7 - parseInt((newUserCount.toString()).length)));
        let account_id = 'DUB' + prefix + newUserCount;
        var userData = {
            "id": newUserCount,
            "account_id":account_id,
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
        (new viewUsers).list();
        return;
    }
    else {
        $("#password-error span").html("Password should include at least 1 Uppercase letter, 1 lowercase letter, 1 number & minimum length of 6 characters.");
        return;
    }
};

manageUser.prototype.checkEmailFormat = function (email) {
    if(!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) || email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-]+$/g) != email) {
        return false;
    }
    else {
        return true;
    }
}

manageUser.prototype.checkEmailExist = function (email) {
    let userData = localStorage.getItem('users');
    if(userData == null) {
        return false;
    }
    else {
        let isExist = false;
        userData = JSON.parse(userData);
        userData.forEach(user => {
            if(user.email == email) {
                isExist = true;
                return;
            }
        });
        return isExist;
    }
}

//function to block the existing user
manageUser.prototype.block = function(id) {
    if(!confirm("You will be blocked. Are you sure?")) {
        return; 
    }
    let users = localStorage.getItem('users');
    if(users != null) {
        users = JSON.parse(users);
        for (let i = 0; i < users.length; i++) { //find user from array and update status
            if(id == users[i].id) {
                users[i].is_blocked = 1;
                break;
            }
        }
        localStorage.setItem('users',JSON.stringify(users));
        if(localStorage.getItem('logged_in_user') == id) {
            localStorage.removeItem('logged_in_user');
            localStorage.removeItem('logged_in_user_data');
        }
        (new viewUsers).list();
    }
};

//function to unblock the existing user
manageUser.prototype.unblock = function(id) {
    if(!confirm("You will be unblocked. Are you sure?")) {
        return; 
    }
    let users = localStorage.getItem('users');
    if(users != null) {
        users = JSON.parse(users);
        for (let i = 0; i < users.length; i++) { //find user from array and update status
            if(id == users[i].id) {
                users[i].is_blocked = 0;
                break;
            }
        }
        localStorage.setItem('users',JSON.stringify(users));
        (new viewUsers).list();
    }
};

//========================================================================================================================//

var viewUsers = function() { // view class
};

//function to show list of users on page
viewUsers.prototype.list = function() {
    let users = localStorage.getItem('users');
    if(users != null) {
        users = JSON.parse(users);
        $('#users-body').html('');
        users.forEach(user => {
            if(user.is_blocked == 0) { //white colored row and a block button for blocked users
                $('#users-body').append('<tr>\
                    <td>' + user.id + '</td>\
                    <td>' + user.name + '</td>\
                    <td>' + user.email + '</td>\
                    <td>' + user.account_type + '</td>\
                    <td>' + user.money + '</td>\
                    <td><a class="btn btn-sm btn-outline-secondary">Details</a> <button class="btn btn-sm btn-outline-danger" onclick="(new manageUser).block(' + user.id + ')">Block</button></td>\
                    </tr>');
            }
            else { //red colored row and a unblock button for blocked users
                $('#users-body').append('<tr style="background-color:#ffe0e1">\
                    <td>' + user.id + '</td>\
                    <td>' + user.name + '</td>\
                    <td>' + user.email + '</td>\
                    <td>' + user.account_type + '</td>\
                    <td>' + user.money + '</td>\
                    <td><a class="btn btn-sm btn-outline-secondary">Details</a> <button class="btn btn-sm btn-outline-success" onclick="(new manageUser).unblock(' + user.id + ')">Unblock</button></td>\
                    </tr>');
            }
            
        });
    }

};

























