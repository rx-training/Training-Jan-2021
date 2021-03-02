'use strict';

var deposit = function() { // deposit class
   this.amount = $("#d-amount").val();
   this.password = $('#d-password').val();
};

//function to add money value to user data
deposit.prototype.depositMoney = function() {
    if(!(new session).checkSession()) {
        return;
    }
    $('#d-amount-error span').html('');
    $('#d-password-error span').html('');
    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    if(!this.validateFields(this.amount, this.password, userData)) {
        return;
    }
    
    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : []);
    
    for(var j=0;j<users.length;j++) {
        if(users[j].id == userData.id ) {
            users[j].money  += parseInt(this.amount); //find user from array and update money field value
        }
    }
    localStorage.setItem('users',JSON.stringify(users));

    userData.money += parseInt(this.amount);
    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));

    //save transaction details
    (new transactions(userData.id, "-", this.amount, "Deposit")).store();
    
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

//========================================================================================================================//

var withdraw = function() { // withdraw class
    this.amount = $("#w-amount").val();
    this.password = $('#w-password').val();
};

//function to substract money value to user data
withdraw.prototype.withdrawMoney = function() {
    if(!(new session).checkSession()) {
        return;
    }
    $('#w-amount-error span').html('');
    $('#w-password-error span').html('');
    let userData = JSON.parse(localStorage.getItem('logged_in_user_data'));
    
    if(!this.validateFields(this.amount, this.password, userData)) {
        return;
    }

    let users = JSON.parse((localStorage.getItem('users') != null) ? localStorage.getItem('users') : []);
    
    for(var j=0;j<users.length;j++) {
        if(users[j].id == userData.id ) {
            users[j].money  -= parseInt(this.amount);  //find user from array and update money field value
        }
    }
    localStorage.setItem('users',JSON.stringify(users));
    
    userData.money -= parseInt(this.amount);
    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));

    //save transaction details
    (new transactions(userData.id, "-", this.amount, "Withdraw")).store();

    $("#w-amount").val('');
    $('#w-password').val('');
    $("#withdraw-modal").modal('toggle');
};

//function to validate input fields
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

//========================================================================================================================//

var transfer = function() { // transfer class
    this.amount = $("#t-amount").val();
    this.accountNo = $("#account-id").val();
    this.password = $('#t-password').val();
};

//function to process money values between 2 accounts
transfer.prototype.transferMoney = function() {
    if(!(new session).checkSession()) {
        return;
    }
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
        if(users[i].account_id == this.accountNo) {
            receiverNotFound = false;
            for(var j=0;j<users.length;j++) {
                if(users[j].id == userData.id ) {
                    userData.money -= parseInt(this.amount);  //find current user from array and update money field value
                    users[j].money = userData.money;
                    localStorage.setItem('logged_in_user_data', JSON.stringify(userData));
                }
            }
            users[i].money += parseInt(this.amount);  //find money receiver user from array and update money field value
            $("#transfer-form").trigger("reset");
            $("#transfer-modal").modal('toggle');
        }
    }
    localStorage.setItem('users',JSON.stringify(users));
    
    //save transaction details
    (new transactions(userData.id, this.accountNo, this.amount, "Transfer")).store();

    if(receiverNotFound) {
        $("#transfer-error span").html('Receiver account not found.');
    }

    
};

//function to validate input fields
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
    if(accountNo == "" || accountNo == (JSON.parse(localStorage.getItem('logged_in_user_data'))).account_id) {
        $('#t-account-error span').html("Enter correct Account ID !");
        isValid = false;
    }
    if(password.trim() == "" || userData.password != password) {
        $('#t-password-error span').html('Please enter correct password');
        isValid = false;
    }

    return isValid;
}

//========================================================================================================================//

var transactions = function(fromAccount, toAccount = "", amount, type) { // transactions class
    //properties
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.amount = amount;
    this.type = type;
    this.time = Date();

};

//function to store all the transactions data
transactions.prototype.store = function() {
    let  transactionsCount  = 1;
    if(localStorage.getItem('transactionsCount') != null) {
        transactionsCount = parseInt(localStorage.getItem('transactionsCount')) + 1;
    }
    var currentTran = {
        'id': transactionsCount,
        'type':this.type,
        'fromAccount':this.fromAccount,
        'toAccount':this.toAccount,
        'amount':this.amount,
        'time':this.time
    }
    let transactionsFromStorage = localStorage.getItem('transactions');
    if(transactionsFromStorage == null) {
        localStorage.setItem('transactions', JSON.stringify(Array(currentTran)));
    }
    else {
        transactionsFromStorage = JSON.parse(transactionsFromStorage);
        transactionsFromStorage.push(currentTran);
        localStorage.setItem('transactions', JSON.stringify(transactionsFromStorage));
    }
    localStorage.setItem('transactionsCount',transactionsCount);
    this.list(this.fromAccount);

}

//function to view current user's transactions data on page
transactions.prototype.list = function(userId) {
    $('#balance').html(JSON.parse(localStorage.getItem('logged_in_user_data')).money + " $ (USD)");
    let transactions = localStorage.getItem('transactions');
    if(transactions != null) {
        transactions = JSON.parse(transactions);
        $('#transactions-body').html('');
        transactions.forEach(tran => {
            if(tran.fromAccount == userId) {
                $('#transactions-body').append('<tr>\
                    <td>' + tran.id + '</td>\
                    <td>' + tran.type + '</td>\
                    <td>' + tran.amount + '</td>\
                    <td>' + tran.toAccount + '</td>\
                    <td>' + tran.time + '</td>\
                    </tr>');
            }
        });
    }
}