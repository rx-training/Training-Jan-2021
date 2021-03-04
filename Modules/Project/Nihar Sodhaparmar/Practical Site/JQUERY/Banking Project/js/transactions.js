$(document).ready(function () {

    $transactionsTableBody = $("#transactions-table-body");

    var transactions = JSON.parse(localStorage.getItem("transactions"));
    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    var transactionsStr = "";

    for(var i in transactions){

        if(transactions[i].accountNumber == userAcNumber){

            if(transactions[i].status == "Fail"){
                transactionsStr += "<tr class='tr-fail'>";
            }
            else if(transactions[i].type == "Deposit"){
                transactionsStr += "<tr class='tr-deposit'>";
            }
            else if(transactions[i].type == "Withdraw"){
                transactionsStr += "<tr class='tr-withdraw'>";
            }
    
            transactionsStr += "<td>" + transactions[i].type + "</td><td>" + transactions[i].amount + "</td><td>" + transactions[i].balance 
                + "</td><td>" + transactions[i].date + "</td><td>" + transactions[i].time  + "</td><td>" + transactions[i].status + "</td><td>" 
                + transactions[i].reason + "</td></tr>";

        }
        
    }

    $transactionsTableBody.html(transactionsStr);
});