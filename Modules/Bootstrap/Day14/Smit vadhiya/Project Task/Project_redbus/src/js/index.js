$(document).ready(function(){

    async function loadjson(){
        let jsonData = await fetch("../JSON/user.json");
        let data = await jsonData.text();
        localStorage.setItem("user",data);

        jsonData = await fetch("../JSON/buses.json");
        data = await jsonData.text();
        localStorage.setItem("buses",data);

        jsonData = await fetch("../JSON/feedback.json");
        data = await jsonData.text();
        localStorage.setItem("feedback",data);
    } 
    loadjson();
    

    var signup = $("#sign-up");
    


    //----------------sign up------------  
    signup.click(function(){
        
        fname = $("#fname").val();
        lname = $("#lname").val();
        email = $("#email").val();
        password = $("#password").val();
        cpassword = $("#cpassword").val();
        
    
        var data = JSON.parse(localStorage.getItem("user"));
        var mail = [];
        for(i of data){
            mail.push(i.email);
        }
        var re = /^[^\s@]+@[^\s@]+$/;
        
        if(fname.length == 0){
            alert("Enter first name");
        } else if(lname.length == 0){
            alert("Enter last name");
        } else if(email.length == 0){
            alert("Enter Email id");
        } else if(!re.test(email)){
            alert("Mail id is not valid");
        } else if(password.length == 0){
            alert("Enter passsword");
        } else if(cpassword.length == 0) {
            alert("Enter Confirm passsword");
        } else if(password != cpassword) {
            alert("Password and confirm password does not match");
        } else if(mail.includes( email )) {
            alert("User already exist");
        } else {
            var newData = {
                "fname" : fname ,
                "lname" : lname,
                "email" : email,
                "password" : password,
                "active" : 1
            }

            data.push(newData);
            localStorage.setItem("user",JSON.stringify(data));
            localStorage.setItem("currantUser",fname+" "+lname);
            alert("Sign-up succesful");
            signup.attr("type","submit");
        }
    })


    //--------------Login-----------------
    
    var login = $("#login");

    login.click(function(){

        var email = $("#loginMail").val();
        var password = $("#loginPassword").val();

        var data = JSON.parse(localStorage.getItem("user"));
        var allMail = [];
        for(i of data){
            allMail.push(i.email);
        } 
        console.log(allMail);
        if(email.length == 0){
            alert("Please enter Email id");
        } else if(password.length == 0){
            alert("Please enter Password");
        } else {
            if(allMail.includes(email)){
                var index = allMail.indexOf(email);
                if(password == data[index].password && data[index].active == 1){
                    localStorage.setItem("currantUser",data[index].fname+" "+data[index].lname);
                    alert("Login Succesful");
                    login.attr("type","submit");
                } else if(data[index].active == 0){
                    alert("User is suspended");
                } else {
                    alert("Password is Wrong");
                }
                console.log(index);
            } else {
                alert("Wrong Email-id");
            }
        }
    })

    $("#busSearch").click(function(){
        alert("please Login");
       
    })

})
