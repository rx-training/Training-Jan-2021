window.onload = () => {
  citynameshow();
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
    var list = JSON.parse(localStorage.getItem("list"));
    alert("data"+loginphonenumber+" "+loginpassword+" "+typeofuser);  
    for(i=0;i<list.length;i++)
      {    
        if(list[i].visitortype == "admin" && list[i].mobileno == loginphonenumber && list[i].password == loginpassword)
        {
              location.href='admin/html/admin.html';
              alert("Login successfully Adminpenal");
              break;
        }
        else if(list[i].visitortype == "user" && list[i].mobileno == loginphonenumber && list[i].password == loginpassword)
        {
              location.href='user/html/home.html';
              alert("Login successfully Homepage");
              break;
        }
      }
      //alert("enter valid data");
    } 
}
function signup(){
  var typeofuser = document.getElementById('typeofuser').value;
  var signupmobileno = document.getElementById('mobileno').value;
  var signupname = document.getElementById('name').value;
  var signupemail = document.getElementById('email').value;
  var signuppassword = document.getElementById('pwd').value;   
  var loginphoneno = /^\d{10}$/;
  var id= 0;
    var list = localStorage.getItem("list");
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
    var list ;
    var signupdataob = {
      "id" : id,
      "visitortype" :typeofuser,
      "mobileno" :signupmobileno,
      "name" :signupname,
      "email" :signupemail,
      "password" :signuppassword,
    }
    list=JSON.parse(localStorage.getItem('list')) || [];
    list.push(signupdataob);
    signupdataob=JSON.stringify(list);
    localStorage.setItem('list',signupdataob);
    alert("Register successfully");
    location.href='index.html';
  }
}