window.onload = () => {
    productshow();
  }
  function productshow(){ 
   
    var lines = document.getElementById('dynemicproduct');
   
    var productlist = JSON.parse( localStorage.getItem('dataofproducts'));
   
    var str = "";
    for(i = 0; i<productlist.length ; i++){
     str +="<hr class='col-lg-11 float-left'><div class='product'><div class='col-lg-8 displayshow float-left'><div class='h4'>"+productlist[i].Name+"</div><div><button class='float-right btn btn-sucess'>ADD</button></div><div class='h5'>"+productlist[i].Price+"</div><div>get good food woth </div></div><div class=''><img class='imgprod' src='"+productlist[i].file+"' alt='images'></div></div></div>"
    }
    lines.innerHTML += str;
    }

    