window.onload = () => {
    citytableshow();
}
function citytableshow(){ 
 var table = document.getElementById('my_table');
 var citylist = JSON.parse(localStorage.getItem('citylist'));
var str = "";
 for(i = 0; i<citylist.length ; i++){
   var no = i+1;
  str +="<tr class='my-5'><td>"+no+"</td><td>"+citylist[i].cityname+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>"
}
table.innerHTML += str;
}
function deleterow(index){
  var citylist = JSON.parse(localStorage.getItem('citylist'));
   citylist.splice(index,1);
   localStorage.setItem('citylist',JSON.stringify(citylist));
   location.reload();
}
function updaterow(index){
  var citylist = JSON.parse(localStorage.getItem('citylist'));
  $(document).ready(function(){
    $("#AddModal").show();
    $("#closes").click(function(){
      $("#AddModal").hide();
    });
    $("#idup").val(index);
    $("#citynameup").val(citylist[index].cityname);
  });
}
function setupdatedata(){
  alert("update");
  listid = $("#idup").val();
  console.log(listid);
  var citylist = JSON.parse(localStorage.getItem('citylist'));
  citylist[listid].cityname = $("#citynameup").val();  
  alert(citylist[listid].cityname);
  localStorage.setItem('citylist',JSON.stringify(citylist));
  alert("Update City Data Successfully")
  return true;
}
function AddCity(){
  $(document).ready(function (){
    $('#AddCity').show();
  });
  return false;
}
function Close(id){
  alert("newaddcity");    
      $(id).hide();
}
function Addnewcity(){
  var citylist;
  var cityob = {
    "cityname" : $("#citynamead").val(),
  }
  citylist = JSON.parse(localStorage.getItem('citylist')) || [];
  citylist.push(cityob);     
  cityob=JSON.stringify(citylist);
  localStorage.setItem('citylist',cityob);
  alert("Register New City successfully");
  return true;
}