$(document).ready(function(){


    if(localStorage.logged_in_user){
         console.log("true");
         $("#homeSignIn").css("display","none");
         $("#homeSignedIn").css("display","block");

        var x = JSON.parse(localStorage.logged_in_user);
        $("#signedUserName").text(" Hi, " + x.Username).css({"text-transform": "capitalize","margin-right":"10px"});

        $("#sidebar-loginbtn").css("display","none");
        $(".sidebar-items").unbind('click', false);
        $(".sidebar-icons").css("display","none");
        
       
    }
    else{
        $("#homeSignIn").css("display","block");
        $("#homeSignedIn").css("display","none");
       
        $(".sidebar-items").bind('click', false).addClass("text-muted");
        $("#sidebar-logoutbtn").css("display", "none");
       
    }

    $("#sidebar-logoutbtn").click(function(){
        $("#homeSignIn").css("display","block");
        $("#homeSignedIn").css("display","none");
       
        $(".sidebar-items").bind('click', false).addClass("text-muted");
        $("#sidebar-logoutbtn").css("display", "none");
        localStorage.removeItem("logged_in_user");
        alert("Successfully logged out!!");
        window.location.assign("index.html");
    })


    $("#btnLogin").click(function(){
        var loginCategory = document.getElementById("loginCategory").value;
        var loginNo = document.getElementById("loginNo").value;
        var loginPass = document.getElementById("loginPass").value;
        
        
        if(loginCategory == "Admin"){
        
            adminFlag=0;
            $.getJSON("JSON/adminInfo.json", function(data, status){
                $.each(data, function(index, data){
                    console.log(data);
                    

                        if(loginNo == data.ContactNo && loginPass == data.Password) {
                            adminFlag=1;
                            alert("Successfully Logged In as " + data.Username + "!!");
                            localStorage.logged_in_admin = JSON.stringify(data);
                            window.location.assign("admin-dashboard.html"); 
                            return true;
                        }
                        
                        
                           
                        
                })
                if(adminFlag==0){
                    alert("Please provide vaild details");
                }
                
            });
            return false;

        }


        else if(loginCategory == "User")
        {
            var userFlag=0;
            

            var userArray = JSON.parse(localStorage.getItem("Users"));
            console.log(userArray);
            for(data in userArray){
                console.log(data);
                    

                        if(loginNo == userArray[data].ContactNo && loginPass == userArray[data].Password) {
                            
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

        }

        
    });


    $("#btnRegister").click(function(){
        userName = document.getElementById("userName").value;
        console.log(userName);
        userContact = document.getElementById("userContact").value;
        console.log(userContact);
        userPassword = document.getElementById("userPassword").value;
        console.log(userPassword);
        userConfirm = document.getElementById("userConfirm").value;
        console.log(userConfirm);
        
        flag = 0;

        if(userContact.match(/^[6-9]{1}[0-9]{9}$/)) {
            

            if(userPassword!="" && userConfirm!="" && userPassword == userConfirm){
                flag=1;
                
            
                var userArray = JSON.parse(localStorage.getItem("Users"));

                var user = {
                    "Id": userArray.length + 1, 
                    "Username" : userName, 
                    "ContactNo": userContact,
                    "Password": userPassword
                }

            
                    
                    userArray.push(user);
                    //console.log(activityArray);
                
                    localStorage.setItem("Users", JSON.stringify(userArray));
                    alert("You have registered yourself successfully, Please Login yourself now!!");
                    window.location.assign("index.html");

            
            }
            else{
                alert("please enter correct password");
            }
        }
        else{
            alert("Please enter valid contact number");
        }
    })


     
});