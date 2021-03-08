window.onload = () => {
    callauto();
    show();
}
function callauto(){
  var productlists = (localStorage.getItem('dataofproducts'));
  if(productlists == null){
fetch ("../js/product.json")
        .then(x => x.text())
        .then(z =>(localStorage.setItem("dataofproducts", z)));
  }
    
}
function logout(){
    location.href = '../../index.html';
    return true;
  }
function show(){
   var table = document.getElementById('my_table');
   var list = JSON.parse(localStorage.getItem('dataofproducts'));   
   var str = "";
     for(i = 0; i<list.length ; i++){   
        var no = i+1;
     str +="<tr class='my-5'><td>"+no+"</td><td>"+list[i].Name+"</td><td>"+list[i].Price+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' class='modal' id='AddModal' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>";
   }
   table.innerHTML += str;
   }
   function deleterow(index){
    var prodlist = JSON.parse(localStorage.getItem('dataofproducts'));
    prodlist.splice(index,1);
     localStorage.setItem('dataofproducts',JSON.stringify(prodlist));
     location.reload();
  }
  function updaterow(index){
    var prodlist = JSON.parse(localStorage.getItem('dataofproducts'));
    $(document).ready(function(){
      $("#AddModal").show();
      $("#closes").click(function(){
        $("#AddModal").hide();
      });
      $("#uid").val(index);
      $("#uproname").val(prodlist[index].Name);
      $("#uproprice").val(prodlist[index].Price);  
  });
  }

   function Addnewproduct(){
    var prodlist;
    var file = document.getElementById("file").files;
    file = file[0].name;
    var imagelink = "../../img/Categories/Restaurants/" + file;
      var proddataob = {
          "Name" : $("#newproname").val(),
          "Price" : $("#newproprice").val(),
          "file" :  imagelink
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
    prodlist = JSON.parse(localStorage.getItem('dataofproducts')) || [];
    prodlist.push(proddataob);     
    
    localStorage.setItem('dataofproducts',JSON.stringify(prodlist));
    alert("Register New Restorent successfully");
    return true;
  }


  function updateproduct(){
    listid = $("#uid").val();
    
    var prodlist = JSON.parse(localStorage.getItem('dataofproducts'));
    
    prodlist[listid].Name = $("#uproname").val();
    prodlist[listid].Price = $("#uproprice").val();
    $(document).ready(function (){
      $("#uproname,#uproprice").focus(function(){
        $("#name,#phpneno").hide();
      });
    });
    if(($("uproname").val() == "") || ($("#uproprice").val() == "")){
      $("#name,#phpneno").show();
      return false;
    }
     else{
      $(document).ready(function (){
       $("#uproname,#uproprice").blur(function(){
         $("#name,#phpneno").hide();
       });
     });
    }
    localStorage.setItem('dataofproducts',JSON.stringify(prodlist));
    alert("Update Restrauants Data Successfully")
    return true;
  }   