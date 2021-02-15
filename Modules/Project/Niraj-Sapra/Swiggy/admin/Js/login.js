var useridsignup = document.getElementById('useridsignup').value;
var pwdsignup = document.getElementById('pwdsignup').value;
var phoneno = document.getElementById('phoneno').value;
var emilid = document.getElementById('emilid').value;
$(document).ready(function(){
    $("#linklogin").click(function(){
      $("#login").show();
      $("#signup").hide();
    });
    $("#linksignup").click(function(){
      $("#login").hide();
      $("#signup").show();
    });
  });

function AdminSignup(){ 
    var object = {
        'adminuserid' : useridsignup,
        'adminpassword' : pwdsignup,
        'adminphoneno' : phoneno,
        'emailid' : emailid
    }
    admin =JSON.parse(localStorage.getItem('object'))
    return false;
}