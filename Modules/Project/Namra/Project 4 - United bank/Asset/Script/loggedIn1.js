$(document).ready(() => {
    var userData = JSON.parse(localStorage.getItem("LoggedUser"));
    $("#UsernameData").html(userData.Name);
    $("#signOut").click(() => {
        userData = 'Please Log in';
        localStorage.setItem("LoggedUser", userData);
        window.location.href = "../../index.html"
    });
    $(".debitMoney").click(() => {
        var money = parseFloat($("#debitMoneyInput").val());
        //alert(userData.Balance+" "+money);
        if (userData.Balance < money) {
            alert("Your Balance is lower than the amount, you entered")
            var date = new Date();
            //alert(date.getSeconds() +"second");
            var entry ={
                "Type" : "Deposit",
                "Amount" : money,
                "Balance" : userData.Balance,
                "Date": date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
                "Time" : date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
                "Status": "Failed",
                "Reason":" To debit"
            }
            //console.log(entry);
            userData.Entry.push(entry);
            console.log(userData.Entry);
            localStorage.setItem("LoggedUser", JSON.stringify(userData));
            var userDataArr = JSON.parse(localStorage.getItem("Users"));
            //alert(userDataArr.Users.length);
            for (var i = 0; i < userDataArr.Users.length; i++) {
                if (userDataArr.Users[i].UserName == userData.UserName) {
                    //console.log("Matched "+userDataArr.Users[i].User_ID)
                    userDataArr.Users[i].Balance = userData.Balance;
                    userDataArr.Users[i].Entry.push(entry);
                    localStorage.setItem("Users", JSON.stringify(userDataArr));
                }
            }
        }
        else {
            userData.Balance -= money;
            if (userData.Balance < 1000) {
                alert(money + " is debited & your balance is too low. Deposit as soon as possible")
            }
            else {
                alert(money + " is debited successfully..")
            }
            var date = new Date();
            //alert(date.getSeconds() +"second");
            var entry ={
                "Type" : "Deposit",
                "Amount" : money,
                "Balance" : userData.Balance,
                "Date": date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
                "Time" : date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
                "Status": "Succeed",
                "Reason":"To debit"
            }
            //console.log(entry);
            userData.Entry.push(entry);
            console.log(userData.Entry);
            localStorage.setItem("LoggedUser", JSON.stringify(userData));
            //alert(userData.Balance);
            var userDataArr = JSON.parse(localStorage.getItem("Users"));
            //alert(userDataArr.Users.length);
            for (var i = 0; i < userDataArr.Users.length; i++) {
                if (userDataArr.Users[i].UserName == userData.UserName) {
                    //console.log("Matched "+userDataArr.Users[i].User_ID)
                    userDataArr.Users[i].Balance = userData.Balance;
                    userDataArr.Users[i].Entry.push(entry);
                    localStorage.setItem("Users", JSON.stringify(userDataArr));
                }
            }

        }
    });
    $(".transferMoney").click(() => {
        //alert("transfer");
        var accountNumber = $("#accountTransfer").val();
        var amountTransfer = parseFloat($("#amountTransfer").val());
        /* if(accountNumber.length == 0 || amountTransfer.length == 0){
            alert("please enter details");
            return false;
        } */
        if(amountTransfer > userData.Balance){
            $("#amountTransfer").css({ "border": " 1px solid red", "box-shadow": "0 4px 8px 0 rgba(255, 0, 0, 0.5), 0 6px 20px 0 rgba(255, 0, 0, 0.19)" });
            alert("Not transfer");
            var date = new Date();
            //alert(date.getSeconds() +"second");
            var entry ={
                "Type" : "Transfer",
                "Amount" : amountTransfer,
                "Balance" : userData.Balance,
                "Date": date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
                "Time" : date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(),
                "Status": "Failed",
                "Reason":"Balance isn't enough("+accountNumber+")"
            }
            userData.Entry.push(entry);
            console.log(userData.Entry);
            localStorage.setItem("LoggedUser", JSON.stringify(userData));
            //alert(userData.Balance);
            var userDataArr = JSON.parse(localStorage.getItem("Users"));
            //alert(userDataArr.Users.length);
            for (var i = 0; i < userDataArr.Users.length; i++) {
                if (userDataArr.Users[i].UserName == userData.UserName) {
                    //console.log("Matched "+userDataArr.Users[i].User_ID)
                    userDataArr.Users[i].Entry.push(entry);
                    localStorage.setItem("Users", JSON.stringify(userDataArr));
                }
            }
            return false;
        }  
        else{
            $("#amountTransfer").css({ "border": " none", "box-shadow": "none" });
        }      
        var userDataArr = JSON.parse(localStorage.getItem("Users"));
        var status = false;
        for(var i = 0; i<userDataArr.Users.length;i++){
            if(userDataArr.Users[i].UserName == accountNumber){
                (userDataArr.Users[i].Balance) += amountTransfer;
                userData.Balance -= amountTransfer;
                alert("Transferred successfully");
                status = true;
                localStorage.setItem("LoggedUser", JSON.stringify(userData));
                localStorage.setItem("Users", JSON.stringify(userDataArr));
            }
        }
        if(status == false){
            $("#accountTransfer").css({ "border": " 1px solid red", "box-shadow": "0 4px 8px 0 rgba(255, 0, 0, 0.5), 0 6px 20px 0 rgba(255, 0, 0, 0.19)" });
        }
        else{
            $("#accountTransfer").css({ "border": " none", "box-shadow": "none" });
        }

    });
    $(".depositMoney").click(() => {
        var money = parseFloat($("#depositMoneyInput").val());
        //alert(money);
        userData.Balance += money;
        localStorage.setItem("LoggedUser", JSON.stringify(userData));
        alert(money + " rupees are added successfully");
        var userDataArr = JSON.parse(localStorage.getItem("Users"));
        //alert(userDataArr.Users.length);
        for (var i = 0; i < userDataArr.Users.length; i++) {
            if (userDataArr.Users[i].UserName == userData.UserName) {
                //console.log("Matched "+userDataArr.Users[i].User_ID)
                userDataArr.Users[i].Balance = userData.Balance;
                localStorage.setItem("Users", JSON.stringify(userDataArr));
            }
        }
    });
});