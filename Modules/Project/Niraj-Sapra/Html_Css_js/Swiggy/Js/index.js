window.onload = () => {
  citynameshow();
  storepassword();
}
function storepassword(){
  password = JSON.parse(localStorage.getItem('loginwithsignup')) || [];
  
  if(password.length<1){
  fetch ("Js/loginpassword.json")
  .then(x => x.text())
  .then(y => localStorage.setItem("loginwithsignup", y));
  }
    
}
function citynameshow(){ 
var lines = document.getElementById('citydynamic');
var citylist = JSON.parse(localStorage.getItem('citylist'));
var str = "";
for(i = 0; i<citylist.length ; i++){
 str +="<div class='col-md-3 col-lg-3 float-left colforuse mt-4 px-5'>"+citylist[i].cityname+"</div>"
}
lines.innerHTML += str;
}
function login(){
    var typeofuser = document.getElementById('typeofuser').value;
    var loginphonenumber = document.getElementById('mobilenologin').value;
    var loginpassword = document.getElementById('passwords').value; 
    var loginphoneno = /^\d{10}$/;
    $(document).ready(function(){
      $("#mobilenologin,#passwords").focus(function(){
        $("#validdata").hide();
      });
    });
    


    if(loginphoneno.test(loginphonenumber)== "false" || loginphonenumber == ""){
      document.getElementById('loginphoneno').style.color = "red";
      return false;
    }
    else if(loginpassword == ""){
        document.getElementById('loginpass').style.color= "red";
        return false;
      }
    else
    {
    var loginwithsignup = JSON.parse(localStorage.getItem("loginwithsignup"));
    for(i=0;i<loginwithsignup.length;i++)
      
    {    
        if(loginwithsignup[i].visitortype == "admin" && loginwithsignup[i].mobileno == loginphonenumber && loginwithsignup[i].password == loginpassword)
        {
              location.href='admin/html/admin.html';
              alert("Login successfully Adminpenal");
              break;
        }
        else if(loginwithsignup[i].visitortype == "user" && loginwithsignup[i].mobileno == loginphonenumber && loginwithsignup[i].password == loginpassword)
        {
              location.href='user/html/home.html';
              alert("Login successfully Homepage");
              break;
        }
        else{
          $("#validdata").show();
        }
      }
    } 
}
function signup(){
  var typeofuser = document.getElementById('typeofuser').value;
  var signupmobileno = document.getElementById('mobileno').value;
  var signupname = document.getElementById('name').value;
  var signupemail = document.getElementById('email').value;
  var signuppassword = document.getElementById('pwd').value;   
  var loginphoneno = /^\d{10}$/;
    var password = localStorage.getItem("password");
    if(loginphoneno.test(signupmobileno)== "false" || signupmobileno == ""){
      document.getElementById('signphoneno').style.color = "red";
      return false;
    }
    else if(signupname == ""){
      document.getElementById('signname').style.color= "red";
      return false;
    }
    else if(signupemail == ""){
      document.getElementById('signemail').style.color= "red";
      return false;
    }
    else if(signuppassword == ""){
        document.getElementById('signpassword').style.color= "red";
        return false;
      }
    else{ 
    var password ;
    var signupdataob = {
      "visitortype" :typeofuser,
      "mobileno" :signupmobileno,
      "name" :signupname,
      "email" :signupemail,
      "password" :signuppassword,
    }
    password = JSON.parse(localStorage.getItem('loginwithsignup')) || [];
    password.push(signupdataob);
    localStorage.setItem('loginwithsignup',JSON.stringify(password));
    alert("Register successfully");
    location.href='index.html';
  }
}