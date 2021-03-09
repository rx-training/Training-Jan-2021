$(document).ready(function(){
    
    async function loadJson(){
        let x = await fetch("../json/user.json");
        let y = await x.text();
        localStorage.setItem("user",y)
    }
    loadJson();  //PLease comment this function calling after first load else new update will not display in local storage
    
    
    // --------------login --------------------
    var userData = JSON.parse(localStorage.getItem("user"));
    var userIds = []; 
    var emailIds = [];  //retrive all emailids
    for(i of userData){
        userIds.push(i["userId"]);   //retrive all username
        emailIds.push(i["emailId"])   //retrive all emailids
    }
    
    $("#loginBtn").click(function(){
        var loginUsername = $("#loginUserId").val();
        var loginPassword = $("#loginPassword").val();

        if(loginUsername.length == 0){
            alert("Enter User ID or Email Id");
        } else if(loginPassword.length == 0){
            alert("Enter password");
        } else {
            if(!(userIds.includes(loginUsername) || emailIds.includes(loginUsername))){
                alert("User ID or Email ID dosen't exist")
            } else {
                var index = userIds.indexOf(loginUsername);
                var emailindex = emailIds.indexOf(loginUsername);
                if(emailindex >= 0){
                    index = emailindex;
                }
                if(loginPassword == userData[index]["password"]){
                    alert("Log in successful :)");
                    localStorage.setItem("activeUser",userData[index]["userId"])
                    $(this).attr("type","submit")
                } else{
                    alert("wrong password");
                }

            }
        }
    })

    $("#birthDate").focus(function(){
        $(this).attr("type","date");
    });

    $("#current").click(function(){
        var current = $("#current").prop("checked");
        if(current){
            $("#GST").attr("disabled",false);
        } else {
            $("#GST").attr("disabled",true);
        }
    })

    $("#submitBtn").click(function(){

        var fullName = $("#fullName").val();
        var gender;
        $("input[name='gender']").each(function(){
            if(this.checked){
                gender =  this.value;
            }
        });
        var fatherName = $("#fatherName").val();
        var motherName = $("#motherName").val();
        var birthdate = $("#birthDate").val();
        var mobileNumber = $("#mobileNumber").val();
        var panNumber = $("#panNumber").val();
        var mailId = $("#emailId").val(); 
        var idProof = $("#idProof").val();
        var idProofNo = $("#idProofNo").val();
        var state = $("#state").val();
        var current = $("#current").prop("checked");
        var password = $("#signUpPassword").val();
        var confirmPassword = $("#signUpConfirmPassword").val();
        var gst = null;
       
       
        var panValidate = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        var mobileValidate = /^[1-9]{1}[0-9]{9}$/
        var flag = 0;
        
        if(!mobileValidate.test(mobileNumber)){
            alert("Mobile number is invalid");
        } else if(!panValidate.test(panNumber)){
            alert("Pan number is invalid\nValid PAN no formet : AAAAA9999A")
        } else if(idProof == null){
            alert("Select Id proof");
        }else if(state == null){
            alert("Select State");
        }else if(password.length == 0){
            alert("Enter Password");
        } else if(confirmPassword.length == 0){
            alert("Enter confirm password");
        } else if(password != confirmPassword){
            alert("Password does not match");
        }else  {
            if(current){
               if($("#GST").val().length == 0){
                   var gst = null;
                   alert("Enter GST no.");
               } else {
                   var gst = $("#GST").val();
                   flag = 1;
               }
            } else {
                flag = 1;
            }
        }
        if(flag == 1){
            //After all validation data send to local storage
            var newUserId = fullName[0]+fatherName[0]+motherName[0]+ birthdate.split("-")[0];
            
            var newData = {
                "userId" : newUserId.toLowerCase(),
                "fullName" : fullName.toLowerCase(),
                "emailId" : mailId.toLowerCase(),
                "password" : password,
                "gender" : gender,
                "fatherName" : fatherName.toLowerCase(),
                "motherName" : motherName.toLowerCase(),
                "dateOfBirth" : birthdate,
                "mobileNo" : mobileNumber,
                "panNo" : panNumber,
                "idProof" : idProof,
                "idProofNo" : idProofNo,
                "current" : current,
                "gst" : gst,
                "balance" : 0
            }
            userData.push(newData)
            localStorage.setItem("user",JSON.stringify(userData));
            alert("Account Open successfully :)")
            $(this).attr("type","submit");
        }

    })
})

