'use strict';

var deposit = function() { // class
   this.amount = $("#d-amount").val();
   this.password = $('#d-password').val();
};

deposit.prototype.depositMoney = function() {
    $('#d-amount-error span').html('');
    $('#d-password-error span').html('');
    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    if(!this.validateFields(this.amount, this.password, userData)) {
        return;
    }

    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : []);
    
    for(var j=0;j<users.length;j++) {
        if(users[j].id == userData.id ) {
            users[j].money  += parseInt(this.amount);
        }
    }
    localStorage.setItem('users',JSON.stringify(users));

    userData.money += parseInt(this.amount);
    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));
    
    $("#d-amount").val('');
    $('#d-password').val('');
    $("#deposit-modal").modal('toggle');
};

deposit.prototype.validateFields = function(amount, password, userData) {
    let isValid = true;
    if(this.amount == null || this.amount < 1 || this.amount > 100000) {
        $('#d-amount-error span').html('Invalid amount. Amount should be between 1 and 1,00,000');
        isValid = false;
    }
    if(this.password.trim() == "" || userData.password != this.password) {
        $('#d-password-error span').html('Please enter correct password');
        isValid = false;
    }

    return isValid;
}



var withdraw = function() { // class
    this.amount = $("#w-amount").val();
    this.password = $('#w-password').val();
};

withdraw.prototype.withdrawMoney = function() {
    $('#w-amount-error span').html('');
    $('#w-password-error span').html('');
    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    if(!this.validateFields(this.amount, this.password, userData)) {
        return;
    }

    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : []);
    
    for(var j=0;j<users.length;j++) {
        if(users[j].id == userData.id ) {
            users[j].money  -= parseInt(this.amount);
        }
    }
    localStorage.setItem('users',JSON.stringify(users));
    
    userData.money -= parseInt(this.amount);
    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));
    $("#w-amount").val('');
    $('#w-password').val('');
    $("#withdraw-modal").modal('toggle');
};

withdraw.prototype.validateFields = function(amount, password, userData) {
    let isValid = true;
    if(this.amount == null || this.amount < 1 || this.amount > 100000) {
        $('#w-amount-error span').html('Invalid amount. Amount should be between 1 and 1,00,000');
        isValid = false;
    }
    if(amount > userData.money) {
        $('#w-amount-error span').html("Account doesn't have sufficient money to withdraw !");
        isValid = false;
    }
    if(this.password.trim() == "" || userData.password != this.password) {
        $('#w-password-error span').html('Please enter correct password');
        isValid = false;
    }

    return isValid;
}


var transfer = function() { // class
    this.amount = $("#t-amount").val();
    this.accountNo = $("#account-id").val();
    this.password = $('#t-password').val();
};

transfer.prototype.transferMoney = function() {
    $('#t-amount-error span').html('');
    $('#t-account-error span').html('');
    $('#t-password-error span').html('');
    $('#transfer-error span').html('');
    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    if(!this.validateFields(this.amount, this.password, userData, this.accountNo)) {
        return;
    }
    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : []);

    let receiverNotFound = true;
    
    for(var i=0;i<users.length;i++) {
        if(users[i].id == this.accountNo) {
            receiverNotFound = false;
            for(var j=0;j<users.length;j++) {
                if(users[j].id == userData.id ) {
                    userData.money -= parseInt(this.amount);
                    users[j].money = userData.money;
                    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));
                }
            }
            users[i].money += parseInt(this.amount);
            $("#transfer-form").trigger("reset");
            $("#transfer-modal").modal('toggle');
        }
    }
    localStorage.setItem('users',JSON.stringify(users));

    if(receiverNotFound) {
        $("#transfer-error span").html('Receiver account not found.');
    }

    
};

transfer.prototype.validateFields = function(amount, password, userData, accountNo) {
    let isValid = true;
    if(amount == null || amount < 1 || amount > 100000) {
        $('#t-amount-error span').html('Invalid amount. Amount should be between 1 and 1,00,000');
        isValid = false;
    }
    if(amount > userData.money) {
        $('#t-amount-error span').html("Account doesn't have sufficient money to withdraw !");
        isValid = false;
    }
    if(accountNo == "") {
        $('#t-account-error span').html("Enter correct Account ID !");
        isValid = false;
    }
    if(password.trim() == "" || userData.password != password) {
        $('#t-password-error span').html('Please enter correct password');
        isValid = false;
    }

    return isValid;
}