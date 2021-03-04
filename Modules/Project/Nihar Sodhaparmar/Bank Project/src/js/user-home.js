$(document).ready(function (){

    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    var accounts = JSON.parse(localStorage.getItem("accounts"));

    for(var i  in accounts){
        if(accounts[i].accountNumber == userAcNumber){
            $("#balance").text("Current Balance : " + accounts[i].balance);
            $("#acType").text("Account Type : " + accounts[i].accountType);
        }
    }

    $("#deposit-btn").click(function () {

        var damount = $("#damount").val();

        if(damount <= 0 || ""){
            alert("Please Provide Valid Amount");
            return false;
        }

        var balance;

        var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

        for(var i in accounts){
            if(accounts[i].accountNumber == userAcNumber){
                accounts[i].balance = parseFloat(accounts[i].balance) + parseFloat(damount);
                balance = accounts[i].balance;
            }
        }

        localStorage.setItem("accounts",JSON.stringify(accounts));

        var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

        var dt = new Date();
        var currentTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        var currentDate = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();

        var transaction = {
            "accountNumber" : userAcNumber,
            "time" : currentTime,
            "date" : currentDate,
            "amount" : parseFloat(damount),
            "status" : "Succeeded",
            "reason" : "Succeeded",
            "type" : "Deposit",
            "balance" : balance,
        }

        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));

        location.reload();
    });


    $("#withdraw-btn").on("click", function() {

        var wamount = $("#wamount").val();

        if(wamount <=0 || ""){
            alert("Please Provide Valid Amount");
            return false;
        }

        var balance;

        var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

        var transactions = JSON.parse(localStorage.getItem("transactions")) || [];

        var dt = new Date();
        var currentTime = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        var currentDate = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear();

        for(var i in accounts){
            if(accounts[i].accountNumber == userAcNumber){
                if(accounts[i].balance < wamount){
                    alert("You are trying to withdraw more money than your balance");
                    var transaction = {
                        "accountNumber" : userAcNumber,
                        "time" : currentTime,
                        "date" : currentDate,
                        "amount" : parseFloat(wamount),
                        "status" : "Fail",
                        "reason" : "Low Account Balance",
                        "type" : "Withdraw",
                        "balance" : accounts[i].balance
                    }

                    transactions.push(transaction);
                    localStorage.setItem("transactions", JSON.stringify(transactions));

                    return false;
                }
                accounts[i].balance = parseFloat(accounts[i].balance) - parseFloat(wamount);
                balance = accounts[i].balance;
            }
        }

        var transaction = {
            "accountNumber" : userAcNumber,
            "time" : currentTime,
            "date" : currentDate,
            "amount" : parseFloat(wamount),
            "status" : "Succeeded",
            "reason" : "Succeeded",
            "type" : "Withdraw",
            "balance" : balance
        }

        transactions.push(transaction);
        localStorage.setItem("transactions", JSON.stringify(transactions));

        localStorage.setItem("accounts",JSON.stringify(accounts));

        location.reload();
    });
});