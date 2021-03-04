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
     for(i = 0; i<list.productsdata.length ; i++){   
        var no = i+1;
     str +="<tr class='my-5'><td>"+no+"</td><td>"+list.productsdata[i].Name+"</td><td>"+list.productsdata[i].Price+"</td><td>"+"<button class='btn btn-danger deletebtn' onclick='deleterow("+i+")'><i class='fas fa-trash-alt'></i>delete</button>"+"</td><td>"+"<button class='btn btn-warning deletebtn' class='modal' id='AddModal' onclick='updaterow("+i+")'><i class='fas fa-trash-alt'></i>Update</button>"+"</td></tr><br>";
   }
   table.innerHTML += str;
   }
   