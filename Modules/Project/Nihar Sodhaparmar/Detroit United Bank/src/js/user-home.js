$(document).ready(function () {

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    var accounts = JSON.parse(localStorage.getItem("accounts"));

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber) {
            $("#balance").text("Current Balance : " + accounts[i].balance);
            $("#acType").text("Account Type : " + accounts[i].accountType);
        }
    }

});


//Class for deposit --------------------------------------------------------------
var deposit = function () {

    this.damount = $("#damount").val();
    this.password = $("#dpassword").val()

}

//Function for deposit Validate Fields
deposit.prototype.validateFields = function () {

    $damountError = $("#damountError");
    $passwordError = $("#dpasswordError");
    $accountError = $("#daccountError");

    $accountError.html("");
    $damountError.html("");
    $passwordError.html("");

    var isValid = true;
    if (this.damount <= 0 || this.damount == "") {
        $damountError.html("Please Provide Valid Amount");
        isValid = false;
    }

    if (this.password == "") {
        $passwordError.html("Please Provide Valid Password");
        isValid = false;
    }

    return isValid;

};

//Function For Deposit Ammount
deposit.prototype.depositAmount = function () {

    if (!this.validateFields()) {
        return false;
    }

    var balance;
    var isValidAccount = false;

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));
    var accounts = JSON.parse(localStorage.getItem("accounts"));

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber && accounts[i].password == this.password) {
            accounts[i].balance = parseFloat(accounts[i].balance) + parseFloat(this.damount);
            balance = accounts[i].balance;
            isValidAccount = true;
        }
    }

    $accountError = $("#daccountError");
    $accountError.html("");

    if (isValidAccount == false) {
        $accountError.html("Invalid Password");
        return false;
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));

    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    var dt = new Date();
    var currentTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var currentDate = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();

    var transaction = {
        "accountNumber": userAcNumber,
        "toaccountNumber": "-",
        "fromaccountNumber": "-",
        "time": currentTime,
        "date": currentDate,
        "amount": parseFloat(this.damount),
        "status": "Succeeded",
        "reason": "Succeeded",
        "type": "Deposit",
        "balance": balance,
    }

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    location.reload();
};


//Class for Withdraw --------------------------------------
var withdraw = function () {

    this.wamount = $("#wamount").val();
    this.wpassword = $("#wpassword").val();

};

//Function Validate Withdraw Fields
withdraw.prototype.validateFields = function () {

    $wamountError = $("#wamountError");
    $wpasswordError = $("#wpasswordError");
    $waccountError = $("#waccountError");

    $waccountError.html("");
    $wamountError.html("");
    $wpasswordError.html("");

    var isValid = true;
    if (this.wamount <= 0 || this.wamount == "") {
        $wamountError.html("Please Provide Valid Amount");
        isValid = false;
    }

    if (this.wpassword == "") {
        $wpasswordError.html("Please Provide Valid Password");
        isValid = false;
    }

    return isValid;
};

//Function for Withdraw Amount
withdraw.prototype.withdrawAmount = function () {

    if (!this.validateFields()) {
        return false;
    }

    var balance;
    var isValidAccount = false;

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));
    var accounts = JSON.parse(localStorage.getItem("accounts"));
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    var dt = new Date();
    var currentTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var currentDate = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber && accounts[i].password == this.wpassword) {
            $waccountError = $("#waccountError");
            $waccountError.html("");
            if (accounts[i].balance < this.wamount) {
                $waccountError.html("You are trying to withdraw more money than your balance");
                var transaction = {
                    "accountNumber": userAcNumber,
                    "toaccountNumber": "-",
                    "fromaccountNumber": "-",
                    "time": currentTime,
                    "date": currentDate,
                    "amount": parseFloat(this.wamount),
                    "status": "Fail",
                    "reason": "Low Account Balance",
                    "type": "Withdraw",
                    "balance": accounts[i].balance,
                }

                transactions.push(transaction);
                localStorage.setItem("transactions", JSON.stringify(transactions));

                return false;
            }
            accounts[i].balance = parseFloat(accounts[i].balance) - parseFloat(this.wamount);
            balance = accounts[i].balance;
            isValidAccount = true;
        }
    }

    $waccountError = $("#waccountError");
    $waccountError.html("");

    if (isValidAccount == false) {
        $waccountError.html("Invalid Password");
        return false;
    }

    localStorage.setItem("accounts", JSON.stringify(accounts));

    var transaction = {
        "accountNumber": userAcNumber,
        "toaccountNumber": "-",
        "fromaccountNumber": "-",
        "time": currentTime,
        "date": currentDate,
        "amount": parseFloat(this.wamount),
        "status": "Succeeded",
        "reason": "Succeeded",
        "type": "Withdraw",
        "balance": balance,
    }

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    location.reload();
}


