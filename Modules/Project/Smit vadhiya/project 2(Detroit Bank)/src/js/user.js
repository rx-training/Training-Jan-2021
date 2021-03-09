$(document).ready(function(){
    var userData = JSON.parse(localStorage.getItem("user"));
    var activeUser = localStorage.getItem("activeUser");
    $("#balance").hide();
    var userIDs = [];  
    for(i of userData){
        userIDs.push(i["userId"])
    }
    var index = userIDs.indexOf(activeUser);
   
    var myData = userData[index];

    //-----display name in navbar
    $("#navbarName").text(myData["fullName"]);

    //--------display data to Profile page------
    var str1 = '<div class="col-12 col-md-6"><table  class="table w-md-50 table-borderless"> <tbody><tr><th>Full Name</th><td>'+myData["fullName"]+'</td></tr><tr><th>Gender</th><td>'+myData["gender"]+'</td></tr><tr><th>Father\'s Name</th><td>'+myData["fatherName"]+'</td></tr><tr><th>Mother\'s Name</th><td>'+myData["motherName"]+'</td></tr><tr><th>Date of Birth</th><td>'+myData["dateOfBirth"]+'</td></tr><tr><th>Email id</th><td>'+myData["emailId"]+'</td></tr><tr><th>Phone Number</th><td>'+myData["mobileNo"]+'</td></tr></tbody></table></div>'
    $("#profile").append(str1);

    
    //-----------display data to Account page-------

    if(myData["current"] == true){
        var accountType = "Current Account";
    } else {
        var accountType = "Saving Account";
    }

    var str2 = '<div class="col-12 col-md-10"><table  class="table w-md-50 table-borderless"> <tbody><tr><th>Account holder Name</th><td>'+myData["fullName"]+'</td></tr><tr><th>Account type</th><td>'+accountType+'</td></tr><tr><th>User ID</th><td id="displayUserId">'+myData["userId"]+'</td><td><button class="btn btn-primary"  data-toggle="modal" data-target="#changeId">Change User ID</button></td></tr><tr><th>Password</th><td>******</td><td><button class="btn btn-primary"  data-toggle="modal" data-target="#changePasswordModal">Change Password</button></td></tr><tr><th>Email ID</th><td>'+myData["emailId"]+'</td></tr><tr><th>PAN card number</th><td>'+myData["panNo"]+'</td></tr><tr><th>Account balance</th><td id="myBalance">'+myData["balance"]+'</td></tr></tbody></table></div>'
    $("#Account").append(str2);

    //------------toggle available balance----------
    $("#ShowBalance").append(myData["balance"])
    $("#availBalance").click(function(){
        $("#balance").toggle();
    })

    //-------------deposite money---------
  
    $("#deposite").click(function(){
        
        var d =  parseInt($("#depositeAmount").val());
        if(!isNaN(d)){
            var total = d + parseInt(myData["balance"]);
            myData["balance"] = total;
            $("#myBalance").text(myData["balance"]);
            $("#ShowBalance").text(myData["balance"]);
            alert(d +" rs credited to your account");
            localStorage.setItem("user",JSON.stringify(userData));
            $('#depositeForm').trigger("reset");
            $(this).attr("data-dismiss", "modal"); 

        } else { 
            alert("Wrong amount");
        }
    })

    //----------withdraw money--------
    $("#withdraw").click(function(){
        var d =  parseInt($("#withdrawAmount").val());
        var bal = parseInt(myData["balance"]);
        if(!isNaN(d)){
            

            if(d>bal){
                alert("Insufficient Balance");
            } else if($("#withdrawPassword").val() != myData["password"]){
                alert("Incorrect Password")
            } else {
                var total = bal - d;
                myData["balance"] = total;
                $("#myBalance").text(myData["balance"]);
                $("#ShowBalance").text(myData["balance"]);
                alert(d +" rs debited from your account")
                localStorage.setItem("user",JSON.stringify(userData));
                $('#withdrawForm').trigger("reset");
                $(this).attr("data-dismiss", "modal");    
            }
        } else {
            alert("Wrong amount");
        }
    })

    //-----------username change ---------------
    $("#changeUserIdBtn").click(function(){
        var newId = $("#userId").val();
        var confirmNewId = $("#confirmUserId").val();
        
        if(newId.length == 0){
            alert("enter User ID");
        } else if(newId != confirmNewId){
            alert("User ID and confirm User ID is not same");
        } else if($("#userIdPassword").val() != myData["password"]){
            alert("Wrong Password");
        } else if(userIDs.includes(newId)){
            alert("User id already exist")
        } else {

            myData["userId"] = newId;
            $("#displayUserId").text(newId);
            alert("User Id changed succcessfully");
            localStorage.setItem("user",JSON.stringify(userData));
            localStorage.setItem("activeUser",newId);
            $('#changeIdForm').trigger("reset");
            $(this).attr("data-dismiss", "modal");

        }
    })

     //-----------Psddword change ---------------
     $("#changePassword").click(function(){
        var oldPassword = $("#oldPassword").val();
        var newPassword = $("#newPassword").val();
        var confirmNewPassword = $("#confirmNewPassword").val();
        
        if(oldPassword != myData["password"]){
            alert("Password is wrong");
        } else if(newPassword.length == 0){
            alert("Enter new Password");
        } else if(newPassword != confirmNewPassword){
            alert("new Password and confirm password should be same");
        } else {

            myData["password"] = newPassword;
            alert("Password changed succcessfully");
            localStorage.setItem("user",JSON.stringify(userData));
            $('#changePasswordModal').trigger("reset");
            $(this).attr("data-dismiss", "modal");

        }
    })

    $("#logout").click(function(){
        window.location.replace("index.html")
    })


})