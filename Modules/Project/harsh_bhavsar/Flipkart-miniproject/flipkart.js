$(document).ready(function () {
        // to hide login modal
        $("#radio1").click(function () {
            $("#login").modal("hide");
        });

        $("#radio2").click(function () {
            $("#login").modal("hide");
        });
         
        // to hide user login modal
        $("#reg_btn").click(function () {
            $("#userModal").modal("hide");
        });
    });

        $(document).ready(function () {
            // Activate Carousel
            $("#slider").carousel();

            // Enable Carousel Indicators
            $(".item1").click(function () {
                $("#slider").carousel(0);
            });
            $(".item2").click(function () {
                $("#slider").carousel(1);
            });
            $(".item3").click(function () {
                $("#slider").carousel(2);
            });

            // Enable Carousel Controls
            $(".carousel-control-prev").click(function () {
                $("#slider").carousel("prev");
            });
            $(".carousel-control-next").click(function () {
                $("#slider").carousel("next");
            });
        });

       function validate()
    {
        var username = document.getElementById('adusername').value;
        var password = document.getElementById('adpassword').value;

        if( username == "bharsh308@gmail.com" && password == "9409383340" )
        {
            window.open("admin.html");
            return false;
        }
        else{
            alert('incorrect username or password');
            return false;
        }
    }

    function login()
    {
        var uname = document.getElementById('username').value;
        var pass = document.getElementById('password').value;

        if( uname == "9409383340" && pass == "123456" )
        {
            window.open("user.html");
            return false;
        }
        else{
            alert('incorrect username or password');
            return false;
        }
    }

    // for register

    function initiate()
        {
            var loginButton = document.getElementById('check');
            
         
            loginButton.addEventListener('click', (event) =>{
                event.preventDefault();
                signup();
            });
           
         
            
        }

         window.onload = function(){
            var product ={"details":[{
                "name" :"harsh",
                
                "phone" : "9409383340",
                "email" : "bharsh308@gmail.com",
                "password" : 123456,
                "confirmpassword" : 123456 
            }]}
            localStorage.setItem("details",JSON.stringify(product));
        }
        function signup()
        {
        var username = document.getElementById('regname').value;
        
        var phone = document.getElementById('c_no').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('regpassword').value;
        var confirmpassword = document.getElementById('repassword').value;
        
        
        
           
           /* var str="<tr><td>name</td><td>email</td><td>phone</td><td>password</td><td>confirmpassword</td></tr>";
            for(var i=0; i < Arr.details.length ; i++){
                str +="<tr><td>"+Arr.details[i].regname+"</td><td>"+Arr.details[i].c_no+"</td><td>"+Arr.details[i].email+"</td><td>"+Arr.details[i].regpassword+"</td><td>"+Arr.details[i].repassword +"</td><tr>"
            }*/

           
        

    
        

    
    
        var mob_pat = /^([0-9]{10})$/;
        var email_pat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var res1 = mob_pat.test(phone);
        var res2 = email_pat.test(email);
        var res3 = password.localeCompare(confirmpassword);
        var name = document.getElementById("")
       
       
        if (username==="")
        {
            document.getElementById("name").innerHTML="Please enter name <br>";
            
        }
        if (res1===false)
        {
            document.getElementById("cont").innerHTML="Please enter 10 digit contact no. <br>";
            
        }
        if (res2 === false )
        {
            document.getElementById("emailid").innerHTML="Please enter proper email Id <br>";
            
        }
    
         if (password==="")
        {
            document.getElementById("pwd").innerHTML="Please enter password <br>";
            
        }
        if (confirmpassword==="")
        {
            document.getElementById("repwd").innerHTML="Reenter password <br>";
            
        }
        else if (res3 != 0)
        {
            document.getElementById("repwd").innerHTML="confirm password is not matched <br>";
            
        }
        else{
            var Arr = JSON.parse(localStorage.getItem("details"));
           

           var admin = {
                "name" :username,
               
                "phone" : phone,
                "email" : email,
                "password" : password,
                "confirmpassword" : confirmpassword 
            }
            Arr.details.push(admin);
            object = JSON.stringify(Arr)
            localStorage.setItem("Arr",object);
            console.log(Arr);
            alert("Register Successfully ");
            window.open("user.html");
        }

    
        }
        
        addEventListener('load' , initiate);

    

    