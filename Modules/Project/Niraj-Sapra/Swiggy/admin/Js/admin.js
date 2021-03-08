window.onload = () => {
    show();
}
function show(){
 var table = document.getElementById('my_table');
 var list = JSON.parse(localStorage.getItem('loginwithsignup'));
var str = "";
 for(i = 0; i<list.length ; i++){
   var no = i+1;
  str +="<tr class='my-5'><td>"+no+"</td><td>"+list[i].visitortype+"</td><td>"+list[i].name+"</td><td>"+list[i].email+"</td><td>"+list[i].mobileno+"</td><td>"+list[i].password+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>"
}
table.innerHTML += str;
}
function deleterow(index){
  var list = JSON.parse(localStorage.getItem('loginwithsignup'));
   list.splice(index,1);
   localStorage.setItem('loginwithsignup',JSON.stringify(list));
   location.reload();
}
function updaterow(index){
  var list = JSON.parse(localStorage.getItem('loginwithsignup'));
  $(document).ready(function(){
    $("#AddModal").show();
    $("#closes").click(function(){
      $("#AddModal").hide();
    });
    
    $("#id").val(index+1);
    $("#name").val(list[index].name);
    $("#mobileno").val(list[index].mobileno);
    $("#email").val(list[index].email);
    $("#password").val(list[index].password);
  });
}
function setupdatedata(){
  listid = $("#id").val()-1;
  var list = JSON.parse(localStorage.getItem('loginwithsignup'));
  list[listid].name = $("#name").val();
  list[listid].mobileno = $("#mobileno").val();
  list[listid].email = $("#email").val();
  list[listid].password = $("#password").val();
  $(document).ready(function (){
    $("#name,#mobileno,#email,#password").focus(function(){
      $("#names,#phones,#emailids,#passwords").hide();
    });
  });
  alert(list[listid].name);
  if((list[listid].name == "") || (list[listid].mobileno == "") || (list[listid].email == "") || (list[listid].password == "") ){
    alert("blank");
    $("#names,#phones,#emailids,#passwords").show();
    return false;
  }
   else{
    $(document).ready(function (){
     $("#name,#mobileno,#email,#password").blur(function(){
       $("#names,#phones,#emailids,#passwords").hide();
     });
   });
  } 
  localStorage.setItem('loginwithsignup',JSON.stringify(list));
  alert("Update Data Successfully")
  return true;
}
function Insertrow(){
  listid = $("#id").val()-1;
  var list = JSON.parse(localStorage.getItem('loginwithsignup'));
  list[listid].name = $("#name").val();
  list[listid].mobileno = $("#mobileno").val();
  list[listid].email = $("#email").val();
  list[listid].password = $("#password").val();  
  $(document).ready(function (){
    $("#newname,#newmobileno,#newemail,#newpassword").focus(function(){
      $("#name,#phpneno,#valemail,#valpass").hide();
    });
  });
  if((list[listid].name == "") || (list[listid].mobileno == "") || (list[listid].email == "") || (list[listid].password == "") ){
    alert("enter");
    $("#name,#phpneno,#valemail,#valpass").show();
    return false;
  }
   else{
    $(document).ready(function (){
     $("#newname,#newmobileno,#newemail,#newpassword").blur(function(){
       $("#name,#phpneno,#valemail,#valpass").hide();
     });
   });
  }
  localStorage.setItem('loginwithsignup',JSON.stringify(list));
  alert("Update Data Successfully")
  return true;
} 
function Adduser(){
  
  $(document).ready(function (){
    $('#Adduser').show();
    
  });
  return false;
}
function Close(id){
  alert("newaddcity");    
      $(id).hide();
}
function Addnewuser(){
  
  var list;
  var signupdataob = {
    "id" : 0,
    "visitortype" : $("#newtypeuser").val(),
    "mobileno" :$("#newmobileno").val(),
    "name" :$("#newname").val(),
    "email" :$("#newemail").val(),
    "password" :$("#newpassword").val(),
  }
  $(document).ready(function (){
    $("#newname,#newmobileno,#newemail,#newpassword").focus(function(){
      $("#name,#phpneno,#valemail,#valpass").hide();
    });
  });
  if((name == "") || (mobileno == "") || (email == "") || (password == "") ){
    alert("enter");
    $("#name,#phpneno,#valemail,#valpass").show();
    return false;
  }
   else{
    $(document).ready(function (){
     $("#newname,#newmobileno,#newemail,#newpassword").blur(function(){
       $("#name,#phpneno,#valemail,#valpass").hide();
     });
   });
  }
  list=JSON.parse(localStorage.getItem('loginwithsignup')) || [];
  list.push(signupdataob);     
  signupdataob=JSON.stringify(list);
  localStorage.setItem('loginwithsignup',signupdataob);
  alert("Register New user successfully");
  return true;
}