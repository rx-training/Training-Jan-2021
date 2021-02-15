window.onload = () => {
    citynames();
    show();
}
function show(){
 var table = document.getElementById('my_table');
 var list = JSON.parse(localStorage.getItem('reslist'));
var str = "";
 for(i = 0; i<list.length ; i++){
   var no = i+1;
  str +="<tr class='my-5'><td>"+no+"</td><td>"+list[i].city+"</td><td>"+list[i].resname+"</td><td>"+list[i].resoffer1+"</td><td>"+list[i].resoffer1+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' class='modal' id='AddModal' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>";
}
table.innerHTML += str;
}
function deleterow(index){
  var reslist = JSON.parse(localStorage.getItem('reslist'));
   reslist.splice(index,1);
   localStorage.setItem('reslist',JSON.stringify(reslist));
   location.reload();
}
function updaterow(index){
  var reslist = JSON.parse(localStorage.getItem('reslist'));
  $(document).ready(function(){
    $("#AddModal").show();
    $("#closes").click(function(){
      $("#AddModal").hide();
    });
    alert("resimg");
    $("#uid").val(index+1);
    $("#unewresname").val(reslist[index].resname);
    $("#ufoodtype").val(reslist[index].foodtype);
    $("#uprice").val(reslist[index].twopersonprice);
    $("#uoffer1").val(reslist[index].resoffer1);
    $("#uoffer2").val(reslist[index].resoffer2);  
});
}
function setupdatedata(){
  listid = $("#uid").val()-1;
  var reslist = JSON.parse(localStorage.getItem('reslist'));
  reslist[listid].resname = $("#unewresname").val();
  reslist[listid].foodtype = $("#ufoodtype").val();
  reslist[listid].twopersonprice = $("#uprice").val();
  reslist[listid].resoffer1 = $("#uoffer1").val();
  reslist[listid].resoffer2 = $("#uoffer2").val();
  localStorage.setItem('reslist',JSON.stringify(reslist));
  alert("Update Restrauants Data Successfully")
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
function citynames(){
 var citynameslist = document.getElementById('citynameslist');
 var citylist = JSON.parse(localStorage.getItem('citylist'));
    var str = "";
     for(i = 0; i<citylist.length ; i++){
     str +="<option value="+citylist[i].cityname+">"+citylist[i].cityname+"</option>";
    //str +="<tr class='my-5'><td>"+no+"</td><td>"+list[i].visitortype+"</td><td>"+list[i].name+"</td><td>"+list[i].email+"</td><td>"+list[i].mobileno+"</td><td>"+list[i].password+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>"
    }
    citynameslist.innerHTML += str;
}
function Addnewrestorent(){
    var reslist;
    var file = document.getElementById("file").files;
    file = file[0].name;
    var imagelink = "../../img/Categories/Restaurants/" + file;
    var resdataob = {
        "city" : $("#citynameslist").val(),
        "resname" : $("#newresname").val(),
        "foodtype" : $("#newfoodtype").val(),
        "twopersonprice" : $("#newprice").val(),
        "resoffer1" : $("#newoffer1").val(),
        "resoffer2" : $("#newoffer2").val(),
        "resimg" : imagelink,
    }
  reslist = JSON.parse(localStorage.getItem('reslist')) || [];
  reslist.push(resdataob);     
  resdataob = JSON.stringify(reslist);
  localStorage.setItem('reslist',resdataob);
  alert("Register New Restorent successfully");
  return true;
}