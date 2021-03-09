$(document).ready(function () {

    (new transaction).showTransactions();
});

//Class for Transaction
var transaction = function (){

}

transaction.prototype.showTransactions = function (){

    $transactionsTableBody = $("#transactions-table-body");

    var transactions = JSON.parse(localStorage.getItem("transactions"));
    var userAcNumber = JSON.parse(localStorage.getItem("loggedUserAccountNumber"));

    var transactionsStr = "";

    for(var i in transactions){

        if(transactions[i].accountNumber == userAcNumber){

            if(transactions[i].status == "Fail"){
                transactionsStr += "<tr class='tr-fail'>";
            }else{
                transactionsStr += "<tr class='tr-deposit'>";
            }

            // else if(transactions[i].type == "Deposit"){
            //     transactionsStr += "<tr class='tr-deposit'>";
            // }
            // else if(transactions[i].type == "Withdraw"){
            //     transactionsStr += "<tr class='tr-withdraw'>";
            // }
    
            transactionsStr += "<td>" + transactions[i].type + "</td><td>" + transactions[i].amount + "</td><td>" + transactions[i].balance 
                + "</td><td>" + transactions[i].fromaccountNumber + "</td><td>" + transactions[i].toaccountNumber + "</td><td>" + transactions[i].date + "</td><td>" + transactions[i].time  + "</td><td>" + transactions[i].status + "</td><td>" 
                + transactions[i].reason + "</td></tr>";

        }
        
    }

    $transactionsTableBody.html(transactionsStr);
};