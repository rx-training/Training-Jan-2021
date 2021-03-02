window.onload = () => {
    callauto();
    show();
}
function callauto(){
    fetch ("../js/product.json")
        .then(x => x.text())
        .then(y => document.getElementById("productshow").innerHTML = y)
        .then(z => localStorage.setItem("dataofproducts", z));
}
function logout(){
    location.href = '../../index.html';
    return true;
  }
function show(){
   var table = document.getElementById('my_table');
   var list = JSON.parse(localStorage.getItem('dataofproducts'));   
   var str = "";
//    for(item in list.productsdata){
//     rowdata = list.productsdata[item];
//     alert(rowdata.Name);   
//     var no = i+1;
//  str +="<tr class='my-5'><td>"+no+"</td><td>"+list[i].Name+"</td><td>"+list[i].Price+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' class='modal' id='AddModal' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>";
// }
alert(list.length);
     for(i = 0; i<list.productsdata.length ; i++){   
        var no = i+1;
     str +="<tr class='my-5'><td>"+no+"</td><td>"+list.productsdata[i].Name+"</td><td>"+list.productsdata[i].Price+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' class='modal' id='AddModal' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>";
   }
   table.innerHTML += str;
   }
   function Addnewproduct(){
    var prodlist;
      var productob = {
          "proname" : $("#newproname").val(),
          "proprice" : $("#newproprice").val()
      }
      $(document).ready(function (){
        $("#newproname,#newproprice").focus(function(){
          $("#proname,#proprice").hide();
        });
      });
      if(($("#newproname").val() == "") || ($("#newproprice").val() == "")){
        $("#proname,#proprice").show();
        return false;
      }
       else{
        $(document).ready(function (){
         $("#newproname,#newproprice").blur(function(){
           $("#proname,#proprice").hide();
         });
       });
      }
      alert("show");
    //prodlist = JSON.parse(localStorage.getItem('dataofjson')) || [];
    prodlist = localStorage.getItem('dataofjson') || [];
    alert("show2"+prodlist.productsdata.length);
    prodlist.push(productob);     
    //resdataob = JSON.stringify(prodlist);
    alert("show3");
    localStorage.setItem('dataofjson',JSON.stringify(prodlist));
    alert("Register New Restorent successfully");
    return true;
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