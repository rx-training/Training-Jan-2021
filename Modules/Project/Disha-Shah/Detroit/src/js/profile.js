if(!localStorage.logged_in_user){
    window.location.assign("index.html");
}
else{
    var userArray = JSON.parse(localStorage.getItem("Users"));
    var loggedUser = JSON.parse(localStorage.getItem("logged_in_user"));
    console.log(loggedUser.Username);

    document.getElementById("accountNo").innerHTML = loggedUser.AccountNo;
    document.getElementById("accountType").innerHTML = loggedUser.AccountType;
    document.getElementById("name").innerHTML = loggedUser.Username;
    document.getElementById("email").innerHTML = loggedUser.Email;
    document.getElementById("contact").innerHTML = loggedUser.ContactNo;

    $("#editModalBtn").click(function(){
        document.getElementById("userName").value = loggedUser.Username;
        document.getElementById("userEmail").value = loggedUser.Email;
        document.getElementById("userContact").value = loggedUser.ContactNo;
        document.getElementById("userName").value = loggedUser.Username;

        var accountType = loggedUser.AccountType;
        console.log(accountType);

        if(accountType=='Savings Account'){
            document.getElementById('Savings Account').checked = true;
        }
        else{
            document.getElementById('Current Account').checked = true;
        }



        $("#editProfileBtn").click(function(){
            userName = document.getElementById("userName").value;
            console.log(userName);
            userEmail = document.getElementById("userEmail").value;
            console.log(userEmail);
            userContact = document.getElementById("userContact").value;
            console.log(userContact);

            var actType = "";
            var accountType=document.getElementsByName('accountType');
            for(var i=0; i<accountType.length; i++){
                if(accountType[i].type=='radio' && accountType[i].checked==true)
                    actType = accountType[i].value;
            }
            console.log(actType);
            
            flag = 0;
        

            if(userContact.match(/^[6-9]{1}[0-9]{9}$/)) {
                
                if(userEmail.match(/^([a-zA-Z0-9_\$\#\%\&\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
                    
                        flag=1;
                        
                        
                        
                        
                        for(var i =0; i<userArray.length;i++){

                            if(userArray[i].AccountNo == loggedUser.AccountNo){

                                userArray[i].Username = userName;
                                userArray[i].Email = userEmail;
                                userArray[i].ContactNo = userContact;
                                userArray[i].AccountType = actType;

                                loggedUser.Username = userName;
                                loggedUser.Email = userEmail;
                                loggedUser.ContactNo = userContact;
                                loggedUser.AccountType = actType;
                                    
                                    localStorage.setItem("Users", JSON.stringify(userArray));
                                    localStorage.setItem("logged_in_user", JSON.stringify(loggedUser));
                            
                                
                                alert("Your Profile has been updated");
                                window.location.assign("profile.html");
                            }

                        }
                    
                }
                else{
                    alert("Please enter valid email id");
                }
            }
            else{
                alert("Please enter valid contact number");
            }
        })


    })


    $("#updatePassBtn").click(function(){
        userPassword = document.getElementById("userPassword").value;
        console.log(userPassword);
        userConfirm = document.getElementById("userConfirm").value;
        console.log(userConfirm);

        if(userPassword!="" && userConfirm!="" && userPassword==userConfirm){
            for(var i =0; i<userArray.length;i++){

                if(userArray[i].AccountNo == loggedUser.AccountNo){
                    userArray[i].Password = userPassword;

                    loggedUser.Password = userPassword;
                    
                    localStorage.setItem("Users", JSON.stringify(userArray));
                    localStorage.setItem("logged_in_user", JSON.stringify(loggedUser));
            
                
                    alert("Your Password has been updated");
                    window.location.assign("profile.html");
                }
            }
        }
        else{
            alert("Enter valid Password details");
        }
    })

}