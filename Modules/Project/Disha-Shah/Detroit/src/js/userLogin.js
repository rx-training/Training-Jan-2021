$(document).ready(function(){


    if(localStorage.logged_in_user){
         console.log("true");
         $("#beforeLogin").css("display","none");
         $("#afterLogin").css("display","block");
        $("#headerImg").css("display", "none");
        $("#userInfo").css("display", "block");
        var x = JSON.parse(localStorage.logged_in_user);
        $("#Username").append(x.Username).css({"text-transform": "capitalize","margin-right":"10px"});

      
        
       
    }
    else{
        $("#beforeLogin").css("display","block");
        $("#afterLogin").css("display","none");
        $("#headerImg").css("display", "block");
       $("#userInfo").css("display", "none");
       
       
    }

    $("#logoutBtn").click(function(){
        $("#beforeLogin").css("display","block");
        $("#afterLogin").css("display","none");
        $("#headerImg").css("display", "block");
        $("#userInfo").css("display", "none");
        localStorage.removeItem("logged_in_user");
        alert("Successfully logged out!!");
        window.location.assign("index.html");
    })


    $("#btnLogin").click(function(){
        
        var loginNo = document.getElementById("loginemail").value;
        var loginPass = document.getElementById("loginPass").value;
        
        
        
            var userFlag=0;
            

            var userArray = JSON.parse(localStorage.getItem("Users"));
            console.log(userArray);
            for(data in userArray){
                console.log(data);
                    

                        if(loginNo == userArray[data].Email && loginPass == userArray[data].Password) {
                            
                            userFlag = 1;
                            alert("Successfully Logged In as " + userArray[data].Username + "!!");
                            localStorage.logged_in_user = JSON.stringify(userArray[data]);
                           
                            window.location.assign("index.html"); 
                            
                            return true;
                        }
            }
            if(userFlag==0){
                    alert("Please provide vaild details");
            }

        

        
    });


    $("#btnRegister").click(function(){
        userName = document.getElementById("userName").value;
        console.log(userName);
        userEmail = document.getElementById("userEmail").value;
        console.log(userEmail);
        userContact = document.getElementById("userContact").value;
        console.log(userContact);
       
        userPassword = document.getElementById("userPassword").value;
        console.log(userPassword);
        userConfirm = document.getElementById("userConfirm").value;
        console.log(userConfirm);

        var actType = "";
        var accountType=document.getElementsByName('accountType');
		for(var i=0; i<accountType.length; i++){
			if(accountType[i].type=='radio' && accountType[i].checked==true)
				actType = accountType[i].value;
		}
        console.log(actType);
        
        flag = 0;
        balance = 0;

        if(userContact.match(/^[6-9]{1}[0-9]{9}$/)) {
            
            if(userEmail.match(/^([a-zA-Z0-9_\$\#\%\&\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
                if(userPassword!="" && userConfirm!="" && userPassword == userConfirm){
                    flag=1;
                    
                    var id = 1;
                    var userArray = JSON.parse(localStorage.getItem("Users"));
                    

                    if(localStorage.getItem("Users")){
                        console.log(userArray.length+1);
                        var newid = userArray.length+1;

                        var user = 
                            {
                            "AccountNo": newid, 
                            "Username" : userName, 
                            "Email": userEmail,
                            "ContactNo": userContact,
                            "Password": userPassword,
                            "AccountType": actType,
                            "Balance": balance
                            }
                        
                            userArray.push(user);
                            
                            localStorage.setItem("Users", JSON.stringify(userArray));
                    }

                    else{
                        var user = [
                            {
                            "AccountNo": id, 
                            "Username" : userName, 
                            "Email": userEmail,
                            "ContactNo": userContact,
                            "Password": userPassword,
                            "AccountType": actType,
                            "Balance": balance
                            }
                        ]

                        localStorage.setItem("Users", JSON.stringify(user));
                    }
                
                         
                    
                        
                        alert("You have registered yourself successfully, Please Login yourself now!!");
                        window.location.assign("index.html");

                
                }
                else{
                    alert("please enter correct password");
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


     
});