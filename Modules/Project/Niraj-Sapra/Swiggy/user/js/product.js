window.onload = () => {
    productshow();
  }
  function productshow(){ 
    var lines = document.getElementById('dynemicproduct');
    var productlist = JSON.parse(localStorage.getItem('dataofproducts'));
    var str = "";
    for(i = 0; i<productlist.productsdata.length ; i++){
     str +="<hr class='col-9 float-left'><div class='product'><div class='w-50 displayshow'><div class='h4 float-left'>"+productlist.productsdata[i].Name+"</div><div><button class='float-right btn btn-sucess'>ADD</button></div></div><div class='h5'>"+productlist.productsdata[i].Price+"</div><div>get good food woth </div></div>"
    }
    lines.innerHTML += str;
    }