//Class for transfer ---------------------------------------------------
var transfer = function () {

    this.taccountNumber = $("#taccountNumber").val();
    this.tamount = $("#tamount").val();
    this.tpassword = $("#tpassword").val();

};

//Function for validate Withdraw Fields
transfer.prototype.validateFields = function () {

    $taccountNumberError = $("#taccountNumberError");
    $tamountError = $("#tamountError");
    $tpasswordError = $("#tpasswordError");
    $taccountError = $("#taccountError");

    $taccountError.html("")
    $taccountNumberError.html("");
    $tamountError.html("");
    $tpasswordError.html("");

    var isValid = true;
    if (this.taccountNumber == "") {
        $taccountNumberError.html("Please Provide Transfer Accoumt Number");
        isValid = false;
    }

    if (this.tamount < 0 || this.tamount == "") {
        $tamountError.html("Please Provide Valid Amount");
        isValid = false;
    }

    if (this.tpassword == "") {
        $tpasswordError.html("Please Provide Password");
        isValid = false;
    }

    return isValid;
};

//Function For Transfer Money
transfer.prototype.transferAmount = function () {

    if (!this.validateFields()) {
        return false;
    }

    var transferAccountId = -1;
    var userAccountId = -1;

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));
    var accounts = JSON.parse(localStorage.getItem("accounts"));
    var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    $taccountError = $("#taccountError");
    $taccountError.html("");

    var dt = new Date();
    var currentTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var currentDate = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();

    for (var i in accounts) {
        if (accounts[i].accountNumber == userAcNumber && accounts[i].password == this.tpassword) {
            userAccountId = i;
        }
        if (accounts[i].accountNumber == this.taccountNumber) {
            transferAccountId = i;
        }
    }

    if (userAccountId == -1) {
        $taccountError.html("Invalid Password");
        return false;
    }

    if (transferAccountId == -1) {
        $taccountError.html("Please Provide Valid Transfer Account");
        return false;
    }

    if (accounts[userAccountId].balance < this.tamount) {
        $taccountError.html("You are trying to transfer more money than your balance");
        var transaction = {
            "accountNumber": userAcNumber,
            "toaccountNumber": parseInt(this.taccountNumber),
            "fromaccountNumber": "-",
            "time": currentTime,
            "date": currentDate,
            "amount": parseFloat(this.tamount),
            "status": "Fail",
            "reason": "Low Account Balance",
            "type": "Transfer",
            "balance": accounts[userAccountId].balance,
        }

        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));

        return false;
    }

    accounts[userAccountId].balance = parseFloat(accounts[userAccountId].balance) - parseFloat(this.tamount);
    accounts[transferAccountId].balance = parseFloat(accounts[transferAccountId].balance) + parseFloat(this.tamount);

    var fromTransaction = {
        "accountNumber": userAcNumber,
        "toaccountNumber": parseInt(this.taccountNumber),
        "fromaccountNumber": "-",
        "time": currentTime,
        "date": currentDate,
        "amount": parseFloat(this.tamount),
        "status": "Succedded",
        "reason": "Succedded",
        "type": "Transfer",
        "balance": accounts[userAccountId].balance,
    }
    transactions.push(fromTransaction);

    var toTransaction = {
        "accountNumber": parseInt(this.taccountNumber),
        "toaccountNumber": "-",
        "fromaccountNumber": userAcNumber,
        "time": currentTime,
        "date": currentDate,
        "amount": parseFloat(this.tamount),
        "status": "Succedded",
        "reason": "Succedded",
        "type": "Transfer",
        "balance": accounts[transferAccountId].balance,
    }
    transactions.push(toTransaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("accounts", JSON.stringify(accounts));

    location.reload();
    return false;
};