

var userDetails = JSON.parse(localStorage.getItem("logged_in_user"));

document.getElementById("accountNo").innerHTML = userDetails.AccountNo;
document.getElementById("accountType").innerHTML = userDetails.AccountType;
document.getElementById("balance").innerHTML = userDetails.Balance;
var balance = userDetails.Balance;
$("#depositBtn").click(function(){
    var amount = document.getElementById("depositAmt").value;
    if(amount=="" || amount<=0){
        alert("Please enter valid amount");
    }
    else{
        var users = JSON.parse(localStorage.getItem("Users"));

        for(var i=0;i<users.length;i++){
            if(users[i].AccountNo == userDetails.AccountNo){
                console.log(typeof parseInt(users[i].Balance));
                console.log(typeof parseInt(amount));
                users[i].Balance = (parseFloat(users[i].Balance) + parseFloat(amount)).toFixed(2);
                userDetails.Balance = users[i].Balance;
                
            }
        }

        
        localStorage.setItem("Users",JSON.stringify(users));

        localStorage.setItem("logged_in_user",JSON.stringify(userDetails));

        var date = new Date();
        var tdate = date.getFullYear() + "-" + date.getMonth()+1 + "-" + date.getDate();
        var ttime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


                        var tid = 1;
                    var transactionArray = JSON.parse(localStorage.getItem("Transactions"));
                    

                    if(localStorage.getItem("Transactions")){
                        console.log(transactionArray.length+1);
                    var newtid = transactionArray.length+1;

                        var transaction = 
                        {
                        "AccountNumber": userDetails.AccountNo,
                        "TransactionId": newtid,
                        "AccountType": userDetails.AccountType, 
                        "TransactionDate": tdate,
                        "TransactionTime": ttime,
                        "Amount": amount
                        }
                        
                        transactionArray.push(transaction);
                            
                            localStorage.setItem("Transactions", JSON.stringify(transactionArray));
                    }

                    else{
                        var transaction = [
                            {
                            "AccountNumber": userDetails.AccountNo,
                            "TransactionId": tid,
                            "AccountType": userDetails.AccountType, 
                            "TransactionDate": tdate,
                            "TransactionTime": ttime,
                            "Amount": amount
                            }
                        ]

                        localStorage.setItem("Transactions", JSON.stringify(transaction));
                    }
                    
                        
                        alert("You have successfully deposited your money!!");

                        window.location.assign("index.html");

    }
})


$("#withdrawBtn").click(function(){
    var amount = document.getElementById("withdrawAmt").value;
    console.log("balance:" + userDetails.Balance + " " + amount);
    if(amount=="" || amount<=0){
        alert("Please enter valid amount");
    }
    else if((parseFloat(amount)) > (parseFloat(userDetails.Balance))) {
        alert("Amount you entered is greater than your balance");
    }
    else{
        var users = JSON.parse(localStorage.getItem("Users"));

        for(var i=0;i<users.length;i++){
            if(users[i].AccountNo == userDetails.AccountNo){
                console.log(typeof parseInt(users[i].Balance));
                console.log(typeof parseInt(amount));
                users[i].Balance = (parseFloat(users[i].Balance) - parseFloat(amount)).toFixed(2);
                userDetails.Balance = users[i].Balance;
                
            }
        }

        
        localStorage.setItem("Users",JSON.stringify(users));

        localStorage.setItem("logged_in_user",JSON.stringify(userDetails));

        var date = new Date();
        var tdate = date.getFullYear() + "-" + date.getMonth()+1 + "-" + date.getDate();
        var ttime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


                        // var tid = 1;
                    var transactionArray = JSON.parse(localStorage.getItem("Transactions"));
                    

                   // if(localStorage.getItem("Transactions")){
                        console.log(transactionArray.length+1);
                    var newtid = transactionArray.length+1;

                        var transaction = 
                        {
                        "AccountNumber": userDetails.AccountNo,
                        "TransactionId": newtid,
                        "AccountType": userDetails.AccountType, 
                        "TransactionDate": tdate,
                        "TransactionTime": ttime,
                        "Amount": amount
                        }
                        
                        transactionArray.push(transaction);
                            
                            localStorage.setItem("Transactions", JSON.stringify(transactionArray));
                    // }

                    // else{
                    //     var transaction = [
                    //         {
                    //         "TransactionId": tid,
                    //         "AccountType": userDetails.AccountType, 
                    //         "TransactionDate": tdate,
                    //         "TransactionTime": ttime,
                    //         "Amount": amount
                    //         }
                    //     ]

                    //     localStorage.setItem("Transactions", JSON.stringify(transaction));
                    // }
                    
                        
                        alert("You have successfully withdrawn your money!!");

                        window.location.assign("index.html");

    }
})

var transactionArray = JSON.parse(localStorage.getItem("Transactions"));
console.log(transactionArray[0]);
for(var i=0; i<transactionArray.length; i++){
    if(transactionArray[i].AccountNumber == userDetails.AccountNo){
        $("#tblTransactions").append('<tr><td>' + transactionArray[i].TransactionId + '</td><td>' 
            + transactionArray[i].AccountType + '</td><td>' + transactionArray[i].TransactionDate + '</td><td>'
            + transactionArray[i].TransactionTime + '</td><td>' + transactionArray[i].Amount + '</td></tr>');
    }
}

